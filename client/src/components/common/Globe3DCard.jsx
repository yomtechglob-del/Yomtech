import React, { useEffect, useRef, useState } from 'react';
import logoImg from '../../assets/logo.png';

// Import all 13 hero icon images from client/src/assets/hero icons/
import cloudImg from '../../assets/hero icons/cloud.png';
import coachingImg from '../../assets/hero icons/coaching.png';
import crmImg from '../../assets/hero icons/crm.png';
import customImg from '../../assets/hero icons/custom.png';
import cybersecurityImg from '../../assets/hero icons/cybersecurity.png';
import documentaryImg from '../../assets/hero icons/documentary.png';
import educationImg from '../../assets/hero icons/education.png';
import erpImg from '../../assets/hero icons/erp.png';
import mobileImg from '../../assets/hero icons/mobile.png';
import securityImg from '../../assets/hero icons/security.png';
import sfaImg from '../../assets/hero icons/sfa.png';
import webImg from '../../assets/hero icons/web.png';
import wmsImg from '../../assets/hero icons/wms.png';

export const Globe3DCard = () => {
  const canvasRef = useRef(null);
  const planetRefs = useRef([]);
  const activeHoverIndexRef = useRef(null);
  const [, setActiveHoverIndex] = useState(null);

  // List of 13 service icons rotating in 100% synchronized coordination with equal fixed distances (360° / 13)
  const rawPlanets = [
    { title: 'ERP Solutions', img: erpImg },
    { title: 'CRM Systems', img: crmImg },
    { title: 'WMS Logistics', img: wmsImg },
    { title: 'SFA Mobility', img: sfaImg },
    { title: 'Custom Web Apps', img: webImg },
    { title: 'Mobile Dev', img: mobileImg },
    { title: 'Cloud DevOps', img: cloudImg },
    { title: 'Cybersecurity', img: cybersecurityImg },
    { title: 'Custom Tech', img: customImg },
    { title: 'WabiSkills Edu', img: educationImg },
    { title: 'Tech Coaching', img: coachingImg },
    { title: 'Surveillance Sec', img: securityImg },
    { title: 'Documentary', img: documentaryImg },
  ];

  const TOTAL_PLANETS = rawPlanets.length;
  const planetIcons = rawPlanets.map((item, index) => ({
    ...item,
    orbitRadius: 340,
    speed: 0.85,
    initialAngle: (index * Math.PI * 2) / TOTAL_PLANETS,
    tilt: 0.25
  }));

  const mouseRef = useRef({ x: 0, y: 0 });
  const dragVelRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationId = null;
    let isDisposed = false;
    let observer = null;
    let handleResize = null;

    // Defer heavy 3D canvas initialization so initial page DOM paint is 100% instant
    const initTimer = setTimeout(() => {
      if (isDisposed || !canvasRef.current) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let globeAngleY = 0;
      let baseAngleX = 0.28;
      let smoothMouseX = 0;
      let smoothMouseY = 0;

      const resize = () => {
        const parent = canvas.parentElement;
        if (!parent) return;
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      };
      handleResize = resize;

      resize();
      window.addEventListener('resize', resize);

      // Ambient Space Dust Particle Field
      const spaceDust = [];
      const dustCount = 60;
      for (let d = 0; d < dustCount; d++) {
        spaceDust.push({
          x: (Math.random() - 0.5) * 500,
          y: (Math.random() - 0.5) * 500,
          z: (Math.random() - 0.5) * 350,
          size: Math.random() * 1.2 + 0.4,
          color: Math.random() > 0.4 ? '#3B82F6' : '#2563EB',
          speed: Math.random() * 0.002 + 0.001
        });
      }

      // High-Resolution Vector World Map Sampler using Offscreen Canvas
      const mapCanvas = document.createElement('canvas');
      mapCanvas.width = 720;
      mapCanvas.height = 360;
      const mapCtx = mapCanvas.getContext('2d');
      mapCtx.fillStyle = '#000000';
      mapCtx.fillRect(0, 0, 720, 360);

      // Precise Geographic Continent Vector Polygons (in [lon, lat] coordinates for 7 continents)
      const continentPolygons = [
        // North America Main
        [[-168, 66], [-165, 60], [-141, 60], [-130, 54], [-124, 48], [-124, 38], [-118, 34], [-105, 20], [-97, 26], [-97, 30], [-81, 25], [-80, 31], [-75, 35], [-64, 47], [-52, 47], [-56, 52], [-64, 60], [-76, 62], [-82, 68], [-100, 68], [-120, 70], [-140, 70], [-168, 66]],
        // Alaska & Aleutian peninsula
        [[-168, 66], [-168, 54], [-150, 58], [-141, 60], [-168, 66]],
        // Central America & Mexico
        [[-118, 34], [-105, 20], [-90, 16], [-88, 14], [-83, 9], [-77, 8], [-80, 15], [-97, 26], [-105, 20], [-118, 34]],
        // Greenland
        [[-55, 78], [-20, 78], [-20, 70], [-40, 60], [-55, 70], [-55, 78]],
        // Cuba & Caribbean
        [[-84, 23], [-75, 20], [-74, 23], [-84, 23]],
        // Hispaniola
        [[-74, 20], [-68, 18], [-68, 20], [-74, 20]],
        // South America
        [[-77, 8], [-72, 11], [-60, 10], [-50, 0], [-35, -6], [-35, -12], [-40, -20], [-48, -28], [-55, -35], [-65, -54], [-75, -50], [-72, -40], [-75, -30], [-70, -15], [-80, -4], [-77, 8]],
        // Europe Main
        [[-10, 36], [0, 36], [10, 38], [20, 40], [30, 46], [40, 50], [50, 55], [60, 60], [60, 70], [30, 70], [24, 65], [16, 56], [8, 54], [0, 50], [-10, 44], [-10, 36]],
        // Scandinavia
        [[5, 58], [10, 54], [18, 56], [28, 60], [30, 70], [15, 70], [5, 62], [5, 58]],
        // UK & Ireland
        [[-10, 50], [-2, 50], [-2, 58], [-10, 58], [-10, 50]],
        // Iberia
        [[-9, 36], [3, 36], [3, 43], [-9, 43], [-9, 36]],
        // Italy & Balkans
        [[8, 38], [18, 40], [25, 35], [16, 38], [8, 38]],
        // Africa Main
        [[-17, 35], [10, 37], [25, 32], [34, 31], [34, 27], [43, 12], [51, 11], [42, 0], [40, -10], [33, -28], [20, -35], [15, -30], [12, -15], [8, 4], [-5, 5], [-15, 12], [-17, 35]],
        // Madagascar
        [[43, -12], [50, -12], [50, -25], [43, -25], [43, -12]],
        // Arabia
        [[35, 30], [50, 30], [60, 25], [55, 16], [44, 12], [35, 30]],
        // Asia Main & Siberia
        [[40, 50], [60, 60], [80, 70], [120, 70], [140, 70], [170, 65], [170, 50], [140, 40], [120, 30], [120, 22], [108, 12], [100, 8], [98, 16], [90, 22], [70, 20], [60, 25], [60, 40], [40, 50]],
        // India & South Asia
        [[68, 24], [88, 22], [80, 8], [76, 8], [68, 24]],
        // Sri Lanka
        [[79, 10], [82, 8], [80, 6], [79, 10]],
        // SE Asia & Indochina
        [[95, 22], [108, 22], [108, 10], [98, 8], [95, 22]],
        // Indonesia & Malaysia
        [[95, 5], [118, -6], [140, -6], [140, 3], [110, 7], [95, 5]],
        // Philippines
        [[118, 18], [126, 18], [124, 7], [118, 18]],
        // Japan
        [[130, 31], [142, 35], [145, 45], [138, 45], [130, 31]],
        // Korea
        [[124, 38], [130, 38], [128, 34], [124, 38]],
        // Australia Main
        [[113, -14], [135, -12], [142, -10], [153, -28], [150, -38], [138, -35], [115, -34], [113, -14]],
        // Tasmania
        [[144, -40], [148, -40], [147, -44], [144, -44]],
        // New Zealand
        [[166, -47], [178, -34], [172, -34], [166, -47]],
        // Papua New Guinea
        [[130, -2], [150, -2], [150, -10], [140, -8], [130, -2]],
        // Antarctica Coast Ring
        [[-180, -65], [180, -65], [180, -85], [-180, -85]]
      ];

      mapCtx.fillStyle = '#FFFFFF';
      mapCtx.strokeStyle = '#FFFFFF';
      mapCtx.lineWidth = 4;
      continentPolygons.forEach((poly) => {
        mapCtx.beginPath();
        poly.forEach(([lon, lat], i) => {
          const x = ((lon + 180) / 360) * 720;
          const y = ((90 - lat) / 180) * 360;
          if (i === 0) mapCtx.moveTo(x, y);
          else mapCtx.lineTo(x, y);
        });
        mapCtx.closePath();
        mapCtx.fill();
        mapCtx.stroke();
      });

      const mapData = mapCtx.getImageData(0, 0, 720, 360).data;

      const isLand = (lat, lon) => {
        const x = Math.min(719, Math.max(0, Math.floor(((lon + 180) / 360) * 720)));
        const y = Math.min(359, Math.max(0, Math.floor(((90 - lat) / 180) * 360)));
        return mapData[(y * 720 + x) * 4] > 100;
      };

      const sphereRadius = Math.min(canvas.width, canvas.height) * 0.43;
      const landParticles = [];

      const latStep = 0.85;
      const lonStep = 0.95;

      for (let lat = -80; lat <= 80; lat += latStep) {
        const phi = ((90 - lat) * Math.PI) / 180;
        const rSinPhi = sphereRadius * Math.sin(phi);
        const rCosPhi = sphereRadius * Math.cos(phi);

        for (let lon = -180; lon <= 180; lon += lonStep) {
          if (isLand(lat, lon)) {
            const theta = ((lon + 180) * Math.PI) / 180;
            const x = rSinPhi * Math.cos(theta);
            const y = -rCosPhi;
            const z = rSinPhi * Math.sin(theta);

            const isCityLight = Math.random() > 0.80;
            const isHubPoint = Math.random() > 0.93;

            landParticles.push({
              lat,
              lon,
              x,
              y,
              z,
              baseRadius: isHubPoint ? 3.4 : isCityLight ? 2.7 : Math.random() * 0.9 + 2.0,
              color: isHubPoint
                ? '#FFFFFF'
                : isCityLight
                  ? '#FFD700'
                  : Math.random() > 0.35
                    ? '#00F0FF'
                    : Math.random() > 0.45
                      ? '#00FFCC'
                      : Math.random() > 0.5
                        ? '#38BDF8'
                        : '#60A5FA',
              pulseOffset: Math.random() * Math.PI * 2,
              isCityLight,
              isHubPoint
            });
          }
        }
      }

      // Track state of angles for 13 orbiting icons
      const angles = planetIcons.map((p) => p.initialAngle);
      let pulseTime = 0;
      let lastTime = performance.now();

      const render = (now) => {
        if (isDisposed) return;

        const currentTime = now || performance.now();
        const dt = Math.min((currentTime - lastTime) / 1000, 0.033);
        lastTime = currentTime;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const width = canvas.width;
        const height = canvas.height;
        const cx = width / 2;
        const cy = height / 2;

        // 100% Constant Linear Fluid Motion (Zero Stop-and-Go, Zero Mouse Jerk)
        globeAngleY += 0.55 * dt;
        baseAngleX += Math.sin(pulseTime * 0.5) * 0.0005;
        const currentAngleX = baseAngleX;
        pulseTime += dt * 1.5;

        const cosY = Math.cos(globeAngleY);
        const sinY = Math.sin(globeAngleY);
        const cosX = Math.cos(currentAngleX);
        const sinX = Math.sin(currentAngleX);

        const project3D = (x, y, z) => {
          const x1 = x * cosY - z * sinY;
          const z1 = z * cosY + x * sinY;
          const y2 = y * cosX - z1 * sinX;
          const z2 = z1 * cosX + y * sinX;
          const scale = 480 / (480 + z2);
          return { x: cx + x1 * scale, y: cy + y2 * scale, z: z2, scale };
        };

        // --- OUTER GLOW HALO (drawn first, outside sphere) ---
        const haloGrad = ctx.createRadialGradient(cx, cy, sphereRadius * 0.90, cx, cy, sphereRadius * 1.60);
        haloGrad.addColorStop(0, 'rgba(56, 189, 248, 0.40)');
        haloGrad.addColorStop(0.40, 'rgba(37, 99, 235, 0.20)');
        haloGrad.addColorStop(0.75, 'rgba(14, 211, 221, 0.07)');
        haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(cx, cy, sphereRadius * 1.60, 0, Math.PI * 2);
        ctx.fillStyle = haloGrad;
        ctx.fill();

        // ============================================================
        // BEGIN SPHERE CLIP — everything inside is a perfect circle
        // ============================================================
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, sphereRadius * 0.985, 0, Math.PI * 2);
        ctx.clip();

        // Deep ocean base — radial dark blue sphere fill
        const oceanGrad = ctx.createRadialGradient(
          cx - sphereRadius * 0.22, cy - sphereRadius * 0.20, sphereRadius * 0.04,
          cx, cy, sphereRadius * 1.02
        );
        oceanGrad.addColorStop(0, 'rgba(14, 50, 120, 1)');
        oceanGrad.addColorStop(0.30, 'rgba(7, 22, 68, 1)');
        oceanGrad.addColorStop(0.65, 'rgba(3, 10, 35, 1)');
        oceanGrad.addColorStop(1, 'rgba(1, 4, 18, 1)');
        ctx.beginPath();
        ctx.arc(cx, cy, sphereRadius * 1.02, 0, Math.PI * 2);
        ctx.fillStyle = oceanGrad;
        ctx.fill();

        // Space dust inside globe
        spaceDust.forEach((dust) => {
          dust.z += dust.speed * 20;
          if (dust.z > 250) dust.z = -250;
          const dp = project3D(dust.x, dust.y, dust.z);
          ctx.save();
          ctx.beginPath();
          ctx.arc(dp.x, dp.y, dust.size * dp.scale, 0, Math.PI * 2);
          ctx.fillStyle = dust.color;
          ctx.globalAlpha = Math.max(0.04, 0.30 * dp.scale);
          ctx.fill();
          ctx.restore();
        });

        // Continent particles & glowing city lights — ALL CLIPPED to sphere circle
        const projectedLand = landParticles.map((p) => {
          const pt = project3D(p.x, p.y, p.z);
          return { ...p, px: pt.x, py: pt.y, pz: pt.z, scale: pt.scale };
        });
        projectedLand.sort((a, b) => a.pz - b.pz);

        for (let i = 0; i < projectedLand.length; i++) {
          const p = projectedLand[i];
          if (p.pz > -sphereRadius * 0.92) {
            const alpha = Math.max(0.48, Math.min(1.0, (p.pz + sphereRadius * 1.1) / (sphereRadius * 1.9)));
            const pulse = Math.sin(pulseTime * 2.5 + p.pulseOffset) * 0.18 + 0.95;
            const rad = p.baseRadius * p.scale * pulse;
            ctx.save();
            ctx.beginPath();
            ctx.arc(p.px, p.py, rad, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = alpha;
            ctx.shadowColor = p.isHubPoint ? '#00F0FF' : p.isCityLight ? '#FFD700' : '#38BDF8';
            ctx.shadowBlur = (p.isHubPoint ? 12 : p.isCityLight ? 8 : 4) * p.scale;
            ctx.fill();
            ctx.restore();
          }
        }

        // 3D SPHERE DEPTH SHADING — softened so map continents stay 100% visible
        const depthGrad = ctx.createRadialGradient(
          cx - sphereRadius * 0.28, cy - sphereRadius * 0.26, sphereRadius * 0.02,
          cx + sphereRadius * 0.14, cy + sphereRadius * 0.12, sphereRadius * 1.06
        );
        depthGrad.addColorStop(0, 'rgba(255,255,255,0.00)');
        depthGrad.addColorStop(0.45, 'rgba(20, 80, 180, 0.03)');
        depthGrad.addColorStop(0.78, 'rgba(4, 14, 50, 0.22)');
        depthGrad.addColorStop(1, 'rgba(1, 4, 18, 0.50)');
        ctx.beginPath();
        ctx.arc(cx, cy, sphereRadius * 1.02, 0, Math.PI * 2);
        ctx.fillStyle = depthGrad;
        ctx.fill();

        // SPECULAR HIGHLIGHT — bright light reflection at top-left
        const specX = cx - sphereRadius * 0.26;
        const specY = cy - sphereRadius * 0.28;
        const specGrad = ctx.createRadialGradient(specX, specY, 0, specX, specY, sphereRadius * 0.50);
        specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.30)');
        specGrad.addColorStop(0.28, 'rgba(200, 235, 255, 0.14)');
        specGrad.addColorStop(0.60, 'rgba(56, 189, 248, 0.05)');
        specGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(cx, cy, sphereRadius * 1.02, 0, Math.PI * 2);
        ctx.fillStyle = specGrad;
        ctx.fill();

        // ATMOSPHERIC RIM GLOW — blue edge only (inside clip)
        const rimGrad = ctx.createRadialGradient(cx, cy, sphereRadius * 0.74, cx, cy, sphereRadius * 1.02);
        rimGrad.addColorStop(0, 'rgba(14, 211, 221, 0)');
        rimGrad.addColorStop(0.76, 'rgba(14, 211, 221, 0.07)');
        rimGrad.addColorStop(0.90, 'rgba(56, 189, 248, 0.20)');
        rimGrad.addColorStop(1, 'rgba(37, 99, 235, 0.52)');
        ctx.beginPath();
        ctx.arc(cx, cy, sphereRadius * 1.02, 0, Math.PI * 2);
        ctx.fillStyle = rimGrad;
        ctx.fill();

        // ============================================================
        // END SPHERE CLIP
        // ============================================================
        ctx.restore();

        // Update planet icon positions using GPU hardware-accelerated 3D transforms & water wave floating
        planetIcons.forEach((planet, idx) => {
          angles[idx] += planet.speed * dt;
          const curAngle = angles[idx];
          const r = (planet.orbitRadius / 300) * sphereRadius * 1.15;
          const rawX = r * Math.cos(curAngle);
          const rawZ = r * Math.sin(curAngle);
          const curTilt = planet.tilt;
          const rotY = rawX * Math.cos(curTilt) - rawZ * Math.sin(curTilt);
          const rotZ = rawZ * Math.cos(curTilt) + rawX * Math.sin(curTilt);

          // Organic liquid water floating wave effect
          const waterWaveY = Math.sin(pulseTime * 2.0 + idx * 0.7) * 4;
          const posX = rotY;
          const posY = rotZ * Math.sin(0.45) + waterWaveY;

          const depthZ = rotZ;
          const scale = 0.75 + ((depthZ + r) / (r * 2)) * 0.45;
          const opacity = Math.max(0.35, 0.45 + ((depthZ + r) / (r * 2)) * 0.55);
          const zIndex = Math.round(depthZ + 300);
          const el = planetRefs.current[idx];
          if (el) {
            const isHovered = activeHoverIndexRef.current === idx;
            const finalScale = isHovered ? scale * 1.35 : scale;
            el.style.transform = `translate3d(${posX}px, ${posY}px, 0px) translate(-50%, -50%) scale(${finalScale})`;
            el.style.opacity = opacity;
            el.style.zIndex = zIndex;
          }
        });

        animationId = requestAnimationFrame(render);
      };

      // Only animate when Globe is in the viewport — stops GPU load during scroll
      let isVisible = true;
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationId && !isDisposed) {
            render();
          } else if (!isVisible && animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
          }
        },
        { threshold: 0.01 }
      );

      if (canvas.parentElement) {
        observer.observe(canvas.parentElement);
      }

      render();
    }, 0);

    return () => {
      isDisposed = true;
      clearTimeout(initTimer);
      if (handleResize) {
        window.removeEventListener('resize', handleResize);
      }
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseRef.current = { x, y };

    if (isDraggingRef.current) {
      const dx = e.clientX - lastMousePosRef.current.x;
      const dy = e.clientY - lastMousePosRef.current.y;
      dragVelRef.current = { x: dx * 0.006, y: dy * 0.006 };
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const globeContainerRef = useRef(null);

  return (
    <div className="relative w-full max-w-[700px] sm:max-w-[760px] xl:max-w-[820px] aspect-square flex items-center justify-center p-2 mx-auto" style={{ contain: 'layout style', touchAction: 'pan-y' }}>
      <div
        ref={globeContainerRef}
        className="globe-touch-area relative z-10 w-full h-full aspect-square rounded-full bg-gradient-to-br from-[#0284C7]/95 via-[#0072B8]/98 to-[#0F172A]/95 shadow-[0_0_80px_rgba(56,189,248,0.65),0_0_150px_rgba(37,99,235,0.75),0_30px_100px_rgba(0,114,184,0.6)] p-5 relative overflow-hidden flex flex-col items-center justify-center group transition-all duration-700 cursor-grab active:cursor-grabbing select-none" style={{ touchAction: 'pan-y' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          isDraggingRef.current = false;
          mouseRef.current = { x: 0, y: 0 };
        }}
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-sky-400/50 via-blue-600/60 to-purple-600/40 blur-xl opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-95" />

        <div className="relative z-30 flex items-center justify-center mb-3 pointer-events-none">
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 pointer-events-none z-0 animate-spin-globe">
            <svg viewBox="0 0 240 240" className="w-full h-full">
              <path
                id="logoTextPath"
                d="M 120, 120 m -94, 0 a 94,94 0 1,1 188,0 a 94,94 0 1,1 -188,0"
                fill="none"
              />
              <text className="text-[18px] sm:text-[20px] md:text-[22px] font-black uppercase tracking-[0.25em] fill-white drop-shadow-[0_4px_20px_rgba(56,189,248,1.0)]">
                <textPath href="#logoTextPath" startOffset="0%">
                  YOMTECH GLOBAL • DIGITAL PLATFORM •
                </textPath>
              </text>
            </svg>
          </div>

          <div className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-sky-400 via-blue-600 to-slate-900 p-2 shadow-[0_0_50px_rgba(56,189,248,0.95),0_0_90px_rgba(37,99,235,0.85)] flex items-center justify-center overflow-hidden animate-emblem-pulse">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-300/20 to-transparent pointer-events-none" />
            <img src={logoImg} alt="Yomtech Global 3D Logo Emblem" className="w-full h-full object-cover rounded-full shadow-2xl relative z-10" />
          </div>
        </div>

        {planetIcons.map((planet, idx) => (
          <div
            key={planet.title}
            ref={(el) => (planetRefs.current[idx] = el)}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate3d(0, 0, 0) translate(-50%, -50%) scale(1)',
              opacity: 0,
              zIndex: 10,
              willChange: 'transform, opacity'
            }}
            onMouseEnter={() => { activeHoverIndexRef.current = idx; }}
            onMouseLeave={() => { activeHoverIndexRef.current = null; }}
            className="cursor-pointer group pointer-events-auto"
          >
            <div className="relative flex flex-col items-center">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#0084C8] via-[#0072B8] to-[#1DA1F2] p-1.5 shadow-[0_0_35px_rgba(56,189,248,0.85),0_0_55px_rgba(14,211,221,0.85)] backdrop-blur-md transition-all flex items-center justify-center overflow-hidden group-hover:scale-125 group-hover:shadow-[0_0_55px_rgba(56,189,248,1),0_0_75px_rgba(14,211,221,1)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-300/30 to-transparent pointer-events-none rounded-full z-20" />
                <img
                  src={planet.img}
                  alt={planet.title}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10"
                />
              </div>

              <div className="absolute top-full mt-2.5 px-4 py-2 rounded-xl bg-[#0072B8] text-white text-xs md:text-sm font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none">
                {planet.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
