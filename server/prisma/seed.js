const prisma = require('../src/config/database');
const bcrypt = require('bcryptjs');

const initialSeedContent = [
  // 1. Corporate News & Articles
  {
    title: 'Pioneering Pan-African Satellite Data Management & Geospatial Innovation with SSGI',
    slug: 'pioneering-pan-african-satellite-data-ssgi',
    category: 'Corporate News & Articles',
    contentType: 'NEWS',
    client: 'Space Science & Geospatial Institute (SSGI)',
    author: 'Ermias Alemayehu (Founder & CEO)',
    excerpt: 'Custom satellite image data infrastructure engineered in collaboration with SSGI to accelerate geospatial intelligence.',
    content: 'YomTech Global has successfully engineered custom satellite image data infrastructure in collaboration with SSGI to accelerate Pan-African geospatial intelligence, environmental monitoring, and urban planning.',
    readTime: '6 min read',
    status: 'PUBLISHED',
    visibility: 'PUBLIC',
    featured: true
  },
  {
    title: 'YomTech Global Partners with Bunna Bank S.C. for Core Financial Recon Automation',
    slug: 'yomtech-partners-bunna-bank-financial-recon',
    category: 'Corporate News & Articles',
    contentType: 'NEWS',
    client: 'Bunna Bank S.C.',
    author: 'Corporate Communications',
    excerpt: 'Yomnex ERP engine selected by Bunna Bank S.C. to automate enterprise financial reconciliation.',
    content: 'Bunna Bank S.C. has partnered with YomTech Global to integrate Yomnex ERP reconciliation modules across all banking branches, processing millions of transactions with zero error margins.',
    readTime: '4 min read',
    status: 'PUBLISHED',
    visibility: 'PUBLIC',
    featured: true
  },
  {
    title: 'WabiSkills Academy Graduates 500+ High-Caliber Full-Stack Developers',
    slug: 'wabiskills-academy-graduates-500-developers',
    category: 'Corporate News & Articles',
    contentType: 'NEWS',
    client: 'WabiSkills Academy',
    author: 'WabiSkills Editorial',
    excerpt: 'Cohort completes intensive software training, with 85% placed via WabiJob.',
    content: 'Over 500 tech graduates completed intensive software development bootcamps at WabiSkills Academy, acquiring practical experience in Node.js, React, and Enterprise Cloud Systems.',
    readTime: '5 min read',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },
  {
    title: 'Ministry of Innovation & Tech (MInT) Approves YomTech E-Gov Portal Blueprint',
    slug: 'mint-approves-yomtech-egov-portal-blueprint',
    category: 'Corporate News & Articles',
    contentType: 'NEWS',
    client: 'MInT & INSA Ethiopia',
    author: 'Government Relations',
    excerpt: 'MInT and INSA endorse YomTech Global document workflow system.',
    content: 'The Ministry of Innovation & Technology (MInT) officially endorsed YomTech Global enterprise document workflow system for deployment across public sector bureaus.',
    readTime: '7 min read',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 2. Tech Articles & Engineering
  {
    title: 'Building Resilient High-Concurrency Microservices for African FinTech Platforms',
    slug: 'building-resilient-high-concurrency-microservices',
    category: 'Tech Articles & Engineering',
    contentType: 'ARTICLE',
    client: 'YomTech Engineering Unit',
    author: 'Dr. Yared Worku (CTO)',
    excerpt: 'Deep technical breakdown on distributed Node.js services, Redis caching layers, and PostgreSQL sharding.',
    content: 'Detailed architectural paper covering event-driven microservice patterns, queue processing, and zero-downtime deployment strategies tailored for high-load banking APIs.',
    readTime: '8 min read',
    status: 'PUBLISHED',
    visibility: 'PUBLIC',
    featured: true
  },

  // 3. Upcoming Events & Webinars
  {
    title: 'Pan-African Digital Transformation & Enterprise ERP Summit 2026',
    slug: 'pan-african-digital-transformation-summit-2026',
    category: 'Upcoming Events & Webinars',
    contentType: 'EVENT',
    eventDate: 'SEP 15, 2026',
    eventTime: '09:00 AM EAT',
    location: 'Skylight Hotel & Online Hybrid',
    excerpt: 'Annual Pan-African summit gathering enterprise tech executives, ministers, and software architects.',
    content: 'Join top software engineers and digital transformation leaders for keynote panels on ERP automation, AI infrastructure, and cloud security.',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 4. Official Announcements
  {
    title: 'Yomnex Cloud ERP 4.0 Major Release Live Platform Update',
    slug: 'yomnex-cloud-erp-4-major-release',
    category: 'Official Announcements',
    contentType: 'ANNOUNCEMENT',
    priority: 'FEATURED',
    excerpt: 'Yomnex ERP 4.0 introduces real-time financial dashboards, multi-currency accounting, and mobile scanning.',
    content: 'We are excited to announce the release of Yomnex Cloud ERP version 4.0, featuring enhanced financial analytics and automated VAT compliance.',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 5. Featured Project Case Studies
  {
    title: 'Space Science & Geospatial Institute (SSGI) Satellite Portal',
    slug: 'ssgi-satellite-portal-case-study',
    category: 'Featured Project Case Studies',
    contentType: 'PROJECT',
    client: 'SSGI Ethiopia',
    impact: 'Reduced GIS query latency by 450%',
    techStack: 'React, Node.js, PostGIS, Python AI',
    excerpt: 'High-throughput satellite data archive portal engineered for real-time geospatial analysis.',
    status: 'PUBLISHED',
    visibility: 'PUBLIC',
    featured: true
  },

  // 6. Executive Team Members
  {
    title: 'Ermias Alemayehu',
    slug: 'ermias-alemayehu-founder-ceo',
    category: 'Executive Team Members',
    contentType: 'TEAM',
    role: 'Founder & CEO',
    quote: 'Technology is the foundation for sustainable Pan-African growth.',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 7. Client & Learner Testimonials
  {
    title: 'Solomon Desta',
    slug: 'solomon-desta-wabiskills-graduate',
    category: 'Client & Learner Testimonials',
    contentType: 'TESTIMONIAL',
    role: 'WabiSkills Graduate / Tech Leader',
    quote: 'WabiSkills transformed my career trajectory with practical full-stack software training.',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 8. Photo Gallery Showcase
  {
    title: 'WabiSkills Tech Bootcamp Classroom',
    slug: 'wabiskills-bootcamp-classroom-gallery',
    category: 'Photo Gallery Showcase',
    contentType: 'GALLERY',
    readTime: 'Academy',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 9. Video & Documentary Hub
  {
    title: 'YomTech Global Pan-African Tech Vision Documentary',
    slug: 'yomtech-pan-african-tech-vision-documentary',
    category: 'Video & Documentary Hub',
    contentType: 'VIDEO',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    readTime: '12:45',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 10. Media Appearances & Coverage
  {
    title: 'CEO Ermias Alemayehu Interviewed on National Digital Transformation Agenda',
    slug: 'ceo-ermias-alemayehu-ebc-interview',
    category: 'Media Appearances & Coverage',
    contentType: 'MEDIA',
    client: 'Ethiopian Broadcasting Corporation (EBC)',
    readTime: 'TELEVISION INTERVIEW',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 11. Press & Corporate Content
  {
    title: 'YomTech Global Announces Launch of Insights & Media Knowledge Platform',
    slug: 'yomtech-announces-insights-media-platform',
    category: 'Press & Corporate Content',
    contentType: 'PRESS',
    excerpt: 'YomTech Global officially unveils its centralized digital publishing portal for Pan-African technology innovation.',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 12. Support FAQ & Knowledge Base
  {
    title: 'What core technology services does YomTech Global provide?',
    slug: 'faq-core-technology-services',
    category: 'Support FAQ & Knowledge Base',
    contentType: 'FAQ',
    excerpt: 'YomTech Global specializes in Enterprise Software Engineering, EdTech, Cloud Infrastructure, and IT Consulting.',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 13. Trusted Institutional Partners
  {
    title: 'Space Science & Geospatial Institute (SSGI)',
    slug: 'partner-ssgi-ethiopia',
    category: 'Trusted Institutional Partners',
    contentType: 'PARTNER',
    role: 'Government Tech Partner',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  },

  // 14. Services & Products Matrix
  {
    title: 'Yomnex ERP Enterprise Cloud Module',
    slug: 'yomnex-erp-enterprise-cloud',
    category: 'Services & Products Matrix',
    contentType: 'SERVICE',
    client: 'Enterprise Software Division',
    excerpt: 'Unified cloud ERP solution for finance, inventory, HR, and supply chain management across Pan-African enterprises.',
    readTime: 'Enterprise Software',
    status: 'PUBLISHED',
    visibility: 'PUBLIC'
  }
];

async function main() {
  console.log('Seeding YomTech Enterprise Database...');

  // 1. Super Admin User
  const adminEmail = 'admin@yomtech.com';
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash('Admin@123', 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        fullName: 'YomTech Lead Admin',
        role: 'SUPER_ADMIN'
      }
    });
    console.log(`Created default Super Admin: ${adminEmail}`);
  }

  // 2. Initial Content Items
  for (const item of initialSeedContent) {
    const existing = await prisma.contentItem.findUnique({ where: { slug: item.slug } });
    if (!existing) {
      await prisma.contentItem.create({ data: item });
    }
  }
  console.log(`Seeded ${initialSeedContent.length} enterprise CMS records into SQLite/Postgres database.`);

  console.log('Database seeding complete!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
