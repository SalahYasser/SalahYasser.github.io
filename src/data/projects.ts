/**
 * Project content model (brief §8).
 *
 * `approval`:
 *   - 'approved'  → published in production builds.
 *   - 'pending'   → visible only in preview builds (PUBLIC_SHOW_PENDING=true) until Salah
 *                   confirms the facts and, for employer work, has permission.
 * Facts here come from Salah's CV and the public App Store listings (checked 8 Oct 2026).
 * Do not add metrics or claims that are not verified.
 */

export type Screenshot = { src: string; alt: string; caption: string };
export type Link = { label: string; href: string; icon?: 'apple' | 'play' };

/**
 * A simple flow diagram for a case study (rendered by FlowDiagram.astro). Nodes run left to right
 * (right to left on Arabic pages). Keep labels short and limited to what Salah confirmed or the repo shows.
 */
export type Diagram = {
  /** Accessible name and the bold first line of the caption. */
  title: string;
  /** `stack` renders several boxes in that column instead of one (e.g. one per role). */
  nodes: { label: string; sub?: string; stack?: string[] }[];
  /** Arrows between consecutive nodes (nodes.length - 1 of them); `both` draws a two-way arrow. */
  edges: { label?: string; both?: boolean }[];
  /** Plain-language description shown under the diagram (and read as the image description). */
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  nativeTitle?: string;
  /** Language of `nativeTitle` (defaults to Arabic). */
  nativeLang?: 'ar' | 'en';
  kind: 'Client project' | 'Built at BDC';
  /** Displayed instead of `kind` when set (translations); `kind` stays the value code compares against. */
  kindLabel?: string;
  platform: string;
  tagline: string;
  summary: string;
  role: string;
  technologies: string[];
  approval: 'approved' | 'pending';
  /** Has a full case-study page (needs real screenshots and enough verified detail). */
  caseStudy: boolean;
  accent: { base: string; ink: string; glow: string };
  icon?: string;
  /** Purpose-made 1200×630 PNG share image (og:image) for the case-study page. */
  ogImage?: string;
  status: string;
  links: Link[];
  screenshots: Screenshot[];
  /** Index of the screenshot used on the homepage hero (defaults to 0). */
  heroShot?: number;
  sections?: {
    product: string;
    roleDetail: string;
    problem: string;
    decisions: { title: string; body: string }[];
    implemented: string[];
    result: string;
  };
  approvalNote?: string;
  /** Meta description for the case-study page (<= 155 characters). */
  seoDescription?: string;
  /** schema.org applicationCategory, matching the app's primary store category. */
  appCategory?: string;
  /** Store publisher, when it isn't Salah's own developer account. */
  storePublisher?: string;
  /** Flow diagram shown in the case study's "Decisions and why" section. */
  diagram?: Diagram;
  /** Public code sample linked under the diagram (GoatCounter event `<slug>-sample-repo`). */
  codeSample?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: 'al-burda',
    title: 'Al-Burda',
    nativeTitle: 'البُردة الشريفة',
    kind: 'Client project',
    platform: 'iOS · Android · Flutter',
    tagline: 'A calm, fully offline Arabic reading and listening companion, shipped to the App Store and Google Play.',
    summary:
      'An Arabic (RTL) app for reading and listening to Imam al-Busiri’s Burda and other poems, with gentle daily reminders, a lock-screen widget and reading stats. It runs entirely on the device, with no account and no tracking. Live on the App Store and Google Play.',
    role: 'Built from scratch as a solo project: Flutter app, Arabic RTL UI, iOS widget, audio, and App Store & Google Play release under my own account.',
    technologies: ['Flutter', 'Dart', 'Clean Architecture', 'Bloc', 'WidgetKit', 'Local notifications', 'Background audio'],
    approval: 'approved',
    caseStudy: true,
    accent: { base: '#D9B76A', ink: '#0E1A14', glow: 'rgba(217,183,106,0.28)' },
    icon: '/images/projects/al-burda/icon.webp',
    ogImage: '/og/al-burda.png',
    seoDescription:
      'Al-Burda: a calm, fully offline Arabic Flutter app for reading and listening to the Burda, with an iOS lock-screen widget. On the App Store & Google Play.',
    appCategory: 'ReferenceApplication', // App Store: Books / Reference
    heroShot: 2,
    status: 'Live on the App Store & Google Play',
    links: [
      { label: 'View on the App Store', href: 'https://apps.apple.com/eg/app/id6784274940', icon: 'apple' },
      { label: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.salah.alburda', icon: 'play' },
    ],
    screenshots: [
      { src: '/images/projects/al-burda/01_onboarding.webp', alt: 'Al-Burda onboarding screen in Arabic, asking permission for notifications and reminders.', caption: 'Onboarding: notifications and reminder permissions, explained up front.' },
      { src: '/images/projects/al-burda/02_home.webp', alt: 'Home screen showing reading progress and the verse of the day with playback controls.', caption: 'Home: reading progress and the verse of the day, with audio controls.' },
      { src: '/images/projects/al-burda/03_reader.webp', alt: 'Reader screen displaying a verse of the Burda on a gilded page.', caption: 'Reader: verse by verse on a gilded page, with recitation alongside.' },
      { src: '/images/projects/al-burda/04_stats.webp', alt: 'Statistics screen with a circular completion chart and streak counters.', caption: 'Stats: completion progress and reading streaks.' },
      { src: '/images/projects/al-burda/05_library.webp', alt: 'Poem library screen with search and a mini audio player.', caption: 'Library: the Burda and other poems, searchable, with a persistent player.' },
    ],
    sections: {
      product:
        'Al-Burda is a quiet companion for people who read or listen to the Burda of Imam al-Busiri. Readers open a gilded, verse-by-verse page, play a recitation, get a gentle verse reminder through the day, and see the verse of the day on their lock screen without opening the app.',
      roleDetail:
        'Built from scratch as a solo project for a client, from their requirements. I owned it end to end: the Flutter app and its architecture, the Arabic right-to-left UI, the native iOS lock-screen widget, audio and notifications, through to shipping it on the App Store and Google Play under my own developer account and every update since.',
      problem:
        'A devotional app has to feel calm and trustworthy. That meant three hard constraints: it had to work with no internet connection, collect no data at all, and still feel alive through reminders, a lock-screen widget and audio that behaves properly around calls and Bluetooth devices.',
      decisions: [
        {
          title: 'Fully on-device by design',
          body: 'No servers, no account and no analytics. Text, audio and progress live on the device, so the app works offline from first launch and the privacy promise is structural, not a policy line.',
        },
        {
          title: 'Clean Architecture with Bloc',
          body: 'Reading, audio, reminders and stats are separate features with their own state, which keeps the reader simple while the audio and reminder engines evolve independently.',
        },
        {
          title: 'Native where it matters',
          body: 'The lock-screen widget is built with WidgetKit so the verse of the day appears natively on iOS, alongside interactive notification cards for reminders.',
        },
        {
          title: 'Audio that respects the phone',
          body: 'A dedicated release focused on playback robustness: no overlap between the full recitation and verse clips, correct pausing during calls and Bluetooth route changes, and steadier lock-screen and background controls.',
        },
      ],
      implemented: [
        'Arabic RTL reader with verse-by-verse navigation',
        'Offline recitation with lock-screen and background playback controls',
        'Daily reminder engine with interactive notification cards',
        'iOS lock-screen widget showing the verse of the day',
        'Reading statistics, progress and streaks',
        'A library of the Burda and other poems with search',
      ],
      result:
        'Shipped to the App Store and Google Play, and maintained through regular updates. Free, offline, and free of ads and tracking.',
    },
    // Verified in the app's repo: home_widget package, an App Group, UserDefaults(suiteName:), WidgetKit.
    diagram: {
      title: 'How the lock-screen widget gets its verses',
      nodes: [
        { label: 'Flutter app', sub: 'writes the verses' },
        { label: 'App Group', sub: 'shared UserDefaults' },
        { label: 'iOS widget', sub: 'WidgetKit, lock screen' },
      ],
      edges: [{ label: 'home_widget' }, { label: 'reads' }],
      caption:
        'The Flutter app writes the verses through the home_widget package into an App Group (shared UserDefaults). The WidgetKit widget reads them from there, so the lock screen shows a verse even when the app is closed.',
    },
    codeSample: {
      label: 'See a public sample of this pattern on GitHub',
      href: 'https://github.com/SalahYasser/flutter_lock_screen_widget',
    },
  },
  {
    slug: 'el-madrasah',
    title: 'El Madrasah',
    nativeTitle: 'المدرسة',
    kind: 'Built at BDC',
    platform: 'iOS · Android · Flutter',
    tagline: 'A multi-role school platform connecting parents, students and teachers, with offline-first sync — shipped to the App Store and Google Play.',
    summary:
      'A school management app that brings parents, students and teachers into one place: live school-bus tracking, grades, assignments, attendance, schedules, achievements and an AI tutor, in Arabic and English, and usable offline. Live on the App Store and Google Play.',
    role: 'BDC mobile team member. Built the parent and driver roles end to end and the offline sync, improved overall app performance, and handled iOS signing and shipping to the App Store & Google Play.',
    technologies: ['Flutter', 'Bloc', 'PowerSync', 'Offline-first sync', 'ElevenLabs AI', 'REST APIs', 'Real-time tracking'],
    approval: 'approved',
    caseStudy: true,
    accent: { base: '#F4F4F2', ink: '#0B0B0C', glow: 'rgba(244,244,242,0.18)' },
    icon: '/images/projects/el-madrasah/icon.webp',
    ogImage: '/og/el-madrasah.png',
    seoDescription:
      'El Madrasah: a Flutter school app for parents, students and teachers, with offline-first sync and live bus tracking. On the App Store & Google Play.',
    appCategory: 'EducationalApplication', // App Store: Education
    storePublisher: 'BDC for Business Services',
    status: 'Live on the App Store & Google Play · published by BDC for Business Services',
    links: [
      { label: 'View on the App Store', href: 'https://apps.apple.com/eg/app/id6755660500', icon: 'apple' },
      { label: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.elmadrasah.app', icon: 'play' },
    ],
    screenshots: [
      { src: '/images/projects/el-madrasah/01_parent_dashboard.webp', alt: 'Parent dashboard in Arabic showing a child’s attendance, homework and average, plus a bus-tracking card.', caption: 'Parent dashboard: a child’s day at a glance, plus live bus tracking.' },
      { src: '/images/projects/el-madrasah/04_student_dashboard.webp', alt: 'Student dashboard with a daily goal card and study indicators.', caption: 'Student dashboard: daily goal and study indicators.' },
      { src: '/images/projects/el-madrasah/03_student_grades.webp', alt: 'Student details screen with grades per subject.', caption: 'Grades per subject, with an overall standing.' },
      { src: '/images/projects/el-madrasah/06_activities_trips.webp', alt: 'Activities and trips screen listing school events to register for.', caption: 'Activities and trips with in-app registration.' },
      { src: '/images/projects/el-madrasah/07_achievements.webp', alt: 'Achievements and awards screen for a selected child.', caption: 'Achievements and awards per child.' },
      { src: '/images/projects/el-madrasah/09_schedule.webp', alt: 'Weekly class schedule screen.', caption: 'Weekly class schedule.' },
    ],
    sections: {
      product:
        'El Madrasah is a school platform with three audiences in one app. Parents follow their children’s day, track the school bus on a map, see grades and pay fees; students get interactive task lists, schedules and progress; teachers take attendance, manage assignments and enter grades.',
      roleDetail:
        'BDC mobile team member. I built the parent and driver experiences end to end and the offline sync with Flutter and Bloc, improved the app’s overall performance, and handled iOS signing and shipping to both the App Store and Google Play.',
      problem:
        'Schools and families don’t always have a reliable connection, but attendance, grades and assignments still need to be correct when the network comes back. On top of that, three roles need very different views of the same data.',
      decisions: [
        {
          title: 'Offline-first with PowerSync',
          body: 'Data is synced to a local database so the app stays usable without internet and reconciles changes once it reconnects.',
        },
        {
          title: 'Role-aware experience',
          body: 'Parents, students and teachers each get their own dashboards and actions, built on shared Bloc-driven features.',
        },
        {
          title: 'Real-time and AI features',
          body: 'Live school-bus tracking for parents, and an AI tutoring experience built with ElevenLabs.',
        },
      ],
      implemented: [
        'Parent, student and teacher experiences in one app',
        'Offline-first data sync',
        'Real-time school-bus tracking',
        'Grades, attendance, assignments and schedules',
        'Activities, trips and achievements',
        'AI tutoring with ElevenLabs',
        'Arabic and English support',
      ],
      result: 'Shipped live to the App Store and Google Play, and updated through several releases since launch.',
    },
    // Generic offline-first flow only (no BDC internals, endpoints or proprietary details).
    diagram: {
      title: 'Offline-first sync',
      nodes: [
        { label: 'App', sub: 'keeps working offline' },
        { label: 'Local database', sub: 'on the device' },
        { label: 'Server' },
      ],
      edges: [{ label: 'saves first' }, { label: 'syncs when online', both: true }],
      caption:
        'Changes are saved to a local database on the device first, so the app keeps working without internet. When a connection is available, the local database syncs with the server.',
    },
  },
  {
    slug: 'flexi',
    title: 'FLEXI',
    kind: 'Client project',
    platform: 'iOS · Flutter',
    tagline: 'An HR app for Fit4Less staff: attendance, shifts, leave and payroll in one place.',
    summary:
      'A role-based HR app for Fit4Less employees and managers, with location-verified attendance, QR check-in, shifts, leave, permissions and salary-advance requests, payroll documents and approval notifications.',
    role: 'Built from scratch as a solo project: Flutter app, architecture, APIs and App Store release under my own account.',
    technologies: ['Flutter', 'Clean Architecture', 'Bloc', 'REST APIs', 'Location verification', 'QR check-in', 'Role-based access'],
    approval: 'approved',
    caseStudy: true,
    accent: { base: '#EB9C00', ink: '#1A1100', glow: 'rgba(235,156,0,0.2)' },
    icon: '/images/projects/flexi/icon.webp',
    ogImage: '/og/flexi.png',
    seoDescription:
      'FLEXI: a role-based Flutter HR app for Fit4Less staff, with location-verified attendance, QR check-in, leave requests and payroll. Live on the App Store.',
    appCategory: 'BusinessApplication', // App Store: Business
    status: 'Live on the App Store',
    links: [
      { label: 'View on the App Store', href: 'https://apps.apple.com/eg/app/id6805243501' },
    ],
    screenshots: [
      { src: '/images/projects/flexi/01-dashboard.webp', alt: 'FLEXI home screen in Arabic with today’s attendance card and shortcuts to advances, leave, records and payroll.', caption: 'Home: today’s attendance and quick access to every HR service.' },
      { src: '/images/projects/flexi/02-attendance.webp', alt: 'Attendance screen with a QR check-in button and today’s check-in and check-out status.', caption: 'Attendance: QR check-in with today’s status and history.' },
      { src: '/images/projects/flexi/04-leave-request.webp', alt: 'Leave request form with leave type, hourly toggle, start and end dates and reason.', caption: 'Leave requests, including hourly permissions.' },
      { src: '/images/projects/flexi/05-advances.webp', alt: 'Salary advances list showing a request pending manager approval.', caption: 'Salary advances with instalments and manager approval status.' },
    ],
    sections: {
      product:
        'FLEXI brings a company’s day-to-day HR services into one app for Fit4Less staff. Employees check in and out, scan a QR code for attendance, follow their schedules and shifts, request leave, permissions and salary advances, and view payroll documents. Managers get the employee data and approval actions their role allows.',
      roleDetail:
        'Built from scratch as a solo project for a client, from their requirements. I owned it end to end: the Flutter app and its architecture, the API integration and the role-based flows, through to the App Store release under my own developer account.',
      problem:
        'Attendance has to be trustworthy, so a check-in should only count when the employee is really at work. And the same app serves employees and managers, so every screen and action has to respect the permissions of the signed-in account.',
      decisions: [
        {
          title: 'Verified attendance',
          body: 'Check-in combines work-location verification with a dedicated QR code, so attendance records reflect where people actually are.',
        },
        {
          title: 'Role-based from the ground up',
          body: 'Features and actions are shown according to each account’s role and permissions, so employees and managers share one app with different capabilities.',
        },
        {
          title: 'Clean Architecture with Bloc',
          body: 'Attendance, leave, advances, payroll and notifications are separate features over a REST API, which keeps each flow testable and easy to extend.',
        },
      ],
      implemented: [
        'Check-in and check-out with work-location verification',
        'QR code attendance',
        'Attendance records, schedules and shifts',
        'Leave, permission and salary-advance requests',
        'Payroll data and employment documents',
        'Notifications for request status and approvals',
        'Manager tools for authorised employee actions',
      ],
      result: 'Shipped to the App Store, available to authorised Fit4Less staff.',
    },
    diagram: {
      title: 'Role-based routing',
      nodes: [
        { label: 'Sign in' },
        { label: 'Server', sub: 'returns the role' },
        { label: 'Role-based routing' },
        { label: 'Screens', stack: ['Employee screens', 'Manager screens'] },
      ],
      edges: [{}, { label: 'role' }, {}],
      caption:
        'After sign-in, the server returns the account’s role. The app routes by that role, and each role unlocks its own screens, so employees and managers use one app with different access.',
    },
  },
  {
    slug: 'personarise',
    title: 'PersonaRise',
    kind: 'Built at BDC',
    platform: 'iOS · Flutter',
    tagline: 'AI personal-branding platform.',
    summary:
      'AI-powered SaaS that analyses a person’s professional identity and generates personalised content for automated publishing on LinkedIn and X.',
    role: 'Flutter developer on the BDC team.',
    technologies: ['Flutter', 'AI', 'SaaS', 'REST APIs'],
    approval: 'approved',
    caseStudy: false,
    accent: { base: '#B79CFF', ink: '#120B24', glow: 'rgba(183,156,255,0.2)' },
    status: 'On TestFlight · submitted to App Store review',
    links: [],
    screenshots: [],
  },
  {
    slug: 'makkah-college',
    title: 'Makkah College',
    kind: 'Built at BDC',
    platform: 'iOS · React Native',
    tagline: 'Higher-education platform for students and staff.',
    summary:
      'University platform with role-based features, academic services and real-time communication. Built with React Native and TypeScript.',
    role: 'Developer on the BDC team.',
    technologies: ['React Native', 'TypeScript', 'REST APIs'],
    approval: 'approved',
    caseStudy: false,
    accent: { base: '#7EE2B8', ink: '#05170F', glow: 'rgba(126,226,184,0.2)' },
    status: 'On TestFlight · submitted to App Store review',
    links: [],
    screenshots: [],
  },
];

const showPending = import.meta.env.PUBLIC_SHOW_PENDING === 'true';

/** Projects allowed in this build. Unapproved records are filtered out of production. */
export const visibleProjects = projects.filter((p) => p.approval === 'approved' || showPending);
export const caseStudies = visibleProjects.filter((p) => p.caseStudy && p.sections);
export const compactProjects = visibleProjects.filter((p) => !p.caseStudy);
export const isPreview = showPending;
