

#  iTunes Search App -  البحث في البودكاست 🎧

تطبيق ويب تفاعلي مبني بـ Next.js، يتيح للمستخدمين البحث عن برامج البودكاست وحلقاتها الصوتية من خلال واجهة سهلة وسريعة.
يعتمد على iTunes Search API لجلب البيانات، ويقوم بتحليل روابط RSS تلقائيًا لاستخراج الحلقات، مع تخزينها باستخدام Prisma وSupabase.



---

##   Getting Started | طريقة التشغيل 🚀 
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

###  Project Structure | هيكلة المشروع 🗂️ 




      
<img width="513" alt="Screenshot 1447-01-07 at 11 24 48 PM" src="https://github.com/user-attachments/assets/41919a87-2007-4aec-ba91-2f70da3a0433" />
