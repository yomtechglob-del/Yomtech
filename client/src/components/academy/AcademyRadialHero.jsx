import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, ChevronRight, GraduationCap, HeartHandshake } from 'lucide-react';

import { AboutHeroBackground } from '../common/AboutHeroBackground';
import wabiSkillsLogo from '../../assets/logos/wabi skills logo.png';
import wabiJobsLogo from '../../assets/logos/wabijobs-logo.png';
import yomnexLogo from '../../assets/logos/yomnex-logo.png';
import logoImg from '../../assets/logos/logo.png';

const ACADEMY_PRODUCTS = [
  {
    id: 'wabiskills',
    label: 'WABISKILLS',
    logo: wabiSkillsLogo,
    url: 'https://wabiskills.com/',
    external: true,
    iconTint: 'bg-[#26658C]',
  },
  {
    id: 'wabijob',
    label: 'WABIJOB',
    logo: wabiJobsLogo,
    url: 'https://wabijob.com/',
    external: true,
    fallbackIcon: BriefcaseBusiness,
    iconTint: 'bg-[#0EA5E9]',
  },
  {
    id: 'yomnex',
    label: 'YOMNEX',
    logo: yomnexLogo,
    url: '#yomnex',
    external: false,
    iconTint: 'bg-[#2563EB]',
  },
  {
    id: 'wabx',
    label: 'WABX',
    url: '#wabx',
    external: false,
    monogram: 'W',
    iconTint: 'bg-[#1D5EF5]',
  },
  {
    id: 'meri',
    label: 'MERI',
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

        <div className="relative min-h-[780px] lg:min-h-[820px]">


          {/* =====================================================
              CONNECTION SYSTEM
          ===================================================== */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1450 820"
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
              "M590 180 C 650 175, 690 125, 750 105",
              "M610 285 C 675 280, 700 240, 750 235",
              "M620 405 C 680 405, 710 405, 750 405",
              "M610 525 C 675 530, 700 575, 750 575",
              "M590 645 C 650 650, 690 700, 750 705",
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
              { x: 590, y: 180 },
              { x: 610, y: 285 },
              { x: 620, y: 405 },
              { x: 610, y: 525 },
              { x: 590, y: 645 },
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
              { x: 750, y: 105 },
              { x: 750, y: 235 },
              { x: 750, y: 405 },
              { x: 750, y: 575 },
              { x: 750, y: 705 },
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
          <div className="relative flex min-h-[780px] flex-col items-center justify-center gap-14 lg:block">


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
              className="relative lg:absolute lg:left-[20px] lg:top-[115px]"
            >

              <div className="relative h-[min(82vw,520px)] w-[min(82vw,520px)] sm:h-[500px] sm:w-[500px]">


                {/* Outer glow */}
                <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl" />


                {/* Outer rotating ring */}
                <motion.div
                  animate={{
                    rotate: 360,
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

                <div className="absolute inset-[43px] rounded-full bg-[#D5DEEF] shadow-inner" />

                <div className="absolute inset-[60px] flex flex-col items-center justify-center rounded-full border border-white bg-white/80 px-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
                
                  <motion.img
                    src={logoImg}
                    alt="Yomtech Global"
                    className="mb-5 h-24 w-auto object-contain sm:h-28"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                
                  <h2 className="text-[2.7rem] font-black uppercase leading-none tracking-tight text-[#173B78] sm:text-[3.3rem]">
                    OUR
                  </h2>

                  <h3 className="mt-2 text-[3.1rem] font-black uppercase leading-none tracking-tight text-[#07acc9] sm:text-[4rem]">
                    PRODUCTS
                  </h3>


                  <div className="mt-7 flex items-center gap-2">

                    <span className="h-1 w-3 rounded-full bg-[#21396e]" />

                    <span className="h-2 w-2 rounded-full bg-[#0ED3DD]" />

                    <span className="h-1 w-16 rounded-full bg-gradient-to-r from-[#213c76] to-[#0ED3DD]" />

                    <span className="h-2 w-2 rounded-full bg-[#0ED3DD]" />

                    <span className="h-1 w-3 rounded-full bg-[#2563EB]" />

                  </div>

                </div>

              </div>

            </motion.div>

            <div className="w-full lg:absolute lg:right-0 lg:top-[45px] lg:w-[720px]">

              <div className="space-y-6 sm:space-y-7">

                {ACADEMY_PRODUCTS.map((product, index) => (

                  <motion.a
                    key={product.id}
                    href={product.url}
                    target={product.external ? "_blank" : undefined}
                    rel={product.external ? "noopener noreferrer" : undefined}

                    initial={{
                      opacity: 0,
                      x: 50,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                      ease: "easeOut",
                    }}

                    className="group relative flex items-center"
                  >

                    <div className="relative z-20 flex h-[112px] w-[112px] shrink-0 items-center justify-center">


                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 9 + index,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-[2px] border-dashed border-[#2563EB]/80"
                      />


                      <motion.div
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 7 + index,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-[7px] rounded-full border-[2px] border-cyan-400/70"
                      />


                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                          opacity: [0.25, 0.55, 0.25],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="absolute inset-[12px] rounded-full bg-cyan-400/20 blur-md"
                      />


                      {/* Main white circle */}
                      <div className="relative flex h-[94px] w-[94px] items-center justify-center rounded-full border-[3px] border-white bg-[#D5DEEF] shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(14,211,221,0.65)]">


                        {/* Inner circle */}
                        <div className="flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full border border-blue-200 bg-white">

                          <motion.div
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="flex h-full w-full items-center justify-center"
                          >
                            <ProductIcon product={product} />
                          </motion.div>

                        </div>

                      </div>

                    </div>

                    <motion.div
                      whileHover={{
                        x: 8,
                      }}
                      transition={{
                        duration: 0.3,
                      }}

                      className="relative -ml-5 flex min-h-[100px] w-[45%] items-center justify-between overflow-hidden border-[0.5px] blue-300/50 bg-white/10 pl-10 pr-8 text-white shadow-[0_12px_35px_rgba(15,23,42,0.15)] backdrop-blur-md"
                      
                      style={{
                        clipPath:
                          "polygon(0 0, 94% 0, 100% 50%, 94% 100%, 0 100%, 5% 50%)",
                      }}
                    >

         
                      <div className="absolute inset-0 bg-white/30 backdrop-blur-xl border border-white/50" />


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


                        
                        <h3 className="text-[1.15rem] font-black uppercase tracking-wide text-[#123B73] sm:text-[1.3rem]">
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

                        className="relative z-10 ml-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/5 text-white"
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
