
'use client';

import React, { useEffect, useRef, useCallback } from 'react';

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
    radius: 120, // Mouse interaction radius
  });

  const [particleColor, setParticleColor] = React.useState('hsla(33, 100%, 50%, 0.6)');
  const [lineColor, setLineColor] = React.useState('hsla(33, 100%, 50%, 0.2)');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const computedStyle = getComputedStyle(document.documentElement);
      const primaryHue = computedStyle.getPropertyValue('--primary').split(' ')[0];
      const primarySaturation = computedStyle.getPropertyValue('--primary').split(' ')[1];
      const primaryLightness = computedStyle.getPropertyValue('--primary').split(' ')[2];
      
      if (primaryHue && primarySaturation && primaryLightness) {
        setParticleColor(`hsla(${primaryHue}, ${primarySaturation}, ${primaryLightness}, 0.5)`);
        setLineColor(`hsla(${primaryHue}, ${primarySaturation}, ${primaryLightness}, 0.15)`);
      }
    }
  }, []);

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    particlesArray.current = [];
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 18000);
    for (let i = 0; i < numberOfParticles; i++) {
      const radius = Math.random() * 1.5 + 0.5;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const vx = (Math.random() - 0.5) * 0.3; 
      const vy = (Math.random() - 0.5) * 0.3;
      particlesArray.current.push({ x, y, radius, vx, vy, originalX: x, originalY: y, opacity: Math.random() * 0.5 + 0.2 });
    }
  }, []);

  const newAnimateParticles = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.current.length; i++) {
      const p = particlesArray.current[i];

      // Mouse interaction - ATTRACT particles
      if (mouse.current.x !== null && mouse.current.y !== null) {
        const dxMouse = p.x - mouse.current.x; // distance from particle to mouse (x)
        const dyMouse = p.y - mouse.current.y; // distance from particle to mouse (y)
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distanceMouse < mouse.current.radius && distanceMouse > 0) { // distanceMouse > 0 to avoid issues if particle is exactly at mouse
          // Force direction is TOWARDS mouse (opposite of dxMouse, dyMouse)
          const forceDirectionX = -dxMouse / distanceMouse; 
          const forceDirectionY = -dyMouse / distanceMouse;
          
          const maxDistance = mouse.current.radius;
          // Force is stronger when closer
          const forceMagnitude = (1 - distanceMouse / maxDistance) * 2.5; // Adjusted strength slightly
          
          // Apply force to particle position for direct attraction
          p.x += forceDirectionX * forceMagnitude;
          p.y += forceDirectionY * forceMagnitude;
        }
      }
      
      // Update particle position based on its velocity
      p.x += p.vx;
      p.y += p.vy;

      // Wall collision
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
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = particleColor.replace(/,\s*\d(\.\d+)?\)/, `, ${p.opacity})`);
      ctx.fill();

      // Draw lines to nearby particles
      for (let j = i + 1; j < particlesArray.current.length; j++) {
        const p2 = particlesArray.current[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) { 
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineOpacity = Math.max(0, 0.7 * (1 - distance / 100));
          ctx.strokeStyle = lineColor.replace(/,\s*\d(\.\d+)?\)/, `, ${lineOpacity})`);
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }, [particleColor, lineColor]); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isMounted = true;

    const renderLoop = () => {
      if (!isMounted) return;
      newAnimateParticles(ctx, canvas);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const heroContentElement = document.getElementById('hero-section-content');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = heroContentElement ? heroContentElement.offsetHeight + 100 : window.innerHeight; 
      if (canvas.height < 500) canvas.height = window.innerHeight;
      initParticles(canvas);
    };
    
    setTimeout(resizeCanvas, 100); 
    
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
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) { 
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [initParticles, newAnimateParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
    />
  );
};

export default InteractiveBackground;
