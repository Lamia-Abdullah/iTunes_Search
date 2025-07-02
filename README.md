

#  iTunes Search App -  البحث في البودكاست 🎧

تطبيق ويب تفاعلي مبني بـ Next.js، يتيح للمستخدمين البحث عن برامج البودكاست وحلقاتها الصوتية من خلال واجهة سهلة وسريعة.
يعتمد على iTunes Search API لجلب البيانات، ويقوم بتحليل روابط RSS تلقائيًا لاستخراج الحلقات، مع تخزينها باستخدام Prisma وSupabase.



---

##  طريقة التشغيل | Getting Started 🚀

1. شغل السيرفر المحلي:🧑‍💻

   ```bash
     git clone https://github.com/Lamia-Abdullah/iTunes_Search.git
     cd itunes-search
     npm install
     npx prisma generate
     npx prisma db push
     npm run dev

2. افتح المتصفح على:
Open in browser: http://localhost:3000


-------------------


##  Tech Stack — التقنيات المستخدمة 🧠

#### Front-End (الواجهة) 🎯 

Next.js — لإدارة الواجهة وملفات الـ Pages وComponents ⚙️

Tailwind CSS — لتنسيق وتصميم الواجهة بسهولة 🎨

React Icons — لإضافة أيقونات جاهزة   ⭐

LocalStorage — لتخزين نتائج البحث مؤقتًا داخل المتصفح 💾

#### Back-End (الخلفية) 🛠️

iTunes Search API — لجلب بيانات البودكاستات من Apple 📡

RSS Feed + xml2js — لتحليل الحلقات من روابط RSS 🔁

Prisma ORM — للتعامل مع قاعدة البيانات  🧠

Supabase (PostgreSQL) — قاعدة بيانات 🛢️



-----------------------------



### هيكلة المشروع | Project Structure 🗂️ 

src/
├── app/                      # صفحات Next.js وملفات API
│    ├── layout.js             # تخطيط الصفحة الأساسي
│    ├── globals.css           # تنسيقات عامة للمشروع
│    ├── page.js               # الصفحة الرئيسية لنتائج البحث
│    └── api/
│         ├─ search/route.js    # Endpoint للبحث عبر iTunes
│         └─ episodes/route.js  # Endpoint لتحليل الحلقات من RSS
│
├── components/               # مكونات أساسية للواجهة
│      ├── SearchInput.js
│      ├── PodcastSection.js
│      ├── EpisodeSection.js
│      ├── Banner.js
│      ├── NoResults.js
│      ├── Loader.js
│      └── Sidebar.js
│
├── common/                   # 🔁 مكونات  قابلة لإعادة الاستخدام
│     ├── Button.js
│     ├── PodcastCard.js
│     └── EpisodeCard.js
│
├── hooks/
│     └── useSearch.js          # logic منطق البحث 
│
├── services/                 # 🌐  (Functions) للتواصل مع API
│     ├── searchService.js
│     ├── episodeService.js
│     └── handleSearch.js
│
├── generated/
│      └── prisma/               # ملفات Prisma و Client
│
└── public/
      └── images/logo.png       # شعار المشروع
