
'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
  opacity: number;
}

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArray = useRef<Particle[]>([]);
  const mouse = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: 220, // Increased radius for more interaction
  });

  const [particleColor, setParticleColor] = useState('hsla(33, 100%, 50%, 1)'); // Max opacity
  const [lineColor, setLineColor] = useState('hsla(33, 100%, 50%, 0.8)');  // High opacity
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    if (typeof window !== 'undefined') {
      const computedStyle = getComputedStyle(document.documentElement);
      const primaryHue = computedStyle.getPropertyValue('--primary').split(' ')[0];
      const primarySaturation = computedStyle.getPropertyValue('--primary').split(' ')[1];
      const primaryLightness = computedStyle.getPropertyValue('--primary').split(' ')[2];

      if (primaryHue && primarySaturation && primaryLightness) {
        setParticleColor(`hsla(${primaryHue}, ${primarySaturation}, ${primaryLightness}, 1)`);
        setLineColor(`hsla(${primaryHue}, ${primarySaturation}, ${primaryLightness}, 0.8)`);
      }
    }
  }, [hasMounted]);

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    particlesArray.current = [];
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 18000);
    for (let i = 0; i < numberOfParticles; i++) {
      const radius = Math.random() * 1.5 + 0.5; // Original radius
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const vx = (Math.random() - 0.5) * 0.3;
      const vy = (Math.random() - 0.5) * 0.3;
      particlesArray.current.push({ x, y, radius, vx, vy, originalX: x, originalY: y, opacity: Math.random() * 0.3 + 0.7 }); // Opacity range: 0.7 to 1.0
    }
  }, []);

  const newAnimateParticles = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.current.length; i++) {
      const p = particlesArray.current[i];

      if (mouse.current.x !== null && mouse.current.y !== null) {
        const dxMouse = p.x - mouse.current.x;
        const dyMouse = p.y - mouse.current.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < mouse.current.radius && distanceMouse > 0) {
          const forceDirectionX = dxMouse / distanceMouse; // Attract instead of repel
          const forceDirectionY = dyMouse / distanceMouse; // Attract instead of repel
          
          const maxDistance = mouse.current.radius;
          const forceMagnitude = (1 - distanceMouse / maxDistance) * 3.0; // Adjusted force for attraction
          
          p.x -= forceDirectionX * forceMagnitude; // Move towards mouse
          p.y -= forceDirectionY * forceMagnitude; // Move towards mouse
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x + p.radius > canvas.width || p.x - p.radius < 0) {
        p.vx *= -1;
        if (p.x + p.radius > canvas.width) p.x = canvas.width - p.radius;
        if (p.x - p.radius < 0) p.x = p.radius;
      }
      if (p.y + p.radius > canvas.height || p.y - p.radius < 0) {
        p.vy *= -1;
        if (p.y + p.radius > canvas.height) p.y = canvas.height - p.radius;
        if (p.y - p.radius < 0) p.y = p.radius;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = particleColor.replace(/hsla?\(([^,]+,\s*[^,]+,\s*[^,]+,)\s*[\d\.]+\)/, `hsla($1 ${p.opacity})`);
      ctx.fill();

      for (let j = i + 1; j < particlesArray.current.length; j++) {
        const p2 = particlesArray.current[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineOpacity = Math.max(0, 1.0 * (1 - distance / 100));
          ctx.strokeStyle = lineColor.replace(/hsla?\(([^,]+,\s*[^,]+,\s*[^,]+,)\s*[\d\.]+\)/, `hsla($1 ${lineOpacity * 0.8})`); // Multiply by base line opacity
          ctx.lineWidth = 1.0; // Increased line width
          ctx.stroke();
        }
      }
    }
  }, [particleColor, lineColor]);

  useEffect(() => {
    if (!hasMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isComponentMounted = true;

    const renderLoop = () => {
      if (!isComponentMounted) return;
      newAnimateParticles(ctx, canvas);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const heroContentElement = document.getElementById('hero-section-content');

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      // Ensure heroContentElement is available before accessing offsetHeight
      canvas.height = heroContentElement ? heroContentElement.offsetHeight + 100 : window.innerHeight;
      if (canvas.height < 500) canvas.height = window.innerHeight;
      initParticles(canvas);
    };
    
    resizeCanvas(); // Call initially once mounted and canvas ref is available
    
    renderLoop();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (event: MouseEvent) => {
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = event.clientX - rect.left;
            mouse.current.y = event.clientY - rect.top;
        }
    };
    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      isComponentMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [hasMounted, initParticles, newAnimateParticles]);

  if (!hasMounted) {
    return null; // Or a placeholder if you prefer
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
    />
  );
};

export default InteractiveBackground;
