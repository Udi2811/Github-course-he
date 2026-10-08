/* ====================================================================
   lessons.js — רינדור שיעור מלא (21 רכיבים) + אינטראקטיביות
   ==================================================================== */
(function () {
  "use strict";

  var mount, lesson, onNext, quizState;

  function levelColor(lvl) {
    var l = window.LEVELS[lvl - 1];
    return l ? l.color : "var(--primary)";
  }

  function render(container, lessonId, opts) {
    opts = opts || {};
    mount = container;
    lesson = window.LESSONS[lessonId];
    onNext = opts.onNext;
    window.CURRENT_LESSON_ID = lessonId;
    quizState = { answered: {}, allPassed: false };

    if (!lesson) {
      mount.innerHTML = '<div class="card"><h2>השיעור בבנייה 🚧</h2>' +
        '<p>שיעור זה ייפתח בגרסה הבאה. בינתיים תוכל להמשיך בשיעורים הזמינים.</p>' +
        '<button class="btn" id="backMap">← חזרה למפת הקורס</button></div>';
      document.getElementById("backMap").addEventListener("click", function () { opts.onBack && opts.onBack(); });
      return;
    }

    var saved = window.Store.getLesson(lessonId);
    var color = levelColor(lesson.level);

    mount.innerHTML = buildHtml(saved, color);
    wireUp(saved, opts);
    window.scrollTo(0, 0);
  }

  function buildHtml(saved, color) {
    var h = '<article class="section-gap" style="--lvc:' + color + '">';

    /* 1-2: כותרת + קושי */
    h += '<header class="lesson-header">' +
      '<span class="lesson-tag">שיעור ' + lesson.id + ' · ' + lesson.difficulty + '</span>' +
      '<h1>' + lesson.title + '</h1>' +
    '</header>';

    /* 6: הסבר קולי */
    h += speechBarHtml();

    /* 3: מטרות */
    h += card("🎯 מטרות הלמידה",
      '<ul><li>' + lesson.objectives.join("</li><li>") + "</li></ul>");

    /* 4: מונחים חדשים */
    var termsHtml = lesson.terms.map(function (t) {
      return '<div class="term">' +
        '<span class="t-en">' + t.en + '</span> — ' + t.he +
        '<div class="muted" style="margin-top:6px;font-size:0.9rem">' +
          '📌 דוגמה: ' + t.example + '<br>' +
          '🕐 מתי: ' + t.when + '<br>' +
          '⚠️ טעות נפוצה: ' + t.mistakes +
        '</div>' +
      '</div>';
    }).join("");
    h += card("📖 מונחים חדשים", termsHtml);

    /* 5: הסבר כתוב */
    h += card("🧠 הסבר", '<div id="explanationBody">' + lesson.explanation + "</div>");

    /* וידאו הסבר (אופציונלי) */
    if (lesson.video) {
      h += card("🎥 סרטון הסבר",
        '<div class="video-facade" data-vid="' + lesson.video.id + '" role="button" tabindex="0" ' +
          'aria-label="נגן סרטון: ' + lesson.video.title + '" ' +
          'style="background-image:url(https://i.ytimg.com/vi/' + lesson.video.id + '/hqdefault.jpg)">' +
          '<span class="video-play">▶</span>' +
        '</div>' +
        '<p class="muted" style="margin-top:8px">' + lesson.video.title + ' · ' + lesson.video.author +
        ' · <a href="https://www.youtube.com/watch?v=' + lesson.video.id + '" target="_blank" rel="noopener">צפייה ב-YouTube</a>' +
        ' <span class="pill">באנגלית</span></p>');
    }

    /* 8: הדגמה ב-GitHub */
    if (lesson.demo) {
      h += card("🎬 הדגמה ב-GitHub",
        '<p class="muted">' + lesson.demo.intro + "</p>" +
        '<ol class="steps"><li>' + lesson.demo.steps.join("</li><li>") + "</li></ol>");
    }

    /* 9: תרגיל מודרך */
    var ge = lesson.guidedExercise;
    var checklistHtml = ge.checklist.map(function (c, i) {
      var checked = saved.checklist[i] ? "checked" : "";
      return '<li><input type="checkbox" class="chk" data-i="' + i + '" ' + checked + '>' +
        '<span>' + c + "</span></li>";
    }).join("");
    h += card("🛠️ תרגיל מודרך — ב-GitHub",
      '<p>' + ge.intro + "</p>" +
      '<ol class="steps"><li>' + ge.steps.join("</li><li>") + "</li></ol>" +
      (ge.githubUrl ? '<div class="btn-row"><a class="btn" href="' + ge.githubUrl + '" target="_blank" rel="noopener">🐙 פתח את GitHub</a></div>' : "") +
      '<div class="callout" style="margin-top:14px"><div class="c-title">רשימת בדיקה</div>' +
        '<ul class="checklist">' + checklistHtml + "</ul></div>" +
      '<div class="callout tip"><div class="c-title">✔️ שאלת אימות</div>' + ge.verify +
        '<input type="text" id="verifyInput" placeholder="כתוב כאן את תשובתך..." ' +
        'style="width:100%;margin-top:8px;padding:10px;border-radius:9px;border:1px solid var(--border);background:var(--surface);color:var(--text)"></div>' +
      '<p class="pill">🔎 בדיקה עצמית — מבוססת על תשובותיך ועל רשימת הבדיקה (אין אימות אוטומטי מול GitHub)</p>');

    /* 10: תרגיל עצמאי + 20: רמזים + 13: פתרון */
    var se = lesson.selfExercise;
    var hintsHtml = se.hints.map(function (hint, i) {
      return '<details class="reveal"><summary>💡 רמז ' + (i + 1) + '</summary><p>' + hint + "</p></details>";
    }).join("");
    h += card("🧩 תרגיל עצמאי",
      '<p>' + se.task + "</p>" + hintsHtml +
      '<details class="reveal"><summary>✅ הצג פתרון מלא (נסה קודם בעצמך)</summary><p>' + se.solution + "</p></details>");

    /* 12: שאלות ידע (אינטראקטיבי) + 13: פתרון מוסבר */
    var kqHtml = lesson.knowledgeQuiz.map(function (q, qi) {
      var opts = q.options.map(function (o, oi) {
        return '<button class="answer kq-opt" data-q="' + qi + '" data-o="' + oi + '">' + o + "</button>";
      }).join("");
      return '<div class="kq-block" style="margin-bottom:16px">' +
        '<div style="font-weight:600;margin-bottom:8px">' + (qi + 1) + ". " + q.q + "</div>" +
        '<div class="answers">' + opts + "</div>" +
        '<div class="kq-feedback" data-q="' + qi + '" style="margin-top:8px"></div>' +
      "</div>";
    }).join("");
    h += card("❓ שאלות ידע", kqHtml);

    /* 14-15: טעויות נפוצות + תיקון */
    h += card("⚠️ טעויות נפוצות ואיך לתקן",
      '<div class="callout warn"><div class="c-title">טעויות נפוצות</div>' +
        '<ul><li>' + lesson.commonMistakes.join("</li><li>") + "</li></ul></div>" +
      '<div class="callout tip"><div class="c-title">איך מתקנים</div>' +
        '<ul><li>' + lesson.fixes.join("</li><li>") + "</li></ul></div>");

    /* 16: סיכום */
    h += card("📝 סיכום השיעור — 5 נקודות",
      '<ol><li>' + lesson.summary.join("</li><li>") + "</li></ol>");

    /* משאבים חיצוניים */
    if (lesson.resources && lesson.resources.length) {
      var res = lesson.resources.map(function (r) {
        return '<a href="' + r.url + '" target="_blank" rel="noopener"><span>' + r.type + "</span><span>" + r.title + "</span></a>";
      }).join("");
      h += card("🔗 מקורות להרחבה", '<div class="resource-links">' + res + "</div>");
    }

    /* דירוג ביטחון */
    h += card("⭐ דרג את הביטחון שלך (1–5)",
      '<p class="muted">כמה אתה מרגיש בטוח בחומר השיעור?</p>' +
      '<div class="confidence" id="confidence">' +
        [1,2,3,4,5].map(function (n) {
          return '<button data-v="' + n + '"' + (saved.confidence === n ? ' class="sel"' : "") + ">" + n + "</button>";
        }).join("") +
      "</div>");

    /* 17-21: כפתורי פעולה */
    h += '<div class="lesson-footer">' +
      '<button class="btn secondary" id="btnExplainAgain">🔁 הסבר שוב</button>' +
      '<button class="btn secondary" id="btnHint">💡 הצג רמז</button>' +
      '<button class="btn success" id="btnCheck">🔎 בדוק אותי</button>' +
      '<button class="btn" id="btnDone">✓ סיימתי את התרגיל</button>' +
      '<button class="btn" id="btnNext" disabled title="השלם את התנאים כדי להמשיך">➡️ לשיעור הבא</button>' +
    "</div>" +
    '<div id="gateMsg" class="pill" style="margin-top:10px">תנאי מעבר: סמן את רשימת הבדיקה, וענה נכון על שאלות הידע.</div>';

    h += "</article>";
    return h;
  }

  function card(title, inner) {
    return '<section class="card lesson-section"><h3>' + title + "</h3>" + inner + "</section>";
  }

  function speechBarHtml() {
    return '<div class="speech-bar" id="speechBar">' +
      '<button class="sp-btn" id="spPlay" title="השמע">▶️</button>' +
      '<button class="sp-btn" id="spPause" title="השהה">⏸️</button>' +
      '<button class="sp-btn" id="spStop" title="עצור">⏹️</button>' +
      '<button class="sp-btn" id="spRestart" title="מהתחלה">🔁</button>' +
      '<span class="sp-label">מהירות</span>' +
      '<select id="spRate">' +
        '<option value="0.8">0.8x</option>' +
        '<option value="1" selected>1x</option>' +
        '<option value="1.2">1.2x</option>' +
        '<option value="1.5">1.5x</option>' +
      "</select>" +
      '<span class="sp-label" id="spStatus">🔊 הסבר קולי בעברית</span>' +
    "</div>";
  }

  /* ---------------- Interactivity ---------------- */
  function wireUp(saved, opts) {
    wireSpeech();
    wireVideo();
    wireChecklist();
    wireKnowledgeQuiz();
    wireConfidence();
    wireButtons(opts);
    updateGate();
  }

  function wireVideo() {
    var facade = mount.querySelector(".video-facade");
    if (!facade) return;
    function load() {
      var id = facade.dataset.vid;
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      iframe.title = "סרטון הסבר";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.className = "video-frame";
      facade.replaceWith(iframe);
    }
    facade.addEventListener("click", load);
    facade.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); load(); }
    });
  }

  function wireSpeech() {
    var status = document.getElementById("spStatus");
    var rateSel = document.getElementById("spRate");
    if (window.Store.state.speech.rate) rateSel.value = String(window.Store.state.speech.rate);

    if (!window.Speech.supported) {
      status.textContent = "🔇 הסבר קולי לא נתמך בדפדפן זה — המשך עם הטקסט הכתוב.";
      return;
    }

    function doSpeak() {
      var ok = window.Speech.speak(lesson.speech, {
        rate: parseFloat(rateSel.value),
        onStart: function () { status.textContent = "🔊 מקריא..."; },
        onEnd: function () { status.textContent = "✔️ סיום הקראה"; },
        onError: function () { status.textContent = "⚠️ שגיאת הקראה — המשך עם הטקסט."; },
        onUnsupported: function () { status.textContent = "🔇 לא נתמך — המשך עם הטקסט."; },
      });
      if (ok && !window.Speech.hasHebrew()) {
        status.textContent = "ℹ️ אין קול עברי מותקן — ההקראה עלולה להישמע שגוי. הטקסט הכתוב מלא.";
      }
    }

    document.getElementById("spPlay").addEventListener("click", doSpeak);
    document.getElementById("spPause").addEventListener("click", function () { window.Speech.pause(); });
    document.getElementById("spStop").addEventListener("click", function () { window.Speech.stop(); status.textContent = "⏹️ נעצר"; });
    document.getElementById("spRestart").addEventListener("click", doSpeak);
    rateSel.addEventListener("change", function () {
      window.Store.setSpeech({ rate: parseFloat(rateSel.value) });
    });
  }

  function wireChecklist() {
    var boxes = mount.querySelectorAll(".chk");
    boxes.forEach(function (b) {
      b.addEventListener("change", function () {
        window.Store.toggleChecklistItem(lesson.id, b.dataset.i, b.checked);
        updateGate();
      });
    });
  }

  function wireKnowledgeQuiz() {
    var opts = mount.querySelectorAll(".kq-opt");
    opts.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var qi = parseInt(btn.dataset.q, 10);
        var oi = parseInt(btn.dataset.o, 10);
        var q = lesson.knowledgeQuiz[qi];
        var fb = mount.querySelector('.kq-feedback[data-q="' + qi + '"]');
        // reset selection visuals in this block
        mount.querySelectorAll('.kq-opt[data-q="' + qi + '"]').forEach(function (o) { o.classList.remove("selected"); });
        btn.classList.add("selected");
        if (oi === q.correct) {
          fb.innerHTML = '<span style="color:var(--success)">✓ נכון! ' + q.explain + "</span>";
          quizState.answered[qi] = true;
        } else {
          fb.innerHTML = '<span style="color:var(--danger)">✗ לא מדויק. נסה שוב — ' + hintFor(q) + "</span>";
          quizState.answered[qi] = false;
        }
        updateGate();
      });
    });
  }

  function hintFor(q) { return "חשוב על ההגדרה שלמדנו בשיעור."; }

  function wireConfidence() {
    var wrap = document.getElementById("confidence");
    wrap.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        wrap.querySelectorAll("button").forEach(function (x) { x.classList.remove("sel"); });
        b.classList.add("sel");
        window.Store.setConfidence(lesson.id, parseInt(b.dataset.v, 10));
      });
    });
  }

  function allChecklistDone() {
    var saved = window.Store.getLesson(lesson.id);
    return lesson.guidedExercise.checklist.every(function (_, i) { return saved.checklist[i]; });
  }

  function allQuizPassed() {
    return lesson.knowledgeQuiz.every(function (_, i) { return quizState.answered[i] === true; });
  }

  function updateGate() {
    var ready = allChecklistDone() && allQuizPassed();
    var gate = document.getElementById("gateMsg");
    var nextBtn = document.getElementById("btnNext");
    if (ready) {
      gate.innerHTML = "✅ מעולה! עמדת בתנאי המעבר. אפשר לסמן 'סיימתי' ולהמשיך.";
      nextBtn.disabled = false;
    } else {
      var need = [];
      if (!allChecklistDone()) need.push("השלמת רשימת הבדיקה");
      if (!allQuizPassed()) need.push("מענה נכון על כל שאלות הידע");
      gate.textContent = "תנאי מעבר: " + need.join(" · ");
      nextBtn.disabled = true;
    }
  }

  function wireButtons(opts) {
    document.getElementById("btnExplainAgain").addEventListener("click", function () {
      document.getElementById("explanationBody").scrollIntoView({ behavior: "smooth", block: "center" });
      Toast.show("גלול להסבר — ואפשר גם ללחוץ ▶️ להקראה");
    });
    document.getElementById("btnHint").addEventListener("click", function () {
      var firstHint = lesson.selfExercise.hints[0];
      Toast.show("💡 " + firstHint, 4000);
    });
    document.getElementById("btnCheck").addEventListener("click", function () {
      if (allChecklistDone() && allQuizPassed()) {
        Toast.show("✅ הכול תקין — עמדת בכל התנאים!");
      } else {
        Toast.show("עדיין חסר: השלם רשימת בדיקה ושאלות ידע", 4000);
        updateGate();
      }
    });
    document.getElementById("btnDone").addEventListener("click", function () {
      if (!allChecklistDone() || !allQuizPassed()) {
        Toast.show("כדי לסמן כהושלם — יש להשלים את התנאים קודם", 4000);
        return;
      }
      var saved = window.Store.getLesson(lesson.id);
      var conf = saved.confidence || 0;
      window.Store.setQuizPassed(lesson.id);
      window.Store.setLessonDone(lesson.id, conf);
      // תגים
      if (lesson.badge && window.Store.awardBadge(lesson.badge)) {
        var b = window.Game.badgeById(lesson.badge);
        if (b) Toast.show("🏅 תג חדש: " + b.name + "!", 4000);
      }
      window.Game.evaluateBadges().forEach(function (id) {
        var b = window.Game.badgeById(id);
        if (b) Toast.show("🏅 תג חדש: " + b.name + "!", 4000);
      });
      Toast.show("🎉 השיעור הושלם! +50 נקודות");
      document.getElementById("btnDone").textContent = "✓ הושלם";
      document.getElementById("btnDone").disabled = true;
    });
    document.getElementById("btnNext").addEventListener("click", function () {
      onNext && onNext(lesson.id);
    });
  }

  window.LessonView = { render: render };
})();
