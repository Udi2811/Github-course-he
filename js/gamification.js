/* ====================================================================
   gamification.js — נקודות, רמות משתמש ותגים
   ==================================================================== */
(function () {
  "use strict";

  // רמת משתמש לפי נקודות (לצורך תצוגה ועידוד)
  function userLevel() {
    var p = window.Store ? window.Store.state.points : 0;
    return Math.floor(p / 100) + 1;
  }

  function pointsToNext() {
    var p = window.Store ? window.Store.state.points : 0;
    return 100 - (p % 100);
  }

  // בדיקת תגים שנפתחים אוטומטית לפי מצב
  function evaluateBadges() {
    if (!window.Store) return [];
    var newly = [];
    // תג סיום רמה 1
    var lvl1 = (window.COURSE_MAP || []).find(function (b) { return b.level === 1; });
    if (lvl1) {
      var built = lvl1.lessons.filter(function (l) { return l.built; });
      var allDone = built.length > 0 && built.every(function (l) {
        return window.Store.state.lessons[l.id] && window.Store.state.lessons[l.id].done;
      });
      if (allDone && window.Store.awardBadge("level1_done")) newly.push("level1_done");
    }
    return newly;
  }

  function badgeById(id) {
    return (window.BADGES || []).find(function (b) { return b.id === id; });
  }

  window.Game = {
    userLevel: userLevel,
    pointsToNext: pointsToNext,
    evaluateBadges: evaluateBadges,
    badgeById: badgeById,
  };
})();
