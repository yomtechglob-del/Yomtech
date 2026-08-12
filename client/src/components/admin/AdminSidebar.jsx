import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, LogOut, Shield, ExternalLink, Globe } from 'lucide-react';
import { logoutAdminApi } from '../../services/api';
import logoImg from '../../assets/logo.png';

export const AdminSidebar = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logoutAdminApi();
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const navItems = [
    { label: 'Leads & Enquiries', path: '/admin/dashboard', icon: Users },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen flex flex-col justify-between p-6 shadow-sm">
      <div className="space-y-8">
        {/* Brand Header */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Yomtech Global Logo"
            className="w-10 h-10 object-cover rounded-full border border-[#1E90FF] shadow-sm"
          />
          <div>
            <div className="font-extrabold text-base tracking-wider text-[#0F172A]">
              Yomtech <span className="text-[#1E90FF]">Admin</span>
            </div>
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
              Control Gateway
            </div>
          </div>
        </div>

        {/* User Card */}
        {user && (
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1E90FF] font-bold text-sm">
              <Shield size={18} />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-[#0F172A] truncate">{user.fullName || user.email}</div>
              <div className="text-[10px] text-[#1E90FF] font-semibold uppercase">{user.role || 'SUPER_ADMIN'}</div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="space-y-1">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 mb-2">
            Main Operations
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  isActive
                    ? 'bg-[#1E90FF] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Section */}
      <div className="space-y-3 pt-6 border-t border-slate-200">
        <Link
          to="/"
          target="_blank"
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#1E90FF] transition-colors px-3 py-1.5"
        >
          <Globe size={14} />
          <span>View Live Site</span>
          <ExternalLink size={12} className="ml-auto" />
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-red-600 hover:bg-red-50 border border-red-200 font-semibold text-sm transition-all"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
