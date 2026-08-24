// YomTech Global Insights & Media Ecosystem - Master Dataset

import ssgiImg from '../assets/partners/ssgi.webp';
import mintImg from '../assets/partners/mint.webp';
import erpImg from '../assets/services/erp.png';
import wabiskillsBootcampImg from '../assets/academy/wabiskills_bootcamp.png';
import softwareDevImg from '../assets/services/pillar_software_dev.png';
import earthGlobeImg from '../assets/3d_tech_earth_globe.jpg';
import securityImg from '../assets/services/security.png';
import ermiTwoImg from '../assets/ermi-two.jpg';
import erminOneImg from '../assets/ermin-one.jpg';
import gallery01 from '../assets/gallery/gallery 01.jpg';
import gallery02 from '../assets/gallery/gallery 02.jpg';
import gallery03 from '../assets/gallery/gallery 03.jpg';
import gallery04 from '../assets/gallery/gallery 04.jpg';
import gallery05 from '../assets/gallery/gallery 05.jpg';
import gallery06 from '../assets/gallery/gallery 06.jpg';
import gallery07 from '../assets/gallery/gallery 07.jpg';
import gallery08 from '../assets/gallery/gallery 08.jpg';
import gallery09 from '../assets/gallery/gallery 09.jpg';
import documentaryImg from '../assets/services/documentary.png';

export const FEATURED_STORY = {
  id: 'feat-1',
  slug: 'pan-african-digital-transformation-ssgi-yomtech',
  title: 'Pioneering Pan-African Satellite Data Management & Geospatial Innovation with SSGI',
  category: 'CASE STUDY & ENGINEERING',
  publishedDate: 'August 20, 2026',
  readTime: '6 min read',
  author: 'Ermias Alemayehu (Founder & CEO)',
  authorRole: 'CEO & Tech Lead',
  coverImage: ssgiImg,
  summary: 'How YomTech Global engineered custom satellite image data infrastructure in collaboration with the Space Science & Geospatial Institute (SSGI) to accelerate national geospatial intelligence.',
  content: `
    <p>Technology is not merely a tool; it is the foundation for innovation, opportunity, and sustainable growth across Africa. At YomTech Global, our strategic collaboration with the Space Science & Geospatial Institute (SSGI) marks a critical milestone in African space technology and geospatial software engineering.</p>
    
    <h3>The Architectural Challenge</h3>
    <p>Managing high-resolution multi-spectral satellite telemetry data requires ultra-low latency ingestion, fault-tolerant spatial indexing, and secure multi-agency access controls. Traditional GIS portals faced bottlenecking when processing multi-terabyte satellite imagery payloads.</p>

    <h3>The YomTech Solution</h3>
    <p>Our engineering team architected a custom distributed GIS data pipeline equipped with automated spatial indexing, high-concurrency layer rendering, and role-based data isolation. Built on top of resilient cloud infrastructure, the platform enables real-time agricultural mapping, urban planning, and climate modeling.</p>

    <h3>Measurable Impact</h3>
    <ul>
      <li><strong>4.5x Faster Retrieval:</strong> Decreased satellite dataset query latency from minutes to milliseconds.</li>
      <li><strong>Cross-Institutional Security:</strong> End-to-end encrypted telemetry access for authorized government agencies including MInT and INSA.</li>
      <li><strong>Pan-African Vision:</strong> Foundation for Pan-African geospatial data sharing across partner nations.</li>
    </ul>
  `
};

