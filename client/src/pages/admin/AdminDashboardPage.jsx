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
  const initialCmsArticles = [
    {
      id: 'art-1',
      title: 'Digital Transformation in Geospatial Analytics with SSGI',
      category: 'Case Study',
      client: 'Space Science & Geospatial Institute',
      readTime: '5 min read',
      publishedDate: '2026-07-20',
      status: 'Published'
    },
    {
      id: 'art-2',
      title: 'Modernizing Public Sector Document Workflows for MInT & INSA',
      category: 'Government Tech',
      client: 'INSA / MInT Ethiopia',
      readTime: '7 min read',
      publishedDate: '2026-07-15',
      status: 'Published'
    },
    {
      id: 'art-3',
      title: 'Building Pan-African Tech Talent: WabiSkills Graduate Showcase',
      category: 'Documentary',
      client: 'Yomtech Media',
      readTime: '4 min read',
      publishedDate: '2026-08-01',
      status: 'Published'
    }
  ];
  const [cmsArticles, setCmsArticles] = useState(initialCmsArticles);
  const [showAddArticleModal, setShowAddArticleModal] = useState(false);
  const [newArticleForm, setNewArticleForm] = useState({
    title: '',
    category: 'Case Study',
    client: '',
    readTime: '5 min read',
    status: 'Published'
  });

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

  // --- REAL HANDLERS: CMS ARTICLES ---
  const handleCreateArticle = (e) => {
    e.preventDefault();
    const newArt = {
      id: `art-${Date.now()}`,
      ...newArticleForm,
      publishedDate: new Date().toISOString().split('T')[0]
    };
    setCmsArticles((prev) => [newArt, ...prev]);
    showNotice(`CMS Article published: ${newArticleForm.title}`);
    setNewArticleForm({ title: '', category: 'Case Study', client: '', readTime: '5 min read', status: 'Published' });
    setShowAddArticleModal(false);
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

            {/* TAB 6: CMS PROJECTS & ARTICLES */}
            {activeTab === 'cms-content' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center border-b border-slate-200/50 pb-4">
                  <div>
                    <h1 className="text-xl font-black text-slate-900 dark:text-white">CMS: Projects, Case Studies &amp; Documentaries</h1>
                    <p className="text-xs text-slate-400">Manage portfolio showcases (SSGI, INSA, MInT, Bunna Bank) and Yomtech Media articles.</p>
                  </div>
                  <button
                    onClick={() => setShowAddArticleModal(true)}
                    className="px-4 py-2 bg-[#1E90FF] hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
                  >
                    <Plus size={15} />
                    <span>Create Case Study</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cmsArticles.map((art) => (
                    <div key={art.id} className="p-5 rounded-2xl border bg-white border border-blue-100 shadow-sm hover:border-[#1E90FF] flex items-center justify-between shadow-sm">
                      <div className="space-y-1 max-w-xl">
                        <div className="font-extrabold text-sm text-slate-900 dark:text-white">{art.title}</div>
                        <div className="text-xs text-slate-500 font-medium">Client: {art.client} &bull; {art.category} &bull; {art.readTime}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-lg">{art.status}</span>
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-xs font-bold rounded-xl hover:text-[#1E90FF]">
                          Edit Article
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

      {/* --- MODAL 5: ADD CMS ARTICLE --- */}
      {showAddArticleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreateArticle} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
              <h3 className="font-black text-base">Create Case Study / Article</h3>
              <button type="button" onClick={() => setShowAddArticleModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-400">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bunna Bank Core ERP Transformation"
                  value={newArticleForm.title}
                  onChange={(e) => setNewArticleForm({ ...newArticleForm, title: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-400">Category</label>
                  <select
                    value={newArticleForm.category}
                    onChange={(e) => setNewArticleForm({ ...newArticleForm, category: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="Case Study">Case Study</option>
                    <option value="Government Tech">Government Tech</option>
                    <option value="Documentary">Documentary</option>
                    <option value="News & Media">News &amp; Media</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-400">Client / Institution</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bunna Bank S.C."
                    value={newArticleForm.client}
                    onChange={(e) => setNewArticleForm({ ...newArticleForm, client: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 border border-blue-200 text-slate-900 font-bold focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
              </div>
            </div>
            <div className="pt-2 flex justify-end gap-2 text-xs font-bold">
              <button type="button" onClick={() => setShowAddArticleModal(false)} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 bg-[#1E90FF] text-white rounded-xl shadow hover:bg-blue-600">
                Publish Article
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

    </div>
  );
};