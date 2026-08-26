import gallery01 from '../assets/gallery/gallery 01.jpg';
import gallery02 from '../assets/gallery/gallery 02.jpg';
import gallery03 from '../assets/gallery/gallery 03.jpg';
import gallery04 from '../assets/gallery/gallery 04.jpg';
import gallery05 from '../assets/gallery/gallery 05.jpg';
import gallery06 from '../assets/gallery/gallery 06.jpg';
import gallery07 from '../assets/gallery/gallery 07.jpg';
import gallery08 from '../assets/gallery/gallery 08.jpg';

export const INITIAL_CMS_ARTICLES = [
  // 0. Services & Products Matrix
  {
    id: 'art-prod-1',
    title: 'Yomnex ERP Enterprise Cloud Module',
    category: 'Services & Products Matrix',
    client: 'Enterprise Software Division',
    author: 'Product Management Team',
    summary: 'Unified cloud ERP solution for finance, inventory, HR, and supply chain management across Pan-African enterprises.',
    readTime: 'Enterprise Software',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-prod-2',
    title: 'WabiSkills EdTech & Academy Platform',
    category: 'Services & Products Matrix',
    client: 'WabiSkills Academy',
    author: 'EdTech & Admissions Unit',
    summary: 'Pan-African digital learning platform empowering students with tech skills, coding bootcamps, and career certification.',
    readTime: 'EdTech & Academy',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-prod-3',
    title: 'WabiJob Recruitment & Talent Gateway',
    category: 'Services & Products Matrix',
    client: 'WabiJob Network',
    author: 'Recruitment Gateway Team',
    summary: 'Recruitment portal connecting vetted tech graduates with enterprise employers and international tech hubs.',
    readTime: 'Talent Network',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-prod-4',
    title: 'WabiX HD Video & Cloud Gateway',
    category: 'Services & Products Matrix',
    client: 'Communication Division',
    author: 'Cloud Infrastructure Team',
    summary: 'Secure, high-definition video conferencing platform and zero-trust cloud gateway for African enterprises.',
    readTime: 'Communication',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-prod-5',
    title: 'Mari Social Media & Creator Ecosystem',
    category: 'Services & Products Matrix',
    client: 'Social Network Division',
    author: 'Creator Community Unit',
    summary: 'Next-generation social app designed for African creators, digital communities, and youth tech networks.',
    readTime: 'Social Network',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-prod-6',
    title: 'Yomtech Media Documentary Production Hub',
    category: 'Services & Products Matrix',
    client: 'Media & Production Unit',
    author: 'YomTech Media Editorial',
    summary: 'Documentary production showcasing digital innovation stories, tech summits, and developer spotlights across East Africa.',
    readTime: 'Tech Documentaries',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 1. Corporate News & Articles
  {
    id: 'art-1',
    title: 'Pioneering Pan-African Satellite Data Management & Geospatial Innovation with SSGI',
    category: 'Corporate News & Articles',
    client: 'Space Science & Geospatial Institute (SSGI)',
    author: 'Ermias Alemayehu (Founder & CEO)',
    summary: 'Custom satellite image data infrastructure engineered in collaboration with SSGI to accelerate geospatial intelligence.',
    readTime: '6 min read',
    publishedDate: '2026-08-20',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-2',
    title: 'YomTech Global Partners with Bunna Bank S.C. for Core Financial Recon Automation',
    category: 'Corporate News & Articles',
    client: 'Bunna Bank S.C.',
    author: 'Corporate Communications',
    summary: 'Yomnex ERP engine selected by Bunna Bank S.C. to automate enterprise financial reconciliation.',
    readTime: '4 min read',
    publishedDate: '2026-08-18',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-3',
    title: 'WabiSkills Academy Graduates 500+ High-Caliber Full-Stack Developers',
    category: 'Corporate News & Articles',
    client: 'WabiSkills Academy',
    author: 'WabiSkills Editorial',
    summary: 'Cohort completes intensive software training, with 85% placed via WabiJob.',
    readTime: '5 min read',
    publishedDate: '2026-08-14',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-4',
    title: 'Ministry of Innovation & Tech (MInT) Approves YomTech E-Gov Portal Blueprint',
    category: 'Corporate News & Articles',
    client: 'MInT & INSA Ethiopia',
    author: 'Government Relations',
    summary: 'MInT and INSA endorse YomTech Global document workflow system.',
    readTime: '7 min read',
    publishedDate: '2026-08-08',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 2. Tech Articles & Engineering
  {
    id: 'art-5',
    title: 'Building Resilient High-Concurrency Microservices for African FinTech Platforms',
    category: 'Tech Articles & Engineering',
    client: 'YomTech Engineering Unit',
    author: 'Dr. Yared Worku (CTO)',
    summary: 'Deep technical breakdown on distributed Node.js services, Redis caching layers, and PostgreSQL sharding for high-load systems.',
    readTime: '8 min read',
    publishedDate: '2026-08-15',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-6',
    title: 'Applying Artificial Intelligence & Deep Learning to Satellite Geospatial Datasets',
    category: 'Tech Articles & Engineering',
    client: 'Addis AI Research Unit',
    author: 'AI & Data Science Team',
    summary: 'How computer vision models trained on satellite imagery automate crop yield estimation and deforestation tracking.',
    readTime: '10 min read',
    publishedDate: '2026-08-10',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-7',
    title: 'Implementing Zero-Trust Security Protocols in Public & Private Enterprise Infrastructure',
    category: 'Tech Articles & Engineering',
    client: 'INSA Security Partner',
    author: 'INSA Certified Security Auditor',
    summary: 'Essential security guidelines for multi-factor auth (2FA), JWT token revocation, and automated vulnerability audits.',
    readTime: '6 min read',
    publishedDate: '2026-08-02',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 3. Upcoming Events & Webinars
  {
    id: 'art-8',
    title: 'Pan-African Digital Transformation & Enterprise ERP Summit 2026',
    category: 'Upcoming Events & Webinars',
    client: 'Skylight Hotel & Online Hybrid (Addis Ababa)',
    author: 'YomTech Global Events Team',
    summary: 'Join industry leaders and software architects as YomTech Global unveils next-gen Yomnex ERP and WabiSkills platforms. (SEP 15, 2026)',
    readTime: '09:00 AM EAT',
    publishedDate: '2026-09-15',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-9',
    title: 'WabiSkills Tech Bootcamp Graduation & Investor Demo Day',
    category: 'Upcoming Events & Webinars',
    client: 'WabiSkills Tech Hub (Megenagna, Addis Ababa)',
    author: 'WabiSkills Academy',
    summary: 'Witness 50 live product demonstrations from top software engineering graduates pitching custom mobile and web applications. (OCT 02, 2026)',
    readTime: '02:00 PM EAT',
    publishedDate: '2026-10-02',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 4. Official Announcements
  {
    id: 'art-10',
    title: 'Yomnex Cloud ERP 4.0 Major Release Live Platform Update',
    category: 'Official Announcements',
    client: 'Enterprise Software Division',
    author: 'Product Management Team',
    summary: 'Yomnex ERP 4.0 introduces real-time financial dashboards, multi-currency accounting, automated VAT reporting, and mobile scanning.',
    readTime: 'FEATURED RELEASE',
    publishedDate: '2026-08-22',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-11',
    title: 'WabiJob Talent Hub Connects 100+ Enterprise Recruiters',
    category: 'Official Announcements',
    client: 'WabiJob Network',
    author: 'Recruitment Gateway Team',
    summary: 'Employers can now directly browse vetted tech talent profiles and schedule technical interviews inside WabiJob.',
    readTime: 'IMPORTANT BULLETIN',
    publishedDate: '2026-08-19',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 5. Featured Project Case Studies
  {
    id: 'art-12',
    title: 'Space Science & Geospatial Institute (SSGI) Satellite Portal Case Study',
    category: 'Featured Project Case Studies',
    client: 'Space Science & Geospatial Institute',
    author: 'Distributed GIS Engineering Team',
    summary: 'Challenge: Handling multi-terabyte satellite payloads. Impact: Reduced GIS query latency by 450% and enabled instant multi-department sharing.',
    readTime: 'React, Node.js, PostGIS',
    publishedDate: '2026-08-20',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-13',
    title: 'Bunna Bank S.C. Financial Reconciliation & ERP Platform Case Study',
    category: 'Featured Project Case Studies',
    client: 'Bunna Bank S.C.',
    author: 'FinTech Engineering Core',
    summary: 'Challenge: Manual multi-branch transaction reconciliation. Impact: Automated 98% of branch transaction reconciliation with 100% compliance auditing.',
    readTime: 'Yomnex ERP Engine, Redis',
    publishedDate: '2026-08-18',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 6. Executive Team Members
  {
    id: 'art-14',
    title: 'Ermias Alemayehu - Founder & Chief Executive Officer (CEO)',
    category: 'Executive Team Members',
    client: 'YomTech Global Leadership',
    author: 'Executive Board',
    summary: '"Technology is not merely a tool; it is the foundation for innovation, opportunity, and sustainable growth." Pioneering Pan-African digital transformation.',
    readTime: 'Executive Profile',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-15',
    title: 'Dr. Yared Worku - Chief Technology Officer (CTO)',
    category: 'Executive Team Members',
    client: 'Software Engineering & AI Unit',
    author: 'Engineering Directorate',
    summary: '"High-quality software architecture is built on discipline, simplicity, and continuous innovation." Over 12 years building distributed cloud infrastructure.',
    readTime: 'CTO Profile',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 7. Client & Learner Testimonials
  {
    id: 'art-16',
    title: 'Testimonial: Solomon Desta (WabiSkills Full-Stack Graduate / Tech Leader)',
    category: 'Client & Learner Testimonials',
    client: 'WabiSkills Academy Alumni',
    author: 'Solomon Desta',
    summary: '"WabiSkills transformed my career trajectory. The practical full-stack bootcamp gave me real-world enterprise engineering experience."',
    readTime: 'Learner Review (5 Stars)',
    publishedDate: '2026-08-14',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-17',
    title: 'Testimonial: Ato Worku Tadesse (Director of IT Operations, Enterprise Client)',
    category: 'Client & Learner Testimonials',
    client: 'Enterprise Client Partner',
    author: 'Ato Worku Tadesse',
    summary: '"YomTech Global delivered our Yomnex ERP deployment ahead of schedule. Their technical competence and local support are exceptional."',
    readTime: 'Client Review (5 Stars)',
    publishedDate: '2026-08-18',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 8. Photo Gallery Showcase
  {
    id: 'art-18',
    title: 'Photo Gallery: WabiSkills Tech Bootcamp Classroom & Lab Sessions',
    category: 'Photo Gallery Showcase',
    client: 'WabiSkills Tech Hub',
    author: 'Media Unit',
    summary: 'Hands-on practical development bootcamp sessions with full-stack engineering students in Addis Ababa.',
    readTime: 'Photo Item 01',
    publishedDate: '2026-08-14',
    status: 'Published',
    visibility: 'VISIBLE',
    coverImage: gallery01
  },
  {
    id: 'art-19',
    title: 'Photo Gallery: Executive MoU Signing Ceremony with Government Partners',
    category: 'Photo Gallery Showcase',
    client: 'MInT & INSA Headquarters',
    author: 'Corporate Relations',
    summary: 'Official signing ceremony for e-government document management and digital portal blueprint.',
    readTime: 'Photo Item 03',
    publishedDate: '2026-08-08',
    status: 'Published',
    visibility: 'VISIBLE',
    coverImage: gallery03
  },

  // 9. Video & Documentary Hub
  {
    id: 'art-20',
    title: 'YomTech Global Pan-African Tech Vision Documentary',
    category: 'Video & Documentary Hub',
    client: 'YomTech Media Channel (@yomtech)',
    author: 'YomTech Media Productions',
    summary: 'Official channel documentary detailing our tech vision, satellite software engineering, and software academies.',
    readTime: '12:45',
    publishedDate: '2026-08-20',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-21',
    title: 'Yomnex ERP Product Tour & Feature Walkthrough',
    category: 'Video & Documentary Hub',
    client: 'WabiSkills Channel (@WabiSkills)',
    author: 'Software Engineering Unit',
    summary: 'Comprehensive feature walkthrough of Yomnex ERP 4.0 financial reconciliation and inventory scanning.',
    readTime: '08:20',
    publishedDate: '2026-08-22',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 10. Media Appearances & Coverage
  {
    id: 'art-22',
    title: 'TV Interview: CEO Ermias Alemayehu Featured on EBC National Broadcast',
    category: 'Media Appearances & Coverage',
    client: 'Ethiopian Broadcasting Corporation (EBC)',
    author: 'National Media Interview',
    summary: 'Special TV feature on national digital transformation agenda, Pan-African satellite data, and tech talent expansion.',
    readTime: 'Television Broadcast',
    publishedDate: '2026-08-21',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-23',
    title: 'Journal Feature: YomTech Global Highlighted in Tech in Africa Journal',
    category: 'Media Appearances & Coverage',
    client: 'Tech in Africa Journal',
    author: 'African Tech Reviewers',
    summary: 'Publication highlights YomTech Global as a fast-growing East African enterprise software & talent ecosystem.',
    readTime: 'Featured Article',
    publishedDate: '2026-07-28',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 11. Press & Corporate Content
  {
    id: 'art-24',
    title: 'Press Release: YomTech Global Official Launch of Insights & Media Portal',
    category: 'Press & Corporate Content',
    client: 'YomTech Global Press Office',
    author: 'Corporate Communications',
    summary: 'Official press release announcing the centralized digital publishing portal for engineering case studies, tech news, and academy updates.',
    readTime: 'Press Release PDF',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 12. Support FAQ & Knowledge Base
  {
    id: 'art-25',
    title: 'Support FAQ: What core technology services does YomTech Global provide?',
    category: 'Support FAQ & Knowledge Base',
    client: 'YomTech Support Desk',
    author: 'Knowledge Base Team',
    summary: 'Answer: Custom Software Engineering, Yomnex ERP, WabiSkills Bootcamps, WabiJob Talent Hub, Cloud Hosting (WabiX), and IT Consulting.',
    readTime: 'FAQ Item 01',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-26',
    title: 'Support FAQ: How do I enroll in WabiSkills Academy training programs?',
    category: 'Support FAQ & Knowledge Base',
    client: 'WabiSkills Admissions',
    author: 'Admissions Office',
    summary: 'Answer: Apply online via the WabiSkills portal or visit our Megenagna Tech Campus in Addis Ababa for walk-in consultation.',
    readTime: 'FAQ Item 02',
    publishedDate: '2026-08-24',
    status: 'Published',
    visibility: 'VISIBLE'
  },

  // 13. Institutional Partners
  {
    id: 'art-27',
    title: 'Institutional Partner: Space Science & Geospatial Institute (SSGI)',
    category: 'Trusted Institutional Partners',
    client: 'SSGI Ethiopia',
    author: 'Partner Alliance Unit',
    summary: 'Government tech partner collaborating on Pan-African satellite data telemetry management and spatial query acceleration.',
    readTime: 'Government Tech Partner',
    publishedDate: '2026-08-20',
    status: 'Published',
    visibility: 'VISIBLE'
  },
  {
    id: 'art-28',
    title: 'Institutional Partner: Information Network Security Administration (INSA)',
    category: 'Trusted Institutional Partners',
    client: 'INSA Ethiopia',
    author: 'CyberSecurity Alliance',
    summary: 'National security administration partnering on zero-trust cloud gateways and security compliance audits.',
    readTime: 'CyberSecurity Partner',
    publishedDate: '2026-08-15',
    status: 'Published',
    visibility: 'VISIBLE'
  }
];
