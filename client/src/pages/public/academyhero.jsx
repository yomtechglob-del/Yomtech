import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import wabiskillsLogo from '../../assets/academy/product/wabiskills.jpg';

export const AcademyHero = () => {

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden font-sans">

            {/* ── Background: aggressively blurred photo ── */}
            <div className="absolute inset-0 z-0">
                <img
                    src={wabiskillsLogo}
                    alt=""
                    className="w-full h-full object-cover object-center scale-125"
                    style={{ filter: 'blur(18px)', transform: 'scale(1.25)' }}
                />
                {/* Deep dark overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,5,14,0.88) 0%, rgba(11,19,41,0.92) 50%, rgba(2,5,14,0.97) 100%)' }} />
                {/* Subtle teal ambient glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, #0ED3DD 0%, transparent 70%)', filter: 'blur(80px)' }} />
                <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[300px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, #6366f1 0%, transparent 70%)', filter: 'blur(80px)' }} />
            </div>

            {/* ── Animated grid texture ── */}
            <div
                className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
            />

            {/* ── Floating animated orbs ── */}
            <motion.div
                className="absolute rounded-full pointer-events-none z-0"
                style={{ width: 320, height: 320, top: '12%', left: '8%', background: 'radial-gradient(circle, rgba(14,211,221,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }}
                animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute rounded-full pointer-events-none z-0"
                style={{ width: 260, height: 260, bottom: '15%', right: '10%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(25px)' }}
                animate={{ y: [0, 25, 0], x: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            <motion.div
                className="absolute rounded-full pointer-events-none z-0"
                style={{ width: 180, height: 180, top: '55%', left: '15%', background: 'radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 70%)', filter: 'blur(20px)' }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

                {/* Top badge with pulsing dot */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-cyan-400/30 mb-10"
                    style={{ background: 'rgba(14,211,221,0.08)', backdropFilter: 'blur(12px)' }}
                >
                    <span className="relative flex w-2.5 h-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-300" />
                    </span>
                    <span className="text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-widest">WabiSkills Academy — Addis Ababa, Ethiopia</span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white tracking-tight leading-[1.05] mb-6"
                >
                    Launch Your
                    <br />
                    <motion.span
                        className="inline-block text-transparent"
                        style={{ backgroundImage: 'linear-gradient(90deg, #0ED3DD, #38BDF8, #6366f1)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
                        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                    >
                        Tech Career
                    </motion.span>
                    <br />
                    <span className="text-white/90">with WabiSkills</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-lg sm:text-xl md:text-2xl max-w-2xl font-normal leading-relaxed mb-12"
                    style={{ color: 'rgba(203,213,225,0.85)' }}
                >
                    Industry-driven bootcamps, mentorship, and hands-on training designed to take you from learner to professional engineer.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <motion.a
                        href="https://wabiskills.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-8 py-4 rounded-full text-white font-bold text-sm uppercase tracking-wider shadow-2xl transition-all duration-300 flex items-center gap-2"
                        style={{ background: 'linear-gradient(135deg, #11688E, #0ED3DD)', boxShadow: '0 0 40px rgba(14,211,221,0.35)' }}
                    >
                        Start Learning Free
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>

                    <motion.button
                        onClick={() => {
                            const el = document.getElementById('educational-courses');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
                        style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)' }}
                    >
                        Explore Courses
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.65 }}
                    className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-10"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                    {[
                        { val: '2,000+', label: 'Graduates' },
                        { val: '4.9★', label: 'Average Rating' },
                        { val: '90%', label: 'Placement Rate' },
                        { val: '20+', label: 'Expert Mentors' },
                    ].map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.08 }}
                            className="text-center"
                        >
                            <div className="text-2xl font-black text-white">{s.val}</div>
                            <div className="text-xs font-semibold uppercase tracking-wider mt-0.5" style={{ color: 'rgba(148,163,184,0.8)' }}>{s.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                onClick={() => {
                    const el = document.getElementById('educational-courses');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="w-5 h-9 rounded-full flex items-start justify-center pt-1.5" style={{ border: '2px solid rgba(255,255,255,0.3)' }}>
                    <motion.div
                        className="w-1 h-2.5 rounded-full"
                        style={{ background: 'rgba(14,211,221,0.8)' }}
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                    />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>Scroll</span>
            </motion.div>

        </section>
    );
};

export default AcademyHero;