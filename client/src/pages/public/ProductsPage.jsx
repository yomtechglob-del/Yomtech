import React from 'react';

// Products Components
import { AcademyRadialHero } from '../../components/academy/AcademyRadialHero';
import { ProductsCatalogue } from '../../components/products/ProductsCatalogue';
import { ProductsVideoShowcase } from '../../components/products/ProductsVideoShowcase';
import { ProductsDedicatedPages } from '../../components/products/ProductsDedicatedPages';
import { ProductsRequestDemo } from '../../components/products/ProductsRequestDemo';
import { AboutFinalCTA } from '../../components/about/AboutFinalCTA';

export const ProductsPage = () => {
  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">
      {/* Academy Radial Hero Section for Products Page */}
      <AcademyRadialHero />

      {/* Sections */}
      <ProductsCatalogue />
      <ProductsVideoShowcase />
      <ProductsDedicatedPages />
      <ProductsRequestDemo />
      <AboutFinalCTA />
    </div>
  );
};

export default ProductsPage;
