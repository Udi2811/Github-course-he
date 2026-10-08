/* ====================================================================
   data.js — כל תוכן הקורס (שאלון, תגים, מפת קורס, שיעורים)
   התוכן כתוב מראש ע"י המחבר ולכן בטוח לרינדור כ-HTML.
   ==================================================================== */

/* ---------- רמות הקורס + צבעים ---------- */
window.LEVELS = [
  { id: 1, name: "מתחיל",  color: "var(--level-1)", key: "beginner" },
  { id: 2, name: "בסיסי",  color: "var(--level-2)", key: "basic" },
  { id: 3, name: "בינוני", color: "var(--level-3)", key: "intermediate" },
  { id: 4, name: "מתקדם",  color: "var(--level-4)", key: "advanced" },
  { id: 5, name: "מומחה",  color: "var(--level-5)", key: "expert" },
  { id: 6, name: "פרויקטים", color: "var(--level-6)", key: "projects" },
];

/* ---------- שאלון אבחון (10 שאלות, אחת בכל פעם) ---------- */
window.QUIZ = [
  { q: "עד כמה אתה מכיר את ההבדל בין Git לבין GitHub?",
    a: [ {t:"לא מכיר כלל", s:0}, {t:"שמעתי, לא בטוח", s:1}, {t:"מבין בגדול", s:2}, {t:"ברור לי לגמרי", s:3} ] },
  { q: "האם יצרת בעבר Repository (מאגר) ב-GitHub?",
    a: [ {t:"אף פעם", s:0}, {t:"פעם אחת בערך", s:1}, {t:"כמה פעמים", s:2}, {t:"הרבה פעמים", s:3} ] },
  { q: "עד כמה נוח לך לבצע Commit (שמירת שינוי) דרך אתר GitHub?",
    a: [ {t:"לא יודע מה זה", s:0}, {t:"ניסיתי, לא בטוח", s:1}, {t:"מסתדר", s:2}, {t:"קל לי", s:3} ] },
  { q: "האם עבדת עם Branches (ענפים) ב-GitHub?",
    a: [ {t:"לא מכיר", s:0}, {t:"שמעתי בלבד", s:1}, {t:"יצרתי כמה", s:2}, {t:"עובד איתם בשוטף", s:3} ] },
  { q: "עד כמה אתה מכיר Issues (משימות/תקלות)?",
    a: [ {t:"לא מכיר", s:0}, {t:"קראתי עליהם", s:1}, {t:"פתחתי כמה", s:2}, {t:"מנהל איתם עבודה", s:3} ] },
  { q: "האם ביצעת Pull Request ו-Merge?",
    a: [ {t:"לא", s:0}, {t:"ראיתי אבל לא עשיתי", s:1}, {t:"עשיתי פעם-פעמיים", s:2}, {t:"כן, בקלות", s:3} ] },
  { q: "עד כמה אתה משתמש ב-GitHub Copilot?",
    a: [ {t:"לא משתמש", s:0}, {t:"מדי פעם", s:1}, {t:"לעיתים קרובות", s:2}, {t:"חלק קבוע מהעבודה", s:3} ] },
  { q: "האם בנית בעבר אתר או מערכת כלשהי?",
    a: [ {t:"לא", s:0}, {t:"ניסיון קטן", s:1}, {t:"כמה פרויקטים", s:2}, {t:"בונה בקביעות", s:3} ] },
  { q: "האם פרסמת אתר (GitHub Pages / Vercel)?",
    a: [ {t:"אף פעם", s:0}, {t:"בעזרת מישהו/Copilot", s:1}, {t:"פעם לבד", s:2}, {t:"כמה פעמים לבד", s:3} ] },
  { q: "עד כמה אתה מכיר Custom Instructions, Prompt Files, Agents או Skills?",
    a: [ {t:"בכלל לא", s:0}, {t:"שמעתי שמות", s:1}, {t:"ניסיתי משהו", s:2}, {t:"מכיר ומשתמש", s:3} ] },
];

/* ---------- תגי הישג ---------- */
window.BADGES = [
  { id: "first_steps",    icon: "🎒", name: "צעדים ראשונים",     desc: "השלמת את שאלון האבחון" },
  { id: "repo_creator",   icon: "📦", name: "Repository Creator", desc: "השלמת שיעור יצירת Repository" },
  { id: "commit_beginner",icon: "💾", name: "Commit Beginner",    desc: "השלמת שיעור על Commit" },
  { id: "branch_explorer",icon: "🌿", name: "Branch Explorer",    desc: "השלמת שיעור על Branches" },
  { id: "pr_builder",     icon: "🔀", name: "Pull Request Builder",desc: "השלמת שיעור על Pull Request" },
  { id: "issue_manager",  icon: "📋", name: "Issue Manager",       desc: "השלמת שיעור על Issues" },
  { id: "prompt_designer",icon: "✍️", name: "Prompt Designer",     desc: "השלמת שיעור על כתיבת Prompts" },
  { id: "skill_creator",  icon: "🧩", name: "Skill Creator",       desc: "יצרת Agent Skill ראשון" },
  { id: "automation",     icon: "⚙️", name: "Automation Builder",  desc: "השלמת שיעור GitHub Actions" },
  { id: "level1_done",    icon: "🥉", name: "סיום רמה 1",          desc: "השלמת את כל שיעורי רמה 1" },
  { id: "github_expert",  icon: "🏆", name: "GitHub Expert",       desc: "השלמת את הקורס" },
];

/* ---------- מפת הקורס: כל השיעורים לפי רמה ---------- */
/* status: קובע לפי מנוע ההתקדמות. כאן רק מבנה + אילו שיעורים "בנויים" (built=true) */
window.COURSE_MAP = [
  { level: 1, lessons: [
    { id: "1.1", title: "Git מול GitHub — מי עושה מה?", built: true },
    { id: "1.2", title: "Repository — מאגר הפרויקט", built: true },
    { id: "1.3", title: "יצירת קובץ ו-Commit בדפדפן", built: true },
    { id: "1.4", title: "README וכתיבה ב-Markdown", built: true },
    { id: "1.5", title: "Branch — ענף עבודה", built: true },
    { id: "1.6", title: "Issue — ניהול משימות", built: true },
    { id: "1.7", title: "Pull Request ו-Merge", built: true },
    { id: "1.8", title: "סקירה: Releases, Actions, Projects, Security", built: true },
  ]},
  { level: 2, lessons: [
    { id: "2.1", title: "יצירת Repository מלא", built: true },
    { id: "2.2", title: "עריכת קבצים והיסטוריה", built: true },
    { id: "2.3", title: "השוואת שינויים (Diff)", built: true },
    { id: "2.4", title: "שחזור מטעות נפוצה", built: true },
  ]},
  { level: 3, lessons: [
    { id: "3.1", title: "Labels, Milestones, Assignees", built: true },
    { id: "3.2", title: "GitHub Projects — לוח משימות", built: true },
    { id: "3.3", title: "תבניות (Templates) ו-Releases", built: true },
  ]},
  { level: 4, lessons: [
    { id: "4.1", title: "Copilot ב-GitHub.com — יסודות", built: true },
    { id: "4.2", title: "Generate → Inspect → Test → Verify → Improve", built: true },
    { id: "4.3", title: "Custom Instructions", built: true },
    { id: "4.4", title: "Prompt Files", built: true },
  ]},
  { level: 5, lessons: [
    { id: "5.1", title: "Custom Agents", built: true },
    { id: "5.2", title: "Agent Skills — מסלול מורחב", built: true },
    { id: "5.3", title: "GitHub Actions ואוטומציה", built: true },
    { id: "5.4", title: "פרויקט גמר", built: true },
  ]},
  { level: 6, lessons: [
    { id: "6.1", title: "פרויקט: מעקב משימות אישי", built: true },
    { id: "6.2", title: "פרויקט: ניתוח קובץ CSV", built: true },
    { id: "6.3", title: "פרויקט: Dashboard ניהולי", built: true },
    { id: "6.4", title: "פרסום ל-GitHub Pages", built: true },
  ]},
];

/* ====================================================================
   LESSONS — תוכן מלא לשלושת השיעורים הראשונים
   כל שיעור כולל את 21 הרכיבים הנדרשים.
   ==================================================================== */
