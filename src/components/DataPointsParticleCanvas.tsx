import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  type: 'dot' | 'cross' | 'pulse';
  color: string;
}

export const DataPointsParticleCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // High DPI support
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Particle pool setup
    const particleCount = Math.min(Math.floor((width * height) / 14000) + 24, 65);
    const particles: Particle[] = [];

    const colors = [
      'rgba(245, 240, 230, ', // Warm cream
      'rgba(235, 230, 218, ', // Soft ivory
      'rgba(255, 255, 255, ', // Subtle white
      'rgba(52, 211, 153, ',  // Emerald data accent (occasional)
    ];

    for (let i = 0; i < particleCount; i++) {
      const isEmerald = Math.random() < 0.12;
      const color = isEmerald ? colors[3] : colors[Math.floor(Math.random() * 3)];
      const typeRand = Math.random();
      const type: 'dot' | 'cross' | 'pulse' =
        typeRand < 0.65 ? 'dot' : typeRand < 0.85 ? 'cross' : 'pulse';

      const baseRadius = type === 'cross' ? 2.5 : Math.random() * 1.6 + 1.2;
      const baseAlpha = Math.random() * 0.35 + 0.15;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: baseRadius,
        baseRadius,
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
        type,
        color,
      });
    }

    // Mouse proximity interaction (soft repelling or attraction)
    let mouseX = -9999;
    let mouseY = -9999;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth === 0 || newHeight === 0) continue;

        width = newWidth;
        height = newHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        // Keep particles within new bounds
        particles.forEach((p) => {
          if (p.x > width) p.x = Math.random() * width;
          if (p.y > height) p.y = Math.random() * height;
        });
      }
    });

    resizeObserver.observe(container);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle data linkage lines between close particles (Graph / Relational topology)
      const maxDistance = Math.min(width * 0.15, 95);
      ctx.lineWidth = 0.65;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.12 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(240, 235, 225, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Update and render individual data points
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion physics with slight sine wave oscillation
        p.x += p.vx + Math.sin(time + p.pulsePhase) * 0.08;
        p.y += p.vy + Math.cos(time + p.pulsePhase) * 0.08;

        // Soft repulsion from cursor
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 110 && mDist > 0) {
          const force = (110 - mDist) / 110;
          p.x += (mdx / mDist) * force * 0.6;
          p.y += (mdy / mDist) * force * 0.6;
        }

        // Screen wrap-around with padding
        const pad = 20;
        if (p.x < -pad) p.x = width + pad;
        if (p.x > width + pad) p.x = -pad;
        if (p.y < -pad) p.y = height + pad;
        if (p.y > height + pad) p.y = -pad;

        // Dynamic pulsing
        p.pulsePhase += p.pulseSpeed;
        const pulseRatio = (Math.sin(p.pulsePhase) + 1) / 2; // 0 to 1
        const currentAlpha = p.baseAlpha + pulseRatio * 0.2;
        const currentRadius = p.baseRadius * (0.9 + pulseRatio * 0.25);

        if (p.type === 'cross') {
          // Data coordinate cross '+'
          ctx.strokeStyle = `${p.color}${currentAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x - currentRadius, p.y);
          ctx.lineTo(p.x + currentRadius, p.y);
          ctx.moveTo(p.x, p.y - currentRadius);
          ctx.lineTo(p.x, p.y + currentRadius);
          ctx.stroke();
        } else if (p.type === 'pulse') {
          // Outer halo ripple for key analytical data points
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.25})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();

          // Center solid point
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${currentAlpha * 1.3})`;
          ctx.fill();
        } else {
          // Standard analytical scatter plot point with soft glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${currentAlpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="data-particles-container"
      aria-hidden="true"
      className="absolute -inset-10 sm:-inset-16 md:-inset-24 -z-10 pointer-events-none overflow-visible select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75 transform-gpu"
      />
    </div>
  );
};
