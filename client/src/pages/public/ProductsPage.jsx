import React from 'react';
import { AcademyRadialHero } from '../../components/academy/AcademyRadialHero';
import { ProductsCatalogue } from '../../components/products/ProductsCatalogue';
import { ProductsDedicatedPages } from '../../components/products/ProductsDedicatedPages';
import { ProductsVideoShowcase } from '../../components/products/ProductsVideoShowcase';
import { ProductsRequestDemo } from '../../components/products/ProductsRequestDemo';
import { AboutFinalCTA } from '../../components/about/AboutFinalCTA';

export const ProductsPage = () => {
  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden font-sans">

      {/* ── PRODUCTS HERO SECTION ── */}
      <div className="pt-20 sm:pt-24">
        <AcademyRadialHero />
      </div>

      {/* ── SECTIONS ────────────────────────────────────────────────────── */}
      <ProductsCatalogue />
      <ProductsVideoShowcase />
      <ProductsDedicatedPages />
      <ProductsRequestDemo />
      <AboutFinalCTA />
    </div>
  );
};

export default ProductsPage;
