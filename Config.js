/* ══════════════════════════════════════════════════
   Showme TV — إعدادات اللوحة
   عدّل هذا الملف مرة واحدة. لا تلمسه عند تحديث اللوحة.
   ══════════════════════════════════════════════════ */

window.SHOWME_CONFIG = {

  /* ── الاتصال بقاعدة البيانات ──
     القيم هون بس Placeholder — القيم الحقيقية بتنزرع تلقائياً
     وقت النشر من GitHub Secrets (شوفي .github/workflows/deploy.yml) */
  SUPABASE_URL:  '__SUPABASE_URL__',
  SUPABASE_ANON: '__SUPABASE_ANON__',

  /* ── الهوية ── */
  BRAND: 'Showme TV',
  LOGO:  'Logo.png',

  /* ── وسائل التواصل الظاهرة في الرسائل ── */
  CONTACT: {
    telegram: 't.me/Showme_TV',
    email:    'support@showmetv.store',
    site:     'showmetv.store',
    bot:      't.me/Showmetvsupport_Bot',
    group:    '',   // جروب المشتركين — اتركه فاضياً إذا ما في
    updates:  '',   // قناة تحديثات السيرفر
  },

  /* ── عرض الترشيح في آخر الرسائل ── */
  REFERRAL:
`🎁 نظام النقاط
رشّح صديق واربح ⭐ نقطة عن كل اشتراك.
النقطة = شهر اشتراك مجاني أو تطبيق مدفوع.
استخدمها لحالك أو أهديها لأي حدا.`,

};
