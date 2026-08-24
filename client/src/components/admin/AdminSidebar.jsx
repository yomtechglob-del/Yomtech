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
    { id: 'leads', label: 'Leads & Inquiries', icon: Users },
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
    <aside className={`transition-all duration-300 flex flex-col justify-between border-r ${
      isDarkMode ? 'bg-[#03045E] border-cyan-500/30 text-white' : 'bg-white border-blue-100 text-slate-900'
    } ${isCollapsed ? 'w-20 p-4' : 'w-64 p-5'} shadow-[4px_0_24px_rgba(0,0,0,0.06)] relative z-20`}>
      <div className="space-y-6">
        
        {/* Brand Header matching Yomtech Global design */}
        <div className={`flex items-center justify-between pb-4 border-b ${isDarkMode ? 'border-cyan-500/30' : 'border-blue-100'}`}>
          <Link to="/" className="flex items-center gap-3 overflow-hidden group cursor-pointer" title="Go to YomTech Global Home">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1E90FF] to-[#0ED3DD] p-0.5 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
              <img src={logoImg} alt="Yomtech Logo" className="w-full h-full object-cover rounded-xl bg-white" />
            </div>
            {!isCollapsed && (
              <div>
                <div className={`font-black text-base tracking-tight leading-tight flex items-center gap-1.5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  <span>Yomtech</span>
                  <span className="text-[#0ED3DD] text-[10px] font-black px-1.5 py-0.5 rounded-full bg-blue-500/20 border border-cyan-400/40">GLOBAL</span>
                </div>
                <div className="text-[11px] font-bold text-cyan-300 dark:text-cyan-400">CMS &amp; Control Gateway</div>
              </div>
            )}
          </Link>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`p-1.5 rounded-xl border transition-all ${
              isDarkMode
                ? 'bg-blue-900/50 border-cyan-400/30 text-cyan-300 hover:text-white hover:bg-blue-800'
                : 'bg-blue-50 border-blue-200 text-[#1E90FF] hover:bg-blue-100 shadow-sm'
            }`}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* User Badge Card */}
        {user && !isCollapsed && (
          <div className={`p-3.5 rounded-2xl border flex items-center gap-3 shadow-sm ${
            isDarkMode ? 'bg-blue-900/40 border-cyan-400/30 text-white' : 'bg-blue-50/70 border-blue-200 text-slate-900'
          }`}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-md">
              <Shield size={18} />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-extrabold truncate">{user.fullName || 'Ermias Alemayehu'}</div>
              <div className="text-[10px] text-[#0ED3DD] font-black uppercase tracking-wider">{user.role || 'SUPER_ADMIN'}</div>
            </div>
          </div>
        )}

        {/* MAIN OPERATIONS */}
        <div>
          {!isCollapsed && (
            <div className="text-[10px] uppercase font-black tracking-widest text-[#0ED3DD] px-3 mb-2.5">
              Main Operations
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
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-extrabold text-xs transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white shadow-lg shadow-blue-500/30 font-black'
                      : isDarkMode
                      ? 'text-slate-200 hover:bg-blue-900/40 hover:text-[#0ED3DD]'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-[#1E90FF]'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-white' : 'text-[#1E90FF]'} />
                  {!isCollapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* CONTENT MANAGEMENT SYSTEM (CMS) */}
        <div>
          {!isCollapsed && (
            <div className="text-[10px] uppercase font-black tracking-widest text-[#0ED3DD] px-3 mb-2.5">
              CMS Management
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
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-extrabold text-xs transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white shadow-lg shadow-blue-500/30 font-black'
                      : isDarkMode
                      ? 'text-slate-200 hover:bg-blue-900/40 hover:text-[#0ED3DD]'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-[#1E90FF]'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-white' : 'text-[#1E90FF]'} />
                  {!isCollapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* ADMINISTRATION & SECURITY */}
        <div>
          {!isCollapsed && (
            <div className="text-[10px] uppercase font-black tracking-widest text-[#0ED3DD] px-3 mb-2.5">
              Admin &amp; Security
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
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-extrabold text-xs transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1E90FF] to-[#0ED3DD] text-white shadow-lg shadow-blue-500/30 font-black'
                      : isDarkMode
                      ? 'text-slate-200 hover:bg-blue-900/40 hover:text-[#0ED3DD]'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-[#1E90FF]'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-white' : 'text-[#1E90FF]'} />
                  {!isCollapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer Section */}
      <div className={`space-y-2 pt-4 border-t ${isDarkMode ? 'border-cyan-500/30' : 'border-blue-100'}`}>
        <Link
          to="/"
          target="_blank"
          className={`flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-xl transition-all ${
            isDarkMode ? 'text-cyan-200 hover:text-white hover:bg-blue-900/50' : 'text-slate-600 hover:text-[#1E90FF] hover:bg-blue-50'
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