export const NEWS_ITEMS = [
  {
    id: 'news-1',
    slug: 'yomtech-expands-enterprise-erp-bunna-bank',
    title: 'YomTech Global Partners with Bunna Bank S.C. for Core Financial Recon Automation',
    summary: 'Yomnex ERP engine selected by Bunna Bank S.C. to automate enterprise financial reconciliation and multi-branch resource planning.',
    category: 'ENTERPRISE NEWS',
    publishedDate: 'August 18, 2026',
    author: 'Corporate Communications',
    coverImage: erpImg,
    featured: true,
    tags: ['Yomnex ERP', 'Bunna Bank', 'Enterprise', 'FinTech']
  },
  {
    id: 'news-2',
    slug: 'wabiskills-graduates-500-software-engineers',
    title: 'WabiSkills Academy Graduates 500+ High-Caliber Full-Stack Developers',
    summary: 'The 2026 WabiSkills Tech Bootcamp cohort completes intensive software development training, with 85% placed in top enterprise technology roles via WabiJob.',
    category: 'ACADEMY & TALENT',
    publishedDate: 'August 14, 2026',
    author: 'WabiSkills Editorial',
    coverImage: wabiskillsBootcampImg,
    featured: false,
    tags: ['WabiSkills', 'WabiJob', 'Tech Talent', 'Education']
  },
  {
    id: 'news-3',
    slug: 'mint-insa-digital-id-integration',
    title: 'Ministry of Innovation & Tech (MInT) Approves YomTech E-Gov Portal Blueprint',
    summary: 'Public sector digital transformation milestone as MInT and INSA endorse YomTech Global’s document workflow document management system.',
    category: 'GOVERNMENT TECH',
    publishedDate: 'August 08, 2026',
    author: 'Government Relations',
    coverImage: mintImg,
    featured: false,
    tags: ['MInT', 'INSA', 'E-Government', 'Digital Transformation']
  }
];

export const BLOG_ARTICLES = [
  {
    id: 'blog-1',
    slug: 'building-resilient-microservices-node-docker',
    title: 'Building Resilient High-Concurrency Microservices for African FinTech Platforms',
    excerpt: 'Deep technical breakdown on designing distributed Node.js services, Redis caching layers, and PostgreSQL sharding for high-load enterprise systems.',
    category: 'Software Engineering',
    author: 'Dr. Yared Worku (CTO)',
    authorRole: 'Chief Technology Officer',
    publishedDate: 'August 15, 2026',
    readTime: '8 min read',
    coverImage: softwareDevImg,
    featured: true,
    tags: ['Microservices', 'Node.js', 'Architecture', 'High Concurrency'],
    tableOfContents: [
      { id: 'intro', text: 'Introduction' },
      { id: 'caching', text: 'Distributed Caching Strategy' },
      { id: 'resilience', text: 'Fault Tolerance & Circuit Breakers' },
      { id: 'conclusion', text: 'Key Takeaways' }
    ]
  },
  {
    id: 'blog-2',
    slug: 'ai-driven-geospatial-analytics-ethiopia',
    title: 'Applying Artificial Intelligence & Deep Learning to Satellite Geospatial Datasets',
    excerpt: 'How computer vision models trained on satellite imagery automate crop yield estimation, deforestation tracking, and infrastructure monitoring.',
    category: 'Artificial Intelligence',
    author: 'Addis AI Research Unit',
    authorRole: 'AI & Data Science Team',
    publishedDate: 'August 10, 2026',
    readTime: '10 min read',
    coverImage: earthGlobeImg,
    featured: false,
    tags: ['AI', 'Geospatial', 'Deep Learning', 'SSGI']
  },
  {
    id: 'blog-3',
    slug: 'zero-trust-cybersecurity-architecture-enterprises',
    title: 'Implementing Zero-Trust Security Protocols in Public & Private Enterprise Infrastructure',
    excerpt: 'Essential security guidelines for multi-factor auth (2FA), JWT token revocation, and automated vulnerability audits in modern web gateways.',
    category: 'Cybersecurity',
    author: 'INSA Certified Security Auditor',
    authorRole: 'CyberSecurity Lead',
    publishedDate: 'August 02, 2026',
    readTime: '6 min read',
    coverImage: securityImg,
    featured: false,
    tags: ['Cybersecurity', 'Zero Trust', 'Compliance', 'Security']
  }
];

export const EVENTS = [
  {
    id: 'evt-1',
    slug: 'pan-african-tech-summit-2026',
    title: 'Pan-African Digital Transformation & Enterprise ERP Summit 2026',
    description: 'Join industry leaders, government ministers, and software architects as YomTech Global unveils the next generation of Yomnex ERP and WabiSkills platforms.',
    dateMonth: 'SEP',
    dateDay: '15',
    fullDate: 'September 15, 2026',
    startTime: '09:00 AM',
    endTime: '05:00 PM EAT',
    location: 'Skylight Hotel & Online Hybrid (Addis Ababa)',
    type: 'Hybrid Conference',
    status: 'UPCOMING',
    registrationUrl: '/contact',
    organizer: 'YomTech Global Events'
  },
  {
    id: 'evt-2',
    slug: 'wabiskills-fullstack-bootcamp-demo-day',
    title: 'WabiSkills Tech Bootcamp Graduation & Investor Demo Day',
    description: 'Witness 50 live product demonstrations from top software engineering graduates pitching custom mobile and web applications to tech employers.',
    dateMonth: 'OCT',
    dateDay: '02',
    fullDate: 'October 02, 2026',
    startTime: '02:00 PM',
    endTime: '06:00 PM EAT',
    location: 'WabiSkills Tech Hub (Megenagna, Addis Ababa)',
    type: 'In-Person Event',
    status: 'UPCOMING',
    registrationUrl: '/contact',
    organizer: 'WabiSkills Academy'
  }
];

