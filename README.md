# Educational Website With React

موقع تعليمي تفاعلي مبني باستخدام [React](https://react.dev/) و [Vite](https://vitejs.dev/) و [Tailwind CSS](https://tailwindcss.com/)، يهدف لتقديم تجربة تعليمية سهلة وجذابة مع استعراض الدورات، المراجعات، والمميزات.

## المميزات

- واجهة حديثة وسهلة الاستخدام
- عرض الدورات التعليمية مع تفاصيلها وصورها
- نظام تقييم ومراجعات الطلاب
- تصميم متجاوب لجميع الأجهزة
- استخدام أيقونات FontAwesome
- بناء سريع باستخدام Vite
- تخصيص الألوان والخطوط عبر CSS متقدم و Tailwind

## التركيب والتشغيل

1. **استنساخ المشروع:**
   ```bash
   git clone https://github.com/SSB2002S/Educational-Website-With-React.git
   cd Educational-Website-With-React
   ```

2. **تثبيت الحزم:**
   ```bash
   npm install
   ```

3. **تشغيل المشروع محليًا:**
   ```bash
   npm run dev
   ```

4. **بناء المشروع للإنتاج:**
   ```bash
   npm run build
   ```

## النشر على GitHub Pages

- تم ضبط إعدادات Vite في [`vite.config.js`](vite.config.js) عبر خاصية `base` لتناسب النشر في مجلد فرعي.
- بعد البناء، استخدم أداة [gh-pages](https://www.npmjs.com/package/gh-pages) لرفع مجلد `dist`:
  ```bash
  npx gh-pages -d dist
  ```

## هيكلية المشروع

```
src/
  components/
    common/
    ...
  assets/
  App.jsx
  main.jsx
  index.css
public/
  React.png
  TypeScript.png
  JavaScript.png
  ...
data.jsx
vite.config.js
...
```

## المتطلبات

- Node.js 18 أو أحدث
- npm 9 أو أحدث

## مساهماتك

مرحب بأي مساهمة أو اقتراح عبر [Issues](https://github.com/SSB2002S/Educational-Website-With-React/issues) أو Pull Request.

---

