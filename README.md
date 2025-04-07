# Nuxt 3 YouTube Channel Website Tutorial 🚀

[![Nuxt](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat&logo=vue.js)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![YouTube API](https://img.shields.io/badge/YouTube_API-v3-FF0000?style=flat&logo=youtube)](https://developers.google.com/youtube/v3)

این ریپازیتوری شامل کد منبع کامل پروژه آموزشی **ساخت وبسایت برای کانال یوتیوب با استفاده از Nuxt 3** است که در کانال یوتیوب [نام کانال شما] آموزش داده شده است.

**[🔗 لینک ویدیوی آموزشی در یوتیوب (وقتی آماده شد اینجا قرار بده)]**

در این پروژه، ما قدم به قدم یک وبسایت مدرن، واکنش‌گرا و داینامیک برای نمایش محتوای یک کانال یوتیوب با استفاده از قابلیت‌های قدرتمند Nuxt 3 و API رسمی یوتیوب پیاده‌سازی می‌کنیم.

## ✨ ویژگی‌های کلیدی پیاده‌سازی شده

*   **ساختار پروژه Nuxt 3:** راه‌اندازی اولیه و استفاده از ساختار استاندارد.
*   **ماژول‌های رسمی Nuxt:**
    *   `@nuxt/ui`: برای کامپوننت‌های UI آماده و زیبا (شامل Tailwind CSS).
    *   `@nuxt/icon`: استفاده آسان از آیکون‌ها.
    *   `@nuxt/image`: بهینه‌سازی تصاویر.
    *   `@nuxt/fonts`: مدیریت و بهینه‌سازی فونت‌ها (شامل فونت فارسی IBM Plex Sans Arabic).
    *   `@nuxt/scripts`: مدیریت اسکریپت‌های third-party (مثل YouTube Player API).
    *   `@nuxtjs/i18n`: پیاده‌سازی چندزبانگی (فارسی و انگلیسی).
    *   `@nuxt/content`: ساخت صفحات ساده محتوایی (مثل درباره ما، تماس با ما) با Markdown.
*   **یکپارچه‌سازی با YouTube Data API v3:**
    *   نمایش لیست پخش‌ها (Playlists).
    *   نمایش اطلاعات کانال (لوگو، نام، ...).
    *   نمایش آخرین ویدیوها.
    *   نمایش آخرین ویدیوهای کوتاه (Shorts).
    *   نمایش ویدیوی ویژه (Featured/Special).
    *   (در آینده) نمایش ویدیوهای یک لیست پخش خاص یا جزئیات یک ویدیو.
*   **Nuxt Server Routes:** ساخت API Endpoints اختصاصی در سمت سرور برای ارتباط امن با YouTube API.
*   **Nuxt Composables:** سازماندهی منطق دریافت داده از API در توابع قابل استفاده مجدد (`useYouTube`).
*   **Fetching Data:** استفاده از `useFetch` و `useAsyncData` برای دریافت داده بهینه با مدیریت وضعیت‌های Loading و Error.
*   **طراحی واکنش‌گرا (Responsive):** شامل منوی همبرگری برای موبایل با `USlideover`.
*   **Routing:** استفاده از `<NuxtLink>` برای ناوبری بهینه در سمت کلاینت و روتینگ داینامیک برای صفحات محتوایی.
*   **پیکربندی:** استفاده از `runtimeConfig` و فایل `.env` برای مدیریت امن کلید API.

## 🛠️ پشته فناوری (Tech Stack)

*   **Framework:** [Nuxt 3](https://nuxt.com)
*   **UI Library:** [Nuxt UI](https://ui.nuxt.com) (بر پایه [Tailwind CSS](https://tailwindcss.com) و [Headless UI](https://headlessui.dev))
*   **State Management:** Nuxt Composables / Vue Reactivity API
*   **API:** [YouTube Data API v3](https://developers.google.com/youtube/v3)
*   **Content:** [Nuxt Content v3](https://content.nuxt.com)
*   **Internationalization:** [Nuxt i18n](https://i18n.nuxtjs.org)
*   **Icons:** [Nuxt Icon](https://icon.nuxt.com) / [Iconify](https://iconify.design)
*   **Fonts:** [Nuxt Fonts](https://fonts.nuxt.com) / [Google Fonts](https://fonts.google.com)
*   **Images:** [Nuxt Image](https://image.nuxt.com)
*   **Scripts:** [Nuxt Scripts](https://scripts.nuxt.com/)
*   **Package Manager:** (هر کدام که استفاده کردی: pnpm, npm, yarn, bun)

## 🚀 شروع به کار

### پیش‌نیازها

*   [Node.js](https://nodejs.org/) (نسخه 18 یا بالاتر توصیه می‌شود)
*   یک Package Manager مثل [pnpm](https://pnpm.io/) (توصیه شده), [npm](https://npmjs.com/), [yarn](https://yarnpkg.com/), یا [bun](https://bun.sh/)

### مراحل راه‌اندازی

1.  **کلون کردن ریپازیتوری:**
    ```bash
    git clone https://github.com/unknownman/youtube-channel-website-nuxt3
    cd youtube-channel-website-nuxt3
    ```

2.  **نصب وابستگی‌ها:**
    ```bash
    # با pnpm (توصیه شده)
    pnpm install

    # یا با npm
    npm install

    # یا با yarn
    yarn install

    # یا با bun
    bun install
    ```

3.  **تنظیمات کلید API یوتیوب:**
    *   یک فایل به نام `.env` در ریشه پروژه بسازید.
    *   محتویات فایل `.env-sample` را در فایل `.env` کپی کنید.
    *   مقادیر زیر را با اطلاعات واقعی خودتان جایگزین کنید:
        *   `YOUTUBE_API_KEY`: کلید API خودتان را که از Google Cloud Console دریافت کرده‌اید، اینجا قرار دهید. ([راهنمای دریافت کلید API یوتیوب](https://developers.google.com/youtube/v3/getting-started))
        *   `YOUTUBE_CHANNEL_ID`: شناسه کانال یوتیوب مورد نظرتان را وارد کنید.
        *   `FEATURED_VIDEO_ID`: شناسه ویدیویی که می‌خواهید در بخش Featured نمایش داده شود.
        *   `SPECIAL_VIDEO_ID`: شناسه ویدیویی که می‌خواهید در بخش Special نمایش داده شود.
        *   `DEFAULT_LOCALE` (اختیاری): زبان پیش‌فرض (مثلاً `fa` یا `en`).

4.  **اجرای سرور توسعه (Development):**
    ```bash
    # با pnpm
    pnpm dev --open

    # یا با npm
    npm run dev -- --open

    # ... (مشابه برای yarn و bun)
    ```
    اپلیکیشن در آدرس `http://localhost:3000` قابل مشاهده خواهد بود.

5.  **ساخت نسخه Production:**
    ```bash
    pnpm build
    # یا npm run build, yarn build, bun run build
    ```

6.  **پیش‌نمایش نسخه Production:**
    ```bash
    pnpm preview
    # یا npm run preview, yarn preview, bun run preview
    ```

## 📁 ساختار پروژه (اختیاری)
```
.
├── .env-sample # نمونه فایل متغیرهای محیطی
├── .gitignore
├── app.vue # نقطه ورود اصلی اپلیکیشن Vue
├── assets/ # فایل‌های استاتیک (CSS, ...)
│ └── css/main.css
├── components/ # کامپوننت‌های Vue (Auto-imported)
│ └── ui/ # کامپوننت‌های UI (Sidebar, Playlist, Latest, ...)
├── composables/ # توابع Composable (مثل useYouTube.ts)
│ └── useYouTube.ts
├── content/ # محتوای مدیریت شده توسط Nuxt Content
│ └── page/
│ ├── about.md
│ └── contact.md
├── i18n/ # فایل‌های ترجمه
│ └── locales/
│ ├── en.json
│ └── fa.json
├── layouts/ # لایوت‌های صفحه
│ └── default.vue
├── nuxt.config.ts # فایل پیکربندی اصلی Nuxt
├── package.json
├── pages/ # روت‌ها و صفحات (Auto-routing)
│ ├── index.vue # صفحه اصلی
│ └── page/
│ └── [...slug].vue # روت داینامیک برای صفحات محتوایی
├── public/ # فایل‌های عمومی (favicon, robots.txt)
├── server/ # کدهای سمت سرور
│ └── api/ # API Routes (مثل /api/youtube/playlists)
│ └── youtube/
├── tsconfig.json # پیکربندی TypeScript
└── README.md # این فایل :)
```


## 🤝 مشارکت (اختیاری)

اگر پیشنهادی برای بهبود پروژه یا رفع باگ دارید، لطفاً یک Issue باز کنید یا Pull Request بفرستید.

## 📄 لایسنس (اختیاری)

این پروژه تحت لایسنس GPL v3 منتشر شده است. [LICENSE](LICENSE) فایل را برای جزئیات بیشتر ببینید. (اگر می‌خواهید لایسنس اضافه کنید)

---

امیدوارم از این پروژه آموزشی لذت ببرید و Nuxt 3 را بهتر یاد بگیرید!