import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ThreeDBackground } from './components/common/ThreeDBackground';

import { HomePage } from './pages/public/HomePage';
import { ServicesPage } from './pages/public/ServicesPage';
import { SolutionsPage } from './pages/public/SolutionsPage';
import { IndustriesPage } from './pages/public/IndustriesPage';
import { PortfolioPage } from './pages/public/PortfolioPage';
import { MethodologyPage } from './pages/public/MethodologyPage';
import { WhyChooseUsPage } from './pages/public/WhyChooseUsPage';
import { PartnersPage } from './pages/public/PartnersPage';
import { ClientsPage } from './pages/public/ClientsPage';
import { CareersPage } from './pages/public/CareersPage';
import { WabiJobPage } from './pages/public/WabiJobPage';
import { MediaPage } from './pages/public/MediaPage';
import { DocumentariesPage } from './pages/public/DocumentariesPage';
import { AcademyPage } from './pages/public/AcademyPage';
import { AboutPage } from './pages/public/AboutPage';
import { ContactPage } from './pages/public/ContactPage';
import { ProductsPage } from './pages/public/ProductsPage';
import { PrivacyPolicyPage } from './pages/public/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/public/TermsOfServicePage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';

import { InsightsMainPage } from './pages/public/insights/InsightsMainPage';
import { NewsListPage, NewsDetailPage } from './pages/public/insights/NewsListPage';
import { BlogListPage, BlogDetailPage } from './pages/public/insights/BlogListPage';
import { EventsListPage, EventDetailPage } from './pages/public/insights/EventsListPage';
import { AnnouncementsPage, ProjectsListPage, ProjectDetailPage } from './pages/public/insights/ProjectsListPage';
import { TeamSpotlightPage, CommunityPage } from './pages/public/insights/TeamSpotlightPage';
import { FaqPage, PhotoGalleryPage, VideoGalleryPage, MediaAppearancesPage, PressCenterPage, GlobalSearchPage } from './pages/public/insights/FaqPage';

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#071A2B] relative">
      {/* Fixed Top Header */}
      <Navbar />
      
      {/* Page Content */}
      <main className="flex-grow pt-0">
        <Outlet />
      </main>

      {/* Main Footer */}
      <Footer />
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#002D54] text-white flex flex-col items-center justify-center p-6 space-y-4 font-sans">
          <div className="p-4 bg-blue-500/20 border border-blue-400/30 rounded-2xl max-w-lg text-center space-y-3 shadow-2xl">
            <h1 className="text-xl font-black text-[#0ED3DD]">YomTech Global System Recovery</h1>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              An unexpected client render state occurred: <br />
              <code className="text-[11px] text-amber-300 font-mono">{this.state.error?.toString()}</code>
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
                className="px-4 py-2 bg-[#1E90FF] hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow"
              >
                Reload Gateway
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.href = '/admin/dashboard';
                }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow"
              >
                Reset Local Cache
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* Public Website Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/wabijob" element={<WabiJobPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/documentaries" element={<DocumentariesPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/cacademy" element={<Navigate to="/academy" replace />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />

            {/* News, Blog & Media Ecosystem Routes */}
            <Route path="/news" element={<InsightsMainPage />} />
            <Route path="/news/articles" element={<NewsListPage />} />
            <Route path="/news/articles/:slug" element={<NewsDetailPage />} />
            <Route path="/news/blog" element={<BlogListPage />} />
            <Route path="/news/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/news/events" element={<EventsListPage />} />
            <Route path="/news/events/:id" element={<EventDetailPage />} />
            <Route path="/news/announcements" element={<AnnouncementsPage />} />
            <Route path="/news/projects" element={<ProjectsListPage />} />
            <Route path="/news/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/news/team" element={<TeamSpotlightPage />} />
            <Route path="/news/community" element={<CommunityPage />} />
            <Route path="/news/faq" element={<FaqPage />} />
            <Route path="/news/gallery" element={<PhotoGalleryPage />} />
            <Route path="/news/videos" element={<VideoGalleryPage />} />
            <Route path="/news/media" element={<MediaAppearancesPage />} />
            <Route path="/news/press" element={<PressCenterPage />} />
            <Route path="/insights" element={<Navigate to="/news" replace />} />
            <Route path="/search" element={<GlobalSearchPage />} />
          </Route>

          {/* Redirect Student Portal paths to Admin Control Gateway */}
          <Route path="/student/dashboard" element={<Navigate to="/admin/login" replace />} />
          <Route path="/academy/student" element={<Navigate to="/admin/login" replace />} />

          {/* Dedicated Admin Portal Routes */}
          <Route path="/admin/login" element={
            <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/80 text-slate-900 overflow-hidden">
              <ThreeDBackground />
              <div className="relative z-10"><AdminLoginPage /></div>
            </div>
          } />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

          {/* Catch-all Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}