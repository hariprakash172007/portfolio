// Central, configurable site data. Contact values come from .env (see .env.example).
// Nothing here is invented: empty values are surfaced in the UI as "not set".

const env = import.meta.env;

export const siteConfig = {
  name: 'Hari Prakash C',
  shortName: 'HP.',
  title: 'Full-Stack Developer | Freelance Web Developer',
  location: 'India',
  year: 2026,
  contact: {
    email: (env.VITE_CONTACT_EMAIL || 'hariprakash172007@gmail.com').trim(),
    linkedin: (env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/hari-prakash-c-209094330').trim(),
    github: (env.VITE_GITHUB_URL || 'https://github.com/hariprakash172007').trim(),
    whatsapp: (env.VITE_WHATSAPP_NUMBER || '917708161981').replace(/\D/g, ''),
  },
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
];

export const sectionIds = ['home', ...navLinks.map((l) => l.id), 'contact'];

export function whatsappUrl(number) {
  return number ? `https://wa.me/${number}` : '';
}