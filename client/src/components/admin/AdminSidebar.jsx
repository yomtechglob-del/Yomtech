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
    <aside className={`transition-all duration-300 flex flex-col justify-between border-r h-screen sticky top-0 shrink-0 z-30 bg-slate-50/90 border-slate-200 text-slate-800 ${
      isCollapsed ? 'w-20 p-3' : 'w-64 p-4'
    }`}>
      <div className="space-y-5 overflow-y-auto max-h-[calc(100vh-70px)] pr-0 scrollbar-none">
        
        {/* Top Brand Logo Box Matching Reference Layout */}
        <div className="p-3.5 bg-white border border-slate-200/90 rounded-3xl shadow-xs space-y-2 relative">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className={`${isCollapsed ? 'w-10 h-10' : 'w-12 h-12'} rounded-full border border-slate-200/90 bg-white flex items-center justify-center p-1 shadow-xs hover:scale-105 transition-transform`}
              title="Go to YomTech Global Home"
            >
              <img src={logoImg} alt="Yomtech Logo" className="w-full h-full object-cover rounded-full" />
            </Link>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>
          </div>

          {!isCollapsed && (
            <div className="pt-1">
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-xs shrink-0" />
                <span className="truncate">YomTech Global</span>
              </div>
              <div className="text-[10px] font-black text-blue-600 uppercase tracking-wider pl-3.5 pt-0.5">
                ADMIN DASHBOARD
              </div>
            </div>
          )}
        </div>

        {/* DASHBOARD & MAIN */}
        <div>
          {!isCollapsed && (
            <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 px-3 mb-2">
              DASHBOARD
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
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl font-bold text-xs transition-all relative cursor-pointer ${
                    isActive
                      ? 'bg-blue-50/90 text-blue-700 font-extrabold border border-blue-200/80 shadow-2xs'
                      : 'text-slate-600 font-semibold hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-full" />
                  )}
                  <div className="flex items-center gap-3">
                    <Icon size={16} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </div>
                  {!isCollapsed && item.badge && (
                    <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-full ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* CORE OPERATIONAL & CMS MODULES */}
        <div>
          {!isCollapsed && (
            <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 px-3 mb-2">
              CORE OPERATIONAL MODULES
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
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-xs transition-all relative cursor-pointer ${
                    isActive
                      ? 'bg-blue-50/90 text-blue-700 font-extrabold border border-blue-200/80 shadow-2xs'
                      : 'text-slate-600 font-semibold hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-full" />
                  )}
                  <Icon size={16} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* INSTITUTION MODULES & SECURITY */}
        <div>
          {!isCollapsed && (
            <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 px-3 mb-2">
              INSTITUTION &amp; SECURITY
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
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-xs transition-all relative cursor-pointer ${
                    isActive
                      ? 'bg-blue-50/90 text-blue-700 font-extrabold border border-blue-200/80 shadow-2xs'
                      : 'text-slate-600 font-semibold hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-full" />
                  )}
                  <Icon size={16} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                  {!isCollapsed && <span className="truncate">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer Logout Matching Reference Layout */}
      <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
        <Link
          to="/"
          target="_blank"
          className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-bold rounded-xl text-slate-600 hover:text-blue-600 transition-colors"
          title="View Live Website"
        >
          <Globe size={15} />
          {!isCollapsed && <span>Live Site</span>}
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-slate-600 hover:text-red-600 font-bold text-xs transition-colors cursor-pointer"
        >
          <LogOut size={15} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};
