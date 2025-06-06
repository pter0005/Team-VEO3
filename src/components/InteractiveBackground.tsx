
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

  // Get HSL values from CSS variables
  const [particleColor, setParticleColor] = React.useState('hsla(33, 100%, 50%, 0.6)'); // Default primary with opacity
  const [lineColor, setLineColor] = React.useState('hsla(33, 100%, 50%, 0.2)'); // Default primary with lower opacity

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
      const vx = (Math.random() - 0.5) * 0.2;
      const vy = (Math.random() - 0.5) * 0.2;
      particlesArray.current.push({ x, y, radius, vx, vy, originalX: x, originalY: y, opacity: Math.random() * 0.5 + 0.2 });
    }
  }, []);

  const newAnimateParticles = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.current.length; i++) {
      const p = particlesArray.current[i];

      // Mouse interaction
      let pushedByMouse = false;
      if (mouse.current.x !== null && mouse.current.y !== null) {
        const dxMouse = p.x - mouse.current.x;
        const dyMouse = p.y - mouse.current.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distanceMouse < mouse.current.radius) {
          pushedByMouse = true;
          const forceDirectionX = dxMouse / distanceMouse;
          const forceDirectionY = dyMouse / distanceMouse;
          const maxDistance = mouse.current.radius;
          // Make force stronger when closer, gentler at the edge
          const force = (1 - distanceMouse / maxDistance) * 2.5; // Multiplier for push strength
          
          p.x += forceDirectionX * force;
          p.y += forceDirectionY * force;
        }
      }

      // Return to original position if not pushed and was moved by mouse
      if (!pushedByMouse) {
        const distToOriginalX = p.x - p.originalX;
        const distToOriginalY = p.y - p.originalY;
        if (Math.abs(distToOriginalX) > 0.1) p.x -= distToOriginalX * 0.02;
        if (Math.abs(distToOriginalY) > 0.1) p.y -= distToOriginalY * 0.02;
      }
      
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
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = particleColor.replace(/,\s*\d(\.\d+)?\)/, `, ${p.opacity})`); // Adjust opacity per particle
      ctx.fill();

      // Draw lines
      for (let j = i + 1; j < particlesArray.current.length; j++) {
        const p2 = particlesArray.current[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) { // Max distance to draw a line
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineOpacity = Math.max(0, 0.7 * (1 - distance / 100)); // Lines fade with distance
          ctx.strokeStyle = lineColor.replace(/,\s*\d(\.\d+)?\)/, `, ${lineOpacity})`);
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }, [particleColor, lineColor]); // Added dependencies

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
      // Attempt to set canvas height based on hero content, fallback to window height
      canvas.height = heroContentElement ? heroContentElement.offsetHeight + 100 : window.innerHeight; // Add some padding
      if (canvas.height < 500) canvas.height = window.innerHeight; // Fallback if offsetHeight is too small initially
      initParticles(canvas);
    };
    
    // Initial resize might be tricky due to layout shifts. A small delay or ResizeObserver could be more robust.
    setTimeout(resizeCanvas, 100); // Small delay for layout to settle
    
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

    // Listen for mouse events on the canvas itself to ensure coordinates are relative to it
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) { // Check if canvas still exists before removing listeners
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [initParticles, newAnimateParticles]);


  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10" // pointer-events-none by default unless mouse events are needed on canvas
                                           // For this effect, mouse events are handled on canvas itself.
    />
  );
};

export default InteractiveBackground;
