import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, ChevronRight, GraduationCap, HeartHandshake, Video } from 'lucide-react';

import { AboutHeroBackground } from '../common/AboutHeroBackground';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';
import logoImg from '../../assets/logos/logo.png';

const ACADEMY_PRODUCTS = [
  {
    id: 'wabiskills',
    label: 'WabiSkills',
    logo: wabiSkillsLogo,
    url: 'https://wabiskills.com/',
    external: true,
    iconTint: 'bg-[#26658C]',
  },
  {
    id: 'wabijob',
    label: 'WabiJob',
    logo: wabiJobsLogo,
    url: 'https://wabijob.com/',
    external: true,
    fallbackIcon: BriefcaseBusiness,
    iconTint: 'bg-[#0EA5E9]',
  },
  {
    id: 'yomnex',
    label: 'YomNex',
    logo: yomnexLogo,
    url: '#yomnex',
    external: false,
    iconTint: 'bg-[#2563EB]',
  },
  {
    id: 'yomtechmedia',
    label: 'YomTech Media',
    url: '/media',
    external: false,
    fallbackIcon: Video,
    iconTint: 'bg-[#0284C7]',
  },
  {
    id: 'wabx',
    label: 'WabX',
    url: '#wabx',
    external: false,
    monogram: 'W',
    iconTint: 'bg-[#1D5EF5]',
  },
  {
    id: 'meri',
    label: 'Meri',
    url: '#mari',
    external: false,
    fallbackIcon: HeartHandshake,
    iconTint: 'bg-[#D946EF]',
  },
];

const ProductIcon = ({ product }) => {
  const [hasError, setHasError] = React.useState(false);

  if (product.logo && !hasError) {
    return (
      <img
        src={product.logo}
        alt={product.label}
        onError={() => setHasError(true)}
        className="h-[62px] w-[62px] rounded-full object-contain bg-white p-1.5"
      />
    );
  }

  if (product.monogram) {
    return (
      <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-white">
        <span className="text-[2.5rem] font-black leading-none text-[#7298f2]">{product.monogram}</span>
      </div>
    );
  }

  const FallbackIcon = product.fallbackIcon ?? GraduationCap;

  return (
    <div className={`flex h-[62px] w-[62px] items-center justify-center rounded-full ${product.iconTint} text-white`}>
      <FallbackIcon size={30} strokeWidth={2.2} />
    </div>
  );
};

