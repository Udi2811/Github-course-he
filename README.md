# קורס GitHub בעברית 🐙

אתר לימודי אינטראקטיבי בעברית (RTL) שמלמד לעבוד עם **GitHub** ו-**GitHub Copilot** בצורה מעשית — מהיסודות ועד רמת מומחה. כל התרגול מתבצע בממשק האינטרנט של **GitHub.com** (לא נדרש VS Code).

## ✨ מה כלול בגרסה זו

- **דף פתיחה** עם "התחל" ו"המשך מהמקום שבו עצרתי".
- **שאלון אבחון** (10 שאלות, אחת בכל פעם) עם חישוב רמה והמלצת התחלה.
- **לוח התקדמות (Dashboard)** — אחוז השלמה, נקודות, רמת לומד, תגים, השיעור הבא.
- **מפת קורס** עם 6 רמות ונעילה הדרגתית + מצב מנהל לבדיקה.
- **23 שיעורים מלאים** (רמות 1–6), כל אחד עם 21 רכיבים לימודיים.
- **סרטוני הסבר מוטמעים** (YouTube, טעינה בלחיצה) בשיעורי מפתח.
- **הסבר קולי בעברית** (Web Speech API) עם נפילה בטוחה אם אין קול עברי.
- **עוזר לימודי** עם תשובות מוכנות לפי נושא.
- **Gamification**: נקודות ותגים.
- **מצב כהה/בהיר**, רספונסיבי, נגיש.
- שמירת התקדמות ב-`localStorage` (שורדת רענון וסגירת דפדפן).

## 🗺️ מבנה הרמות

1. **מתחיל** — Git מול GitHub, Repository, Commit, README/Markdown, Branch, Issue, Pull Request, סקירה.
2. **בסיסי** — יצירת Repository מלא, עריכה והיסטוריה, Diff, שחזור מטעות.
3. **בינוני** — Labels/Milestones/Assignees, GitHub Projects, Templates ו-Releases.
4. **מתקדם** — Copilot ב-GitHub.com, לולאת Generate→Inspect→Test→Verify→Improve, Custom Instructions, Prompt Files.
5. **מומחה** — Custom Agents, Agent Skills, GitHub Actions, פרויקט גמר.
6. **פרויקטים** — מעקב משימות, ניתוח CSV, Dashboard ניהולי, פרסום ל-GitHub Pages.

## 🔐 בטיחות ושקיפות

- האתר **לעולם לא** מבקש סיסמה, Token, מפתח API או מידע חסוי.
- בגרסה זו אין חיבור ל-GitHub API — אימות התרגילים הוא **בדיקה עצמית** (רשימת בדיקה + שאלת אימות), והדבר מוצג בשקיפות מלאה.
- אין שרת: כל הנתונים נשמרים מקומית בדפדפן בלבד.

## 🚀 הרצה מקומית

פתיחה פשוטה: לחיצה כפולה על `index.html`.

להרצה דרך שרת מקומי (מומלץ, מדמה סביבת אתר אמיתית):

```powershell
# Python
python -m http.server 5500
# ואז פתח בדפדפן: http://localhost:5500
```

## 🌐 פרסום ב-GitHub Pages

1. העלה את התיקייה ל-Repository ב-GitHub.
2. **Settings → Pages → Source: Deploy from a branch → main / root**.
3. הכתובת תתפרסם תוך דקות.

## 📁 מבנה הפרויקט

```
github-course/
├── index.html          # נקודת כניסה
├── css/
│   ├── themes.css      # צבעי Light / Dark
│   └── main.css        # עיצוב כללי + RTL + רספונסיבי
├── js/
│   ├── data.js         # תוכן הקורס (שאלון, תגים, מפה, שיעורים)
│   ├── state.js        # ניהול התקדמות + localStorage
│   ├── speech.js       # הסבר קולי בעברית
│   ├── gamification.js # נקודות ותגים
│   ├── assistant.js    # עוזר לימודי
│   ├── quiz.js         # שאלון אבחון
│   ├── lessons.js      # מנוע רינדור שיעורים
│   └── app.js          # ניתוב + דפים ראשיים
└── README.md
```

## 🗺️ הרחבות עתידיות (שלב ה')

שאר השיעורים והרמות · פרויקטים מעשיים · Custom Instructions · Prompt Files · Custom Agents · Agent Skills · GitHub Actions · חיבור מודל AI לעוזר דרך Backend מאובטח · משתמשים ומסד נתונים.
