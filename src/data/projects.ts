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
export type Link = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  nativeTitle?: string;
  kind: 'Client project' | 'Built at BDC';
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
  status: string;
  links: Link[];
  screenshots: Screenshot[];
  sections?: {
    product: string;
    roleDetail: string;
    problem: string;
    decisions: { title: string; body: string }[];
    implemented: string[];
    result: string;
  };
  approvalNote?: string;
};

export const projects: Project[] = [
  {
    slug: 'al-burda',
    title: 'Al-Burda',
    nativeTitle: 'البُردة الشريفة',
    kind: 'Client project',
    platform: 'iOS · Flutter',
    tagline: 'A calm, fully offline Arabic reading and listening companion, shipped to the App Store.',
    summary:
      'An Arabic (RTL) app for reading and listening to Imam al-Busiri’s Burda and other poems, with gentle daily reminders, a lock-screen widget and reading stats. It runs entirely on the device, with no account and no tracking.',
    role: 'Built from scratch as a solo project: Flutter app, Arabic RTL UI, iOS widget, audio and App Store release under my own account.',
    technologies: ['Flutter', 'Dart', 'Clean Architecture', 'Bloc', 'WidgetKit', 'Local notifications', 'Background audio'],
    approval: 'approved',
    caseStudy: true,
    accent: { base: '#D9B76A', ink: '#0E1A14', glow: 'rgba(217,183,106,0.28)' },
    icon: '/images/projects/al-burda/icon.webp',
    status: 'Live on the App Store',
    links: [
      { label: 'View on the App Store', href: 'https://apps.apple.com/eg/app/id6784274940' },
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
        'Built for a client from their requirements, and published under my own developer account. I built it from scratch on my own and took it all the way to the App Store: the Flutter architecture, the Arabic right-to-left interface, the native iOS widget, audio, notifications and every release since launch.',
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
        'Shipped to the App Store and maintained through regular updates. Free, offline, and free of ads and tracking.',
    },
  },
  {
    slug: 'el-madrasah',
    title: 'El Madrasah',
    nativeTitle: 'المدرسة',
    kind: 'Built at BDC',
    platform: 'iOS · Flutter',
    tagline: 'A multi-role school platform connecting parents, students and teachers, with offline-first sync.',
    summary:
      'A school management app that brings parents, students and teachers into one place: live school-bus tracking, grades, assignments, attendance, schedules, achievements and an AI tutor, in Arabic and English, and usable offline.',
    role: 'Flutter developer on the BDC team. Built features across the app and handled iOS signing and App Store distribution.',
    technologies: ['Flutter', 'Bloc', 'PowerSync', 'Offline-first sync', 'ElevenLabs AI', 'REST APIs', 'Real-time tracking'],
    approval: 'approved',
    caseStudy: true,
    accent: { base: '#F4F4F2', ink: '#0B0B0C', glow: 'rgba(244,244,242,0.18)' },
    icon: '/images/projects/el-madrasah/icon.webp',
    status: 'Live on the App Store · published by BDC for Business Services',
    links: [
      { label: 'View on the App Store', href: 'https://apps.apple.com/eg/app/id6755660500' },
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
        'Built as part of the BDC mobile team. My work covered Flutter feature development with Bloc and the iOS side of delivery: provisioning, signing and App Store distribution.',
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
      result: 'Shipped live to the App Store, with the current version (1.6.0) released in March 2026.',
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
    accent: { base: '#7FD1FF', ink: '#06121C', glow: 'rgba(127,209,255,0.22)' },
    icon: '/images/projects/flexi/icon.webp',
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
        'Built for a client from their requirements, from scratch and on my own, then published under my own Apple developer account: the Flutter app, its architecture, the API integration and the App Store release.',
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
      'University platform with role-based features, academic services and real-time communication. Built with React Native and TypeScript, not Flutter.',
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
