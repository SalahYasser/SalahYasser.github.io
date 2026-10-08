// Personal details and all user-facing site copy.
// Pages and components render from this file and from projects.ts — do not hardcode English copy elsewhere.
// Phone number is intentionally omitted (brief §10).

export const site = {
  name: 'Salah Yasser',
  role: 'Flutter Developer',
  location: 'Cairo, Egypt',
  email: 'salahy.allaithy@gmail.com',
  links: {
    github: 'https://github.com/SalahYasser',
    linkedin: 'https://www.linkedin.com/in/SalahYasserAllaithy',
  },
  // Set to a path under /public (e.g. '/cv/Salah-Yasser-CV.pdf') once a public CV
  // without private details is approved. Left null so no broken link ships.
  cvPath: null as string | null,
  description:
    'Salah Yasser is a Flutter developer in Cairo who builds and ships production mobile apps: clean architecture, offline-first behaviour and end-to-end iOS release.',
  brandMark: 'SY',
};

/** Navigation, section chrome, CTAs and other UI strings shared across pages. */
export const copy = {
  skipToContent: 'Skip to content',
  primaryNavLabel: 'Primary',
  homeLabelSuffix: ', home',
  previewBanner:
    'Preview build · includes projects still awaiting Salah’s confirmation or employer approval',
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact' },
  ],
  footer: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    newTab: ' (opens in a new tab)',
  },
  hero: {
    eyebrow: 'Flutter Developer · Cairo, Egypt',
    lineBeforeSerif: 'I build mobile apps',
    serif: 'from requirements',
    serifAccent: 'to release.',
    lede:
      'Production Flutter apps with clean architecture, offline-first behaviour and polished iOS and Android delivery. Some of them are shipped on the App Store and Google Play, and in real people’s hands today.',
    primaryCta: 'View selected work',
    secondaryCta: 'Get in touch',
    cvCta: 'Download CV',
    proofAria: 'At a glance',
    proof: {
      appsLive: {
        singular: 'app featured here, live on the stores',
        plural: 'apps featured here, live on the stores',
      },
      ios: { k: 'iOS', v: 'provisioning, signing and release, end to end' },
      arabic: { k: 'ع', v: 'Arabic RTL and bilingual interfaces' },
    },
  },
  work: {
    eyebrow: 'Selected work',
    titleBefore: 'Real apps,',
    titleSerif: 'shipped and maintained.',
    body: 'Each case study covers the product, what I was responsible for, the hard parts, and the decisions behind them. All screenshots are taken from the actual apps.',
    moreTitle: 'More work',
    roleLabel: 'My role:',
    caseStudyCta: 'Read the case study',
    pendingPrefix: 'Pending:',
  },
  skills: {
    eyebrow: 'What I work with',
    titleBefore: 'The tools behind',
    titleSerif: 'the work above.',
    body: 'Grouped by how I actually use them in shipped projects.',
  },
  experience: {
    eyebrow: 'Experience',
    titleBefore: 'Where I’ve',
    titleSerif: 'been building.',
    educationHeading: 'Education & training',
  },
  contact: {
    eyebrow: 'Contact',
    titleBefore: 'Building a mobile product?',
    titleSerif: 'Let’s talk.',
    body: 'I’m open to Flutter roles and freelance projects. Email is the quickest way to reach me.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    newTab: ' (opens in a new tab)',
  },
  caseStudy: {
    pageTitleSuffix: 'case study',
    viewerLabel: 'Screenshot viewer',
    back: 'All work',
    roleLabel: 'Role',
    statusLabel: 'Status',
    stackLabel: 'Stack',
    sections: {
      product: { num: '01', title: 'The product' },
      role: { num: '02', title: 'My role' },
      problem: { num: '03', title: 'The hard part' },
      decisions: { num: '04', title: 'Decisions and why' },
      built: { num: '05', title: 'What I built' },
      result: { num: '06', title: 'Result' },
      seeIt: { num: '07', title: 'See it' },
    },
    screenshotsNote: 'Screenshots from the app’s public store listings.',
    askAboutIt: 'Ask me about it',
    nextLabel: 'Next case study',
    enlargePrefix: 'Enlarge:',
    closeViewer: 'Close viewer',
    prevShot: 'Previous screenshot',
    nextShot: 'Next screenshot',
    galleryAriaSuffix: 'screenshots, scroll horizontally',
    newTab: ' (opens in a new tab)',
    pendingPrefix: 'Pending:',
  },
  notFound: {
    pageTitle: 'Page not found',
    eyebrow: '404',
    titleBefore: 'This page',
    titleSerif: 'isn’t here.',
    body: 'The link may be out of date.',
    cta: 'Back to the homepage',
  },
};

export const experience = [
  {
    role: 'Flutter Developer',
    org: 'BDC Business Services',
    place: 'Cairo, Egypt',
    period: 'Nov 2025 – Present',
    points: [
      'Builds Flutter apps for education, HR and AI products, shipped through the App Store, Google Play and TestFlight.',
      'Owns iOS provisioning, signing and distribution workflows for the team’s releases.',
      'Works with Clean Architecture and Bloc on large, multi-role applications with REST API integration and offline-first caching.',
      'Builds reusable widgets and a shared theming system to keep screens consistent across features.',
    ],
  },
];

export const education = [
  { title: 'B.Sc. Computer Science', org: 'Higher Technological Institute (HTI)', period: '2023' },
  { title: 'Flutter Advanced Mobile Development', org: 'Senior Steps Academy', period: '2023' },
  { title: 'Front-end Development Diploma', org: 'Senior Steps Academy', period: '2022' },
  { title: 'Flutter Cross Mobile Diploma', org: 'Senior Steps Academy', period: '2021' },
];

export const skills = [
  {
    group: 'Mobile',
    items: ['Flutter', 'Dart', 'iOS & Android delivery', 'WidgetKit lock-screen widgets', 'Arabic RTL interfaces'],
  },
  {
    group: 'Architecture & state',
    items: ['Clean Architecture', 'Bloc / Cubit', 'Provider', 'MVVM', 'SOLID'],
  },
  {
    group: 'Data & integration',
    items: ['REST APIs', 'Offline-first sync (PowerSync)', 'Firebase & FCM', 'WebSockets', 'Hive · Drift', 'Stripe · PayPal · Google Maps'],
  },
  {
    group: 'Shipping & quality',
    items: ['App Store, Google Play & TestFlight', 'iOS signing & provisioning', 'bloc_test · Mockito', 'Git & GitHub'],
  },
];
