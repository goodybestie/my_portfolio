import portrait from './COMPONENT/IMAGE/goodness-portrait.jpg';
import cv from './COMPONENT/IMAGE/Goodness_Bassey_CV.pdf';

export const profile = {
  name: 'Goodness Bassey',
  fullName: 'Goodness Abasiakama Bassey',
  brand: 'GoodyCode',
  role: 'Front-End Developer',
  location: 'Akwa Ibom, Nigeria',
  timezone: 'Africa/Lagos',
  email: 'goodnessbassey003@gmail.com',
  phone: '+234 902 604 8708',
  phoneHref: 'tel:+2349026048708',
  whatsappNumber: '+234 813 130 2861',
  whatsapp: `https://wa.me/2348131302861?text=${encodeURIComponent(
    "Hi Goodness, I came across your portfolio and I'd like to chat."
  )}`,
  github: 'https://github.com/goodybestie',
  linkedin: 'https://www.linkedin.com/in/goodness-bassey-804254299',
  cv,
  portrait,
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const stack = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3',
  'REST APIs', 'Figma', 'WordPress', 'Git & GitHub', 'SEO', 'Framer Motion',
];

// `text` renders as-is; `value` counts up from zero.
export const stats = [
  { value: 5, suffix: '', label: 'Years building for the web' },
  { value: 3, suffix: '', label: 'Teams & clients shipped with' },
  { value: 4, suffix: '', label: 'Live projects featured below' },
  { text: '2023', label: 'Best Student Award — Ikot Ekpene Tech Day' },
];

export const principles = [
  { title: 'Design to code', desc: 'Faithful layouts from Figma — spacing, typography and hierarchy kept consistent.' },
  { title: 'Responsive by default', desc: 'Interfaces that work across desktop, tablet, mobile and every major browser.' },
  { title: 'Performance & SEO', desc: 'Optimised assets, meta tags and alt text so sites load fast and get found.' },
];

export const projects = [
  {
    title: 'MTN NG Analytics',
    year: '2025',
    role: 'Dashboard · Data viz',
    description:
      'An analytics dashboard for MTN Nigeria that visualises network performance, user engagement and revenue trends with interactive, real-time reporting.',
    image: '/mtn.png',
    tags: ['React', 'Vite', 'Charts'],
    live: 'https://mtn-ng.vercel.app/',
    theme: 'dark',
  },
  {
    title: 'Photographer Portfolio',
    year: '2024',
    role: 'Landing page',
    description:
      'An editorial landing page for a photographer — image-led layout, smooth transitions and a fast, responsive gallery.',
    image: '/portfolio.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    live: 'https://photographer-portfolio-gamma.vercel.app/',
    theme: 'olive',
  },
  {
    title: "MK's Cakes",
    year: '2024',
    role: 'E-commerce',
    description:
      'A cake ordering site where customers browse the menu, customise their order and reach the baker directly by email.',
    image: '/mk.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    live: 'https://mks-cake-website.vercel.app/',
    theme: 'light',
  },
  {
    title: 'Exquisite Cakes',
    year: '2023',
    role: 'Business site',
    description:
      'A storefront for a cake business with product showcases, an ordering flow and an email enquiry form.',
    image: '/exquisite.png',
    tags: ['React', 'TypeScript'],
    live: 'https://cakebusiness-site.vercel.app/',
    theme: 'accent',
  },
];

export const services = [
  {
    title: 'Front-End Development',
    desc: 'Responsive websites and web apps with React, Next.js (App Router) and TypeScript, built from reusable components.',
    image: '/portfolio.png',
  },
  {
    title: 'Design-to-Code & UI',
    desc: 'Turning Figma designs and brand guidelines into pixel-faithful, interactive interfaces.',
    image: '/exquisite.png',
  },
  {
    title: 'API Integration',
    desc: 'Connecting frontends to REST APIs with proper loading, empty, success and error states.',
    image: '/mtn.png',
  },
  {
    title: 'Performance, SEO & Fixes',
    desc: 'Image and asset optimisation, SEO fundamentals, and tracking down layout, browser and JavaScript bugs.',
    image: '/mk.png',
  },
];

export const experience = [
  {
    role: 'Front-End Developer',
    company: 'FutureLabs',
    location: 'Ikot Ekpene',
    period: 'Sep 2021 — Present',
    type: 'Full-time',
    description:
      'Joined as a trainee and was retained as a front-end developer after completing the training programme. I build and maintain responsive websites and web applications.',
    achievements: [
      'Develop responsive sites and apps with HTML, CSS, JavaScript, TypeScript, React and Next.js',
      'Build reusable UI components with consistent spacing, typography and visual hierarchy',
      'Integrate frontends with backend services and RESTful APIs',
      'Troubleshoot layout, browser-compatibility and JavaScript issues, and optimise performance',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Git'],
  },
  {
    role: 'Front-End Developer',
    company: 'Helm Technology Solutions',
    location: 'Volunteer project',
    period: 'Apr 2025 — Apr 2026',
    type: 'Volunteer',
    description:
      'Built responsive, interactive web interfaces from design requirements as part of a collaborative product team.',
    achievements: [
      'Integrated RESTful APIs, handling loading, success, empty and error states',
      'Developed reusable UI components to improve consistency and maintainability',
      'Debugged frontend, layout, API and browser-related issues',
      'Improved responsiveness and performance across devices',
    ],
    tech: ['JavaScript', 'React', 'REST APIs'],
  },
  {
    role: 'Front-End Developer',
    company: 'Eckondo Publishing Series',
    location: 'Remote',
    period: 'Dec 2025 — Jan 2026',
    type: 'Contract',
    description:
      'Designed and developed responsive websites for published books and author content, working directly with the publishing team.',
    achievements: [
      'Translated branding and design requirements into functional web interfaces',
      'Built layouts for book information, author profiles, publication details and purchase links',
      'Optimised images and frontend assets to improve load performance',
      'Delivered experiences that work across desktop, tablet and mobile',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

export const credentials = [
  {
    label: 'Education',
    title: 'HND, Computer Science',
    detail: 'Temple Gate Polytechnic, Aba',
    period: '2021 — 2023',
  },
  {
    label: 'Award',
    title: 'Best Student Award',
    detail: 'Ikot Ekpene Tech Day',
    period: 'Jun 2023',
  },
  {
    label: 'Leadership',
    title: "Treasurer, Nigeria Christian Corpers' Fellowship",
    detail: 'Oye Zone, Ekiti State · NYSC completed',
    period: '2024 — 2025',
  },
];
