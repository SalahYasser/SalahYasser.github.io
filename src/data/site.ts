// Personal details and all user-facing site copy.
// Pages and components render from this file and from projects.ts — do not hardcode English copy elsewhere.
// Phone number is intentionally kept off the HTML pages; it appears only inside the downloadable CV PDF (approved by Salah).

export const site = {
  name: 'Salah Yasser',
  role: 'Flutter Developer',
  location: 'Cairo, Egypt',
  email: 'salahy.allaithy@gmail.com',
  links: {
    github: 'https://github.com/SalahYasser',
    linkedin: 'https://www.linkedin.com/in/SalahYasserAllaithy',
  },
  // Path under /public to the downloadable CV. Set to null to hide every CV button.
  cvPath: '/cv/Salah-Yasser-Flutter-Developer-CV.pdf' as string | null,
  /** Homepage meta description (<= 155 characters). */
  description:
    'Salah Yasser is a Flutter developer in Cairo building iOS & Android apps from requirements to release, with apps live on the App Store & Google Play.',
  /** Used in JSON-LD (Person.address). */
  locality: 'Cairo',
  countryCode: 'EG',
  brandMark: 'SY',
  /**
   * GoatCounter (cookie-free, privacy-friendly analytics). The script is added only in production builds.
   * Set `goatcounter` to null to remove analytics everywhere.
   * `clicks` are the GoatCounter event names sent by `data-goatcounter-click` on tracked links
   * (store buttons are generated per project as `store-<slug>-<app-store|google-play>`).
   */
  analytics: {
    goatcounter: 'https://salahyasser.goatcounter.com/count' as string | null,
    script: 'https://gc.zgo.at/count.js',
    clicks: {
      cvDownload: 'cv-download',
      contactEmail: 'contact-email',
      contactLinkedin: 'contact-linkedin',
      contactGithub: 'contact-github',
      footerEmail: 'footer-email',
      footerLinkedin: 'footer-linkedin',
      footerGithub: 'footer-github',
      storePrefix: 'store',
    },
  },
};

/** Navigation, section chrome, CTAs and other UI strings shared across pages. */
export const copy = {
  skipToContent: 'Skip to content',
  primaryNavLabel: 'Primary',
  homeLabelSuffix: ', home',
  /** Alt text for the default share image (public/og.png). */
  ogImageAlt: 'Salah Yasser, Flutter developer: I build mobile apps from requirements to release.',
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
    cvAria: 'Download CV (PDF)',
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
    body: 'Each case study covers the product, what I was responsible for, the hard parts, and the decisions behind them. All screenshots come from the apps’ public store listings.',
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
  howIWork: {
    eyebrow: 'How I work',
    titleBefore: 'From a requirements doc',
    titleSerif: 'to a live store listing.',
    steps: [
      {
        title: 'Requirements',
        body: 'I start from your requirements, turn them into screens and user flows, and agree on scope before writing code.',
      },
      {
        title: 'Architecture',
        body: 'I set up a clean Flutter structure with Bloc for state management, so the app stays easy to extend as features grow.',
      },
      {
        title: 'Build',
        body: 'I build the UI, connect the APIs, and handle the hard parts like offline sync and performance.',
      },
      {
        title: 'Release',
        body: 'I handle iOS signing, TestFlight builds and App Store & Google Play submissions, through to a live app.',
      },
    ],
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
    cv: 'Download CV',
    cvAria: 'Download CV (PDF)',
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
  /** /projects/ has no page of its own; it forwards to the work section. */
  projectsIndex: {
    pageTitle: 'Selected work',
    body: 'Taking you to my selected work…',
    cta: 'View selected work',
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
    current: true,
    points: [
      'Builds Flutter apps for education, HR and AI products, shipped through the App Store, Google Play and TestFlight.',
      'Owns iOS provisioning, signing and distribution workflows for the team’s releases.',
      'Works with Clean Architecture and Bloc on large, multi-role applications with REST API integration and offline-first caching.',
      'Builds reusable widgets and a shared theming system to keep screens consistent across features.',
    ],
  },
  {
    role: 'Freelance Flutter Developer',
    org: 'Client projects',
    points: [
      'Built client apps from scratch as a solo developer, from the client’s requirements to release.',
      'Owned architecture, UI, APIs and store releases under my own developer account, including Al-Burda (App Store & Google Play) and FLEXI (App Store).',
    ],
  },
];

export const education = [
  { title: 'B.Sc. Computer Science', org: 'Higher Technological Institute (HTI)', period: '2023', degree: true },
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
    items: ['REST APIs', 'Offline-first sync (PowerSync)', 'Firebase & FCM', 'WebSockets', 'Hive · Drift', 'Stripe · PayPal', 'Google Maps'],
  },
  {
    group: 'Shipping & quality',
    items: ['App Store, Google Play & TestFlight', 'iOS signing & provisioning', 'bloc_test · Mockito', 'Git & GitHub', 'AI-assisted development (Claude Code · Codex)'],
  },
];
