import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, BarChart3, GraduationCap, ShieldAlert, Settings, LogOut, Shield, ExternalLink, Globe, ChevronLeft, ChevronRight, LayoutDashboard, Bell, FileText, Sparkles, Newspaper, Calendar, Megaphone, Briefcase, UserCheck, MessageSquareQuote, Image, Video, Tv, HelpCircle, Handshake } from 'lucide-react';
import { logoutAdminApi } from '../../services/api';
import logoImg from '../../assets/logos/logo.png';

export const AdminSidebar = ({ user, activeTab = 'leads', setActiveTab, isCollapsed, setIsCollapsed, isDarkMode = false }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutAdminApi();
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const mainNav = [
    { id: 'dashboard', label: 'Admin Dashboard', icon: LayoutDashboard },
    { id: 'leads', label: 'Leads & Inquiries', icon: Users, badge: '5' },
    { id: 'quotes', label: 'Quote & Consultations', icon: FileText },
    { id: 'jobs', label: 'Job Applications & HR', icon: GraduationCap },
  ];

  const cmsNav = [
    { id: 'cms-services', label: 'Services & Products Matrix', icon: Globe },
    { id: 'cms-news', label: 'Corporate News & Articles', icon: Newspaper },
    { id: 'cms-blog', label: 'Tech Articles & Engineering', icon: FileText },
    { id: 'cms-events', label: 'Upcoming Events & Webinars', icon: Calendar },
    { id: 'cms-announcements', label: 'Official Announcements', icon: Megaphone },
    { id: 'cms-projects', label: 'Featured Project Case Studies', icon: Briefcase },
    { id: 'cms-team', label: 'Executive Team Members', icon: UserCheck },
    { id: 'cms-testimonials', label: 'Client & Learner Testimonials', icon: MessageSquareQuote },
    { id: 'cms-gallery', label: 'Photo Gallery Showcase', icon: Image },
    { id: 'cms-videos', label: 'Video & Documentary Hub', icon: Video },
    { id: 'cms-media', label: 'Media Appearances & Coverage', icon: Tv },
    { id: 'cms-press', label: 'Press & Corporate Content', icon: Sparkles },
    { id: 'cms-faq', label: 'Support FAQ & Knowledge Base', icon: HelpCircle },
    { id: 'cms-partners', label: 'Trusted Institutional Partners', icon: Handshake },
  ];

  const securityNav = [
    { id: 'roles', label: 'User Roles & Permissions', icon: Shield },
    { id: 'system', label: 'Security & Audit Logs', icon: ShieldAlert },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className={`transition-all duration-300 flex flex-col justify-between border-r h-screen sticky top-0 shrink-0 z-30 ${
      isDarkMode
        ? 'bg-[#03045E] border-cyan-500/30 text-white shadow-[6px_0_24px_rgba(0,0,0,0.25)]'
        : 'bg-white border-slate-200/80 text-slate-900 shadow-[6px_0_20px_rgba(0,0,0,0.035)]'
    } ${isCollapsed ? 'w-20 p-3.5' : 'w-64 p-5'}`}>
      <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-80px)] pr-1 scrollbar-none">
        
        {/* Brand Header matching screenshot design */}
        <div className={`flex flex-col border-b pb-4 ${isDarkMode ? 'border-cyan-500/30' : 'border-slate-100'}`}>
          <div className="flex items-center justify-between">
            <Link to="/" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1E90FF] to-[#0ED3DD] p-0.5 shadow-xs flex items-center justify-center shrink-0" title="Go to YomTech Global Home">
              <img src={logoImg} alt="Yomtech Logo" className="w-full h-full object-cover rounded-full bg-white" />
            </Link>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`p-1.5 rounded-lg border transition-all ${
                isDarkMode
                  ? 'bg-blue-900/50 border-cyan-400/30 text-cyan-300 hover:text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
              }`}
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
            </button>
          </div>

          {!isCollapsed && (
            <div className="mt-3">
              <div className={`font-black text-sm tracking-tight leading-snug ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                YomTech Global
              </div>
              <div className="text-[11px] font-bold text-slate-500">
                Admin Control Gateway
              </div>
            </div>
          )}
        </div>

        {/* MAIN OPERATIONS */}
        <div>
          {!isCollapsed && (
            <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 px-3 mb-2">
              MAIN
            </div>
          )}
          <nav className="space-y-1">
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab && setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl font-bold text-xs transition-all ${
                    isActive
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black shadow-md'
                        : 'bg-emerald-50 text-emerald-900 border border-emerald-200/60 font-black'
                      : isDarkMode
                      ? 'text-slate-200 hover:bg-blue-900/40 hover:text-[#0ED3DD]'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className={isActive ? (isDarkMode ? 'text-white' : 'text-emerald-700') : 'text-slate-500'} />
                    {!isCollapsed && <span>{item.label}</span>}
                  </div>
                  {!isCollapsed && item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-slate-200 text-slate-700">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* CONTENT MANAGEMENT SYSTEM (CMS) */}
        <div>
          {!isCollapsed && (
            <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 px-3 mb-2">
              CMS MANAGEMENT
            </div>
          )}
          <nav className="space-y-1">
            {cmsNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab && setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-xs transition-all ${
                    isActive
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black shadow-md'
                        : 'bg-emerald-50 text-emerald-900 border border-emerald-200/60 font-black'
                      : isDarkMode
                      ? 'text-slate-200 hover:bg-blue-900/40 hover:text-[#0ED3DD]'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon size={16} className={isActive ? (isDarkMode ? 'text-white' : 'text-emerald-700') : 'text-slate-500'} />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* ADMINISTRATION & SECURITY */}
        <div>
          {!isCollapsed && (
            <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 px-3 mb-2">
              ADMIN &amp; SECURITY
            </div>
          )}
          <nav className="space-y-1">
            {securityNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab && setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-xs transition-all ${
                    isActive
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white font-black shadow-md'
                        : 'bg-emerald-50 text-emerald-900 border border-emerald-200/60 font-black'
                      : isDarkMode
                      ? 'text-slate-200 hover:bg-blue-900/40 hover:text-[#0ED3DD]'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon size={16} className={isActive ? (isDarkMode ? 'text-white' : 'text-emerald-700') : 'text-slate-500'} />
                  {!isCollapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer Section */}
      <div className={`space-y-2 pt-4 border-t ${isDarkMode ? 'border-cyan-500/30' : 'border-slate-100'}`}>
        <Link
          to="/"
          target="_blank"
          className={`flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-xl transition-all ${
            isDarkMode ? 'text-cyan-200 hover:text-white hover:bg-blue-900/50' : 'text-slate-600 hover:text-[#1E90FF] hover:bg-slate-100'
          }`}
        >
          <Globe size={16} />
          {!isCollapsed && <span>View Live Website</span>}
          {!isCollapsed && <ExternalLink size={12} className="ml-auto opacity-70" />}
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-red-600 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/60 border border-red-200 dark:border-red-800/60 font-bold text-xs transition-all"
        >
          <LogOut size={16} />
          {!isCollapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
};
