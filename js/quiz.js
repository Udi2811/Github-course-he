/* ====================================================================
   quiz.js — שאלון אבחון (שאלה אחת בכל פעם) + חישוב רמה
   ==================================================================== */
(function () {
  "use strict";

  var idx = 0;
  var answers = [];
  var mount, onDone;

  function start(container, onComplete) {
    mount = container;
    onDone = onComplete;
    idx = 0;
    answers = [];
    renderQuestion();
  }

  function renderQuestion() {
    var total = window.QUIZ.length;
    var item = window.QUIZ[idx];
    var selected = answers[idx];

    mount.innerHTML =
      '<div class="card quiz-card">' +
        '<div class="quiz-progress">שאלה ' + (idx + 1) + ' מתוך ' + total + '</div>' +
        '<div class="progress-wrap mb"><div class="progress-bar" style="width:' + Math.round((idx / total) * 100) + '%"></div></div>' +
        '<div class="quiz-q">' + item.q + '</div>' +
        '<div class="answers" id="answers"></div>' +
        '<div class="btn-row" style="margin-top:18px;justify-content:space-between">' +
          '<button class="btn secondary" id="qBack" ' + (idx === 0 ? "disabled" : "") + '>◀ הקודם</button>' +
          '<button class="btn" id="qNext" ' + (selected === undefined ? "disabled" : "") + '>' +
            (idx === total - 1 ? "סיום ✓" : "הבא ▶") +
          '</button>' +
        '</div>' +
      '</div>';

    var ansWrap = document.getElementById("answers");
    item.a.forEach(function (a, i) {
      var b = document.createElement("button");
      b.className = "answer" + (selected === i ? " selected" : "");
      b.textContent = a.t;
      b.addEventListener("click", function () {
        answers[idx] = i;
        renderQuestion();
      });
      ansWrap.appendChild(b);
    });

    document.getElementById("qBack").addEventListener("click", function () {
      if (idx > 0) { idx--; renderQuestion(); }
    });
    document.getElementById("qNext").addEventListener("click", function () {
      if (answers[idx] === undefined) return;
      if (idx < window.QUIZ.length - 1) { idx++; renderQuestion(); }
      else finish();
    });
  }

  function finish() {
    var score = 0;
    answers.forEach(function (ansIdx, qIdx) {
      score += window.QUIZ[qIdx].a[ansIdx].s;
    });
    var maxScore = window.QUIZ.reduce(function (sum, q) {
      return sum + Math.max.apply(null, q.a.map(function (a) { return a.s; }));
    }, 0);
    var ratio = score / maxScore;

    var level = 1;
    if (ratio >= 0.75) level = 4;
    else if (ratio >= 0.5) level = 3;
    else if (ratio >= 0.25) level = 2;
    else level = 1;

    // נקודות חוזק / חולשה לפי שאלות ספציפיות
    var strengths = [], gaps = [];
    var topics = [
      "Git מול GitHub", "יצירת Repository", "ביצוע Commit", "עבודה עם Branches",
      "ניהול Issues", "Pull Request ו-Merge", "שימוש ב-Copilot", "בניית מערכות",
      "פרסום אתר", "Custom Instructions / Agents / Skills"
    ];
    answers.forEach(function (ansIdx, qIdx) {
      var s = window.QUIZ[qIdx].a[ansIdx].s;
      if (s >= 2) strengths.push(topics[qIdx]);
      else gaps.push(topics[qIdx]);
    });

    window.Store.setDiagnostic(score, level);

    renderResult(level, strengths, gaps);
  }

  function renderResult(level, strengths, gaps) {
    var levelName = window.LEVELS[level - 1].name;
    mount.innerHTML =
      '<div class="card quiz-card section-gap">' +
        '<h2>✅ סיימת את שאלון האבחון!</h2>' +
        '<p>על בסיס תשובותיך, הרמה המומלצת להתחלה היא:</p>' +
        '<div class="level-badge" style="--lvc:' + window.LEVELS[level-1].color + ';font-size:1.1rem">רמה ' + level + ' · ' + levelName + '</div>' +
        '<div class="grid-2 mt">' +
          '<div class="card" style="box-shadow:none">' +
            '<h3>💪 נקודות חוזק</h3>' +
            (strengths.length ? "<ul><li>" + strengths.join("</li><li>") + "</li></ul>" : "<p class=\"muted\">נתחיל לבנות אותן יחד.</p>") +
          '</div>' +
          '<div class="card" style="box-shadow:none">' +
            '<h3>📚 נושאים ללמידה</h3>' +
            (gaps.length ? "<ul><li>" + gaps.join("</li><li>") + "</li></ul>" : "<p class=\"muted\">כיסית הכול — כל הכבוד!</p>") +
          '</div>' +
        '</div>' +
        '<div class="callout tip"><div class="c-title">🎒 הרווחת תג: צעדים ראשונים!</div>קיבלת גם נקודות על השלמת האבחון.</div>' +
        '<div class="btn-row">' +
          '<button class="btn" id="goRecommended">התחל מהרמה המומלצת</button>' +
          '<button class="btn secondary" id="goStart">אני מעדיף להתחיל מההתחלה</button>' +
        '</div>' +
      '</div>';

    document.getElementById("goRecommended").addEventListener("click", function () {
      onDone && onDone(level);
    });
    document.getElementById("goStart").addEventListener("click", function () {
      onDone && onDone(1);
    });
  }

  window.Quiz = { start: start };
})();
