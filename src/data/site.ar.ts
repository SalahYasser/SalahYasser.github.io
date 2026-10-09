// Arabic (/ar/) personal details and all user-facing site copy. Same shape as ./site.ts.
// Source: the Arabic copy Salah approved (Oct 2026): simple Modern Standard Arabic, hero option A, «الموبايل» (not «الجوال»).
// Non-text values (email, links, CV path, photo files, analytics) come from ./site.ts so there is one source of truth.
// Phone number is intentionally kept off the HTML pages, as on the English site.

import { site as siteEn, copy as copyEn, experience as experienceEn, education as educationEn, courses as coursesEn, skills as skillsEn } from './site';

export const site: typeof siteEn = {
  ...siteEn,
  name: 'صلاح ياسر',
  role: 'مطوّر Flutter',
  location: 'القاهرة، مصر',
  photo: { ...siteEn.photo, alt: 'صلاح ياسر' },
  /** Arabic share image (rendered from the Arabic copy by shooter/og-ar.mjs). */
  shareImage: '/og/ar/home.png',
  /** Homepage meta description. */
  description: 'صلاح ياسر، مطوّر Flutter في القاهرة، يبني تطبيقات iOS وAndroid من المتطلبات حتى الإطلاق، وله تطبيقات منشورة على App Store وGoogle Play.',
  locality: 'القاهرة',
};