export const AcademyRadialHero = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-8 sm:pt-32 md:pt-36 md:pb-24 hero-cyan-gradient text-white border-b border-cyan-400/30">

      {/* Shared Executive Ermi Flowing Background */}
      <AboutHeroBackground />


      <div className="absolute left-7 top-8 grid grid-cols-4 gap-3 opacity-65 sm:left-10 sm:top-12">
        {Array.from({ length: 16 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [0.8, 1.15, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.08,
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#5584d0]"
          />
        ))}
      </div>

      <div className="absolute bottom-10 right-8 grid grid-cols-4 gap-3 opacity-55 sm:right-10">
        {Array.from({ length: 16 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.25, 0.8, 0.25],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.1,
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"
          />
        ))}
      </div>


      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative z-10 mx-auto max-w-[1450px]">

        <div className="relative min-h-[auto] sm:min-h-[880px] lg:min-h-[920px]">


          {/* =====================================================
              CONNECTION SYSTEM
          ===================================================== */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1450 920"
            fill="none"
            preserveAspectRatio="none"
          >

            <defs>

              {/* Main line gradient */}
              <linearGradient
                id="productConnectionGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="50%" stopColor="#0ED3DD" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>

              {/* Glow */}
              <filter
                id="connectionGlow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>


            {/* =================================================
                CURVED CONNECTION LINES
            ================================================= */}

            {[
              "M487 192 C 680 120, 890 72, 1100 72",
              "M530 264 C 710 220, 900 192, 1100 192",
              "M550 336 C 730 325, 910 312, 1100 312",
              "M550 408 C 730 419, 910 432, 1100 432",
              "M530 480 C 710 514, 900 552, 1100 552",
              "M487 552 C 680 620, 890 672, 1100 672",
            ].map((path, index) => (
              <g key={index}>

                {/* Outer glow */}
                <path
                  d={path}
                  stroke="#0ED3DD"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.12"
                  filter="url(#connectionGlow)"
                />

                {/* Main line */}
                <motion.path
                  d={path}
                  stroke="url(#productConnectionGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 9"
                  animate={{
                    strokeDashoffset: [0, -38],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

              </g>
            ))}


            {/* =================================================
                CONNECTION NODES
            ================================================= */}

            {[
              { x: 487, y: 192 },
              { x: 530, y: 264 },
              { x: 550, y: 336 },
              { x: 550, y: 408 },
              { x: 530, y: 480 },
              { x: 487, y: 552 },
            ].map((node, index) => (
              <g key={index}>

                {/* Outer glow */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="15"
                  fill="#0ED3DD"
                  opacity="0.15"
                  animate={{
                    r: [12, 18, 12],
                    opacity: [0.15, 0.35, 0.15],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />

                {/* White node */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="10"
                  fill="white"
                  stroke="#D5DEEF"
                  strokeWidth="3"
                />

              </g>
            ))}


            {/* Small blue connection points */}
            {[
              { x: 1100, y: 72 },
              { x: 1100, y: 192 },
              { x: 1100, y: 312 },
              { x: 1100, y: 432 },
              { x: 1100, y: 552 },
              { x: 1100, y: 672 },
            ].map((node, index) => (
              <motion.circle
                key={index}
                cx={node.x}
                cy={node.y}
                r="6"
                fill="#0ED3DD"
                stroke="white"
                strokeWidth="2"
                animate={{
                  r: [5, 8, 5],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}

          </svg>


          {/* =====================================================
              CONTENT
          ===================================================== */}
          <div className="relative flex min-h-[auto] sm:min-h-[780px] flex-col items-center justify-center gap-8 sm:gap-14 lg:block">


            {/* ===================================================
                LARGE CENTER CIRCLE
            =================================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative lg:absolute lg:left-[20px] lg:top-[122px]"
            >

              <div className="relative h-[min(80vw,480px)] w-[min(80vw,480px)] sm:h-[500px] sm:w-[500px]">


                {/* Outer glow */}
                <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl" />


                {/* Outermost border circle line */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 32,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-[32px] rounded-full border-2 border-[#0ED3DD]/60 border-dashed shadow-[0_0_20px_rgba(14,211,221,0.3)]"
                />

                {/* Outer rotating ring */}
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-[18px] rounded-full border border-blue-500/70 border-dashed"
                />


                {/* Second rotating ring */}
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-[7px] rounded-full border-[2px] border-[#0ED3DD]/70"
                />

                <div className="absolute inset-[24px] sm:inset-[43px] rounded-full bg-[#D5DEEF] shadow-inner" />

                <div className="absolute inset-[34px] sm:inset-[60px] flex flex-col items-center justify-center rounded-full border border-white bg-white/80 px-3 sm:px-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
                
                  <motion.img
                    src={logoImg}
                    alt="Yomtech Global"
                    className="mb-1.5 sm:mb-4 h-12 sm:h-20 lg:h-28 w-auto object-contain"
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                
                  <h2 className="text-lg sm:text-[2.5rem] lg:text-[3.3rem] font-black capitalize leading-none tracking-tight text-[#173B78]">
                    Our
                  </h2>

                  <h3 className="mt-0.5 sm:mt-1.5 text-xl sm:text-[2.8rem] lg:text-[4rem] font-black capitalize leading-none tracking-tight text-[#07acc9]">
                    Products
                  </h3>

                  <div className="mt-2 sm:mt-5 flex items-center gap-1.5 sm:gap-2 scale-75 sm:scale-100">

                    <span className="h-1 w-3 rounded-full bg-[#21396e]" />

                    <span className="h-2 w-2 rounded-full bg-[#0ED3DD]" />

                    <span className="h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-[#213c76] to-[#0ED3DD]" />

                    <span className="h-2 w-2 rounded-full bg-[#0ED3DD]" />

                    <span className="h-1 w-3 rounded-full bg-[#2563EB]" />

                  </div>

                </div>

              </div>

            </motion.div>

            <div className="w-full px-2 sm:px-0 lg:absolute lg:right-[-165px] lg:top-[20px] lg:w-[525px]">

              <div className="space-y-4">

                {ACADEMY_PRODUCTS.map((product, index) => (

                  <motion.a
                    key={product.id}
                    href={product.url}
                    target={product.external ? "_blank" : undefined}
                    rel={product.external ? "noopener noreferrer" : undefined}

                    initial={{
                      opacity: 0,
                      y: 20,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                      ease: "easeOut",
                    }}

                    className="group relative flex items-center"
                  >

                    {/* 3D Planetary Orbit Logo Circle */}
                    <motion.div
                      animate={{
                        y: [0, -6, 0, 6, 0],
                        x: [0, 3, 0, -3, 0],
                      }}
                      transition={{
                        duration: 5 + index * 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative z-20 flex h-[88px] w-[88px] sm:h-[112px] sm:w-[112px] shrink-0 items-center justify-center [perspective:1000px]"
                    >

                      {/* Outer Rotating Planet Orbit Ring 1 */}
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 8 + index,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-[2px] border-dashed border-[#0ED3DD] shadow-[0_0_15px_rgba(14,211,221,0.4)]"
                      />

                      {/* Outer Rotating Planet Orbit Ring 2 */}
                      <motion.div
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 6 + index,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-[7px] rounded-full border-[2px] border-blue-400/80 border-dashed"
                      />

                      {/* 3D Glow Atmosphere */}
                      <motion.div
                        animate={{
                          scale: [1, 1.12, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          delay: index * 0.25,
                        }}
                        className="absolute inset-[12px] rounded-full bg-cyan-400/30 blur-md"
                      />

                      {/* Main 3D Planet Logo Sphere */}
                      <motion.div
                        animate={{
                          rotateY: [0, 360],
                        }}
                        transition={{
                          duration: 16 + index * 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="relative flex h-[94px] w-[94px] items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-slate-100 via-white to-cyan-100 shadow-[0_0_35px_rgba(14,211,221,0.5)] transition-all duration-500 group-hover:scale-115 group-hover:shadow-[0_0_50px_rgba(14,211,221,0.85)] [transform-style:preserve-3d]"
                      >

                        {/* Inner 3D Lens Frame */}
                        <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full border border-blue-200/80 bg-white shadow-inner">

                          <motion.div
                            whileHover={{
                              scale: 1.15,
                              rotate: 8,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="flex h-full w-full items-center justify-center"
                          >
                            <ProductIcon product={product} />
                          </motion.div>

                        </div>

                      </motion.div>

                    </motion.div>

                    <motion.div
                      whileHover={{
                        x: 8,
                      }}
                      transition={{
                        duration: 0.3,
                      }}

                      className="relative -ml-4 sm:-ml-5 flex min-h-[80px] sm:min-h-[100px] flex-1 items-center justify-between overflow-hidden border border-white/60 bg-white/90 pl-8 sm:pl-10 pr-5 sm:pr-8 text-white shadow-[0_12px_35px_rgba(15,23,42,0.2)] backdrop-blur-xl"
                      
                      style={{
                        clipPath:
                          "polygon(0 0, 94% 0, 100% 50%, 94% 100%, 0 100%, 5% 50%)",
                      }}
                    >

         
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border border-white/70" />


                      <motion.div
                        animate={{
                          x: ["-120%", "120%"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.35,
                        }}
                        className="absolute inset-y-0 left-0 w-[35%] skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                      />


                      <div className="relative z-10 min-w-0">


                        
                        <h3 className="text-[1rem] sm:text-[1.15rem] lg:text-[1.3rem] font-black uppercase tracking-wide text-[#123B73]">
                          {product.label}
                        </h3>                 
                      </div>


                      {/* Arrow */}
                      <motion.div
                        whileHover={{
                          scale: 1.15,
                        }}

                        animate={{
                          x: [0, 4, 0],
                        }}

                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}

                        className="relative z-10 ml-3 sm:ml-5 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#0284C7]/40 bg-[#0284C7]/15 text-[#123B73]"
                      >
                        <ChevronRight size={25} strokeWidth={2.5} />
                      </motion.div>

                    </motion.div>

                  </motion.a>

                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyRadialHero;
