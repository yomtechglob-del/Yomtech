// Complete Backend Controller for all 14 CMS News & Media Categories

let cmsData = {
  services: [
    { id: 'srv-1', name: 'Yomnex Cloud ERP', category: 'Enterprise Software', description: 'Enterprise resource planning engine with real-time financial recon, VAT accounting, and inventory scanning.', status: 'Published' },
    { id: 'srv-2', name: 'WabiSkills Academy', category: 'EdTech & Academy', description: 'Pan-African tech bootcamp training high-caliber full-stack software engineers.', status: 'Published' },
    { id: 'srv-3', name: 'WabiJob Talent Hub', category: 'Talent Network', description: 'Gateway connecting enterprise recruiters with vetted software engineering graduates.', status: 'Published' }
  ],
  articles: [
    { id: 'art-1', title: 'Pioneering Pan-African Satellite Data Management & Geospatial Innovation with SSGI', category: 'Case Study', client: 'SSGI Ethiopia', author: 'Ermias Alemayehu', summary: 'Custom satellite image data infrastructure engineered in collaboration with SSGI.', status: 'Published', visibility: 'VISIBLE' },
    { id: 'art-2', title: 'YomTech Global Partners with Bunna Bank S.C. for Core Financial Recon Automation', category: 'Enterprise News', client: 'Bunna Bank S.C.', author: 'Corporate Communications', summary: 'Yomnex ERP selected to automate enterprise reconciliation.', status: 'Published', visibility: 'VISIBLE' }
  ],
  events: [
    { id: 'evt-1', title: 'Pan-African Digital Transformation & Enterprise ERP Summit 2026', date: 'SEP 15, 2026', time: '09:00 AM', location: 'Skylight Hotel & Online Hybrid', category: 'Hybrid Conference', status: 'Upcoming', visibility: 'VISIBLE' },
    { id: 'evt-2', title: 'WabiSkills Tech Bootcamp Graduation & Investor Demo Day', date: 'OCT 02, 2026', time: '02:00 PM', location: 'WabiSkills Tech Hub', category: 'In-Person Event', status: 'Upcoming', visibility: 'VISIBLE' }
  ],
  announcements: [
    { id: 'ann-1', title: 'Yomnex Cloud ERP 4.0 Major Release Live Platform Update', priority: 'FEATURED', date: 'August 22, 2026', summary: 'Yomnex ERP 4.0 introduces real-time financial dashboards and mobile scanning.', visibility: 'VISIBLE' },
    { id: 'ann-2', title: 'WabiJob Talent Hub Connects 100+ Enterprise Recruiters', priority: 'IMPORTANT', date: 'August 19, 2026', summary: 'Employers can now directly browse vetted tech talent profiles.', visibility: 'VISIBLE' }
  ],
  projects: [
    { id: 'prj-1', title: 'Space Science & Geospatial Institute (SSGI) Satellite Portal', client: 'SSGI Ethiopia', category: 'Aerospace & Geospatial Tech', impact: 'Reduced GIS query latency by 450%', techStack: 'React, Node.js, PostGIS, Python AI' },
    { id: 'prj-2', title: 'Bunna Bank S.C. Financial Reconciliation & ERP Platform', client: 'Bunna Bank S.C.', category: 'Banking & Financial Services', impact: 'Automated 98% of branch transaction reconciliation', techStack: 'Yomnex ERP Engine, Node.js, PostgreSQL, Redis' }
  ],
  team: [
    { id: 'tm-1', name: 'Ermias Alemayehu', role: 'Founder & CEO', category: 'Executive Leadership', quote: 'Technology is the foundation for sustainable growth.' },
    { id: 'tm-2', name: 'Dr. Yared Worku', role: 'Chief Technology Officer (CTO)', category: 'Engineering', quote: 'High-quality software architecture is built on discipline.' }
  ],
  testimonials: [
    { id: 'tst-1', name: 'Solomon Desta', role: 'WabiSkills Graduate / Tech Leader', type: 'LEARNER', quote: 'WabiSkills transformed my career trajectory. The practical bootcamp gave me real-world experience.' },
    { id: 'tst-2', name: 'Ato Worku Tadesse', role: 'Enterprise Partner Client', type: 'CLIENT', quote: 'YomTech Global delivered our Yomnex ERP deployment ahead of schedule.' }
  ],
  gallery: [
    { id: 'gal-1', caption: 'WabiSkills Tech Bootcamp Classroom', category: 'Academy' },
    { id: 'gal-2', caption: 'YomTech Global Engineering Team', category: 'Team' },
    { id: 'gal-3', caption: 'Executive MoU Signing Ceremony', category: 'Partnerships' }
  ],
  videos: [
    { id: 'vid-1', title: 'YomTech Global Pan-African Tech Vision Documentary', channel: '@yomtech', views: '1.4k views', duration: '12:45', category: 'Documentary' },
    { id: 'vid-2', title: 'Yomnex ERP Product Tour & Feature Demo', channel: '@WabiSkills', views: '1.4k views', duration: '08:20', category: 'Product Demos' }
  ],
  media: [
    { id: 'med-1', title: 'CEO Ermias Alemayehu Interviewed on National Digital Transformation Agenda', outlet: 'Ethiopian Broadcasting Corporation (EBC)', date: 'August 2026', type: 'TELEVISION INTERVIEW' },
    { id: 'med-2', title: 'YomTech Global Highlighted as Fast-Growing East African ERP & Tech Ecosystem', outlet: 'Tech in Africa Journal', date: 'July 2026', type: 'FEATURED ARTICLE' }
  ],
  press: [
    { id: 'prs-1', title: 'YomTech Global Announces Launch of Insights & Media Knowledge Platform', date: 'August 24, 2026', summary: 'YomTech Global officially unveils its centralized digital publishing portal.' }
  ],
  faqs: [
    { id: 'faq-1', question: 'What core technology services does YomTech Global provide?', answer: 'YomTech Global specializes in Enterprise Software Engineering, EdTech, Cloud Infrastructure, and IT Consulting.' },
    { id: 'faq-2', question: 'Where is YomTech Global headquarters located?', answer: 'Our Pan-African Innovation Headquarters is located in Megenagna, Addis Ababa, Ethiopia.' }
  ],
  partners: [
    { id: 'pt-1', name: 'Space Science & Geospatial Institute (SSGI)', type: 'Government Tech Partner' },
    { id: 'pt-2', name: 'Information Network Security Administration (INSA)', type: 'CyberSecurity Partner' },
    { id: 'pt-3', name: 'Ministry of Innovation & Technology (MInT)', type: 'Institutional Partner' },
    { id: 'pt-4', name: 'Bunna Bank S.C.', type: 'Enterprise Client' }
  ]
};

// Generic Controller Handlers
const getCategoryItems = (req, res) => {
  const { category } = req.params;
  const items = cmsData[category] || [];
  res.status(200).json({ success: true, data: items });
};

const createCategoryItem = (req, res) => {
  const { category } = req.params;
  if (!cmsData[category]) cmsData[category] = [];
  const newItem = { id: `${category.slice(0, 3)}-${Date.now()}`, ...req.body };
  cmsData[category].unshift(newItem);
  res.status(201).json({ success: true, data: newItem });
};

const updateCategoryItem = (req, res) => {
  const { category, id } = req.params;
  if (cmsData[category]) {
    cmsData[category] = cmsData[category].map((item) => (item.id === id ? { ...item, ...req.body } : item));
  }
  const updated = cmsData[category]?.find((item) => item.id === id);
  res.status(200).json({ success: true, data: updated });
};

const deleteCategoryItem = (req, res) => {
  const { category, id } = req.params;
  if (cmsData[category]) {
    cmsData[category] = cmsData[category].filter((item) => item.id !== id);
  }
  res.status(200).json({ success: true, message: `${category} item deleted successfully` });
};

module.exports = {
  getCategoryItems,
  createCategoryItem,
  updateCategoryItem,
  deleteCategoryItem
};
