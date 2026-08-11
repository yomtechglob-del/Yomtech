import React, { useEffect, useRef } from 'react';

export const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating Luminous Tech Nodes
    const nodes = Array.from({ length: 35 }, () => ({
      x: Math.random() * (canvas.width || 1200),
      y: Math.random() * (canvas.height || 800),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#1DA1F2' : '#0ED3DD'
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      time += 0.006;

      // 1. Subtle Precision Tech Grid Pattern
      ctx.save();
      ctx.strokeStyle = 'rgba(29, 161, 242, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 52;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Flowing Premier Architectural Wave Vector Lines (Cyan & Blue Dual-Gradients)
      const waveCount = 6;
      for (let w = 0; w < waveCount; w++) {
        ctx.save();
        ctx.beginPath();
        const startY = height * 0.28 + w * 65;
        const amplitude = 35 + w * 12;
        const frequency = 0.0018 + w * 0.0003;
        const phase = time * (1.1 + w * 0.15);

        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'rgba(29, 161, 242, 0.04)');
        grad.addColorStop(0.5, w % 2 === 0 ? 'rgba(14, 211, 221, 0.18)' : 'rgba(29, 161, 242, 0.22)');
        grad.addColorStop(1, 'rgba(29, 161, 242, 0.04)');

        ctx.moveTo(0, startY);
        for (let x = 0; x <= width; x += 12) {
          const y = startY + Math.sin(x * frequency + phase) * amplitude + Math.cos(x * 0.0012 + time) * 16;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.restore();
      }

      // 3. Floating Interactive Tech Nodes & Network Connections
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < 140) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(14, 211, 221, ${0.15 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
            ctx.restore();
          }
        }

        // Draw node particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.55;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-95" />;
};