export const copy: typeof copyEn = {
  skipToContent: 'انتقل إلى المحتوى',
  primaryNavLabel: 'القائمة الرئيسية',
  homeLabelSuffix: '، الصفحة الرئيسية',
  ogImageAlt: 'صلاح ياسر، مطوّر Flutter: أبني تطبيقات الموبايل من المتطلبات حتى الإطلاق.',
  previewBanner: 'نسخة معاينة · تتضمن مشاريع ما زالت بانتظار تأكيد صلاح أو موافقة جهة العمل',
  nav: [
    { label: 'الأعمال', href: '/ar/#work' },
    { label: 'المهارات', href: '/ar/#skills' },
    { label: 'الخبرة', href: '/ar/#experience' },
    { label: 'تواصل', href: '/ar/#contact' },
  ],
  langSwitch: {
    groupLabel: 'اللغة',
    en: { short: 'EN', full: 'English' },
    ar: { short: 'عربي', full: 'العربية' },
  },
  emailSubject: {
    default: 'استفسار من موقعك',
    project: 'سؤال عن تطبيق {project}',
  },
  footer: { github: 'GitHub', linkedin: 'LinkedIn', email: 'البريد الإلكتروني', newTab: ' (يفتح في علامة تبويب جديدة)' },
  hero: {
    eyebrow: 'مطوّر Flutter · القاهرة، مصر',
    nameSeparator: '، ',
    lineBeforeSerif: 'أبني تطبيقات الموبايل',
    serif: 'من المتطلبات',
    serifAccent: 'حتى الإطلاق.',
    lede: 'تطبيقات Flutter جاهزة للاستخدام الفعلي، ببنية نظيفة، وتعمل حتى دون اتصال بالإنترنت، وتُسلَّم بإتقان على iOS وAndroid. ثلاثة منها متاحة على App Store وGoogle Play، ويستخدمها الناس اليوم فعلًا.',
    primaryCta: 'شاهد أبرز أعمالي',
    secondaryCta: 'تواصل معي',
    cvCta: 'تحميل السيرة الذاتية',
    cvAria: 'تحميل السيرة الذاتية (PDF)',
    proofAria: 'لمحة سريعة',
    proof: {
      appsLive: { singular: 'تطبيق معروض هنا ومتاح على المتاجر', plural: 'تطبيقات معروضة هنا ومتاحة على المتاجر' },
      ios: { k: 'iOS', v: 'إعداد الشهادات والتوقيع والنشر، من البداية إلى النهاية' },
      arabic: { k: 'ع', v: 'واجهات عربية من اليمين إلى اليسار وواجهات ثنائية اللغة' },
    },
  },
  work: {
    eyebrow: 'أعمال مختارة',
    titleBefore: 'تطبيقات حقيقية،',
    titleSerif: 'منشورة ومُحدَّثة باستمرار.',
    body: 'تعرض كل دراسة حالة المنتج، والجزء الذي توليته فيه، وأصعب تحدياته، والقرارات التي اتخذتها وأسبابها. جميع لقطات الشاشة مأخوذة من صفحات التطبيقات العامة على المتاجر.',
    storeProof: 'صفحتي كمطوّر على App Store',
    newTab: ' (يفتح في علامة تبويب جديدة)',
    moreTitle: 'أعمال أخرى',
    roleLabel: 'دوري:',
    caseStudyCta: 'اقرأ دراسة الحالة',
    pendingPrefix: 'بانتظار الموافقة:',
  },
  skills: {
    eyebrow: 'أدواتي',
    titleBefore: 'الأدوات التي بُنيت بها',
    titleSerif: 'هذه الأعمال.',
    body: 'مصنّفة حسب استخدامي الفعلي لها في مشاريع منشورة.',
  },
  howIWork: {
    eyebrow: 'طريقة عملي',
    titleBefore: 'من وثيقة المتطلبات',
    titleSerif: 'إلى تطبيق منشور على المتاجر.',
    steps: [
      {
        title: 'المتطلبات',
        body: 'أبدأ من متطلباتك، فأحوّلها إلى شاشات ومسارات استخدام، ونتفق على نطاق العمل قبل كتابة أي كود.',
      },
      {
        title: 'البنية',
        body: 'أُعدّ هيكلًا نظيفًا لتطبيق Flutter مع Bloc لإدارة الحالة، ليبقى التطبيق سهل التوسعة كلما زادت ميزاته.',
      },
      {
        title: 'التطوير',
        body: 'أبني الواجهات، وأربط واجهات API، وأتولى الأجزاء الصعبة مثل المزامنة دون إنترنت والأداء.',
      },
      {
        title: 'الإطلاق',
        body: 'أتولى توقيع تطبيقات iOS، وإصدارات TestFlight، وتقديم التطبيق إلى App Store وGoogle Play، حتى يصبح متاحًا للمستخدمين.',
      },
    ],
  },
  about: {
    eyebrow: 'نبذة',
    titleBefore: 'تعرّف',
    titleSerif: 'عليّ.',
    body: 'أنا صلاح، مطوّر Flutter مقيم في القاهرة، وحاصل على بكالوريوس علوم الحاسب. في BDC Business Services أبني تطبيقات منشورة مثل «المدرسة»، وبصفتي مطوّرًا مستقلًا أتولى تطبيقات العملاء من وثيقة المتطلبات حتى نشرها على المتاجر. أهتم بالبنية النظيفة، وبتطبيقات تواصل العمل دون إنترنت، وبإطلاق سلس على iOS وAndroid.',
  },
  experience: {
    eyebrow: 'الخبرة',
    titleBefore: 'أين',
    titleSerif: 'عملتُ وبنيت.',
    educationHeading: 'التعليم والتدريب',
    coursesHeading: 'الدورات والشهادات',
    coursesNote: 'دورات قصيرة أكملتها للتعمق في موضوعات محددة، ولكل دورة رابط لشهادتها.',
    viewCertificate: 'عرض الشهادة',
    certificateFor: ' الخاصة بدورة {name}',
    newTab: ' (يفتح في علامة تبويب جديدة)',
    workHeading: 'العمل',
    showAllCourses: 'عرض كل الدورات ({n})',
    showFewerCourses: 'عرض أقل',
    indexLabel: 'في هذا القسم',
  },
  faq: {
    eyebrow: 'الأسئلة الشائعة',
    titleBefore: 'أسئلة',
    titleSerif: 'يطرحها العملاء.',
    items: [
      {
        q: 'هل يمكنك بناء تطبيقي من الصفر؟',
        a: 'نعم. بنيت تطبيقات لعملاء بمفردي، من متطلبات العميل حتى الإطلاق، ومنها «البُردة» وFLEXI.',
      },
      {
        q: 'هل تتولى النشر على App Store وGoogle Play؟',
        a: 'نعم، بما في ذلك توقيع تطبيقات iOS، وإصدارات TestFlight، وتقديم التطبيق إلى المتاجر.',
      },
      { q: 'هل يمكن نشر التطبيق على حساب المطوّر الخاص بي؟', a: 'نعم، يمكنني النشر على حسابك أو على حسابي.' },
      {
        q: 'ما التقنيات التي تستخدمها؟',
        a: 'Flutter وDart، مع Clean Architecture وBloc، على Firebase أو على REST API الخاص بك.',
      },
      {
        q: 'هل يمكنك استلام تطبيق Flutter قائم؟',
        a: 'نعم. يمكنني استلام كود تطبيق Flutter قائم، وتشغيله، ثم مواصلة تطويره ونشره.',
      },
      { q: 'كيف نبدأ؟', a: 'راسلني بفكرتك أو متطلباتك، وسأرد عليك بالخطوات التالية.', emailLead: 'راسلني' },
    ],
  },
  contact: {
    eyebrow: 'تواصل',
    titleBefore: 'تبني منتجًا للموبايل؟',
    titleSerif: 'لنتحدث.',
    body: 'أرحّب بفرص العمل كمطوّر Flutter وبالمشاريع المستقلة. البريد الإلكتروني أسرع طريقة للتواصل معي.',
    copyEmail: 'نسخ البريد',
    copied: 'تم النسخ ✓',
    copiedAnnounce: 'تم نسخ عنوان البريد الإلكتروني.',
    copyFailed: 'تعذّر النسخ. العنوان هو {email}.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'تحميل السيرة الذاتية',
    cvAria: 'تحميل السيرة الذاتية (PDF)',
    newTab: ' (يفتح في علامة تبويب جديدة)',
  },
  caseStudy: {
    pageTitle: '{project}: دراسة حالة',
    appIconAlt: 'أيقونة تطبيق {project}',
    viewerLabel: 'عارض لقطات الشاشة',
    back: 'كل الأعمال',
    roleLabel: 'الدور',
    statusLabel: 'الحالة',
    stackLabel: 'التقنيات',
    sections: {
      product: { num: '01', title: 'المنتج' },
      role: { num: '02', title: 'دوري' },
      problem: { num: '03', title: 'التحدي الأصعب' },
      decisions: { num: '04', title: 'القرارات وأسبابها' },
      built: { num: '05', title: 'ما بنيته' },
      result: { num: '06', title: 'النتيجة' },
      seeIt: { num: '07', title: 'شاهده بنفسك' },
    },
    screenshotsNote: 'لقطات الشاشة من صفحات التطبيق العامة على المتاجر.',
    askAboutIt: 'اسألني عنه',
    nextLabel: 'دراسة الحالة التالية',
    enlarge: 'تكبير: {caption}',
    closeViewer: 'إغلاق العارض',
    prevShot: 'اللقطة السابقة',
    nextShot: 'اللقطة التالية',
    galleryAria: 'لقطات شاشة {project}، مرّر أفقيًا',
    newTab: ' (يفتح في علامة تبويب جديدة)',
    pendingPrefix: 'بانتظار الموافقة:',
  },
  projectsIndex: { pageTitle: 'أعمال مختارة', body: 'جارٍ نقلك إلى أبرز أعمالي…', cta: 'شاهد أبرز أعمالي' },
  notFound: {
    pageTitle: 'الصفحة غير موجودة',
    eyebrow: '404',
    titleBefore: 'هذه الصفحة',
    titleSerif: 'غير موجودة.',
    body: 'ربما يكون الرابط قديمًا.',
    cta: 'العودة إلى الصفحة الرئيسية',
  },
};

