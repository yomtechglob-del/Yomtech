import React from 'react';
import { AcademyRadialHero } from '../../components/academy/AcademyRadialHero';
import { LearningModel } from '../../components/academy/LearningModel';
import { ClassroomToRealWorld } from '../../components/academy/ClassroomToRealWorld';
import { MentorshipExperience } from '../../components/academy/MentorshipExperience';
import { CareerReadiness } from '../../components/academy/CareerReadiness';
import { AcademyEcosystem } from '../../components/academy/AcademyEcosystem';
import { PracticalLearning } from '../../components/academy/PracticalLearning';
import { GlobalLearningVision } from '../../components/academy/GlobalLearningVision';
import { AcademyCTA } from '../../components/academy/AcademyCTA';

export const AcademyPage = () => {
  return (
    <div className="bg-[#F8FAFC] text-slate-900 min-h-screen relative overflow-hidden">
      {/* 1. RADIAL HERO — Circular Academy Ecosystem Navigation */}
      <AcademyRadialHero />

      {/* NEW SECTION 02: LEARNING MODEL */}
      <LearningModel />

      {/* NEW SECTION 03: FROM CLASSROOM TO REAL WORLD */}
      <ClassroomToRealWorld />

      {/* NEW SECTION 07: MENTORSHIP EXPERIENCE */}
      <MentorshipExperience />

      {/* NEW SECTION 08: CAREER READINESS */}
      <CareerReadiness />

      {/* NEW SECTION 11: ACADEMY ECOSYSTEM */}
      <AcademyEcosystem />

      {/* NEW SECTION 12: WHY PRACTICAL LEARNING MATTERS */}
      <PracticalLearning />

      {/* NEW SECTION 13: GLOBAL LEARNING VISION */}
      <GlobalLearningVision />

      {/* NEW SECTION 14: ACADEMY CTA */}
      <AcademyCTA />
    </div>
  );
};