export const ANNOUNCEMENTS = [
  {
    id: 'ann-1',
    title: 'Yomnex Cloud ERP 4.0 Major Release Live Platform Update',
    summary: 'Yomnex ERP 4.0 introduces real-time financial dashboards, multi-currency accounting, automated VAT reporting, and instant mobile inventory scanning.',
    priority: 'FEATURED',
    date: 'August 22, 2026',
    category: 'Product Update'
  },
  {
    id: 'ann-2',
    title: 'WabiJob Talent Hub Connects 100+ Enterprise Recruiters',
    summary: 'Employers can now directly browse vetted tech talent profiles and schedule technical interviews inside the WabiJob recruitment gateway.',
    priority: 'IMPORTANT',
    date: 'August 19, 2026',
    category: 'Talent Network'
  }
];

export const PROJECTS_CASE_STUDIES = [
  {
    id: 'proj-1',
    slug: 'ssgi-satellite-data-portal',
    name: 'Space Science & Geospatial Institute (SSGI) Satellite Portal',
    client: 'Space Science & Geospatial Institute',
    industry: 'Aerospace & Geospatial Tech',
    projectType: 'Distributed GIS Engine',
    challenge: 'Handling massive multi-terabyte satellite imagery payloads without slowing down spatial search and multi-layer rendering.',
    solution: 'Engineered high-concurrency spatial indexing with tile caching and automated metadata extraction pipelines.',
    technologies: ['React', 'Node.js', 'PostGIS', 'Docker', 'Python AI'],
    results: 'Reduced GIS query latency by 450% and enabled instant multi-department geospatial data sharing.',
    coverImage: ssgiImg,
    featured: true
  },
  {
    id: 'proj-2',
    slug: 'bunna-bank-yomnex-erp',
    name: 'Bunna Bank S.C. Financial Reconciliation & ERP Platform',
    client: 'Bunna Bank S.C.',
    industry: 'Banking & Financial Services',
    projectType: 'Custom Financial ERP',
    challenge: 'Reconciling daily multi-branch transaction statements manually resulted in administrative overhead and delayed reporting.',
    solution: 'Customized Yomnex ERP financial ledger module with automated automated bank file parsing and audit trails.',
    technologies: ['Yomnex ERP Engine', 'Node.js', 'PostgreSQL', 'Redis', 'JWT Security'],
    results: 'Automated 98% of branch transaction reconciliation with 100% compliance auditing.',
    coverImage: erpImg,
    featured: true
  }
];

export const TEAM_SPOTLIGHTS = [
  {
    id: 'team-1',
    name: 'Ermias Alemayehu',
    role: 'Founder & CEO',
    department: 'Executive Leadership',
    bio: 'Pioneering technology innovation and digital transformation solutions across Pan-African enterprise ecosystems.',
    quote: 'Technology is not merely a tool; it is the foundation for innovation, opportunity, and sustainable growth.',
    photo: ermiTwoImg,
    expertise: ['Enterprise Systems', 'Strategic Vision', 'Tech Policy', 'Pan-African Growth']
  },
  {
    id: 'team-2',
    name: 'Dr. Yared Worku',
    role: 'Chief Technology Officer (CTO)',
    department: 'Software Engineering & AI',
    bio: 'Over 12 years building distributed cloud infrastructure, microservices, and AI data systems.',
    quote: 'High-quality software architecture is built on discipline, simplicity, and continuous innovation.',
    photo: erminOneImg,
    expertise: ['Cloud Architecture', 'Distributed Systems', 'Security', 'Node.js']
  }
];

