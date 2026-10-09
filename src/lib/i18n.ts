// Locale plumbing for the English site (/) and its Arabic version (/ar/).
// Pages and components work out the locale from the URL and read all copy through `content(lang)`.
import * as en from '../data/site';
import * as ar from '../data/site.ar';
import * as projectsEn from '../data/projects';
import * as projectsAr from '../data/projects.ar';

export type Lang = 'en' | 'ar';
export const langs: Lang[] = ['en', 'ar'];
export const defaultLang: Lang = 'en';

export const localeMeta = {
  en: { htmlLang: 'en', dir: 'ltr', ogLocale: 'en_US', prefix: '' },
  ar: { htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_EG', prefix: '/ar' },
} as const;

/** Locale of a URL path: everything under /ar/ is Arabic. */
export const langFromPath = (pathname: string): Lang => (pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en');

/** The same path without its locale prefix ("/ar/projects/x/" → "/projects/x/"). */
export const stripLang = (pathname: string) => (langFromPath(pathname) === 'ar' ? pathname.slice(3) || '/' : pathname);

/** A site path (e.g. "/", "/#work", "/projects/flexi/") in the given locale. */
export const localePath = (lang: Lang, path: string) => localeMeta[lang].prefix + path;

/** Every locale's URL path for the page at `pathname` (pages exist in both languages). */
export const alternatePaths = (pathname: string) =>
  Object.fromEntries(langs.map((l) => [l, localePath(l, stripLang(pathname))])) as Record<Lang, string>;

/** All copy and project data for a locale. */
export const content = (lang: Lang) => {
  const s = lang === 'ar' ? ar : en;
  const p = lang === 'ar' ? projectsAr : projectsEn;
  return {
    site: s.site, copy: s.copy, experience: s.experience, education: s.education, skills: s.skills,
    projects: p.projects, visibleProjects: p.visibleProjects, caseStudies: p.caseStudies, compactProjects: p.compactProjects,
  };
};

/** Fills {name} placeholders in a copy template. */
export const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (m, k: string) => values[k] ?? m);
