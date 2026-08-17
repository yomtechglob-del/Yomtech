import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ZoomIn, ChevronLeft, ChevronRight
} from 'lucide-react';

import gallery01 from '../../assets/gallery/gallery 01.jpg';
import gallery02 from '../../assets/gallery/gallery 02.jpg';
import gallery03 from '../../assets/gallery/gallery 03.jpg';
import gallery04 from '../../assets/gallery/gallery 04.jpg';
import gallery05 from '../../assets/gallery/gallery 05.jpg';
import gallery06 from '../../assets/gallery/gallery 06.jpg';
import gallery07 from '../../assets/gallery/gallery 07.jpg';
import gallery08 from '../../assets/gallery/gallery 08.jpg';
import gallery09 from '../../assets/gallery/gallery 09.jpg';

const GALLERY_ITEMS = [
  { id: 1, image: gallery01 },
  { id: 2, image: gallery02 },
  { id: 3, image: gallery03 },
  { id: 4, image: gallery04 },
  { id: 5, image: gallery05 },
  { id: 6, image: gallery06 },
  { id: 7, image: gallery07 },
  { id: 8, image: gallery08 },
  { id: 9, image: gallery09 }
];

export const CompanyGallery = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openLightbox = (item) => {
    const idx = GALLERY_ITEMS.findIndex(i => i.id === item.id);
    setSelectedPhotoIndex(idx !== -1 ? idx : 0);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const selectedPhoto = selectedPhotoIndex !== null ? GALLERY_ITEMS[selectedPhotoIndex] : null;

  return (
    <section className="relative py-20 lg:py-28 font-serif bg-[#F5F3EF] text-slate-900 overflow-hidden">
      
      {/* Subtle Warm Linen Texture Background Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(#C8BFA8 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Pill Divider Line */}
        <div className="relative flex items-center justify-end py-4 w-full max-w-full px-2 sm:px-6 mx-auto">
          {/* Connecting Horizontal Taupe Gradient Line matching button color */}
          <div className="absolute left-2 sm:left-6 right-6 top-1/2 -translate-y-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#8C7A6B]/40 to-[#8C7A6B] z-0" />

          {/* Pill Badge matching reference image styling */}
          <div className="relative z-10 px-6 py-2 bg-[#F5F3EF] border-2 border-[#8C7A6B] rounded-full text-[#3D342C] text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm font-sans">
            <span className="text-[#8C7A6B]">◆</span>
            <span className="uppercase tracking-[0.2em] font-semibold text-[#3D342C]">PAN-AFRICAN EDITORIAL GALLERY</span>
            <span className="text-[#8C7A6B]">◆</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="border-b border-[#E5DFD5] pb-10">
          <div className="text-left space-y-4 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-tight font-serif">
              Pan-African Innovation &amp; <br />
              <span className="text-[#8C7A6B] italic font-serif">
                Institutional Partnerships in Action
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl font-sans">
              Explore active campaigns, local and global partnerships, and institutional collaborations across YomTech Global and WabiSkills Academy.
            </p>
          </div>
        </div>

        {/* ========================================================
            PURE EDITORIAL PHOTO MASONRY CARDS
        ======================================================== */}
        <div className="space-y-10 lg:space-y-14">
          
          {/* ROW 1: Hero Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* ITEM 2: Photo Card (5 Cols Left) */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(GALLERY_ITEMS[1])}
              className="lg:col-span-5 bg-white rounded-3xl p-4 sm:p-6 border border-[#E5DFD5] shadow-[0_12px_35px_rgba(0,0,0,0.05)] flex flex-col justify-center relative group cursor-pointer overflow-hidden min-h-[420px]"
            >
              <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden bg-[#DFD7CB]">
                <img 
                  src={GALLERY_ITEMS[1].image} 
                  alt="Gallery Showcase" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ITEM 1: Big Feature Showcase Photo Card (7 Cols Right) */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(GALLERY_ITEMS[0])}
              className="lg:col-span-7 bg-[#EFECE6] rounded-3xl p-4 sm:p-6 border border-[#E0D9CD] shadow-[0_15px_45px_rgba(0,0,0,0.06)] flex flex-col justify-center relative group cursor-pointer overflow-hidden min-h-[440px]"
            >
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[#DFD7CB]/60 pointer-events-none z-0" />

              <div className="relative z-10 w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-white p-2 shadow-xl border border-[#D5C9B8]">
                <img 
                  src={GALLERY_ITEMS[0].image} 
                  alt="Gallery Showcase" 
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ROW 2: Split Photo Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* ITEM 3: Photo Card (6 Cols Left) */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(GALLERY_ITEMS[2])}
              className="lg:col-span-6 bg-white rounded-3xl p-4 sm:p-6 border border-[#E5DFD5] shadow-[0_12px_35px_rgba(0,0,0,0.05)] relative group cursor-pointer overflow-hidden min-h-[360px] flex items-center justify-center"
            >
              <div className="absolute top-0 left-0 w-3 h-full bg-[#8C7A6B]" />

              <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden bg-[#DFD7CB] p-2">
                <img 
                  src={GALLERY_ITEMS[2].image} 
                  alt="Gallery Showcase" 
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ITEM 4: Photo Card (6 Cols Right) */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(GALLERY_ITEMS[3])}
              className="lg:col-span-6 bg-white rounded-3xl p-4 sm:p-6 border border-[#E5DFD5] shadow-[0_12px_35px_rgba(0,0,0,0.05)] relative group cursor-pointer overflow-hidden min-h-[360px] flex items-center justify-center"
            >
              <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden bg-[#DFD7CB] p-2">
                <img 
                  src={GALLERY_ITEMS[3].image} 
                  alt="Gallery Showcase" 
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ROW 3: Bottom Masonry Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* ITEM 5: Photo Card (6 Cols Left) */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(GALLERY_ITEMS[4])}
              className="lg:col-span-6 bg-white rounded-3xl p-4 sm:p-6 border border-[#E5DFD5] shadow-[0_12px_35px_rgba(0,0,0,0.05)] relative group cursor-pointer overflow-hidden min-h-[360px] flex items-center justify-center"
            >
              <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden bg-[#DFD7CB] p-2">
                <img 
                  src={GALLERY_ITEMS[4].image} 
                  alt="Gallery Showcase" 
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ITEM 6: Photo Card (6 Cols Right) */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(GALLERY_ITEMS[5])}
              className="lg:col-span-6 bg-white rounded-3xl p-4 sm:p-6 border border-[#E5DFD5] shadow-[0_12px_35px_rgba(0,0,0,0.05)] relative group cursor-pointer overflow-hidden min-h-[360px] flex items-center justify-center"
            >
              <div className="absolute top-0 left-0 w-24 h-full bg-[#DFD7CB]/50 pointer-events-none" />

              <div className="relative z-10 w-full h-full min-h-[320px] rounded-2xl overflow-hidden bg-white p-2 border border-[#E5DFD5] shadow-md">
                <img 
                  src={GALLERY_ITEMS[5].image} 
                  alt="Gallery Showcase" 
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ROW 4: 3 Bottom Photo Cards (Items 7, 8, 9) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {GALLERY_ITEMS.slice(6, 9).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item)}
                className="bg-white rounded-3xl p-4 border border-[#E5DFD5] shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col justify-center relative group cursor-pointer overflow-hidden min-h-[320px]"
              >
                <div className="relative w-full h-full min-h-[280px] rounded-2xl bg-[#DFD7CB] p-2 shadow-sm">
                  <img 
                    src={item.image} 
                    alt="Gallery Showcase" 
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl">
                      <ZoomIn size={22} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* PURE PHOTO LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl border border-white/10 relative flex items-center justify-center p-2 sm:p-4 min-h-[60vh] max-h-[88vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg border border-white/10"
              >
                <X size={22} />
              </button>

              {/* Prev Control Floating */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 text-slate-900 flex items-center justify-center hover:bg-white transition-all shadow-xl"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Control Floating */}
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 text-slate-900 flex items-center justify-center hover:bg-white transition-all shadow-xl"
              >
                <ChevronRight size={24} />
              </button>

              {/* Pure Photo Container */}
              <div className="w-full h-full max-h-[82vh] flex items-center justify-center relative overflow-hidden rounded-2xl">
                <img
                  src={selectedPhoto.image}
                  alt="Gallery Full View"
                  className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 px-4 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/10">
                  {selectedPhotoIndex + 1} / {GALLERY_ITEMS.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default CompanyGallery;
