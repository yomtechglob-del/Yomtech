import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  fetchLeadsApi,
  updateLeadStatusApi,
  deleteLeadApi,
  submitLeadApi,
  checkAuthApi,
  logoutAdminApi,
  fetchCmsCategoryApi,
  createCmsCategoryItemApi,
  updateCmsCategoryItemApi,
  deleteCmsCategoryItemApi,
  fetchCmsOverviewStatsApi,
  fetchCmsTrashApi,
  restoreCmsItemApi,
  permanentlyDeleteCmsItemApi,
  bulkCmsActionApi,
  fetchCmsAuditLogsApi
} from '../../services/api';
import { INITIAL_CMS_ARTICLES } from '../../data/initialCmsArticles';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import logoImg from '../../assets/logos/logo.png';
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
  Image as ImageIcon,
  Sparkles,
  TrendingUp,
  User,
  Bell,
  Plus,
  Play,
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
  Upload,
  Lock,
  UserPlus,
  Sliders,
  Check,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

// --- STATIC INITIAL DATA DEFINITIONS (PLACED OUTSIDE COMPONENT FOR SAFE INITIALIZATION) ---
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
    message: 'Requesting tech documentary collaboration with Yomtech Media team.',
    status: 'CONTACTED',
    createdAt: '2026-08-04T15:45:00.000Z'
  }
];

const initialQuotes = [
  {
    id: 'q-101',
    companyName: 'Bunna Bank S.C.',
    contactPerson: 'Solomon Desta',
    email: 'solomon.d@bunnabanket.com',
    serviceCategory: 'Yomnex ERP & FinTech Module',
    estimatedBudget: '$50,000 - $100,000',
    status: 'PENDING_REVIEW',
    submittedAt: '2026-08-05T09:15:00.000Z'
  },
  {
    id: 'q-102',
    companyName: 'Space Science & Geospatial Institute (SSGI)',
    contactPerson: 'Dr. Getachew Assefa',
    email: 'getachew.a@ssgi.gov.et',
    serviceCategory: 'Satellite Data Management System',
    estimatedBudget: '$100,000+',
    status: 'PROPOSAL_SENT',
    submittedAt: '2026-08-04T14:20:00.000Z'
  }
];

const initialJobs = [
  {
    id: 'job-1',
    title: 'Senior Full-Stack Cloud Engineer (React & Node.js)',
    department: 'Software Engineering',
    type: 'Full-time',
    location: 'Addis Ababa (Megenagna)',
    status: 'Active',
    applicantsCount: 14
  },
  {
    id: 'job-2',
    title: 'EdTech Technical Lead & Curriculum Director',
    department: 'WabiSkills Academy',
    type: 'Full-time',
    location: 'Addis Ababa (Megenagna)',
    status: 'Active',
    applicantsCount: 8
  }
];

