// Personal details shown on the site. Only publish what Salah has approved.
export const site = {
  name: 'Salah Yasser',
  role: 'Flutter Developer',
  location: 'Cairo, Egypt',
  // Phone number is intentionally omitted (brief §10).
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
};

export const experience = [
  {
    role: 'Flutter Developer',
    org: 'BDC Business Services',
    place: 'Cairo, Egypt',
    period: 'Nov 2025 – Present',
    points: [
      'Builds Flutter apps for education, HR and AI products, shipped through the App Store and TestFlight.',
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
    items: ['App Store & TestFlight releases', 'iOS signing & provisioning', 'bloc_test · Mockito', 'Git & GitHub'],
  },
];
