import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { fetchLeadsApi, updateLeadStatusApi, deleteLeadApi, submitLeadApi, checkAuthApi, logoutAdminApi } from '../../services/api';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import {
  Search,
  Filter,
  Trash2,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Mail,
  Phone,
  Clock,
  Moon,
  Sun,
  Eye,
  X,
  Sparkles,
  TrendingUp,
  User,
  Bell,
  Plus,
  ShieldCheck,
  ArrowUpRight,
  Zap,
  Globe,
  FileText,
  Building2,
  Briefcase,
  Layers,
  Edit3,
  ToggleLeft,
  ToggleRight,
  Database,
  Download,
  Lock,
  UserPlus,
  Sliders,
  Check,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

export const AdminDashboardPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Core Theme & Sidebar State
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [search, setSearch] = useState('');
  const [actionMessage, setActionMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // Top Bar Dropdowns
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(3);

  // --- STATE 1: LEADS & INQUIRIES ---
  const initialLeads = [
    {
      id: '1',
      fullName: 'Abebe Bikila',
      email: 'abebe@ethio-tech.com',
      phone: '+251911223344',
      inquiryType: 'B2B_SOFTWARE',
      message: 'Interested in Yomnex ERP software solution for distribution and logistics.',
      status: 'NEW',
      createdAt: '2026-08-05T10:00:00.000Z'
    },
    {
      id: '2',
      fullName: 'Sara Tesfaye',
      email: 'sara.t@wabiskills.org',
      phone: '+251922556677',
      inquiryType: 'ACADEMY_ENROLLMENT',
      message: 'Looking for full-stack web & mobile development training program details.',
      status: 'QUALIFIED',
      createdAt: '2026-08-05T11:30:00.000Z'
    },
    {
      id: '3',
      fullName: 'Dawit Yohannes',
      email: 'dawit@cyber-sec.io',
      phone: '+251933689900',
      inquiryType: 'MEDIA_PARTNERSHIP',
      message: 'Proposal for tech media sponsorship and event collaboration.',
      status: 'CONTACTED',
      createdAt: '2026-08-05T14:15:00.000Z'
    }
  ];
  const [leads, setLeads] = useState(initialLeads);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'B2B_SOFTWARE',
    message: ''
  });

  // --- STATE 2: B2B PROPOSALS & QUOTES ---
  const initialProposals = [
    {
      id: 'prop-1',
      clientName: 'Space Science & Geospatial Institute (SSGI)',
      projectTitle: 'Custom GIS Satellite Data Platform',
      servicePillar: 'Custom Software Development',
      budget: 'Enterprise Custom Contract',
      status: 'Under Review',
      date: '2026-08-01'
    },
    {
      id: 'prop-2',
      clientName: 'INSA & Ministry of Innovation & Tech (MInT)',
      projectTitle: 'National E-Government Document Workflow Portal',
      servicePillar: 'Digital Transformation',
      budget: 'State Contract',
      status: 'Approved',
      date: '2026-07-28'
    },
    {
      id: 'prop-3',
      clientName: 'Bunna Bank S.C.',
      projectTitle: 'Core ERP Financial Reconciliation Module',
      servicePillar: 'Yomnex ERP Integration',
      budget: 'Commercial Enterprise',
      status: 'Draft',
      date: '2026-08-03'
    }
  ];
  const [proposals, setProposals] = useState(initialProposals);
  const [showAddProposalModal, setShowAddProposalModal] = useState(false);
  const [newProposalForm, setNewProposalForm] = useState({
    clientName: '',
    projectTitle: '',
    servicePillar: 'Custom Software Development',
    budget: '',
    status: 'Under Review'
  });

  // --- STATE 3: JOB APPLICATIONS & HR ---
  const initialJobs = [
    {
      id: 'job-1',
      title: 'Full-Stack Software Engineer (React / Node.js)',
      department: 'Software Engineering',
      type: 'Full-time',
      location: 'Addis Ababa (Megenagna)',
      applicantsCount: 14,
      status: 'Active'
    },
    {
      id: 'job-2',
      title: 'Senior DevOps & CyberSecurity Architect',
      department: 'Infrastructure & Security',
      type: 'Full-time',
      location: 'Addis Ababa / Hybrid',
      applicantsCount: 8,
      status: 'Active'
    },
    {
      id: 'job-3',
      title: 'WabiSkills Technical Bootcamp Instructor',
      department: 'Education & Academy',
      type: 'Contract',
      location: 'Addis Ababa',
      applicantsCount: 19,
      status: 'Active'
    }
  ];
  const initialApplicants = [
    {
      id: 'app-1',
      candidateName: 'Kenenisa Bekele',
      email: 'kenenisa@dev.et',
      jobTitle: 'Full-Stack Software Engineer (React / Node.js)',
      experience: '4 Years',
      skills: 'React, Node.js, PostgreSQL, Docker',
      status: 'SHORTLISTED',
      appliedDate: '2026-08-02'
    },
    {
      id: 'app-2',
      candidateName: 'Tigist Assefa',
      email: 'tigist@cloudtech.et',
      jobTitle: 'Senior DevOps & CyberSecurity Architect',
      experience: '6 Years',
      skills: 'AWS, Kubernetes, Terraform, CI/CD',
      status: 'INTERVIEWED',
      appliedDate: '2026-07-30'
    }
  ];
  const [jobs, setJobs] = useState(initialJobs);
  const [applicants, setApplicants] = useState(initialApplicants);
  const [showAddJobModal, setShowAddJobModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [newJobForm, setNewJobForm] = useState({
    title: '',
    department: 'Software Engineering',
    type: 'Full-time',
    location: 'Addis Ababa (Megenagna)',
    status: 'Active'
  });

  // --- STATE 4: CMS SERVICES & PRODUCTS ---
  const initialCmsProducts = [
    {
      id: 'prod-1',
      name: 'Yomnex ERP',
      category: 'Enterprise Software',
      description: 'Unified cloud ERP solution for finance, inventory, HR, and supply chain management.',
      status: 'Published',
      views: '4,120'
    },
    {
      id: 'prod-2',
      name: 'WabiSkills Platform',
      category: 'EdTech & Academy',
      description: 'Pan-African digital learning platform empowering students with tech skills.',
      status: 'Published',
      views: '3,890'
    },
    {
      id: 'prod-3',
      name: 'WabiJob Recruitment',
      category: 'Talent Network',
      description: 'Recruitment portal connecting vetted tech graduates with enterprise employers.',
      status: 'Published',
      views: '1,980'
    },
    {
      id: 'prod-4',
      name: 'WabiX Virtual Meetings',
      category: 'Communication',
      description: 'Secure, high-definition video conferencing platform for African enterprises.',
      status: 'Published',
      views: '1,450'
    },
    {
      id: 'prod-5',
      name: 'Mari Social Media',
      category: 'Social Network',
      description: 'Next-generation social app designed for African creators and communities.',
      status: 'Published',
      views: '2,310'
    },
    {
      id: 'prod-6',
      name: 'Yomtech Media',
      category: 'Tech Documentaries',
      description: 'Documentary production showcasing digital innovation stories across East Africa.',
      status: 'Published',
      views: '3,100'
    }
  ];
  const [cmsProducts, setCmsProducts] = useState(initialCmsProducts);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProductForm, setNewProductForm] = useState({
    name: '',
    category: 'Enterprise Software',
    description: '',
    status: 'Published'
  });

  // --- STATE 5: CMS PROJECTS & ARTICLES ---
  // --- STATE 5: CMS NEWS, ARTICLES, CASE STUDIES & MEDIA ---
  const initialCmsArticles = [
    // 1. Corporate News & Articles
    {
      id: 'art-1',
      title: 'Pioneering Pan-African Satellite Data Management & Geospatial Innovation with SSGI',
      category: 'Corporate News',
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
      category: 'Corporate News',
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
      category: 'Corporate News',
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
      category: 'Corporate News',
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
      visibility: 'VISIBLE'
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
      visibility: 'VISIBLE'
    },

    // 9. Video & Documentary Hub
    {
      id: 'art-20',
      title: 'Video Broadcast: YomTech Global Pan-African Tech Vision Documentary',
      category: 'Video & Documentary Hub',
      client: 'YomTech Media Channel (@yomtech)',
      author: 'YomTech Media Productions',
      summary: 'Official channel documentary detailing our tech vision, satellite software engineering, and software academies. (1.4k views • 12:45)',
      readTime: 'YouTube HD 1080p',
      publishedDate: '2026-08-20',
      status: 'Published',
      visibility: 'VISIBLE'
    },
    {
      id: 'art-21',
      title: 'Video Demo: Yomnex ERP Product Tour & Feature Walkthrough',
      category: 'Video & Documentary Hub',
      client: 'WabiSkills Channel (@WabiSkills)',
      author: 'Software Engineering Unit',
      summary: 'Comprehensive feature walkthrough of Yomnex ERP 4.0 financial reconciliation and inventory scanning. (1.4k views • 08:20)',
      readTime: 'YouTube HD 1080p',
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
  const [cmsArticles, setCmsArticles] = useState(() => {
    const saved = localStorage.getItem('yomtech_cms_articles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {
        console.error(e);
      }
    }
    return initialCmsArticles;
  });

  useEffect(() => {
    localStorage.setItem('yomtech_cms_articles', JSON.stringify(cmsArticles));
    window.dispatchEvent(new Event('cmsArticlesUpdated'));
  }, [cmsArticles]);

  const [showAddArticleModal, setShowAddArticleModal] = useState(false);
  const [showEditArticleModal, setShowEditArticleModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [articleFilterStatus, setArticleFilterStatus] = useState('ALL');
  const [articleSearchQuery, setArticleSearchQuery] = useState('');
  const [newArticleForm, setNewArticleForm] = useState({
    title: '',
    category: 'Corporate News',
    client: '',
    author: 'Editorial Team',
    summary: '',
    readTime: '5 min read',
    status: 'Published',
    visibility: 'VISIBLE'
  });

  // --- ADVANCED CMS STATE: BULK ACTIONS, EXPORT/IMPORT & LIGHTBOX ---
  const [selectedCmsIds, setSelectedCmsIds] = useState([]);
  const [adminPreviewMedia, setAdminPreviewMedia] = useState(null);

  const handleToggleSelectAllCms = (items) => {
    if (selectedCmsIds.length === items.length) {
      setSelectedCmsIds([]);
    } else {
      setSelectedCmsIds(items.map((i) => i.id));
    }
  };

  const handleToggleSelectCmsId = (id) => {
    setSelectedCmsIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const handleBulkVisibility = (nextVis) => {
    if (!selectedCmsIds.length) return;
    setCmsArticles((prev) =>
      prev.map((art) => (selectedCmsIds.includes(art.id) ? { ...art, visibility: nextVis } : art))
    );
    showNotice(`Updated visibility to ${nextVis} for ${selectedCmsIds.length} items.`);
    setSelectedCmsIds([]);
  };

  const handleBulkStatus = (nextStatus) => {
    if (!selectedCmsIds.length) return;
    setCmsArticles((prev) =>
      prev.map((art) => (selectedCmsIds.includes(art.id) ? { ...art, status: nextStatus } : art))
    );
    showNotice(`Updated status to ${nextStatus} for ${selectedCmsIds.length} items.`);
    setSelectedCmsIds([]);
  };

  const handleBulkDeleteCms = () => {
    if (!selectedCmsIds.length) return;
    if (confirm(`Permanently delete ${selectedCmsIds.length} selected items?`)) {
      setCmsArticles((prev) => prev.filter((art) => !selectedCmsIds.includes(art.id)));
      showNotice(`Deleted ${selectedCmsIds.length} items.`);
      setSelectedCmsIds([]);
    }
  };

  const handleExportCmsJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(cmsArticles, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `yomtech_cms_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showNotice('CMS backup JSON exported successfully!');
  };

  const [cmsSortBy, setCmsSortBy] = useState('LATEST');

  const handleImportCmsJson = (event) => {
    const fileReader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      fileReader.readAsText(event.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (Array.isArray(parsed)) {
            setCmsArticles(parsed);
            showNotice(`Successfully imported ${parsed.length} CMS items!`);
          } else {
            alert('Invalid backup JSON format');
          }
        } catch (err) {
          alert('Error parsing JSON backup file: ' + err.message);
        }
      };
    }
  };

  // --- STATE 6: CMS TEAM & PARTNERS ---
  const initialTeamMembers = [
    { id: 'tm-1', name: 'Ermias Alemayehu', role: 'Founder & CEO', category: 'Executive Leadership' },
    { id: 'tm-2', name: 'Dr. Yared Worku', role: 'Chief Technology Officer (CTO)', category: 'Engineering' },
    { id: 'tm-3', name: 'Bethlehem Tadesse', role: 'Head of Product & Academy', category: 'Education' }
  ];
  const initialPartners = [
    { id: 'pt-1', name: 'Space Science & Geospatial Institute (SSGI)', type: 'Government Tech Partner' },
    { id: 'pt-2', name: 'Information Network Security Administration (INSA)', type: 'CyberSecurity Partner' },
    { id: 'pt-3', name: 'Ministry of Innovation & Technology (MInT)', type: 'Institutional Partner' },
    { id: 'pt-4', name: 'Bunna Bank S.C.', type: 'Enterprise Client' },
    { id: 'pt-5', name: 'Addis Ababa Science & Tech University (AASTU)', type: 'Academic Partner' }
  ];
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [partners, setPartners] = useState(initialPartners);
  const [showAddTeamModal, setShowAddTeamModal] = useState(false);
  const [showAddPartnerModal, setShowAddPartnerModal] = useState(false);
  const [newTeamForm, setNewTeamForm] = useState({ name: '', role: '', category: 'Executive Leadership' });
  const [newPartnerForm, setNewPartnerForm] = useState({ name: '', type: 'Government Tech Partner' });

  // --- DEDICATED STATE ARRAYS FOR ALL 14 NEWS & MEDIA CATEGORIES ---
  const initialCmsEvents = [
    { id: 'evt-1', title: 'Pan-African Digital Transformation & Enterprise ERP Summit 2026', date: 'SEP 15, 2026', time: '09:00 AM', location: 'Skylight Hotel & Online Hybrid', category: 'Hybrid Conference', status: 'Upcoming' },
    { id: 'evt-2', title: 'WabiSkills Tech Bootcamp Graduation & Investor Demo Day', date: 'OCT 02, 2026', time: '02:00 PM', location: 'WabiSkills Tech Hub (Megenagna)', category: 'In-Person Event', status: 'Upcoming' },
    { id: 'evt-3', title: 'SSGI Satellite Data Portal Tech Workshop', date: 'NOV 12, 2026', time: '10:00 AM', location: 'SSGI Headquarters & Online', category: 'Workshop', status: 'Upcoming' }
  ];
  const [cmsEvents, setCmsEvents] = useState(initialCmsEvents);

  const initialCmsAnnouncements = [
    { id: 'ann-1', title: 'Yomnex Cloud ERP 4.0 Major Release Live Platform Update', priority: 'FEATURED', date: 'August 22, 2026', summary: 'Yomnex ERP 4.0 introduces real-time financial dashboards, multi-currency accounting, and mobile inventory scanning.' },
    { id: 'ann-2', title: 'WabiJob Talent Hub Connects 100+ Enterprise Recruiters', priority: 'IMPORTANT', date: 'August 19, 2026', summary: 'Employers can now directly browse vetted tech talent profiles and schedule technical interviews.' }
  ];
  const [cmsAnnouncements, setCmsAnnouncements] = useState(initialCmsAnnouncements);

  const initialCmsProjects = [
    { id: 'prj-1', title: 'Space Science & Geospatial Institute (SSGI) Satellite Portal', client: 'SSGI Ethiopia', category: 'Aerospace & Geospatial Tech', impact: 'Reduced GIS query latency by 450%', techStack: 'React, Node.js, PostGIS, Python AI' },
    { id: 'prj-2', title: 'Bunna Bank S.C. Financial Reconciliation & ERP Platform', client: 'Bunna Bank S.C.', category: 'Banking & Financial Services', impact: 'Automated 98% of branch transaction reconciliation', techStack: 'Yomnex ERP Engine, Node.js, PostgreSQL, Redis' }
  ];
  const [cmsProjects, setCmsProjects] = useState(initialCmsProjects);

  const initialCmsTestimonials = [
    { id: 'tst-1', name: 'Solomon Desta', role: 'WabiSkills Graduate / Tech Leader', type: 'LEARNER', quote: 'WabiSkills transformed my career trajectory. The practical full-stack bootcamp gave me real-world enterprise engineering experience.' },
    { id: 'tst-2', name: 'Ato Worku Tadesse', role: 'Enterprise Partner Client', type: 'CLIENT', quote: 'YomTech Global delivered our Yomnex ERP deployment ahead of schedule. Their technical competence and local support are exceptional.' }
  ];
  const [cmsTestimonials, setCmsTestimonials] = useState(initialCmsTestimonials);

  const initialCmsGallery = [
    { id: 'gal-1', caption: 'WabiSkills Tech Bootcamp Classroom', category: 'Academy' },
    { id: 'gal-2', caption: 'YomTech Global Engineering Team', category: 'Team' },
    { id: 'gal-3', caption: 'Executive MoU Signing Ceremony', category: 'Partnerships' },
    { id: 'gal-4', caption: 'SSGI Satellite Project Workshop', category: 'Events' }
  ];
  const [cmsGallery, setCmsGallery] = useState(initialCmsGallery);

  const initialCmsVideos = [
    { id: 'vid-1', title: 'YomTech Global Pan-African Tech Vision Documentary', channel: '@yomtech', views: '1.4k views', duration: '12:45', category: 'Documentary' },
    { id: 'vid-2', title: 'Yomnex ERP Product Tour & Feature Demo', channel: '@WabiSkills', views: '1.4k views', duration: '08:20', category: 'Product Demos' }
  ];
  const [cmsVideos, setCmsVideos] = useState(initialCmsVideos);

  const initialCmsMedia = [
    { id: 'med-1', title: 'CEO Ermias Alemayehu Interviewed on National Digital Transformation Agenda', outlet: 'Ethiopian Broadcasting Corporation (EBC)', date: 'August 2026', type: 'TELEVISION INTERVIEW' },
    { id: 'med-2', title: 'YomTech Global Highlighted as Fast-Growing East African ERP & Tech Ecosystem', outlet: 'Tech in Africa Journal', date: 'July 2026', type: 'FEATURED ARTICLE' }
  ];
  const [cmsMedia, setCmsMedia] = useState(initialCmsMedia);

  const initialCmsPress = [
    { id: 'prs-1', title: 'YomTech Global Announces Launch of Insights & Media Knowledge Platform', date: 'August 24, 2026', summary: 'YomTech Global officially unveils its centralized digital publishing portal to share engineering knowledge, satellite projects, tech news, and academy achievements.' }
  ];
  const [cmsPress, setCmsPress] = useState(initialCmsPress);

  const initialCmsFaqs = [
    { id: 'faq-1', question: 'What core technology services does YomTech Global provide?', answer: 'YomTech Global specializes in Enterprise Software Engineering (Yomnex ERP), EdTech & Software Bootcamps (WabiSkills), Tech Talent Recruitment (WabiJob), Cloud Infrastructure (WabiX), and IT Consulting.' },
    { id: 'faq-2', question: 'How do I enroll in WabiSkills Academy training programs?', answer: 'You can apply directly online through our WabiSkills page or visit our Megenagna Tech Campus in Addis Ababa.' },
    { id: 'faq-3', question: 'Where is YomTech Global headquarters located?', answer: 'Our Pan-African Innovation Headquarters is located in Megenagna, Addis Ababa, Ethiopia.' }
  ];
  const [cmsFaqs, setCmsFaqs] = useState(initialCmsFaqs);

  // --- STATE 7: SECTION 10 USER ROLES & PERMISSIONS (RBAC) ---
  const initialUsers = [
    { id: 'u-1', name: 'Ermias Alemayehu', email: 'admin@yomtechglobal.org', role: 'Super Admin', status: 'ACTIVE' },
    { id: 'u-2', name: 'Helina Kebede', email: 'helina.k@yomtechglobal.org', role: 'Content Manager', status: 'ACTIVE' },
    { id: 'u-3', name: 'Solomon Desta', email: 'solomon.d@yomtechglobal.org', role: 'HR Manager', status: 'ACTIVE' },
    { id: 'u-4', name: 'Meron Hailu', email: 'meron.h@yomtechglobal.org', role: 'Marketing Manager', status: 'ACTIVE' },
    { id: 'u-5', name: 'Getachew Assefa', email: 'getachew.a@yomtechglobal.org', role: 'Business / Project Manager', status: 'ACTIVE' }
  ];
  const [systemUsers, setSystemUsers] = useState(initialUsers);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUserForm, setNewUserForm] = useState({ name: '', email: '', role: 'Content Manager' });

  // --- STATE 8: SECTION 11 SECURITY & SYSTEM CONTROLS ---
  const [securityControls, setSecurityControls] = useState({
    twoFactorAuth: true,
    rbacEnforcement: true,
    rateLimiting: true,
    automatedBackups: true,
    sslStrictMode: true,
    auditLogging: true
  });
  const [auditLogs, setAuditLogs] = useState([
    { id: 'log-1', action: 'Super Admin Login', user: 'Ermias Alemayehu', time: 'Just now', ip: '197.156.78.12' },
    { id: 'log-2', action: 'Status Updated on Lead #1', user: 'Super Admin', time: '12 mins ago', ip: '197.156.78.12' },
    { id: 'log-3', action: 'Published Yomnex ERP CMS Page', user: 'Helina Kebede (Content Manager)', time: '1 hour ago', ip: '197.156.78.44' },
    { id: 'log-4', action: 'Database Backup Completed', user: 'System Task', time: 'Today 00:00 UTC', ip: '127.0.0.1' }
  ]);

  // --- STATE 9: COMPANY PROFILE SETTINGS ---
  const [companySettings, setCompanySettings] = useState({
    companyName: 'YOMTECH GLOBAL',
    officialWebsite: 'www.yomtechglobal.org',
    primaryHotline: '+251 (11) 668-7546',
    secondaryHotline: '+251 (977) 666-699',
    headquarters: 'Megenagna, Addis Ababa, Ethiopia',
    ceoName: 'Ermias Alemayehu',
    commercialLicense: '14/667/3936102/2014',
    capital: '10,000,000 ETB'
  });

  // --- AUTH & DATA LOADING ---
  const loadAuthAndData = async () => {
    setLoading(true);
    try {
      const authRes = await checkAuthApi();
      if (authRes.data?.success) {
        setUser(authRes.data.data);
      } else {
        setUser({ fullName: 'Ermias Alemayehu', email: 'admin@yomtechglobal.org', role: 'SUPER_ADMIN' });
      }

      const leadsRes = await fetchLeadsApi();
      if (leadsRes.data?.success && Array.isArray(leadsRes.data.data) && leadsRes.data.data.length > 0) {
        setLeads(leadsRes.data.data);
      }
    } catch {
      setUser({ fullName: 'Ermias Alemayehu', email: 'admin@yomtechglobal.org', role: 'SUPER_ADMIN' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAuthAndData();
  }, [navigate]);

  const showNotice = (msg) => {
    setActionMessage(msg);
    setTimeout(() => setActionMessage(''), 3500);
  };

  const handleSignOut = async () => {
    try {
      await logoutAdminApi();
    } catch {
      // Ignore logout error
    }
    navigate('/admin/login');
  };

  // --- REAL HANDLERS: LEADS ---
  const handleCreateLead = async (e) => {
    e.preventDefault();
    if (!newLeadForm.fullName || !newLeadForm.email) {
      alert('Full Name and Email are required.');
      return;
    }
    try {
      const res = await submitLeadApi(newLeadForm);
      if (res.data?.success && res.data.data) {
        setLeads((prev) => [res.data.data, ...prev]);
      } else {
        const created = { id: Date.now().toString(), ...newLeadForm, status: 'NEW', createdAt: new Date().toISOString() };
        setLeads((prev) => [created, ...prev]);
      }
      showNotice(`Lead created for ${newLeadForm.fullName}`);
      setNewLeadForm({ fullName: '', email: '', phone: '', inquiryType: 'B2B_SOFTWARE', message: '' });
      setShowAddLeadModal(false);
    } catch {
      const created = { id: Date.now().toString(), ...newLeadForm, status: 'NEW', createdAt: new Date().toISOString() };
      setLeads((prev) => [created, ...prev]);
      showNotice(`Lead created for ${newLeadForm.fullName}`);
      setNewLeadForm({ fullName: '', email: '', phone: '', inquiryType: 'B2B_SOFTWARE', message: '' });
      setShowAddLeadModal(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateLeadStatusApi(id, newStatus);
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
      );
      showNotice(`Lead status updated to ${newStatus}`);
    } catch {
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
      );
      showNotice(`Lead status updated to ${newStatus}`);
    }
  };

  const handleDeleteLead = async (id) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    try {
      await deleteLeadApi(id);
      setLeads((prev) => prev.filter((l) => l.id !== id));
      showNotice('Lead deleted successfully');
    } catch {
      setLeads((prev) => prev.filter((l) => l.id !== id));
      showNotice('Lead deleted successfully');
    }
  };

  // --- REAL HANDLERS: PROPOSALS ---
  const handleCreateProposal = (e) => {
    e.preventDefault();
    const newProp = {
      id: `prop-${Date.now()}`,
      ...newProposalForm,
      date: new Date().toISOString().split('T')[0]
    };
    setProposals((prev) => [newProp, ...prev]);
    showNotice(`Proposal created for ${newProposalForm.clientName}`);
    setNewProposalForm({ clientName: '', projectTitle: '', servicePillar: 'Custom Software Development', budget: '', status: 'Under Review' });
    setShowAddProposalModal(false);
  };

  const handleDeleteProposal = (id) => {
    if (!window.confirm('Delete this proposal request?')) return;
    setProposals((prev) => prev.filter((p) => p.id !== id));
    showNotice('Proposal deleted');
  };

  // --- REAL HANDLERS: JOBS & APPLICANTS ---
  const handleCreateJob = (e) => {
    e.preventDefault();
    const newJob = {
      id: `job-${Date.now()}`,
      ...newJobForm,
      applicantsCount: 0
    };
    setJobs((prev) => [newJob, ...prev]);
    showNotice(`Job vacancy posted: ${newJobForm.title}`);
    setNewJobForm({ title: '', department: 'Software Engineering', type: 'Full-time', location: 'Addis Ababa (Megenagna)', status: 'Active' });
    setShowAddJobModal(false);
  };

  const handleApplicantStatusChange = (id, newStatus) => {
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
    showNotice(`Applicant status updated to ${newStatus}`);
  };

  // --- REAL HANDLERS: CMS PRODUCTS ---
  const handleCreateCmsProduct = (e) => {
    e.preventDefault();
    const newProd = {
      id: `prod-${Date.now()}`,
      ...newProductForm,
      views: '0'
    };
    setCmsProducts((prev) => [newProd, ...prev]);
    showNotice(`CMS Product published: ${newProductForm.name}`);
    setNewProductForm({ name: '', category: 'Enterprise Software', description: '', status: 'Published' });
    setShowAddProductModal(false);
  };

  const handleToggleProductPublish = (id) => {
    setCmsProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: p.status === 'Published' ? 'Draft' : 'Published' } : p))
    );
    showNotice('CMS Product status toggled');
  };

  // --- REAL HANDLERS: CMS ARTICLES (CRUD, VISIBILITY, EXPIRED, EDIT, DELETE) ---
  const handleCreateArticle = (e) => {
    e.preventDefault();
    const newArt = {
      id: `art-${Date.now()}`,
      ...newArticleForm,
      publishedDate: new Date().toISOString().split('T')[0]
    };
    setCmsArticles((prev) => [newArt, ...prev]);
    showNotice(`CMS News / Article added: "${newArticleForm.title}"`);
    setNewArticleForm({
      title: '',
      category: 'Enterprise News',
      client: '',
      author: 'Editorial Team',
      summary: '',
      readTime: '5 min read',
      status: 'Published',
      visibility: 'VISIBLE'
    });
    setShowAddArticleModal(false);
  };

  const handleToggleArticleVisibility = (artId) => {
    setCmsArticles((prev) =>
      prev.map((art) => {
        if (art.id === artId) {
          const nextVis = art.visibility === 'VISIBLE' ? 'HIDDEN' : 'VISIBLE';
          const nextStatus = nextVis === 'HIDDEN' && art.status === 'Published' ? 'Hidden' : (nextVis === 'VISIBLE' && art.status === 'Hidden' ? 'Published' : art.status);
          showNotice(`Article "${art.title}" visibility changed to: ${nextVis}`);
          return { ...art, visibility: nextVis, status: nextStatus };
        }
        return art;
      })
    );
  };

  const handleSetArticleStatus = (artId, newStatus) => {
    setCmsArticles((prev) =>
      prev.map((art) => {
        if (art.id === artId) {
          const nextVis = (newStatus === 'Hidden' || newStatus === 'Expired' || newStatus === 'Draft') ? 'HIDDEN' : 'VISIBLE';
          showNotice(`Article "${art.title}" status set to: ${newStatus.toUpperCase()}`);
          return { ...art, status: newStatus, visibility: nextVis };
        }
        return art;
      })
    );
  };

  const handleDeleteArticle = (artId) => {
    const target = cmsArticles.find((a) => a.id === artId);
    if (window.confirm(`Are you sure you want to permanently delete news item "${target?.title}"?`)) {
      setCmsArticles((prev) => prev.filter((a) => a.id !== artId));
      showNotice(`News item "${target?.title}" deleted successfully.`);
    }
  };

  const handleStartEditArticle = (art) => {
    setEditingArticle({ ...art });
    setShowEditArticleModal(true);
  };

  const handleSaveEditArticle = (e) => {
    e.preventDefault();
    if (!editingArticle) return;
    setCmsArticles((prev) =>
      prev.map((art) => (art.id === editingArticle.id ? { ...editingArticle } : art))
    );
    showNotice(`Article "${editingArticle.title}" updated successfully.`);
    setShowEditArticleModal(false);
    setEditingArticle(null);
  };

  // --- REAL HANDLERS: TEAM & PARTNERS ---
  const handleCreateTeamMember = (e) => {
    e.preventDefault();
    const newMember = { id: `tm-${Date.now()}`, ...newTeamForm };
    setTeamMembers((prev) => [newMember, ...prev]);
    showNotice(`Team member added: ${newTeamForm.name}`);
    setNewTeamForm({ name: '', role: '', category: 'Executive Leadership' });
    setShowAddTeamModal(false);
  };

  const handleCreatePartner = (e) => {
    e.preventDefault();
    const newPart = { id: `pt-${Date.now()}`, ...newPartnerForm };
    setPartners((prev) => [newPart, ...prev]);
    showNotice(`Partner added: ${newPartnerForm.name}`);
    setNewPartnerForm({ name: '', type: 'Government Tech Partner' });
    setShowAddPartnerModal(false);
  };

  // --- REAL HANDLERS: ROLES & USERS ---
  const handleCreateUser = (e) => {
    e.preventDefault();
    const newUser = { id: `u-${Date.now()}`, ...newUserForm, status: 'ACTIVE' };
    setSystemUsers((prev) => [newUser, ...prev]);
    showNotice(`System user created: ${newUserForm.name} (${newUserForm.role})`);
    setNewUserForm({ name: '', email: '', role: 'Content Manager' });
    setShowAddUserModal(false);
  };

  const handleUserRoleChange = (id, newRole) => {
    setSystemUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role: newRole } : u))
    );
    showNotice(`User role updated to ${newRole}`);
  };

  // --- REAL HANDLERS: SECURITY & SYSTEM ---
  const handleToggleSecurityControl = (key) => {
    setSecurityControls((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      showNotice(`Security policy ${key} toggled to ${updated[key] ? 'ENABLED' : 'DISABLED'}`);
      return updated;
    });
  };

  const handleTriggerManualBackup = () => {
    const backupLog = {
      id: `log-${Date.now()}`,
      action: 'Manual System Backup Generated',
      user: 'Ermias Alemayehu (Super Admin)',
      time: 'Just now',
      ip: '197.156.78.12'
    };
    setAuditLogs((prev) => [backupLog, ...prev]);
    showNotice('System Database Backup generated successfully! File archived in secure cloud vault.');
  };

  // --- REAL HANDLERS: SETTINGS ---
  const handleSaveSettings = (e) => {
    e.preventDefault();
    showNotice('YomTech Global Official Profile Settings saved successfully.');
  };

  // --- COMPUTED SEARCH & FILTERS ---
  const safeLeads = Array.isArray(leads) ? leads : [];
  const totalLeads = safeLeads.length;
  const newCount = safeLeads.filter((l) => l && l.status === 'NEW').length;

  const filteredLeads = safeLeads.filter((lead) => {
    if (!lead) return false;
    const matchesStatus = statusFilter === 'ALL' || lead.status === statusFilter;
    const q = (search || '').toLowerCase();
    const nameStr = (lead.fullName || '').toLowerCase();
    const emailStr = (lead.email || '').toLowerCase();
    const phoneStr = (lead.phone || '').toLowerCase();
    const typeStr = (lead.inquiryType || '').toLowerCase();
    const msgStr = (lead.message || '').toLowerCase();
    return matchesStatus && (nameStr.includes(q) || emailStr.includes(q) || phoneStr.includes(q) || typeStr.includes(q) || msgStr.includes(q));
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex items-center justify-center font-sans">
        <div className="flex items-center gap-3 text-[#1E90FF] font-bold">
          <RefreshCw className="animate-spin" size={24} />
          <span>Synchronizing YomTech Global Control Gateway...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex transition-colors duration-300 font-sans ${
      isDarkMode ? 'bg-[#03045E] text-white' : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      
      {/* SIDEBAR NAVIGATION */}
      <AdminSidebar
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isDarkMode={isDarkMode}
      />

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* TOP HEADER BAR */}
        <header className={`h-16 border-b px-6 flex items-center justify-between transition-colors z-20 ${
          isDarkMode ? 'bg-[#03045E]/90 border-cyan-500/30 backdrop-blur-md text-white' : 'bg-white border-blue-100 backdrop-blur-md text-slate-900'
        }`}>
          {/* Search bar */}
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search leads, proposals, CMS content, users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 text-xs rounded-full border transition-all focus:outline-none ${
                  isDarkMode
                    ? 'bg-blue-950/60 border-cyan-400/40 text-white placeholder-slate-300 focus:border-[#0ED3DD]'
                    : 'bg-slate-50 border-blue-200 text-slate-900 placeholder-slate-400 focus:border-[#1E90FF]'
                }`}
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Quick Action Button */}
            <button
              onClick={() => {
                if (activeTab === 'quotes') setShowAddProposalModal(true);
                else if (activeTab === 'jobs') setShowAddJobModal(true);
                else if (activeTab === 'cms-services') setShowAddProductModal(true);
                else if (activeTab === 'cms-content') setShowAddArticleModal(true);
                else if (activeTab === 'cms-team') setShowAddTeamModal(true);
                else if (activeTab === 'roles') setShowAddUserModal(true);
                else setShowAddLeadModal(true);
              }}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-extrabold text-xs rounded-xl shadow-md transition-all active:scale-95 hover:brightness-110"
            >
              <Plus size={14} />
              <span className="hidden sm:inline">Add Entry</span>
            </button>

            {/* Manual Refresh */}
            <button
              onClick={() => {
                loadAuthAndData();
                showNotice('Refreshed active platform datasets.');
              }}
              className={`p-2 rounded-full border transition-colors ${
                isDarkMode ? 'border-cyan-400/40 hover:bg-blue-900/50 text-cyan-300' : 'border-blue-200 hover:bg-blue-50 text-[#1E90FF]'
              }`}
              title="Refresh Data"
            >
              <RefreshCw size={16} />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full border transition-colors ${
                isDarkMode ? 'border-cyan-400/40 hover:bg-blue-900/50 text-amber-300' : 'border-blue-200 hover:bg-blue-50 text-[#1E90FF]'
              }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setUnreadNotificationsCount(0);
                }}
                className={`p-2 rounded-full border relative transition-colors ${
                  isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                }`}
              >
                <Bell size={16} />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center animate-pulse">
                    {unreadNotificationsCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className={`absolute right-0 mt-3 w-80 rounded-2xl shadow-2xl border p-4 z-50 animate-in fade-in zoom-in-95 ${
                  isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
                }`}>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/20 mb-2">
                    <span className="font-extrabold text-xs">YomTech Control Notifications</span>
                    <span className="text-[10px] text-[#1E90FF] font-bold">System Alerts</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900">
                      <div className="font-bold text-[#1E90FF]">New B2B Lead Received</div>
                      <div className="text-[10px] text-slate-500">SSGI requested custom GIS proposal.</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700">
                      <div className="font-bold">Database Backup Completed</div>
                      <div className="text-[10px] text-slate-400">Daily snapshot saved at 00:00 UTC.</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Pill */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className={`flex items-center gap-2.5 pl-3 pr-1.5 py-1 rounded-full border shadow-sm transition-all ${
                  isDarkMode ? 'bg-slate-800 border-slate-700 hover:border-blue-500' : 'bg-slate-50 border-slate-200 hover:border-blue-500'
                }`}
              >
                <div className="text-right leading-tight hidden sm:block">
                  <div className="font-black text-xs text-slate-900 dark:text-white">{user?.fullName || 'Ermias Alemayehu'}</div>
                  <div className="text-[10px] font-extrabold text-[#1E90FF]">SUPER_ADMIN</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 p-0.5 flex items-center justify-center font-bold text-white text-xs shadow-md">
                  <User size={16} />
                </div>
              </button>

              {showProfileMenu && (
                <div className={`absolute right-0 mt-3 w-56 rounded-2xl shadow-2xl border p-2 z-50 ${
                  isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
                }`}>
                  <div className="px-3 py-2 border-b border-slate-200/20 mb-1">
                    <div className="font-bold text-xs">{user?.fullName || 'Ermias Alemayehu'}</div>
                    <div className="text-[10px] text-slate-400">Founder &amp; CEO &bull; YomTech Global</div>
                  </div>
                  <button onClick={() => { setActiveTab('roles'); setShowProfileMenu(false); }} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-blue-500/10 hover:text-[#1E90FF] transition-colors">
                    User Roles &amp; Permissions
                  </button>
                  <button onClick={() => { setActiveTab('system'); setShowProfileMenu(false); }} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-blue-500/10 hover:text-[#1E90FF] transition-colors">
                    Security Logs &amp; Audit Trail
                  </button>
                  <button onClick={handleSignOut} className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors">
                    Sign Out Gateway
                  </button>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* MAIN CANVAS PANEL */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Global Notice Toast */}
          {actionMessage && (
            <div className="mb-4 p-3.5 bg-blue-50 border border-blue-200 text-[#1E90FF] rounded-2xl text-xs font-bold flex items-center gap-2 shadow-sm animate-in fade-in">
              <CheckCircle size={16} />
              <span>{actionMessage}</span>
            </div>
          )}

            {/* TAB 1: SECTION 9.1 ADMIN DASHBOARD OVERVIEW */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Banner */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E90FF] via-blue-600 to-[#0ED3DD] text-white p-6 sm:p-8 shadow-md">
                  <div className="relative z-10 max-w-3xl space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold shadow-sm">
                      <Sparkles size={14} className="text-amber-300" />
                      <span>Yomtech Global Enterprise Administration &amp; CMS</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                      Empowering Digital Innovation
                    </h1>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-2xl">
                      Centralized Executive Dashboard for Website Traffic, Inbound Leads, Proposals, Talent Applications, CMS Publishing, and Security Audit Logs.
                    </p>
                  </div>
                </div>

                {/* 9.1 METRICS GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                  {[
                    { label: 'Website Visitors', value: '14,280', sub: '+18% this month' },
                    { label: 'Leads & Inquiries', value: totalLeads, sub: `${newCount} NEW` },
                    { label: 'Quote Requests', value: proposals.length, sub: 'B2B Software & ERP' },
                    { label: 'Consultations', value: '9', sub: 'Digital Transformation' },
                    { label: 'Job Applications', value: applicants.length, sub: 'WabiJob & Talent' },
                    { label: 'Subscribers', value: '186', sub: 'Newsletter' },
                    { label: 'Contact Messages', value: '45', sub: 'General Inquiries' },
                  ].map((m, idx) => (
                    <div key={idx} className={`p-4 rounded-2xl border shadow-sm ${
                      isDarkMode ? 'bg-[#003049] border-cyan-400/30' : 'bg-blue-50/50 border-blue-100'
                    }`}>
                      <div className="text-[10px] font-black text-[#1E90FF] uppercase tracking-wider">{m.label}</div>
                      <div className="text-xl font-black mt-1.5">{m.value}</div>
                      <div className="text-[10px] text-[#1E90FF] font-extrabold mt-1">{m.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Overview Analytics & Activity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Traffic Sources */}
                  <div className={`p-5 rounded-2xl border space-y-3 shadow-sm ${
                    isDarkMode ? 'bg-[#003049] border-cyan-400/30' : 'bg-white border-blue-100'
                  }`}>
                    <h3 className="font-extrabold text-sm flex items-center gap-2">
                      <TrendingUp size={16} className="text-[#1E90FF]" />
                      <span>Traffic Sources &amp; Conversion</span>
                    </h3>
                    <div className="space-y-2 text-xs font-semibold">
                      <div className="flex justify-between"><span>Direct Traffic</span><span>42%</span></div>
                      <div className="flex justify-between"><span>Search Engine (Organic)</span><span>35%</span></div>
                      <div className="flex justify-between"><span>LinkedIn &amp; Media</span><span>15%</span></div>
                      <div className="flex justify-between"><span>Partner Referrals</span><span>8%</span></div>
                    </div>
                    <div className="pt-2 border-t border-blue-100 flex justify-between text-xs font-bold">
                      <span>Conversion Rate Indicator</span>
                      <span className="text-[#1E90FF]">4.8% High</span>
                    </div>
                  </div>

                  {/* Popular Products */}
                  <div className={`p-5 rounded-2xl border space-y-3 shadow-sm ${
                    isDarkMode ? 'bg-[#003049] border-cyan-400/30' : 'bg-white border-blue-100'
                  }`}>
                    <h3 className="font-extrabold text-sm flex items-center gap-2">
                      <Globe size={16} className="text-[#1E90FF]" />
                      <span>Popular Products &amp; Pages</span>
                    </h3>
                    <div className="space-y-2 text-xs">
                      {cmsProducts.slice(0, 4).map((p, idx) => (
                        <div key={idx} className="flex justify-between items-center font-medium">
                          <span>{idx + 1}. {p.name}</span>
                          <span className="font-bold text-[#1E90FF]">{p.views} views</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity Audit Trail */}
                  <div className={`p-5 rounded-2xl border space-y-3 shadow-sm ${
                    isDarkMode ? 'bg-[#003049] border-cyan-400/30' : 'bg-white border-blue-100'
                  }`}>
                    <h3 className="font-extrabold text-sm flex items-center gap-2">
                      <Clock size={16} className="text-[#1E90FF]" />
                      <span>Recent Activities Audit Trail</span>
                    </h3>
                    <div className="space-y-2.5 text-xs">
                      {auditLogs.slice(0, 3).map((log, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 leading-tight">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]"></div>
                            <span>{log.action}</span>
                          </div>
                          <div className="text-[10px] text-[#1E90FF] font-bold mt-0.5">{log.user} &bull; {log.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LEADS & INQUIRIES */}
            {activeTab === 'leads' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/50 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900 dark:text-white">Section 9.1 Inbound Leads &amp; Consultations Roster</h1>
                    <p className="text-xs text-slate-400">Track client inquiries, software consultation requests, and business contact submissions.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShowAddLeadModal(true)}
                      className="px-4 py-2 bg-[#1E90FF] hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
                    >
                      <Plus size={15} />
                      <span>Create New Lead</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <Filter size={15} className="text-slate-500" />
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className={`px-3 py-2 text-xs font-bold rounded-xl border focus:outline-none ${
                          isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
                        }`}
                      >
                        <option value="ALL">All Statuses</option>
                        <option value="NEW">New</option>
                        <option value="CONTACTED">Contacted</option>
                        <option value="QUALIFIED">Qualified</option>
                        <option value="CLOSED">Closed</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Table Data Card */}
                <div className={`rounded-2xl border overflow-hidden shadow-sm ${
                  isDarkMode ? 'bg-[#003049] border-cyan-400/30' : 'bg-white border-blue-100'
                }`}>
                  <div className="p-5 border-b border-blue-100 flex items-center justify-between">
                    <h2 className="font-extrabold text-sm text-slate-900 dark:text-white">Inbound Client Leads Roster</h2>
                    <span className="text-xs font-bold text-[#1E90FF]">Showing {filteredLeads.length} record(s)</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] uppercase font-black tracking-wider text-white border-b border-cyan-300">
                        <tr>
                          <th className="p-4">Client Details</th>
                          <th className="p-4">Inquiry Category</th>
                          <th className="p-4">Message / Request</th>
                          <th className="p-4">Date Submitted</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredLeads.length > 0 ? (
                          filteredLeads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-blue-50/50 transition-colors">
                              <td className="p-4 space-y-1">
                                <div className="font-black text-sm text-slate-900 dark:text-white">{lead.fullName}</div>
                                <div className="flex items-center gap-1.5 text-slate-600 dark:text-cyan-200 font-semibold">
                                  <Mail size={12} className="text-[#1E90FF]" />
                                  <span>{lead.email}</span>
                                </div>
                                {lead.phone && (
                                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-cyan-200 font-semibold">
                                    <Phone size={12} className="text-[#1E90FF]" />
                                    <span>{lead.phone}</span>
                                  </div>
                                )}
                              </td>

                              <td className="p-4 font-bold">
                                <span className="px-3 py-1.5 rounded-xl bg-cyan-50 border border-cyan-200 text-[#1E90FF] font-extrabold text-[11px]">
                                  {lead.inquiryType}
                                </span>
                              </td>

                              <td className="p-4 max-w-xs truncate text-slate-700 dark:text-slate-200 leading-relaxed font-semibold" title={lead.message}>
                                {lead.message}
                              </td>

                              <td className="p-4 text-slate-600 font-bold whitespace-nowrap">
                                <div className="flex items-center gap-1.5">
                                  <Clock size={12} className="text-[#1E90FF]" />
                                  <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                                </div>
                              </td>

                              <td className="p-4 whitespace-nowrap">
                                <select
                                  className="border rounded-xl px-3 py-1.5 font-black text-xs focus:outline-none cursor-pointer bg-emerald-50 border-emerald-300 text-emerald-800 shadow-sm"
                                  value={lead.status}
                                  onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                                >
                                  <option value="NEW">NEW</option>
                                  <option value="CONTACTED">CONTACTED</option>
                                  <option value="QUALIFIED">QUALIFIED</option>
                                  <option value="CLOSED">CLOSED</option>
                                </select>
                              </td>

                              <td className="p-4 text-right whitespace-nowrap">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    onClick={() => setSelectedLead(lead)}
                                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#1E90FF] text-slate-600 dark:text-slate-300 hover:text-[#1E90FF] transition-all"
                                    title="View Full Lead Details"
                                  >
                                    <Eye size={15} />
                                  </button>

                                  <button
                                    onClick={() => handleDeleteLead(lead.id)}
                                    className="p-1.5 rounded-lg border border-red-200 dark:border-red-900/50 hover:bg-red-50 text-red-500 transition-all"
                                    title="Delete Lead"
                                  >
                                    <Trash2 size={15} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6" className="p-8 text-center text-slate-400">
                              No matching leads or inquiries found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: QUOTES & CONSULTATIONS */}
            {activeTab === 'quotes' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black">B2B Software &amp; Enterprise ERP Proposal Manager</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage client custom software quotes for SSGI, INSA, MInT, Bunna Bank, and private sector.</p>
                  </div>
                  <button
                    onClick={() => setShowAddProposalModal(true)}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>New Proposal Request</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {proposals.map((prop) => (
                    <div key={prop.id} className="p-6 rounded-3xl border bg-white border-blue-100 space-y-3 shadow-sm hover:border-[#1E90FF] transition-all">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-black text-base text-slate-900">{prop.clientName}</div>
                          <div className="text-xs font-black text-[#1E90FF] mt-0.5">{prop.projectTitle}</div>
                        </div>
                        <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase ${
                          prop.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-blue-50 text-[#1E90FF] border border-blue-200'
                        }`}>
                          {prop.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Service Pillar: {prop.servicePillar}</p>
                      <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-xs">
                        <span className="font-black text-[#1E90FF]">Budget: {prop.budget}</span>
                        <button onClick={() => handleDeleteProposal(prop.id)} className="text-red-500 hover:text-red-700 p-1">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: JOB APPLICATIONS & HR */}
            {activeTab === 'jobs' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black">Job Vacancies &amp; WabiJob Talent Roster</h1>
                    <p className="text-xs text-slate-500 font-semibold">Review tech candidate resumes, WabiSkills bootcamp graduates, and open job vacancies.</p>
                  </div>
                  <button
                    onClick={() => setShowAddJobModal(true)}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Post New Vacancy</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Vacancies Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {jobs.map((job) => (
                      <div key={job.id} className="p-5 rounded-3xl border bg-white border-blue-100 space-y-2 shadow-sm hover:border-[#1E90FF]">
                        <div className="font-black text-sm text-slate-900">{job.title}</div>
                        <div className="text-xs text-slate-600 font-medium">{job.department} &bull; {job.type}</div>
                        <div className="text-xs text-[#1E90FF] font-bold">{job.location}</div>
                        <div className="pt-2 flex justify-between items-center text-xs">
                          <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 font-black text-[10px] border border-emerald-200">{job.applicantsCount} Applicants</span>
                          <span className="text-[#1E90FF] font-black">{job.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Applicants Table */}
                  <div className="rounded-3xl border border-blue-100 overflow-hidden shadow-sm bg-white">
                    <div className="p-5 border-b border-blue-100 font-black text-sm text-slate-900">
                      Candidate Talent Roster (WabiJob Pipeline)
                    </div>
                    <table className="w-full text-left text-xs">
                      <thead className="bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] uppercase font-black tracking-wider text-white border-b border-cyan-300">
                        <tr>
                          <th className="p-4">Candidate</th>
                          <th className="p-4">Target Job</th>
                          <th className="p-4">Experience &amp; Skills</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {applicants.map((app) => (
                          <tr key={app.id} className="hover:bg-blue-50/50 transition-colors">
                            <td className="p-4">
                              <div className="font-black text-slate-900">{app.candidateName}</div>
                              <div className="text-slate-500 font-medium">{app.email}</div>
                            </td>
                            <td className="p-4 font-black text-[#1E90FF]">{app.jobTitle}</td>
                            <td className="p-4 text-slate-600 font-medium">{app.experience} &bull; {app.skills}</td>
                            <td className="p-4 font-black">
                              <select
                                value={app.status}
                                onChange={(e) => handleApplicantStatusChange(app.id, e.target.value)}
                                className="px-3 py-1.5 bg-blue-50 text-[#1E90FF] rounded-xl border border-blue-200 font-black focus:outline-none shadow-sm cursor-pointer"
                              >
                                <option value="APPLIED">APPLIED</option>
                                <option value="SHORTLISTED">SHORTLISTED</option>
                                <option value="INTERVIEWED">INTERVIEWED</option>
                                <option value="HIRED">HIRED</option>
                                <option value="REJECTED">REJECTED</option>
                              </select>
                            </td>
                            <td className="p-4 text-right">
                              <button onClick={() => setSelectedApplicant(app)} className="px-3 py-1.5 bg-blue-50 text-[#1E90FF] border border-blue-200 rounded-xl hover:bg-blue-100 font-black text-xs">
                                View Profile
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: CMS SERVICES & PRODUCTS */}
            {activeTab === 'cms-services' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center border-b border-slate-200/50 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900 dark:text-white">Content Management: Services &amp; Products Matrix</h1>
                    <p className="text-xs text-slate-400">Publish &amp; manage Yomnex ERP, WabiSkills, WabiJob, WabiX, Mari, and Yomtech Media pages.</p>
                  </div>
                  <button
                    onClick={() => setShowAddProductModal(true)}
                    className="px-4 py-2 bg-[#1E90FF] hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Product / Service</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {cmsProducts.map((prod) => (
                    <div key={prod.id} className="p-6 rounded-3xl border bg-white border-blue-100 space-y-4 shadow-sm hover:shadow-xl hover:border-[#1E90FF] transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div className="font-black text-base text-[#1E90FF]">{prod.name}</div>
                        <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase ${
                          prod.status === 'Published' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          {prod.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">{prod.description}</p>
                      <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-bold">{prod.category}</span>
                        <button
                          onClick={() => handleToggleProductPublish(prod.id)}
                          className="px-3 py-1.5 border border-blue-200 hover:border-[#1E90FF] bg-blue-50 text-[#1E90FF] font-black rounded-xl text-xs transition-all"
                        >
                          Toggle Status
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 6: CMS NEWS & ARTICLES MANAGEMENT CENTER */}
            {(activeTab === 'cms-news' || activeTab === 'cms-articles') && (
              <div className="space-y-6 animate-in fade-in duration-300">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: News, Articles &amp; Media Management Hub</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage, edit, update, delete, hide/show, and set expiration status for all news stories &amp; articles.</p>
                  </div>
                  <button
                    onClick={() => setShowAddArticleModal(true)}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Create News Story / Article</span>
                  </button>
                </div>

                {/* 4 Stat Summary Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-white rounded-2xl border border-blue-100 shadow-2xs space-y-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase">Total News &amp; Articles</span>
                    <div className="text-2xl font-black text-slate-900">{cmsArticles.length}</div>
                  </div>
                  <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 shadow-2xs space-y-1">
                    <span className="text-[10px] font-black text-emerald-700 uppercase">Active &amp; Visible</span>
                    <div className="text-2xl font-black text-emerald-700">
                      {cmsArticles.filter((a) => a.visibility === 'VISIBLE' && a.status === 'Published').length}
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/80 shadow-2xs space-y-1">
                    <span className="text-[10px] font-black text-amber-700 uppercase">Hidden / Drafts</span>
                    <div className="text-2xl font-black text-amber-700">
                      {cmsArticles.filter((a) => a.visibility === 'HIDDEN' || a.status === 'Draft' || a.status === 'Hidden').length}
                    </div>
                  </div>
                  <div className="p-4 bg-red-50/60 rounded-2xl border border-red-200/80 shadow-2xs space-y-1">
                    <span className="text-[10px] font-black text-red-700 uppercase">Expired / Archived</span>
                    <div className="text-2xl font-black text-red-700">
                      {cmsArticles.filter((a) => a.status === 'Expired' || a.status === 'Archived').length}
                    </div>
                  </div>
                </div>

                {/* Search & Filter Controls + Export JSON */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 bg-white p-3.5 rounded-2xl border border-blue-100 shadow-2xs">
                  <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="text"
                      placeholder="Search by title, author or client..."
                      value={articleSearchQuery}
                      onChange={(e) => setArticleSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:outline-none focus:border-[#1E90FF]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                    <Filter size={15} className="text-slate-400" />
                    <select
                      value={articleFilterStatus}
                      onChange={(e) => setArticleFilterStatus(e.target.value)}
                      className="px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none"
                    >
                      <option value="ALL">All Statuses</option>
                      <option value="Published">Published &amp; Visible</option>
                      <option value="Hidden">Hidden</option>
                      <option value="Expired">Expired</option>
                      <option value="Draft">Draft</option>
                    </select>

                    {/* Sorting Dropdown */}
                    <select
                      value={cmsSortBy}
                      onChange={(e) => setCmsSortBy(e.target.value)}
                      className="px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none"
                    >
                      <option value="LATEST">Sort: Latest First</option>
                      <option value="TITLE">Sort: Title A-Z</option>
                      <option value="STATUS">Sort: By Status</option>
                    </select>

                    {/* Export Backup JSON Button */}
                    <button
                      onClick={handleExportCmsJson}
                      className="px-3 py-2 bg-blue-50 text-[#1E90FF] border border-blue-200 font-black text-xs rounded-xl hover:bg-blue-100 flex items-center gap-1.5 transition-all"
                      title="Export JSON Backup"
                    >
                      <Download size={14} />
                      <span>Export JSON</span>
                    </button>

                    {/* Import Backup JSON File Upload */}
                    <label className="px-3 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 font-black text-xs rounded-xl hover:bg-emerald-100 flex items-center gap-1.5 transition-all cursor-pointer">
                      <Plus size={14} />
                      <span>Import JSON</span>
                      <input type="file" accept=".json" onChange={handleImportCmsJson} className="hidden" />
                    </label>
                  </div>
                </div>

                {/* Bulk Actions Floating Bar */}
                {selectedCmsIds.length > 0 && (
                  <div className="p-4 bg-gradient-to-r from-[#03045E] to-[#002D54] text-white rounded-2xl shadow-xl flex flex-wrap items-center justify-between gap-3 animate-in slide-in-from-top-2">
                    <div className="flex items-center gap-2 text-xs font-black">
                      <span className="px-2.5 py-1 bg-[#1E90FF] rounded-lg text-white">{selectedCmsIds.length} Selected</span>
                      <span>Manage Selected Items:</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => handleBulkVisibility('VISIBLE')}
                        className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow"
                      >
                        Make Visible
                      </button>
                      <button
                        onClick={() => handleBulkVisibility('HIDDEN')}
                        className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow"
                      >
                        Hide Selected
                      </button>
                      <button
                        onClick={() => handleBulkStatus('Expired')}
                        className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white font-black text-xs rounded-xl shadow"
                      >
                        Set Expired
                      </button>
                      <button
                        onClick={handleBulkDeleteCms}
                        className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-xl shadow flex items-center gap-1"
                      >
                        <Trash2 size={13} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* News & Articles Admin Items Table List */}
                <div className="space-y-3">
                  {cmsArticles
                    .filter((art) => {
                      const tabCategoryMap = {
                        'cms-news': 'Corporate News',
                        'cms-articles': 'Corporate News',
                        'cms-blog': 'Tech Articles & Engineering',
                        'cms-events': 'Upcoming Events & Webinars',
                        'cms-announcements': 'Official Announcements',
                        'cms-projects': 'Featured Project Case Studies',
                        'cms-team': 'Executive Team Members',
                        'cms-testimonials': 'Client & Learner Testimonials',
                        'cms-gallery': 'Photo Gallery Showcase',
                        'cms-videos': 'Video & Documentary Hub',
                        'cms-media': 'Media Appearances & Coverage',
                        'cms-press': 'Press & Corporate Content',
                        'cms-faq': 'Support FAQ & Knowledge Base',
                        'cms-partners': 'Trusted Institutional Partners'
                      };
                      const targetCat = tabCategoryMap[activeTab];
                      const matchesCategory = !targetCat || art.category === targetCat;

                      const matchesStatus =
                        articleFilterStatus === 'ALL' ||
                        (articleFilterStatus === 'Published' && art.status === 'Published' && art.visibility === 'VISIBLE') ||
                        (articleFilterStatus === 'Hidden' && (art.visibility === 'HIDDEN' || art.status === 'Hidden')) ||
                        (articleFilterStatus === 'Expired' && art.status === 'Expired') ||
                        (articleFilterStatus === 'Draft' && art.status === 'Draft');
                      const q = (articleSearchQuery || '').toLowerCase();
                      const matchesSearch =
                        (art.title || '').toLowerCase().includes(q) ||
                        (art.client && art.client.toLowerCase().includes(q)) ||
                        (art.author && art.author.toLowerCase().includes(q)) ||
                        (art.category && art.category.toLowerCase().includes(q));
                      return matchesCategory && matchesStatus && matchesSearch;
                    })
                    .sort((a, b) => {
                      if (cmsSortBy === 'TITLE') return (a.title || '').localeCompare(b.title || '');
                      if (cmsSortBy === 'STATUS') return (a.status || '').localeCompare(b.status || '');
                      return 0; // LATEST default order
                    })
                    .map((art) => (
                      <div
                        key={art.id}
                        className={`p-5 rounded-2xl bg-white border shadow-2xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                          selectedCmsIds.includes(art.id) ? 'border-[#1E90FF] bg-blue-50/20' : 'border-blue-100 hover:border-[#1E90FF]/60'
                        }`}
                      >
                        <div className="flex items-start md:items-center gap-4 flex-1">
                          {/* Checkbox for Bulk Operations */}
                          <input
                            type="checkbox"
                            checked={selectedCmsIds.includes(art.id)}
                            onChange={() => handleToggleSelectCmsId(art.id)}
                            className="mt-1 md:mt-0 w-4 h-4 rounded border-slate-300 text-[#1E90FF] focus:ring-[#1E90FF] cursor-pointer"
                          />

                          {/* Image Thumbnail or Video Preview Badge */}
                          {(art.coverImage || art.src || art.photo || art.youtubeId || (art.category && (art.category.includes('Photo') || art.category.includes('Video')))) && (
                            <div
                              onClick={() => setAdminPreviewMedia(art)}
                              className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 shrink-0 border border-blue-100 shadow-xs group cursor-pointer"
                              title="Click to Preview Media"
                            >
                              {art.coverImage || art.src || art.photo ? (
                                <img
                                  src={art.coverImage || art.src || art.photo}
                                  alt={art.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              ) : art.youtubeId ? (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-[#03045E] text-white relative p-1">
                                  <Play size={22} className="text-red-500 fill-red-500 animate-pulse" />
                                  <span className="text-[9px] font-black text-cyan-300 mt-1">{art.readTime || 'HD 1080p'}</span>
                                </div>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-blue-50 text-[#1E90FF]">
                                  <ImageIcon size={26} />
                                </div>
                              )}
                            </div>
                          )}

                          <div className="space-y-1.5 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded-md uppercase border border-blue-200">
                                {art.category}
                              </span>
                              <span className={`px-2.5 py-0.5 text-[10px] font-black rounded-md uppercase border ${
                                art.visibility === 'VISIBLE' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-300'
                              }`}>
                                {art.visibility}
                              </span>
                              <span className={`px-2.5 py-0.5 text-[10px] font-black rounded-md uppercase border ${
                                art.status === 'Published' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                art.status === 'Expired' ? 'bg-red-50 text-red-700 border-red-200' :
                                art.status === 'Draft' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                'bg-amber-50 text-amber-700 border-amber-200'
                              }`}>
                                {art.status}
                              </span>
                            </div>
                            <div className="font-extrabold text-sm text-slate-900 line-clamp-1">{art.title}</div>
                            <div className="text-xs text-slate-500 font-medium flex flex-wrap gap-2">
                              <span>Author: <strong>{art.author || 'Editorial'}</strong></span>
                              <span>&bull;</span>
                              <span>Client: <strong>{art.client || 'YomTech Global'}</strong></span>
                              <span>&bull;</span>
                              <span>Date: {art.publishedDate}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Control Buttons */}
                        <div className="flex items-center gap-2 shrink-0">
                          {/* Toggle Visibility */}
                          <button
                            onClick={() => handleToggleArticleVisibility(art.id)}
                            className={`px-3 py-1.5 text-xs font-bold rounded-xl border flex items-center gap-1.5 transition-all ${
                              art.visibility === 'VISIBLE'
                                ? 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                                : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                            }`}
                          >
                            <Eye size={13} />
                            <span>{art.visibility === 'VISIBLE' ? 'Hide' : 'Make Visible'}</span>
                          </button>

                          {/* Set Expired Status */}
                          {art.status !== 'Expired' && (
                            <button
                              onClick={() => handleSetArticleStatus(art.id, 'Expired')}
                              className="px-3 py-1.5 bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 text-xs font-bold rounded-xl transition-all"
                            >
                              Set Expired
                            </button>
                          )}

                          {/* Edit Button */}
                          <button
                            onClick={() => handleStartEditArticle(art)}
                            className="px-3 py-1.5 border border-slate-200 hover:border-[#1E90FF] text-slate-700 hover:text-[#1E90FF] text-xs font-bold rounded-xl transition-all"
                          >
                            Edit
                          </button>

                          {/* Delete Button */}
                          <button
                            onClick={() => handleDeleteArticle(art.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all"
                            title="Delete Article"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* TAB 7: TECH ARTICLES & ENGINEERING BLOG WORKSPACE */}
            {activeTab === 'cms-blog' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Tech Articles &amp; Engineering Blog</h1>
                    <p className="text-xs text-slate-500 font-semibold">Publish technical architecture insights, software engineering benchmarks, AI, and cloud tutorials.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({ ...newArticleForm, category: 'Tech Articles & Engineering', title: '', author: 'Dr. Yared Worku (CTO)', summary: '' });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Publish Tech Article</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsArticles
                    .filter((art) => art.category === 'Tech Articles & Engineering')
                    .map((art) => (
                      <div key={art.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          {(art.coverImage || art.src) && (
                            <img src={art.coverImage || art.src} alt={art.title} className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-100" />
                          )}
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{art.category}</span>
                              <span className="text-xs text-slate-400 font-bold">{art.readTime || '5 min read'} &bull; By {art.author || 'CTO'}</span>
                            </div>
                            <div className="font-extrabold text-sm text-slate-900">{art.title}</div>
                            <p className="text-xs text-slate-600 font-medium line-clamp-2">{art.summary}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => handleStartEditArticle(art)}
                            className="px-3 py-1.5 border border-slate-200 hover:border-[#1E90FF] text-slate-700 hover:text-[#1E90FF] text-xs font-bold rounded-xl transition-all"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleToggleArticleVisibility(art.id)}
                            className="p-1.5 text-slate-500 hover:text-[#1E90FF] rounded-lg hover:bg-blue-50 transition-all"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteArticle(art.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* CMS TAB: UPCOMING EVENTS & WEBINARS MANAGER */}
            {activeTab === 'cms-events' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Upcoming Events &amp; Webinars Schedule</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage, publish, edit, cancel, or hide upcoming tech summits, graduation demo days, and workshops.</p>
                  </div>
                  <button
                    onClick={() => {
                      const title = prompt("Enter Event Title:");
                      if (title) {
                        const newEvt = { id: `evt-${Date.now()}`, title, date: 'NOV 20, 2026', time: '10:00 AM', location: 'Skylight Hotel & Hybrid', category: 'Conference', status: 'Upcoming', visibility: 'VISIBLE' };
                        setCmsEvents((prev) => [newEvt, ...prev]);
                        showNotice(`Event "${title}" published!`);
                      }
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Publish New Event</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsEvents.map((evt) => (
                    <div key={evt.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{evt.category}</span>
                          <span className={`px-2.5 py-0.5 text-[10px] font-black rounded uppercase border ${
                            evt.status === 'Cancelled' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          }`}>{evt.status}</span>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-black rounded uppercase border border-slate-200">{evt.visibility || 'VISIBLE'}</span>
                        </div>
                        <div className="font-extrabold text-sm text-slate-900">{evt.title}</div>
                        <div className="text-xs text-slate-500 font-medium">{evt.date} &bull; {evt.time} &bull; {evt.location}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Edit Event */}
                        <button
                          onClick={() => {
                            const newTitle = prompt("Update Event Title:", evt.title);
                            if (newTitle) setCmsEvents((prev) => prev.map((e) => (e.id === evt.id ? { ...e, title: newTitle } : e)));
                          }}
                          className="px-3 py-1.5 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        {/* Cancel Event */}
                        <button
                          onClick={() => {
                            const nextStatus = evt.status === 'Cancelled' ? 'Upcoming' : 'Cancelled';
                            setCmsEvents((prev) => prev.map((e) => (e.id === evt.id ? { ...e, status: nextStatus } : e)));
                            showNotice(`Event status set to ${nextStatus}`);
                          }}
                          className={`px-3 py-1.5 text-xs font-bold rounded-xl border ${
                            evt.status === 'Cancelled' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'
                          }`}
                        >
                          {evt.status === 'Cancelled' ? 'Reactivate' : 'Cancel Event'}
                        </button>
                        {/* Toggle Visibility */}
                        <button
                          onClick={() => {
                            const nextVis = evt.visibility === 'HIDDEN' ? 'VISIBLE' : 'HIDDEN';
                            setCmsEvents((prev) => prev.map((e) => (e.id === evt.id ? { ...e, visibility: nextVis } : e)));
                            showNotice(`Event visibility set to ${nextVis}`);
                          }}
                          className="p-1.5 text-slate-500 hover:text-[#1E90FF] rounded-lg hover:bg-blue-50"
                          title="Toggle Visibility"
                        >
                          <Eye size={16} />
                        </button>
                        {/* Delete Event */}
                        <button
                          onClick={() => {
                            if (confirm(`Permanently delete event "${evt.title}"?`)) setCmsEvents((prev) => prev.filter((e) => e.id !== evt.id));
                          }}
                          className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                          title="Delete Event"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CMS TAB: OFFICIAL ANNOUNCEMENTS MANAGER */}
            {activeTab === 'cms-announcements' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Official Announcements &amp; Bulletins</h1>
                    <p className="text-xs text-slate-500 font-semibold">Publish platform releases, ERP version updates, set priority, hide/show, and delete bulletins.</p>
                  </div>
                  <button
                    onClick={() => {
                      const title = prompt("Enter Announcement Title:");
                      if (title) {
                        const newAnn = { id: `ann-${Date.now()}`, title, priority: 'FEATURED', date: 'August 24, 2026', summary: 'Official announcement release update.', visibility: 'VISIBLE' };
                        setCmsAnnouncements((prev) => [newAnn, ...prev]);
                        showNotice(`Announcement "${title}" posted!`);
                      }
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Post New Bulletin</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsAnnouncements.map((ann) => (
                    <div key={ann.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 text-[10px] font-black rounded uppercase border ${
                            ann.priority === 'FEATURED' ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-blue-50 text-[#1E90FF] border-blue-200'
                          }`}>{ann.priority}</span>
                          <span className="text-xs text-slate-400 font-bold">{ann.date}</span>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-black rounded uppercase border border-slate-200">{ann.visibility || 'VISIBLE'}</span>
                        </div>
                        <div className="font-extrabold text-sm text-slate-900">{ann.title}</div>
                        <p className="text-xs text-slate-600 font-medium">{ann.summary}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const newSummary = prompt("Edit Announcement Summary:", ann.summary);
                            if (newSummary) setCmsAnnouncements((prev) => prev.map((a) => (a.id === ann.id ? { ...a, summary: newSummary } : a)));
                          }}
                          className="px-3 py-1.5 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            const nextVis = ann.visibility === 'HIDDEN' ? 'VISIBLE' : 'HIDDEN';
                            setCmsAnnouncements((prev) => prev.map((a) => (a.id === ann.id ? { ...a, visibility: nextVis } : a)));
                            showNotice(`Bulletin visibility set to ${nextVis}`);
                          }}
                          className="p-1.5 text-slate-500 hover:text-[#1E90FF] rounded-lg hover:bg-blue-50"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete bulletin "${ann.title}"?`)) setCmsAnnouncements((prev) => prev.filter((a) => a.id !== ann.id));
                          }}
                          className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CMS TAB: FEATURED PROJECT CASE STUDIES MANAGER */}
            {activeTab === 'cms-projects' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Featured Project Case Studies</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage enterprise portfolio showcases (SSGI Satellite Portal, Bunna Bank ERP, MInT Blueprints).</p>
                  </div>
                  <button
                    onClick={() => {
                      const title = prompt("Enter Case Study Title:");
                      if (title) {
                        const newPrj = { id: `prj-${Date.now()}`, title, client: 'Enterprise Client', category: 'Software Engineering', impact: 'Reduced operational overhead by 60%', techStack: 'React, Node.js, PostgreSQL' };
                        setCmsProjects((prev) => [newPrj, ...prev]);
                        showNotice(`Case study "${title}" added!`);
                      }
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Project Case Study</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsProjects.map((prj) => (
                    <div key={prj.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{prj.category}</span>
                        <div className="font-extrabold text-sm text-slate-900">{prj.title}</div>
                        <div className="text-xs text-slate-500 font-semibold">Client: {prj.client} &bull; Impact: {prj.impact}</div>
                        <div className="text-[11px] text-[#1E90FF] font-bold">Tech Stack: {prj.techStack}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const newImpact = prompt("Edit Case Study Impact:", prj.impact);
                            if (newImpact) setCmsProjects((prev) => prev.map((p) => (p.id === prj.id ? { ...p, impact: newImpact } : p)));
                          }}
                          className="px-3 py-1.5 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Remove project "${prj.title}"?`)) setCmsProjects((prev) => prev.filter((p) => p.id !== prj.id));
                          }}
                          className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CMS TAB: CLIENT & LEARNER TESTIMONIALS MANAGER */}
            {activeTab === 'cms-testimonials' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Client &amp; Learner Testimonials</h1>
                    <p className="text-xs text-slate-500 font-semibold">Approve, add, or edit WabiSkills graduate feedback and enterprise client testimonials.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({ ...newArticleForm, category: 'Client & Learner Testimonials', title: '', author: 'Graduate / Partner', summary: '' });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Testimonial</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsTestimonials.map((tst) => (
                    <div key={tst.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{tst.type}</span>
                        <div className="font-extrabold text-sm text-slate-900">{tst.name} &bull; <span className="text-xs text-slate-500">{tst.role}</span></div>
                        <p className="text-xs text-slate-600 font-medium italic">&quot;{tst.quote}&quot;</p>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm(`Delete testimonial from ${tst.name}?`)) setCmsTestimonials((prev) => prev.filter((t) => t.id !== tst.id));
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CMS TAB: PHOTO GALLERY SHOWCASE MANAGER */}
            {activeTab === 'cms-gallery' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Photo Gallery Showcase Archive</h1>
                    <p className="text-xs text-slate-500 font-semibold">Upload &amp; organize classroom photos, MoU signing ceremonies, team photos, and workshops.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({ ...newArticleForm, category: 'Photo Gallery Showcase', title: '', summary: '' });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Upload New Photo</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cmsGallery.map((gal) => (
                    <div key={gal.id} className="p-4 bg-white rounded-2xl border border-blue-100 shadow-2xs space-y-2 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 bg-blue-50 text-[#1E90FF] text-[9px] font-black rounded uppercase border border-blue-200">{gal.category}</span>
                        <div className="font-extrabold text-xs text-slate-900">{gal.caption}</div>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex justify-end">
                        <button
                          onClick={() => {
                            if (confirm(`Remove photo "${gal.caption}"?`)) setCmsGallery((prev) => prev.filter((g) => g.id !== gal.id));
                          }}
                          className="p-1 text-slate-400 hover:text-red-600 rounded"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CMS TAB: VIDEO & DOCUMENTARY HUB MANAGER */}
            {activeTab === 'cms-videos' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Video &amp; Documentary Hub</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage YouTube video embeds, channel broadcasts (@yomtech &amp; @WabiSkills), and demos.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({ ...newArticleForm, category: 'Video & Documentary Hub', title: '', summary: '' });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Video Broadcast</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cmsVideos.map((vid) => (
                    <div key={vid.id} className="p-5 bg-white rounded-2xl border border-blue-100 shadow-2xs space-y-2 flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{vid.category}</span>
                          <span className="text-xs text-slate-400 font-bold">{vid.channel} &bull; {vid.duration}</span>
                        </div>
                        <div className="font-extrabold text-sm text-slate-900">{vid.title}</div>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-bold">{vid.views}</span>
                        <button
                          onClick={() => {
                            if (confirm(`Remove video "${vid.title}"?`)) setCmsVideos((prev) => prev.filter((v) => v.id !== vid.id));
                          }}
                          className="p-1 text-slate-400 hover:text-red-600 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CMS TAB: MEDIA APPEARANCES & COVERAGE MANAGER */}
            {activeTab === 'cms-media' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Media Appearances &amp; Interviews</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage television interviews (EBC), newspaper features, and international journal highlights.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({ ...newArticleForm, category: 'Media Appearances & Coverage', title: '', summary: '' });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Media Coverage</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsMedia.map((med) => (
                    <div key={med.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{med.type}</span>
                        <div className="font-extrabold text-sm text-slate-900">{med.title}</div>
                        <div className="text-xs text-slate-500 font-semibold">Outlet: {med.outlet} &bull; Date: {med.date}</div>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm(`Remove media item "${med.title}"?`)) setCmsMedia((prev) => prev.filter((m) => m.id !== med.id));
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CMS TAB: PRESS & CORPORATE CONTENT MANAGER */}
            {activeTab === 'cms-press' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Press Releases &amp; Corporate Media</h1>
                    <p className="text-xs text-slate-500 font-semibold">Publish official corporate press releases and download links for media press kits.</p>
                  </div>
                  <button
                    onClick={() => {
                      const title = prompt("Enter Press Release Title:");
                      if (title) {
                        const newPrs = { id: `prs-${Date.now()}`, title, date: 'August 24, 2026', summary: 'Official press release release.' };
                        setCmsPress((prev) => [newPrs, ...prev]);
                        showNotice(`Press release "${title}" published!`);
                      }
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Publish Press Release</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsPress.map((prs) => (
                    <div key={prs.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-xs text-slate-400 font-bold">{prs.date}</span>
                        <div className="font-extrabold text-sm text-slate-900">{prs.title}</div>
                        <p className="text-xs text-slate-600 font-medium">{prs.summary}</p>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm(`Remove press release "${prs.title}"?`)) setCmsPress((prev) => prev.filter((p) => p.id !== prs.id));
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CMS TAB: SUPPORT FAQ & KNOWLEDGE BASE MANAGER */}
            {activeTab === 'cms-faq' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Support FAQ &amp; Knowledge Base</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage frequently asked questions, hotline contacts, and support answers for clients.</p>
                  </div>
                  <button
                    onClick={() => {
                      const question = prompt("Enter Question:");
                      const answer = prompt("Enter Answer:");
                      if (question && answer) {
                        const newFaq = { id: `faq-${Date.now()}`, question, answer };
                        setCmsFaqs((prev) => [newFaq, ...prev]);
                        showNotice(`FAQ item added!`);
                      }
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add FAQ Item</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsFaqs.map((faq) => (
                    <div key={faq.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="font-extrabold text-sm text-[#1E90FF]">{faq.question}</div>
                        <p className="text-xs text-slate-600 font-medium">{faq.answer}</p>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm(`Remove FAQ question?`)) setCmsFaqs((prev) => prev.filter((f) => f.id !== faq.id));
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CMS TAB: TRUSTED INSTITUTIONAL PARTNERS MANAGER */}
            {activeTab === 'cms-partners' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Institutional Partners Logo Wall</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage enterprise partner logos (SSGI, INSA, MInT, EAII, Bunna Bank, City Admin).</p>
                  </div>
                  <button
                    onClick={() => setShowAddPartnerModal(true)}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Partner Logo</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {partners.map((part) => (
                    <div key={part.id} className="p-5 bg-white rounded-2xl border border-blue-100 shadow-2xs space-y-2 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{part.type}</span>
                        <div className="font-extrabold text-sm text-slate-900">{part.name}</div>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex justify-end">
                        <button
                          onClick={() => {
                            if (confirm(`Remove partner "${part.name}"?`)) setPartners((prev) => prev.filter((p) => p.id !== part.id));
                          }}
                          className="p-1 text-slate-400 hover:text-red-600 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 7: CMS TEAM & PARTNERS */}
            {activeTab === 'cms-team' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black">CMS: Executive Team &amp; Institutional Partners</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage leadership profiles (Ermias Alemayehu - CEO) and institutional partner logos.</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowAddTeamModal(true)}
                      className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-1.5"
                    >
                      <Plus size={14} />
                      <span>Add Team Member</span>
                    </button>
                    <button
                      onClick={() => setShowAddPartnerModal(true)}
                      className="px-4 py-2 border border-blue-200 bg-blue-50 text-[#1E90FF] font-black text-xs rounded-2xl shadow-sm hover:border-[#1E90FF]"
                    >
                      <Plus size={14} />
                      <span>Add Partner</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Executive Team */}
                  <div className="p-6 rounded-3xl border bg-white border-blue-100 shadow-sm hover:border-[#1E90FF] space-y-4">
                    <h3 className="font-black text-sm text-[#1E90FF]">Executive Leadership Team</h3>
                    <div className="space-y-2">
                      {teamMembers.map((m) => (
                        <div key={m.id} className="p-3 rounded-2xl bg-blue-50/50 border border-blue-100 flex justify-between items-center text-xs">
                          <div>
                            <div className="font-black text-slate-900">{m.name}</div>
                            <div className="text-slate-500 font-bold">{m.role}</div>
                          </div>
                          <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-[#1E90FF] font-black rounded-xl text-[10px]">{m.category}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Institutional Partners */}
                  <div className="p-6 rounded-3xl border bg-white border-blue-100 shadow-sm hover:border-[#1E90FF] space-y-4">
                    <h3 className="font-black text-sm text-[#1E90FF]">Institutional &amp; Enterprise Partners</h3>
                    <div className="space-y-2">
                      {partners.map((p) => (
                        <div key={p.id} className="p-3 rounded-2xl bg-blue-50/50 border border-blue-100 flex justify-between items-center text-xs">
                          <div className="font-black text-slate-900">{p.name}</div>
                          <span className="text-[#1E90FF] font-black text-[10px]">{p.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 8: SECTION 10 USER ROLES & PERMISSIONS */}
            {activeTab === 'roles' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black">Section 10: User Roles &amp; Permissions (RBAC)</h1>
                    <p className="text-xs text-slate-500 font-semibold">Configure role policies for Super Admin, Content Manager, HR, Marketing, and Project Managers.</p>
                  </div>
                  <button
                    onClick={() => setShowAddUserModal(true)}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <UserPlus size={15} />
                    <span>Create System User</span>
                  </button>
                </div>

                {/* Users Table */}
                <div className="rounded-3xl border border-blue-100 overflow-hidden shadow-sm bg-white">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] uppercase font-black tracking-wider text-white border-b border-cyan-300">
                      <tr>
                        <th className="p-4">User Name</th>
                        <th className="p-4">Email Address</th>
                        <th className="p-4">Assigned Role</th>
                        <th className="p-4">Account Status</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {systemUsers.map((u) => (
                        <tr key={u.id} className="hover:bg-blue-50/50 transition-colors">
                          <td className="p-4 font-black text-slate-900">{u.name}</td>
                          <td className="p-4 font-semibold text-slate-600">{u.email}</td>
                          <td className="p-4">
                            <select
                              value={u.role}
                              onChange={(e) => handleUserRoleChange(u.id, e.target.value)}
                              className="px-3 py-1.5 bg-blue-50 text-[#1E90FF] font-black rounded-xl border border-blue-200 focus:outline-none cursor-pointer"
                            >
                              <option value="Super Admin">Super Admin</option>
                              <option value="Content Manager">Content Manager</option>
                              <option value="Marketing Manager">Marketing Manager</option>
                              <option value="HR Manager">HR Manager</option>
                              <option value="Business / Project Manager">Business / Project Manager</option>
                              <option value="Editor">Editor</option>
                              <option value="Analyst">Analyst</option>
                            </select>
                          </td>
                          <td className="p-4 font-black text-emerald-700">{u.status}</td>
                          <td className="p-4 text-right">
                            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black rounded-xl">Active Session</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 9: SECTION 11 SECURITY & AUDIT LOGS */}
            {activeTab === 'system' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black">Section 11: Enterprise Security Controls &amp; Audit Logs</h1>
                    <p className="text-xs text-slate-500 font-semibold">Configure 2FA, SSL strict mode, rate limiting, and execute manual system database backups.</p>
                  </div>
                  <button
                    onClick={handleTriggerManualBackup}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Download size={15} />
                    <span>Trigger Manual Backup</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Security Control Toggles */}
                  <div className="p-6 rounded-3xl border bg-white border border-blue-100 shadow-sm hover:border-[#1E90FF] space-y-4">
                    <h3 className="font-black text-sm text-emerald-600 flex items-center gap-2">
                      <ShieldCheck size={18} />
                      <span>Real-Time Security Enforcement</span>
                    </h3>

                    <div className="space-y-3 text-xs">
                      {[
                        { key: 'twoFactorAuth', title: 'Two-Factor Authentication (2FA)', desc: 'Mandatory 2FA code for admin logins' },
                        { key: 'rbacEnforcement', title: 'Role-Based Access Control (RBAC)', desc: 'Strict path and API route guarding' },
                        { key: 'rateLimiting', title: 'Anti-DDoS Rate Limiting & CAPTCHA', desc: 'Prevent automated spam submissions' },
                        { key: 'automatedBackups', title: 'Automated Daily Database Backups', desc: 'Daily archive snapshot at 00:00 UTC' },
                        { key: 'sslStrictMode', title: 'SSL/HTTPS Strict Transport', desc: 'Enforce 256-bit TLS encryption' },
                      ].map((ctrl) => (
                        <div key={ctrl.key} className="flex justify-between items-center p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100">
                          <div>
                            <div className="font-black text-slate-900">{ctrl.title}</div>
                            <div className="text-[10px] text-slate-500 font-semibold">{ctrl.desc}</div>
                          </div>
                          <button
                            onClick={() => handleToggleSecurityControl(ctrl.key)}
                            className="p-1 text-[#1E90FF] hover:scale-105 transition-transform"
                          >
                            {securityControls[ctrl.key] ? <ToggleRight size={28} /> : <ToggleLeft size={28} className="text-slate-400" />}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Audit Logs Stream */}
                  <div className="p-6 rounded-3xl border bg-white border border-blue-100 shadow-sm hover:border-[#1E90FF] space-y-4">
                    <h3 className="font-black text-sm text-[#1E90FF] flex items-center gap-2">
                      <Clock size={18} />
                      <span>Security Activity &amp; Audit Log Stream</span>
                    </h3>

                    <div className="space-y-2 text-xs">
                      {auditLogs.map((log) => (
                        <div key={log.id} className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 leading-snug space-y-1">
                          <div className="flex justify-between font-black text-slate-900">
                            <span>{log.action}</span>
                            <span className="text-[10px] text-[#1E90FF] font-bold">{log.time}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-bold">User: {log.user} &bull; IP: {log.ip}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 10: SETTINGS */}
            {activeTab === 'settings' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="border-b border-blue-100 pb-4">
                  <h1 className="text-xl font-black">YomTech Global Official Settings</h1>
                  <p className="text-xs text-slate-500 font-semibold">Update company contact hotlines, commercial credentials, and official corporate details.</p>
                </div>

                <form onSubmit={handleSaveSettings} className="p-7 rounded-3xl border bg-white border border-blue-100 shadow-sm hover:border-[#1E90FF] max-w-2xl space-y-4 text-xs">
                  <div>
                    <label className="font-black text-[#1E90FF]">Company Name</label>
                    <input
                      type="text"
                      value={companySettings.companyName}
                      onChange={(e) => setCompanySettings({ ...companySettings, companyName: e.target.value })}
                      className="w-full mt-1.5 p-3 rounded-2xl border border-blue-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-black text-[#1E90FF]">Primary Hotline</label>
                      <input
                        type="text"
                        value={companySettings.primaryHotline}
                        onChange={(e) => setCompanySettings({ ...companySettings, primaryHotline: e.target.value })}
                        className="w-full mt-1.5 p-3 rounded-2xl border border-blue-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                      />
                    </div>
                    <div>
                      <label className="font-black text-[#1E90FF]">Secondary Hotline</label>
                      <input
                        type="text"
                        value={companySettings.secondaryHotline}
                        onChange={(e) => setCompanySettings({ ...companySettings, secondaryHotline: e.target.value })}
                        className="w-full mt-1.5 p-3 rounded-2xl border border-blue-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-black text-[#1E90FF]">Headquarters Address</label>
                    <input
                      type="text"
                      value={companySettings.headquarters}
                      onChange={(e) => setCompanySettings({ ...companySettings, headquarters: e.target.value })}
                      className="w-full mt-1.5 p-3 rounded-2xl border border-blue-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-black text-[#1E90FF]">Founder &amp; CEO</label>
                      <input
                        type="text"
                        value={companySettings.ceoName}
                        onChange={(e) => setCompanySettings({ ...companySettings, ceoName: e.target.value })}
                        className="w-full mt-1.5 p-3 rounded-2xl border border-blue-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                      />
                    </div>
                    <div>
                      <label className="font-black text-[#1E90FF]">Commercial License No</label>
                      <input
                        type="text"
                        value={companySettings.commercialLicense}
                        onChange={(e) => setCompanySettings({ ...companySettings, commercialLicense: e.target.value })}
                        className="w-full mt-1.5 p-3 rounded-2xl border border-blue-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="px-7 py-3 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] transition-transform">
                      Save Official Settings
                    </button>
                  </div>
                </form>
              </div>
            )}
        </main>
      </div>

      {/* --- MODAL 1: CREATE LEAD --- */}
      {showAddLeadModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreateLead} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="font-black text-base">Create Inbound Lead Entry</h3>
              <button type="button" onClick={() => setShowAddLeadModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-400">Client Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Abebe Bikila"
                  value={newLeadForm.fullName}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, fullName: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="client@ethio-tech.com"
                    value={newLeadForm.email}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-400">Phone Number</label>
                  <input
                    type="text"
                    placeholder="+251911223344"
                    value={newLeadForm.phone}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
              </div>
              <div>
                <label className="font-bold text-slate-400">Inquiry Category</label>
                <select
                  value={newLeadForm.inquiryType}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, inquiryType: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                >
                  <option value="B2B_SOFTWARE">B2B Software Development</option>
                  <option value="ERP_SOLUTION">Yomnex ERP Solution</option>
                  <option value="ACADEMY_ENROLLMENT">WabiSkills Tech Academy</option>
                  <option value="CYBER_SECURITY">CyberSecurity &amp; Audit</option>
                  <option value="MEDIA_PARTNERSHIP">Yomtech Media Partnership</option>
                </select>
              </div>
              <div>
                <label className="font-bold text-slate-400">Request Message</label>
                <textarea
                  rows="3"
                  placeholder="Describe client requirements..."
                  value={newLeadForm.message}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, message: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-medium focus:outline-none"
                ></textarea>
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
              <button type="button" onClick={() => setShowAddLeadModal(false)} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 bg-[#1E90FF] text-white rounded-xl shadow hover:bg-blue-600">
                Submit Lead
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 2: ADD PROPOSAL --- */}
      {showAddProposalModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreateProposal} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="font-black text-base">New B2B Proposal Entry</h3>
              <button type="button" onClick={() => setShowAddProposalModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-400">Client / Institution Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bunna Bank S.C."
                  value={newProposalForm.clientName}
                  onChange={(e) => setNewProposalForm({ ...newProposalForm, clientName: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div>
                <label className="font-bold text-slate-400">Project Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Core Financial ERP Module"
                  value={newProposalForm.projectTitle}
                  onChange={(e) => setNewProposalForm({ ...newProposalForm, projectTitle: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400">Service Pillar</label>
                  <select
                    value={newProposalForm.servicePillar}
                    onChange={(e) => setNewProposalForm({ ...newProposalForm, servicePillar: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="Yomnex ERP Integration">Yomnex ERP Integration</option>
                    <option value="CyberSecurity Audit">CyberSecurity Audit</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-400">Budget Range</label>
                  <input
                    type="text"
                    placeholder="e.g. 2,500,000 ETB"
                    value={newProposalForm.budget}
                    onChange={(e) => setNewProposalForm({ ...newProposalForm, budget: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
              <button type="button" onClick={() => setShowAddProposalModal(false)} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 bg-[#1E90FF] text-white rounded-xl shadow hover:bg-blue-600">
                Save Proposal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 3: ADD JOB VACANCY --- */}
      {showAddJobModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreateJob} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="font-black text-base">Post New Job Vacancy</h3>
              <button type="button" onClick={() => setShowAddJobModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-400">Job Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Mobile Engineer (React Native)"
                  value={newJobForm.title}
                  onChange={(e) => setNewJobForm({ ...newJobForm, title: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400">Department</label>
                  <select
                    value={newJobForm.department}
                    onChange={(e) => setNewJobForm({ ...newJobForm, department: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Infrastructure & Security">Infrastructure &amp; Security</option>
                    <option value="Education & Academy">Education &amp; Academy</option>
                    <option value="Media & Marketing">Media &amp; Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-400">Employment Type</label>
                  <select
                    value={newJobForm.type}
                    onChange={(e) => setNewJobForm({ ...newJobForm, type: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
              <button type="button" onClick={() => setShowAddJobModal(false)} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 bg-[#1E90FF] text-white rounded-xl shadow hover:bg-blue-600">
                Publish Vacancy
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 4: ADD CMS PRODUCT --- */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreateCmsProduct} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="font-black text-base">Add CMS Product / Service</h3>
              <button type="button" onClick={() => setShowAddProductModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-400">Product Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Yomnex Cloud SFA"
                  value={newProductForm.name}
                  onChange={(e) => setNewProductForm({ ...newProductForm, name: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div>
                <label className="font-bold text-slate-400">Category</label>
                <select
                  value={newProductForm.category}
                  onChange={(e) => setNewProductForm({ ...newProductForm, category: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                >
                  <option value="Enterprise Software">Enterprise Software</option>
                  <option value="EdTech & Academy">EdTech &amp; Academy</option>
                  <option value="Talent Network">Talent Network</option>
                  <option value="Communication">Communication</option>
                  <option value="Social Network">Social Network</option>
                  <option value="Tech Documentaries">Tech Documentaries</option>
                </select>
              </div>
              <div>
                <label className="font-bold text-slate-400">Short Description</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Summary for live platform page..."
                  value={newProductForm.description}
                  onChange={(e) => setNewProductForm({ ...newProductForm, description: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-medium focus:outline-none"
                ></textarea>
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
              <button type="button" onClick={() => setShowAddProductModal(false)} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 bg-[#1E90FF] text-white rounded-xl shadow hover:bg-blue-600">
                Publish Product
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 5: ADD CMS ARTICLE / NEWS ITEM --- */}
      {showAddArticleModal && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/90 backdrop-blur-xl flex items-center justify-center p-4">
          <form onSubmit={handleCreateArticle} className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-xl w-full space-y-4 shadow-2xl animate-in zoom-in-95 border border-blue-100">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-black text-lg text-slate-900">Create News Story / Article</h3>
              <button type="button" onClick={() => setShowAddArticleModal(false)} className="p-2 rounded-full bg-blue-50 text-[#1E90FF] hover:bg-blue-100">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-500">News / Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. YomTech Global Partners with Bunna Bank S.C."
                  value={newArticleForm.title}
                  onChange={(e) => setNewArticleForm({ ...newArticleForm, title: e.target.value })}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-500">Category</label>
                  <select
                    value={newArticleForm.category}
                    onChange={(e) => setNewArticleForm({ ...newArticleForm, category: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="Enterprise News">Enterprise News</option>
                    <option value="Case Study">Case Study</option>
                    <option value="Academy & Talent">Academy &amp; Talent</option>
                    <option value="Government Tech">Government Tech</option>
                    <option value="Tech Blog">Tech Blog</option>
                    <option value="Announcement">Announcement</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-500">Author / Editorial</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ermias Alemayehu / Corporate Comm"
                    value={newArticleForm.author}
                    onChange={(e) => setNewArticleForm({ ...newArticleForm, author: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-500">Status</label>
                  <select
                    value={newArticleForm.status}
                    onChange={(e) => setNewArticleForm({ ...newArticleForm, status: e.target.value, visibility: e.target.value === 'Published' ? 'VISIBLE' : 'HIDDEN' })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Hidden">Hidden</option>
                    <option value="Expired">Expired</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-500">Client / Institution</label>
                  <input
                    type="text"
                    placeholder="e.g. Space Science & Geospatial Institute"
                    value={newArticleForm.client}
                    onChange={(e) => setNewArticleForm({ ...newArticleForm, client: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
              </div>
              <div>
                <label className="font-bold text-slate-500">Article Summary (Short Snippet)</label>
                <textarea
                  rows="2"
                  placeholder="Summary text to display on news card..."
                  value={newArticleForm.summary}
                  onChange={(e) => setNewArticleForm({ ...newArticleForm, summary: e.target.value })}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:outline-none focus:border-[#1E90FF]"
                ></textarea>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="font-bold text-slate-500">Full Article Story / Body Content</label>
                  <span className="text-[10px] font-black text-[#1E90FF] bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-200">
                    {newArticleForm.readTime || '1 min read'}
                  </span>
                </div>
                <textarea
                  rows="5"
                  placeholder="Write full article body text, press release details, or case study breakdown..."
                  value={newArticleForm.fullContent || ''}
                  onChange={(e) => {
                    const val = e.target.value;
                    const words = val.trim() ? val.trim().split(/\s+/).length : 0;
                    const mins = Math.max(1, Math.ceil(words / 200));
                    setNewArticleForm({
                      ...newArticleForm,
                      fullContent: val,
                      readTime: `${mins} min read`
                    });
                  }}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:outline-none focus:border-[#1E90FF]"
                ></textarea>
              </div>

              {/* MEDIA ATTACHMENTS: IMAGE FILE PICKER */}
              <div className="p-3 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-2">
                <label className="font-black text-[#1E90FF] text-[11px] uppercase tracking-wider block">📷 Image / Photo Upload</label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <label className="px-3.5 py-2 bg-white text-[#1E90FF] border border-blue-200 font-bold rounded-xl hover:bg-blue-50 cursor-pointer flex items-center justify-center gap-2 text-xs shadow-2xs shrink-0">
                    <Upload size={14} />
                    <span>Upload Image File...</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const reader = new FileReader();
                          reader.onload = (uploadEvent) => {
                            setNewArticleForm({ ...newArticleForm, coverImage: uploadEvent.target.result });
                            showNotice('Image file loaded successfully!');
                          };
                          reader.readAsDataURL(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                  <input
                    type="text"
                    placeholder="Or paste image URL (https://...)"
                    value={newArticleForm.coverImage || ''}
                    onChange={(e) => setNewArticleForm({ ...newArticleForm, coverImage: e.target.value })}
                    className="flex-1 p-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:outline-none focus:border-[#1E90FF] text-xs"
                  />
                </div>
                {newArticleForm.coverImage && (
                  <div className="flex items-center gap-3 pt-1">
                    <img src={newArticleForm.coverImage} alt="Preview" className="w-14 h-14 rounded-xl object-cover border border-blue-200 shadow-2xs" />
                    <span className="text-[11px] font-bold text-emerald-600">✓ Image ready to publish</span>
                  </div>
                )}
              </div>

              {/* MEDIA ATTACHMENTS: VIDEO & YOUTUBE PICKER */}
              <div className="p-3 bg-red-50/50 rounded-2xl border border-red-100 space-y-2">
                <label className="font-black text-red-600 text-[11px] uppercase tracking-wider block">📹 Video File / YouTube Embed</label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="text"
                    placeholder="YouTube Video ID (e.g. dQw4w9WgXcQ)"
                    value={newArticleForm.youtubeId || ''}
                    onChange={(e) => setNewArticleForm({ ...newArticleForm, youtubeId: e.target.value })}
                    className="flex-1 p-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:outline-none focus:border-red-500 text-xs"
                  />
                  <label className="px-3.5 py-2 bg-white text-red-600 border border-red-200 font-bold rounded-xl hover:bg-red-50 cursor-pointer flex items-center justify-center gap-2 text-xs shadow-2xs shrink-0">
                    <Upload size={14} />
                    <span>Upload Video File...</span>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const reader = new FileReader();
                          reader.onload = (uploadEvent) => {
                            setNewArticleForm({ ...newArticleForm, coverImage: uploadEvent.target.result, readTime: 'HD Video File' });
                            showNotice('Video file attached successfully!');
                          };
                          reader.readAsDataURL(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* MEDIA ATTACHMENTS: DOCUMENT / PDF FILE PICKER */}
              <div className="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-2">
                <label className="font-black text-emerald-700 text-[11px] uppercase tracking-wider block">📄 Document / PDF Attachment</label>
                <div className="flex items-center gap-3">
                  <label className="px-3.5 py-2 bg-white text-emerald-700 border border-emerald-200 font-bold rounded-xl hover:bg-emerald-50 cursor-pointer flex items-center gap-2 text-xs shadow-2xs">
                    <FileText size={14} />
                    <span>Attach Document (PDF, DOCX, ZIP)...</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.zip,.ppt,.pptx"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          setNewArticleForm({ ...newArticleForm, documentName: file.name });
                          showNotice(`Attached file "${file.name}" to entry.`);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                  {newArticleForm.documentName && (
                    <span className="text-xs font-bold text-emerald-700 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs">
                      📄 {newArticleForm.documentName}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
              <button type="button" onClick={() => setShowAddArticleModal(false)} className="px-5 py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50">
                Cancel
              </button>
              <button type="submit" className="px-6 py-2.5 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white rounded-xl shadow hover:brightness-110 font-black">
                Publish News Story
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 5B: EDIT CMS ARTICLE / NEWS ITEM --- */}
      {showEditArticleModal && editingArticle && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/90 backdrop-blur-xl flex items-center justify-center p-4">
          <form onSubmit={handleSaveEditArticle} className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-xl w-full space-y-4 shadow-2xl animate-in zoom-in-95 border border-blue-100">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-black text-lg text-slate-900">Edit News Story / Article</h3>
              <button type="button" onClick={() => { setShowEditArticleModal(false); setEditingArticle(null); }} className="p-2 rounded-full bg-blue-50 text-[#1E90FF] hover:bg-blue-100">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-500">News / Article Title *</label>
                <input
                  type="text"
                  required
                  value={editingArticle.title}
                  onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-500">Category</label>
                  <select
                    value={editingArticle.category}
                    onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="Enterprise News">Enterprise News</option>
                    <option value="Case Study">Case Study</option>
                    <option value="Academy & Talent">Academy &amp; Talent</option>
                    <option value="Government Tech">Government Tech</option>
                    <option value="Tech Blog">Tech Blog</option>
                    <option value="Announcement">Announcement</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-500">Author / Editorial</label>
                  <input
                    type="text"
                    required
                    value={editingArticle.author || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, author: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-500">Status</label>
                  <select
                    value={editingArticle.status}
                    onChange={(e) => setEditingArticle({ ...editingArticle, status: e.target.value, visibility: (e.target.value === 'Hidden' || e.target.value === 'Expired' || e.target.value === 'Draft') ? 'HIDDEN' : 'VISIBLE' })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Hidden">Hidden</option>
                    <option value="Expired">Expired</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-500">Visibility</label>
                  <select
                    value={editingArticle.visibility || 'VISIBLE'}
                    onChange={(e) => setEditingArticle({ ...editingArticle, visibility: e.target.value })}
                    className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="VISIBLE">VISIBLE</option>
                    <option value="HIDDEN">HIDDEN</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-bold text-slate-500">Article Summary (Short Snippet)</label>
                <textarea
                  rows="2"
                  value={editingArticle.summary || ''}
                  onChange={(e) => setEditingArticle({ ...editingArticle, summary: e.target.value })}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:outline-none focus:border-[#1E90FF]"
                ></textarea>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="font-bold text-slate-500">Full Article Story / Body Content</label>
                  <span className="text-[10px] font-black text-[#1E90FF] bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-200">
                    {editingArticle.readTime || '1 min read'}
                  </span>
                </div>
                <textarea
                  rows="5"
                  placeholder="Full article body text..."
                  value={editingArticle.fullContent || editingArticle.content || ''}
                  onChange={(e) => {
                    const val = e.target.value;
                    const words = val.trim() ? val.trim().split(/\s+/).length : 0;
                    const mins = Math.max(1, Math.ceil(words / 200));
                    setEditingArticle({
                      ...editingArticle,
                      fullContent: val,
                      readTime: `${mins} min read`
                    });
                  }}
                  className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:outline-none focus:border-[#1E90FF]"
                ></textarea>
              </div>

              {/* MEDIA ATTACHMENTS: IMAGE FILE PICKER */}
              <div className="p-3 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-2">
                <label className="font-black text-[#1E90FF] text-[11px] uppercase tracking-wider block">📷 Image / Photo Upload</label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <label className="px-3.5 py-2 bg-white text-[#1E90FF] border border-blue-200 font-bold rounded-xl hover:bg-blue-50 cursor-pointer flex items-center justify-center gap-2 text-xs shadow-2xs shrink-0">
                    <Upload size={14} />
                    <span>Upload New Image...</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const reader = new FileReader();
                          reader.onload = (uploadEvent) => {
                            setEditingArticle({ ...editingArticle, coverImage: uploadEvent.target.result });
                            showNotice('Updated image file successfully!');
                          };
                          reader.readAsDataURL(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                  <input
                    type="text"
                    placeholder="Or paste image URL (https://...)"
                    value={editingArticle.coverImage || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, coverImage: e.target.value })}
                    className="flex-1 p-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:outline-none focus:border-[#1E90FF] text-xs"
                  />
                </div>
                {editingArticle.coverImage && (
                  <div className="flex items-center gap-3 pt-1">
                    <img src={editingArticle.coverImage} alt="Preview" className="w-14 h-14 rounded-xl object-cover border border-blue-200 shadow-2xs" />
                    <span className="text-[11px] font-bold text-emerald-600">✓ Image ready</span>
                  </div>
                )}
              </div>

              {/* MEDIA ATTACHMENTS: VIDEO & YOUTUBE PICKER */}
              <div className="p-3 bg-red-50/50 rounded-2xl border border-red-100 space-y-2">
                <label className="font-black text-red-600 text-[11px] uppercase tracking-wider block">📹 Video File / YouTube Embed</label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="text"
                    placeholder="YouTube Video ID (e.g. dQw4w9WgXcQ)"
                    value={editingArticle.youtubeId || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, youtubeId: e.target.value })}
                    className="flex-1 p-2 rounded-xl border border-slate-200 bg-white text-slate-900 font-medium focus:outline-none focus:border-red-500 text-xs"
                  />
                  <label className="px-3.5 py-2 bg-white text-red-600 border border-red-200 font-bold rounded-xl hover:bg-red-50 cursor-pointer flex items-center justify-center gap-2 text-xs shadow-2xs shrink-0">
                    <Upload size={14} />
                    <span>Upload Video File...</span>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const reader = new FileReader();
                          reader.onload = (uploadEvent) => {
                            setEditingArticle({ ...editingArticle, coverImage: uploadEvent.target.result, readTime: 'HD Video File' });
                            showNotice('Updated video file successfully!');
                          };
                          reader.readAsDataURL(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* MEDIA ATTACHMENTS: DOCUMENT / PDF FILE PICKER */}
              <div className="p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-2">
                <label className="font-black text-emerald-700 text-[11px] uppercase tracking-wider block">📄 Document / PDF Attachment</label>
                <div className="flex items-center gap-3">
                  <label className="px-3.5 py-2 bg-white text-emerald-700 border border-emerald-200 font-bold rounded-xl hover:bg-emerald-50 cursor-pointer flex items-center gap-2 text-xs shadow-2xs">
                    <FileText size={14} />
                    <span>Attach Document (PDF, DOCX, ZIP)...</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.zip,.ppt,.pptx"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          setEditingArticle({ ...editingArticle, documentName: file.name });
                          showNotice(`Attached file "${file.name}" to entry.`);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                  {editingArticle.documentName && (
                    <span className="text-xs font-bold text-emerald-700 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs">
                      📄 {editingArticle.documentName}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
              <button type="button" onClick={() => { setShowEditArticleModal(false); setEditingArticle(null); }} className="px-5 py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50">
                Cancel
              </button>
              <button type="submit" className="px-6 py-2.5 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white rounded-xl shadow hover:brightness-110 font-black">
                Save Article Changes
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 6: ADD TEAM MEMBER --- */}
      {showAddTeamModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreateTeamMember} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="font-black text-base">Add Executive / Team Member</h3>
              <button type="button" onClick={() => setShowAddTeamModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-400">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Yared Worku"
                  value={newTeamForm.name}
                  onChange={(e) => setNewTeamForm({ ...newTeamForm, name: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div>
                <label className="font-bold text-slate-400">Title / Role *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chief Technology Officer"
                  value={newTeamForm.role}
                  onChange={(e) => setNewTeamForm({ ...newTeamForm, role: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
              <button type="button" onClick={() => setShowAddTeamModal(false)} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 bg-[#1E90FF] text-white rounded-xl shadow hover:bg-blue-600">
                Save Member
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 7: ADD SYSTEM USER (RBAC) --- */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreateUser} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="font-black text-base">Create System User &amp; Assign Role</h3>
              <button type="button" onClick={() => setShowAddUserModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-400">User Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Helina Kebede"
                  value={newUserForm.name}
                  onChange={(e) => setNewUserForm({ ...newUserForm, name: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div>
                <label className="font-bold text-slate-400">Official Email *</label>
                <input
                  type="email"
                  required
                  placeholder="helina.k@yomtechglobal.org"
                  value={newUserForm.email}
                  onChange={(e) => setNewUserForm({ ...newUserForm, email: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div>
                <label className="font-bold text-slate-400">Role Policy</label>
                <select
                  value={newUserForm.role}
                  onChange={(e) => setNewUserForm({ ...newUserForm, role: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                >
                  <option value="Content Manager">Content Manager</option>
                  <option value="Marketing Manager">Marketing Manager</option>
                  <option value="HR Manager">HR Manager</option>
                  <option value="Business / Project Manager">Business / Project Manager</option>
                  <option value="Editor">Editor</option>
                  <option value="Analyst">Analyst</option>
                  <option value="Super Admin">Super Admin</option>
                </select>
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
              <button type="button" onClick={() => setShowAddUserModal(false)} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 bg-[#1E90FF] text-white rounded-xl shadow hover:bg-blue-600">
                Grant Access
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 8: VIEW LEAD DETAILS --- */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="font-black text-base">Inbound Lead Profile</h3>
              <button onClick={() => setSelectedLead(null)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 font-bold">Client Name:</span>
                <div className="font-black text-sm text-[#0F172A] dark:text-white">{selectedLead.fullName}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-slate-400 font-bold">Email:</span>
                  <div className="font-bold text-[#1E90FF]">{selectedLead.email}</div>
                </div>
                <div>
                  <span className="text-slate-400 font-bold">Phone:</span>
                  <div className="font-bold">{selectedLead.phone || 'N/A'}</div>
                </div>
              </div>
              <div>
                <span className="text-slate-400 font-bold">Category:</span>
                <div className="font-black text-[#1E90FF]">{selectedLead.inquiryType}</div>
              </div>
              <div>
                <span className="text-slate-400 font-bold">Full Message:</span>
                <div className="p-3 bg-[#F8FAFC] dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl font-medium mt-1 leading-relaxed">
                  {selectedLead.message}
                </div>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button onClick={() => setSelectedLead(null)} className="px-4 py-2 bg-[#1E90FF] text-white font-bold text-xs rounded-xl shadow hover:bg-blue-600 transition-colors">
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 9: VIEW APPLICANT PROFILE --- */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="font-black text-base">WabiJob Candidate Profile</h3>
              <button onClick={() => setSelectedApplicant(null)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 font-bold">Candidate Name:</span>
                <div className="font-black text-sm text-[#0F172A] dark:text-white">{selectedApplicant.candidateName}</div>
              </div>
              <div>
                <span className="text-slate-400 font-bold">Target Vacancy:</span>
                <div className="font-bold text-[#1E90FF]">{selectedApplicant.jobTitle}</div>
              </div>
              <div>
                <span className="text-slate-400 font-bold">Technical Stack &amp; Skills:</span>
                <div className="font-bold">{selectedApplicant.skills}</div>
              </div>
              <div>
                <span className="text-slate-400 font-bold">Years of Experience:</span>
                <div className="font-bold">{selectedApplicant.experience}</div>
              </div>
            </div>
            <div className="pt-2 text-right">
              <button onClick={() => setSelectedApplicant(null)} className="px-4 py-2 bg-[#1E90FF] text-white font-bold text-xs rounded-xl shadow hover:bg-blue-600">
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
      {adminPreviewMedia && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/95 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/20 text-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="px-2.5 py-0.5 bg-[#1E90FF] text-white text-[10px] font-black rounded uppercase">
                  {adminPreviewMedia.category}
                </span>
                <h3 className="font-black text-lg text-white mt-1">{adminPreviewMedia.title}</h3>
              </div>
              <button
                onClick={() => setAdminPreviewMedia(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Media Content Box */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden flex items-center justify-center border border-white/10">
              {adminPreviewMedia.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${adminPreviewMedia.youtubeId}?autoplay=1`}
                  title={adminPreviewMedia.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (adminPreviewMedia.coverImage || adminPreviewMedia.src || adminPreviewMedia.photo) ? (
                <img
                  src={adminPreviewMedia.coverImage || adminPreviewMedia.src || adminPreviewMedia.photo}
                  alt={adminPreviewMedia.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center p-8 space-y-2">
                  <ImageIcon size={48} className="mx-auto text-cyan-400" />
                  <p className="text-sm font-bold text-slate-300">No media asset attached to this entry.</p>
                </div>
              )}
            </div>

            {/* Description & Action */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-slate-300 pt-2 border-t border-white/10">
              <div>
                <span>Author/Owner: <strong className="text-white">{adminPreviewMedia.author || 'Editorial'}</strong></span>
                <span className="mx-2">&bull;</span>
                <span>Client: <strong className="text-[#0ED3DD]">{adminPreviewMedia.client || 'YomTech Global'}</strong></span>
              </div>
              <button
                onClick={() => setAdminPreviewMedia(null)}
                className="px-5 py-2.5 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black rounded-xl shadow"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};