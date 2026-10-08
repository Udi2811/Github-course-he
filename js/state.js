/* ====================================================================
   state.js — ניהול התקדמות ושמירה ב-localStorage
   מבנה מוכן להרחבה עתידית למשתמשים מרובים / Backend.
   ==================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "githubCourseProgress_v1";

  var defaultState = {
    version: 1,
    user: { id: "local", name: "" },     // מוכן להרחבה למשתמשים
    diagnosticDone: false,
    diagnosticScore: 0,
    recommendedLevel: 1,
    adminUnlock: false,                    // מצב מנהל לפתיחת שיעורים
    points: 0,
    lessons: {},    // { "1.1": { done, confidence, checklist:{}, quizPassed } }
    badges: [],     // ["first_steps", ...]
    lastLessonId: null,
    theme: "light",
    speech: { enabled: true, rate: 1 },
    updatedAt: null,
  };

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(defaultState);
      var parsed = JSON.parse(raw);
      return Object.assign(clone(defaultState), parsed);
    } catch (e) {
      console.warn("שחזור התקדמות נכשל, מתחילים מחדש.", e);
      return clone(defaultState);
    }
  }

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  var state = load();

  function save() {
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("שמירת התקדמות נכשלה (ייתכן ש-localStorage חסום).", e);
    }
  }

  /* ---------- פעולות על שיעורים ---------- */
  function getLesson(id) {
    if (!state.lessons[id]) {
      state.lessons[id] = { done: false, confidence: 0, checklist: {}, quizPassed: false };
    }
    return state.lessons[id];
  }

  function setLessonDone(id, confidence) {
    var l = getLesson(id);
    var wasDone = l.done;
    l.done = true;
    if (confidence) l.confidence = confidence;
    state.lastLessonId = id;
    if (!wasDone) addPoints(50);
    save();
  }

  function setConfidence(id, value) { getLesson(id).confidence = value; save(); }

  function toggleChecklistItem(id, index, checked) {
    var l = getLesson(id);
    l.checklist[index] = checked;
    save();
  }

  function setQuizPassed(id) { getLesson(id).quizPassed = true; addPoints(20); save(); }

  /* ---------- נקודות ותגים ---------- */
  function addPoints(n) { state.points += n; }

  function awardBadge(badgeId) {
    if (!badgeId) return false;
    if (state.badges.indexOf(badgeId) === -1) {
      state.badges.push(badgeId);
      addPoints(30);
      save();
      return true;
    }
    return false;
  }

  function hasBadge(id) { return state.badges.indexOf(id) !== -1; }

  /* ---------- אבחון ---------- */
  function setDiagnostic(score, level) {
    state.diagnosticDone = true;
    state.diagnosticScore = score;
    state.recommendedLevel = level;
    awardBadge("first_steps");
    save();
  }

  /* ---------- נעילת רמות ---------- */
  // רמה נעולה אם לא הושלמו כל השיעורים ה"בנויים" בכל הרמות הקודמות (אלא אם adminUnlock)
  function isLevelUnlocked(levelId) {
    if (state.adminUnlock) return true;
    if (levelId <= 1) return true;
    // כל הרמות הקודמות חייבות להיות מושלמות (השיעורים הבנויים בהן)
    for (var prevLevel = 1; prevLevel < levelId; prevLevel++) {
      var block = (window.COURSE_MAP || []).find(function (b) { return b.level === prevLevel; });
      if (!block) continue;
      var builtLessons = block.lessons.filter(function (l) { return l.built; });
      if (builtLessons.length === 0) {
        // אין תוכן בנוי ברמה קודמת → הרמה הזו עדיין נעולה (התוכן בבנייה)
        return false;
      }
      var allDone = builtLessons.every(function (l) {
        return state.lessons[l.id] && state.lessons[l.id].done;
      });
      if (!allDone) return false;
    }
    return true;
  }

  function isLessonUnlocked(lessonId, levelId) {
    return isLevelUnlocked(levelId);
  }

  /* ---------- התקדמות כוללת ---------- */
  function builtLessonIds() {
    var ids = [];
    (window.COURSE_MAP || []).forEach(function (b) {
      b.lessons.forEach(function (l) { if (l.built) ids.push(l.id); });
    });
    return ids;
  }

  function completionPercent() {
    var built = builtLessonIds();
    if (!built.length) return 0;
    var done = built.filter(function (id) { return state.lessons[id] && state.lessons[id].done; }).length;
    return Math.round((done / built.length) * 100);
  }

  function doneCount() {
    return builtLessonIds().filter(function (id) { return state.lessons[id] && state.lessons[id].done; }).length;
  }

  /* ---------- הגדרות ---------- */
  function setTheme(t) { state.theme = t; save(); }
  function setSpeech(opts) { state.speech = Object.assign(state.speech, opts); save(); }
  function setAdminUnlock(v) { state.adminUnlock = v; save(); }

  function resetAll() {
    state = clone(defaultState);
    save();
  }

  /* ---------- API ציבורי ---------- */
  window.Store = {
    get state() { return state; },
    save: save,
    getLesson: getLesson,
    setLessonDone: setLessonDone,
    setConfidence: setConfidence,
    toggleChecklistItem: toggleChecklistItem,
    setQuizPassed: setQuizPassed,
    addPoints: addPoints,
    awardBadge: awardBadge,
    hasBadge: hasBadge,
    setDiagnostic: setDiagnostic,
    isLevelUnlocked: isLevelUnlocked,
    isLessonUnlocked: isLessonUnlocked,
    builtLessonIds: builtLessonIds,
    completionPercent: completionPercent,
    doneCount: doneCount,
    setTheme: setTheme,
    setSpeech: setSpeech,
    setAdminUnlock: setAdminUnlock,
    resetAll: resetAll,
  };
})();
