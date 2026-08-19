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
import { PartnersPage } from './pages/public/PartnersPage';
import { CareersPage } from './pages/public/CareersPage';
import { MediaPage } from './pages/public/MediaPage';
import { AcademyPage } from './pages/public/AcademyPage';
import { AboutPage } from './pages/public/AboutPage';
import { ContactPage } from './pages/public/ContactPage';
import { ProductsPage } from './pages/public/ProductsPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';

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

export default function App() {
  return (
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
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/cacademy" element={<Navigate to="/academy" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

        {/* Dedicated Admin Portal Routes */}
        <Route path="/admin/login" element={
          <div className="relative min-h-screen bg-[#151515] text-white">
            <ThreeDBackground />
            <div className="relative z-10"><AdminLoginPage /></div>
          </div>
        } />
        <Route path="/admin/dashboard" element={
          <div className="relative min-h-screen bg-[#151515] text-white">
            <ThreeDBackground />
            <div className="relative z-10"><AdminDashboardPage /></div>
          </div>
        } />
      </Routes>
    </Router>
  );
}