export const experience: typeof experienceEn = [
  {
    role: 'مطوّر Flutter',
    org: 'BDC Business Services',
    place: 'القاهرة، مصر',
    period: 'نوفمبر 2025 – حتى الآن',
    current: true,
    points: [
      'أبني تطبيقات Flutter لمنتجات في التعليم والموارد البشرية والذكاء الاصطناعي، تُنشر عبر App Store وGoogle Play وTestFlight.',
      'أتولى إعداد ملفات التوزيع والتوقيع ومسارات النشر على iOS لإصدارات الفريق.',
      'أعمل بـ Clean Architecture وBloc على تطبيقات كبيرة متعددة الأدوار، مع ربط REST API وتخزين محلي يتيح العمل دون إنترنت.',
      'أبني مكوّنات قابلة لإعادة الاستخدام ونظام تصميم (Theme) مشتركًا، لتبقى الشاشات متناسقة في جميع الميزات.',
    ],
  },
  {
    role: 'مطوّر Flutter مستقل',
    org: 'مشاريع لعملاء',
    points: [
      'بنيت تطبيقات لعملاء من الصفر بمفردي، من متطلبات العميل حتى الإطلاق.',
      // \u00a0 (no-break space) keeps each bracketed store name on one line: a line break inside Latin text in brackets scrambles the brackets in RTL.
      'توليت البنية والواجهات وربط واجهات API والنشر على المتاجر من حساب المطوّر الخاص بي، ومن هذه التطبيقات «البُردة» (App\u00a0Store وGoogle\u00a0Play) وFLEXI (App\u00a0Store).',
    ],
  },
];

