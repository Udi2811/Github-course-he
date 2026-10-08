/* ====================================================================
   assistant.js — עוזר לימודי בעברית (תשובות מוכנות לפי נושא)
   מבנה מוכן לחיבור עתידי למודל AI דרך Backend מאובטח.
   ==================================================================== */
(function () {
  "use strict";

  var panel, body, actions, fab, closeBtn, wrap;

  var MENU = [
    { key: "explain", label: "🧠 הסבר את הנושא בפשטות" },
    { key: "example", label: "💡 תן לי דוגמה" },
    { key: "hint",    label: "🔍 תן לי רמז" },
    { key: "mistake", label: "⚠️ הסבר טעות נפוצה" },
    { key: "quiz",    label: "❓ בחן אותי" },
    { key: "challenge", label: "🔥 תן לי אתגר נוסף" },
    { key: "github",  label: "🐙 עזור לי לבצע ב-GitHub" },
  ];

  function currentLesson() {
    var id = window.CURRENT_LESSON_ID;
    return id && window.LESSONS ? window.LESSONS[id] : null;
  }

  function respond(key) {
    var L = currentLesson();
    if (!L) {
      return "אני כאן כדי לעזור! כנס לשיעור כלשהו ואוכל להסביר, לתת דוגמאות, רמזים ואתגרים הקשורים אליו. בינתיים — אפשר להתחיל מ'מפת הקורס'.";
    }
    switch (key) {
      case "explain":
        return "<strong>" + L.title + "</strong><br>" +
          "מטרת השיעור: " + L.objectives[0] + ".<br><br>" +
          stripTags(firstParagraph(L.explanation));
      case "example":
        return L.terms && L.terms[0]
          ? "<strong>דוגמה (" + L.terms[0].en + "):</strong><br>" + L.terms[0].example
          : "נסה ליישם את מה שלמדת על פרויקט קטן משלך.";
      case "hint":
        return L.selfExercise && L.selfExercise.hints && L.selfExercise.hints.length
          ? "💡 " + L.selfExercise.hints[0]
          : "חשוב על ההבדל בין מה שרץ מקומית למה שרץ בענן.";
      case "mistake":
        return L.commonMistakes && L.commonMistakes.length
          ? "⚠️ טעות נפוצה: " + L.commonMistakes[0] + "<br><br>איך מתקנים: " +
            (L.fixes && L.fixes[0] ? L.fixes[0] : "קרא שוב את ההסבר ונסה שוב.")
          : "היזהר מבלבול בין המונחים — חזור על ההגדרות.";
      case "quiz":
        if (L.knowledgeQuiz && L.knowledgeQuiz.length) {
          var q = L.knowledgeQuiz[0];
          var opts = q.options.map(function (o, i) { return (i + 1) + ". " + o; }).join("<br>");
          return "<strong>שאלה:</strong> " + q.q + "<br>" + opts +
            "<br><br><em>התשובה הנכונה: " + (q.correct + 1) + " — " + q.explain + "</em>";
        }
        return "נסה להסביר במילים שלך את המונח המרכזי של השיעור.";
      case "challenge":
        return L.selfExercise
          ? "🔥 אתגר: " + L.selfExercise.task
          : "אתגר: צור Repository חדש ותרגל את מה שלמדת.";
      case "github":
        if (L.guidedExercise) {
          var steps = L.guidedExercise.steps.map(function (s, i) { return (i + 1) + ". " + stripTags(s); }).join("<br>");
          return "<strong>צעדים ב-GitHub:</strong><br>" + steps +
            (L.guidedExercise.githubUrl ? '<br><br><a href="' + L.guidedExercise.githubUrl + '" target="_blank" rel="noopener">🐙 פתח את GitHub</a>' : "");
        }
        return "פתח את github.com והתחל לתרגל לפי הוראות השיעור.";
      default:
        return "במה אפשר לעזור?";
    }
  }

  function firstParagraph(html) {
    var m = html.match(/<p>([\s\S]*?)<\/p>/);
    return m ? m[1] : html;
  }
  function stripTags(s) { return String(s).replace(/<[^>]+>/g, ""); }

  function render() {
    body.innerHTML = '<p class="muted">בחר במה תרצה שאעזור:</p>';
    actions.innerHTML = "";
    MENU.forEach(function (item) {
      var btn = document.createElement("button");
      btn.className = "btn secondary sm";
      btn.textContent = item.label;
      btn.addEventListener("click", function () {
        body.innerHTML = respond(item.key);
      });
      actions.appendChild(btn);
    });
  }

  function open() { panel.hidden = false; render(); }
  function close() { panel.hidden = true; }

  function init() {
    wrap = document.getElementById("assistant");
    panel = document.getElementById("assistantPanel");
    body = document.getElementById("assistantBody");
    actions = document.getElementById("assistantActions");
    fab = document.getElementById("assistantFab");
    closeBtn = document.getElementById("assistantClose");
    if (!wrap) return;
    wrap.hidden = false;
    fab.addEventListener("click", function () { panel.hidden ? open() : close(); });
    closeBtn.addEventListener("click", close);
  }

  window.Assistant = { init: init };
})();
