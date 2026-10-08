/* ====================================================================
   app.js — ניתוב (router), דפים ראשיים, Toast, ערכת נושא, אתחול
   ==================================================================== */
(function () {
  "use strict";

  var view = document.getElementById("view");

  /* ---------------- Toast ---------------- */
  var toastEl = document.getElementById("toast");
  var toastTimer;
  window.Toast = {
    show: function (msg, ms) {
      toastEl.innerHTML = msg;
      toastEl.hidden = false;
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { toastEl.hidden = true; }, ms || 2600);
    }
  };

  /* ---------------- Theme ---------------- */
  function applyTheme(t) {
    document.body.setAttribute("data-theme", t);
    document.getElementById("themeToggle").textContent = t === "dark" ? "☀️" : "🌙";
    window.Store.setTheme(t);
  }
  document.getElementById("themeToggle").addEventListener("click", function () {
    var cur = document.body.getAttribute("data-theme");
    applyTheme(cur === "dark" ? "light" : "dark");
  });

  /* ---------------- Nav ---------------- */
  var navEl = document.getElementById("mainNav");
  document.getElementById("navToggle").addEventListener("click", function () {
    navEl.classList.toggle("open");
  });
  navEl.querySelectorAll(".nav-link").forEach(function (b) {
    b.addEventListener("click", function () {
      navEl.classList.remove("open");
      go(b.dataset.route);
    });
  });
  document.getElementById("brandBtn").addEventListener("click", function () { go("home"); });

  function setActiveNav(route) {
    navEl.querySelectorAll(".nav-link").forEach(function (b) {
      b.classList.toggle("active", b.dataset.route === route);
    });
  }

  /* ---------------- Router ---------------- */
  function go(route, param) {
    setActiveNav(route);
    switch (route) {
      case "home": return renderHome();
      case "diagnostic": return renderDiagnostic();
      case "dashboard": return renderDashboard();
      case "map": return renderMap();
      case "about": return renderAbout();
      case "lesson": return renderLesson(param);
      default: return renderHome();
    }
  }
  window.go = go;

  /* ---------------- Home ---------------- */
  function renderHome() {
    var s = window.Store.state;
    var pct = window.Store.completionPercent();
    var continueBtn = (s.diagnosticDone || s.lastLessonId)
      ? '<button class="btn secondary" id="btnContinue">▶️ המשך מהמקום שבו עצרתי</button>' : "";

    view.innerHTML =
      '<section class="hero">' +
        '<h1>קורס GitHub בעברית 🐙</h1>' +
        '<p class="sub">למידה אינטראקטיבית, צעד-אחר-צעד, מהיסודות ועד רמת מומחה — עם תרגול אמיתי ישירות ב-GitHub.com.</p>' +
        '<div class="hero-cta">' +
          '<button class="btn" id="btnStart">🚀 התחל את הקורס</button>' +
          continueBtn +
        '</div>' +
        (pct > 0 ? '<p class="muted" style="margin-top:14px">השלמת ' + pct + '% מהתוכן הזמין</p>' : "") +
      '</section>' +

      '<div class="feature-grid">' +
        feature("🎯", "מה אלמד", "Git, GitHub, Repositories, Commits, Branches, Issues, Pull Requests, Copilot ועוד.") +
        feature("📈", "רמות לימוד", "מתחיל → בסיסי → בינוני → מתקדם → מומחה, עם נעילה הדרגתית.") +
        feature("🛠️", "תרגול אמיתי", "כל תרגיל מתבצע ב-GitHub.com עם צעדים מדויקים ורשימת בדיקה.") +
        feature("🏆", "הישגים", "נקודות, תגים ורצף למידה שישמרו אותך ממוקד.") +
      '</div>' +

      '<section class="card section-gap">' +
        '<h2>🎓 הכישורים שתסיים איתם</h2>' +
        '<ul>' +
          '<li>לעבוד ב-GitHub באופן עצמאי ובטוח</li>' +
          '<li>לנהל פרויקטים: Issues, Branches, Pull Requests, Releases</li>' +
          '<li>להשתמש ב-GitHub Copilot בצורה מקצועית</li>' +
          '<li>לכתוב Prompts איכותיים וליצור Custom Instructions, Agents ו-Skills</li>' +
          '<li>לבנות, לפרסם ולתחזק מערכות שלמות</li>' +
        '</ul>' +
      '</section>';

    document.getElementById("btnStart").addEventListener("click", function () {
      window.Store.state.diagnosticDone ? go("map") : go("diagnostic");
    });
    var cont = document.getElementById("btnContinue");
    if (cont) cont.addEventListener("click", function () {
      if (s.lastLessonId) go("lesson", s.lastLessonId);
      else go("map");
    });
  }

  function feature(ico, title, text) {
    return '<div class="card feature"><div class="ico">' + ico + '</div><h3>' + title + "</h3><p>" + text + "</p></div>";
  }

  /* ---------------- Diagnostic ---------------- */
  function renderDiagnostic() {
    setActiveNav("home");
    view.innerHTML = '<div class="center mb"><h1>🧭 שאלון אבחון</h1>' +
      '<p class="muted">עשר שאלות קצרות כדי להתאים לך את נקודת ההתחלה. אין כאן ציון — רק התאמה.</p></div>' +
      '<div id="quizMount"></div>';
    window.Quiz.start(document.getElementById("quizMount"), function (level) {
      Toast.show("מתחילים ברמה " + level + " — בהצלחה!");
      go("map");
    });
  }

  /* ---------------- Dashboard ---------------- */
  function renderDashboard() {
    var s = window.Store.state;
    var pct = window.Store.completionPercent();
    var done = window.Store.doneCount();
    var totalBuilt = window.Store.builtLessonIds().length;

    var badgesHtml = (window.BADGES || []).map(function (b) {
      var earned = window.Store.hasBadge(b.id);
      return '<div class="badge-chip' + (earned ? "" : " locked") + '" title="' + b.desc + '">' +
        '<span class="b-ico">' + b.icon + '</span><span>' + b.name + "</span></div>";
    }).join("");

    var nextLesson = findNextLesson();
    var nextHtml = nextLesson
      ? '<button class="btn" id="btnNextLesson">▶️ ' + nextLesson.title + "</button>"
      : '<p class="muted">כל התוכן הזמין הושלם 🎉</p>';

    view.innerHTML =
      '<h1>📊 לוח התקדמות</h1>' +
      '<section class="card section-gap">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">' +
          '<strong>התקדמות כוללת</strong><span class="muted">' + pct + '%</span>' +
        '</div>' +
        '<div class="progress-wrap"><div class="progress-bar" style="width:' + pct + '%"></div></div>' +
      '</section>' +

      '<section class="stat-grid section-gap">' +
        stat(done + "/" + totalBuilt, "שיעורים שהושלמו") +
        stat(s.points, "נקודות") +
        stat(window.Game.userLevel(), "רמת לומד") +
        stat(s.badges.length, "תגים") +
      '</section>' +

      '<section class="card section-gap">' +
        '<h3>🧭 השלב הנוכחי</h3>' +
        '<p>רמה מומלצת: <strong>' + s.recommendedLevel + " · " + window.LEVELS[s.recommendedLevel-1].name + "</strong></p>" +
        '<h3 style="margin-top:14px">⏭️ השיעור הבא המומלץ</h3>' + nextHtml +
      '</section>' +

      '<section class="card section-gap">' +
        '<h3>🏅 תגים והישגים</h3>' +
        '<div class="badge-grid">' + badgesHtml + "</div>" +
      '</section>' +

      '<section class="card section-gap">' +
        '<h3>⚙️ הגדרות</h3>' +
        '<div class="btn-row">' +
          '<button class="btn secondary" id="btnAdmin">' + (s.adminUnlock ? "🔓 מצב מנהל: פעיל" : "🔒 מצב מנהל: כבוי") + "</button>" +
          '<button class="btn secondary" id="btnReset">🗑️ אפס התקדמות</button>' +
        '</div>' +
        '<p class="muted" style="margin-top:8px">מצב מנהל פותח את כל השיעורים לבדיקה, גם אם לא הושלמו התנאים.</p>' +
      '</section>';

    var nl = document.getElementById("btnNextLesson");
    if (nl) nl.addEventListener("click", function () { go("lesson", nextLesson.id); });

    document.getElementById("btnAdmin").addEventListener("click", function () {
      window.Store.setAdminUnlock(!window.Store.state.adminUnlock);
      renderDashboard();
      Toast.show(window.Store.state.adminUnlock ? "מצב מנהל הופעל" : "מצב מנהל כובה");
    });
    document.getElementById("btnReset").addEventListener("click", function () {
      if (confirm("לאפס את כל ההתקדמות? פעולה זו אינה הפיכה.")) {
        window.Store.resetAll();
        applyTheme(window.Store.state.theme);
        Toast.show("ההתקדמות אופסה");
        go("home");
      }
    });
  }

  function stat(num, lbl) {
    return '<div class="card stat"><div class="num">' + num + '</div><div class="lbl">' + lbl + "</div></div>";
  }

  /* ---------------- Course Map ---------------- */
  function renderMap() {
    var html = '<h1>🗺️ מפת הקורס</h1>' +
      '<p class="muted mb">מסלול: מתחיל → בסיסי → בינוני → מתקדם → מומחה. שיעור בנוי נפתח בלחיצה; רמות ננעלות עד השלמת הקודמת.</p>' +
      '<div class="levels">';

    window.COURSE_MAP.forEach(function (block) {
      var lvl = window.LEVELS[block.level - 1];
      var unlocked = window.Store.isLevelUnlocked(block.level);
      var rows = block.lessons.map(function (ls) {
        var saved = window.Store.state.lessons[ls.id];
        var done = saved && saved.done;
        var available = ls.built && unlocked;
        var ico = done ? "✅" : (!unlocked ? "🔒" : (ls.built ? "▶️" : "🚧"));
        var meta = !ls.built ? "בבנייה" : (!unlocked ? "נעול" : (done ? "הושלם" : "זמין"));
        var cls = "lesson-row" + (done ? " done" : "") + (available ? "" : " locked");
        return '<button class="' + cls + '" data-id="' + ls.id + '" data-built="' + ls.built + '" data-unlocked="' + unlocked + '">' +
          '<span class="state-ico">' + ico + '</span>' +
          '<span class="l-title">' + ls.id + " · " + ls.title + "</span>" +
          '<span class="l-meta">' + meta + "</span>" +
        "</button>";
      }).join("");

      html += '<section class="card level-block" style="--lvc:' + lvl.color + '">' +
        '<div class="level-head">' +
          '<span class="level-badge">רמה ' + block.level + " · " + lvl.name + "</span>" +
          (unlocked ? "" : '<span class="pill">🔒 נעול</span>') +
        '</div>' +
        '<div class="lesson-list">' + rows + "</div>" +
      "</section>";
    });

    html += "</div>";
    view.innerHTML = html;

    view.querySelectorAll(".lesson-row").forEach(function (row) {
      row.addEventListener("click", function () {
        var id = row.dataset.id;
        var built = row.dataset.built === "true";
        var unlocked = row.dataset.unlocked === "true";
        if (!unlocked) { Toast.show("🔒 השלם את הרמה הקודמת כדי לפתוח (או הפעל מצב מנהל ב-Dashboard)", 4000); return; }
        if (!built) { Toast.show("🚧 שיעור זה בבנייה — ייפתח בגרסה הבאה", 3200); return; }
        go("lesson", id);
      });
    });
  }

  /* ---------------- Lesson ---------------- */
  function renderLesson(id) {
    setActiveNav("map");
    window.LessonView.render(view, id, {
      onBack: function () { go("map"); },
      onNext: function (currentId) {
        var next = findNextLesson(currentId);
        if (next && next.built && window.Store.isLevelUnlocked(next.level)) {
          go("lesson", next.id);
        } else if (next) {
          Toast.show("השיעור הבא עדיין בבנייה — נתראה בגרסה הבאה!", 3500);
          go("map");
        } else {
          Toast.show("סיימת את כל התוכן הזמין! 🎉");
          go("dashboard");
        }
      }
    });
  }

  /* ---------------- Helpers ---------------- */
  function flatLessons() {
    var out = [];
    window.COURSE_MAP.forEach(function (b) {
      b.lessons.forEach(function (l) { out.push({ id: l.id, title: l.title, built: l.built, level: b.level }); });
    });
    return out;
  }

  function findNextLesson(afterId) {
    var all = flatLessons();
    var startIdx = 0;
    if (afterId) {
      var i = all.findIndex(function (l) { return l.id === afterId; });
      startIdx = i + 1;
    }
    // חפש את השיעור הבא שעדיין לא הושלם (עדיפות לבנוי)
    for (var k = startIdx; k < all.length; k++) {
      var saved = window.Store.state.lessons[all[k].id];
      if (!saved || !saved.done) return all[k];
    }
    // אם אחרי המיקום הכול הושלם, חפש מההתחלה שיעור בנוי שלא הושלם
    if (!afterId) {
      for (var j = 0; j < all.length; j++) {
        var sv = window.Store.state.lessons[all[j].id];
        if (all[j].built && (!sv || !sv.done)) return all[j];
      }
    }
    return afterId ? (all[startIdx] || null) : null;
  }

  /* ---------------- About ---------------- */
  function renderAbout() {
    view.innerHTML =
      '<h1>🔐 בטיחות ושקיפות</h1>' +
      '<section class="card section-gap">' +
        '<h3>מה האתר לעולם לא יבקש</h3>' +
        '<ul>' +
          '<li>סיסמת GitHub</li><li>Personal Access Token</li><li>API Key</li>' +
          '<li>מידע סודי או קוד פנימי חסוי</li><li>מידע ארגוני רגיש</li>' +
        '</ul>' +
      '</section>' +
      '<section class="card section-gap">' +
        '<h3>איך מתבצע אימות התרגילים</h3>' +
        '<p>בגרסה זו האתר <strong>אינו</strong> מתחבר ל-GitHub API. לכן האימות הוא <strong>בדיקה עצמית</strong>: רשימת בדיקה שאתה מסמן + שאלת אימות. ' +
        'לעולם לא נציג שהאתר "אימת" פעולה אמיתית מול GitHub אם זה לא קרה.</p>' +
        '<p class="pill">🔎 כל תרגיל מסומן כ"בדיקה עצמית מבוססת תשובות"</p>' +
      '</section>' +
      '<section class="card section-gap">' +
        '<h3>פרטיות ונתונים</h3>' +
        '<p>ההתקדמות נשמרת מקומית בדפדפן שלך בלבד (localStorage). אין שרת ואין שליחת מידע החוצה. ' +
        'המבנה מוכן להרחבה עתידית למשתמשים ומסד נתונים דרך Backend מאובטח.</p>' +
      '</section>';
  }

  /* ---------------- Init ---------------- */
  function init() {
    applyTheme(window.Store.state.theme || "light");
    window.Assistant.init();
    go("home");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
