import React from 'react';
import { motion } from 'framer-motion';

import fullstackCardImg from '../../assets/academy/fullstack_card.png';
import aiCardImg from '../../assets/academy/ai_card.png';
import uiuxCardImg from '../../assets/academy/uiux_card.png';
import dataCardImg from '../../assets/academy/data_card.png';

export const CourseTechIllustration = ({ type }) => {
  const images = {
    fullstack: fullstackCardImg,
    ai: aiCardImg,
    uiux: uiuxCardImg,
    data: dataCardImg
  };

  const selectedImg = images[type] || fullstackCardImg;

  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.4 }}
      className="relative w-full aspect-[16/10] rounded-[2.2rem] overflow-hidden border-2 border-cyan-400/60 shadow-2xl group cursor-pointer bg-[#080C14]"
    >
      <img
        src={selectedImg}
        alt={`${type} Course Visual`}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
      />

      {/* Shimmer light sweep overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

      {/* Ambient Inner Shadow & Glow */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.2rem] pointer-events-none" />
    </motion.div>
  );
};
