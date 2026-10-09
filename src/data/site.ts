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
    /** Public App Store developer (seller) page "Salah Yasser" (artistViewUrl from the iTunes lookup API). */
    appStoreDeveloper: 'https://apps.apple.com/eg/developer/salah-yasser/id6784274942',
  },
  // Path under /public to the downloadable CV. Set to null to hide every CV button.
  cvPath: '/cv/Salah-Yasser-Flutter-Developer-CV.pdf' as string | null,
  /** Profile photo (About section + Person JSON-LD `image`). Pre-sized WebP files in /public/images/about. */
  photo: {
    src: '/images/about/salah-yasser.webp',
    width: 460,
    height: 460,
    srcset: '/images/about/salah-yasser-240w.webp 240w, /images/about/salah-yasser-360w.webp 360w, /images/about/salah-yasser.webp 460w',
    alt: 'Salah Yasser',
  },
  /** Default 1200×630 share image (og:image) for pages without their own. */
  shareImage: '/og.png',
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
      faqEmail: 'faq-email',
      /** The App Store developer page link under the Work heading. */
      workAppStoreDeveloper: 'work-app-store-developer',
      /** The "Copy email" button in the Contact section. */
      contactCopyEmail: 'contact-copy-email',
      /** "Ask me about it" on a case study, sent as `ask-<slug>`. */
      askPrefix: 'ask',
      storePrefix: 'store',
      /** Public code-sample link under a case-study diagram, sent as `<slug>-sample-repo`. */
      sampleRepoSuffix: 'sample-repo',
      /** "View certificate" on a course in the Experience section (the course name is sent as the title). */
      courseCertificate: 'course-certificate',
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
  /** Header language toggle (EN | عربي). Language names are always shown in their own language. */
  langSwitch: {
    groupLabel: 'Language',
    en: { short: 'EN', full: 'English' },
    ar: { short: 'عربي', full: 'العربية' },
  },
  /**
   * Pre-filled subject lines for every mailto link: `default` (Contact, FAQ, footer) and `project`
   * ("Ask me about it" on a case study; {project} is the project title).
   */
  emailSubject: {
    default: 'Enquiry from your portfolio',
    project: 'Question about {project}',
  },
  footer: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    newTab: ' (opens in a new tab)',
  },
  hero: {
    eyebrow: 'Flutter Developer · Cairo, Egypt',
    /** Between the name and the headline in the H1 (visually hidden; read by screen readers and search engines). */
    nameSeparator: ', ',
    lineBeforeSerif: 'I build mobile apps',
    serif: 'from requirements',
    serifAccent: 'to release.',
    lede:
      'Production Flutter apps with clean architecture, offline-first behaviour and polished iOS and Android delivery. Three of them are live on the App Store and Google Play, and in real people’s hands today.',
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
    /** Link under the Work heading to the public App Store developer page (site.links.appStoreDeveloper). */
    storeProof: 'My developer page on the App Store',
    newTab: ' (opens in a new tab)',
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
  about: {
    eyebrow: 'About',
    titleBefore: 'A bit',
    titleSerif: 'about me.',
    body:
      'I’m Salah, a Flutter developer based in Cairo with a B.Sc. in Computer Science. At BDC Business Services I build production apps like El Madrasah, and as a freelancer I take client apps from the requirements doc to a live store listing. I care about clean architecture, apps that keep working offline, and smooth releases on iOS and Android.',
  },
  experience: {
    eyebrow: 'Experience',
    titleBefore: 'Where I’ve',
    titleSerif: 'been building.',
    educationHeading: 'Education & training',
    /** Courses card (after Education & training): secondary, one line per course. */
    coursesHeading: 'Courses & certificates',
    coursesNote: 'Short courses I completed to go deeper on specific topics. Each one links to its certificate.',
    viewCertificate: 'View certificate',
    /** Screen-reader context for each "View certificate" link; {name} is the course name. */
    certificateFor: ' for {name}',
    newTab: ' (opens in a new tab)',
    /** Small group label above the jobs. */
    workHeading: 'Work',
    /** Toggle for the courses after the first four; {n} is the total number of courses. */
    showAllCourses: 'Show all {n} courses',
    showFewerCourses: 'Show fewer',
    /** Accessible name of the small in-section index (Work / Education / Courses). */
    indexLabel: 'In this section',
  },
  /**
   * FAQ section (right before Contact) and the home page FAQPage JSON-LD.
   * `emailLead`, when set, must be the start of `a`; that part is rendered as a mailto link.
   */
  faq: {
    eyebrow: 'FAQ',
    titleBefore: 'Questions',
    titleSerif: 'clients ask.',
    items: [
      {
        q: 'Can you build my app from scratch?',
        a: 'Yes. I’ve built client apps solo, from the client’s requirements to release, including Al-Burda and FLEXI.',
      },
      {
        q: 'Do you handle publishing to the App Store and Google Play?',
        a: 'Yes, including iOS signing, TestFlight builds, and store submission.',
      },
      {
        q: 'Can the app be published under my own developer account?',
        a: 'Yes, I can publish under your account or mine.',
      },
      {
        q: 'What do you build with?',
        a: 'Flutter and Dart, with Clean Architecture and Bloc, on Firebase or your REST API.',
      },
      {
        q: 'Can you take over an existing Flutter app?',
        a: 'Yes. I can pick up an existing Flutter codebase, get it running, and keep building and shipping it.',
      },
      {
        q: 'How do we start?',
        a: 'Email me your idea or requirements and I’ll reply with the next steps.',
        emailLead: 'Email me',
      },
    ] as { q: string; a: string; emailLead?: string }[],
  },
  contact: {
    eyebrow: 'Contact',
    titleBefore: 'Building a mobile product?',
    titleSerif: 'Let’s talk.',
    body: 'I’m open to Flutter roles and freelance projects. Email is the quickest way to reach me.',
    /** "Copy email" button next to the email address (shown only when the browser can copy). */
    copyEmail: 'Copy email',
    copied: 'Copied ✓',
    /** Announced to screen readers after copying (or when copying fails). */
    copiedAnnounce: 'Email address copied.',
    copyFailed: 'Couldn’t copy. The address is {email}.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Download CV',
    cvAria: 'Download CV (PDF)',
    newTab: ' (opens in a new tab)',
  },
  caseStudy: {
    /** Templates: {project} is the project title, {caption} the screenshot caption. */
    pageTitle: '{project} case study',
    appIconAlt: '{project} app icon',
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
    enlarge: 'Enlarge: {caption}',
    closeViewer: 'Close viewer',
    prevShot: 'Previous screenshot',
    nextShot: 'Next screenshot',
    galleryAria: '{project} screenshots, scroll horizontally',
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

/** Udemy certificates (same as LinkedIn), newest first. `period` is the issue month shown on the site. */
export const courses = [
  { name: 'Flutter & Firebase: Build E-Commerce App', issuer: 'Udemy', period: 'Mar 2025', url: 'https://www.udemy.com/certificate/UC-54351570-ad19-48d3-bc4f-6d2e46fb0ff3/' },
  { name: 'Master Git & GitHub: Essential Skills for Developers', issuer: 'Udemy', period: 'Jan 2025', url: 'https://www.udemy.com/certificate/UC-9c3a1f9f-5cb5-41e2-8036-5de28f35b4d3/' },
  { name: 'Payment Integration: Stripe, PayPal with Flutter', issuer: 'Udemy', period: 'Nov 2024', url: 'https://www.udemy.com/certificate/UC-e5219c7e-5198-4c6a-bbbb-8280b11f1d0a/' },
  { name: 'Flutter: Google Maps Integration Guide', issuer: 'Udemy', period: 'Nov 2024', url: 'https://www.udemy.com/certificate/UC-67f8a333-5b14-4b6f-9687-0e476c6b0032/' },
  { name: 'Mastering Flutter: Responsive & Adaptive UI Design', issuer: 'Udemy', period: 'Nov 2024', url: 'https://www.udemy.com/certificate/UC-3f4ac6e6-bf1a-4051-af06-37dcc855aef5/' },
  { name: 'Deep Dive into Clean Architecture in Flutter', issuer: 'Udemy', period: 'Oct 2024', url: 'https://www.udemy.com/certificate/UC-a5f2b145-78d0-4808-8f5b-48a77c033af8/' },
  { name: 'Flutter Advanced: Bloc and MVVM Pattern', issuer: 'Udemy', period: 'Oct 2024', url: 'https://www.udemy.com/certificate/UC-f1ab54b9-1b9a-4817-a9bf-df8a9b2e3911/' },
  { name: 'Complete Flutter & Dart Development Course', issuer: 'Udemy', period: 'Oct 2024', url: 'https://www.udemy.com/certificate/UC-095d195d-d4fb-4360-9f18-893844bf9296/' },
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