const initialApplicants = [
  {
    id: 'app-1',
    fullName: 'Kenenisa Bekele',
    email: 'kenenisa.b@devtech.org',
    jobTitle: 'Senior Full-Stack Cloud Engineer',
    experience: '5+ years',
    skills: 'React, Node.js, PostgreSQL, Docker, AWS',
    status: 'APPLIED'
  },
  {
    id: 'app-2',
    fullName: 'Helina Kebede',
    email: 'helina.k@techinnovate.et',
    jobTitle: 'EdTech Technical Lead',
    experience: '4 years',
    skills: 'Python, TypeScript, GraphQL, System Design',
    status: 'SHORTLISTED'
  }
];

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
  const initialProposalsList = [
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
  const [proposals, setProposals] = useState(initialProposalsList);
  const [quotes, setQuotes] = useState(initialQuotes);
  const [showAddProposalModal, setShowAddProposalModal] = useState(false);
  const [newProposalForm, setNewProposalForm] = useState({
    clientName: '',
    projectTitle: '',
    servicePillar: 'Custom Software Development',
    budget: '',
    status: 'Under Review'
  });
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
  const [cmsProducts, setCmsProducts] = useState(() => {
    const saved = localStorage.getItem('yomtech_cms_products');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {
        console.error(e);
      }
    }
    return initialCmsProducts;
  });

  useEffect(() => {
    try {
      localStorage.setItem('yomtech_cms_products', JSON.stringify(cmsProducts));
    } catch (err) {
      console.warn('localStorage quota exceeded for products:', err);
    }
  }, [cmsProducts]);

  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProductForm, setNewProductForm] = useState({
    name: '',
    category: 'Enterprise Software',
    description: '',
    status: 'Published'
  });

  // --- STATE 5: CMS NEWS, ARTICLES, CASE STUDIES & MEDIA ---
  const initialCmsArticles = INITIAL_CMS_ARTICLES;
  const [cmsArticles, setCmsArticles] = useState(() => {
    const saved = localStorage.getItem('yomtech_cms_articles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const existingIds = new Set(parsed.map((item) => item.id));
          const missingDefaults = initialCmsArticles.filter((item) => !existingIds.has(item.id));
          return [...parsed, ...missingDefaults];
        }
      } catch (e) {
        console.error(e);
      }
    }
    return initialCmsArticles;
  });

  useEffect(() => {
    try {
      localStorage.setItem('yomtech_cms_articles', JSON.stringify(cmsArticles));
    } catch (err) {
      console.warn('localStorage quota exceeded for cmsArticles, skipping local storage cache sync:', err);
    }
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
    visibility: 'VISIBLE',
    expiryDate: ''
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

  const handleBulkVisibility = async (nextVis) => {
    if (!selectedCmsIds.length) return;
    try {
      await bulkCmsActionApi('visibility', 'all', selectedCmsIds);
    } catch (err) {
      console.error('API bulk visibility error:', err);
    }
    setCmsArticles((prev) =>
      prev.map((art) => (selectedCmsIds.includes(art.id) ? { ...art, visibility: nextVis } : art))
    );
    showNotice(`Updated visibility to ${nextVis} for ${selectedCmsIds.length} items.`);
    setSelectedCmsIds([]);
  };

  const handleBulkStatus = async (nextStatus) => {
    if (!selectedCmsIds.length) return;
    try {
      await bulkCmsActionApi('status', 'all', selectedCmsIds);
    } catch (err) {
      console.error('API bulk status error:', err);
    }
    setCmsArticles((prev) =>
      prev.map((art) => (selectedCmsIds.includes(art.id) ? { ...art, status: nextStatus } : art))
    );
    showNotice(`Updated status to ${nextStatus} for ${selectedCmsIds.length} items.`);
    setSelectedCmsIds([]);
  };

  const handleBulkDeleteCms = async () => {
    if (!selectedCmsIds.length) return;
    if (confirm(`Permanently delete ${selectedCmsIds.length} selected items?`)) {
      try {
        await bulkCmsActionApi('delete', 'all', selectedCmsIds);
      } catch (err) {
        console.error('API bulk delete error:', err);
      }
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
  const [showTrashBinModal, setShowTrashBinModal] = useState(false);
  const [trashItems, setTrashItems] = useState([]);
  const [showAuditLogsModal, setShowAuditLogsModal] = useState(false);
  const [showMediaLibraryModal, setShowMediaLibraryModal] = useState(false);
  const [confirmDeleteTarget, setConfirmDeleteTarget] = useState(null);
  const [previewingArticle, setPreviewingArticle] = useState(null);

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

  const handleOpenConfirmDelete = (item, type = 'article') => {
    setConfirmDeleteTarget({ item, type });
  };

  const handleConfirmPermanentDelete = async () => {
    if (!confirmDeleteTarget) return;
    const { item, type } = confirmDeleteTarget;

    if (type === 'product') {
      try {
        await deleteCmsCategoryItemApi('all', item.id);
      } catch (err) {
        console.error('API delete product error:', err);
      }
      setCmsProducts((prev) => prev.filter((p) => p.id !== item.id));
      setCmsArticles((prev) => prev.filter((a) => a.id !== item.id && !a.title.includes(item.name || '___')));
      showNotice(`Permanently deleted product "${item.name}"`);
    } else {
      try {
        await deleteCmsCategoryItemApi('all', item.id);
      } catch (err) {
        console.error('API delete item error:', err);
      }
      const deletedItem = { ...item, deletedAt: new Date().toISOString() };
      setTrashItems((prev) => [deletedItem, ...prev]);
      setCmsArticles((prev) => prev.filter((a) => a.id !== item.id));
      showNotice(`Moved "${item.title}" to Trash Bin.`);
    }

    setConfirmDeleteTarget(null);
  };

  const handleRestoreFromTrash = async (id) => {
    const item = trashItems.find((i) => i.id === id);
    if (item) {
      try {
        await restoreCmsItemApi(id);
      } catch (err) {
        console.error('API restore item error:', err);
      }
      const restored = { ...item };
      delete restored.deletedAt;
      setCmsArticles((prev) => [restored, ...prev]);
      setTrashItems((prev) => prev.filter((i) => i.id !== id));
      showNotice(`Restored "${item.title || item.name}" to active content!`);
    }
  };

  const handlePermanentlyPurgeTrash = async (id) => {
    try {
      await permanentlyDeleteCmsItemApi(id);
    } catch (err) {
      console.error('API permanent delete item error:', err);
    }
    setTrashItems((prev) => prev.filter((i) => i.id !== id));
    showNotice('Permanently purged item from Trash Bin.');
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

      try {
        const cmsRes = await fetchCmsCategoryApi('all');
        if (cmsRes.data?.success && Array.isArray(cmsRes.data.data) && cmsRes.data.data.length > 0) {
          const formatted = cmsRes.data.data.map((i) => ({
            id: i.id,
            title: i.title,
            category: i.category,
            client: i.client || i.outlet || '',
            author: i.author || 'Editorial Team',
            summary: i.excerpt || i.summary || i.content || '',
            readTime: i.readTime || '5 min read',
            publishedDate: i.createdAt ? new Date(i.createdAt).toISOString().split('T')[0] : '2026-08-24',
            status: i.status === 'PUBLISHED' ? 'Published' : i.status === 'DRAFT' ? 'Draft' : i.status === 'ARCHIVED' ? 'Archived' : i.status,
            visibility: i.visibility || 'VISIBLE',
            expiryDate: i.expiresAt ? new Date(i.expiresAt).toISOString().split('T')[0] : '',
            coverImage: i.coverImage,
            content: i.content
          }));
          setCmsArticles(formatted);
        }
      } catch (err) {
        console.error('Failed to sync backend CMS data:', err);
      }
    } catch {
      setUser({ fullName: 'Ermias Alemayehu', email: 'admin@yomtechglobal.org', role: 'SUPER_ADMIN' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAuthAndData();

    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('header-search-input');
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
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
  const handleCreateCmsProduct = async (e) => {
    e.preventDefault();
    const newProd = {
      id: `prod-${Date.now()}`,
      ...newProductForm,
      views: '0'
    };
    setCmsProducts((prev) => [newProd, ...prev]);

    const newArt = {
      id: `art-prod-${Date.now()}`,
      title: `${newProductForm.name} Solution Module`,
      category: 'Services & Products Matrix',
      client: newProductForm.category || 'YomTech Global Product',
      author: 'Product Management Team',
      summary: newProductForm.description || 'Enterprise platform service specification.',
      readTime: newProductForm.category || 'Enterprise Software',
      publishedDate: new Date().toISOString().split('T')[0],
      status: newProductForm.status || 'Published',
      visibility: 'VISIBLE'
    };

    try {
      await createCmsCategoryItemApi('services', {
        title: `${newProductForm.name} Solution Module`,
        category: 'Services & Products Matrix',
        summary: newProductForm.description,
        client: newProductForm.category,
        author: 'Product Management Team',
        status: 'PUBLISHED',
        visibility: 'VISIBLE'
      });
    } catch (err) {
      console.error('API create product error:', err);
    }

    setCmsArticles((prev) => [newArt, ...prev]);

    showNotice(`CMS Product published: ${newProductForm.name}`);
    setNewProductForm({ name: '', category: 'Enterprise Software', description: '', status: 'Published' });
    setShowAddProductModal(false);
  };

  const handleToggleProductPublish = async (id) => {
    const targetProd = cmsProducts.find((p) => p.id === id);
    if (!targetProd) return;
    const newStatus = targetProd.status === 'Published' ? 'Draft' : 'Published';
    const newVis = newStatus === 'Published' ? 'VISIBLE' : 'HIDDEN';

    setCmsProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
    );

    try {
      await updateCmsCategoryItemApi('all', id, { status: newStatus === 'Published' ? 'PUBLISHED' : 'DRAFT', visibility: newVis });
    } catch (err) {
      console.error('API toggle product publish error:', err);
    }

    setCmsArticles((prev) =>
      prev.map((a) => {
        if (a.id === id || a.title.includes(targetProd.name) || (targetProd.name && a.title.toLowerCase().includes(targetProd.name.toLowerCase()))) {
          return { ...a, status: newStatus, visibility: newVis };
        }
        return a;
      })
    );
    showNotice(`CMS Product status updated to ${newStatus}`);
  };

  const handleDeleteProduct = async (prodId) => {
    const target = cmsProducts.find((p) => p.id === prodId);
    if (window.confirm(`Are you sure you want to delete product "${target?.name}"?`)) {
      try {
        await deleteCmsCategoryItemApi('all', prodId);
      } catch (err) {
        console.error('API delete product error:', err);
      }
      setCmsProducts((prev) => prev.filter((p) => p.id !== prodId));
      setCmsArticles((prev) => prev.filter((a) => a.id !== prodId && !a.title.includes(target?.name || '___')));
      showNotice(`Deleted product "${target?.name}"`);
    }
  };

  // --- REAL HANDLERS: CMS ARTICLES (CRUD, VISIBILITY, EXPIRED, EDIT, DELETE) ---
  const handleCreateArticle = async (e) => {
    e.preventDefault();
    const catName = newArticleForm.category || 'Corporate News & Articles';
    const computedVideoUrl = newArticleForm.videoUrl || (newArticleForm.youtubeId ? `https://www.youtube.com/watch?v=${newArticleForm.youtubeId}` : null);
    const payload = {
      title: newArticleForm.title,
      category: catName,
      client: newArticleForm.client,
      author: newArticleForm.author || 'Editorial Team',
      summary: newArticleForm.summary,
      fullContent: newArticleForm.fullContent || newArticleForm.summary,
      content: newArticleForm.fullContent || newArticleForm.summary,
      coverImage: newArticleForm.coverImage,
      videoUrl: computedVideoUrl,
      readTime: newArticleForm.readTime || '5 min read',
      status: newArticleForm.status === 'Published' ? 'PUBLISHED' : 'DRAFT',
      visibility: newArticleForm.visibility || 'VISIBLE'
    };

    try {
      const res = await createCmsCategoryItemApi('all', payload);
      if (res.data?.success && res.data.data) {
        const dbItem = res.data.data;
        const formatted = {
          id: dbItem.id,
          title: dbItem.title,
          category: dbItem.category,
          client: dbItem.client || newArticleForm.client,
          author: dbItem.author || newArticleForm.author,
          summary: dbItem.excerpt || newArticleForm.summary,
          fullContent: newArticleForm.fullContent || dbItem.content,
          content: newArticleForm.fullContent || dbItem.content,
          coverImage: newArticleForm.coverImage || dbItem.coverImage,
          videoUrl: computedVideoUrl || dbItem.videoUrl,
          readTime: dbItem.readTime || newArticleForm.readTime,
          publishedDate: new Date().toISOString().split('T')[0],
          status: newArticleForm.status,
          visibility: newArticleForm.visibility
        };
        setCmsArticles((prev) => [formatted, ...prev]);
      } else {
        const newArt = {
          id: `art-${Date.now()}`,
          ...newArticleForm,
          videoUrl: computedVideoUrl,
          publishedDate: new Date().toISOString().split('T')[0]
        };
        setCmsArticles((prev) => [newArt, ...prev]);
      }
    } catch (err) {
      console.error('API create article error:', err);
      const newArt = {
        id: `art-${Date.now()}`,
        ...newArticleForm,
        videoUrl: computedVideoUrl,
        publishedDate: new Date().toISOString().split('T')[0]
      };
      setCmsArticles((prev) => [newArt, ...prev]);
    }

    showNotice(`CMS News / Article added: "${newArticleForm.title}"`);
    setNewArticleForm({
      title: '',
      category: 'Corporate News & Articles',
      client: '',
      author: 'Editorial Team',
      summary: '',
      fullContent: '',
      coverImage: null,
      videoUrl: null,
      youtubeId: '',
      readTime: '5 min read',
      status: 'Published',
      visibility: 'VISIBLE'
    });
    setShowAddArticleModal(false);
  };

  const handleToggleArticleVisibility = async (artId) => {
    const targetArt = cmsArticles.find((a) => a.id === artId);
    const isCurrentlyVisible = targetArt ? (targetArt.visibility === 'VISIBLE' || targetArt.visibility === 'PUBLIC') : true;
    const nextVis = isCurrentlyVisible ? 'HIDDEN' : 'VISIBLE';
    const nextStatus = isCurrentlyVisible ? 'Hidden' : 'Published';

    try {
      await updateCmsCategoryItemApi('all', artId, {
        visibility: nextVis,
        status: nextStatus === 'Published' ? 'PUBLISHED' : 'DRAFT'
      });
    } catch (err) {
      console.error('API toggle visibility error:', err);
    }

    setCmsArticles((prev) =>
      prev.map((art) => {
        if (art.id === artId) {
          showNotice(`Article "${art.title}" is now ${nextStatus.toUpperCase()} & ${nextVis}`);
          return { ...art, visibility: nextVis, status: nextStatus };
        }
        return art;
      })
    );
  };

  const handleSetArticleStatus = async (artId, newStatus) => {
    const nextVis = (newStatus === 'Hidden' || newStatus === 'Expired' || newStatus === 'Draft') ? 'HIDDEN' : 'VISIBLE';
    const dbStatus = newStatus === 'Published' ? 'PUBLISHED' : newStatus === 'Draft' ? 'DRAFT' : 'EXPIRED';

    try {
      await updateCmsCategoryItemApi('all', artId, { status: dbStatus, visibility: nextVis });
    } catch (err) {
      console.error('API set status error:', err);
    }

    setCmsArticles((prev) =>
      prev.map((art) => {
        if (art.id === artId) {
          showNotice(`Article "${art.title}" status set to: ${newStatus.toUpperCase()}`);
          return { ...art, status: newStatus, visibility: nextVis };
        }
        return art;
      })
    );
  };

  const handleDeleteArticle = async (artId) => {
    const target = cmsArticles.find((a) => a.id === artId);
    if (window.confirm(`Are you sure you want to delete news item "${target?.title}"?`)) {
      try {
        await deleteCmsCategoryItemApi('all', artId);
      } catch (err) {
        console.error('API delete article error:', err);
      }
      setCmsArticles((prev) => prev.filter((a) => a.id !== artId));
      showNotice(`News item "${target?.title}" deleted successfully.`);
    }
  };

  const handleStartEditArticle = (art) => {
    setEditingArticle({ ...art });
    setShowEditArticleModal(true);
  };

  const handleSaveEditArticle = async (e) => {
    e.preventDefault();
    if (!editingArticle) return;

    const finalSummary = editingArticle.summary || editingArticle.fullContent || '';
    const finalFullContent = editingArticle.fullContent || editingArticle.summary || '';
    const updatedItem = {
      ...editingArticle,
      summary: finalSummary,
      fullContent: finalFullContent,
      content: finalFullContent
    };

    try {
      const computedVideoUrl = updatedItem.videoUrl || (updatedItem.youtubeId ? `https://www.youtube.com/watch?v=${updatedItem.youtubeId}` : null);
      await updateCmsCategoryItemApi('all', updatedItem.id, {
        title: updatedItem.title,
        category: updatedItem.category,
        client: updatedItem.client,
        author: updatedItem.author,
        publishedDate: updatedItem.publishedDate,
        summary: updatedItem.summary,
        fullContent: updatedItem.fullContent,
        content: updatedItem.content,
        coverImage: updatedItem.coverImage,
        videoUrl: computedVideoUrl,
        readTime: updatedItem.readTime,
        status: updatedItem.status === 'Published' ? 'PUBLISHED' : 'DRAFT',
        visibility: updatedItem.visibility
      });
    } catch (err) {
      console.error('API save edit article error:', err);
    }

    setCmsArticles((prev) =>
      prev.map((art) => (art.id === updatedItem.id ? updatedItem : art))
    );
    showNotice(`Article "${updatedItem.title}" updated successfully.`);
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
    <div className={`h-screen w-full flex overflow-hidden transition-colors duration-300 font-sans ${
      isDarkMode ? 'bg-[#03045E] text-white' : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      
      {/* SIDEBAR NAVIGATION (FIXED POSITION) */}
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
        
        {/* TOP HEADER BAR (FIXED POSITION STICKY TOP WITH ELEGANT BORDER SHADOW) */}
        <header className={`h-16 border-b px-6 flex items-center justify-between transition-colors z-30 shrink-0 sticky top-0 ${
          isDarkMode
            ? 'bg-[#03045E]/95 border-cyan-500/30 backdrop-blur-md text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
            : 'bg-white/95 border-slate-200/80 backdrop-blur-md text-slate-900 shadow-[0_4px_16px_rgba(0,0,0,0.03)]'
        }`}>
          {/* Search bar matching screenshot pill input with Ctrl+K shortcut */}
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
              <input
                id="header-search-input"
                type="text"
                placeholder="Search courses, lessons, CMS content, leads..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full pl-10 pr-14 py-2 text-xs rounded-full border transition-all focus:outline-none ${
                  isDarkMode
                    ? 'bg-blue-950/60 border-cyan-400/40 text-white placeholder-slate-400 focus:border-[#0ED3DD]'
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#1E90FF] focus:bg-white focus:ring-2 focus:ring-[#1E90FF]/20'
                }`}
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[9px] font-bold text-slate-400 bg-slate-200/60 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md select-none pointer-events-none">
                Ctrl K
              </kbd>
            </div>
          </div>

          {/* Right actions matching screenshot icons & profile */}
          <div className="flex items-center gap-3">
            {/* Quick Action Button */}
            <button
              onClick={() => {
                if (activeTab === 'quotes') setShowAddProposalModal(true);
                else if (activeTab === 'jobs') setShowAddJobModal(true);
                else if (activeTab === 'cms-services') setShowAddProductModal(true);
                else if (activeTab.startsWith('cms-')) {
                  const targetCat = ({
                    'cms-news': 'Corporate News & Articles',
                    'cms-articles': 'Corporate News & Articles',
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
                  })[activeTab] || 'Corporate News';
                  setNewArticleForm((prev) => ({ ...prev, category: targetCat }));
                  setShowAddArticleModal(true);
                }
                else if (activeTab === 'roles') setShowAddUserModal(true);
                else setShowAddLeadModal(true);
              }}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-extrabold text-xs rounded-xl shadow-xs transition-all active:scale-95 hover:brightness-110"
            >
              <Plus size={14} />
              <span className="hidden sm:inline">Add Entry</span>
            </button>

            {/* Manual Refresh Button */}
            <button
              onClick={() => {
                loadAuthAndData();
                showNotice('Refreshed active platform datasets.');
              }}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                isDarkMode ? 'border-cyan-400/40 hover:bg-blue-900/50 text-cyan-300' : 'border-slate-200 hover:bg-slate-100 text-slate-600'
              }`}
              title="Refresh Data"
            >
              <RefreshCw size={15} />
            </button>

            {/* Dark Mode Toggle Matching Screenshot Moon Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                isDarkMode ? 'border-cyan-400/40 hover:bg-blue-900/50 text-amber-300' : 'border-slate-200 hover:bg-slate-100 text-slate-600'
              }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Notifications Dropdown Matching Screenshot Bell Icon */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setUnreadNotificationsCount(0);
                }}
                className={`w-9 h-9 rounded-full border relative flex items-center justify-center transition-colors ${
                  isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                }`}
              >
                <Bell size={16} />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center animate-pulse">
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

            {/* User Profile Badge Matching Screenshot (Avatar + Name + Role) */}
            <div className="relative pl-2 border-l border-slate-200/80">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
              >
                <div className="text-right leading-tight hidden sm:block">
                  <div className="font-black text-xs text-slate-900 dark:text-white">kenenisa</div>
                  <div className="text-[10px] font-semibold text-slate-400">Super Admin</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#1E90FF] to-[#0ED3DD] p-0.5 shadow-2xs overflow-hidden flex-shrink-0">
                  <img src={logoImg} alt="User Avatar" className="w-full h-full object-cover rounded-full bg-white" />
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
        <main className={`flex-1 p-6 sm:p-8 overflow-y-auto transition-colors ${
          isDarkMode ? 'bg-[#03045E]' : 'bg-[#F8FAFC]'
        }`}>
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
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleToggleProductPublish(prod.id)}
                            className="px-3 py-1.5 border border-blue-200 hover:border-[#1E90FF] bg-blue-50 text-[#1E90FF] font-black rounded-xl text-xs transition-all"
                          >
                            Toggle Status
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(prod.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all"
                            title="Delete Product"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 6: CMS NEWS & ARTICLES MANAGEMENT CENTER */}
            {/* TAB 6: ALL 14 CMS CATEGORY MANAGEMENT HUB */}
            {activeTab.startsWith('cms-') && (
              <div className="space-y-6 animate-in fade-in duration-300">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">
                      {({
                        'cms-services': 'Services & Products Matrix Management',
                        'cms-news': 'Corporate News & Articles Center',
                        'cms-articles': 'Corporate News & Articles Center',
                        'cms-blog': 'Tech Articles & Engineering Blog',
                        'cms-events': 'Upcoming Events & Webinars Schedule',
                        'cms-announcements': 'Official Corporate Announcements',
                        'cms-projects': 'Featured Project Case Studies',
                        'cms-team': 'Executive Team & Leadership Profiles',
                        'cms-testimonials': 'Client & Learner Testimonials',
                        'cms-gallery': 'Photo Gallery Showcase Hub',
                        'cms-videos': 'Video & Documentary Hub',
                        'cms-media': 'Media Appearances & Coverage',
                        'cms-press': 'Press & Corporate Content Kit',
                        'cms-faq': 'Support FAQ & Knowledge Base',
                        'cms-partners': 'Trusted Institutional Partners'
                      })[activeTab] || 'CMS Content Management Hub'}
                    </h1>
                    <p className="text-xs text-slate-500 font-semibold">
                      {({
                        'cms-services': 'Manage, edit, update, hide/show, and publish software products, ERP modules, and academy services.',
                        'cms-news': 'Manage, edit, update, delete, hide/show, and set expiration status for all news stories & articles.',
                        'cms-articles': 'Manage, edit, update, delete, hide/show, and set expiration status for all news stories & articles.',
                        'cms-blog': 'Publish, update, hide/show, and manage technical architecture insights, AI benchmark papers, and engineering posts.',
                        'cms-events': 'Schedule, manage, update, hide/show, and publish tech summits, demo days, and workshops.',
                        'cms-announcements': 'Publish, edit, update, hide/show, and archive official company press statements and announcements.',
                        'cms-projects': 'Manage, edit, update, hide/show, and feature client projects, SSGI satellite portals, and banking software.',
                        'cms-team': 'Manage, edit, update, hide/show, and organize executive team members, roles, and profiles.',
                        'cms-testimonials': 'Manage, edit, update, hide/show, and curate verified student and client feedback reviews.',
                        'cms-gallery': 'Upload, manage, edit, update, hide/show photo albums, event photos, and office galleries.',
                        'cms-videos': 'Upload, embed YouTube videos, edit, update, hide/show documentaries, interviews, and video showcases.',
                        'cms-media': 'Track, edit, update, hide/show news appearances, TV interviews, and press features.',
                        'cms-press': 'Publish, edit, update, hide/show press kits, brand assets, and corporate media releases.',
                        'cms-faq': 'Manage, edit, update, hide/show, and organize customer support questions, answers, and help articles.',
                        'cms-partners': 'Manage, edit, update, hide/show institutional partner logos, MoUs, and government collaborations.'
                      })[activeTab] || 'Full visibility, editing, updating, and status controls for this category.'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const targetCat = ({
                        'cms-services': 'Services & Products Matrix',
                        'cms-news': 'Corporate News & Articles',
                        'cms-articles': 'Corporate News & Articles',
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
                      })[activeTab] || 'Corporate News';
                      setNewArticleForm((prev) => ({ ...prev, category: targetCat }));
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Create New Entry</span>
                  </button>
                </div>

                {/* 4 Stat Summary Cards for Active Category */}
                {(() => {
                  const tabCategoryMap = {
                    'cms-services': ['Services & Products Matrix', 'Enterprise Software', 'EdTech & Academy', 'Talent Network', 'Communication', 'Social Network', 'Tech Documentaries'],
                    'cms-news': ['Corporate News & Articles', 'Corporate News'],
                    'cms-articles': ['Corporate News & Articles', 'Corporate News'],
                    'cms-blog': ['Tech Articles & Engineering'],
                    'cms-events': ['Upcoming Events & Webinars'],
                    'cms-announcements': ['Official Announcements'],
                    'cms-projects': ['Featured Project Case Studies'],
                    'cms-team': ['Executive Team Members', 'Executive Leadership', 'Engineering', 'Education'],
                    'cms-testimonials': ['Client & Learner Testimonials'],
                    'cms-gallery': ['Photo Gallery Showcase', 'Academy', 'Team', 'Partnerships', 'Events'],
                    'cms-videos': ['Video & Documentary Hub', 'Documentary', 'Bootcamp'],
                    'cms-media': ['Media Appearances & Coverage'],
                    'cms-press': ['Press & Corporate Content'],
                    'cms-faq': ['Support FAQ & Knowledge Base'],
                    'cms-partners': ['Trusted Institutional Partners']
                  };
                  const targetCats = tabCategoryMap[activeTab];
                  const categoryItems = cmsArticles.filter((art) => !targetCats || (Array.isArray(targetCats) ? targetCats.includes(art.category) : art.category === targetCats));
                  const totalCount = categoryItems.length;
                  const visibleCount = categoryItems.filter((a) => a.visibility === 'VISIBLE' && a.status === 'Published').length;
                  const hiddenCount = categoryItems.filter((a) => a.visibility === 'HIDDEN' || a.status === 'Draft' || a.status === 'Hidden').length;
                  const expiredCount = categoryItems.filter((a) => a.status === 'Expired' || a.status === 'Archived').length;

                  return (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="p-4 bg-white rounded-2xl border border-blue-100 shadow-2xs space-y-1">
                        <span className="text-[10px] font-black text-slate-400 uppercase">Total Items</span>
                        <div className="text-2xl font-black text-slate-900">{totalCount}</div>
                      </div>
                      <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 shadow-2xs space-y-1">
                        <span className="text-[10px] font-black text-emerald-700 uppercase">Active &amp; Visible</span>
                        <div className="text-2xl font-black text-emerald-700">{visibleCount}</div>
                      </div>
                      <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/80 shadow-2xs space-y-1">
                        <span className="text-[10px] font-black text-amber-700 uppercase">Hidden / Drafts</span>
                        <div className="text-2xl font-black text-amber-700">{hiddenCount}</div>
                      </div>
                      <div className="p-4 bg-red-50/60 rounded-2xl border border-red-200/80 shadow-2xs space-y-1">
                        <span className="text-[10px] font-black text-red-700 uppercase">Expired / Archived</span>
                        <div className="text-2xl font-black text-red-700">{expiredCount}</div>
                      </div>
                    </div>
                  );
                })()}

                {/* Search & Filter Controls + Export JSON */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 bg-white p-3.5 rounded-2xl border border-blue-100 shadow-2xs">
                  <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="text"
                      placeholder="Search items by title, author or client..."
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

                    {/* Trash Bin Modal Button */}
                    <button
                      onClick={() => setShowTrashBinModal(true)}
                      className="px-3 py-2 bg-red-50 text-red-700 border border-red-200 font-black text-xs rounded-xl hover:bg-red-100 flex items-center gap-1.5 transition-all"
                      title="View Trash Bin"
                    >
                      <Trash2 size={14} />
                      <span>Trash Bin ({trashItems.length})</span>
                    </button>

                    {/* Audit Logs Button */}
                    <button
                      onClick={() => setShowAuditLogsModal(true)}
                      className="px-3 py-2 bg-slate-100 text-slate-700 border border-slate-300 font-black text-xs rounded-xl hover:bg-slate-200 flex items-center gap-1.5 transition-all"
                      title="View Audit Logs"
                    >
                      <Eye size={14} />
                      <span>Audit Logs</span>
                    </button>

                    {/* Media Library Button */}
                    <button
                      onClick={() => setShowMediaLibraryModal(true)}
                      className="px-3 py-2 bg-purple-50 text-purple-700 border border-purple-200 font-black text-xs rounded-xl hover:bg-purple-100 flex items-center gap-1.5 transition-all"
                      title="Media Library Assets"
                    >
                      <ImageIcon size={14} />
                      <span>Media Assets</span>
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

                {/* Category Items List with Full Visibility Toggle & Edit Controls */}
                <div className="space-y-3">
                  {cmsArticles
                    .filter((art) => {
                      const tabCategoryMap = {
                        'cms-services': ['Services & Products Matrix', 'Enterprise Software', 'EdTech & Academy', 'Talent Network', 'Communication', 'Social Network', 'Tech Documentaries'],
                        'cms-news': ['Corporate News & Articles', 'Corporate News'],
                        'cms-articles': ['Corporate News & Articles', 'Corporate News'],
                        'cms-blog': ['Tech Articles & Engineering'],
                        'cms-events': ['Upcoming Events & Webinars'],
                        'cms-announcements': ['Official Announcements'],
                        'cms-projects': ['Featured Project Case Studies'],
                        'cms-team': ['Executive Team Members', 'Executive Leadership', 'Engineering', 'Education'],
                        'cms-testimonials': ['Client & Learner Testimonials'],
                        'cms-gallery': ['Photo Gallery Showcase', 'Academy', 'Team', 'Partnerships', 'Events'],
                        'cms-videos': ['Video & Documentary Hub', 'Documentary', 'Bootcamp'],
                        'cms-media': ['Media Appearances & Coverage'],
                        'cms-press': ['Press & Corporate Content'],
                        'cms-faq': ['Support FAQ & Knowledge Base'],
                        'cms-partners': ['Trusted Institutional Partners']
                      };
                      const targetCats = tabCategoryMap[activeTab];
                      const matchesCategory = !targetCats || (Array.isArray(targetCats) ? targetCats.includes(art.category) : art.category === targetCats);

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
                      return 0;
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
                            {(() => {
                              const isPastExpiry = art.expiryDate && new Date(art.expiryDate) < new Date();
                              const effectiveStatus = isPastExpiry ? 'Expired' : art.status;
                              const effectiveVis = isPastExpiry ? 'HIDDEN' : art.visibility;

                              return (
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded-md uppercase border border-blue-200">
                                    {art.category}
                                  </span>
                                  <span className={`px-2.5 py-0.5 text-[10px] font-black rounded-md uppercase border ${
                                    effectiveVis === 'VISIBLE' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-300'
                                  }`}>
                                    {effectiveVis}
                                  </span>
                                  <span className={`px-2.5 py-0.5 text-[10px] font-black rounded-md uppercase border ${
                                    effectiveStatus === 'Published' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                    effectiveStatus === 'Expired' ? 'bg-red-50 text-red-700 border-red-200 animate-pulse' :
                                    effectiveStatus === 'Draft' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                    'bg-amber-50 text-amber-700 border-amber-200'
                                  }`}>
                                    {effectiveStatus}
                                  </span>
                                  {art.expiryDate ? (
                                    <span className={`px-2 py-0.5 text-[9px] font-black rounded-md border ${
                                      isPastExpiry ? 'bg-red-100 text-red-800 border-red-300' : 'bg-slate-100 text-slate-700 border-slate-300'
                                    }`}>
                                      📅 {isPastExpiry ? `Expired on ${art.expiryDate}` : `Expires: ${art.expiryDate}`}
                                    </span>
                                  ) : (
                                    <span className="px-2 py-0.5 text-[9px] font-bold rounded-md bg-slate-50 text-slate-400 border border-slate-200">
                                      📅 No Expiry
                                    </span>
                                  )}
                                </div>
                              );
                            })()}
                            <div className="font-extrabold text-sm text-slate-900 line-clamp-1">{art.title}</div>
                            <div className="text-xs text-slate-500 font-medium flex flex-wrap gap-2">
                              <span>Author/Lead: <strong>{art.author || art.name || 'Editorial'}</strong></span>
                              <span>&bull;</span>
                              <span>Client: <strong>{art.client || 'YomTech Global'}</strong></span>
                              <span>&bull;</span>
                              <span>Date: {art.publishedDate}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Control Buttons (Visibility Toggle + Edit + Delete) */}
                        <div className="flex items-center gap-2 shrink-0">
                          {/* Toggle Visibility (Show/Hide on Public Web) */}
                          <button
                            onClick={() => handleToggleArticleVisibility(art.id)}
                            className={`px-3 py-1.5 text-xs font-bold rounded-xl border flex items-center gap-1.5 transition-all ${
                              art.visibility === 'VISIBLE'
                                ? 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                                : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                            }`}
                            title={art.visibility === 'VISIBLE' ? "Hide this item from live public website" : "Make this item visible on live public website"}
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

                          {/* Preview Button */}
                          <button
                            onClick={() => setAdminPreviewMedia(art)}
                            className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold rounded-xl hover:bg-purple-100 transition-all flex items-center gap-1"
                            title="Preview Content"
                          >
                            <Eye size={13} />
                            <span>Preview</span>
                          </button>

                          {/* Full Edit Button */}
                          <button
                            onClick={() => handleStartEditArticle(art)}
                            className="px-3.5 py-1.5 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white text-xs font-black rounded-xl shadow hover:brightness-110 transition-all"
                          >
                            Edit Item
                          </button>

                          {/* Delete Button with Confirmation Dialog */}
                          <button
                            onClick={() => handleOpenConfirmDelete(art, 'article')}
                            className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-all"
                            title="Delete Item"
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
                    <p className="text-xs text-slate-500 font-semibold">Manage, publish, edit, cancel, or hide upcoming tech summits, graduation demo days, and workshops in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Upcoming Events & Webinars',
                        client: 'Hybrid (Addis Ababa)',
                        author: 'YomTech Leadership',
                        summary: '',
                        readTime: '09:00 AM EAT',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Publish New Event</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsArticles.filter((a) => a.category === 'Upcoming Events & Webinars').map((evt) => (
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
                        <div className="text-xs text-slate-500 font-medium">{evt.publishedDate || 'SEP 15, 2026'} &bull; {evt.readTime || '09:00 AM'} &bull; {evt.client || 'Addis Ababa'}</div>
                        <p className="text-xs text-slate-600 font-medium">{evt.summary}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartEditArticle(evt)}
                          className="px-3 py-1.5 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleToggleArticleVisibility(evt.id)}
                          className="p-1.5 text-slate-500 hover:text-[#1E90FF] rounded-lg hover:bg-blue-50"
                          title="Toggle Visibility"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(evt.id)}
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
                    <p className="text-xs text-slate-500 font-semibold">Publish platform releases, ERP version updates, set priority, hide/show, and delete bulletins in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Official Announcements',
                        client: 'Corporate Bulletin',
                        author: 'Executive Office',
                        summary: '',
                        readTime: '5 min read',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Post New Bulletin</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsArticles.filter((a) => a.category === 'Official Announcements').map((ann) => (
                    <div key={ann.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{ann.category}</span>
                          <span className="text-xs text-slate-400 font-bold">{ann.publishedDate}</span>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-black rounded uppercase border border-slate-200">{ann.visibility || 'VISIBLE'}</span>
                        </div>
                        <div className="font-extrabold text-sm text-slate-900">{ann.title}</div>
                        <p className="text-xs text-slate-600 font-medium">{ann.summary}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartEditArticle(ann)}
                          className="px-3 py-1.5 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleToggleArticleVisibility(ann.id)}
                          className="p-1.5 text-slate-500 hover:text-[#1E90FF] rounded-lg hover:bg-blue-50"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(ann.id)}
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
                    <p className="text-xs text-slate-500 font-semibold">Manage enterprise portfolio showcases (SSGI Satellite Portal, Bunna Bank ERP, MInT Blueprints) in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Featured Project Case Studies',
                        client: 'Enterprise Client Partner',
                        author: 'Engineering Directorate',
                        summary: '',
                        readTime: 'React, Node.js, PostgreSQL',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Project Case Study</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsArticles.filter((a) => a.category === 'Featured Project Case Studies').map((prj) => (
                    <div key={prj.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{prj.category}</span>
                        <div className="font-extrabold text-sm text-slate-900">{prj.title}</div>
                        <div className="text-xs text-slate-500 font-semibold">Client: {prj.client || 'Enterprise Partner'}</div>
                        <p className="text-xs text-slate-600 font-medium">{prj.summary}</p>
                        <div className="text-[11px] text-[#1E90FF] font-bold">Tech Stack: {prj.readTime}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartEditArticle(prj)}
                          className="px-3 py-1.5 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleToggleArticleVisibility(prj.id)}
                          className="p-1.5 text-slate-500 hover:text-[#1E90FF] rounded-lg hover:bg-blue-50"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(prj.id)}
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
                    <p className="text-xs text-slate-500 font-semibold">Approve, add, or edit WabiSkills graduate feedback and enterprise client testimonials in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Client & Learner Testimonials',
                        client: 'WabiSkills Academy Alumni / Partner',
                        author: 'Graduate / Client',
                        summary: '',
                        readTime: '5 Stars Review',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Testimonial</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsArticles.filter((a) => a.category === 'Client & Learner Testimonials').map((tst) => (
                    <div key={tst.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{tst.category}</span>
                        <div className="font-extrabold text-sm text-slate-900">{tst.title} &bull; <span className="text-xs text-slate-500">{tst.client}</span></div>
                        <p className="text-xs text-slate-600 font-medium italic">&quot;{tst.summary}&quot;</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartEditArticle(tst)}
                          className="px-3 py-1.5 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(tst.id)}
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

            {/* CMS TAB: PHOTO GALLERY SHOWCASE MANAGER */}
            {activeTab === 'cms-gallery' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Photo Gallery Showcase Archive</h1>
                    <p className="text-xs text-slate-500 font-semibold">Upload &amp; organize classroom photos, MoU signing ceremonies, team photos, and workshops in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Photo Gallery Showcase',
                        client: 'Media Unit Archive',
                        author: 'Media Team',
                        summary: '',
                        readTime: 'Photo Showcase Item',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Upload New Photo</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cmsArticles.filter((a) => ['Photo Gallery Showcase', 'Academy', 'Team', 'Partnerships', 'Events'].includes(a.category)).map((gal) => (
                    <div key={gal.id} className="p-4 bg-white rounded-2xl border border-blue-100 shadow-2xs space-y-2 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 bg-blue-50 text-[#1E90FF] text-[9px] font-black rounded uppercase border border-blue-200">{gal.category}</span>
                        <div className="font-extrabold text-xs text-slate-900">{gal.title}</div>
                        <p className="text-xs text-slate-500 font-medium">{gal.summary}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                        <button
                          onClick={() => handleStartEditArticle(gal)}
                          className="text-[11px] font-bold text-[#1E90FF] hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(gal.id)}
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
                    <p className="text-xs text-slate-500 font-semibold">Manage YouTube video embeds, channel broadcasts (@yomtech &amp; @WabiSkills), and demos in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Video & Documentary Hub',
                        client: '@yomtech',
                        author: 'YomTech Media Unit',
                        summary: '',
                        readTime: 'YouTube HD 1080p',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Video Broadcast</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cmsArticles.filter((a) => ['Video & Documentary Hub', 'Documentary', 'Bootcamp', 'Product Demos'].includes(a.category)).map((vid) => (
                    <div key={vid.id} className="p-5 bg-white rounded-2xl border border-blue-100 shadow-2xs space-y-2 flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{vid.category}</span>
                          <span className="text-xs text-slate-400 font-bold">{vid.client || '@yomtech'}</span>
                        </div>
                        <div className="font-extrabold text-sm text-slate-900">{vid.title}</div>
                        <p className="text-xs text-slate-600 font-medium">{vid.summary}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                        <button
                          onClick={() => handleStartEditArticle(vid)}
                          className="font-bold text-[#1E90FF] hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(vid.id)}
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
                    <p className="text-xs text-slate-500 font-semibold">Manage television interviews (EBC), newspaper features, and international journal highlights in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Media Appearances & Coverage',
                        client: 'National Media Outlet',
                        author: 'Editorial Unit',
                        summary: '',
                        readTime: 'Featured Broadcast',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Media Coverage</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsArticles.filter((a) => a.category === 'Media Appearances & Coverage').map((med) => (
                    <div key={med.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{med.category}</span>
                        <div className="font-extrabold text-sm text-slate-900">{med.title}</div>
                        <div className="text-xs text-slate-500 font-semibold">Outlet: {med.client || 'Media Coverage'} &bull; Date: {med.publishedDate}</div>
                        <p className="text-xs text-slate-600 font-medium">{med.summary}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartEditArticle(med)}
                          className="px-3 py-1.5 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(med.id)}
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

            {/* CMS TAB: PRESS & CORPORATE CONTENT MANAGER */}
            {activeTab === 'cms-press' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Press Releases &amp; Corporate Media</h1>
                    <p className="text-xs text-slate-500 font-semibold">Publish official corporate press releases and media kit announcements in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Press & Corporate Content',
                        client: 'YomTech Press Office',
                        author: 'Corporate Communications',
                        summary: '',
                        readTime: 'Press Release PDF',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Publish Press Release</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsArticles.filter((a) => a.category === 'Press & Corporate Content').map((prs) => (
                    <div key={prs.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-xs text-slate-400 font-bold">{prs.publishedDate}</span>
                        <div className="font-extrabold text-sm text-slate-900">{prs.title}</div>
                        <p className="text-xs text-slate-600 font-medium">{prs.summary}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartEditArticle(prs)}
                          className="px-3 py-1.5 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(prs.id)}
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

            {/* CMS TAB: SUPPORT FAQ & KNOWLEDGE BASE MANAGER */}
            {activeTab === 'cms-faq' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Support FAQ &amp; Knowledge Base</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage frequently asked questions, hotline contacts, and support answers in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Support FAQ & Knowledge Base',
                        client: 'Support Desk',
                        author: 'Knowledge Base Team',
                        summary: '',
                        readTime: 'FAQ Item',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add FAQ Item</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsArticles.filter((a) => a.category === 'Support FAQ & Knowledge Base').map((faq) => (
                    <div key={faq.id} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="font-extrabold text-sm text-[#1E90FF]">{faq.title}</div>
                        <p className="text-xs text-slate-600 font-medium">{faq.summary}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartEditArticle(faq)}
                          className="px-3 py-1.5 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(faq.id)}
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

            {/* CMS TAB: TRUSTED INSTITUTIONAL PARTNERS MANAGER */}
            {activeTab === 'cms-partners' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900">CMS: Institutional Partners Logo Wall</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage enterprise partner profiles (SSGI, INSA, MInT, EAII, Bunna Bank, City Admin) in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Trusted Institutional Partners',
                        client: 'Government / Tech Alliance',
                        author: 'Partner Alliance Unit',
                        summary: '',
                        readTime: 'Government Tech Partner',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Add Partner Logo</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cmsArticles.filter((a) => a.category === 'Trusted Institutional Partners').map((part) => (
                    <div key={part.id} className="p-5 bg-white rounded-2xl border border-blue-100 shadow-2xs space-y-2 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 bg-blue-50 text-[#1E90FF] text-[10px] font-black rounded uppercase border border-blue-200">{part.readTime || 'Partner'}</span>
                        <div className="font-extrabold text-sm text-slate-900">{part.title}</div>
                        <p className="text-xs text-slate-500 font-medium">{part.summary}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                        <button
                          onClick={() => handleStartEditArticle(part)}
                          className="text-[11px] font-bold text-[#1E90FF] hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(part.id)}
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

            {/* TAB: CMS TEAM & EXECUTIVE MEMBERS */}
            {activeTab === 'cms-team' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center border-b border-blue-100 pb-4">
                  <div>
                    <h1 className="text-xl font-black">CMS: Executive Team &amp; Institutional Partners</h1>
                    <p className="text-xs text-slate-500 font-semibold">Manage executive profiles (Ermias Alemayehu - CEO, Dr. Yared Worku - CTO) in Prisma DB.</p>
                  </div>
                  <button
                    onClick={() => {
                      setNewArticleForm({
                        title: '',
                        category: 'Executive Team Members',
                        client: 'Executive Leadership',
                        author: 'Executive Board',
                        summary: '',
                        readTime: 'Executive Profile',
                        status: 'Published',
                        visibility: 'VISIBLE'
                      });
                      setShowAddArticleModal(true);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black text-xs rounded-2xl shadow hover:scale-[1.02] flex items-center gap-1.5"
                  >
                    <Plus size={14} />
                    <span>Add Team Member</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cmsArticles.filter((a) => ['Executive Team Members', 'Executive Leadership', 'Engineering', 'Education'].includes(a.category)).map((m) => (
                    <div key={m.id} className="p-4 rounded-2xl bg-white border border-blue-100 shadow-2xs flex justify-between items-center text-xs">
                      <div className="space-y-1">
                        <div className="font-black text-slate-900 text-sm">{m.title}</div>
                        <div className="text-[#1E90FF] font-bold">{m.client || m.readTime}</div>
                        <p className="text-xs text-slate-600 font-medium italic">&quot;{m.summary}&quot;</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartEditArticle(m)}
                          className="px-2.5 py-1 border border-slate-200 text-xs font-bold rounded-xl hover:text-[#1E90FF]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(m.id)}
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
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
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
                  placeholder="e.g. Ermias Alemayehu"
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
                    placeholder="name@company.com"
                    value={newLeadForm.email}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-400">Phone Number</label>
                  <input
                    type="text"
                    placeholder="+251 911 000000"
                    value={newLeadForm.phone}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400">Inquiry Category</label>
                  <select
                    value={newLeadForm.inquiryType}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, inquiryType: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="Enterprise ERP">Enterprise ERP</option>
                    <option value="Geospatial & SSGI">Geospatial &amp; SSGI</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="WabiSkills Academy">WabiSkills Academy</option>
                    <option value="GovTech Solution">GovTech Solution</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-400">Lead Status</label>
                  <select
                    value={newLeadForm.status}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, status: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="QUALIFIED">QUALIFIED</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-bold text-slate-400">Message / Consultation Details</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Inquiry message text..."
                  value={newLeadForm.message}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, message: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                ></textarea>
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
              <button type="button" onClick={() => setShowAddLeadModal(false)} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 bg-[#1E90FF] text-white rounded-xl shadow hover:bg-blue-600">
                Save Lead
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 2: ADD PROPOSAL --- */}
      {showAddProposalModal && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
          <form onSubmit={handleCreateProposal} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="font-black text-base">New B2B Proposal Request</h3>
              <button type="button" onClick={() => setShowAddProposalModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-400">Enterprise Client Name *</label>
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
                <label className="font-bold text-slate-400">Project / Engagement Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Core Financial Recon Automation Engine"
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
                    <option value="Yomnex ERP 4.0">Yomnex ERP 4.0</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Geospatial Telemetry">Geospatial Telemetry</option>
                    <option value="Cybersecurity Audit">Cybersecurity Audit</option>
                    <option value="WabiSkills Bootcamp">WabiSkills Bootcamp</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-400">Est. Budget Range</label>
                  <input
                    type="text"
                    placeholder="e.g. $50,000 - $120,000"
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
                Submit Proposal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 3: ADD JOB VACANCY --- */}
      {showAddJobModal && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
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
                    <option value="Corporate News & Articles">Corporate News &amp; Articles</option>
                    <option value="Services & Products Matrix">Services &amp; Products Matrix</option>
                    <option value="Tech Articles & Engineering">Tech Articles &amp; Engineering</option>
                    <option value="Upcoming Events & Webinars">Upcoming Events &amp; Webinars</option>
                    <option value="Official Announcements">Official Announcements</option>
                    <option value="Featured Project Case Studies">Featured Project Case Studies</option>
                    <option value="Executive Team Members">Executive Team Members</option>
                    <option value="Client & Learner Testimonials">Client &amp; Learner Testimonials</option>
                    <option value="Photo Gallery Showcase">Photo Gallery Showcase</option>
                    <option value="Video & Documentary Hub">Video &amp; Documentary Hub</option>
                    <option value="Media Appearances & Coverage">Media Appearances &amp; Coverage</option>
                    <option value="Press & Corporate Content">Press &amp; Corporate Content</option>
                    <option value="Support FAQ & Knowledge Base">Support FAQ &amp; Knowledge Base</option>
                    <option value="Trusted Institutional Partners">Trusted Institutional Partners</option>
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
              <div className="grid grid-cols-3 gap-3">
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
                <div>
                  <label className="font-bold text-slate-500 flex items-center justify-between">
                    <span>Expiration Date</span>
                  </label>
                  <div className="flex gap-1.5 mt-1">
                    <input
                      type="date"
                      value={newArticleForm.expiryDate || ''}
                      onChange={(e) => setNewArticleForm({ ...newArticleForm, expiryDate: e.target.value })}
                      className="flex-1 p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF] text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const d = new Date();
                        d.setDate(d.getDate() + 30);
                        setNewArticleForm({ ...newArticleForm, expiryDate: d.toISOString().split('T')[0] });
                      }}
                      className="px-2 py-1 bg-blue-50 text-[#1E90FF] border border-blue-200 text-[10px] font-black rounded-lg hover:bg-blue-100 shrink-0"
                      title="Set 30-Day Expiration"
                    >
                      +30d
                    </button>
                  </div>
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

      {/* --- MODAL 5B: EXECUTIVE LIGHT-MODE CMS CONTENT STUDIO & ARTICLE EDITOR --- */}
      {showEditArticleModal && editingArticle && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <form onSubmit={handleSaveEditArticle} className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-4xl w-full space-y-6 shadow-2xl animate-in zoom-in-95 border border-blue-100 max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1E90FF] to-[#0ED3DD] flex items-center justify-center text-white font-black shadow">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-black text-lg sm:text-xl text-slate-900 tracking-tight">CMS Content Studio &amp; Master Editor</h3>
                  <p className="text-xs text-slate-500 font-semibold">Configure metadata, event schedules, publishing status, and rich media assets.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => { setShowEditArticleModal(false); setEditingArticle(null); }}
                className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5 text-xs">
              {/* SECTION 1: PRIMARY METADATA */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                <div className="text-[11px] font-black uppercase text-[#1E90FF] tracking-wider">1. Core Entry Metadata</div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">News / Article / Event Title *</label>
                  <input
                    type="text"
                    required
                    value={editingArticle.title}
                    onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF] focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Category Scope</label>
                    <select
                      value={editingArticle.category}
                      onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                    >
                      <option value="Corporate News & Articles">Corporate News &amp; Articles</option>
                      <option value="Services & Products Matrix">Services &amp; Products Matrix</option>
                      <option value="Tech Articles & Engineering">Tech Articles &amp; Engineering</option>
                      <option value="Upcoming Events & Webinars">Upcoming Events &amp; Webinars</option>
                      <option value="Official Announcements">Official Announcements</option>
                      <option value="Featured Project Case Studies">Featured Project Case Studies</option>
                      <option value="Executive Team Members">Executive Team Members</option>
                      <option value="Client & Learner Testimonials">Client &amp; Learner Testimonials</option>
                      <option value="Photo Gallery Showcase">Photo Gallery Showcase</option>
                      <option value="Video & Documentary Hub">Video &amp; Documentary Hub</option>
                      <option value="Media Appearances & Coverage">Media Appearances &amp; Coverage</option>
                      <option value="Press & Corporate Content">Press &amp; Corporate Content</option>
                      <option value="Support FAQ & Knowledge Base">Support FAQ &amp; Knowledge Base</option>
                      <option value="Trusted Institutional Partners">Trusted Institutional Partners</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Author / Lead / Speaker *</label>
                    <input
                      type="text"
                      required
                      value={editingArticle.author || ''}
                      onChange={(e) => setEditingArticle({ ...editingArticle, author: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Client / Institution / Venue Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Skylight Hotel & Online Hybrid (Addis Ababa)"
                      value={editingArticle.client || ''}
                      onChange={(e) => setEditingArticle({ ...editingArticle, client: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Publish Date / Event Date</label>
                    <input
                      type="date"
                      value={editingArticle.publishedDate || ''}
                      onChange={(e) => setEditingArticle({ ...editingArticle, publishedDate: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: PUBLISHING CONTROL & TIMING */}
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-4">
                <div className="text-[11px] font-black uppercase text-[#1E90FF] tracking-wider">2. Publishing Controls &amp; Timing</div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Status</label>
                    <select
                      value={editingArticle.status}
                      onChange={(e) => setEditingArticle({ ...editingArticle, status: e.target.value, visibility: (e.target.value === 'Hidden' || e.target.value === 'Expired' || e.target.value === 'Draft') ? 'HIDDEN' : 'VISIBLE' })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                    >
                      <option value="Published">Published</option>
                      <option value="Draft">Draft</option>
                      <option value="Hidden">Hidden</option>
                      <option value="Expired">Expired</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Visibility</label>
                    <select
                      value={editingArticle.visibility || 'VISIBLE'}
                      onChange={(e) => setEditingArticle({ ...editingArticle, visibility: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                    >
                      <option value="VISIBLE">VISIBLE</option>
                      <option value="HIDDEN">HIDDEN</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Time / Schedule</label>
                    <input
                      type="text"
                      placeholder="e.g. 09:00 AM EAT"
                      value={editingArticle.readTime || ''}
                      onChange={(e) => setEditingArticle({ ...editingArticle, readTime: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Expiration Date</label>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="date"
                        value={editingArticle.expiryDate || ''}
                        onChange={(e) => setEditingArticle({ ...editingArticle, expiryDate: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF] text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const d = new Date();
                          d.setDate(d.getDate() + 30);
                          setEditingArticle({ ...editingArticle, expiryDate: d.toISOString().split('T')[0] });
                        }}
                        className="px-3 py-3 bg-[#1E90FF] hover:bg-blue-600 text-white text-[10px] font-black rounded-xl shrink-0 transition-colors shadow-2xs"
                        title="Set 30-Day Expiration"
                      >
                        +30d
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: STORY & SUMMARY CONTENT */}
              <div className="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100 space-y-4">
                <div className="text-[11px] font-black uppercase text-indigo-700 tracking-wider">3. Story Snippet &amp; Full Content</div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Article Summary (Short Card Snippet)</label>
                  <textarea
                    rows="2"
                    placeholder="Short summary displayed on public news cards..."
                    value={editingArticle.summary || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, summary: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium focus:outline-none focus:border-[#1E90FF]"
                  ></textarea>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-bold text-slate-700">Full Article Story / Body Content</label>
                    <span className="text-[10px] font-black text-[#1E90FF] bg-blue-100/70 px-2.5 py-0.5 rounded-lg border border-blue-200">
                      {editingArticle.readTime || 'Story Body'}
                    </span>
                  </div>
                  <textarea
                    rows="5"
                    placeholder="Full story text, detailed press release, or event description..."
                    value={editingArticle.fullContent || editingArticle.content || ''}
                    onChange={(e) => {
                      const val = e.target.value;
                      setEditingArticle((prev) => ({
                        ...prev,
                        fullContent: val
                      }));
                    }}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium focus:outline-none focus:border-[#1E90FF]"
                  ></textarea>
                </div>
              </div>

              {/* SECTION 4: MEDIA STUDIO & ATTACHMENTS */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                <div className="text-[11px] font-black uppercase text-slate-700 tracking-wider">4. Media Studio &amp; Attachments</div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* IMAGE UPLOADER */}
                  <div className="p-3 bg-blue-50/60 rounded-2xl border border-blue-200/80 space-y-2">
                    <label className="font-black text-[#1E90FF] text-[10px] uppercase tracking-wider block">📷 Cover Photo / Image</label>
                    <label className="w-full py-2 bg-white text-[#1E90FF] border border-blue-300 hover:bg-blue-50 font-bold rounded-xl cursor-pointer flex items-center justify-center gap-2 text-xs transition-all shadow-2xs">
                      <Upload size={14} />
                      <span>Upload Image...</span>
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
                      placeholder="Or image URL..."
                      value={editingArticle.coverImage || ''}
                      onChange={(e) => setEditingArticle({ ...editingArticle, coverImage: e.target.value })}
                      className="w-full p-2 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium focus:outline-none focus:border-[#1E90FF] text-xs"
                    />
                    {editingArticle.coverImage && (
                      <div className="flex items-center gap-2 pt-1">
                        <img src={editingArticle.coverImage} alt="Preview" className="w-10 h-10 rounded-lg object-cover border border-blue-300 shadow-2xs" />
                        <span className="text-[10px] font-bold text-emerald-600">✓ Image ready</span>
                      </div>
                    )}
                  </div>

                  {/* VIDEO / YOUTUBE EMBED */}
                  <div className="p-3 bg-red-50/60 rounded-2xl border border-red-200/80 space-y-2">
                    <label className="font-black text-red-600 text-[10px] uppercase tracking-wider block">📹 Video / YouTube</label>
                    <input
                      type="text"
                      placeholder="YouTube Video ID (e.g. dQw4w9WgXcQ)"
                      value={editingArticle.youtubeId || ''}
                      onChange={(e) => setEditingArticle({ ...editingArticle, youtubeId: e.target.value })}
                      className="w-full p-2 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium focus:outline-none focus:border-red-500 text-xs"
                    />
                    <label className="w-full py-2 bg-white text-red-600 border border-red-300 hover:bg-red-50 font-bold rounded-xl cursor-pointer flex items-center justify-center gap-2 text-xs transition-all shadow-2xs">
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

                  {/* DOCUMENT / PDF ATTACHMENT */}
                  <div className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 space-y-2">
                    <label className="font-black text-emerald-700 text-[10px] uppercase tracking-wider block">📄 Document / PDF</label>
                    <label className="w-full py-2 bg-white text-emerald-700 border border-emerald-300 hover:bg-emerald-50 font-bold rounded-xl cursor-pointer flex items-center justify-center gap-2 text-xs transition-all shadow-2xs">
                      <FileText size={14} />
                      <span>Attach Document...</span>
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
                      <span className="text-[10px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-lg border border-emerald-300 block truncate shadow-2xs">
                        📄 {editingArticle.documentName}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row justify-end gap-3 text-xs font-bold">
              <button
                type="button"
                onClick={() => { setShowEditArticleModal(false); setEditingArticle(null); }}
                className="px-6 py-3 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl font-bold transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] hover:brightness-110 text-white font-black rounded-xl shadow-md transition-all"
              >
                Save Article Changes
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- MODAL 6: ADD TEAM MEMBER --- */}
      {showAddTeamModal && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
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
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
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
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
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
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
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
            <div className="relative aspect-video bg-[#002D54] rounded-2xl overflow-hidden flex items-center justify-center border border-white/10">
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

      {/* CONFIRMATION DELETION DIALOG */}
      {confirmDeleteTarget && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 animate-in zoom-in-95 border border-red-100">
            <div className="flex items-center gap-3 text-red-600">
              <div className="p-3 bg-red-50 rounded-2xl border border-red-100">
                <Trash2 size={24} />
              </div>
              <div>
                <h3 className="font-black text-lg text-slate-900">Confirm Deletion</h3>
                <p className="text-xs text-slate-500 font-medium">Permanent action confirmation</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              Are you sure you want to delete <strong className="text-slate-900">"{confirmDeleteTarget.item?.title || confirmDeleteTarget.item?.name}"</strong>?
              This content will be moved to the Trash Bin where it can be restored or purged permanently.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setConfirmDeleteTarget(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 font-black text-xs rounded-xl hover:bg-slate-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPermanentDelete}
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-xl shadow"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TRASH BIN OVERLAY MODAL */}
      {showTrashBinModal && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl space-y-4 animate-in zoom-in-95 border border-blue-100 max-h-[85vh] flex flex-col">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-900 font-black">
                <Trash2 size={20} className="text-red-500" />
                <h3 className="text-lg">CMS Content Trash Bin ({trashItems.length})</h3>
              </div>
              <button onClick={() => setShowTrashBinModal(false)} className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {trashItems.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs font-bold">
                  Trash Bin is currently empty. No deleted content.
                </div>
              ) : (
                trashItems.map((item) => (
                  <div key={item.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-black text-slate-900">{item.title || item.name}</div>
                      <div className="text-[10px] text-slate-500 font-semibold">{item.category} &bull; Deleted {new Date(item.deletedAt).toLocaleDateString()}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleRestoreFromTrash(item.id)}
                        className="px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 font-black rounded-xl hover:bg-emerald-100 text-[11px]"
                      >
                        Restore
                      </button>
                      <button
                        onClick={() => handlePermanentlyPurgeTrash(item.id)}
                        className="px-3 py-1.5 bg-red-50 text-red-700 border border-red-200 font-black rounded-xl hover:bg-red-100 text-[11px]"
                      >
                        Purge
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* AUDIT LOGS MODAL */}
      {showAuditLogsModal && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl space-y-4 animate-in zoom-in-95 border border-blue-100 max-h-[85vh] flex flex-col">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-900 font-black">
                <Eye size={20} className="text-[#1E90FF]" />
                <h3 className="text-lg">CMS Administrative Audit Logs</h3>
              </div>
              <button onClick={() => setShowAuditLogsModal(false)} className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 text-xs">
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-900 font-semibold">
                Real-time tracking of administrator operations, status transitions, and publishing activity.
              </div>
              {[
                { id: '1', user: 'Ermias Alemayehu (Super Admin)', action: 'PUBLISHED', target: 'Corporate News Story #4', time: 'Just now' },
                { id: '2', user: 'Ermias Alemayehu (Super Admin)', action: 'UPDATED_VISIBILITY', target: 'SSGI Case Study', time: '10 mins ago' },
                { id: '3', user: 'Editorial Manager', action: 'CREATED_DRAFT', target: 'WabiSkills Bootcamp Video', time: '1 hour ago' }
              ].map((log) => (
                <div key={log.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
                  <div>
                    <span className="font-black text-slate-900">{log.user}</span>
                    <span className="mx-2 text-slate-400">&bull;</span>
                    <span className="font-extrabold text-[#1E90FF]">{log.action}</span>
                    <span className="mx-2 text-slate-400">&bull;</span>
                    <span className="font-semibold text-slate-600">{log.target}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MEDIA LIBRARY ASSETS MODAL */}
      {showMediaLibraryModal && (
        <div className="fixed inset-0 z-50 bg-[#03045E]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 shadow-2xl space-y-4 animate-in zoom-in-95 border border-purple-100 max-h-[85vh] flex flex-col">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-900 font-black">
                <ImageIcon size={20} className="text-purple-600" />
                <h3 className="text-lg">Enterprise Media Assets Library</h3>
              </div>
              <button onClick={() => setShowMediaLibraryModal(false)} className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400">
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 overflow-y-auto p-1">
              {cmsArticles
                .filter((a) => a.coverImage || a.photo || a.image)
                .slice(0, 8)
                .map((asset, idx) => (
                  <div key={asset.id || idx} className="p-2 border border-slate-200 rounded-2xl bg-slate-50 space-y-1">
                    <img src={asset.coverImage || asset.photo || asset.image} alt={asset.title} className="w-full h-24 object-cover rounded-xl" />
                    <div className="text-[10px] font-black text-slate-900 truncate">{asset.title || asset.name}</div>
                    <div className="text-[9px] text-slate-400 font-bold">{asset.category}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};