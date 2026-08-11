import React, { useEffect, useRef } from 'react';

export const ThreeDBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Glowing Star Nodes at intersections
    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      color: Math.random() > 0.3 ? '#0ED3DD' : '#1DA1F2'
    }));

    const render = () => {
      time += 0.008;

      // 1. #151515 Dark Base Background Fill
      ctx.fillStyle = '#151515';
      ctx.fillRect(0, 0, width, height);

      // 2. Soft Ambient Deep Blue Light Glows
      const rad1 = ctx.createRadialGradient(width * 0.2, height * 0.3, 10, width * 0.2, height * 0.3, width * 0.6);
      rad1.addColorStop(0, 'rgba(14, 211, 221, 0.08)');
      rad1.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = rad1;
      ctx.fillRect(0, 0, width, height);

      const rad2 = ctx.createRadialGradient(width * 0.8, height * 0.7, 10, width * 0.8, height * 0.7, width * 0.6);
      rad2.addColorStop(0, 'rgba(29, 161, 242, 0.08)');
      rad2.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = rad2;
      ctx.fillRect(0, 0, width, height);

      // 3. Render Subtle 3D Intersecting Diagonal Wireframe Mesh Net Grid
      ctx.save();
      const gridSpacing = 52;
      const moveOffset = (time * 12) % gridSpacing;

      // Diagonal Lines Set 1 (Top-Left to Bottom-Right)
      ctx.strokeStyle = 'rgba(29, 161, 242, 0.08)';
      ctx.lineWidth = 1.0;
      for (let x = -height; x < width + height; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x + moveOffset, 0);
        ctx.lineTo(x + height + moveOffset, height);
        ctx.stroke();
      }

      // Diagonal Lines Set 2 (Top-Right to Bottom-Left)
      ctx.strokeStyle = 'rgba(14, 211, 221, 0.07)';
      ctx.lineWidth = 1.0;
      for (let x = -height; x < width + height; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x - moveOffset, 0);
        ctx.lineTo(x - height - moveOffset, height);
        ctx.stroke();
      }

      // Horizontal Mesh Grid Accent Lines
      ctx.strokeStyle = 'rgba(30, 58, 138, 0.25)';
      ctx.lineWidth = 0.8;
      for (let y = 0; y < height; y += gridSpacing * 1.2) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 4. Subtle Light Blue Beam Streaks
      ctx.save();
      const beamX = (time * 120) % (width + height * 2) - height;
      const beamGrad = ctx.createLinearGradient(beamX - 100, 0, beamX + 100, height);
      beamGrad.addColorStop(0, 'rgba(29, 161, 242, 0)');
      beamGrad.addColorStop(0.5, 'rgba(14, 211, 221, 0.12)');
      beamGrad.addColorStop(1, 'rgba(29, 161, 242, 0)');
      
      ctx.strokeStyle = beamGrad;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(beamX, 0);
      ctx.lineTo(beamX + height, height);
      ctx.stroke();
      ctx.restore();

      // 5. Sparkling Light Nodes
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 0.8 || star.alpha < 0.2) star.speed *= -1;
        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.abs(star.alpha);
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-1000 bg-[#151515]"
    />
  );
};
