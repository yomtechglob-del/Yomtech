import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Users,
  BarChart3,
  GraduationCap,
  ShieldAlert,
  Settings,
  LogOut,
  Shield,
  Globe,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Bell,
  FileText,
  Sparkles,
  Newspaper,
  Calendar,
  Megaphone,
  Briefcase,
  UserCheck,
  MessageSquareQuote,
  Image,
  Video,
  Tv,
  HelpCircle,
  Handshake,
  ChevronDown,
  Award,
  Layers,
  Building,
  Mail,
  HardDrive,
  Search,
  Database,
  CheckSquare,
  Activity,
  Folder
} from 'lucide-react';
import { logoutAdminApi } from '../../services/api';
import logoImg from '../../assets/logos/logo.png';

export const AdminSidebar = ({ user, activeTab = 'leads', setActiveTab, isCollapsed, setIsCollapsed, isDarkMode = false }) => {
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [isCmsOpen, setIsCmsOpen] = useState(true);
  const [isTalentOpen, setIsTalentOpen] = useState(true);
  const [isSecurityOpen, setIsSecurityOpen] = useState(true);

  const handleLogout = async () => {
    try {
      await logoutAdminApi();
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  // Section 1: Main Gateway & Requests
  const mainNav = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'leads', label: 'Leads & Inquiries', icon: Users, badge: '5' },
    { id: 'quotes', label: 'Quote Requests', icon: FileText },
    { id: 'consultations', label: 'Consultation Requests', icon: CheckSquare },
  ];

  // Section 2: CMS Pages & Content Matrix (Collapsible Accordion)
  const cmsNav = [
    { id: 'cms-about', label: 'Pages & About', icon: Layers },
    { id: 'cms-leadership', label: 'Leadership', icon: UserCheck },
    { id: 'cms-team', label: 'Executive Team', icon: Users },
    { id: 'cms-achievements', label: 'Achievements & Awards', icon: Award },
    { id: 'cms-services', label: 'Services Matrix', icon: Globe },
    { id: 'cms-solutions', label: 'Solutions', icon: Layers },
    { id: 'cms-industries', label: 'Industries', icon: Building },
    { id: 'cms-products', label: 'Products', icon: Briefcase },
    { id: 'cms-projects', label: 'Projects', icon: Briefcase },
    { id: 'cms-casestudies', label: 'Case Studies', icon: FileText },
    { id: 'cms-partners', label: 'Partners', icon: Handshake },
    { id: 'cms-testimonials', label: 'Testimonials', icon: MessageSquareQuote },
    { id: 'cms-blog', label: 'Tech Blog', icon: FileText },
    { id: 'cms-news', label: 'News & Articles', icon: Newspaper },
    { id: 'cms-events', label: 'Events & Webinars', icon: Calendar },
    { id: 'cms-announcements', label: 'Announcements', icon: Megaphone },
    { id: 'cms-videos', label: 'Media & Documentaries', icon: Video },
    { id: 'cms-faq', label: 'FAQs & Support', icon: HelpCircle },
  ];

  // Section 3: Talent, HR & Communications
  const talentNav = [
    { id: 'jobs', label: 'Job Vacancies', icon: GraduationCap },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'messages', label: 'Contact Messages', icon: Mail },
    { id: 'newsletter', label: 'Newsletter Subscribers', icon: Bell },
    { id: 'notifications', label: 'System Notifications', icon: Bell },
  ];

  // Section 4: Administration, Audit & Security
  const securityNav = [
    { id: 'users', label: 'Users Directory', icon: Users },
    { id: 'roles', label: 'Roles & Permissions', icon: Shield },
    { id: 'audit-logs', label: 'Activity Logs', icon: ShieldAlert },
    { id: 'file-manager', label: 'File Manager & Assets', icon: Folder },
    { id: 'seo', label: 'SEO & Indexing', icon: Search },
    { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
    { id: 'backups', label: 'Database Backups', icon: Database },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Auto-expand accordion if active tab belongs to a section
  useEffect(() => {
    if (mainNav.some((item) => item.id === activeTab)) setIsDashboardOpen(true);
    if (cmsNav.some((item) => item.id === activeTab)) setIsCmsOpen(true);
    if (talentNav.some((item) => item.id === activeTab)) setIsTalentOpen(true);
    if (securityNav.some((item) => item.id === activeTab)) setIsSecurityOpen(true);
  }, [activeTab]);

  return (
    <aside className={`transition-all duration-300 flex flex-col justify-between border-r h-screen sticky top-0 shrink-0 z-30 bg-gradient-to-b from-white via-sky-50/40 to-blue-50/60 backdrop-blur-2xl border-sky-200/80 text-slate-800 shadow-[0_8px_30px_rgba(0,119,182,0.06)] ${
      isCollapsed ? 'w-20 p-3' : 'w-64 p-3.5'
    }`}>
      <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-75px)] pr-0.5 scrollbar-thin scrollbar-thumb-sky-300">
        
        {/* Top Brand Logo Box Matching Advanced Sapphire-Cyan Canvas */}
        <div className="p-3.5 bg-gradient-to-br from-sky-50 via-blue-50/70 to-white border border-sky-200/90 rounded-3xl shadow-xs space-y-2 relative flex flex-col items-center justify-center text-center">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute top-3 right-3 p-1.5 rounded-xl border border-sky-200/90 bg-white text-sky-700 hover:text-sky-900 hover:bg-sky-100/70 transition-all cursor-pointer shadow-2xs z-10"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
          </button>

          <Link
            to="/"
            className={`${isCollapsed ? 'w-10 h-10' : 'w-12 h-12'} rounded-2xl border border-sky-200 bg-white flex items-center justify-center p-1.5 shadow-xs hover:scale-105 transition-all duration-300 mx-auto`}
            title="Go to YomTech Global Home"
          >
            <img src={logoImg} alt="Yomtech Logo" className="w-full h-full object-contain rounded-xl" />
          </Link>

          {!isCollapsed && (
            <div className="pt-1 flex flex-col items-center justify-center text-center w-full">
              <div className="flex items-center justify-center gap-1.5 text-xs font-black text-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs shrink-0 animate-pulse" />
                <span className="truncate tracking-tight text-sky-950 font-extrabold">YomTech Global</span>
              </div>
              <div className="text-[10px] font-black text-[#0077B6] uppercase tracking-widest pt-0.5 text-center">
                ADMIN DASHBOARD
              </div>
            </div>
          )}
        </div>

        {/* SECTION 1: DASHBOARD ACCORDION */}
        <div>
          <button
            type="button"
            onClick={() => setIsDashboardOpen((prev) => !prev)}
            className={`w-full flex items-center justify-between p-2.5 rounded-2xl transition-all duration-300 cursor-pointer select-none mb-1 text-left ${
              !isCollapsed
                ? 'bg-gradient-to-r from-sky-100/70 via-blue-50/80 to-indigo-50/60 hover:from-sky-100 hover:to-blue-100/80 border border-sky-200/90 shadow-2xs group'
                : 'hover:bg-sky-100/60'
            }`}
            title={isDashboardOpen ? 'Collapse Dashboard Section' : 'Expand Dashboard Section'}
          >
            {!isCollapsed ? (
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#0077B6] to-[#0ED3DD] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <LayoutDashboard size={14} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black tracking-wider text-sky-950">DASHBOARD</span>
                    <span className="px-1.5 py-0.2 bg-gradient-to-r from-[#0077B6] to-[#0ED3DD] text-white rounded-full text-[9px] font-black shadow-2xs">
                      {mainNav.length}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-sky-700/80 block -mt-0.5">Main &amp; Inquiries</span>
                </div>
              </div>
            ) : (
              <div className="w-full flex justify-center text-sky-700 py-1" title="DASHBOARD">
                <LayoutDashboard size={18} className="text-[#0077B6]" />
              </div>
            )}
            {!isCollapsed && (
              <div className="w-6 h-6 rounded-lg bg-white/80 border border-sky-200/80 flex items-center justify-center text-sky-700 group-hover:bg-white shadow-2xs">
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isDashboardOpen ? 'rotate-180 text-[#0077B6]' : ''
                  }`}
                />
              </div>
            )}
          </button>

          {isDashboardOpen && (
            <nav className="rounded-2xl border border-sky-200/90 bg-white/90 shadow-2xs divide-y divide-sky-100/90 overflow-hidden my-1 animate-in fade-in-50">
              {mainNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab && setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 font-bold text-xs transition-all duration-200 relative cursor-pointer group ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-100 via-sky-50 to-blue-50/90 text-[#0077B6] font-black'
                        : 'text-slate-700 font-semibold hover:text-sky-900 hover:bg-sky-50/80'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0077B6] to-[#0ED3DD] shadow-[0_0_8px_rgba(0,180,216,0.6)]" />
                    )}
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${
                        isActive ? 'bg-white text-[#0077B6] shadow-2xs border border-sky-200' : 'bg-sky-100/50 text-sky-600 group-hover:bg-white'
                      }`}>
                        <Icon size={16} />
                      </div>
                      {!isCollapsed && <span className="truncate">{item.label}</span>}
                    </div>
                    {!isCollapsed && item.badge && (
                      <span className={`px-2 py-0.5 text-[10px] font-black rounded-full shadow-xs ${
                        isActive ? 'bg-gradient-to-r from-[#0077B6] to-[#0ED3DD] text-white' : 'bg-sky-100 text-sky-800 border border-sky-200'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          )}
        </div>

        {/* SECTION 2: NEWS ACCORDION & CMS MODULES */}
        <div>
          <button
            type="button"
            onClick={() => setIsCmsOpen((prev) => !prev)}
            className={`w-full flex items-center justify-between p-2.5 rounded-2xl transition-all duration-300 cursor-pointer select-none mb-1 text-left ${
              !isCollapsed
                ? 'bg-gradient-to-r from-sky-100/70 via-blue-50/80 to-indigo-50/60 hover:from-sky-100 hover:to-blue-100/80 border border-sky-200/90 shadow-2xs group'
                : 'hover:bg-sky-100/60'
            }`}
            title={isCmsOpen ? 'Collapse News Section' : 'Expand News Section'}
          >
            {!isCollapsed ? (
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#0077B6] to-[#0ED3DD] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <Newspaper size={14} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black tracking-wider text-sky-950">NEWS</span>
                    <span className="px-1.5 py-0.2 bg-gradient-to-r from-[#0077B6] to-[#0ED3DD] text-white rounded-full text-[9px] font-black shadow-2xs">
                      {cmsNav.length}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-sky-700/80 block -mt-0.5">Content &amp; Articles</span>
                </div>
              </div>
            ) : (
              <div className="w-full flex justify-center text-sky-700 py-1" title="NEWS">
                <Newspaper size={18} className="text-[#0077B6]" />
              </div>
            )}
            {!isCollapsed && (
              <div className="w-6 h-6 rounded-lg bg-white/80 border border-sky-200/80 flex items-center justify-center text-sky-700 group-hover:bg-white shadow-2xs">
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isCmsOpen ? 'rotate-180 text-[#0077B6]' : ''
                  }`}
                />
              </div>
            )}
          </button>

          {isCmsOpen && (
            <div className="rounded-2xl border border-sky-200/90 bg-white/90 shadow-2xs divide-y divide-sky-100/90 overflow-hidden my-1 animate-in fade-in-50">
              {cmsNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab && setActiveTab(item.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 font-bold text-xs transition-all duration-200 relative cursor-pointer group ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-100 via-sky-50 to-blue-50/90 text-[#0077B6] font-black'
                        : 'text-slate-700 font-semibold hover:text-sky-900 hover:bg-sky-50/80'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0077B6] to-[#0ED3DD] shadow-[0_0_8px_rgba(0,180,216,0.6)]" />
                    )}
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-[#0077B6] shadow-2xs border border-sky-200'
                        : 'bg-sky-100/50 text-sky-600 group-hover:bg-white group-hover:text-sky-800'
                    }`}>
                      <Icon size={14} />
                    </div>
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* SECTION 3: TALENT & HR ACCORDION */}
        <div>
          <button
            type="button"
            onClick={() => setIsTalentOpen((prev) => !prev)}
            className={`w-full flex items-center justify-between p-2.5 rounded-2xl transition-all duration-300 cursor-pointer select-none mb-1 text-left ${
              !isCollapsed
                ? 'bg-gradient-to-r from-sky-100/70 via-blue-50/80 to-indigo-50/60 hover:from-sky-100 hover:to-blue-100/80 border border-sky-200/90 shadow-2xs group'
                : 'hover:bg-sky-100/60'
            }`}
            title={isTalentOpen ? 'Collapse Talent & HR Section' : 'Expand Talent & HR Section'}
          >
            {!isCollapsed ? (
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#0077B6] to-[#0ED3DD] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap size={14} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black tracking-wider text-sky-950">TALENT &amp; HR</span>
                    <span className="px-1.5 py-0.2 bg-gradient-to-r from-[#0077B6] to-[#0ED3DD] text-white rounded-full text-[9px] font-black shadow-2xs">
                      {talentNav.length}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-sky-700/80 block -mt-0.5">Careers &amp; Messages</span>
                </div>
              </div>
            ) : (
              <div className="w-full flex justify-center text-sky-700 py-1" title="TALENT & HR">
                <GraduationCap size={18} className="text-[#0077B6]" />
              </div>
            )}
            {!isCollapsed && (
              <div className="w-6 h-6 rounded-lg bg-white/80 border border-sky-200/80 flex items-center justify-center text-sky-700 group-hover:bg-white shadow-2xs">
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isTalentOpen ? 'rotate-180 text-[#0077B6]' : ''
                  }`}
                />
              </div>
            )}
          </button>

          {isTalentOpen && (
            <nav className="rounded-2xl border border-sky-200/90 bg-white/90 shadow-2xs divide-y divide-sky-100/90 overflow-hidden my-1 animate-in fade-in-50">
              {talentNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab && setActiveTab(item.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 font-bold text-xs transition-all duration-200 relative cursor-pointer group ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-100 via-sky-50 to-blue-50/90 text-[#0077B6] font-black'
                        : 'text-slate-700 font-semibold hover:text-sky-900 hover:bg-sky-50/80'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0077B6] to-[#0ED3DD] shadow-[0_0_8px_rgba(0,180,216,0.6)]" />
                    )}
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${
                      isActive ? 'bg-white text-[#0077B6] shadow-2xs border border-sky-200' : 'bg-sky-100/50 text-sky-600 group-hover:bg-white'
                    }`}>
                      <Icon size={15} />
                    </div>
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </button>
                );
              })}
            </nav>
          )}
        </div>

        {/* SECTION 4: SYSTEM & SECURITY ACCORDION */}
        <div>
          <button
            type="button"
            onClick={() => setIsSecurityOpen((prev) => !prev)}
            className={`w-full flex items-center justify-between p-2.5 rounded-2xl transition-all duration-300 cursor-pointer select-none mb-1 text-left ${
              !isCollapsed
                ? 'bg-gradient-to-r from-sky-100/70 via-blue-50/80 to-indigo-50/60 hover:from-sky-100 hover:to-blue-100/80 border border-sky-200/90 shadow-2xs group'
                : 'hover:bg-sky-100/60'
            }`}
            title={isSecurityOpen ? 'Collapse System & Security Section' : 'Expand System & Security Section'}
          >
            {!isCollapsed ? (
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#0077B6] to-[#0ED3DD] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldAlert size={14} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black tracking-wider text-sky-950">SYSTEM &amp; SECURITY</span>
                    <span className="px-1.5 py-0.2 bg-gradient-to-r from-[#0077B6] to-[#0ED3DD] text-white rounded-full text-[9px] font-black shadow-2xs">
                      {securityNav.length}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-sky-700/80 block -mt-0.5">Roles &amp; Audit Logs</span>
                </div>
              </div>
            ) : (
              <div className="w-full flex justify-center text-sky-700 py-1" title="SYSTEM & SECURITY">
                <ShieldAlert size={18} className="text-[#0077B6]" />
              </div>
            )}
            {!isCollapsed && (
              <div className="w-6 h-6 rounded-lg bg-white/80 border border-sky-200/80 flex items-center justify-center text-sky-700 group-hover:bg-white shadow-2xs">
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isSecurityOpen ? 'rotate-180 text-[#0077B6]' : ''
                  }`}
                />
              </div>
            )}
          </button>

          {isSecurityOpen && (
            <nav className="rounded-2xl border border-sky-200/90 bg-white/90 shadow-2xs divide-y divide-sky-100/90 overflow-hidden my-1 animate-in fade-in-50">
              {securityNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab && setActiveTab(item.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 font-bold text-xs transition-all duration-200 relative cursor-pointer group ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-100 via-sky-50 to-blue-50/90 text-[#0077B6] font-black'
                        : 'text-slate-700 font-semibold hover:text-sky-900 hover:bg-sky-50/80'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0077B6] to-[#0ED3DD] shadow-[0_0_8px_rgba(0,180,216,0.6)]" />
                    )}
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${
                      isActive ? 'bg-white text-[#0077B6] shadow-2xs border border-sky-200' : 'bg-sky-100/50 text-sky-600 group-hover:bg-white'
                    }`}>
                      <Icon size={15} />
                    </div>
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </div>

      {/* Footer Logout Matching Advanced Light Sapphire Theme */}
      <div className="pt-3 border-t border-sky-200/80 flex items-center justify-between">
        <Link
          to="/"
          target="_blank"
          className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-extrabold rounded-xl text-sky-800 hover:text-[#0077B6] hover:bg-sky-100/50 transition-colors"
          title="View Live Website"
        >
          <Globe size={15} className="text-[#0077B6]" />
          {!isCollapsed && <span>Live Site</span>}
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-slate-700 hover:text-rose-600 hover:bg-rose-50/80 font-extrabold text-xs transition-colors cursor-pointer"
        >
          <LogOut size={15} className="text-slate-400 hover:text-rose-500" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