export const COMMUNITY_TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Solomon Desta',
    role: 'Senior Software Engineer',
    org: 'WabiSkills Graduate / Tech Leader',
    category: 'LEARNER',
    quote: 'WabiSkills transformed my career trajectory. The practical full-stack bootcamp gave me real-world enterprise engineering experience.',
    photo: gallery01,
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Ato Worku Tadesse',
    role: 'Director of IT Operations',
    org: 'Enterprise Partner Client',
    category: 'CLIENT',
    quote: 'YomTech Global delivered our Yomnex ERP deployment ahead of schedule. Their technical competence and local support are exceptional.',
    photo: gallery02,
    rating: 5
  }
];

export const FAQS = [
  {
    id: 'faq-1',
    question: 'What core technology services does YomTech Global provide?',
    answer: 'YomTech Global provides Custom Software Development, Yomnex Enterprise ERP Solutions, WabiSkills Tech Academy Bootcamps, WabiJob Talent Network, Cybersecurity Audits, and Digital Transformation Consulting.',
    category: 'Services'
  },
  {
    id: 'faq-2',
    question: 'How do I enroll in WabiSkills Academy training programs?',
    answer: 'You can browse available bootcamps on the WabiSkills portal or visit our Insights & Media hub to check upcoming enrollment dates and demo days.',
    category: 'WabiSkills'
  },
  {
    id: 'faq-3',
    question: 'Where is YomTech Global headquarters located?',
    answer: 'Our headquarters are located in Megenagna, Addis Ababa, Ethiopia. Contact hotlines: +251 (11) 668-7546 / +251 (977) 666-699.',
    category: 'YomTech Global'
  }
];

export const PHOTO_GALLERY = [
  { id: 'img-1', caption: 'WabiSkills Tech Bootcamp Classroom', category: 'Academy', src: gallery01, description: 'Hands-on practical development bootcamp sessions.' },
  { id: 'img-2', caption: 'YomTech Global Engineering Team', category: 'Team', src: gallery02, description: 'Engineering team designing cloud software systems.' },
  { id: 'img-3', caption: 'Executive MoU Signing Ceremony', category: 'Partnerships', src: gallery03, description: 'Institutional partnership agreement signing.' },
  { id: 'img-4', caption: 'SSGI Satellite Project Workshop', category: 'Events', src: gallery04, description: 'Space science and GIS telemetry workshop.' },
  { id: 'img-5', caption: 'Yomtech Media Documentary Shoot', category: 'Media', src: gallery05, description: 'Pan-African technology documentary filming.' },
  { id: 'img-6', caption: 'Enterprise ERP Architecture Review', category: 'Engineering', src: gallery06, description: 'Yomnex ERP system core module review.' },
  { id: 'img-[#0ED3DD]', caption: 'Addis Ababa Tech Hub Conference', category: 'Community', src: gallery07, description: 'Community technology summit in Addis Ababa.' },
  { id: 'img-[#1E90FF]', caption: 'Cybersecurity Audit & Testing Lab', category: 'Security', src: gallery08, description: 'INSA certified cybersecurity vulnerability testing.' }
];

export const VIDEO_GALLERY = [
  {
    id: 'vid-1',
    title: 'YomTech Global Pan-African Tech Vision Documentary',
    category: 'Documentary',
    duration: '12:45',
    thumbnail: documentaryImg,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'vid-2',
    title: 'Yomnex ERP Product Tour & Feature Demo',
    category: 'Product Demos',
    duration: '08:20',
    thumbnail: erpImg,
    youtubeId: 'dQw4w9WgXcQ'
  }
];

export const MEDIA_APPEARANCES = [
  {
    id: 'med-1',
    org: 'Ethiopian Broadcasting Corporation (EBC)',
    title: 'CEO Ermias Alemayehu Interviewed on National Digital Transformation Agenda',
    type: 'TELEVISION INTERVIEW',
    date: 'August 2026',
    url: 'https://www.yomtechglobal.org'
  },
  {
    id: 'med-2',
    org: 'Tech in Africa Journal',
    title: 'YomTech Global Highlighted as Fast-Growing East African ERP & Tech Ecosystem',
    type: 'FEATURED ARTICLE',
    date: 'July 2026',
    url: 'https://www.yomtechglobal.org'
  }
];

export const PRESS_RELEASES = [
  {
    id: 'pr-1',
    title: 'YomTech Global Announces Launch of Insights & Media Knowledge Platform',
    date: 'August 24, 2026',
    pdfUrl: '#',
    summary: 'YomTech Global officially unveils its centralized digital publishing portal to share engineering knowledge, satellite projects, tech news, and academy achievements.'
  }
];
