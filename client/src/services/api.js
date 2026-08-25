import axios from 'axios';

const API = axios.create({
  baseURL: '/api/v1',
  withCredentials: true
});

export const submitLeadApi = (formData) => API.post('/leads/submit', formData);
export const fetchLeadsApi = () => API.get('/leads/all');
export const updateLeadStatusApi = (id, status) => API.patch(`/leads/${id}/status`, { status });
export const deleteLeadApi = (id) => API.delete(`/leads/${id}`);

export const loginAdminApi = (credentials) => API.post('/auth/login', credentials);
export const logoutAdminApi = () => API.post('/auth/logout');
export const checkAuthApi = () => API.get('/auth/me');

// --- CMS NEWS & MEDIA REST API ENDPOINTS FOR ALL 14 CATEGORIES ---
export const fetchCmsCategoryApi = (category) => API.get(`/cms/${category}`);
export const fetchPublicCmsCategoryApi = (category) => API.get(`/cms/${category}?public=true`);
export const createCmsCategoryItemApi = (category, itemData) => API.post(`/cms/${category}`, itemData);
export const updateCmsCategoryItemApi = (category, id, itemData) => API.put(`/cms/${category}/${id}`, itemData);
export const deleteCmsCategoryItemApi = (category, id) => API.delete(`/cms/${category}/${id}`);

// --- ENTERPRISE CMS SPECIAL ENDPOINTS ---
export const fetchCmsOverviewStatsApi = () => API.get('/cms/overview');
export const fetchCmsTrashApi = () => API.get('/cms/trash');
export const restoreCmsItemApi = (id) => API.post(`/cms/trash/restore/${id}`);
export const permanentlyDeleteCmsItemApi = (id) => API.delete(`/cms/trash/permanent/${id}`);
export const bulkCmsActionApi = (action, category, ids) => API.post('/cms/bulk', { action, category, ids });
export const fetchCmsAuditLogsApi = () => API.get('/cms/audit-logs');