export const education: typeof educationEn = [
  { title: 'بكالوريوس علوم الحاسب', org: 'المعهد التكنولوجي العالي (HTI)', period: '2023', degree: true },
  { title: 'تطوير تطبيقات الموبايل المتقدم بـ Flutter', org: 'Senior Steps Academy', period: '2023' },
  { title: 'دبلوم تطوير الواجهات الأمامية (Front-end)', org: 'Senior Steps Academy', period: '2022' },
  { title: 'دبلوم Flutter لتطوير تطبيقات الموبايل متعددة المنصات', org: 'Senior Steps Academy', period: '2021' },
];

// Course names stay in English (as on the certificates); only the issue month is in Arabic.
const arMonths: Record<string, string> = {
  Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو',
  Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر',
};
export const courses: typeof coursesEn = coursesEn.map((c) => ({
  ...c,
  period: c.period.replace(/^([A-Z][a-z]{2}) (\d{4})$/, (m, mon: string, y: string) => (arMonths[mon] ? `${arMonths[mon]} ${y}` : m)),
}));

export const skills: typeof skillsEn = [
  {
    group: 'الموبايل',
    items: [
      'Flutter',
      'Dart',
      'تسليم تطبيقات iOS وAndroid',
      'ودجت شاشة القفل بـ WidgetKit',
      'واجهات عربية من اليمين إلى اليسار',
    ],
  },
  {
    group: 'البنية وإدارة الحالة',
    items: ['Clean Architecture', 'Bloc / Cubit', 'Provider', 'MVVM', 'SOLID'],
  },
  {
    group: 'البيانات والتكامل',
    items: [
      'REST APIs',
      'مزامنة تعمل دون إنترنت (PowerSync)',
      'Firebase وFCM',
      'WebSockets',
      'Hive · Drift',
      'Stripe · PayPal',
      'Google Maps',
    ],
  },
  {
    group: 'النشر والجودة',
    items: [
      'App Store وGoogle Play وTestFlight',
      'توقيع تطبيقات iOS وإعداد ملفات التوزيع',
      'bloc_test · Mockito',
      'Git وGitHub',
      // No-break spaces, as in the freelance experience point.
      'التطوير بمساعدة الذكاء الاصطناعي (Claude\u00a0Code\u00a0·\u00a0Codex)',
    ],
  },
];