window.LESSONS = {
  /* ============================ שיעור 1.1 ============================ */
  "1.1": {
    id: "1.1", level: 1, title: "Git מול GitHub — מי עושה מה?",
    difficulty: "מתחיל",
    video: { id: "hwP7WQkmECE", title: "Git Explained in 100 Seconds", author: "Fireship" },
    objectives: [
      "להבחין בבירור בין Git לבין GitHub",
      "להבין מה זה בקרת גרסאות (Version Control)",
      "לדעת מתי משתמשים בכל אחד מהם",
    ],
    terms: [
      { en: "Git", he: "כלי לניהול גרסאות שרץ על המחשב ומתעד כל שינוי בקבצים.",
        example: "שמרת גרסה של מסמך, שינית, ואתה יכול לחזור לגרסה הקודמת.",
        when: "בכל פעם שרוצים לעקוב אחרי שינויים או לחזור אחורה.",
        mistakes: "לחשוב ש-Git חייב אינטרנט — הוא עובד מקומית לגמרי." },
      { en: "GitHub", he: "שירות אינטרנט שמאחסן פרויקטים של Git ומאפשר שיתוף ועבודה משותפת.",
        example: "העלית פרויקט ל-GitHub כדי לגשת אליו ממחשב אחר או לשתף עמית.",
        when: "כשרוצים גיבוי בענן, גישה מרחוק או שיתוף פעולה.",
        mistakes: "לבלבל בין GitHub (השירות) ל-Git (הכלי)." },
      { en: "Version Control", he: "בקרת גרסאות — שיטה לתעד שינויים לאורך זמן.",
        example: "רואים מי שינה מה, מתי, ולמה — ואפשר לשחזר גרסה ישנה.",
        when: "בכל פרויקט שמתפתח עם הזמן.",
        mistakes: "לחשוב שזה רק 'גיבוי' — זה הרבה יותר: היסטוריה מלאה." },
    ],
    explanation: `
      <p>דמיין שאתה כותב פרויקט עם צוות. צריך דרך לדעת <strong>מה השתנה, מתי, ומי עשה את זה</strong> — וגם יכולת לחזור אחורה אם משהו נשבר. בדיוק בשביל זה נבנו Git ו-GitHub.</p>
      <div class="term"><span class="t-en">Git</span> הוא "היומן המקומי" של הפרויקט. הוא רץ על המחשב שלך, מתעד כל שינוי, ומאפשר לחזור בזמן. <strong>עובד גם בלי אינטרנט.</strong></div>
      <div class="term"><span class="t-en">GitHub</span> הוא "הספרייה בענן". אתר שבו שומרים עותק של הפרויקט, משתפים אותו, ועובדים עם אחרים. הוא משתמש ב-Git מתחת לפני השטח.</div>
      <p>בקצרה: <strong>Git = הכלי</strong> · <strong>GitHub = השירות המקוון שמשתמש בכלי הזה</strong>. אפשר להשתמש ב-Git לגמרי בלי GitHub, אבל GitHub בלי Git לא קיים.</p>
      <pre><code>המחשב שלך                          הענן
┌─────────────┐    push/pull    ┌─────────────┐
│    Git      │ ───────────────▶│   GitHub    │
│ (היומן)     │ ◀─────────────── │ (הספרייה)   │
└─────────────┘                 └─────────────┘</code></pre>
    `,
    speech: "בשיעור הזה נבין את ההבדל החשוב ביותר למתחילים: ההבדל בין גִּיט לבין גִּיטהַאב. גיט הוא כלי שרץ על המחשב שלך ומתעד כל שינוי בקבצים, כמו יומן אישי של הפרויקט. הוא עובד גם בלי אינטרנט. גיטהאב, לעומת זאת, הוא אתר באינטרנט ששומר עותק של הפרויקט בענן, ומאפשר לך לשתף אותו ולעבוד עם אנשים אחרים. הדרך הפשוטה לזכור: גיט הוא הכלי, וגיטהאב הוא השירות המקוון שמשתמש בכלי הזה. שים לב לטעות הנפוצה ביותר: לחשוב שהשניים הם אותו דבר. הם עובדים יחד, אבל הם לא זהים.",
    demo: {
      intro: "אין כאן פעולה ב-GitHub עדיין — זה שיעור הבנה. בשיעור הבא ניצור Repository אמיתי.",
      steps: [
        "היכנס ל-<strong>github.com</strong> והתחבר לחשבון שלך.",
        "שים לב לכותרת 'Repositories' בפרופיל — אלה הפרויקטים שלך בענן.",
        "אל תיצור עדיין כלום — רק הסתכל והתרגל להתמצא במסך.",
      ],
    },
    guidedExercise: {
      intro: "נוודא שאתה יודע להתחבר ל-GitHub ולזהות את אזור ה-Repositories.",
      githubUrl: "https://github.com/login",
      steps: [
        "פתח את GitHub בלחיצה על הכפתור למטה.",
        "התחבר עם שם המשתמש שלך (ללא שיתוף סיסמה כאן).",
        "לחץ על תמונת הפרופיל שלך → <strong>Your repositories</strong>.",
        "ראה את רשימת המאגרים (ייתכן שהיא ריקה — זה בסדר).",
      ],
      checklist: [
        "התחברתי בהצלחה ל-GitHub",
        "מצאתי את אזור 'Your repositories'",
        "אני מבין ש-GitHub שומר עותק בענן",
      ],
      verify: "באיזה אזור ראית את רשימת הפרויקטים שלך?",
    },
    selfExercise: {
      task: "הסבר במילים שלך, במשפט אחד לכל אחד: (1) מה Git עושה? (2) מה GitHub מוסיף על זה?",
      hints: [
        "חשוב על 'מקומי מול ענן'.",
        "Git = יומן על המחשב. GitHub = ספרייה בענן לשיתוף.",
      ],
      solution: "Git מתעד שינויים בקבצים על המחשב שלי ומאפשר לחזור אחורה (עובד בלי אינטרנט). GitHub מאחסן עותק של הפרויקט בענן ומאפשר גישה מרחוק ושיתוף פעולה עם אחרים.",
    },
    knowledgeQuiz: [
      { q: "אני עובד לבד במחשב בלי אינטרנט ורוצה לתעד שינויים. מה יעבוד?",
        options: ["GitHub", "Git", "שניהם צריכים אינטרנט"], correct: 1,
        explain: "Git עובד מקומית על המחשב ולא צריך אינטרנט. GitHub הוא הענן וצריך רשת." },
      { q: "חבר רוצה לראות את הפרויקט שלי ממחשב אחר. מה יאפשר זאת?",
        options: ["Git בלבד", "GitHub", "הטרמינל"], correct: 1,
        explain: "GitHub שומר עותק בענן וכך אפשר לשתף ולגשת מרחוק." },
    ],
    commonMistakes: [
      "בלבול בין Git (הכלי) ל-GitHub (השירות).",
      "לחשוב ש-Git צריך אינטרנט — הוא עובד מקומית.",
      "להתייחס לבקרת גרסאות כאל 'גיבוי' בלבד.",
    ],
    fixes: [
      "זכור את המשפט: 'Git הוא הכלי, GitHub הוא הענן'.",
      "אם מתבלבלים — שאל: 'האם זה רץ על המחשב שלי או באתר?'",
    ],
    summary: [
      "Git = יומן מקומי שמתעד שינויים, עובד בלי אינטרנט.",
      "GitHub = ספרייה בענן לשיתוף וגישה מרחוק.",
      "בקרת גרסאות = היסטוריה מלאה של מה/מתי/מי/למה.",
      "אפשר Git בלי GitHub, אבל לא להפך.",
      "זו ההבחנה שפותחת את כל שאר הקורס.",
    ],
    resources: [
      { title: "GitHub Docs — About Git", url: "https://docs.github.com/en/get-started/using-git/about-git", type: "📄 מאמר רשמי" },
      { title: "GitHub Skills — Introduction to GitHub", url: "https://skills.github.com/", type: "🎯 תרגול אינטראקטיבי" },
      { title: "Git & GitHub למתחילים (וידאו, freeCodeCamp)", url: "https://www.youtube.com/freecodecamp", type: "🎬 ערוץ וידאו" },
    ],
    badge: null,
  },

  /* ============================ שיעור 1.2 ============================ */
  "1.2": {
    id: "1.2", level: 1, title: "Repository — מאגר הפרויקט",
    difficulty: "מתחיל",
    objectives: [
      "להבין מה זה Repository ומה הוא מכיל",
      "להבחין בין Public לבין Private",
      "לזהות את חלקי עמוד ה-Repository ב-GitHub",
    ],
    terms: [
      { en: "Repository", he: "מאגר — תיקייה שמכילה את כל קובצי הפרויקט ואת היסטוריית השינויים.",
        example: "פרויקט אתר עם קבצי HTML, תמונות, ו-README — הכל ב-Repository אחד.",
        when: "לכל פרויקט חדש פותחים Repository משלו.",
        mistakes: "לערבב כמה פרויקטים לא קשורים באותו Repository." },
      { en: "Public / Private", he: "ציבורי / פרטי — מי יכול לראות את ה-Repository.",
        example: "Public = כל אחד באינטרנט רואה. Private = רק אתה ומי שתזמין.",
        when: "Private למידע רגיש/עבודה; Public לקוד פתוח או הדגמות.",
        mistakes: "להעלות מידע חסוי ל-Repository ציבורי בטעות." },
      { en: "README", he: "קובץ פתיחה שמסביר מה הפרויקט עושה ואיך להשתמש בו.",
        example: "הכניסה הראשונה שכל מבקר רואה בעמוד ה-Repository.",
        when: "בכל פרויקט — זה 'שער הכניסה' שלו.",
        mistakes: "להשאיר README ריק או לא מעודכן." },
    ],
    explanation: `
      <p>אחרי שהבנו מה זה GitHub, הגיע הזמן להכיר את היחידה הבסיסית שבה עובדים: ה-<span class="t-en">Repository</span> (בקיצור "repo").</p>
      <div class="term"><span class="t-en">Repository</span> הוא כמו <strong>תיקיית פרויקט חכמה</strong>: היא מכילה את כל הקבצים, התיקיות, וגם את <strong>כל היסטוריית השינויים</strong> שלהם.</div>
      <p>כל Repository יכול להיות <strong>Public</strong> (כל אחד רואה) או <strong>Private</strong> (רק אתה ומי שתזמין). כמנהל הנדסי — שים לב במיוחד: מידע ארגוני תמיד ב-Private.</p>
      <p>בעמוד ה-Repository תראה כמה אזורים מרכזיים:</p>
      <ul>
        <li><strong>Code</strong> — הקבצים והתיקיות.</li>
        <li><strong>Issues</strong> — משימות ותקלות.</li>
        <li><strong>Pull requests</strong> — הצעות לשינויים.</li>
        <li><strong>Actions</strong> — אוטומציות.</li>
        <li><strong>Projects</strong> — לוחות ניהול.</li>
        <li><strong>Settings</strong> — הגדרות המאגר.</li>
      </ul>
    `,
    speech: "עכשiו נכיר את יחידת העבודה הבסיסית בגיטהאב — ה-רֵפּוֹזִיטוֹרִי, או בקיצור רֵפּוֹ. אפשר לחשוב עליו כמו תיקיית פרויקט חכמה: הוא מכיל את כל הקבצים של הפרויקט, וגם את כל היסטוריית השינויים שלהם. לכל רפוזיטורי יש הגדרת נראות: פָּאבְּלִיק, כלומר ציבורי — כל אחד באינטרנט יכול לראות אותו; או פְּרַייבֵט, כלומר פרטי — רק אתה ומי שתזמין. כמנהל הנדסי, זכור כלל זהב: כל מידע של הארגון שומרים תמיד בפרטי. בעמוד הרפוזיטורי תראה כמה לשוניות חשובות: קוֹד לקבצים, אִישוּז למשימות, פּוּל ריקווסטס להצעות שינוי, ואקשנס לאוטומציות. נכיר כל אחת מהן בהמשך הקורס.",
    demo: {
      intro: "נתבונn במבנה של Repository אמיתי לפני שניצור אחד בעצמנו (בשיעור הבא).",
      steps: [
        "היכנס ל-<strong>github.com</strong> ולחץ על אייקון <strong>+</strong> בפינה העליונה.",
        "ראה את האפשרות <strong>New repository</strong> — אל תלחץ עדיין, רק הסתכל.",
        "פתח Repository ציבורי מוכר (למשל של GitHub Docs) והכר את הלשוניות Code / Issues / Pull requests.",
      ],
    },
    guidedExercise: {
      intro: "נתרגל זיהוי של אזורי ה-Repository והבנת ההבדל Public/Private.",
      githubUrl: "https://github.com/github/docs",
      steps: [
        "פתח את ה-Repository לדוגמה בלחיצה למטה.",
        "זהה את הלשוניות: <strong>Code</strong>, <strong>Issues</strong>, <strong>Pull requests</strong>.",
        "חפש את קובץ ה-<strong>README</strong> — הוא מוצג אוטומטית מתחת לרשימת הקבצים.",
        "שים לב לתגית <strong>Public</strong> ליד שם ה-Repository למעלה.",
      ],
      checklist: [
        "זיהיתי את לשונית Code",
        "מצאתי את ה-README בתחתית העמוד",
        "הבנתי את ההבדל בין Public ל-Private",
      ],
      verify: "היכן ב-GitHub מופיע תוכן ה-README של פרויקט?",
    },
    selfExercise: {
      task: "אתה מתכנן Repository למערכת מעקב משימות פנימית של הצוות. האם תבחר Public או Private, ולמה? מה תכתוב ב-README?",
      hints: [
        "מידע פנימי של הצוות = רגיש.",
        "README טוב עונה: מה המערכת עושה, למי היא מיועדת, איך מתחילים.",
      ],
      solution: "אבחר Private כי זו מערכת פנימית עם מידע ארגוני. ב-README אכתוב: שם המערכת, מטרתה (מעקב משימות הצוות), למי היא מיועדת, ואיך מתחילים להשתמש. לא אכלול מידע חסוי אמיתי.",
    },
    knowledgeQuiz: [
      { q: "מה מכיל Repository מעבר לקבצים?",
        options: ["רק את הקבצים הנוכחיים", "את היסטוריית השינויים המלאה", "רק תמונות"], correct: 1,
        explain: "Repository שומר את כל היסטוריית השינויים, לא רק את המצב הנוכחי." },
      { q: "למערכת פנימית עם נתוני צוות — איזו נראות נכונה?",
        options: ["Public", "Private", "לא משנה"], correct: 1,
        explain: "מידע ארגוני/פנימי תמיד ב-Private כדי לא לחשוף אותו לכולם." },
    ],
    commonMistakes: [
      "לפתוח Repository ציבורי למידע רגיש.",
      "להשאיר README ריק.",
      "לערבב כמה פרויקטים לא קשורים ב-repo אחד.",
    ],
    fixes: [
      "לפני יצירה — תמיד לבחור במודע Public/Private.",
      "אם נפתח בטעות כ-Public: Settings → שינוי ל-Private.",
    ],
    summary: [
      "Repository = תיקיית פרויקט + היסטוריית שינויים.",
      "Public = גלוי לכולם; Private = פרטי.",
      "README הוא שער הכניסה של הפרויקט.",
      "מידע ארגוני תמיד ב-Private.",
      "עמוד ה-repo מחולק ללשוניות: Code, Issues, PRs, Actions...",
    ],
    resources: [
      { title: "GitHub Docs — Hello World (יצירת repo)", url: "https://docs.github.com/en/get-started/start-your-journey/hello-world", type: "📄 מדריך רשמי" },
      { title: "GitHub Skills — Introduction to GitHub", url: "https://skills.github.com/", type: "🎯 תרגול" },
    ],
    badge: "repo_creator",
  },

  /* ============================ שיעור 1.3 ============================ */
  "1.3": {
    id: "1.3", level: 1, title: "יצירת קובץ ו-Commit בדפדפן",
    difficulty: "מתחיל",
    video: { id: "RGOj5yH7evk", title: "Git and GitHub for Beginners - Crash Course", author: "freeCodeCamp.org" },
    objectives: [
      "ליצור קובץ חדש ישירות בממשק GitHub",
      "להבין מה זה Commit ולמה כותבים Commit Message",
      "לראות את השינוי בהיסטוריה",
    ],
    terms: [
      { en: "Commit", he: "שמירת 'צילום מצב' של השינויים, עם הודעה שמסבירה מה נעשה.",
        example: "הוספת כותרת ל-README ושמרת עם ההודעה 'Add project title'.",
        when: "בכל פעם שמסיימים יחידת שינוי הגיונית.",
        mistakes: "הודעות Commit ריקות או כלליות כמו 'update'." },
      { en: "Commit Message", he: "תיאור קצר של מה השתנה ולמה.",
        example: "'Fix login button color' — ברור ומדויק.",
        when: "בכל Commit — זה התיעוד של ההיסטוריה.",
        mistakes: "לכתוב 'asdf' או להשאיר ריק." },
      { en: "Commit History", he: "היסטוריית ה-Commits — רשימת כל השינויים לאורך זמן.",
        example: "רואים מי שינה מה ומתי, ואפשר לחזור לכל נקודה.",
        when: "כשרוצים להבין איך הפרויקט התפתח או לשחזר.",
        mistakes: "להתעלם ממנה — זה הכוח האמיתי של Git." },
    ],
    explanation: `
      <p>עכשיו נבצע את הפעולה המעשית הראשונה: ניצור קובץ ונשמור אותו באמצעות <span class="t-en">Commit</span> — הכל דרך הדפדפן, בלי להתקין כלום.</p>
      <div class="term"><span class="t-en">Commit</span> הוא "צילום מצב" של השינויים שלך ברגע מסוים, עם <strong>הודעה</strong> שמסבירה מה עשית. זה כמו לשמור נקודת ציון במשחק.</div>
      <p>כל Commit נכנס ל-<span class="t-en">Commit History</span> — ההיסטוריה המלאה של הפרויקט. בזכותה אפשר לראות בדיוק מה השתנה, מתי, ולמה — ואף לחזור אחורה.</p>
      <div class="callout tip"><div class="c-title">💡 למה Commit Message חשוב?</div>בעוד חודש לא תזכור מה שינית. הודעה טובה כמו <code>Add contact form</code> חוסכת לך (ולצוות) בלבול רב.</div>
    `,
    speech: "הגענו לרגע המרגש — הפעולה המעשית הראשונה שלנו בגיטהאב. ניצור קובץ חדש ונשמור אותו באמצעות קוֹמִיט, והכל דרך הדפדפן בלבד, בלי להתקין שום דבר. מה זה קומיט? זה צילום מצב של השינויים שלך ברגע מסוים, יחד עם הודעה קצרה שמסבירה מה עשית. אפשר לחשוב על זה כמו שמירת נקודת ציון במשחק מחשב — אם משהו ישתבש בהמשך, תוכל לחזור לנקודה הזו. לכל קומיט מצרפים הודעה, שנקראת קוֹמִיט מֵסֵג'. אל תזלזל בה! בעוד חודש לא תזכור מה שינית, והודעה ברורה תחסוך ממך הרבה בלבול. אחרי שנבצע את הקומיט, נראה אותו מופיע בהיסטוריית השינויים של הפרויקט.",
    demo: {
      intro: "נדגים יצירת קובץ חדש ב-Repository קיים דרך הדפדפן.",
      steps: [
        "בתוך Repository, לחץ על <strong>Add file</strong> → <strong>Create new file</strong>.",
        "תן שם לקובץ, למשל <code>notes.md</code>.",
        "כתוב תוכן כלשהו, למשל <code># ההערות שלי</code>.",
        "למטה, כתוב <strong>Commit message</strong> ולחץ <strong>Commit changes</strong>.",
      ],
    },
    guidedExercise: {
      intro: "ניצור קובץ ראשון ונבצע Commit — אם אין לך עדיין Repository, צור אחד חדש ובסיסי עם README (שיעור הבא יורחב בכך).",
      githubUrl: "https://github.com/new",
      steps: [
        "צור Repository חדש (שם לדוגמה: <code>my-first-repo</code>), סמן <strong>Add a README</strong>, לחץ Create.",
        "בתוך ה-Repository לחץ <strong>Add file → Create new file</strong>.",
        "שם הקובץ: <code>hello.md</code>. תוכן: <code># שלום GitHub</code>.",
        "ב-Commit message כתוב: <code>Add hello file</code> ולחץ <strong>Commit changes</strong>.",
        "פתח את לשונית <strong>Commits</strong> (או סמל השעון) וראה את ה-Commit שלך.",
      ],
      checklist: [
        "יצרתי Repository חדש עם README",
        "יצרתי קובץ hello.md",
        "כתבתי Commit message ברור",
        "ראיתי את ה-Commit בהיסטוריה",
      ],
      verify: "מה כתבת ב-Commit message שלך?",
    },
    selfExercise: {
      task: "צור קובץ נוסף בשם <code>about.md</code> עם שורה שמתארת אותך, ובצע Commit עם הודעה מתאימה. איזו הודעה בחרת ולמה היא טובה?",
      hints: [
        "ההודעה צריכה לתאר את הפעולה: מה נוסף/שונה.",
        "פורמט טוב: פועל + מה. למשל 'Add about page'.",
      ],
      solution: "יצרתי about.md עם תיאור קצר עליי, ובחרתי Commit message: 'Add about file'. היא טובה כי היא קצרה, בלשון פעולה, ומתארת בדיוק מה נעשה — כך קל להבין את ההיסטוריה בעתיד.",
    },
    knowledgeQuiz: [
      { q: "מה המטרה של Commit Message?",
        options: ["לקשט את הקוד", "לתאר מה השתנה ולמה", "חובה טכנית חסרת ערך"], correct: 1,
        explain: "ההודעה מתעדת את השינוי כדי שאתה והצוות תבינו את ההיסטוריה." },
      { q: "איפה רואים את כל השינויים שבוצעו לאורך זמן?",
        options: ["ב-Settings", "ב-Commit History", "ב-README"], correct: 1,
        explain: "היסטוריית ה-Commits מציגה את כל השינויים לפי סדר הזמן." },
    ],
    commonMistakes: [
      "Commit message ריק או כמו 'update'.",
      "לשמור הרבה שינויים לא קשורים ב-Commit אחד.",
      "לשכוח ללחוץ 'Commit changes' בסוף.",
    ],
    fixes: [
      "כתוב הודעה בפורמט 'פועל + מה': Add / Fix / Update.",
      "אם שכחת לשמור — פשוט חזור ובצע Commit מחדש.",
    ],
    summary: [
      "Commit = צילום מצב של שינוי + הודעה.",
      "Commit Message טוב מתאר מה השתנה ולמה.",
      "כל Commit נכנס ל-Commit History.",
      "אפשר ליצור ולערוך קבצים ישירות בדפדפן.",
      "היסטוריה טובה = יכולת להבין ולשחזר.",
    ],
    resources: [
      { title: "GitHub Docs — Hello World", url: "https://docs.github.com/en/get-started/start-your-journey/hello-world", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Committing changes", url: "https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository", type: "📄 מאמר" },
      { title: "GitHub Skills — Communicate using Markdown", url: "https://skills.github.com/", type: "🎯 תרגול" },
    ],
    badge: "commit_beginner",
  },

  /* ============================ שיעור 1.4 ============================ */
  "1.4": {
    id: "1.4", level: 1, title: "README וכתיבה ב-Markdown",
    difficulty: "מתחיל",
    objectives: [
      "להבין מה זה Markdown ולמה משתמשים בו",
      "לכתוב README ברור עם כותרות, רשימות והדגשות",
      "לראות את התצוגה המעוצבת (Preview) ב-GitHub",
    ],
    terms: [
      { en: "Markdown", he: "שפת סימון פשוטה לעיצוב טקסט באמצעות סימנים קטנים.",
        example: "# כותרת, **מודגש**, - פריט ברשימה.",
        when: "בכל README, Issue, או תגובה ב-GitHub.",
        mistakes: "לשכוח רווח אחרי # או אחרי - (הסימון לא יעבוד)." },
      { en: "README", he: "קובץ הפתיחה שמסביר את הפרויקט; מוצג אוטומטית בעמוד ה-repo.",
        example: "README.md עם שם הפרויקט, מה הוא עושה, ואיך מתחילים.",
        when: "בכל פרויקט — זה 'שער הכניסה' שלו.",
        mistakes: "להשאיר אותו ריק או כללי מדי." },
      { en: "Preview", he: "תצוגה מקדימה שמראה איך ה-Markdown ייראה מעוצב.",
        example: "לשונית Preview ליד Edit בעורך של GitHub.",
        when: "לפני Commit, כדי לוודא שהעיצוב נכון.",
        mistakes: "לשמור בלי לבדוק ב-Preview ולגלות עיצוב שבור." },
    ],
    explanation: `
      <p>ה-<span class="t-en">README</span> הוא הדבר הראשון שאנשים רואים בפרויקט. כותבים אותו ב-<span class="t-en">Markdown</span> — שפה פשוטה שמעצבת טקסט בעזרת כמה סימנים.</p>
      <div class="term"><span class="t-en">Markdown</span> הופך טקסט רגיל למעוצב: כותרות, רשימות, הדגשות, קישורים וקוד — בלי לדעת HTML.</div>
      <p>הנה הבסיס שתשתמש בו הכי הרבה:</p>
      <pre><code># כותרת ראשית
## כותרת משנה
**טקסט מודגש**
*טקסט נטוי*
- פריט ברשימה
- פריט נוסף
1. רשימה ממוספרת
[טקסט קישור](https://github.com)
\`קוד קצר\`</code></pre>
      <div class="callout warn"><div class="c-title">⚠️ טעות נפוצה</div>חובה רווח אחרי הסימן: <code># כותרת</code> (עם רווח) יעבוד, אבל <code>#כותרת</code> (בלי רווח) לא.</div>
    `,
    speech: "בשיעור הזה נלמד לכתוב רִידמִי יפה וברור, בעזרת שפה שנקראת מַארְקְדַאוּן. אל תיבהל מהשם — זו בעצם דרך פשוטה מאוד לעצב טקסט. במקום כפתורים כמו בוורד, אתה מוסיף סימנים קטנים לפני הטקסט. למשל, סולמית ורווח יוצרים כותרת. שני כוכביות מסביב למילה הופכות אותה למודגשת. מקף ורווח יוצרים פריט ברשימה. חשוב מאוד לזכור: תמיד שים רווח אחרי הסימן. סולמית צמודה למילה לא תעבוד. לפני ששומרים, תמיד כדאי ללחוץ על לשונית פריוויו, כדי לראות איך העיצוב ייראה בפועל. ככה לא מופתעים מעיצוב שבור אחרי השמירה.",
    demo: {
      intro: "נדגים עריכת README עם Markdown ובדיקת התצוגה.",
      steps: [
        "בתוך Repository פתח את <code>README.md</code> ולחץ על אייקון העיפרון (Edit).",
        "הוסף שורה: <code># הפרויקט שלי</code> ואחריה <code>## מה זה עושה</code>.",
        "לחץ על לשונית <strong>Preview</strong> כדי לראות את העיצוב.",
        "כתוב Commit message ולחץ <strong>Commit changes</strong>.",
      ],
    },
    guidedExercise: {
      intro: "נשדרג את ה-README של ה-Repository שיצרת בשיעור הקודם.",
      githubUrl: "https://github.com",
      steps: [
        "פתח את ה-Repository שלך ולחץ על <code>README.md</code> → עיפרון (Edit).",
        "כתוב: <code># הפרויקט הראשון שלי</code> בשורה הראשונה.",
        "הוסף <code>## על הפרויקט</code> ומתחתיו משפט תיאור.",
        "הוסף רשימה עם <code>- </code> של שתי מטרות.",
        "בדוק ב-<strong>Preview</strong>, ואז <strong>Commit changes</strong>.",
      ],
      checklist: [
        "השתמשתי בכותרת ראשית (#)",
        "הוספתי כותרת משנה (##)",
        "יצרתי רשימה עם -",
        "בדקתי ב-Preview לפני השמירה",
      ],
      verify: "איזה סימן יצר אצלך את הכותרת הראשית?",
    },
    selfExercise: {
      task: "הוסף ל-README שלך קישור (link) לאתר GitHub וגם מילה אחת מודגשת. איך כתבת את הקישור?",
      hints: [
        "פורמט קישור: סוגריים מרובעים לטקסט, ועגולים לכתובת.",
        "[GitHub](https://github.com)",
      ],
      solution: "כתבתי קישור בפורמט [GitHub](https://github.com) ומילה מודגשת עם **חשוב**. ב-Preview הקישור הפך ללחיץ והמילה הודגשה.",
    },
    knowledgeQuiz: [
      { q: "מה חסר כדי ש-<code>#כותרת</code> יעבוד כ-Markdown?",
        options: ["נקודה בסוף", "רווח אחרי ה-#", "אותיות גדולות"], correct: 1,
        explain: "חובה רווח אחרי הסימן: '# כותרת'." },
      { q: "איך בודקים איך ה-Markdown ייראה לפני השמירה?",
        options: ["לוחצים Commit", "לשונית Preview", "רואים רק אחרי Merge"], correct: 1,
        explain: "לשונית Preview מציגה את העיצוב לפני Commit." },
    ],
    commonMistakes: [
      "לשכוח רווח אחרי # או -.",
      "לא לבדוק ב-Preview ולשמור עיצוב שבור.",
      "README כללי מדי בלי מידע שימושי.",
    ],
    fixes: [
      "תמיד רווח אחרי סימן הסימון.",
      "בדוק ב-Preview — ואם שבור, ערוך שוב ובצע Commit מתקן.",
    ],
    summary: [
      "Markdown מעצב טקסט עם סימנים פשוטים.",
      "# כותרת, ** מודגש, - רשימה, [טקסט](קישור).",
      "חובה רווח אחרי הסימן.",
      "Preview מראה את העיצוב לפני השמירה.",
      "README טוב = שער כניסה ברור לפרויקט.",
    ],
    resources: [
      { title: "GitHub Docs — Basic writing and formatting syntax", url: "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax", type: "📄 מדריך רשמי" },
      { title: "GitHub Skills — Communicate using Markdown", url: "https://skills.github.com/", type: "🎯 תרגול" },
    ],
    badge: null,
  },

  /* ============================ שיעור 1.5 ============================ */
  "1.5": {
    id: "1.5", level: 1, title: "Branch — ענף עבודה",
    difficulty: "מתחיל",
    objectives: [
      "להבין מה זה Branch ולמה הוא שימושי",
      "ליצור Branch חדש ב-GitHub דרך הדפדפן",
      "להבין את הקשר בין main ל-branch חדש",
    ],
    terms: [
      { en: "Branch", he: "ענף — עותק נפרד של הפרויקט לעבודה על שינוי בלי לפגוע בגרסה הראשית.",
        example: "יצרת branch בשם add-contact כדי להוסיף טופס, בלי לגעת ב-main.",
        when: "לכל שינוי או ניסוי חדש, לפני שמשלבים ל-main.",
        mistakes: "לעבוד ישירות על main בשינויים גדולים." },
      { en: "main", he: "הענף הראשי והיציב של הפרויקט.",
        example: "הגרסה שכולם רואים ומסתמכים עליה.",
        when: "זהו ברירת המחדל; משלבים אליו שינויים בדוקים.",
        mistakes: "להתייחס אליו כשטח ניסויים." },
      { en: "Branching", he: "העבודה בענפים — לפצל, לעבוד, ואז לשלב בחזרה.",
        example: "כל אחד עובד ב-branch משלו ואז ממזג ל-main.",
        when: "בעבודת צוות וגם לבד, לשמירה על סדר.",
        mistakes: "לפתוח עשרות branches ולא לנקות אותם." },
    ],
    explanation: `
      <p>עד עכשיו עבדנו ישירות על הגרסה הראשית. אבל מה אם רוצים לנסות שינוי בלי סיכון? בשביל זה קיים <span class="t-en">Branch</span>.</p>
      <div class="term"><span class="t-en">Branch</span> (ענף) הוא <strong>עותק נפרד</strong> של הפרויקט. אתה עובד בו בשקט, וכשהשינוי מוכן — משלבים אותו חזרה ל-<span class="t-en">main</span>.</div>
      <p>דמיין עץ: <code>main</code> הוא הגזע היציב, וכל <code>branch</code> הוא ענף שיוצא ממנו. אם הניסוי בענף לא מוצלח — פשוט לא משלבים אותו, וה-main נשאר נקי.</p>
      <pre><code>main     ●──────●──────●────────●  (יציב)
                 \\              /
add-form          ●──────●────    (עבודה בבטחה)</code></pre>
      <div class="callout tip"><div class="c-title">💡 למה זה חשוב?</div>ב-branch אפשר לטעות, לנסות ולתקן — בלי לשבור את הגרסה שכולם משתמשים בה.</div>
    `,
    speech: "הגענו לאחד הרעיונות החזקים ביותר בגיטהאב — בְּרַאנְץ', שפירושו ענף. עד עכשיו עבדנו ישירות על הגרסה הראשית, שנקראת מֵיין. אבל מה קורה אם אתה רוצה לנסות שינוי חדש בלי לסכן את הגרסה שכולם משתמשים בה? כאן נכנס הבראנץ'. ברַאנץ' הוא עותק נפרד של הפרויקט, שבו אתה יכול לעבוד בשקט ובביטחון. דמיין עץ: המֵיין הוא הגזע היציב, וכל ברַאנץ' הוא ענף שיוצא ממנו. אתה עובד על הענף, מתנסה, טועה ומתקן — וכל זה בלי לגעת בגזע. ורק כשהשינוי מוכן ובדוק, אתה משלב אותו חזרה אל המֵיין. אם הניסוי לא הצליח, פשוט לא משלבים, והגרסה הראשית נשארת נקייה ובטוחה.",
    demo: {
      intro: "נדגים יצירת branch חדש ב-GitHub.",
      steps: [
        "בתוך Repository לחץ על תפריט הענפים (כתוב בו <strong>main</strong>) מעל רשימת הקבצים.",
        "הקלד שם לענף חדש, למשל <code>update-readme</code>.",
        "לחץ <strong>Create branch: update-readme from main</strong>.",
        "שים לב שעכשיו אתה נמצא בענף החדש (השם משתנה בתפריט).",
      ],
    },
    guidedExercise: {
      intro: "ניצור ענף עבודה חדש ב-Repository שלך.",
      githubUrl: "https://github.com",
      steps: [
        "פתח את ה-Repository שלך בלשונית <strong>Code</strong>.",
        "לחץ על תפריט הענפים שכתוב בו <strong>main</strong>.",
        "הקלד שם ענף: <code>readme-edits</code>.",
        "לחץ <strong>Create branch: readme-edits from main</strong>.",
        "ודא שבתפריט הענפים מופיע כעת <code>readme-edits</code>.",
      ],
      checklist: [
        "פתחתי את תפריט הענפים",
        "נתתי שם ברור לענף",
        "יצרתי branch מתוך main",
        "אני נמצא עכשיו בענף החדש",
      ],
      verify: "מאיזה ענף נוצר הענף החדש שלך?",
    },
    selfExercise: {
      task: "צור ענף נוסף בשם <code>test-feature</code> וערוך בו את ה-README (רק בענף הזה). האם ה-main השתנה גם? למה?",
      hints: [
        "שינוי בענף לא משפיע על main עד שממזגים.",
        "עבור בין הענפים בתפריט כדי להשוות.",
      ],
      solution: "יצרתי test-feature וערכתי בו את README. ה-main לא השתנה, כי שינויים בענף נשארים מבודדים עד שמבצעים Merge. זו בדיוק המטרה של branch — עבודה בטוחה בלי לפגוע בגרסה הראשית.",
    },
    knowledgeQuiz: [
      { q: "מה היתרון המרכזי של עבודה ב-Branch?",
        options: ["האתר רץ מהר יותר", "אפשר לנסות שינויים בלי לפגוע ב-main", "חוסך מקום בדיסק"], correct: 1,
        explain: "Branch מבודד את העבודה כך ש-main נשאר יציב." },
      { q: "שינוי שביצעת בענף — האם מופיע מיד ב-main?",
        options: ["כן, מיד", "לא, רק אחרי Merge", "רק אם מוחקים את הענף"], correct: 1,
        explain: "השינוי נכנס ל-main רק לאחר מיזוג (Merge)." },
    ],
    commonMistakes: [
      "לעבוד ישירות על main בשינויים גדולים.",
      "שמות ענפים לא ברורים (branch1, test).",
      "לצבור הרבה ענפים ישנים ולא לנקות.",
    ],
    fixes: [
      "תן שם שמתאר את המטרה: add-login, fix-typo.",
      "אחרי מיזוג — אפשר למחוק את הענף בבטחה.",
    ],
    summary: [
      "Branch = עותק נפרד לעבודה בטוחה.",
      "main = הענף הראשי והיציב.",
      "שינוי בענף לא משפיע על main עד Merge.",
      "שמות ענפים צריכים לתאר את המטרה.",
      "Branching שומר על סדר, גם לבד וגם בצוות.",
    ],
    resources: [
      { title: "GitHub Docs — About branches", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Hello World (Branch)", url: "https://docs.github.com/en/get-started/start-your-journey/hello-world", type: "📄 מדריך" },
    ],
    badge: "branch_explorer",
  },

  /* ============================ שיעור 1.6 ============================ */
  "1.6": {
    id: "1.6", level: 1, title: "Issue — ניהול משימות",
    difficulty: "מתחיל",
    objectives: [
      "להבין מה זה Issue ומתי משתמשים בו",
      "לפתוח Issue עם כותרת ותיאור ברורים",
      "להכיר Labels ו-Assignees בקצרה",
    ],
    terms: [
      { en: "Issue", he: "פריט לניהול משימה, תקלה או רעיון בתוך ה-Repository.",
        example: "פתחת Issue בשם 'להוסיף כפתור ייצוא ל-Excel'.",
        when: "לכל משימה, באג או בקשה שרוצים לעקוב אחריה.",
        mistakes: "לכתוב כותרת כללית כמו 'בעיה' בלי פרטים." },
      { en: "Label", he: "תווית צבעונית לסיווג Issues (למשל bug, enhancement).",
        example: "תייגת Issue כ-'bug' כדי לדעת שזו תקלה.",
        when: "לארגון וסינון משימות לפי סוג/עדיפות.",
        mistakes: "לא להשתמש כלל ב-Labels ולאבד סדר." },
      { en: "Assignee", he: "האדם האחראי לטיפול ב-Issue.",
        example: "שייכת Issue לעצמך כדי לסמן שאתה מטפל.",
        when: "כשרוצים לדעת מי אחראי על כל משימה.",
        mistakes: "להשאיר משימות בלי אחראי." },
    ],
    explanation: `
      <p>כמנהל הנדסי זה יעניין אותך במיוחד: <span class="t-en">Issues</span> הם הדרך של GitHub <strong>לנהל משימות, תקלות ורעיונות</strong> — ישירות ליד הקוד.</p>
      <div class="term"><span class="t-en">Issue</span> הוא כרטיס משימה: כותרת, תיאור, ודיון. אפשר לתייג אותו (<span class="t-en">Label</span>), לשייך אחראי (<span class="t-en">Assignee</span>), ולעקוב עד שנסגר.</div>
      <p>חשוב על זה כמו מערכת ניהול משימות שמובנית בתוך הפרויקט. במקום אקסל נפרד — הכול במקום אחד, מקושר לשינויים בקוד.</p>
      <div class="callout tip"><div class="c-title">💡 כותרת טובה ל-Issue</div>ספציפית וברורה: <em>"כפתור הייצוא לא עובד ב-Safari"</em> עדיף על <em>"בעיה בכפתור"</em>.</div>
    `,
    speech: "השיעור הזה רלוונטי במיוחד עבורך כמנהל הנדסי. נכיר את אִישוּז — הדרך של גיטהאב לנהל משימות, תקלות ורעיונות, ישירות לצד הקוד. אִישוּ הוא בעצם כרטיס משימה: יש לו כותרת, תיאור, ואזור לדיון. אפשר להוסיף לו לֵייבֵּל, כלומר תווית צבעונית לסיווג — למשל באג או שיפור. אפשר גם לשייך אַסַיְני, כלומר אדם אחראי שיטפל במשימה. חשוב על זה כמו מערכת ניהול משימות שמובנית בתוך הפרויקט עצמו, במקום גיליון אקסל נפרד. טיפ חשוב: כתוב כותרת ספציפית וברורה. למשל, כפתור הייצוא לא עובד בספארי, עדיף בהרבה על כותרת מעורפלת כמו בעיה בכפתור. ככה קל לכל אחד להבין על מה מדובר במבט אחד.",
    demo: {
      intro: "נדגים פתיחת Issue חדש.",
      steps: [
        "בתוך Repository לחץ על לשונית <strong>Issues</strong>.",
        "לחץ <strong>New issue</strong>.",
        "כתוב כותרת ברורה ותיאור קצר במה מדובר.",
        "לחץ <strong>Submit new issue</strong>.",
      ],
    },
    guidedExercise: {
      intro: "נפתח Issue ראשון ב-Repository שלך.",
      githubUrl: "https://github.com",
      steps: [
        "פתח את ה-Repository שלך ולחץ על לשונית <strong>Issues</strong>.",
        "לחץ <strong>New issue</strong>.",
        "כותרת: <code>להוסיף עמוד 'אודות'</code>.",
        "תיאור: משפט שמסביר מה צריך ולמה.",
        "לחץ <strong>Submit new issue</strong> וראה את ה-Issue נפתח.",
      ],
      checklist: [
        "פתחתי את לשונית Issues",
        "לחצתי New issue",
        "כתבתי כותרת ספציפית",
        "הוספתי תיאור ושלחתי",
      ],
      verify: "מה הייתה כותרת ה-Issue שפתחת?",
    },
    selfExercise: {
      task: "פתח Issue נוסף, ונסה להוסיף לו <strong>Label</strong> (בצד ימין בעורך ה-Issue) ולשייך אותו לעצמך (<strong>Assignee</strong>). איזה Label בחרת ולמה?",
      hints: [
        "בעמוד פתיחת ה-Issue יש בצד פאנל של Labels ו-Assignees.",
        "Label נפוץ: 'enhancement' לשיפור, 'bug' לתקלה.",
      ],
      solution: "פתחתי Issue ובחרתי Label 'enhancement' כי זו בקשת שיפור, ושייכתי לעצמי כ-Assignee כדי לסמן שאני אחראי. כך קל לסנן ולדעת מי מטפל במה.",
    },
    knowledgeQuiz: [
      { q: "למה משמש Issue?",
        options: ["לאחסן תמונות", "לנהל משימות, תקלות ורעיונות", "להריץ קוד"], correct: 1,
        explain: "Issue הוא כרטיס לניהול ומעקב אחר משימות ותקלות." },
      { q: "מה תפקיד ה-Assignee?",
        options: ["צבע הכרטיס", "האדם האחראי לטיפול", "תאריך היעד"], correct: 1,
        explain: "Assignee הוא מי שאחראי לטפל ב-Issue." },
    ],
    commonMistakes: [
      "כותרות כלליות בלי פרטים.",
      "לא להשתמש ב-Labels ולאבד ארגון.",
      "להשאיר Issues בלי אחראי.",
    ],
    fixes: [
      "כתוב כותרת ספציפית שמתארת את הבעיה/המשימה.",
      "הוסף Label ו-Assignee כדי לשמור סדר.",
    ],
    summary: [
      "Issue = כרטיס לניהול משימה/תקלה/רעיון.",
      "Label = תווית לסיווג; Assignee = אחראי.",
      "הכול מנוהל ליד הקוד, במקום אחד.",
      "כותרת ספציפית חוסכת בלבול.",
      "כלי מצוין לניהול הנדסי.",
    ],
    resources: [
      { title: "GitHub Docs — About issues", url: "https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Creating an issue", url: "https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue", type: "📄 מדריך" },
    ],
    badge: "issue_manager",
  },

  /* ============================ שיעור 1.7 ============================ */
  "1.7": {
    id: "1.7", level: 1, title: "Pull Request ו-Merge",
    difficulty: "מתחיל",
    objectives: [
      "להבין מה זה Pull Request ולמה הוא לב העבודה ב-GitHub",
      "לפתוח PR שמשווה בין ענף ל-main",
      "לבצע Merge ולסגור את המעגל",
    ],
    terms: [
      { en: "Pull Request", he: "בקשה לשלב שינויים מענף אחד לאחר, עם אפשרות לבדיקה ודיון.",
        example: "פתחת PR כדי לשלב את readme-edits ל-main.",
        when: "בכל פעם שרוצים לשלב שינוי, במיוחד בצוות.",
        mistakes: "למזג בלי לבדוק את ה-diff." },
      { en: "Merge", he: "מיזוג — שילוב בפועל של השינויים מהענף ל-main.",
        example: "לחצת Merge pull request וה-main התעדכן.",
        when: "אחרי שה-PR נבדק ואושר.",
        mistakes: "למזג כשיש קונפליקטים לא פתורים." },
      { en: "Diff", he: "ההבדלים בין הגרסאות — מה נוסף (ירוק) ומה הוסר (אדום).",
        example: "ב-PR ראית 3 שורות ירוקות שנוספו.",
        when: "לבדיקה לפני מיזוג.",
        mistakes: "לא לקרוא את ה-diff לפני אישור." },
    ],
    explanation: `
      <p>הגענו ללב של העבודה ב-GitHub: ה-<span class="t-en">Pull Request</span> (בקיצור PR). זה המקום שבו <strong>מציעים שינוי, בודקים אותו, ומשלבים</strong>.</p>
      <div class="term"><span class="t-en">Pull Request</span> הוא בקשה לקחת את השינויים מענף אחד (למשל <code>readme-edits</code>) ולשלב אותם ב-<code>main</code>. הוא מציג <span class="t-en">Diff</span> — בדיוק מה השתנה.</div>
      <p>הזרימה המלאה (GitHub Flow): <strong>יוצרים branch → עורכים ומבצעים commit → פותחים Pull Request → בודקים → מבצעים Merge</strong>.</p>
      <pre><code>branch ●──●──●
               \\  Pull Request → בדיקה
main   ●──●─────● Merge ✓</code></pre>
      <div class="callout tip"><div class="c-title">💡 גם לבד זה שימושי</div>אפילו כשעובדים לבד, PR נותן נקודת עצירה לבדוק את השינוי לפני שהוא נכנס ל-main.</div>
    `,
    speech: "הגענו ללב ליבה של העבודה בגיטהאב — הפּוּל ריקְווֵסְט, שמקוצר לפי-אר. זה המקום שבו מציעים שינוי, בודקים אותו, ולבסוף משלבים אותו. פּוּל ריקְווֵסְט הוא בקשה לקחת את השינויים שעשית בענף מסוים, ולשלב אותם אל המֵיין. היתרון הגדול הוא שהפי-אר מציג לך דיף — כלומר בדיוק מה השתנה: שורות ירוקות למה שנוסף, ושורות אדומות למה שהוסר. הזרימה המלאה היא כזו: קודם יוצרים ענף, אז עורכים ומבצעים קומיט, אחר כך פותחים פּוּל ריקְווֵסְט, בודקים את השינויים, ולבסוף מבצעים מֵרְג', כלומר מיזוג. וחשוב לדעת: גם כשאתה עובד לבד, הפּוּל ריקְווֵסְט שימושי מאוד — הוא נותן לך רגע לעצור ולבדוק את השינוי, לפני שהוא נכנס לגרסה הראשית.",
    demo: {
      intro: "נדגים פתיחת PR ומיזוג.",
      steps: [
        "אחרי שעשית Commit בענף, לחץ על לשונית <strong>Pull requests</strong> → <strong>New pull request</strong>.",
        "בחר להשוות את הענף שלך מול <code>main</code> וקרא את ה-<strong>Diff</strong>.",
        "לחץ <strong>Create pull request</strong>, תן כותרת ותיאור.",
        "לחץ <strong>Merge pull request</strong> → <strong>Confirm merge</strong>.",
      ],
    },
    guidedExercise: {
      intro: "נבצע את המעגל המלא: ענף → שינוי → PR → Merge.",
      githubUrl: "https://github.com",
      steps: [
        "ודא שיש לך ענף עם שינוי (מהשיעור על Branch). אם לא — צור ענף וערוך את README.",
        "לחץ על לשונית <strong>Pull requests</strong> → <strong>New pull request</strong>.",
        "בחר: base = <code>main</code>, compare = הענף שלך. קרא את ה-<strong>Diff</strong>.",
        "לחץ <strong>Create pull request</strong> → תן כותרת → <strong>Create</strong>.",
        "לחץ <strong>Merge pull request</strong> → <strong>Confirm merge</strong>.",
      ],
      checklist: [
        "פתחתי New pull request",
        "קראתי את ה-Diff לפני המיזוג",
        "יצרתי את ה-PR עם כותרת",
        "ביצעתי Merge בהצלחה",
      ],
      verify: "מה ראית ב-Diff לפני שמיזגת?",
    },
    selfExercise: {
      task: "אחרי ה-Merge, חזור ללשונית <strong>Code</strong> בענף <code>main</code>. האם השינוי מהענף מופיע עכשיו ב-main? מה זה אומר על Merge?",
      hints: [
        "אחרי Merge, main אמור לכלול את השינוי.",
        "Merge = השילוב בפועל של הענף ל-main.",
      ],
      solution: "כן, אחרי ה-Merge השינוי מהענף מופיע עכשיו ב-main. זה מראה ש-Merge הוא הפעולה שמשלבת בפועל את העבודה מהענף לגרסה הראשית — וסוגרת את מעגל ה-GitHub Flow.",
    },
    knowledgeQuiz: [
      { q: "מה המטרה של Pull Request?",
        options: ["למחוק ענף", "להציע שינוי, לבדוק ולשלב", "לשנות צבעים"], correct: 1,
        explain: "PR הוא המקום להציע שינוי, לבדוק את ה-Diff, ולשלב." },
      { q: "מתי השינוי מהענף נכנס בפועל ל-main?",
        options: ["כשיוצרים את ה-PR", "אחרי Merge", "כשכותבים Commit"], correct: 1,
        explain: "רק אחרי Merge השינוי משולב ל-main." },
    ],
    commonMistakes: [
      "למזג בלי לקרוא את ה-Diff.",
      "למזג כשיש קונפליקטים לא פתורים.",
      "כותרת PR לא ברורה.",
    ],
    fixes: [
      "תמיד קרא את ה-Diff לפני Merge.",
      "אם יש קונפליקט — GitHub יתריע; יש לפתור לפני מיזוג.",
    ],
    summary: [
      "Pull Request = להציע, לבדוק ולשלב שינויים.",
      "Diff מראה בדיוק מה השתנה.",
      "Merge משלב בפועל את הענף ל-main.",
      "GitHub Flow: branch → commit → PR → merge.",
      "שימושי גם בעבודה לבד.",
    ],
    resources: [
      { title: "GitHub Docs — About pull requests", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — GitHub flow", url: "https://docs.github.com/en/get-started/using-github/github-flow", type: "📄 מדריך" },
      { title: "GitHub Skills — Review pull requests", url: "https://skills.github.com/", type: "🎯 תרגול" },
    ],
    badge: "pr_builder",
  },

  /* ============================ שיעור 1.8 ============================ */
  "1.8": {
    id: "1.8", level: 1, title: "סקירה: Releases, Actions, Projects, Security",
    difficulty: "מתחיל",
    objectives: [
      "להכיר בקצרה ארבעה אזורים מתקדמים ב-GitHub",
      "להבין מתי כל אחד שימושי",
      "לדעת לאן נמשיך בהמשך הקורס",
    ],
    terms: [
      { en: "Release", he: "גרסה רשמית וארוזה של הפרויקט, עם מספר גרסה.",
        example: "v1.0.0 — הגרסה היציבה הראשונה שפרסמת.",
        when: "כשמסמנים אבן דרך או גרסה להורדה.",
        mistakes: "לבלבל Release עם Commit רגיל." },
      { en: "Actions", he: "אוטומציה שמריצה משימות אוטומטית (בדיקות, פרסום) באירועים.",
        example: "בכל push מריצים בדיקות אוטומטיות.",
        when: "לאוטומציה של בדיקות, בנייה ופרסום.",
        mistakes: "להפעיל workflow בלי להבין מה הוא עושה." },
      { en: "Projects", he: "לוח ניהול משימות (כמו Kanban) מעל Issues.",
        example: "לוח עם עמודות To do / In progress / Done.",
        when: "לתכנון ומעקב ויזואלי של עבודה.",
        mistakes: "לנהל הכול בראש במקום על לוח." },
      { en: "Security", he: "כלים לאיתור חולשות וסודות בקוד.",
        example: "התראה על סיסמה שנחשפה בטעות בקוד.",
        when: "תמיד — במיוחד לפני פרסום.",
        mistakes: "להתעלם מהתראות אבטחה." },
    ],
    explanation: `
      <p>בשיעור הזה נעשה <strong>סקירה מהירה</strong> של ארבעה אזורים חשובים שתפגוש בהמשך. לא נצלול לעומק — רק נבין מה כל אחד עושה, כדי שלא תופתע.</p>
      <div class="term"><span class="t-en">Releases</span> — גרסאות רשמיות וארוזות (v1.0.0). מסמנות אבן דרך יציבה.</div>
      <div class="term"><span class="t-en">Actions</span> — אוטומציה: הרצת בדיקות, בנייה ופרסום אוטומטית כשקורה אירוע (כמו push). נלמד לעומק ברמה 5.</div>
      <div class="term"><span class="t-en">Projects</span> — לוח ניהול ויזואלי (Kanban) מעל Issues, לתכנון ומעקב.</div>
      <div class="term"><span class="t-en">Security</span> — כלים שמזהים חולשות וסודות שנחשפו בטעות. קריטי לפני פרסום.</div>
      <div class="callout tip"><div class="c-title">🎯 מה הלאה</div>סיימת את יסודות רמה 1! ברמות הבאות נתרגל כל אחד מהאזורים האלה לעומק.</div>
    `,
    speech: "בשיעור הזה נעשה סקירה מהירה של ארבעה אזורים חשובים בגיטהאב, שתפגוש בהמשך הדרך. לא נצלול לעומק עכשיו — המטרה היא רק שתכיר אותם ולא תופתע. הראשון הוא רִילִיסֵס, גרסאות רשמיות וארוזות של הפרויקט, עם מספר גרסה כמו ואחת נקודה אפס. הן מסמנות אבן דרך יציבה. השני הוא אקשנס, שזו אוטומציה — היכולת להריץ משימות באופן אוטומטי, כמו בדיקות או פרסום, בכל פעם שקורה אירוע מסוים. נלמד את זה לעומק ברמה חמש. השלישי הוא פְּרוֹגֵ'קטְס, לוח ניהול משימות ויזואלי, בסגנון קַנְבַּאן, שיושב מעל האִישוּז. והרביעי הוא סֵקְיוּרִיטִי, כלים שמזהים חולשות אבטחה או סודות שנחשפו בטעות בקוד — דבר קריטי לפני פרסום. וברכות — סיימת את יסודות רמה אחת!",
    demo: {
      intro: "נסייר בלשוניות — בלי לבצע פעולות, רק להכיר.",
      steps: [
        "בתוך Repository, הבחן בלשוניות העליונות: <strong>Issues, Pull requests, Actions, Projects, Security</strong>.",
        "לחץ על <strong>Actions</strong> וראה הצעות ל-workflows מוכנים (אל תפעיל).",
        "לחץ על <strong>Security</strong> וראה את אזור ההתראות.",
        "חזור ל-<strong>Code</strong>.",
      ],
    },
    guidedExercise: {
      intro: "סיור מודרך בארבעת האזורים ב-Repository שלך.",
      githubUrl: "https://github.com",
      steps: [
        "פתח את ה-Repository שלך.",
        "לחץ על לשונית <strong>Actions</strong> והסתכל על ה-workflows המוצעים (בלי להפעיל).",
        "לחץ על לשונית <strong>Security</strong> וקרא את הכותרות.",
        "חפש את האפשרות ליצור <strong>Release</strong> (בצד ימין, 'Releases' → 'Create a new release') — רק הסתכל.",
      ],
      checklist: [
        "מצאתי את לשונית Actions",
        "מצאתי את לשונית Security",
        "ראיתי היכן יוצרים Release",
        "אני מבין מה כל אזור עושה בגדול",
      ],
      verify: "איזה מהאזורים נראה לך הכי שימושי לעבודה שלך, ולמה?",
    },
    selfExercise: {
      task: "התאם כל אזור לשימוש: (א) לפרסם גרסה יציבה (ב) להריץ בדיקות אוטומטית (ג) לנהל משימות על לוח (ד) לאתר סיסמה שנחשפה. אילו אזורים בחרת?",
      hints: [
        "חשוב על השם של כל אזור ומה הוא עושה.",
        "Release=גרסה, Actions=אוטומציה, Projects=לוח, Security=אבטחה.",
      ],
      solution: "(א) Releases — לפרסום גרסה יציבה. (ב) Actions — להרצת בדיקות אוטומטית. (ג) Projects — לניהול משימות על לוח. (ד) Security — לאיתור סיסמה/סוד שנחשף.",
    },
    knowledgeQuiz: [
      { q: "איזה אזור אחראי על אוטומציה (בדיקות/פרסום אוטומטי)?",
        options: ["Projects", "Actions", "Releases"], correct: 1,
        explain: "Actions מריץ workflows אוטומטיים באירועים." },
      { q: "איפה מנהלים משימות על לוח ויזואלי?",
        options: ["Projects", "Security", "Releases"], correct: 0,
        explain: "Projects הוא לוח הניהול הוויזואלי מעל Issues." },
    ],
    commonMistakes: [
      "לבלבל בין Release ל-Commit רגיל.",
      "להפעיל Actions workflow בלי להבין מה הוא עושה.",
      "להתעלם מהתראות Security.",
    ],
    fixes: [
      "Release = גרסה מסומנת; Commit = שינוי בודד.",
      "קרא מה ה-workflow עושה לפני הפעלה; שים לב להתראות אבטחה.",
    ],
    summary: [
      "Releases = גרסאות רשמיות ומסומנות.",
      "Actions = אוטומציה של בדיקות/בנייה/פרסום.",
      "Projects = לוח ניהול משימות ויזואלי.",
      "Security = איתור חולשות וסודות.",
      "סיימת את יסודות רמה 1 — כל הכבוד!",
    ],
    resources: [
      { title: "GitHub Docs — About releases", url: "https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases", type: "📄 מדריך" },
      { title: "GitHub Docs — Understanding GitHub Actions", url: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions", type: "📄 מדריך" },
      { title: "GitHub Docs — About Projects", url: "https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects", type: "📄 מדריך" },
    ],
    badge: "level1_done",
  },

  /* ============================ שיעור 2.1 ============================ */
  "2.1": {
    id: "2.1", level: 2, title: "יצירת Repository מלא",
    difficulty: "בסיסי",
    video: { id: "8JJ101D3knE", title: "Git Tutorial for Beginners: Learn Git in 1 Hour", author: "Programming with Mosh" },
    objectives: [
      "ליצור Repository עם כל ההגדרות הנכונות",
      "להבין את תפקיד .gitignore ו-License",
      "לבחור במודע Public/Private",
    ],
    terms: [
      { en: ".gitignore", he: "קובץ שמגדיר אילו קבצים Git יתעלם מהם ולא יעלה.",
        example: "להתעלם מקובצי סיסמאות, node_modules, או קבצים זמניים.",
        when: "בכל פרויקט — כדי לא להעלות קבצים מיותרים או רגישים.",
        mistakes: "לא להשתמש בו ולהעלות בטעות קבצים רגישים." },
      { en: "License", he: "רישיון שקובע מה מותר לאחרים לעשות עם הקוד שלך.",
        example: "MIT License — מתירני; בלי רישיון — זכויות שמורות.",
        when: "בפרויקטים ציבוריים, כדי להבהיר הרשאות שימוש.",
        mistakes: "לפרסם קוד ציבורי בלי רישיון ולבלבל משתמשים." },
      { en: "Description", he: "תיאור קצר של מטרת ה-Repository.",
        example: "'מערכת מעקב משימות לצוות ההנדסה'.",
        when: "בכל Repository — עוזר להתמצא ולחפש.",
        mistakes: "להשאיר ריק ולא לדעת למה הפרויקט נועד." },
    ],
    explanation: `
      <p>בשיעור 1.2 הכרנו מה זה Repository. עכשיו ניצור אחד <strong>כמו שצריך</strong>, עם כל ההגדרות.</p>
      <p>במסך <code>New repository</code> תמלא: <strong>שם</strong>, <strong>Description</strong>, בחירת <strong>Public/Private</strong>, ושלוש אפשרויות התחלה:</p>
      <ul>
        <li><strong>Add a README</strong> — שער הכניסה (תמיד מומלץ).</li>
        <li><strong>Add .gitignore</strong> — אילו קבצים להתעלם מהם (לפי סוג הפרויקט).</li>
        <li><strong>Choose a license</strong> — הרשאות שימוש (לפרויקטים ציבוריים).</li>
      </ul>
      <div class="callout warn"><div class="c-title">⚠️ בטיחות</div>מידע ארגוני/רגיש → תמיד <strong>Private</strong>. ולעולם אל תעלה סיסמאות או tokens, גם לא ב-Private.</div>
    `,
    speech: "בשיעור הקודם הכרנו מהו רֵפּוֹזִיטוֹרִי. עכשיו ניצור אחד כמו שצריך, עם כל ההגדרות החשובות. במסך יצירת הרפוזיטורי תמלא כמה שדות: שם, דֵסְקְרִיפְּשֵן — כלומר תיאור קצר של מטרת הפרויקט, ובחירה בין פָּאבְּליק לפְּרַייבֵט. בנוסף, יש שלוש אפשרויות התחלה חשובות. הראשונה, הוספת רִידמִי — תמיד מומלץ. השנייה, גִּיטאִיגְנוֹר, קובץ שמגדיר אילו קבצים גיט יתעלם מהם ולא יעלה — למשל קבצים זמניים או רגישים. והשלישית, בחירת לַייסֵנְס, כלומר רישיון, שקובע מה מותר לאחרים לעשות עם הקוד. וכלל זהב לבטיחות: מידע ארגוני או רגיש — תמיד בפרטי. ולעולם, אבל לעולם, אל תעלה סיסמאות או מפתחות, גם לא לרפוזיטורי פרטי.",
    demo: {
      intro: "נדגים יצירת Repository מלא.",
      steps: [
        "לחץ על <strong>+</strong> → <strong>New repository</strong>.",
        "מלא שם ו-Description.",
        "בחר Private, סמן <strong>Add a README</strong>, בחר <code>.gitignore</code> מתאים.",
        "לחץ <strong>Create repository</strong>.",
      ],
    },
    guidedExercise: {
      intro: "ניצור Repository חדש ומלא.",
      githubUrl: "https://github.com/new",
      steps: [
        "פתח את עמוד יצירת ה-Repository בכפתור למטה.",
        "שם: <code>team-task-tracker</code>. Description: תיאור קצר.",
        "בחר <strong>Private</strong>.",
        "סמן <strong>Add a README file</strong>.",
        "לחץ <strong>Create repository</strong>.",
      ],
      checklist: [
        "נתתי שם ו-Description",
        "בחרתי Private במודע",
        "סימנתי Add a README",
        "יצרתי את ה-Repository",
      ],
      verify: "למה בחרת Private עבור Repository כזה?",
    },
    selfExercise: {
      task: "צור Repository ציבורי לדוגמה (<code>my-demo-site</code>) והוסף לו License מסוג MIT. למה רישיון חשוב בפרויקט ציבורי?",
      hints: [
        "בעת היצירה יש אפשרות 'Choose a license'.",
        "בלי רישיון — הזכויות שמורות ואחרים לא יודעים מה מותר.",
      ],
      solution: "יצרתי my-demo-site כ-Public עם MIT License. רישיון חשוב כי בלעדיו הזכויות שמורות כברירת מחדל, ואחרים לא יודעים אם מותר להם להשתמש/לשנות. MIT הוא מתירני ומבהיר זאת.",
    },
    knowledgeQuiz: [
      { q: "מה תפקיד .gitignore?",
        options: ["למחוק קבצים", "להגדיר אילו קבצים לא יעלו ל-Git", "לשנות שמות"], correct: 1,
        explain: ".gitignore מגדיר קבצים ש-Git יתעלם מהם." },
      { q: "פרויקט עם נתוני צוות פנימיים — איזו נראות?",
        options: ["Public", "Private", "לא משנה"], correct: 1,
        explain: "מידע פנימי תמיד ב-Private." },
    ],
    commonMistakes: [
      "ליצור Public בטעות למידע רגיש.",
      "לא להוסיף .gitignore ולהעלות קבצים מיותרים.",
      "Description ריק.",
    ],
    fixes: [
      "לבדוק Public/Private לפני Create.",
      "אם נוצר Public בטעות: Settings → Danger Zone → Change visibility.",
    ],
    summary: [
      "Repository מלא: שם, Description, נראות, README, .gitignore, License.",
      ".gitignore מונע העלאת קבצים מיותרים/רגישים.",
      "License מבהיר הרשאות שימוש.",
      "מידע רגיש → Private.",
      "לעולם לא להעלות סודות.",
    ],
    resources: [
      { title: "GitHub Docs — Create a repo", url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Ignoring files", url: "https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files", type: "📄 מדריך" },
    ],
    badge: "repo_creator",
  },

  /* ============================ שיעור 2.2 ============================ */
  "2.2": {
    id: "2.2", level: 2, title: "עריכת קבצים והיסטוריה",
    difficulty: "בסיסי",
    objectives: [
      "לערוך קבצים קיימים בדפדפן",
      "לקרוא את היסטוריית ה-Commits",
      "לפתוח Commit בודד ולראות מה השתנה בו",
    ],
    terms: [
      { en: "Commit History", he: "רשימת כל ה-Commits של קובץ או פרויקט.",
        example: "לחיצה על 'History' מציגה את כל השינויים לאורך זמן.",
        when: "להבנת התפתחות הפרויקט או לאיתור מתי נכנס שינוי.",
        mistakes: "להתעלם ממנה בעת חיפוש תקלה." },
      { en: "Blame", he: "תצוגה שמראה מי שינה כל שורה ומתי.",
        example: "לראות מי כתב שורה מסוימת ומאיזה Commit.",
        when: "כשרוצים להבין למה שורה נכתבה.",
        mistakes: "להשתמש בו כדי 'להאשים' במקום להבין." },
      { en: "Commit SHA", he: "מזהה ייחודי לכל Commit (רצף תווים).",
        example: "a1b2c3d — מזהה שמצביע על שינוי ספציפי.",
        when: "להתייחסות מדויקת ל-Commit.",
        mistakes: "לבלבל בין שני Commits דומים בלי להסתכל ב-SHA." },
    ],
    explanation: `
      <p>הכוח האמיתי של Git הוא <strong>ההיסטוריה</strong>. בשיעור הזה נלמד לקרוא אותה.</p>
      <p>בכל קובץ יש כפתור <strong>History</strong> שמראה את כל ה-<span class="t-en">Commits</span> שנגעו בו. לחיצה על Commit מציגה בדיוק מה השתנה — שורות ירוקות (נוספו) ואדומות (הוסרו).</p>
      <p>לכל Commit יש <span class="t-en">SHA</span> — מזהה ייחודי. וב-<span class="t-en">Blame</span> אפשר לראות מי שינה כל שורה ומתי.</p>
      <div class="callout tip"><div class="c-title">💡 שימוש מעשי</div>משהו נשבר? פתח את ה-History, מצא את ה-Commit שבו זה קרה, והבן מה השתנה.</div>
    `,
    speech: "הכוח האמיתי של גיט טמון בהיסטוריה שהוא שומר. בשיעור הזה נלמד לקרוא אותה. לכל קובץ יש כפתור הִיסְטוֹרִי, שמראה את כל הקוֹמִיטְס שנגעו בו לאורך זמן. כשתלחץ על קומיט מסוים, תראה בדיוק מה השתנה בו: שורות ירוקות למה שנוסף, ושורות אדומות למה שהוסר. לכל קומיט יש מזהה ייחודי שנקרא אֵס-אֵייץ'-אֵיי. יש גם תצוגה שימושית שנקראת בְּלֵיים, שמראה מי שינה כל שורה ומתי. שימוש מעשי נפוץ: אם משהו נשבר בפרויקט, אתה פותח את ההיסטוריה, מוצא את הקומיט שבו התקלה נכנסה, ומבין מה בדיוק השתנה. ככה ההיסטוריה הופכת לכלי אבחון חזק.",
    demo: {
      intro: "נדגים קריאת היסטוריה.",
      steps: [
        "פתח קובץ ב-Repository ולחץ <strong>History</strong> (למעלה מימין בקובץ).",
        "לחץ על אחד ה-Commits ברשימה.",
        "ראה את ה-Diff: ירוק = נוסף, אדום = הוסר.",
        "שים לב ל-SHA הקצר של ה-Commit.",
      ],
    },
    guidedExercise: {
      intro: "נקרא את ההיסטוריה של ה-README שלנו.",
      githubUrl: "https://github.com",
      steps: [
        "פתח את ה-Repository שלך וערוך את <code>README.md</code> — הוסף שורה ובצע Commit.",
        "פתח שוב את <code>README.md</code> ולחץ <strong>History</strong>.",
        "לחץ על ה-Commit האחרון וקרא את ה-Diff.",
        "זהה את השורה הירוקה שהוספת.",
      ],
      checklist: [
        "ערכתי קובץ ושמרתי Commit",
        "פתחתי את History",
        "לחצתי על Commit וראיתי Diff",
        "זיהיתי את השינוי הירוק",
      ],
      verify: "איזה צבע סימן את השורה שהוספת?",
    },
    selfExercise: {
      task: "פתח קובץ והשתמש בתצוגת <strong>Blame</strong> (כפתור 'Blame' למעלה). מה היא מראה לך שה-History הרגיל לא?",
      hints: [
        "Blame מתמקד בשורות, לא ב-Commits.",
        "הוא מראה מי/מתי לכל שורה בנפרד.",
      ],
      solution: "Blame מראה לכל שורה בנפרד מי שינה אותה ובאיזה Commit, בעוד History מראה את רשימת ה-Commits הכוללת. Blame שימושי כדי להבין את ההקשר של שורה ספציפית.",
    },
    knowledgeQuiz: [
      { q: "מה מראה ה-Commit History?",
        options: ["רק את הקובץ הנוכחי", "את כל השינויים לאורך זמן", "את גודל הקובץ"], correct: 1,
        explain: "ההיסטוריה מציגה את כל ה-Commits שנגעו בקובץ/פרויקט." },
      { q: "מה ייחודי ב-Blame לעומת History?",
        options: ["מראה מי שינה כל שורה", "מוחק שורות", "משנה צבעים"], correct: 0,
        explain: "Blame ממפה כל שורה ל-Commit ולמחבר שלה." },
    ],
    commonMistakes: [
      "לא להשתמש בהיסטוריה בעת איתור תקלה.",
      "לבלבל בין Commits בלי לבדוק SHA.",
      "להשתמש ב-Blame כדי להאשים במקום להבין.",
    ],
    fixes: [
      "בעת תקלה — חפש ב-History מתי השתנה.",
      "השתמש ב-SHA לזיהוי מדויק.",
    ],
    summary: [
      "History = כל השינויים לאורך זמן.",
      "Diff מראה ירוק (נוסף) ואדום (הוסר).",
      "SHA = מזהה ייחודי ל-Commit.",
      "Blame = מי שינה כל שורה.",
      "ההיסטוריה היא כלי אבחון חזק.",
    ],
    resources: [
      { title: "GitHub Docs — Viewing a file's history", url: "https://docs.github.com/en/repositories/working-with-files/using-files/viewing-and-understanding-files", type: "📄 מדריך" },
      { title: "GitHub Docs — Tracking changes with blame", url: "https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 2.3 ============================ */
  "2.3": {
    id: "2.3", level: 2, title: "השוואת שינויים (Diff)",
    difficulty: "בסיסי",
    objectives: [
      "להבין מה זה Diff ואיך לקרוא אותו",
      "להשוות בין ענפים או Commits",
      "לזהות שינויים לפני Merge",
    ],
    terms: [
      { en: "Diff", he: "תצוגת ההבדלים בין שתי גרסאות של קוד.",
        example: "+ שורה ירוקה שנוספה, − שורה אדומה שהוסרה.",
        when: "לפני כל Merge, ובכל סקירת שינוי.",
        mistakes: "לאשר שינוי בלי לקרוא את ה-Diff." },
      { en: "Compare", he: "כלי להשוואה בין ענפים, Commits או גרסאות.",
        example: "השוואת branch מול main לפני PR.",
        when: "כשרוצים לראות מה השתנה בין שתי נקודות.",
        mistakes: "לבחור בסיס השוואה שגוי ולהתבלבל." },
      { en: "Unified / Split view", he: "שתי דרכים להציג Diff: מאוחד או זה-לצד-זה.",
        example: "Split מראה ישן משמאל וחדש מימין.",
        when: "לפי העדפה אישית לקריאות.",
        mistakes: "—" },
    ],
    explanation: `
      <p>ה-<span class="t-en">Diff</span> הוא אחד הכלים החשובים ביותר: הוא מראה <strong>בדיוק מה השתנה</strong>. למדנו עליו בקצרה ב-PR; עכשiו נעמיק.</p>
      <p>ב-Diff: <strong style="color:var(--success)">+ ירוק</strong> = שורה שנוספה, <strong style="color:var(--danger)">− אדום</strong> = שורה שהוסרה. אפשר להציג ב-<span class="t-en">Unified</span> (מאוחד) או <span class="t-en">Split</span> (זה לצד זה).</p>
      <p>עם כלי <span class="t-en">Compare</span> אפשר להשוות בין כל שתי נקודות — ענפים, Commits, או tags.</p>
      <div class="callout tip"><div class="c-title">💡 הרגל מקצועי</div>תמיד קרא את ה-Diff לפני אישור. זו הדרך לתפוס טעויות לפני שהן נכנסות ל-main.</div>
    `,
    speech: "הדיף הוא אחד הכלים החשובים ביותר בגיטהאב: הוא מראה לך בדיוק מה השתנה. כבר נגענו בו בקצרה כשדיברנו על פּוּל ריקְווֵסְט, ועכשיו נעמיק. בדיף, סימן פְּלוס ושורה ירוקה מציינים שורה שנוספה. סימן מִינוּס ושורה אדומה מציינים שורה שהוסרה. יש שתי דרכים להציג את זה: יוּנִיפַייד, כלומר תצוגה מאוחדת, או סְפְּליט, שמציגה את הגרסה הישנה והחדשה זו לצד זו. בעזרת כלי שנקרא קוֹמְפֵּר, תוכל להשוות בין כל שתי נקודות — בין ענפים, בין קומיטים, או בין גרסאות. ואימוץ הרגל מקצועי אחד יחסוך לך הרבה: תמיד קרא את הדיף לפני שאתה מאשר שינוי. זו הדרך הטובה ביותר לתפוס טעויות לפני שהן נכנסות לגרסה הראשית.",
    demo: {
      intro: "נדגים השוואה בין ענפים.",
      steps: [
        "ב-Repository עם ענף נוסף, פתח את הכתובת <code>/compare</code> (או לחץ 'Compare' בעת פתיחת PR).",
        "בחר base = main, compare = הענף שלך.",
        "קרא את ה-Diff: ירוק/אדום.",
        "נסה להחליף בין Unified ל-Split (סמל ההגדרות ב-Diff).",
      ],
    },
    guidedExercise: {
      intro: "נשווה בין ענף ל-main.",
      githubUrl: "https://github.com",
      steps: [
        "ודא שיש לך ענף עם שינוי (אם לא — צור וערוך README בענף).",
        "היכנס ל-Repository והוסף <code>/compare</code> לכתובת, או לחץ Pull requests → New.",
        "בחר base=main, compare=הענף שלך.",
        "קרא את ה-Diff וזהה מה נוסף ומה הוסר.",
      ],
      checklist: [
        "פתחתי את מסך ההשוואה",
        "בחרתי base ו-compare נכונים",
        "קראתי את ה-Diff",
        "זיהיתי שורות ירוקות/אדומות",
      ],
      verify: "מה היה בסיס ההשוואה (base) שבחרת?",
    },
    selfExercise: {
      task: "החלף את תצוגת ה-Diff בין Unified ל-Split. איזו תצוגה נוחה לך יותר ולמה?",
      hints: [
        "חפש סמל הגדרות/תצוגה בראש ה-Diff.",
        "Split = זה לצד זה; Unified = הכול בטור אחד.",
      ],
      solution: "ניסיתי את שתי התצוגות. Split (זה לצד זה) נוח להשוואה ויזואלית של ישן מול חדש, בעוד Unified חוסך מקום במסכים צרים. הבחירה תלויה בגודל השינוי ובמסך.",
    },
    knowledgeQuiz: [
      { q: "מה מסמן + ירוק ב-Diff?",
        options: ["שורה שהוסרה", "שורה שנוספה", "שגיאה"], correct: 1,
        explain: "ירוק עם + = שורה שנוספה." },
      { q: "מתי הכי חשוב לקרוא Diff?",
        options: ["אף פעם", "לפני Merge/אישור שינוי", "רק בסוף הפרויקט"], correct: 1,
        explain: "קריאת Diff לפני מיזוג תופסת טעויות מוקדם." },
    ],
    commonMistakes: [
      "לאשר שינוי בלי לקרוא Diff.",
      "לבחור base/compare הפוכים ולהתבלבל.",
      "להתעלם משורות אדומות שנמחקו בטעות.",
    ],
    fixes: [
      "תמיד קרא Diff לפני אישור.",
      "ודא שה-base הוא היעד (בד\"כ main).",
    ],
    summary: [
      "Diff מראה בדיוק מה השתנה.",
      "ירוק = נוסף, אדום = הוסר.",
      "Unified מול Split — שתי תצוגות.",
      "Compare משווה בין כל שתי נקודות.",
      "קריאת Diff לפני אישור = הרגל מקצועי.",
    ],
    resources: [
      { title: "GitHub Docs — About comparing branches", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/comparing-branches-in-pull-requests", type: "📄 מדריך" },
      { title: "GitHub Docs — Comparing commits", url: "https://docs.github.com/en/repositories/working-with-files/using-files/comparing-files", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 2.4 ============================ */
  "2.4": {
    id: "2.4", level: 2, title: "שחזור מטעות נפוצה",
    difficulty: "בסיסי",
    objectives: [
      "לבטל שינוי לא רצוי בבטחה",
      "להבין את ההבדל בין Revert למחיקה",
      "לשחזר גרסה קודמת של קובץ",
    ],
    terms: [
      { en: "Revert", he: "ביטול שינוי ע\"י יצירת Commit חדש שמבטל אותו (בלי למחוק היסטוריה).",
        example: "Merge שגוי? Revert יוצר Commit שמחזיר את המצב.",
        when: "כשרוצים לבטל שינוי שכבר נכנס, בבטחה.",
        mistakes: "לבלבל Revert עם מחיקת היסטוריה." },
      { en: "Restore", he: "שחזור קובץ לגרסה קודמת מתוך ההיסטוריה.",
        example: "מחקת תוכן בטעות? שחזר מגרסה ישנה.",
        when: "כשרוצים להחזיר מצב קודם של קובץ.",
        mistakes: "לערוך ידנית במקום לשחזר מההיסטוריה." },
      { en: "Recovery point", he: "נקודת שחזור — Commit יציב שאפשר לחזור אליו.",
        example: "לפני שינוי גדול, ודא שיש Commit יציב.",
        when: "לפני כל שינוי מסוכן.",
        mistakes: "לבצע שינוי גדול בלי נקודת חזרה." },
    ],
    explanation: `
      <p>טעויות קורות — והחדשות הטובות: ב-Git כמעט תמיד אפשר לחזור אחורה. נלמד את הדרך <strong>הבטוחה</strong>.</p>
      <div class="term"><span class="t-en">Revert</span> מבטל Commit ע\"י יצירת Commit <strong>חדש</strong> שמבטל אותו. ההיסטוריה נשמרת — זו הדרך הבטוחה והמקצועית.</div>
      <p>לשחזור קובץ בודד: פותחים את ה-History שלו, בוחרים גרסה קודמת, ו<span class="t-en">Restore</span>.</p>
      <div class="callout danger"><div class="c-title">⛔ מה לא לעשות</div>אל תמחק ותיצור מחדש בפאניקה. קודם עצור, הבן מה קרה, ובחר Revert/Restore. ההיסטוריה היא רשת הביטחון שלך.</div>
    `,
    speech: "טעויות קורות לכולם, והחדשה הטובה היא שבגיט כמעט תמיד אפשר לחזור אחורה. בשיעור הזה נלמד לעשות את זה בדרך הבטוחה. הכלי המרכזי נקרא רִיוֵרְט. רִיוֵרְט מבטל קומיט על ידי יצירת קומיט חדש, שמבטל את השינוי. שים לב לנקודה החשובה: ההיסטוריה עצמה נשמרת — שום דבר לא נמחק. זו הדרך הבטוחה והמקצועית לבטל שינוי שכבר נכנס. אם אתה רק רוצה לשחזר קובץ בודד לגרסה קודמת, אתה פותח את ההיסטוריה שלו, בוחר גרסה ישנה, ומבצע רִיסְטוֹר. וכלל זהב אחד: כשמשהו משתבש, אל תיכנס לפאניקה ואל תתחיל למחוק וליצור מחדש. קודם עצור, הבן מה קרה, ואז בחר רִיוֵרְט או רִיסְטוֹר. ההיסטוריה היא רשת הביטחון שלך.",
    demo: {
      intro: "נדגים Revert של Commit.",
      steps: [
        "פתח את רשימת ה-Commits (לשונית Commits).",
        "לחץ על Commit מסוים → כפתור <strong>...</strong> או <strong>Revert</strong>.",
        "GitHub ייצור PR/Commit שמבטל את השינוי.",
        "אשר כדי להחזיר את המצב הקודם.",
      ],
    },
    guidedExercise: {
      intro: "נתרגל שחזור קובץ מגרסה קודמת.",
      githubUrl: "https://github.com",
      steps: [
        "ערוך את <code>README.md</code>: מחק שורה חשובה ובצע Commit (בכוונה, כתרגיל).",
        "פתח <code>README.md</code> → <strong>History</strong>.",
        "לחץ על הגרסה הקודמת (לפני המחיקה).",
        "השתמש באפשרות לצפות/לשחזר את התוכן הקודם, וערוך בחזרה את השורה, ואז Commit.",
      ],
      checklist: [
        "יצרתי 'טעות' מכוונת",
        "פתחתי את ההיסטוריה",
        "מצאתי את הגרסה הקודמת",
        "שחזרתי את התוכן",
      ],
      verify: "איך מצאת את הגרסה שלפני הטעות?",
    },
    selfExercise: {
      task: "בצע <strong>Revert</strong> ל-Commit האחרון שלך דרך לשונית Commits. מה ההבדל בין Revert לבין פשוט למחוק את השינוי ידנית?",
      hints: [
        "Revert יוצר Commit חדש ושומר היסטוריה.",
        "מחיקה ידנית לא מתעדת את הכוונה.",
      ],
      solution: "Revert יוצר Commit חדש שמבטל את השינוי ומשאיר תיעוד מלא בהיסטוריה — רואים שהיה שינוי ושבוטל. מחיקה ידנית פשוט משנה את הקובץ בלי להבהיר שזה ביטול מכוון. Revert בטוח ושקוף יותר.",
    },
    knowledgeQuiz: [
      { q: "מה עושה Revert?",
        options: ["מוחק את ההיסטוריה", "יוצר Commit חדש שמבטל שינוי", "מוחק את ה-Repository"], correct: 1,
        explain: "Revert מבטל שינוי בבטחה ע\"י Commit חדש, בלי למחוק היסטוריה." },
      { q: "מה הצעד הראשון כשמשהו משתבש?",
        options: ["למחוק הכול ולהתחיל מחדש", "לעצור ולהבין מה קרה", "להתעלם"], correct: 1,
        explain: "קודם עוצרים ומבינים, ואז בוחרים Revert/Restore." },
    ],
    commonMistakes: [
      "למחוק וליצור מחדש בפאניקה.",
      "לבלבל Revert עם מחיקת היסטוריה.",
      "לבצע שינוי גדול בלי נקודת חזרה.",
    ],
    fixes: [
      "עצור → הבן → בחר Revert/Restore.",
      "לפני שינוי מסוכן — ודא Commit יציב קיים.",
    ],
    summary: [
      "Revert מבטל שינוי בבטחה (Commit חדש).",
      "Restore משחזר קובץ מגרסה קודמת.",
      "ההיסטוריה נשמרת תמיד.",
      "אל תמחק בפאניקה — עצור והבן.",
      "נקודת שחזור לפני שינוי מסוכן.",
    ],
    resources: [
      { title: "GitHub Docs — Reverting a commit", url: "https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/reverting-a-commit", type: "📄 מדריך" },
      { title: "GitHub Docs — Restoring files", url: "https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 3.1 ============================ */
  "3.1": {
    id: "3.1", level: 3, title: "Labels, Milestones, Assignees",
    difficulty: "בינוני",
    objectives: [
      "לארגן Issues עם Labels",
      "לקבץ משימות ל-Milestones",
      "לשייך אחראים (Assignees)",
    ],
    terms: [
      { en: "Label", he: "תווית צבעונית לסיווג Issues ו-PRs.",
        example: "bug, enhancement, priority-high.",
        when: "לסינון וארגון לפי סוג/עדיפות.",
        mistakes: "יותר מדי Labels בלי שיטה." },
      { en: "Milestone", he: "אבן דרך שמקבצת Issues ליעד/תאריך.",
        example: "'גרסה 1.0' שמכילה 10 Issues.",
        when: "לתכנון שחרורים ומעקב התקדמות.",
        mistakes: "לא להגדיר תאריך יעד." },
      { en: "Assignee", he: "האחראי לטיפול ב-Issue/PR.",
        example: "שיוך משימה לחבר צוות.",
        when: "להבהרת אחריות.",
        mistakes: "משימות ללא אחראי." },
    ],
    explanation: `
      <p>כמנהל הנדסי — כאן GitHub הופך לכלי ניהול אמיתי. שלושה כלים לארגון עבודה:</p>
      <div class="term"><span class="t-en">Labels</span> — תוויות לסיווג (bug / enhancement / priority). מאפשרות סינון מהיר.</div>
      <div class="term"><span class="t-en">Milestones</span> — אבני דרך שמקבצות Issues ליעד עם תאריך, עם סרגל התקדמות אוטומטי.</div>
      <div class="term"><span class="t-en">Assignees</span> — מי אחראי על כל משימה.</div>
      <div class="callout tip"><div class="c-title">💡 שילוב חכם</div>Issue עם Label 'bug' + Milestone 'גרסה 1.1' + Assignee = תמונה מלאה: מה, מתי, ומי.</div>
    `,
    speech: "השיעור הזה מיועד במיוחד למנהל הנדסי כמוך, כי כאן גיטהאב הופך לכלי ניהול אמיתי. נכיר שלושה כלים לארגון העבודה. הראשון, לֵייבֵּלְס — תוויות צבעוניות לסיווג המשימות, למשל באג, שיפור, או עדיפות גבוהה. הן מאפשרות סינון מהיר. השני, מַיילְסְטוֹנְס, שפירושו אבני דרך. אבן דרך מקבצת כמה אִישוּז יחד אל יעד מסוים, עם תאריך, וגיטהאב אפילו מציג סרגל התקדמות אוטומטי. והשלישי, אַסַיְניז — מי אחראי על כל משימה. והנה השילוב החכם: אִישוּ עם לֵייבֵּל של באג, שמשויך למַיילְסְטוֹן של גרסה אחת נקודה אחת, עם אַסַיְני אחראי — נותן לך תמונה מלאה במבט אחד: מה צריך לעשות, מתי, ומי אחראי.",
    demo: {
      intro: "נדגים הוספת Label, Milestone ו-Assignee ל-Issue.",
      steps: [
        "פתח Issue (או צור חדש).",
        "בפאנל הימני: <strong>Labels</strong> → בחר/צור תווית.",
        "<strong>Milestone</strong> → צור אבן דרך עם תאריך.",
        "<strong>Assignees</strong> → שייך לעצמך.",
      ],
    },
    guidedExercise: {
      intro: "נארגן Issue עם שלושת הכלים.",
      githubUrl: "https://github.com",
      steps: [
        "ב-Repository לחץ Issues → New issue, כותרת: <code>לתקן טעות ב-README</code>.",
        "בפאנל Labels הוסף <code>bug</code>.",
        "ב-Milestones צור <code>גרסה 1.0</code> עם תאריך יעד, ושייך אליו.",
        "ב-Assignees שייך לעצמך. שלח את ה-Issue.",
      ],
      checklist: [
        "הוספתי Label",
        "יצרתי ושייכתי Milestone",
        "שייכתי Assignee",
        "שלחתי את ה-Issue המאורגן",
      ],
      verify: "איזה Label בחרת ולמה הוא מתאים?",
    },
    selfExercise: {
      task: "צור Milestone בשם 'שבוע 1' עם תאריך, ופתח 2 Issues ושייך אותם אליו. מה מראה סרגל ההתקדמות של ה-Milestone?",
      hints: [
        "Milestones נמצא בלשונית Issues → Milestones.",
        "הסרגל מראה כמה Issues נסגרו מתוך הכלל.",
      ],
      solution: "יצרתי Milestone 'שבוע 1' עם 2 Issues. סרגל ההתקדמות מראה אחוז השלמה — למשל 0% כשאף Issue לא נסגר, ו-50% כשאחד נסגר. זה כלי מעקב מצוין להתקדמות יעד.",
    },
    knowledgeQuiz: [
      { q: "מה מקבץ Issues ליעד עם תאריך?",
        options: ["Label", "Milestone", "Assignee"], correct: 1,
        explain: "Milestone מקבץ Issues ליעד/תאריך עם מעקב." },
      { q: "למה משמש Assignee?",
        options: ["סיווג לפי צבע", "הגדרת אחראי", "תאריך יעד"], correct: 1,
        explain: "Assignee קובע מי אחראי לטפל." },
    ],
    commonMistakes: [
      "יותר מדי Labels בלי שיטה.",
      "Milestone בלי תאריך יעד.",
      "Issues בלי Assignee.",
    ],
    fixes: [
      "הגדר סט Labels קבוע וקטן.",
      "תמיד הוסף תאריך ל-Milestone ואחראי ל-Issue.",
    ],
    summary: [
      "Labels = סיווג; Milestones = יעדים; Assignees = אחראים.",
      "Milestone כולל סרגל התקדמות.",
      "השילוב נותן תמונת ניהול מלאה.",
      "סט Labels קטן וקבוע עדיף.",
      "GitHub ככלי ניהול הנדסי.",
    ],
    resources: [
      { title: "GitHub Docs — Labeling issues", url: "https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels", type: "📄 מדריך" },
      { title: "GitHub Docs — About milestones", url: "https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones", type: "📄 מדריך" },
    ],
    badge: "issue_manager",
  },

  /* ============================ שיעור 3.2 ============================ */
  "3.2": {
    id: "3.2", level: 3, title: "GitHub Projects — לוח משימות",
    difficulty: "בינוני",
    objectives: [
      "ליצור Project (לוח Kanban)",
      "להוסיף Issues ללוח ולהזיז בין עמודות",
      "להבין את הקשר בין Projects ל-Issues",
    ],
    terms: [
      { en: "Project", he: "לוח ניהול משימות ויזואלי מעל Issues ו-PRs.",
        example: "לוח עם עמודות To do / In progress / Done.",
        when: "לתכנון ומעקב ויזואלי של עבודה.",
        mistakes: "לנהל במקביל גם בלוח וגם במקום אחר ולאבד סנכרון." },
      { en: "Board / Table view", he: "תצוגות שונות של Project: לוח או טבלה.",
        example: "Board כמו Kanban; Table כמו גיליון.",
        when: "Board למעקב זרימה; Table לנתונים.",
        mistakes: "—" },
      { en: "Status field", he: "שדה הסטטוס שקובע באיזו עמודה הפריט.",
        example: "Todo → In progress → Done.",
        when: "למעקב אחר מצב כל משימה.",
        mistakes: "לא לעדכן סטטוס ולאבד תמונה." },
    ],
    explanation: `
      <p><span class="t-en">GitHub Projects</span> הוא לוח ניהול ויזואלי — חשוב עליו כמו Trello/Kanban, אבל מחובר ישירות ל-Issues וה-PRs שלך.</p>
      <p>הלוח בנוי מעמודות לפי <span class="t-en">Status</span> (למשל Todo / In progress / Done). גוררים כרטיסים בין העמודות ככל שהעבודה מתקדמת.</p>
      <p>יש שתי תצוגות עיקריות: <span class="t-en">Board</span> (לוח ויזואלי) ו-<span class="t-en">Table</span> (טבלה כמו גיליון עם שדות מותאמים).</p>
      <div class="callout tip"><div class="c-title">💡 יתרון מרכזי</div>כל כרטיס מקושר ל-Issue אמיתי — סגירת ה-Issue מעדכנת את הלוח, והכול נשאר מסונכרן.</div>
    `,
    speech: "גיטהאב פְּרוֹגֵ'קְטְס הוא לוח ניהול משימות ויזואלי. אפשר לחשוב עליו כמו טְרֵלוֹ או לוח קַנְבַּאן, אבל עם יתרון גדול: הוא מחובר ישירות לאִישוּז ולפּוּל ריקְווֵסְטְס שלך. הלוח בנוי מעמודות לפי סטטוס — למשל, לעשות, בעבודה, והושלם. ככל שהעבודה מתקדמת, אתה פשוט גורר את הכרטיסים מעמודה לעמודה. יש שתי תצוגות עיקריות: בּוֹרְד, שזה הלוח הויזואלי, וטֵייבֵּל, שזו תצוגת טבלה כמו גיליון אלקטרוני, עם שדות שאתה יכול להתאים. והיתרון המרכזי: כל כרטיס על הלוח מקושר לאִישוּ אמיתי. כשאתה סוגר את האִישוּ, הלוח מתעדכן אוטומטית — וככה הכול נשאר מסונכרן, בלי עבודה כפולה.",
    demo: {
      intro: "נדגים יצירת Project והוספת פריטים.",
      steps: [
        "בפרופיל/Repository לחץ על לשונית <strong>Projects</strong> → <strong>New project</strong>.",
        "בחר תבנית <strong>Board</strong>.",
        "לחץ <strong>Add item</strong> והוסף Issue קיים או כרטיס חדש.",
        "גרור כרטיס בין העמודות Todo → In progress.",
      ],
    },
    guidedExercise: {
      intro: "ניצור לוח Kanban ראשון.",
      githubUrl: "https://github.com",
      steps: [
        "פתח לשונית <strong>Projects</strong> → <strong>New project</strong> → תבנית <strong>Board</strong>.",
        "תן שם: <code>לוח הצוות שלי</code>.",
        "לחץ <strong>Add item</strong> → הוסף 2 Issues (או כרטיסים חדשים).",
        "גרור כרטיס אחד לעמודה <strong>In progress</strong>.",
      ],
      checklist: [
        "יצרתי Project מסוג Board",
        "הוספתי פריטים ללוח",
        "הזזתי כרטיס בין עמודות",
        "אני מבין את הקשר ל-Issues",
      ],
      verify: "לאיזו עמודה הזזת כרטיס?",
    },
    selfExercise: {
      task: "החלף את תצוגת ה-Project ל-<strong>Table</strong>. מה היתרון של תצוגת טבלה על פני לוח?",
      hints: [
        "למעלה יש מתג בין Board ל-Table.",
        "טבלה טובה לנתונים ושדות; לוח טוב לזרימה.",
      ],
      solution: "תצוגת Table מציגה את הפריטים כשורות עם שדות (סטטוס, אחראי, תאריך), ונוחה לעריכה מרובה ולמיון/סינון לפי שדות — בעוד Board מצטיין בהצגת זרימת העבודה הויזואלית.",
    },
    knowledgeQuiz: [
      { q: "מה זה GitHub Projects?",
        options: ["עורך קוד", "לוח ניהול משימות ויזואלי", "שרת"], correct: 1,
        explain: "Projects הוא לוח ניהול מעל Issues/PRs." },
      { q: "מה קובע באיזו עמודה הכרטיס?",
        options: ["שדה Status", "הצבע", "השם"], correct: 0,
        explain: "שדה הסטטוס קובע את העמודה." },
    ],
    commonMistakes: [
      "לנהל במקביל בלוח ובמקום נוסף.",
      "לא לעדכן סטטוס כרטיסים.",
      "ליצור יותר מדי עמודות מבלבלות.",
    ],
    fixes: [
      "לוח אחד כמקור אמת.",
      "עדכן סטטוס תוך כדי עבודה.",
    ],
    summary: [
      "Projects = לוח Kanban מחובר ל-Issues.",
      "עמודות לפי Status.",
      "Board מול Table — שתי תצוגות.",
      "כרטיסים מסונכרנים עם Issues.",
      "כלי תכנון ומעקב ויזואלי.",
    ],
    resources: [
      { title: "GitHub Docs — About Projects", url: "https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Creating a project", url: "https://docs.github.com/en/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 3.3 ============================ */
  "3.3": {
    id: "3.3", level: 3, title: "תבניות (Templates) ו-Releases",
    difficulty: "בינוני",
    objectives: [
      "ליצור תבנית ל-Issues",
      "להבין מה זה Release ו-Tag",
      "לפרסם Release ראשון",
    ],
    terms: [
      { en: "Issue Template", he: "תבנית מוכנה למילוי Issues חדשים.",
        example: "תבנית Bug Report עם שדות: מה קרה, איך לשחזר.",
        when: "כדי לקבל Issues עקביים ומלאים.",
        mistakes: "תבנית ארוכה מדי שמרתיעה." },
      { en: "Release", he: "גרסה רשמית וארוזה של הפרויקט.",
        example: "v1.0.0 עם תיאור מה חדש.",
        when: "לציון אבן דרך או גרסה להורדה.",
        mistakes: "לבלבל Release עם Commit." },
      { en: "Tag", he: "סימון נקודה מסוימת בהיסטוריה (בד\"כ גרסה).",
        example: "v1.0.0 מצביע על Commit ספציפי.",
        when: "לסימון גרסאות.",
        mistakes: "Tags בלי קונבנציית שמות." },
    ],
    explanation: `
      <p>שני כלים שהופכים את הפרויקט למקצועי: <strong>תבניות</strong> לעקביות, ו-<strong>Releases</strong> לגרסאות.</p>
      <div class="term"><span class="t-en">Issue Templates</span> — טפסים מוכנים שמבטיחים שכל Issue יכיל את המידע הדרוש (למשל Bug Report / Feature Request).</div>
      <div class="term"><span class="t-en">Release</span> — גרסה רשמית, מסומנת ב-<span class="t-en">Tag</span> (כמו v1.0.0), עם תיאור "מה חדש". משתמשים יכולים להוריד אותה.</div>
      <div class="callout tip"><div class="c-title">💡 קונבנציה</div>שמות גרסאות נפוצים בפורמט <code>vX.Y.Z</code> (Semantic Versioning): X=שינוי גדול, Y=תכונה, Z=תיקון.</div>
    `,
    speech: "בשיעור הזה נכיר שני כלים שהופכים פרויקט מחובבני למקצועי: תבניות ורִילִיסֵס. נתחיל בתבניות לאִישוּז. אִישוּ טֵמְפְּלֵייט הוא טופס מוכן מראש, שמבטיח שכל אִישוּ חדש יכיל את כל המידע הדרוש. למשל, תבנית לדיווח באג תכלול שדות כמו: מה קרה, ואיך לשחזר את הבעיה. ככה מקבלים דיווחים עקביים ומלאים. הכלי השני הוא רִילִיס — גרסה רשמית וארוזה של הפרויקט. כל רִילִיס מסומן בתַּג, למשל וי-אחת-נקודה-אפס-נקודה-אפס, ומלווה בתיאור של מה חדש. משתמשים יכולים אפילו להוריד את הגרסה. וטיפ לגבי מוסכמות: שמות גרסאות נפוצים בפורמט וי, איקס נקודה וואי נקודה זד. זה נקרא סֵמַנְטִיק וֵרְשֵנִינְג: המספר הראשון לשינוי גדול, השני לתכונה חדשה, והשלישי לתיקון קטן.",
    demo: {
      intro: "נדגים יצירת Release.",
      steps: [
        "ב-Repository, בצד ימין לחץ <strong>Releases</strong> → <strong>Create a new release</strong>.",
        "ב-<strong>Choose a tag</strong> הקלד <code>v1.0.0</code> → Create new tag.",
        "תן כותרת ותיאור 'מה חדש'.",
        "לחץ <strong>Publish release</strong>.",
      ],
    },
    guidedExercise: {
      intro: "נפרסם Release ראשון.",
      githubUrl: "https://github.com",
      steps: [
        "פתח את ה-Repository שלך, בצד ימין לחץ <strong>Releases</strong>.",
        "לחץ <strong>Create a new release</strong> (או Draft a new release).",
        "Tag: <code>v1.0.0</code>. כותרת: <code>גרסה ראשונה</code>.",
        "תיאור: שורה על מה כולל. לחץ <strong>Publish release</strong>.",
      ],
      checklist: [
        "פתחתי את אזור Releases",
        "יצרתי Tag v1.0.0",
        "כתבתי כותרת ותיאור",
        "פרסמתי את ה-Release",
      ],
      verify: "איזה Tag נתת ל-Release?",
    },
    selfExercise: {
      task: "צור קובץ <code>.github/ISSUE_TEMPLATE/bug_report.md</code> עם כותרת ושדות בסיסיים. למה תבנית משפרת את איכות הדיווחים?",
      hints: [
        "צור קובץ בנתיב .github/ISSUE_TEMPLATE/.",
        "כלול שדות: תיאור, שחזור, התנהגות צפויה.",
      ],
      solution: "יצרתי bug_report.md עם שדות: מה קרה, שלבי שחזור, מה ציפיתי. תבנית משפרת איכות כי היא מנחה את המדווח לתת את כל המידע הדרוש, במקום דיווחים חלקיים — וזה חוסך סבבי בירור.",
    },
    knowledgeQuiz: [
      { q: "מה מסמן Tag כמו v1.0.0?",
        options: ["גודל קובץ", "נקודת גרסה בהיסטוריה", "שם משתמש"], correct: 1,
        explain: "Tag מסמן נקודה (גרסה) בהיסטוריה." },
      { q: "למה משמשת Issue Template?",
        options: ["לעיצוב צבעים", "לקבל Issues עקביים ומלאים", "למחוק Issues"], correct: 1,
        explain: "תבנית מבטיחה מבנה ומידע עקבי ב-Issues." },
    ],
    commonMistakes: [
      "לבלבל Release עם Commit רגיל.",
      "תבנית ארוכה מדי שמרתיעה.",
      "Tags בלי קונבנציה (v1 מול 1.0).",
    ],
    fixes: [
      "השתמש ב-vX.Y.Z עקבי.",
      "שמור תבניות קצרות וממוקדות.",
    ],
    summary: [
      "Issue Templates = עקביות בדיווחים.",
      "Release = גרסה רשמית מסומנת ב-Tag.",
      "Tag בפורמט vX.Y.Z (Semantic Versioning).",
      "Releases ניתנות להורדה עם תיאור.",
      "כלים שהופכים פרויקט למקצועי.",
    ],
    resources: [
      { title: "GitHub Docs — About releases", url: "https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Issue templates", url: "https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 4.1 ============================ */
  "4.1": {
    id: "4.1", level: 4, title: "Copilot ב-GitHub.com — יסודות",
    difficulty: "מתקדם",
    video: { id: "n0NlxUyA7FI", title: "Getting started with GitHub Copilot | Tutorial", author: "GitHub" },
    objectives: [
      "להבין מה Copilot יכול לעשות ב-GitHub.com",
      "לנסח בקשה ברורה ולתת הקשר (context)",
      "לבקש הסבר על קוד",
    ],
    terms: [
      { en: "GitHub Copilot", he: "עוזר AI שעונה על שאלות, מסביר ומציע קוד.",
        example: "שאלת את Copilot Chat 'מה הקובץ הזה עושה?'.",
        when: "להבנה, כתיבה, תיקון ותיעוד.",
        mistakes: "לקבל תשובות בלי לבדוק אותן." },
      { en: "Context", he: "המידע שאתה נותן ל-Copilot כדי שיבין מה אתה צריך.",
        example: "צירוף Repository או קובץ רלוונטי לשאלה.",
        when: "תמיד — הקשר טוב = תשובה טובה.",
        mistakes: "שאלה כללית בלי הקשר → תשובה כללית." },
      { en: "Copilot Chat", he: "ממשק שיחה עם Copilot (ב-github.com/copilot).",
        example: "חלון צ'אט ששואלים בו בשפה טבעית.",
        when: "לשאלות, הסברים ותכנון.",
        mistakes: "לצפות שיזכור שיחות קודמות בלי הקשר." },
    ],
    explanation: `
      <p><span class="t-en">GitHub Copilot</span> זמין ישירות ב-GitHub.com — שואלים אותו בשפה טבעית, והוא עונה, מסביר ומציע.</p>
      <p>הכלל החשוב ביותר הוא <span class="t-en">Context</span> (הקשר): ככל שתיתן יותר מידע רלוונטי (קובץ, Repository, מטרה), התשובה תהיה מדויקת יותר.</p>
      <p>דוגמאות לשימוש: "הסבר מה הקובץ הזה עושה", "מצא באג בקוד", "כתוב README לפרויקט", "הצע בדיקות".</p>
      <div class="callout warn"><div class="c-title">⚠️ כלל זהב</div>Copilot הוא <strong>עוזר</strong>, לא מקור אמת. תמיד בדוק את התשובות — הן יכולות להיות שגויות גם כשהן נשמעות בטוחות.</div>
    `,
    speech: "בשיעור הזה נתחיל לעבוד עם גיטהאב קוֹפַּיילוֹט ישירות באתר גיטהאב. קוֹפַּיילוֹט הוא עוזר בינה מלאכותית, שאפשר לשאול אותו בשפה טבעית, והוא עונה, מסביר, ואפילו מציע קוד. הכלל הכי חשוב לעבודה טובה איתו נקרא קוֹנְטֵקְסְט, כלומר הקשר. ככל שתיתן לו יותר מידע רלוונטי — למשל איזה קובץ או איזה פרויקט אתה מדבר עליו, ומה המטרה שלך — התשובה תהיה מדויקת הרבה יותר. שאלה כללית מדי תקבל תשובה כללית מדי. דוגמאות לשימושים נפוצים: הסבר לי מה הקובץ הזה עושה, מצא באג בקוד, או כתוב לי רִידמִי. אבל שים לב לכלל הזהב: קוֹפַּיילוֹט הוא עוזר, לא מקור אמת מוחלט. תמיד, אבל תמיד, בדוק את התשובות שהוא נותן — הן יכולות להיות שגויות, גם כשהן נשמעות בטוחות לחלוטין.",
    demo: {
      intro: "נדגים שאלה בסיסית ל-Copilot Chat.",
      steps: [
        "היכנס ל-<strong>github.com/copilot</strong> (נדרש Copilot פעיל בחשבון).",
        "צרף Repository או קובץ כהקשר.",
        "שאל: 'הסבר מה הפרויקט הזה עושה'.",
        "קרא את התשובה ובדוק מול הקוד האמיתי.",
      ],
    },
    guidedExercise: {
      intro: "נשאל את Copilot שאלת הבנה על Repository.",
      githubUrl: "https://github.com/copilot",
      steps: [
        "פתח את Copilot ב-GitHub (כפתור למטה).",
        "צרף כהקשר Repository שלך או ציבורי מוכר.",
        "שאל בעברית או אנגלית: 'מה המטרה של הפרויקט הזה ומאילו קבצים הוא מורכב?'",
        "קרא את התשובה והשווה לקבצים בפועל.",
      ],
      checklist: [
        "פתחתי את Copilot ב-GitHub",
        "צירפתי הקשר (Repository/קובץ)",
        "ניסחתי שאלה ברורה",
        "בדקתי את התשובה מול המקור",
      ],
      verify: "איזה הקשר צירפת לשאלה?",
    },
    selfExercise: {
      task: "שאל את Copilot את אותה שאלה פעמיים: פעם בלי הקשר ופעם עם Repository מצורף. מה ההבדל בתשובות?",
      hints: [
        "בלי הקשר התשובה כללית.",
        "עם הקשר התשובה ספציפית לפרויקט.",
      ],
      solution: "בלי הקשר Copilot נתן תשובה כללית ומנחשת. עם Repository מצורף, התשובה התייחסה לקבצים ולמטרה האמיתיים של הפרויקט. המסקנה: הקשר טוב משפר דרמטית את איכות התשובה.",
    },
    knowledgeQuiz: [
      { q: "מה הכי משפר את איכות תשובת Copilot?",
        options: ["שאלה ארוכה", "הקשר (context) רלוונטי", "אותיות גדולות"], correct: 1,
        explain: "הקשר רלוונטי נותן ל-Copilot על מה להתבסס." },
      { q: "איך להתייחס לתשובות Copilot?",
        options: ["אמת מוחלטת", "עוזר שצריך לבדוק", "להתעלם"], correct: 1,
        explain: "Copilot עוזר אך יכול לטעות — תמיד לבדוק." },
    ],
    commonMistakes: [
      "שאלות כלליות בלי הקשר.",
      "לקבל תשובות בלי בדיקה.",
      "לצפות שיזכור הכול בלי הקשר.",
    ],
    fixes: [
      "צרף קובץ/Repository רלוונטי.",
      "בדוק כל תשובה מול המקור.",
    ],
    summary: [
      "Copilot זמין ב-GitHub.com לשאלות והסברים.",
      "Context הוא המפתח לתשובה טובה.",
      "מתאים להבנה, כתיבה, תיקון ותיעוד.",
      "תמיד לבדוק — הוא עוזר, לא מקור אמת.",
      "שאלה ברורה + הקשר = תשובה מדויקת.",
    ],
    resources: [
      { title: "GitHub Docs — What is GitHub Copilot", url: "https://docs.github.com/en/copilot/get-started/what-is-github-copilot", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Using Copilot Chat", url: "https://docs.github.com/en/copilot/github-copilot-chat/about-github-copilot-chat", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 4.2 ============================ */
  "4.2": {
    id: "4.2", level: 4, title: "Generate → Inspect → Test → Verify → Improve",
    difficulty: "מתקדם",
    objectives: [
      "להכיר את לולאת העבודה הבטוחה עם AI",
      "לבדוק פלט של Copilot באופן שיטתי",
      "להימנע מאישור אוטומטי של שינויים",
    ],
    terms: [
      { en: "Generate", he: "שלב יצירת הפלט הראשוני ע\"י Copilot.",
        example: "ביקשת פונקציה — Copilot הפיק גרסה.",
        when: "ההתחלה — אבל לא הסוף.",
        mistakes: "לעצור כאן ולהשתמש בלי בדיקה." },
      { en: "Inspect", he: "בדיקה ויזואלית של מה שנוצר.",
        example: "קריאת הקוד/התוכן והבנתו.",
        when: "מיד אחרי Generate.",
        mistakes: "לדלג על קריאה." },
      { en: "Verify", he: "אימות שהתוצאה עונה על הדרישות.",
        example: "בדיקה מול הקריטריונים שהגדרת.",
        when: "אחרי בדיקה והרצה.",
        mistakes: "להניח שזה תקין כי זה 'רץ'." },
    ],
    explanation: `
      <p>הכלל החשוב ביותר בעבודה עם AI: <strong>אל תסמוך — תבדוק</strong>. בשביל זה יש לולאת עבודה בת 5 שלבים:</p>
      <ol>
        <li><strong>Generate</strong> — בקש מ-Copilot ליצור.</li>
        <li><strong>Inspect</strong> — קרא והבן מה נוצר.</li>
        <li><strong>Test</strong> — הרץ/בדוק בפועל.</li>
        <li><strong>Verify</strong> — ודא שזה עונה על הדרישות.</li>
        <li><strong>Improve</strong> — בקש שיפור וחזור על הלולאה.</li>
      </ol>
      <div class="callout danger"><div class="c-title">⛔ הטעות הגדולה</div>"זה רץ, אז זה נכון" — שגוי! קוד יכול לרוץ ועדיין להיות שגוי. אימות (Verify) הוא שלב נפרד וחובה.</div>
    `,
    speech: "זהו אולי השיעור החשוב ביותר בכל הנוגע לעבודה בטוחה עם בינה מלאכותית. הכלל המרכזי הוא: אל תסמוך — תבדוק. כדי ליישם את זה, נשתמש בלולאת עבודה של חמישה שלבים. השלב הראשון הוא גֵ'נֵרֵייט, יצירה — אתה מבקש מקוֹפַּיילוֹט ליצור משהו. השלב השני הוא אִינְסְפֵּקְט, בדיקה — אתה קורא ומבין מה נוצר. השלב השלישי הוא טֵסְט — אתה מריץ או בודק בפועל. השלב הרביעי, וזה הקריטי, הוא וֵרִיפַיי, אימות — אתה מוודא שהתוצאה באמת עונה על הדרישות שהגדרת. והשלב החמישי הוא אִימְפְּרוּב, שיפור — אתה מבקש שיפור וחוזר על הלולאה. ועכשיו לטעות הגדולה שחשוב להימנע ממנה: המחשבה ש-אם הקוד רץ, אז הוא נכון. זה פשוט לא נכון. קוד יכול לרוץ בלי שגיאות, ועדיין לעשות את הדבר הלא נכון. לכן אימות הוא שלב נפרד, וחובה.",
    demo: {
      intro: "נדגים את הלולאה על בקשה פשוטה.",
      steps: [
        "Generate: בקש מ-Copilot 'כתוב פונקציה שמחשבת ממוצע'.",
        "Inspect: קרא את הקוד — האם הוא מטפל ברשימה ריקה?",
        "Test: חשוב על קלט בדיקה (רשימה ריקה, מספרים).",
        "Verify + Improve: אם חסר טיפול במקרה קצה — בקש שיפור.",
      ],
    },
    guidedExercise: {
      intro: "נתרגל את הלולאה עם Copilot.",
      githubUrl: "https://github.com/copilot",
      steps: [
        "בקש מ-Copilot: 'כתוב פונקציה שבודקת אם מספר זוגי'.",
        "Inspect: קרא את הקוד והבן אותו.",
        "Test: חשוב — מה יקרה עם 0? עם מספר שלילי?",
        "Improve: בקש 'הוסף טיפול במקרי קצה והסבר קצר'.",
      ],
      checklist: [
        "ביקשתי יצירה (Generate)",
        "קראתי והבנתי (Inspect)",
        "חשבתי על מקרי בדיקה (Test)",
        "ביקשתי שיפור (Improve)",
      ],
      verify: "איזה מקרה קצה זיהית שלא טופל?",
    },
    selfExercise: {
      task: "בקש מ-Copilot קוד כלשהו, ומצא בכוונה בעיה אחת (מקרה קצה, שם לא ברור, חוסר בדיקה). איך תנסח בקשת שיפור טובה?",
      hints: [
        "בקשת שיפור טובה ספציפית: מה לשפר ולמה.",
        "לדוגמה: 'טפל בקלט ריק והוסף שם משתנה ברור'.",
      ],
      solution: "זיהיתי שחסר טיפול בקלט ריק. ניסחתי: 'שפר את הפונקציה כך שתטפל ברשימה ריקה ותחזיר 0, ותן שם משתנה ברור יותר, בלי לשנות את שאר הלוגיקה'. בקשה ספציפית מניבה שיפור ממוקד.",
    },
    knowledgeQuiz: [
      { q: "מהו הסדר הנכון של הלולאה?",
        options: ["Generate→Inspect→Test→Verify→Improve", "Test→Generate→Improve", "Verify→Generate"], correct: 0,
        explain: "יוצרים, בודקים, מריצים, מאמתים, משפרים." },
      { q: "'הקוד רץ' אומר ש...",
        options: ["הוא בהכרח נכון", "הוא עדיין צריך אימות", "אפשר לשכוח ממנו"], correct: 1,
        explain: "ריצה אינה הוכחת נכונות — צריך Verify." },
    ],
    commonMistakes: [
      "לעצור אחרי Generate.",
      "להניח ש'רץ = נכון'.",
      "אישור אוטומטי בלי קריאה.",
    ],
    fixes: [
      "עבור את כל 5 השלבים.",
      "הגדר קריטריונים ואמת מולם.",
    ],
    summary: [
      "לולאה: Generate → Inspect → Test → Verify → Improve.",
      "אל תסמוך — תבדוק.",
      "'רץ' אינו 'נכון'.",
      "אימות הוא שלב חובה נפרד.",
      "בקשת שיפור ספציפית = תוצאה טובה.",
    ],
    resources: [
      { title: "GitHub Docs — Responsible use of Copilot", url: "https://docs.github.com/en/copilot/responsible-use-of-github-copilot-features", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Best practices for Copilot", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 4.3 ============================ */
  "4.3": {
    id: "4.3", level: 4, title: "Custom Instructions",
    difficulty: "מתקדם",
    objectives: [
      "להבין מה זה Custom Instructions",
      "ליצור קובץ copilot-instructions.md בדפדפן",
      "לאמת שההוראות משפיעות על Copilot",
    ],
    terms: [
      { en: "Custom Instructions", he: "הוראות קבועות ש-Copilot מקבל אוטומטית בכל בקשה ב-Repository.",
        example: "'הסבר בעברית', 'אל תמחק קבצים בלי אישור'.",
        when: "להגדרת סגנון וכללים עקביים לפרויקט.",
        mistakes: "הוראות סותרות או ארוכות מדי." },
      { en: "copilot-instructions.md", he: "הקובץ שמכיל את ההוראות, בתיקיית .github.",
        example: ".github/copilot-instructions.md",
        when: "אחד לכל Repository.",
        mistakes: "למקם אותו בנתיב שגוי." },
      { en: "Path-specific instructions", he: "הוראות לקבצים מסוימים (NAME.instructions.md).",
        example: "הוראות שחלות רק על קבצי *.py.",
        when: "כשרוצים כללים שונים לסוגי קבצים.",
        mistakes: "applyTo שגוי שלא תואם קבצים." },
    ],
    explanation: `
      <p><span class="t-en">Custom Instructions</span> הם הדרך "ללמד" את Copilot איך לעבוד בפרויקט שלך — באופן קבוע ואוטומטי.</p>
      <div class="term">הקובץ <code>.github/copilot-instructions.md</code> מכיל הוראות בשפה טבעית (Markdown). Copilot קורא אותן אוטומטית בכל בקשה בהקשר ה-Repository.</div>
      <p>דוגמאות להוראות שימושיות: "הסבר בעברית פשוטה", "הכן תוכנית לפני ביצוע", "אל תמחק קבצים בלי אישור", "שמור על פונקציונליות קיימת", "אל תשתמש במידע חסוי".</p>
      <div class="callout tip"><div class="c-title">💡 אימות</div>אחרי שמוסיפים, בשיחה עם Copilot אפשר לפתוח את רשימת ה-References ולראות אם <code>copilot-instructions.md</code> מופיע — סימן שההוראות נקראו.</div>
    `,
    speech: "בשיעור הזה נלמד כלי רב עוצמה: קַסְטוֹם אִינְסְטְרַקְשֵנְס, כלומר הוראות מותאמות אישית. זו הדרך ללמד את קוֹפַּיילוֹט איך לעבוד בפרויקט שלך, באופן קבוע ואוטומטי. איך זה עובד? אתה יוצר קובץ בשם קוֹפַּיילוֹט-אִינְסְטְרַקְשֵנְס נקודה אֵם-דִי, בתוך תיקייה בשם נקודה-גִּיטהַאב. בקובץ הזה אתה כותב הוראות בשפה טבעית, וקוֹפַּיילוֹט קורא אותן אוטומטית בכל בקשה. הנה כמה דוגמאות שימושיות במיוחד עבורך: הסבר בעברית פשוטה. הכן תוכנית לפני שאתה מבצע. אל תמחק קבצים בלי אישור. שמור על הפונקציונליות הקיימת. ואל תשתמש במידע חסוי. ואיך יודעים שזה עובד? אחרי שהוספת את הקובץ, בשיחה עם קוֹפַּיילוֹט תוכל לפתוח את רשימת ההפניות, ולראות אם הקובץ מופיע שם. אם כן — סימן שההוראות נקראו והופעלו.",
    demo: {
      intro: "נדגים יצירת קובץ ההוראות בדפדפן.",
      steps: [
        "ב-Repository לחץ <strong>Add file → Create new file</strong>.",
        "בשם הקובץ הקלד: <code>.github/copilot-instructions.md</code> (ה-/ יוצר תיקייה).",
        "כתוב הוראות בעברית, למשל: 'הסבר בעברית פשוטה' ו'אל תמחק קבצים בלי אישור'.",
        "בצע <strong>Commit changes</strong>.",
      ],
    },
    guidedExercise: {
      intro: "ניצור Custom Instructions לפרויקט שלנו.",
      githubUrl: "https://github.com",
      steps: [
        "ב-Repository לחץ <strong>Add file → Create new file</strong>.",
        "שם: <code>.github/copilot-instructions.md</code>.",
        "תוכן: רשום 4 הוראות — הסבר בעברית, תוכנית לפני ביצוע, לא למחוק בלי אישור, לא להשתמש במידע חסוי.",
        "בצע <strong>Commit changes</strong>.",
      ],
      checklist: [
        "יצרתי קובץ בנתיב .github/",
        "השם הוא copilot-instructions.md",
        "כתבתי לפחות 4 הוראות",
        "ביצעתי Commit",
      ],
      verify: "באיזו תיקייה חייב להיות הקובץ?",
    },
    selfExercise: {
      task: "הוסף להוראות כלל שמחייב את Copilot 'להריץ/להציע בדיקות אחרי שינוי' ו'לתעד מה השתנה'. למה הוראות כאלה חשובות למנהל?",
      hints: [
        "הוראות הופכות התנהגות טובה לברירת מחדל.",
        "חשוב על עקביות ואיכות לאורך זמן.",
      ],
      solution: "הוספתי: 'הצע בדיקות אחרי כל שינוי' ו'תעד בקצרה מה השתנה ולמה'. זה חשוב כי זה הופך פרקטיקות איכות לברירת מחדל אוטומטית — כל שינוי מגיע עם בדיקות ותיעוד, מה שמבטיח עקביות ואיכות בלי להסתמך על זיכרון.",
    },
    knowledgeQuiz: [
      { q: "היכן ממוקם קובץ ההוראות הראשי?",
        options: [".github/copilot-instructions.md", "README.md", "root/instructions.txt"], correct: 0,
        explain: "הקובץ הוא .github/copilot-instructions.md." },
      { q: "מה היתרון של Custom Instructions?",
        options: ["מריץ קוד מהר", "כללים עקביים ואוטומטיים ל-Copilot", "מוחק קבצים"], correct: 1,
        explain: "הם מחילים סגנון וכללים באופן קבוע ואוטומטי." },
    ],
    commonMistakes: [
      "נתיב שגוי (לא ב-.github/).",
      "הוראות סותרות.",
      "הוראות ארוכות ומעורפלות.",
    ],
    fixes: [
      "ודא נתיב .github/copilot-instructions.md.",
      "כתוב הוראות קצרות, ברורות ולא סותרות.",
    ],
    summary: [
      "Custom Instructions = כללים קבועים ל-Copilot.",
      "הקובץ: .github/copilot-instructions.md.",
      "נכתב ב-Markdown, בשפה טבעית.",
      "אפשר לאמת ברשימת References.",
      "הופך איכות ובטיחות לברירת מחדל.",
    ],
    resources: [
      { title: "GitHub Docs — Add repository custom instructions", url: "https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — About customizing Copilot", url: "https://docs.github.com/en/copilot/concepts/prompting/response-customization", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 4.4 ============================ */
  "4.4": {
    id: "4.4", level: 4, title: "Prompt Files וכתיבת Prompts איכותיים",
    difficulty: "מתקדם",
    objectives: [
      "להכיר את מבנה ה-Prompt האיכותי",
      "להבחין בין Prompt חלש למשופר",
      "להבין מה זה Prompt File לשימוש חוזר",
    ],
    terms: [
      { en: "Prompt", he: "הבקשה שאתה נותן ל-AI.",
        example: "'כתוב פונקציה' מול בקשה מפורטת עם דרישות.",
        when: "בכל אינטראקציה עם Copilot.",
        mistakes: "בקשה מעורפלת → תוצאה מעורפלת." },
      { en: "Prompt File", he: "קובץ Prompt שמור לשימוש חוזר (.prompt.md).",
        example: "קובץ 'code-review' שמריצים שוב ושוב.",
        when: "לתהליכים חוזרים (בדיקה, תיעוד, בדיקת אבטחה).",
        mistakes: "לכתוב מחדש את אותו prompt כל פעם." },
      { en: "Validation Criteria", he: "קריטריונים שמגדירים מתי התוצאה טובה.",
        example: "'הקוד חייב לטפל בקלט ריק'.",
        when: "בכל prompt רציני.",
        mistakes: "לא להגדיר מתי 'סיימנו'." },
    ],
    explanation: `
      <p>Prompt טוב הוא ההבדל בין תוצאה מעולה לבינונית. מבנה מומלץ ל-Prompt איכותי:</p>
      <ol>
        <li><strong>Role</strong> — תפקיד ("פעל כמהנדס בכיר")</li>
        <li><strong>Goal</strong> — מטרה</li>
        <li><strong>Background</strong> — רקע/הקשר</li>
        <li><strong>Input</strong> — הקלט</li>
        <li><strong>Constraints</strong> — מגבלות ("אל תמחק", "שמור על X")</li>
        <li><strong>Process</strong> — תהליך נדרש ("תכנן לפני ביצוע")</li>
        <li><strong>Expected Output</strong> — פלט צפוי</li>
        <li><strong>Validation</strong> — קריטריונים לבדיקה</li>
      </ol>
      <div class="term"><span class="t-en">Prompt File</span> — קובץ (<code>.prompt.md</code>) ששומר prompt מוכן לשימוש חוזר, לתהליכים כמו code review, יצירת בדיקות או תיעוד.</div>
    `,
    speech: "פְּרוֹמְפְּט טוב הוא ההבדל בין תוצאה מעולה לתוצאה בינונית. בשיעור הזה נלמד מבנה מומלץ לכתיבת פְּרוֹמְפְּט איכותי, בשמונה חלקים. ראשית, רוֹל — התפקיד: למשל, פעל כמהנדס תוכנה בכיר. שנית, גוֹל — המטרה. שלישית, בֵּקְגְרַאוּנְד — הרקע וההקשר. רביעית, אִינְפּוּט — הקלט. חמישית, קוֹנְסְטְרֵיינְטְס — המגבלות, למשל: אל תמחק קבצים, שמור על הקיים. שישית, פְּרוֹסֵס — התהליך הנדרש, למשל: תכנן לפני שאתה מבצע. שביעית, אֵקְסְפֵּקְטֵד אַאוּטְפּוּט — הפלט הצפוי. ושמינית, וַלִידֵיישֵן — הקריטריונים לבדיקה, שמגדירים מתי התוצאה טובה. ולבסוף, נכיר את פְּרוֹמְפְּט פַייל — קובץ ששומר פְּרוֹמְפְּט מוכן לשימוש חוזר, לתהליכים כמו בדיקת קוד, יצירת בדיקות או תיעוד. ככה לא כותבים את אותו פְּרוֹמְפְּט שוב ושוב.",
    demo: {
      intro: "נשווה Prompt חלש מול משופר.",
      steps: [
        "<strong>חלש:</strong> 'כתוב קוד לטופס'. למה חלש? אין הקשר, דרישות או קריטריונים.",
        "<strong>משופר:</strong> 'פעל כמפתח web. צור טופס קשר ב-HTML עם שדות שם/אימייל/הודעה, ולידציה בסיסית, ונגישות. אל תשתמש בספריות חיצוניות'.",
        "שים לב: תפקיד + מטרה + מגבלות + פלט צפוי.",
        "הרץ את שניהם ב-Copilot והשווה.",
      ],
    },
    guidedExercise: {
      intro: "נשפר Prompt חלש בעצמנו.",
      githubUrl: "https://github.com/copilot",
      steps: [
        "קח Prompt חלש: 'תעשה לי דשבורד'.",
        "הוסף Role: 'פעל כמפתח frontend'.",
        "הוסף Goal + Constraints: 'דשבורד שמציג 3 מדדים מתוך CSV, בלי ספריות חיצוניות'.",
        "הוסף Validation: 'הקוד חייב לרוץ בדפדפן ולהציג את המדדים'. הרץ ב-Copilot.",
      ],
      checklist: [
        "הגדרתי Role",
        "הגדרתי Goal ו-Constraints",
        "הוספתי Validation Criteria",
        "הרצתי והשוויתי לתוצאה החלשה",
      ],
      verify: "איזה חלק הכי שיפר את התוצאה?",
    },
    selfExercise: {
      task: "כתוב Prompt File רעיוני ל-'code review' הכולל את 8 החלקים. אילו Constraints תכלול כדי למנוע שינויים מיותרים?",
      hints: [
        "Constraints למניעת נזק: אל תשנה קוד שלא קשור.",
        "הוסף: אל תמחק, שמור פונקציונליות, הסבר ממצאים.",
      ],
      solution: "ה-Prompt File שלי: Role=סוקר קוד בכיר; Goal=למצוא באגים וסיכוני אבטחה; Constraints='אל תשנה קוד שאינו קשור לסקירה, אל תמחק, שמור פונקציונליות קיימת'; Process='עבור קובץ-קובץ'; Output=רשימת ממצאים לפי חומרה; Validation='כל ממצא עם הסבר והמלצה'. ה-Constraints מונעים שינויים מיותרים.",
    },
    knowledgeQuiz: [
      { q: "מה הופך Prompt מחלש למשופר?",
        options: ["אורך בלבד", "תפקיד, מטרה, מגבלות וקריטריונים", "אותיות גדולות"], correct: 1,
        explain: "מבנה ברור עם הקשר ומגבלות משפר את התוצאה." },
      { q: "למה משמש Prompt File?",
        options: ["לשמור prompt לשימוש חוזר", "למחוק קוד", "לשנות צבעים"], correct: 0,
        explain: "Prompt File שומר תהליך לשימוש חוזר." },
    ],
    commonMistakes: [
      "בקשות מעורפלות בלי הקשר.",
      "לא להגדיר Validation Criteria.",
      "לכתוב מחדש את אותו prompt כל פעם.",
    ],
    fixes: [
      "השתמש במבנה 8 החלקים.",
      "שמור prompts חוזרים כ-Prompt Files.",
    ],
    summary: [
      "מבנה: Role, Goal, Background, Input, Constraints, Process, Output, Validation.",
      "Constraints מונעים נזק ושינויים מיותרים.",
      "Validation מגדיר מתי 'סיימנו'.",
      "Prompt File = תהליך לשימוש חוזר.",
      "Prompt טוב = ההבדל בין מעולה לבינוני.",
    ],
    resources: [
      { title: "GitHub Docs — Prompt engineering for Copilot", url: "https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Best practices", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot", type: "📄 מדריך" },
    ],
    badge: "prompt_designer",
  },

  /* ============================ שיעור 5.1 ============================ */
  "5.1": {
    id: "5.1", level: 5, title: "Custom Agents",
    difficulty: "מומחה",
    objectives: [
      "להבין מה זה Custom Agent וההבדל מ-Instructions/Prompt",
      "להגדיר תפקיד, משימות מותרות ומגבלות",
      "לתכנן Agent בטוח",
    ],
    terms: [
      { en: "Custom Agent", he: "'דמות' מוגדרת עם תפקיד, כלים ומגבלות קבועים.",
        example: "Agent 'Security Reviewer' שבודק רק אבטחה.",
        when: "למשימות חוזרות עם התנהגות מוגדרת.",
        mistakes: "לתת Agent הרשאות רחבות מדי." },
      { en: "Agent role", he: "התפקיד וההתמחות של ה-Agent.",
        example: "'מהנדס בדיקות' מול 'כותב תיעוד'.",
        when: "להגדרת מיקוד.",
        mistakes: "תפקיד מעורפל." },
      { en: "Allowed/Prohibited tasks", he: "מה ה-Agent רשאי ואסור לעשות.",
        example: "מותר: להציע בדיקות. אסור: למחוק קבצים.",
        when: "להבטחת בטיחות.",
        mistakes: "לא להגדיר גבולות ברורים." },
    ],
    explanation: `
      <p><span class="t-en">Custom Agent</span> הוא כמו "מומחה ייעודי" שאתה מגדיר — עם תפקיד, כלים מותרים, ומגבלות. בעוד Custom Instructions הם כללים כלליים לכל הפרויקט, Agent הוא דמות ממוקדת למשימה מסוימת.</p>
      <p>ההבדלים: <strong>Custom Instructions</strong> = כללים גלובליים; <strong>Prompt File</strong> = בקשה חד-פעמית לשימוש חוזר; <strong>Agent</strong> = דמות עם תפקיד והתנהגות מתמשכת; <strong>Skill</strong> = יכולת/ידע ממוקד (נלמד בשיעור הבא).</p>
      <p>כל Agent טוב מגדיר: <strong>תפקיד</strong>, <strong>משימות מותרות</strong>, <strong>משימות אסורות</strong>, <strong>כלים</strong>, <strong>שלבי בדיקה</strong>, ו<strong>פורמט פלט</strong>.</p>
      <div class="callout warn"><div class="c-title">⚠️ בטיחות</div>תן ל-Agent את ההרשאות המינימליות הנדרשות. Security Reviewer לא צריך הרשאה למחוק קבצים.</div>
    `,
    speech: "בשיעור הזה נכיר כלי מתקדם: קַסְטוֹם אֵייגֵ'נְט, סוכן מותאם אישית. אפשר לחשוב עליו כמו מומחה ייעודי שאתה מגדיר, עם תפקיד ברור, כלים מותרים, ומגבלות. חשוב להבין את ההבדלים בין הכלים השונים. קַסְטוֹם אִינְסְטְרַקְשֵנְס הם כללים כלליים שחלים על כל הפרויקט. פְּרוֹמְפְּט פַייל הוא בקשה חד פעמית לשימוש חוזר. אֵייגֵ'נְט, לעומתם, הוא דמות עם תפקיד והתנהגות מתמשכת. וסְקִיל, שנלמד בשיעור הבא, הוא יכולת או ידע ממוקד. כל אֵייגֵ'נְט טוב מגדיר שישה דברים: תפקיד, משימות מותרות, משימות אסורות, כלים, שלבי בדיקה, ופורמט פלט. ונקודה קריטית לבטיחות: תמיד תן לאֵייגֵ'נְט רק את ההרשאות המינימליות שהוא צריך. סוקר אבטחה, למשל, לא צריך בכלל הרשאה למחוק קבצים.",
    demo: {
      intro: "נתכנן Agent לדוגמה (על הנייר, לפני יצירה).",
      steps: [
        "בחר תפקיד: 'Documentation Writer'.",
        "משימות מותרות: לכתוב/לשפר תיעוד.",
        "משימות אסורות: לשנות קוד לוגי, למחוק קבצים.",
        "פלט: קבצי Markdown בלבד.",
      ],
    },
    guidedExercise: {
      intro: "נגדיר Agent על הנייר ונתעד אותו ב-Repository.",
      githubUrl: "https://github.com",
      steps: [
        "צור קובץ <code>docs/agents/test-engineer.md</code>.",
        "כתוב: Role = מהנדס בדיקות.",
        "Allowed: להציע ולכתוב בדיקות. Prohibited: למחוק קבצים, לשנות לוגיקה קיימת.",
        "Validation: כל בדיקה מלווה בהסבר. בצע Commit.",
      ],
      checklist: [
        "הגדרתי Role ברור",
        "הגדרתי משימות מותרות",
        "הגדרתי משימות אסורות",
        "הגדרתי פורמט פלט/בדיקה",
      ],
      verify: "איזו משימה אסרת על ה-Agent ולמה?",
    },
    selfExercise: {
      task: "הגדר Agent 'Security Reviewer'. אילו משימות מותרות ואסורות תיתן לו כדי שיהיה בטוח?",
      hints: [
        "מותר: לזהות סיכונים ולהמליץ.",
        "אסור: לשנות/למחוק קוד; הרשאות מינימליות.",
      ],
      solution: "Security Reviewer — Role: מומחה אבטחה. Allowed: לזהות חולשות (OWASP), סודות חשופים, ולהמליץ תיקונים. Prohibited: לשנות או למחוק קוד, לגשת לנתונים רגישים. Output: דוח ממצאים לפי חומרה. הרשאות קריאה-בלבד מבטיחות בטיחות.",
    },
    knowledgeQuiz: [
      { q: "מה ההבדל בין Agent ל-Custom Instructions?",
        options: ["אין הבדל", "Agent = דמות ממוקדת; Instructions = כללים גלובליים", "Agent מוחק קבצים"], correct: 1,
        explain: "Instructions גלובליים; Agent הוא דמות עם תפקיד ממוקד." },
      { q: "עיקרון בטיחות מרכזי ל-Agent?",
        options: ["הרשאות מקסימליות", "הרשאות מינימליות נדרשות", "בלי מגבלות"], correct: 1,
        explain: "תמיד הרשאות מינימליות (least privilege)." },
    ],
    commonMistakes: [
      "תפקיד מעורפל.",
      "הרשאות רחבות מדי.",
      "בלי משימות אסורות מוגדרות.",
    ],
    fixes: [
      "הגדר תפקיד ממוקד.",
      "הגדר מפורשות מה אסור + הרשאות מינימום.",
    ],
    summary: [
      "Agent = דמות עם תפקיד, כלים ומגבלות.",
      "שונה מ-Instructions (גלובלי) ו-Prompt File (חד-פעמי).",
      "מגדירים: תפקיד, מותר, אסור, כלים, בדיקה, פלט.",
      "הרשאות מינימליות = בטיחות.",
      "מתאים למשימות חוזרות ממוקדות.",
    ],
    resources: [
      { title: "GitHub Docs — About Copilot agents", url: "https://docs.github.com/en/copilot/using-github-copilot/copilot-agents", type: "📄 מדריך" },
      { title: "GitHub Docs — Customizing Copilot", url: "https://docs.github.com/en/copilot/concepts/prompting/response-customization", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 5.2 ============================ */
  "5.2": {
    id: "5.2", level: 5, title: "Agent Skills — מסלול מורחב",
    difficulty: "מומחה",
    objectives: [
      "להבין מה זה Skill וההבדל מ-Agent/Prompt/Instructions",
      "להכיר את מבנה תיקיית Skill ו-SKILL.md",
      "לתכנן trigger והפעלה נכונה",
    ],
    terms: [
      { en: "Agent Skill", he: "יכולת/ידע ממוקד ארוז, שהסוכן מפעיל כשרלוונטי.",
        example: "Skill ליצירת Dashboard הנדסי.",
        when: "לארוז ידע/תהליך שחוזר על עצמו.",
        mistakes: "תיאור trigger מעורפל שגורם להפעלה שגויה." },
      { en: "SKILL.md", he: "הקובץ הראשי שמתאר את ה-Skill ומתי להפעילו.",
        example: "כולל שם, תיאור, והוראות.",
        when: "בכל Skill.",
        mistakes: "תיאור לא מדויק → לא מופעל כשצריך." },
      { en: "Trigger description", he: "התיאור שקובע מתי ה-Skill מופעל.",
        example: "'השתמש כשמבקשים לנתח CSV'.",
        when: "קריטי לזיהוי נכון.",
        mistakes: "רחב מדי (מופעל תמיד) או צר מדי (לא מופעל)." },
    ],
    explanation: `
      <p><span class="t-en">Agent Skill</span> הוא חבילה של ידע/תהליך ממוקד, שהסוכן "שולף" כשהיא רלוונטית. בעוד Agent הוא הדמות, Skill הוא כלי/מומחיות שהדמות יכולה להשתמש בו.</p>
      <p>מבנה תיקיית Skill טיפוסי:</p>
      <pre><code>my-skill/
├── SKILL.md        (ראשי: שם, תיאור, trigger, הוראות)
├── examples/       (דוגמאות)
├── templates/      (תבניות)
└── scripts/        (סקריפטים, אופציונלי)</code></pre>
      <p>ה-<span class="t-en">SKILL.md</span> הוא הלב. ה-<strong>תיאור (description)</strong> שבו קובע מתי ה-Skill מופעל — חייב להיות מדויק: לא רחב מדי (יופעל תמיד) ולא צר מדי (לא יופעל כשצריך).</p>
      <div class="callout tip"><div class="c-title">💡 בדיקה כפולה</div>תמיד בדוק גם מתי ה-Skill <strong>צריך</strong> לפעול, וגם מתי הוא <strong>לא</strong> צריך — כדי למנוע הפעלות שגויות.</div>
    `,
    speech: "הגענו למסלול מורחב ומעשי במיוחד: אֵייגֵ'נְט סְקִילְס, כלומר כישורי סוכן. סְקִיל הוא חבילה של ידע או תהליך ממוקד, שהסוכן שולף בדיוק כשהיא רלוונטית. ההבדל מאֵייגֵ'נְט: האֵייגֵ'נְט הוא הדמות, בעוד הסְקִיל הוא כלי או מומחיות שהדמות יכולה להשתמש בו. בוא נכיר את מבנה התיקייה של סְקִיל. התיקייה מכילה קובץ ראשי בשם סְקִיל נקודה אֵם-דִי, ולצידו אפשר להוסיף תיקיות עם דוגמאות, תבניות, וסקריפטים. הקובץ סְקִיל נקודה אֵם-דִי הוא הלב של העניין. בתוכו, שדה התיאור הוא קריטי — הוא זה שקובע מתי הסְקִיל יופעל. התיאור חייב להיות מדויק: לא רחב מדי, אחרת הוא יופעל כל הזמן; ולא צר מדי, אחרת הוא לא יופעל כשצריך. וטיפ חשוב לבדיקה: תמיד בדוק שני דברים — גם מתי הסְקִיל צריך לפעול, וגם מתי הוא לא צריך לפעול. ככה אתה מונע הפעלות שגויות.",
    demo: {
      intro: "נתכנן Skill ליצירת Executive Summary.",
      steps: [
        "שם: <code>executive-summary</code>.",
        "תיאור/trigger: 'השתמש כשמבקשים סיכום מנהלים מתוך דוח/נתונים'.",
        "SKILL.md: הוראות ליצירת סיכום של עד עמוד עם 3 נקודות מפתח.",
        "templates/: תבנית סיכום מוכנה.",
      ],
    },
    guidedExercise: {
      intro: "ניצור מבנה Skill ב-Repository.",
      githubUrl: "https://github.com",
      steps: [
        "צור קובץ <code>skills/csv-analyzer/SKILL.md</code>.",
        "כתוב: שם ה-Skill + תיאור trigger ('השתמש כשמבקשים לנתח קובץ CSV').",
        "הוסף הוראות: קרא עמודות, סכם סטטיסטיקה, זהה חריגים.",
        "צור גם <code>skills/csv-analyzer/examples/sample.md</code>. בצע Commit.",
      ],
      checklist: [
        "יצרתי תיקיית Skill עם SKILL.md",
        "כתבתי תיאור trigger מדויק",
        "הוספתי הוראות ברורות",
        "הוספתי דוגמה",
      ],
      verify: "מה כתבת בתיאור ה-trigger?",
    },
    selfExercise: {
      task: "הגדר מתי ה-Skill 'csv-analyzer' <strong>לא</strong> צריך לפעול. למה בדיקת 'אי-הפעלה' חשובה?",
      hints: [
        "לא צריך לפעול על בקשות שלא קשורות ל-CSV.",
        "trigger רחב מדי מפעיל אותו בטעות.",
      ],
      solution: "ה-Skill לא צריך לפעול כשמבקשים, למשל, לכתוב README או לבנות טופס — משימות שאינן ניתוח CSV. בדיקת אי-הפעלה חשובה כי trigger רחב מדי יגרום ל-Skill 'לקפוץ' בהקשרים לא רלוונטיים, ולפגוע באיכות ובצפוי.",
    },
    knowledgeQuiz: [
      { q: "מה קובע מתי Skill מופעל?",
        options: ["שם הקובץ", "תיאור ה-trigger ב-SKILL.md", "גודל התיקייה"], correct: 1,
        explain: "תיאור ה-trigger ב-SKILL.md קובע הפעלה." },
      { q: "ההבדל בין Agent ל-Skill?",
        options: ["זהים", "Agent = דמות; Skill = יכולת ממוקדת", "Skill מוחק קבצים"], correct: 1,
        explain: "Agent הוא הדמות; Skill הוא כלי/מומחיות שהיא מפעילה." },
    ],
    commonMistakes: [
      "תיאור trigger רחב/צר מדי.",
      "SKILL.md לא מדויק.",
      "לא לבדוק מתי אסור להפעיל.",
    ],
    fixes: [
      "נסח trigger מדויק וממוקד.",
      "בדוק גם הפעלה וגם אי-הפעלה.",
    ],
    summary: [
      "Skill = ידע/תהליך ממוקד וארוז.",
      "SKILL.md הוא הלב; description = trigger.",
      "מבנה: SKILL.md + examples/templates/scripts.",
      "בדוק הפעלה ואי-הפעלה.",
      "Agent משתמש ב-Skills כדי להרחיב יכולות.",
    ],
    resources: [
      { title: "GitHub Docs — About agent skills", url: "https://docs.github.com/en/copilot/customizing-copilot", type: "📄 מדריך" },
      { title: "GitHub Engineering Blog", url: "https://github.blog/", type: "📰 בלוג" },
    ],
    badge: "skill_creator",
  },

  /* ============================ שיעור 5.3 ============================ */
  "5.3": {
    id: "5.3", level: 5, title: "GitHub Actions ואוטומציה",
    difficulty: "מומחה",
    video: { id: "R8_veQiYBjI", title: "GitHub Actions Tutorial - Basic Concepts and CI/CD", author: "TechWorld with Nana" },
    objectives: [
      "להבין Workflow, Trigger, Job, Step",
      "לקרוא קובץ YAML של workflow",
      "ליצור workflow פשוט ובטוח",
    ],
    terms: [
      { en: "Workflow", he: "תהליך אוטומטי המוגדר בקובץ YAML בתיקיית .github/workflows.",
        example: "workflow שמריץ בדיקות בכל push.",
        when: "לאוטומציה של בדיקות, בנייה ופרסום.",
        mistakes: "workflow ללא הבנה של מה שהוא מריץ." },
      { en: "Trigger (on)", he: "האירוע שמפעיל את ה-workflow.",
        example: "on: push / on: pull_request / on: schedule.",
        when: "להגדיר מתי לרוץ.",
        mistakes: "trigger רחב מדי שרץ לעיתים קרובות מדי." },
      { en: "Job / Step", he: "Job = קבוצת שלבים; Step = פעולה בודדת.",
        example: "Job 'test' עם Steps: checkout, install, run tests.",
        when: "לארגון ה-workflow.",
        mistakes: "לערבב יותר מדי ב-Job אחד." },
    ],
    explanation: `
      <p><span class="t-en">GitHub Actions</span> מאפשר להריץ משימות אוטומטית. מגדירים אותן בקובץ <span class="t-en">YAML</span> בתיקיית <code>.github/workflows/</code>.</p>
      <p>מבנה בסיסי:</p>
      <pre><code>name: CI
on: [push]            # Trigger
jobs:
  test:               # Job
    runs-on: ubuntu-latest   # Runner
    steps:            # Steps
      - uses: actions/checkout@v4
      - run: echo "Hello Actions"</code></pre>
      <ul>
        <li><strong>Workflow</strong> — התהליך כולו.</li>
        <li><strong>Trigger (on)</strong> — מתי רץ (push/PR/schedule/manual).</li>
        <li><strong>Job</strong> — קבוצת שלבים; <strong>Runner</strong> — המכונה שמריצה; <strong>Step</strong> — פעולה בודדת.</li>
      </ul>
      <div class="callout danger"><div class="c-title">⛔ בטיחות אוטומציה</div>לפני הפעלה — הבן מה ה-workflow עושה. סודות שומרים ב-<strong>Secrets</strong> (לא בקוד!). workflow שפורס לייצור הוא פעולה רגישה.</div>
    `,
    speech: "בשיעור הזה נכנס לעולם האוטומציה עם גיטהאב אקשנס. זה כלי שמאפשר להריץ משימות באופן אוטומטי. מגדירים את המשימות בקובץ בפורמט וַיי-אֵיי-אֵם-אֵל, שנמצא בתיקייה נקודה-גִּיטהַאב סְלֵאש וורְקְפְלוֹאוּז. בוא נפרק את המבנה. וורְקְפְלוֹאוּ הוא התהליך כולו. טְרִיגֵר, שמסומן במילה און, קובע מתי התהליך רץ — למשל בכל פוּש, בכל פּוּל ריקְווֵסְט, או לפי לוח זמנים. ג'וֹבּ הוא קבוצת שלבים, רַאנֵר הוא המכונה שמריצה אותם, וסְטֵפּ הוא פעולה בודדת. ועכשיו, הכי חשוב — בטיחות באוטומציה. לפני שאתה מפעיל וורְקְפְלוֹאוּ, תמיד הבן מה הוא עושה. סודות, כמו סיסמאות ומפתחות, שומרים אך ורק במקום מאובטח שנקרא סִיקְרֵטְס — ולעולם לא בתוך הקוד עצמו. וזכור: וורְקְפְלוֹאוּ שמפרסם לייצור הוא פעולה רגישה שדורשת תשומת לב.",
    demo: {
      intro: "נדגים workflow בסיסי.",
      steps: [
        "ב-Repository לחץ על לשונית <strong>Actions</strong>.",
        "בחר תבנית פשוטה (או 'set up a workflow yourself').",
        "קרא את ה-YAML: on, jobs, steps.",
        "אל תפעיל עדיין — רק הבן את המבנה.",
      ],
    },
    guidedExercise: {
      intro: "ניצור workflow שמדפיס הודעה (לא מסוכן).",
      githubUrl: "https://github.com",
      steps: [
        "ב-Repository: <strong>Add file → Create new file</strong>.",
        "שם: <code>.github/workflows/hello.yml</code>.",
        "הדבק workflow בסיסי: on push, job שמריץ <code>echo</code>.",
        "בצע Commit, ואז בלשונית <strong>Actions</strong> ראה את הריצה.",
      ],
      checklist: [
        "יצרתי קובץ ב-.github/workflows/",
        "הגדרתי trigger (on: push)",
        "הגדרתי job עם step",
        "ראיתי את הריצה ב-Actions",
      ],
      verify: "איזה אירוע (trigger) הגדרת?",
    },
    selfExercise: {
      task: "הסבר למה סודות (סיסמאות/tokens) נשמרים ב-Secrets ולא בקובץ ה-YAML. מה הסיכון בשמירתם בקוד?",
      hints: [
        "קבצי workflow נמצאים ב-Repository.",
        "קוד ב-Repository נגיש (ובהיסטוריה לנצח).",
      ],
      solution: "סודות נשמרים ב-Secrets כי קובץ ה-YAML נמצא ב-Repository — מי שרואה את הקוד רואה את הסוד, והוא נשאר בהיסטוריה לנצח גם אם נמחק. שמירה ב-Secrets מצפינה אותם ומונעת חשיפה. שמירת סוד בקוד = דליפת אבטחה חמורה.",
    },
    knowledgeQuiz: [
      { q: "היכן מוגדרים workflows?",
        options: [".github/workflows/*.yml", "README.md", "root/actions.txt"], correct: 0,
        explain: "ב-.github/workflows/ בקובצי YAML." },
      { q: "איפה שומרים סודות ל-workflow?",
        options: ["בקובץ ה-YAML", "ב-Secrets", "ב-README"], correct: 1,
        explain: "תמיד ב-Secrets, לעולם לא בקוד." },
    ],
    commonMistakes: [
      "להפעיל workflow בלי להבין מה הוא עושה.",
      "לשמור סודות בקוד במקום ב-Secrets.",
      "trigger רחב מדי שרץ יותר מדי.",
    ],
    fixes: [
      "קרא את ה-YAML לפני הפעלה.",
      "השתמש ב-Secrets לכל מידע רגיש.",
    ],
    summary: [
      "Actions = אוטומציה בקובצי YAML.",
      "Workflow/Trigger/Job/Step/Runner.",
      "Trigger: push/PR/schedule/manual.",
      "סודות ב-Secrets בלבד.",
      "הבן לפני שמפעילים — במיוחד פריסה.",
    ],
    resources: [
      { title: "GitHub Docs — Understanding GitHub Actions", url: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Workflow syntax", url: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions", type: "📄 מדריך" },
      { title: "GitHub Skills — Hello GitHub Actions", url: "https://skills.github.com/", type: "🎯 תרגול" },
    ],
    badge: "automation",
  },

  /* ============================ שיעור 5.4 ============================ */
  "5.4": {
    id: "5.4", level: 5, title: "פרויקט גמר — מערכת שלמה",
    difficulty: "מומחה",
    objectives: [
      "לשלב את כל מה שלמדת במערכת אחת",
      "לתכנן, לבנות, לתעד ולפרסם",
      "להגדיר תחזוקה וגיבוי",
    ],
    terms: [
      { en: "Capstone", he: "פרויקט גמר שמדגים שליטה בכל החומר.",
        example: "מערכת מעקב משימות מלאה עם פרסום.",
        when: "בסיום הקורס.",
        mistakes: "לנסות לבנות הכול בבת אחת." },
      { en: "MVP", he: "Minimum Viable Product — הגרסה המינימלית שעובדת.",
        example: "קודם גרסה בסיסית שעובדת, אז הרחבות.",
        when: "בתחילת כל פרויקט.",
        mistakes: "להתחיל מפיצ'רים מורכבים." },
      { en: "Maintenance plan", he: "תוכנית לתחזוקה שוטפת ושחזור.",
        example: "מי מתחזק, איך מגבים, איך משחזרים.",
        when: "לפני העלייה לאוויר.",
        mistakes: "לא לתכנן תחזוקה כלל." },
    ],
    explanation: `
      <p>הגענו לשיא! פרויקט הגמר משלב את <strong>כל</strong> מה שלמדת: Repository, Issues, Branches, PRs, Copilot, Instructions, Prompts, Agents, Skills ו-Actions.</p>
      <p>העיקרון המנחה: <span class="t-en">MVP קודם</span> — בונים גרסה מינימלית שעובדת, ואז מרחיבים באבני דרך קטנות ובדוקות. לא בונים הכול בבת אחת.</p>
      <p>שלבי הפרויקט: הגדרת בעיה → דרישות + Acceptance Criteria → בחירת טכנולוגיה → מבנה Repository → תוכנית (Issues + Milestones) → בנייה פיצ'ר-אחר-פיצ'ר → בדיקות → אבטחה → תיעוד → פרסום → תחזוקה.</p>
      <div class="callout tip"><div class="c-title">🎓 זו ההוכחה שלך</div>פרויקט הגמר הוא התיק האישי שמדגים שאתה עצמאי ומסוגל לבנות מערכת מקצה לקצה.</div>
    `,
    speech: "הגענו לשיא הקורס — פרויקט הגמר! זהו הרגע שבו אתה משלב את כל מה שלמדת לכדי מערכת אחת שלמה: רֵפּוֹזִיטוֹרי, אִישוּז, בְּרַאנְצֵ'ס, פּוּל ריקְווֵסְטְס, קוֹפַּיילוֹט, אִינְסְטְרַקְשֵנְס, פְּרוֹמְפְּטְס, אֵייגֵ'נְטְס, סְקִילְס ואקשנס. העיקרון המנחה החשוב ביותר הוא אֵם-וִי-פִּי קודם, כלומר מִינִימוּם וַייאַבֵּל פְּרוֹדַקְט. במקום לנסות לבנות את הכול בבת אחת, אתה בונה קודם גרסה מינימלית שעובדת, ורק אז מרחיב אותה באבני דרך קטנות ובדוקות. שלבי הפרויקט הם: הגדרת הבעיה, כתיבת דרישות וקריטריוני קבלה, בחירת טכנולוגיה, תכנון מבנה הרֵפּוֹזִיטוֹרי, בניית תוכנית עם אִישוּז ומַיילְסְטוֹנְס, בנייה פיצ'ר אחר פיצ'ר, בדיקות, אבטחה, תיעוד, פרסום, ולבסוף תחזוקה. פרויקט הגמר הוא ההוכחה שלך — התיק האישי שמדגים שאתה עצמאי, ומסוגל לבנות מערכת שלמה מקצה לקצה. בהצלחה!",
    demo: {
      intro: "נתכנן את שלד פרויקט הגמר.",
      steps: [
        "הגדר בעיה: למשל 'מעקב משימות לצוות'.",
        "פתח Repository עם README + .gitignore.",
        "צור Issues ל-3 פיצ'רים ראשונים + Milestone 'MVP'.",
        "תכנן branch לכל פיצ'ר.",
      ],
    },
    guidedExercise: {
      intro: "נקים את תשתית פרויקט הגמר.",
      githubUrl: "https://github.com/new",
      steps: [
        "צור Repository חדש לפרויקט הגמר (עם README).",
        "הוסף <code>.github/copilot-instructions.md</code> עם כללי העבודה שלך.",
        "פתח 3 Issues לפיצ'רים + Milestone 'MVP'.",
        "צור Project (Board) וקשר אליו את ה-Issues.",
      ],
      checklist: [
        "יצרתי Repository לפרויקט הגמר",
        "הוספתי Custom Instructions",
        "פתחתי Issues + Milestone",
        "יצרתי Project וקישרתי Issues",
      ],
      verify: "מהי הבעיה שהמערכת שלך פותרת?",
    },
    selfExercise: {
      task: "כתוב Acceptance Criteria ל-MVP של פרויקט הגמר שלך (3-5 נקודות), ותוכנית תחזוקה קצרה. מה כולל ה-MVP ומה נדחה לשלב ב'?",
      hints: [
        "MVP = המינימום שעובד ונותן ערך.",
        "תחזוקה: מי, איך מגבים, איך משחזרים.",
      ],
      solution: "MVP למערכת מעקב משימות: (1) להוסיף משימה, (2) לראות רשימה, (3) לסמן כהושלם, (4) שמירה מקומית. נדחה לשלב ב': משתמשים, חיפוש, דוחות. תחזוקה: גיבוי שבועי של ה-Repository, מעקב Issues לבאגים, ונקודת שחזור (Release) יציבה לפני כל שינוי גדול.",
    },
    knowledgeQuiz: [
      { q: "מה העיקרון המנחה בבניית הפרויקט?",
        options: ["לבנות הכול בבת אחת", "MVP קודם, אז הרחבות", "לדלג על בדיקות"], correct: 1,
        explain: "בונים MVP שעובד ואז מרחיבים באבני דרך." },
      { q: "מה חובה לתכנן לפני עלייה לאוויר?",
        options: ["רק עיצוב", "תחזוקה וגיבוי/שחזור", "כלום"], correct: 1,
        explain: "תוכנית תחזוקה, גיבוי ושחזור חיונית." },
    ],
    commonMistakes: [
      "לבנות הכול בבת אחת.",
      "לדלג על בדיקות ואבטחה.",
      "בלי תוכנית תחזוקה/שחזור.",
    ],
    fixes: [
      "התחל מ-MVP ובנה באבני דרך.",
      "שלב בדיקות, אבטחה ותיעוד בכל שלב.",
    ],
    summary: [
      "פרויקט הגמר משלב את כל הקורס.",
      "MVP קודם, אז הרחבות בדוקות.",
      "שלבים: בעיה → דרישות → בנייה → בדיקות → פרסום → תחזוקה.",
      "תכנן תחזוקה, גיבוי ושחזור.",
      "זו ההוכחה לעצמאות שלך. 🎓",
    ],
    resources: [
      { title: "GitHub Docs — GitHub flow", url: "https://docs.github.com/en/get-started/using-github/github-flow", type: "📄 מדריך" },
      { title: "GitHub Docs — GitHub Pages (פרסום)", url: "https://docs.github.com/en/pages/getting-started-with-github-pages", type: "📄 מדריך" },
      { title: "GitHub Skills — כל הקורסים", url: "https://skills.github.com/", type: "🎯 תרגול" },
    ],
    badge: null,
  },

  /* ============================ שיעור 6.1 ============================ */
  "6.1": {
    id: "6.1", level: 6, title: "פרויקט: מעקב משימות אישי",
    difficulty: "פרויקט",
    objectives: [
      "לבנות מערכת משימות קטנה מקצה לקצה",
      "לתרגל את כל זרימת ה-GitHub Flow",
      "לפרסם גרסה ראשונה",
    ],
    terms: [
      { en: "User Story", he: "תיאור צורך מנקודת מבט המשתמש.",
        example: "'כמשתמש, אני רוצה להוסיף משימה כדי לזכור אותה'.",
        when: "בהגדרת דרישות.",
        mistakes: "לנסח דרישות טכניות במקום צורך." },
      { en: "Acceptance Criteria", he: "תנאים שקובעים מתי פיצ'ר הושלם.",
        example: "'המשימה נשמרת ומופיעה ברשימה'.",
        when: "לכל פיצ'ר.",
        mistakes: "קריטריונים מעורפלים." },
      { en: "Scope", he: "היקף הפרויקט — מה בפנים ומה בחוץ.",
        example: "MVP: הוספה+רשימה. מחוץ: משתמשים.",
        when: "בתחילת כל פרויקט.",
        mistakes: "Scope creep — הוספת פיצ'רים בלי סוף." },
    ],
    explanation: `
      <p>הפרויקט הראשון: <strong>מעקב משימות אישי</strong> פשוט. נתרגל את כל מה שלמדנו — Issues, Branches, PRs, ופרסום.</p>
      <p>נגדיר <span class="t-en">User Stories</span> ו-<span class="t-en">Acceptance Criteria</span>, נבנה ב-MVP, ונשתמש ב-GitHub Flow לכל פיצ'ר.</p>
      <p><strong>MVP:</strong> להוסיף משימה, לראות רשימה, לסמן כבוצע. הכול בקובץ HTML+JS בודד שאפשר לפרסם ב-Pages.</p>
      <div class="callout tip"><div class="c-title">💡 גישה</div>פיצ'ר אחד = branch אחד = PR אחד. ככה כל שינוי קטן, בדוק וברור.</div>
    `,
    speech: "הגענו לחלק המעשי והמהנה — פרויקטים אמיתיים! הפרויקט הראשון שלנו הוא מערכת מעקב משימות אישית ופשוטה. זו הזדמנות מצוינת לתרגל את כל מה שלמדנו עד כה: אִישוּז, בְּרַאנְצֵ'ס, פּוּל ריקְווֵסְטְס, ופרסום. נתחיל בהגדרת יוּזֵר סְטוֹרִיז — תיאור הצרכים מנקודת מבט המשתמש, ואֵקְסֵפְּטֵנְס קְרִיטֵרְיָה — התנאים שקובעים מתי פיצ'ר הושלם. נבנה בגישת אֵם-וִי-פִּי: הגרסה המינימלית שעובדת. ה-אֵם-וִי-פִּי שלנו יכלול שלושה דברים: להוסיף משימה, לראות את רשימת המשימות, ולסמן משימה כבוצעה. והגישה המנחה: כל פיצ'ר מקבל בְּרַאנץ' משלו, ופּוּל ריקְווֵסְט משלו. ככה כל שינוי נשאר קטן, בדוק וברור.",
    demo: {
      intro: "נתכנן את הפרויקט.",
      steps: [
        "הגדר 3 User Stories (הוספה, רשימה, סימון).",
        "פתח Repository עם README.",
        "פתח Issue לכל Story + Milestone 'MVP'.",
        "לכל Issue — branch נפרד.",
      ],
    },
    guidedExercise: {
      intro: "נקים את הפרויקט ונבנה פיצ'ר ראשון.",
      githubUrl: "https://github.com/new",
      steps: [
        "צור Repository <code>my-task-tracker</code> עם README.",
        "פתח 3 Issues: הוספת משימה, הצגת רשימה, סימון כבוצע.",
        "צור branch <code>add-task</code>, וב-<code>index.html</code> בקש מ-Copilot טופס הוספת משימה פשוט.",
        "פתח PR, קרא את ה-Diff, ובצע Merge.",
      ],
      checklist: [
        "יצרתי Repository עם README",
        "פתחתי Issues לפיצ'רים",
        "עבדתי ב-branch נפרד",
        "ביצעתי PR ו-Merge",
      ],
      verify: "איזה פיצ'ר בנית ראשון ולמה?",
    },
    selfExercise: {
      task: "הוסף פיצ'ר 'מחיקת משימה' ב-branch נפרד עם PR. כתוב Acceptance Criteria לפיצ'ר הזה.",
      hints: [
        "AC לדוגמה: 'לחיצה על מחק מסירה את המשימה מהרשימה'.",
        "השתמש ב-Copilot אבל בדוק את הקוד (לולאת 5 השלבים).",
      ],
      solution: "Acceptance Criteria למחיקה: (1) ליד כל משימה יש כפתור מחיקה; (2) לחיצה מסירה את המשימה מהרשימה; (3) שאר המשימות נשארות. בניתי ב-branch 'delete-task', ביקשתי מ-Copilot קוד, בדקתי אותו (Inspect+Test), פתחתי PR ומיזגתי.",
    },
    knowledgeQuiz: [
      { q: "מה היתרון של 'פיצ'ר אחד = branch אחד'?",
        options: ["מהירות אתר", "שינויים קטנים, בדוקים וברורים", "חוסך מקום"], correct: 1,
        explain: "ענף לכל פיצ'ר שומר על שינויים ממוקדים וניתנים לבדיקה." },
      { q: "מה מגדיר Acceptance Criteria?",
        options: ["צבע הכפתור", "מתי פיצ'ר הושלם", "שם הקובץ"], correct: 1,
        explain: "AC קובעים מתי פיצ'ר עונה על הדרישות." },
    ],
    commonMistakes: [
      "Scope creep — הוספת פיצ'רים בלי סוף.",
      "לעבוד ישירות על main.",
      "לדלג על בדיקת קוד Copilot.",
    ],
    fixes: [
      "הגדר MVP ברור ודבק בו.",
      "branch+PR לכל פיצ'ר; בדוק קוד תמיד.",
    ],
    summary: [
      "פרויקט ראשון מקצה לקצה.",
      "User Stories + Acceptance Criteria.",
      "MVP: הוספה, רשימה, סימון.",
      "פיצ'ר = branch = PR.",
      "תרגול מלא של GitHub Flow.",
    ],
    resources: [
      { title: "GitHub Docs — GitHub flow", url: "https://docs.github.com/en/get-started/using-github/github-flow", type: "📄 מדריך" },
      { title: "GitHub Skills — Introduction to GitHub", url: "https://skills.github.com/", type: "🎯 תרגול" },
    ],
    badge: null,
  },

  /* ============================ שיעור 6.2 ============================ */
  "6.2": {
    id: "6.2", level: 6, title: "פרויקט: ניתוח קובץ CSV",
    difficulty: "פרויקט",
    objectives: [
      "לבנות כלי שקורא ומנתח CSV",
      "להשתמש ב-Copilot לניתוח נתונים",
      "להציג תוצאות בצורה ברורה",
    ],
    terms: [
      { en: "CSV", he: "Comma-Separated Values — פורמט טבלאי פשוט בטקסט.",
        example: "name,score\\nדנה,90\\nיוסי,85",
        when: "להחלפת נתונים טבלאיים.",
        mistakes: "להתעלם מפסיקים בתוך ערכים." },
      { en: "Parsing", he: "פענוח — הפיכת טקסט גולמי לנתונים מובנים.",
        example: "פיצול שורות ועמודות של CSV.",
        when: "בעת קריאת קבצים.",
        mistakes: "לא לטפל בשורת כותרות." },
      { en: "Aggregation", he: "צבירה — חישוב סיכומים/ממוצעים מהנתונים.",
        example: "ממוצע ציונים, ספירה לפי קטגוריה.",
        when: "להפקת תובנות.",
        mistakes: "לחשב בלי לבדוק ערכים חסרים." },
    ],
    explanation: `
      <p>פרויקט רלוונטי במיוחד לעבודה הנדסית: כלי ש<strong>מנתח CSV</strong>. אתה מעלה קובץ, והכלי מציג סטטיסטיקה.</p>
      <p>נלמד: <span class="t-en">Parsing</span> (פענוח הטקסט), <span class="t-en">Aggregation</span> (חישוב ממוצעים/סכומים), והצגת התוצאות.</p>
      <p>נשתמש ב-Copilot לכתיבת הלוגיקה — אבל נזכור את לולאת 5 השלבים: במיוחד לבדוק טיפול בערכים חסרים ובפסיקים בתוך ערכים.</p>
      <div class="callout warn"><div class="c-title">⚠️ נתונים אמיתיים</div>אל תעלה נתוני חברה אמיתיים ל-Repository ציבורי. השתמש בנתוני דוגמה.</div>
    `,
    speech: "הפרויקט הזה רלוונטי במיוחד לעבודה הנדסית: בניית כלי שמנתח קובץ סִי-אֵס-וִי. הרעיון פשוט — המשתמש מעלה קובץ, והכלי מציג עליו סטטיסטיקה. נלמד שלושה מושגים. ראשית, פַּארְסִינְג, כלומר פענוח — הפיכת הטקסט הגולמי של הקובץ לנתונים מובנים של שורות ועמודות. שנית, אַגְרֵגֵיישֵן, כלומר צבירה — חישוב סיכומים, ממוצעים או ספירות מתוך הנתונים. ושלישית, הצגת התוצאות בצורה ברורה. נשתמש בקוֹפַּיילוֹט כדי לכתוב את הלוגיקה, אבל נזכור תמיד את לולאת חמשת השלבים. חשוב במיוחד לבדוק שני דברים: טיפול בערכים חסרים, וטיפול בפסיקים שנמצאים בתוך ערכים. ואזהרה חשובה: לעולם אל תעלה נתוני חברה אמיתיים לרֵפּוֹזִיטוֹרי ציבורי. השתמש תמיד בנתוני דוגמה.",
    demo: {
      intro: "נתכנן את הכלי.",
      steps: [
        "הגדר קלט: קובץ CSV עם כותרות.",
        "פלט: מספר שורות, ממוצע עמודה מספרית, ערך נפוץ.",
        "בקש מ-Copilot פונקציית parsing.",
        "בדוק על נתוני דוגמה.",
      ],
    },
    guidedExercise: {
      intro: "נבנה מנתח CSV בסיסי.",
      githubUrl: "https://github.com/new",
      steps: [
        "צור Repository <code>csv-analyzer</code> עם README.",
        "צור <code>sample.csv</code> עם נתוני דוגמה (שם, ציון).",
        "ב-<code>index.html</code> בקש מ-Copilot: קריאת CSV והצגת ממוצע.",
        "בדוק את הקוד (Inspect+Test), ואז Commit דרך PR.",
      ],
      checklist: [
        "יצרתי Repository + נתוני דוגמה",
        "ביקשתי קוד parsing מ-Copilot",
        "בדקתי טיפול בערכים חסרים",
        "הצגתי תוצאה (ממוצע/ספירה)",
      ],
      verify: "איזו סטטיסטיקה הכלי שלך מחשב?",
    },
    selfExercise: {
      task: "הוסף חישוב נוסף: ספירה לפי קטגוריה (למשל כמה מעל 90). איך תוודא שהחישוב נכון?",
      hints: [
        "בדוק ידנית מול נתוני הדוגמה.",
        "חשוב על מקרי קצה: רשימה ריקה, ערכים לא מספריים.",
      ],
      solution: "הוספתי ספירה של רשומות מעל 90. ווידאתי נכונות ע\"י בדיקה ידנית מול sample.csv — ספרתי בעצמי והשוויתי לפלט. בדקתי גם מקרי קצה: קובץ ריק (0) וערך לא מספרי (מתעלם/מתריע). זה יישום של שלב Verify.",
    },
    knowledgeQuiz: [
      { q: "מה זה Parsing?",
        options: ["מחיקת נתונים", "פענוח טקסט לנתונים מובנים", "הצפנה"], correct: 1,
        explain: "Parsing הופך טקסט גולמי לנתונים מובנים." },
      { q: "מה חשוב לבדוק בניתוח נתונים?",
        options: ["צבעים", "ערכים חסרים ומקרי קצה", "שם הקובץ"], correct: 1,
        explain: "ערכים חסרים ומקרי קצה משפיעים על נכונות החישוב." },
    ],
    commonMistakes: [
      "לא לטפל בשורת כותרות.",
      "להתעלם מערכים חסרים.",
      "להעלות נתונים אמיתיים/רגישים.",
    ],
    fixes: [
      "טפל בכותרות ובערכים חסרים.",
      "השתמש בנתוני דוגמה בלבד.",
    ],
    summary: [
      "כלי ניתוח CSV מקצה לקצה.",
      "Parsing → Aggregation → הצגה.",
      "בדוק ערכים חסרים ומקרי קצה.",
      "נתוני דוגמה בלבד — לא אמיתיים.",
      "Copilot + אימות ידני.",
    ],
    resources: [
      { title: "GitHub Docs — Working with files", url: "https://docs.github.com/en/repositories/working-with-files", type: "📄 מדריך" },
      { title: "GitHub Copilot — Best practices", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 6.3 ============================ */
  "6.3": {
    id: "6.3", level: 6, title: "פרויקט: Dashboard ניהולי",
    difficulty: "פרויקט",
    objectives: [
      "לבנות Dashboard שמציג מדדים",
      "לשלב נתונים מ-CSV בתצוגה ויזואלית",
      "לתכנן חוויית משתמש ברורה",
    ],
    terms: [
      { en: "Dashboard", he: "מסך שמציג מדדים ונתונים חשובים במבט אחד.",
        example: "כרטיסי KPI + גרף פשוט.",
        when: "לניטור ומעקב ניהולי.",
        mistakes: "עומס מידע שמסתיר את העיקר." },
      { en: "KPI", he: "Key Performance Indicator — מדד ביצוע מרכזי.",
        example: "מספר משימות פתוחות, אחוז השלמה.",
        when: "להצגת הנתונים החשובים ביותר.",
        mistakes: "יותר מדי KPIs בלי מיקוד." },
      { en: "Data visualization", he: "הצגת נתונים בצורה גרפית.",
        example: "גרף עמודות של משימות לפי סטטוס.",
        when: "להבנה מהירה של מגמות.",
        mistakes: "גרף לא מתאים לסוג הנתון." },
    ],
    explanation: `
      <p>שיא הפרויקטים: <strong>Dashboard ניהולי</strong> — בדיוק סוג הכלי שמנהל הנדסי צריך.</p>
      <p>Dashboard טוב מציג <span class="t-en">KPIs</span> (מדדים מרכזיים) בכרטיסים, ו-<span class="t-en">Data Visualization</span> (גרפים) להבנה מהירה.</p>
      <p>העיקרון: <strong>פחות זה יותר</strong>. 3-5 מדדים חשובים עדיפים על 20 מספרים שמבלבלים.</p>
      <div class="callout tip"><div class="c-title">💡 חיבור לקורס שלנו</div>האתר שאתה לומד בו כרגע הוא בעצמו Dashboard לימודי! שים לב איך הוא מציג התקדמות בכרטיסים וסרגלים.</div>
    `,
    speech: "הגענו לשיא הפרויקטים — בניית דַאשְׁבּוֹרְד ניהולי. זה בדיוק סוג הכלי שמנהל הנדסי כמוך צריך ביומיום. דַאשְׁבּוֹרְד טוב מציג שני דברים עיקריים. ראשית, קֵיי-פִּי-אַייז, כלומר מדדי ביצוע מרכזיים, שמוצגים בכרטיסים נקיים — למשל מספר משימות פתוחות, או אחוז השלמה. שנית, דֵייטָה וִיזוּאַלַייזֵיישֵן, כלומר הצגה גרפית של הנתונים, כמו גרף עמודות, שעוזר להבין מגמות במבט אחד. והעיקרון החשוב ביותר בבניית דַאשְׁבּוֹרְד: פחות זה יותר. שלושה עד חמישה מדדים חשובים ומדויקים, עדיפים בהרבה על עשרים מספרים שרק מבלבלים. ודרך אגב — האתר שאתה לומד בו ממש עכשיו הוא בעצמו דַאשְׁבּוֹרְד לימודי! שים לב איך הוא מציג לך את ההתקדמות בכרטיסים ובסרגלים.",
    demo: {
      intro: "נתכנן את ה-Dashboard.",
      steps: [
        "הגדר 3 KPIs: סה\"כ משימות, הושלמו, אחוז השלמה.",
        "הגדר גרף אחד: משימות לפי סטטוס.",
        "בקש מ-Copilot כרטיסי KPI ב-HTML/CSS.",
        "בדוק תצוגה בדפדפן.",
      ],
    },
    guidedExercise: {
      intro: "נבנה Dashboard בסיסי.",
      githubUrl: "https://github.com/new",
      steps: [
        "צור Repository <code>team-dashboard</code> עם README.",
        "ב-<code>index.html</code> בקש מ-Copilot 3 כרטיסי KPI עם מספרים.",
        "הוסף נתוני דוגמה (מערך משימות ב-JS).",
        "בקש גרף עמודות פשוט (בלי ספריות), בדוק, ובצע PR.",
      ],
      checklist: [
        "יצרתי Repository",
        "בניתי 3 כרטיסי KPI",
        "הוספתי נתוני דוגמה",
        "הצגתי ויזואליזציה כלשהי",
      ],
      verify: "אילו 3 KPIs בחרת להציג?",
    },
    selfExercise: {
      task: "הוסף מסנן (filter) שמציג רק משימות פתוחות. למה מיקוד ב-KPIs חשוב למנהל?",
      hints: [
        "מסנן משנה אילו נתונים מוצגים.",
        "מנהל צריך את העיקר מהר, לא הכול.",
      ],
      solution: "הוספתי מסנן שמציג רק משימות פתוחות ומעדכן את ה-KPIs בהתאם. מיקוד ב-KPIs חשוב כי מנהל צריך לקבל החלטות מהר — 3-5 מדדים ברורים נותנים תמונה מיידית, בעוד עומס נתונים מסתיר את מה שחשוב באמת.",
    },
    knowledgeQuiz: [
      { q: "מה העיקרון המנחה בעיצוב Dashboard?",
        options: ["כמה שיותר מספרים", "פחות זה יותר — מיקוד", "צבעים רבים"], correct: 1,
        explain: "מיקוד ב-KPIs חשובים עדיף על עומס." },
      { q: "מה זה KPI?",
        options: ["סוג קובץ", "מדד ביצוע מרכזי", "שפת תכנות"], correct: 1,
        explain: "KPI = Key Performance Indicator." },
    ],
    commonMistakes: [
      "עומס מידע שמסתיר את העיקר.",
      "יותר מדי KPIs.",
      "גרף לא מתאים לנתון.",
    ],
    fixes: [
      "3-5 KPIs ממוקדים.",
      "בחר ויזואליזציה שמתאימה לנתון.",
    ],
    summary: [
      "Dashboard = מדדים חשובים במבט אחד.",
      "KPIs בכרטיסים + ויזואליזציה.",
      "פחות זה יותר.",
      "כלי מרכזי למנהל הנדסי.",
      "האתר הזה עצמו הוא דוגמה.",
    ],
    resources: [
      { title: "GitHub Docs — About Projects (insights)", url: "https://docs.github.com/en/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects", type: "📄 מדריך" },
      { title: "GitHub Copilot — Best practices", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot", type: "📄 מדריך" },
    ],
    badge: null,
  },

  /* ============================ שיעור 6.4 ============================ */
  "6.4": {
    id: "6.4", level: 6, title: "פרסום ל-GitHub Pages",
    difficulty: "פרויקט",
    objectives: [
      "להבין מה זה GitHub Pages",
      "לפרסם אתר סטטי מ-Repository",
      "לוודא שהאתר עלה ועובד",
    ],
    terms: [
      { en: "GitHub Pages", he: "שירות חינמי לאחסון ופרסום אתרים סטטיים מתוך Repository.",
        example: "פרסום index.html ישירות מה-repo לכתובת ציבורית.",
        when: "לאתרים סטטיים (HTML/CSS/JS).",
        mistakes: "לצפות שיריץ קוד צד-שרת (לא נתמך)." },
      { en: "Static site", he: "אתר מקבצים קבועים, בלי שרת צד-אחורי.",
        example: "HTML+CSS+JS — בדיוק כמו הקורס הזה.",
        when: "לאתרי תוכן, תיקים, כלים בצד-לקוח.",
        mistakes: "לנסות להריץ Backend ב-Pages." },
      { en: "Deploy", he: "פריסה — העלאת האתר לסביבה חיה.",
        example: "Settings → Pages → בחירת branch.",
        when: "אחרי שהאתר מוכן.",
        mistakes: "לפרסם קוד עם סודות." },
    ],
    explanation: `
      <p>הגיע הרגע לפרסם! <span class="t-en">GitHub Pages</span> מאחסן אתרים סטטיים <strong>בחינם</strong>, ישירות מ-Repository.</p>
      <p>מתאים ל-<span class="t-en">Static Sites</span> (HTML/CSS/JS) — בדיוק כמו הקורס הזה. לא מריץ קוד צד-שרת.</p>
      <p>התהליך: <strong>Settings → Pages → Source: Deploy from a branch → בחר main / root → Save</strong>. תוך דקות האתר עולה לכתובת <code>username.github.io/repo-name</code>.</p>
      <div class="callout warn"><div class="c-title">⚠️ לפני פרסום</div>ודא שאין סודות/מידע רגיש בקוד — אתר Public נגיש לכולם. בדוק גם שהקובץ הראשי נקרא <code>index.html</code>.</div>
    `,
    speech: "הגיע הרגע המרגש לפרסם את העבודה שלך לעולם! נשתמש בגִּיטהַאב פֵּייגֵ'ס, שירות שמאחסן אתרים סטטיים בחינם, ישירות מתוך הרֵפּוֹזִיטוֹרי. חשוב להבין: פֵּייגֵ'ס מתאים לאתרים סטטיים — כלומר אתרים שבנויים מ-אֵייץ'-טי-אֵם-אֵל, סי-אֵס-אֵס וג'אווהסקריפט, בדיוק כמו הקורס שאתה לומד בו עכשיו. הוא לא מריץ קוד צד-שרת. התהליך פשוט מאוד: נכנסים להגדרות הרֵפּוֹזִיטוֹרי, בוחרים פֵּייגֵ'ס, ואז בוחרים לפרוס מהענף הראשי. תוך כמה דקות, האתר שלך עולה לאוויר בכתובת ציבורית. אבל רגע לפני שאתה מפרסם — אזהרה חשובה: ודא שאין בקוד שום סוד או מידע רגיש, כי אתר פָּאבְּליק נגיש לכולם. ובדוק גם שהקובץ הראשי שלך נקרא אִינְדֵקְס נקודה אֵייץ'-טי-אֵם-אֵל.",
    demo: {
      intro: "נדגים פרסום ב-Pages.",
      steps: [
        "ב-Repository עם index.html, לך ל-<strong>Settings</strong>.",
        "בתפריט הצד לחץ <strong>Pages</strong>.",
        "תחת Source בחר <strong>Deploy from a branch</strong> → main → / (root) → Save.",
        "המתן דקות, רענן, וקבל את כתובת האתר.",
      ],
    },
    guidedExercise: {
      intro: "נפרסם את אחד הפרויקטים שלנו.",
      githubUrl: "https://github.com",
      steps: [
        "בחר Repository עם <code>index.html</code> (למשל my-task-tracker).",
        "פתח <strong>Settings → Pages</strong>.",
        "Source: <strong>Deploy from a branch</strong>, Branch: <strong>main</strong>, Folder: <strong>/ (root)</strong>, לחץ Save.",
        "המתן, ואז פתח את הכתובת שמופיעה וודא שהאתר עובד.",
      ],
      checklist: [
        "נכנסתי ל-Settings → Pages",
        "בחרתי branch ו-root",
        "לחצתי Save",
        "פתחתי את הכתובת והאתר עובד",
      ],
      verify: "מה הכתובת שקיבלת לאתר?",
    },
    selfExercise: {
      task: "אחרי הפרסום, בצע שינוי קטן ב-README או בקובץ, Commit, והמתן. האם האתר מתעדכן אוטומטית? מה זה אומר על Pages?",
      hints: [
        "Pages בונה מחדש אחרי כל push ל-branch שנבחר.",
        "העדכון לוקח דקה-שתיים.",
      ],
      solution: "כן, אחרי Commit ל-main, GitHub Pages בונה מחדש את האתר אוטומטית תוך דקה-שתיים. זה אומר ש-Pages מחובר ל-branch — כל שינוי שמתמזג ל-main מתפרסם אוטומטית. זהו 'continuous deployment' בסיסי.",
    },
    knowledgeQuiz: [
      { q: "מה GitHub Pages יכול לארח?",
        options: ["אתרים סטטיים (HTML/CSS/JS)", "מסדי נתונים", "קוד צד-שרת"], correct: 0,
        explain: "Pages מיועד לאתרים סטטיים בלבד." },
      { q: "מתי האתר מתעדכן?",
        options: ["ידנית בלבד", "אוטומטית אחרי push ל-branch", "אף פעם"], correct: 1,
        explain: "Pages בונה מחדש אחרי כל שינוי ב-branch הנבחר." },
    ],
    commonMistakes: [
      "לצפות שיריץ Backend.",
      "קובץ ראשי שלא נקרא index.html.",
      "לפרסם קוד עם סודות.",
    ],
    fixes: [
      "השתמש באתר סטטי; קובץ ראשי index.html.",
      "ודא שאין סודות לפני פרסום Public.",
    ],
    summary: [
      "GitHub Pages = אחסון אתרים סטטיים בחינם.",
      "מתאים ל-HTML/CSS/JS, לא ל-Backend.",
      "Settings → Pages → branch → root → Save.",
      "עדכון אוטומטי אחרי כל push.",
      "בדוק שאין סודות לפני פרסום.",
    ],
    resources: [
      { title: "GitHub Docs — GitHub Pages", url: "https://docs.github.com/en/pages/getting-started-with-github-pages", type: "📄 מדריך רשמי" },
      { title: "GitHub Docs — Creating a Pages site", url: "https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site", type: "📄 מדריך" },
      { title: "GitHub Skills — GitHub Pages", url: "https://skills.github.com/", type: "🎯 תרגול" },
    ],
    badge: "github_expert",
  },
};
