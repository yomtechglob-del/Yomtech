import React, { useEffect, useRef, useState } from 'react';
import logoImg from '../../assets/logo.jpg';
import { motion } from 'framer-motion';

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
  const [activeHoverIndex, setActiveHoverIndex] = useState(null);

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
    speed: 0.005,
    initialAngle: (index * Math.PI * 2) / TOTAL_PLANETS,
    tilt: 0.25
  }));

  const [planetPositions, setPlanetPositions] = useState([]);

  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
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

    resize();
    window.addEventListener('resize', resize);

    // Ambient Space Dust Particle Field
    const spaceDust = [];
    const dustCount = 75;
    for (let d = 0; d < dustCount; d++) {
      spaceDust.push({
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600,
        z: (Math.random() - 0.5) * 400,
        size: Math.random() * 1.5 + 0.6,
        color: Math.random() > 0.4 ? '#3B82F6' : '#2563EB',
        speed: Math.random() * 0.002 + 0.001
      });
    }

    // High-Resolution Vector World Map Sampler using Offscreen Canvas
    const mapCanvas = document.createElement('canvas');
    mapCanvas.width = 360;
    mapCanvas.height = 180;
    const mapCtx = mapCanvas.getContext('2d');
    mapCtx.fillStyle = '#000000';
    mapCtx.fillRect(0, 0, 360, 180);

    // Precise Geographic Continent Vector Polygons (in [lon, lat] coordinates)
    const continentPolygons = [
      // North America Main
      [[-168,66],[-165,60],[-141,60],[-130,54],[-124,48],[-124,38],[-118,34],[-105,20],[-97,26],[-97,30],[-81,25],[-80,31],[-75,35],[-64,47],[-52,47],[-56,52],[-64,60],[-76,62],[-82,68],[-100,68],[-120,70],[-140,70],[-168,66]],
      // Alaska & Aleutian peninsula
      [[-168,66],[-168,54],[-150,58],[-141,60],[-168,66]],
      // Central America & Mexico
      [[-118,34],[-105,20],[-90,16],[-88,14],[-83,9],[-77,8],[-80,15],[-97,26],[-105,20],[-118,34]],
      // Greenland
      [[-55,78],[-20,78],[-20,70],[-40,60],[-55,70],[-55,78]],
      // Cuba & Caribbean
      [[-84,23],[-75,20],[-74,23],[-84,23]],
      // Hispaniola
      [[-74,20],[-68,18],[-68,20],[-74,20]],
      // South America
      [[-77,8],[-72,11],[-60,10],[-50,0],[-35,-6],[-35,-12],[-40,-20],[-48,-28],[-55,-35],[-65,-54],[-75,-50],[-72,-40],[-75,-30],[-70,-15],[-80,-4],[-77,8]],
      // Europe Main
      [[-10,36],[0,36],[10,38],[20,40],[30,46],[40,50],[50,55],[60,60],[60,70],[30,70],[24,65],[16,56],[8,54],[0,50],[-10,44],[-10,36]],
      // Scandinavia
      [[5,58],[10,54],[18,56],[28,60],[30,70],[15,70],[5,62],[5,58]],
      // UK & Ireland
      [[-10,50],[-2,50],[-2,58],[-10,58],[-10,50]],
      // Iberia
      [[-9,36],[3,36],[3,43],[-9,43],[-9,36]],
      // Italy & Balkans
      [[8,38],[18,40],[25,35],[16,38],[8,38]],
      // Africa Main
      [[-17,35],[10,37],[25,32],[34,31],[34,27],[43,12],[51,11],[42,0],[40,-10],[33,-28],[20,-35],[15,-30],[12,-15],[8,4],[-5,5],[-15,12],[-17,35]],
      // Madagascar
      [[43,-12],[50,-12],[50,-25],[43,-25],[43,-12]],
      // Arabia
      [[35,30],[50,30],[60,25],[55,16],[44,12],[35,30]],
      // Asia Main & Siberia
      [[40,50],[60,60],[80,70],[120,70],[140,70],[170,65],[170,50],[140,40],[120,30],[120,22],[108,12],[100,8],[98,16],[90,22],[70,20],[60,25],[60,40],[40,50]],
      // India & South Asia
      [[68,24],[88,22],[80,8],[76,8],[68,24]],
      // Sri Lanka
      [[79,10],[82,8],[80,6],[79,10]],
      // SE Asia & Indochina
      [[95,22],[108,22],[108,10],[98,8],[95,22]],
      // Indonesia & Malaysia
      [[95,5],[118,-6],[140,-6],[140,3],[110,7],[95,5]],
      // Philippines
      [[118,18],[126,18],[124,7],[118,18]],
      // Japan
      [[130,31],[142,35],[145,45],[138,45],[130,31]],
      // Korea
      [[124,38],[130,38],[128,34],[124,38]],
      // Australia Main
      [[113,-14],[135,-12],[142,-10],[153,-28],[150,-38],[138,-35],[115,-34],[113,-14]],
      // Tasmania
      [[144,-40],[148,-40],[147,-44],[144,-44]],
      // New Zealand
      [[166,-47],[178,-34],[172,-34],[166,-47]],
      // Papua New Guinea
      [[130,-2],[150,-2],[150,-10],[140,-8],[130,-2]],
      // Antarctica Coast Ring
      [[-180,-65],[180,-65],[180,-85],[-180,-85]]
    ];

    mapCtx.fillStyle = '#FFFFFF';
    mapCtx.strokeStyle = '#FFFFFF';
    mapCtx.lineWidth = 3;
    continentPolygons.forEach((poly) => {
      mapCtx.beginPath();
      poly.forEach(([lon, lat], i) => {
        const x = lon + 180;
        const y = 90 - lat;
        if (i === 0) mapCtx.moveTo(x, y);
        else mapCtx.lineTo(x, y);
      });
      mapCtx.closePath();
      mapCtx.fill();
      mapCtx.stroke();
    });

    const mapData = mapCtx.getImageData(0, 0, 360, 180).data;

    const isLand = (lat, lon) => {
      const x = Math.min(359, Math.max(0, Math.floor(lon + 180)));
      const y = Math.min(179, Math.max(0, Math.floor(90 - lat)));
      return mapData[(y * 360 + x) * 4] > 128;
    };

    const sphereRadius = Math.min(canvas.width, canvas.height) * 0.40;
    const landParticles = [];

    // Generate high-density, high-contrast continent particle matrix for ALL 7 CONTINENTS
    const latStep = 1.1;
    const lonStep = 1.2;

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

          const isCityLight = Math.random() > 0.82;
          const isHubPoint = Math.random() > 0.94;

          landParticles.push({
            lat,
            lon,
            x,
            y,
            z,
            baseRadius: isHubPoint ? 2.8 : isCityLight ? 2.2 : Math.random() * 0.8 + 1.5,
            color: isHubPoint
              ? '#FFFFFF'
              : isCityLight
              ? '#FFD700'
              : Math.random() > 0.4
              ? '#00F0FF'
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

    // Global Tech Hubs across ALL 7 CONTINENTS of Earth
    const globalHubs = [
      { name: 'Africa (Addis Ababa)', continent: 'Africa', lat: 9.0, lon: 38.7, color: '#3B82F6' },
      { name: 'Africa (Cairo)', continent: 'Africa', lat: 30.0, lon: 31.2, color: '#3B82F6' },
      { name: 'Europe (London)', continent: 'Europe', lat: 51.5, lon: -0.1, color: '#2563EB' },
      { name: 'Europe (Paris)', continent: 'Europe', lat: 48.8, lon: 2.3, color: '#2563EB' },
      { name: 'North America (New York)', continent: 'North America', lat: 40.7, lon: -74.0, color: '#60A5FA' },
      { name: 'North America (Silicon Valley)', continent: 'North America', lat: 37.7, lon: -122.4, color: '#60A5FA' },
      { name: 'South America (Sao Paulo)', continent: 'South America', lat: -23.5, lon: -46.6, color: '#3B82F6' },
      { name: 'South America (Buenos Aires)', continent: 'South America', lat: -34.6, lon: -58.3, color: '#3B82F6' },
      { name: 'Asia (Tokyo)', continent: 'Asia', lat: 35.6, lon: 139.6, color: '#2563EB' },
      { name: 'Asia (Singapore)', continent: 'Asia', lat: 1.3, lon: 103.8, color: '#2563EB' },
      { name: 'Asia (Dubai)', continent: 'Asia', lat: 25.2, lon: 55.2, color: '#2563EB' },
      { name: 'Australia (Sydney)', continent: 'Australia', lat: -33.8, lon: 151.2, color: '#60A5FA' },
      { name: 'Antarctica (McMurdo)', continent: 'Antarctica', lat: -77.8, lon: 166.6, color: '#93C5FD' }
    ];

    const arcConnections = [
      [2, 4],  // London -> NY
      [4, 5],  // NY -> SV
      [5, 8],  // SV -> Tokyo
      [8, 9],  // Tokyo -> Singapore
      [9, 10], // Singapore -> Dubai
      [10, 0], // Dubai -> Addis Ababa
      [0, 1],  // Addis Ababa -> Cairo
      [1, 3],  // Cairo -> Paris
      [4, 6],  // NY -> Sao Paulo
      [6, 7],  // Sao Paulo -> Buenos Aires
      [9, 11], // Singapore -> Sydney
      [11, 12] // Sydney -> Antarctica
    ];

    // Track state of angles for 13 orbiting icons
    const angles = planetIcons.map((p) => p.initialAngle);
    let pulseTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      // Multi-Directional 3D Rotation & Interactive Momentum
      smoothMouseX += (mouseRef.current.x - smoothMouseX) * 0.06;
      smoothMouseY += (mouseRef.current.y - smoothMouseY) * 0.06;

      // Friction damping for user drag inertia
      dragVelRef.current.x *= 0.94;
      dragVelRef.current.y *= 0.94;

      // Multi-axis 3D continuous rotation
      globeAngleY += 0.005 + dragVelRef.current.x + smoothMouseX * 0.002;
      baseAngleX += dragVelRef.current.y + Math.sin(pulseTime * 0.35) * 0.0012;

      const currentAngleX = baseAngleX + smoothMouseY * 0.2;
      pulseTime += 0.02;

      const cosY = Math.cos(globeAngleY);
      const sinY = Math.sin(globeAngleY);
      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);

      // Helper for 3D rotation & projection
      const project3D = (x, y, z) => {
        let x1 = x * cosY - z * sinY;
        let z1 = z * cosY + x * sinY;
        let y2 = y * cosX - z1 * sinX;
        let z2 = z1 * cosX + y * sinX;

        const scale = 480 / (480 + z2);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
          scale
        };
      };

      // 0. Floating Space Dust Particles
      spaceDust.forEach((dust) => {
        dust.z += dust.speed * 20;
        if (dust.z > 250) dust.z = -250;
        const dp = project3D(dust.x, dust.y, dust.z);
        ctx.save();
        ctx.beginPath();
        ctx.arc(dp.x, dp.y, dust.size * dp.scale, 0, Math.PI * 2);
        ctx.fillStyle = dust.color;
        ctx.globalAlpha = Math.max(0.1, 0.5 * dp.scale);
        ctx.fill();
        ctx.restore();
      });

      // 1. Professional Holographic Pedestal Base Display
      const floorY = cy + sphereRadius * 1.05;
      ctx.save();

      const floorGlow = ctx.createRadialGradient(cx, floorY, 15, cx, floorY, sphereRadius * 1.6);
      floorGlow.addColorStop(0, 'rgba(37, 99, 235, 0.6)');
      floorGlow.addColorStop(0.35, 'rgba(29, 78, 216, 0.25)');
      floorGlow.addColorStop(0.7, 'rgba(30, 144, 255, 0.08)');
      floorGlow.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = floorGlow;
      ctx.beginPath();
      ctx.ellipse(cx, floorY, sphereRadius * 1.45, sphereRadius * 0.38, 0, 0, Math.PI * 2);
      ctx.fill();

      // Professional Metallic Hologram Ring
      ctx.beginPath();
      ctx.ellipse(cx, floorY, sphereRadius * 1.15, sphereRadius * 0.28, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.7)';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      ctx.restore();

      // 2. Deep Electric Blue Atmospheric Halo
      const haloGrad = ctx.createRadialGradient(cx, cy, sphereRadius * 0.8, cx, cy, sphereRadius * 1.35);
      haloGrad.addColorStop(0, 'rgba(37, 99, 235, 0.45)');
      haloGrad.addColorStop(0.45, 'rgba(29, 78, 216, 0.22)');
      haloGrad.addColorStop(0.8, 'rgba(30, 144, 255, 0.08)');
      haloGrad.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius * 1.35, 0, Math.PI * 2);
      ctx.fillStyle = haloGrad;
      ctx.fill();

      // Core dark backdrop disc for high contrast
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius * 0.98, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(2, 6, 23, 0.94)';
      ctx.fill();

      // 3. Outer Orbital Rings
      const ringConfigs = [
        { radiusMult: 1.15, tiltX: 0.35, tiltY: 0.2, color: 'rgba(59, 130, 246, 0.4)', dash: [6, 6] },
        { radiusMult: 1.28, tiltX: -0.4, tiltY: -0.25, color: 'rgba(37, 99, 235, 0.35)', dash: [4, 8] },
        { radiusMult: 1.42, tiltX: 0.25, tiltY: -0.45, color: 'rgba(29, 78, 216, 0.3)', dash: [8, 10] }
      ];

      ringConfigs.forEach((ring) => {
        const r = sphereRadius * ring.radiusMult;
        ctx.save();
        ctx.beginPath();
        const steps = 90;

        for (let i = 0; i <= steps; i++) {
          const a = (Math.PI * 2 / steps) * i;
          const rx = r * Math.cos(a);
          const ry = r * Math.sin(a) * ring.tiltX;
          const rz = r * Math.sin(a) * ring.tiltY;

          const p = project3D(rx, ry, rz);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.3;
        ctx.setLineDash(ring.dash);
        ctx.stroke();
        ctx.restore();
      });

      // 4. Render Dotted Continent Particles & Glowing City Lights
      const projectedLand = landParticles.map((p) => {
        const pt = project3D(p.x, p.y, p.z);
        return {
          ...p,
          px: pt.x,
          py: pt.y,
          pz: pt.z,
          scale: pt.scale
        };
      });

      projectedLand.sort((a, b) => a.pz - b.pz);

      for (let i = 0; i < projectedLand.length; i++) {
        const p = projectedLand[i];
        if (p.pz > -sphereRadius * 0.92) {
          const alpha = Math.max(0.40, Math.min(1.0, (p.pz + sphereRadius * 1.0) / (sphereRadius * 1.8)));
          const pulse = Math.sin(pulseTime * 2.5 + p.pulseOffset) * 0.2 + 0.95;
          const rad = p.baseRadius * p.scale * pulse;

          ctx.save();
          ctx.beginPath();
          ctx.arc(p.px, p.py, rad, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;

          if (p.isHubPoint) {
            ctx.shadowColor = '#00F0FF';
            ctx.shadowBlur = 9 * p.scale;
          } else if (p.isCityLight) {
            ctx.shadowColor = '#FFD700';
            ctx.shadowBlur = 8 * p.scale;
          } else if (p.pz > 0 && i % 2 === 0) {
            ctx.shadowColor = '#00F0FF';
            ctx.shadowBlur = 6 * p.scale;
          }
          ctx.fill();
          ctx.restore();
        }
      }

      // 5. Render Electric Blue 3D Network Arcs
      arcConnections.forEach(([fromIdx, toIdx], arcIdx) => {
        const hubA = globalHubs[fromIdx];
        const hubB = globalHubs[toIdx];

        const getSphere3D = (lat, lon, rMult = 1.0) => {
          const phi = ((90 - lat) * Math.PI) / 180;
          const theta = ((lon + 180) * Math.PI) / 180;
          const r = sphereRadius * rMult;
          return {
            x: r * Math.sin(phi) * Math.cos(theta),
            y: -r * Math.cos(phi),
            z: r * Math.sin(phi) * Math.sin(theta)
          };
        };

        const posA = getSphere3D(hubA.lat, hubA.lon);
        const posB = getSphere3D(hubB.lat, hubB.lon);

        const midX = (posA.x + posB.x) * 0.5;
        const midY = (posA.y + posB.y) * 0.5;
        const midZ = (posA.z + posB.z) * 0.5;
        const dist = Math.hypot(posA.x - posB.x, posA.y - posB.y, posA.z - posB.z);
        const elevation = 1.0 + Math.min(0.45, (dist / sphereRadius) * 0.35);

        const ctrl = {
          x: midX * elevation,
          y: midY * elevation,
          z: midZ * elevation
        };

        const arcSteps = 16;
        const arcPoints = [];
        for (let t = 0; t <= 1; t += 1 / arcSteps) {
          const invT = 1 - t;
          const bx = invT * invT * posA.x + 2 * invT * t * ctrl.x + t * t * posB.x;
          const by = invT * invT * posA.y + 2 * invT * t * ctrl.y + t * t * posB.y;
          const bz = invT * invT * posA.z + 2 * invT * t * ctrl.z + t * t * posB.z;
          arcPoints.push(project3D(bx, by, bz));
        }

        const avgZ = (arcPoints[0].z + arcPoints[arcPoints.length - 1].z) / 2;
        if (avgZ > -sphereRadius * 0.4) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(arcPoints[0].x, arcPoints[0].y);
          for (let s = 1; s < arcPoints.length; s++) {
            ctx.lineTo(arcPoints[s].x, arcPoints[s].y);
          }
          const lineAlpha = Math.max(0.2, (avgZ + sphereRadius) / (sphereRadius * 2));
          ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha * 0.75})`;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([3, 4]);
          ctx.stroke();

          // Photon packet traveling along arc
          const tProgress = (pulseTime * 0.6 + arcIdx * 0.2) % 1.0;
          const pulseIdx = Math.floor(tProgress * arcSteps);
          if (pulseIdx >= 0 && pulseIdx < arcPoints.length) {
            const pPt = arcPoints[pulseIdx];
            ctx.beginPath();
            ctx.arc(pPt.x, pPt.y, 2.8 * pPt.scale, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.shadowColor = '#3B82F6';
            ctx.shadowBlur = 10;
            ctx.fill();
          }
          ctx.restore();
        }
      });

      // 6. Calculate 3D Orbital Positions for 13 Planet Icons
      const newPositions = planetIcons.map((planet, idx) => {
        angles[idx] += planet.speed;
        const curAngle = angles[idx];
        const r = (planet.orbitRadius / 300) * sphereRadius * 1.15;

        const rawX = r * Math.cos(curAngle);
        const rawZ = r * Math.sin(curAngle);

        const curTilt = planet.tilt;
        const rotY = rawX * Math.cos(curTilt) - rawZ * Math.sin(curTilt);
        const rotZ = rawZ * Math.cos(curTilt) + rawX * Math.sin(curTilt);

        const posX = cx + rotY;
        const posY = cy + rotZ * Math.sin(0.45);
        const depthZ = rotZ;

        const scale = 0.75 + ((depthZ + r) / (r * 2)) * 0.45;
        const opacity = 0.45 + ((depthZ + r) / (r * 2)) * 0.55;
        const zIndex = Math.round(depthZ + 300);

        return {
          ...planet,
          x: posX,
          y: posY,
          scale,
          opacity,
          zIndex,
          isFront: depthZ > 0
        };
      });

      setPlanetPositions(newPositions);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const dragVelRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseRef.current = { x, y };
    setMousePos({ x, y });

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

  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e) => {
    if (isDraggingRef.current && e.touches.length > 0) {
      const dx = e.touches[0].clientX - lastMousePosRef.current.x;
      const dy = e.touches[0].clientY - lastMousePosRef.current.y;
      dragVelRef.current = { x: dx * 0.006, y: dy * 0.006 };
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="relative w-full max-w-[620px] aspect-square flex items-center justify-center p-4">
      {/* Main 3D Metallic Bezel Ring Widget */}
      <div 
        className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-[#020617]/95 via-[#040B1D]/98 to-[#06122E]/95 border-[10px] border-slate-600/90 shadow-[0_0_60px_rgba(56,189,248,0.7),0_0_120px_rgba(37,99,235,0.8),0_30px_90px_rgba(0,0,0,0.95)] p-5 relative overflow-hidden flex flex-col items-center justify-center group hover:border-[#3B82F6] transition-all duration-700 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          isDraggingRef.current = false;
          mouseRef.current = { x: 0, y: 0 };
          setMousePos({ x: 0, y: 0 });
        }}
      >
        {/* Metallic Bezel Outer Rim Light Beam */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-sky-400/50 via-blue-600/60 to-purple-600/40 blur-xl opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* 3D Canvas Background Wireframe Globe */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-95" />

        {/* CENTER: Ultra 3D Coin Logo Emblem & Slow Rotating Circular Letter Path */}
        <div className="relative z-30 flex items-center justify-center mb-3 pointer-events-none">
          {/* Rotating Circular Typography Text Ring around 3D Logo (Slower Graceful Rotation) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
            className="absolute w-52 h-52 md:w-58 md:h-58 pointer-events-none z-0"
          >
            <svg viewBox="0 0 240 240" className="w-full h-full">
              <path
                id="logoTextPath"
                d="M 120, 120 m -94, 0 a 94,94 0 1,1 188,0 a 94,94 0 1,1 -188,0"
                fill="none"
              />
              <text className="text-[17px] md:text-[19px] font-black uppercase tracking-[0.25em] fill-white drop-shadow-[0_4px_20px_rgba(56,189,248,1.0)]">
                <textPath href="#logoTextPath" startOffset="0%">
                  YOMTECH GLOBAL • DIGITAL PLATFORM • 
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Real 3D Coin Badge Logo Emblem with Intense Outward Glow */}
          <motion.div
            animate={{ scale: [1, 1.06, 1], rotate: [0, 4, 0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-sky-400 via-blue-600 to-slate-900 border-[4px] border-white p-1.5 shadow-[0_0_40px_rgba(56,189,248,0.95),0_0_80px_rgba(37,99,235,0.85),inset_0_3px_8px_rgba(255,255,255,0.7)] flex items-center justify-center overflow-hidden"
          >
            {/* Glossy 3D Highlight Sheen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/35 to-transparent pointer-events-none" />
            <img src={logoImg} alt="Yomtech Global 3D Logo Emblem" className="w-full h-full object-cover rounded-full shadow-2xl relative z-10" />
          </motion.div>
        </div>

        {/* Orbiting 3D Planetary Icon Badges */}
        {planetPositions.map((planet, idx) => (
          <div
            key={planet.title}
            style={{
              position: 'absolute',
              left: `${planet.x}px`,
              top: `${planet.y}px`,
              transform: `translate(-50%, -50%) scale(${activeHoverIndex === idx ? planet.scale * 1.35 : planet.scale})`,
              opacity: planet.opacity,
              zIndex: planet.zIndex,
              transition: 'transform 0.15s ease-out, opacity 0.15s ease-out'
            }}
            onMouseEnter={() => setActiveHoverIndex(idx)}
            onMouseLeave={() => setActiveHoverIndex(null)}
            className="cursor-pointer group pointer-events-auto"
          >
            <div className="relative flex flex-col items-center">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full bg-gradient-to-br from-[#131C35] via-[#0E162B] to-[#0A0E1A] border-[2.5px] border-white p-0.5 shadow-[0_0_20px_rgba(255,255,255,0.9),0_0_35px_rgba(14,211,221,0.65)] backdrop-blur-md transition-all flex items-center justify-center overflow-hidden group-hover:scale-125 group-hover:shadow-[0_0_35px_rgba(255,255,255,1),0_0_50px_rgba(14,211,221,0.9)]">
                {/* Glossy Reflection Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/35 to-transparent pointer-events-none rounded-full z-20" />
                <img
                  src={planet.img}
                  alt={planet.title}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300 shadow-md relative z-10"
                />
              </div>

              <div className="absolute top-full mt-1.5 px-3 py-1.5 rounded-xl bg-[#070C1A]/95 border border-[#0ED3DD]/60 text-white text-[11px] font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
                {planet.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
