import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLeadsApi, updateLeadStatusApi, deleteLeadApi, checkAuthApi } from '../../services/api';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { Search, Filter, Trash2, RefreshCw, AlertCircle, CheckCircle, Mail, Phone, Clock } from 'lucide-react';

export const AdminDashboardPage = () => {
  const [user, setUser] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [actionMessage, setActionMessage] = useState('');
  const navigate = useNavigate();

  const loadAuthAndData = async () => {
    setLoading(true);
    try {
      const authRes = await checkAuthApi();
      if (authRes.data?.success) {
        setUser(authRes.data.data);
      } else {
        navigate('/admin/login');
        return;
      }

      const leadsRes = await fetchLeadsApi();
      if (leadsRes.data?.success) {
        setLeads(leadsRes.data.data);
      }
    } catch {
      navigate('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAuthAndData();
  }, [navigate]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateLeadStatusApi(id, newStatus);
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
      );
      showNotice('Status updated successfully');
    } catch {
      showNotice('Failed to update status');
    }
  };

  const handleDeleteLead = async (id) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    try {
      await deleteLeadApi(id);
      setLeads((prev) => prev.filter((l) => l.id !== id));
      showNotice('Lead deleted successfully');
    } catch {
      showNotice('Failed to delete lead');
    }
  };

  const showNotice = (msg) => {
    setActionMessage(msg);
    setTimeout(() => setActionMessage(''), 3000);
  };

  // Metrics computation
  const totalLeads = leads.length;
  const newCount = leads.filter((l) => l.status === 'NEW').length;
  const contactedCount = leads.filter((l) => l.status === 'CONTACTED').length;
  const qualifiedCount = leads.filter((l) => l.status === 'QUALIFIED').length;
  const closedCount = leads.filter((l) => l.status === 'CLOSED').length;

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = statusFilter === 'ALL' || lead.status === statusFilter;
    const q = search.toLowerCase();
    const matchesSearch =
      lead.fullName.toLowerCase().includes(q) ||
      lead.email.toLowerCase().includes(q) ||
      (lead.phone && lead.phone.toLowerCase().includes(q)) ||
      lead.inquiryType.toLowerCase().includes(q) ||
      lead.message.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex items-center justify-center">
        <div className="flex items-center gap-3 text-[#1E90FF] font-bold">
          <RefreshCw className="animate-spin" size={24} />
          <span>Loading Admin Console...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex">
      {/* Sidebar Component */}
      <AdminSidebar user={user} />

      {/* Main Content Area */}
      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        {/* Top Bar Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-[#0F172A]">Operations Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage inbound business leads, enterprise inquiries, and student enrollments.
            </p>
          </div>
          <button
            onClick={loadAuthAndData}
            className="self-start md:self-auto px-4 py-2 bg-white border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl hover:border-[#1E90FF] transition-all flex items-center gap-2 shadow-sm"
          >
            <RefreshCw size={14} />
            <span>Refresh Data</span>
          </button>
        </div>

        {actionMessage && (
          <div className="p-3 bg-blue-50 border border-blue-200 text-[#1E90FF] rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm">
            <CheckCircle size={16} />
            <span>{actionMessage}</span>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
            <div className="text-xs font-bold text-slate-500 uppercase">Total Enquiries</div>
            <div className="text-3xl font-extrabold text-[#0F172A] mt-1">{totalLeads}</div>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
            <div className="text-xs font-bold text-blue-600 uppercase">New</div>
            <div className="text-3xl font-extrabold text-blue-600 mt-1">{newCount}</div>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
            <div className="text-xs font-bold text-amber-600 uppercase">Contacted</div>
            <div className="text-3xl font-extrabold text-amber-600 mt-1">{contactedCount}</div>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
            <div className="text-xs font-bold text-purple-600 uppercase">Qualified</div>
            <div className="text-3xl font-extrabold text-purple-600 mt-1">{qualifiedCount}</div>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
            <div className="text-xs font-bold text-emerald-600 uppercase">Closed</div>
            <div className="text-3xl font-extrabold text-emerald-600 mt-1">{closedCount}</div>
          </div>
        </div>

        {/* Search & Filter Control Toolbar */}
        <div className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="relative w-full md:w-80">
            <Search size={18} className="absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search leads by name, email, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1E90FF]"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter size={16} className="text-slate-500" />
            <span className="text-xs font-semibold text-slate-600">Status Filter:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-50 text-[#0F172A] border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#1E90FF]"
            >
              <option value="ALL">All Statuses</option>
              <option value="NEW">New</option>
              <option value="CONTACTED">Contacted</option>
              <option value="QUALIFIED">Qualified</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>
        </div>

        {/* Leads Table Container */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <h2 className="font-bold text-base text-[#0F172A]">Inbound Client Leads &amp; Academy Applications</h2>
            <span className="text-xs text-slate-500 font-medium">Showing {filteredLeads.length} record(s)</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-600 uppercase font-bold tracking-wider border-b border-slate-200">
                <tr>
                  <th className="p-4">Client Details</th>
                  <th className="p-4">Inquiry Category</th>
                  <th className="p-4">Message / Request</th>
                  <th className="p-4">Date Submitted</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 space-y-1">
                        <div className="font-bold text-[#0F172A] text-sm">{lead.fullName}</div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Mail size={12} />
                          <span>{lead.email}</span>
                        </div>
                        {lead.phone && (
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <Phone size={12} />
                            <span>{lead.phone}</span>
                          </div>
                        )}
                      </td>
                      <td className="p-4 font-semibold text-[#1E90FF]">
                        <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200">
                          {lead.inquiryType}
                        </span>
                      </td>
                      <td className="p-4 max-w-xs truncate text-slate-600 leading-relaxed" title={lead.message}>
                        {lead.message}
                      </td>
                      <td className="p-4 text-slate-500 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} />
                          <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                        </div>
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <select
                          className={`border rounded-lg px-2.5 py-1 font-bold text-xs focus:outline-none ${
                            lead.status === 'NEW'
                              ? 'bg-blue-50 border-blue-300 text-blue-700'
                              : lead.status === 'CONTACTED'
                              ? 'bg-amber-50 border-amber-300 text-amber-700'
                              : lead.status === 'QUALIFIED'
                              ? 'bg-purple-50 border-purple-300 text-purple-700'
                              : 'bg-emerald-50 border-emerald-300 text-emerald-700'
                          }`}
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        >
                          <option value="NEW" className="bg-white text-slate-900">NEW</option>
                          <option value="CONTACTED" className="bg-white text-slate-900">CONTACTED</option>
                          <option value="QUALIFIED" className="bg-white text-slate-900">QUALIFIED</option>
                          <option value="CLOSED" className="bg-white text-slate-900">CLOSED</option>
                        </select>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-12 text-center text-slate-500">
                      <AlertCircle size={32} className="mx-auto mb-2 opacity-50" />
                      <p className="font-semibold text-sm">No lead records found matching criteria.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};