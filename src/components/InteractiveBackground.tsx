
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
      const primaryVar = computedStyle.getPropertyValue('--primary').trim();
      const primaryParts = primaryVar.split(' ');
      
      if (primaryParts.length === 3) {
        const primaryHue = primaryParts[0];
        const primarySaturation = primaryParts[1];
        const primaryLightness = primaryParts[2];
        
        setParticleColor(`hsla(${primaryHue}, ${primarySaturation}, ${primaryLightness}, 1)`);
        setLineColor(`hsla(${primaryHue}, ${primarySaturation}, ${primaryLightness}, 0.8)`);
      }
    }
  }, [hasMounted]);

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    particlesArray.current = [];
    // Aumentado o divisor para reduzir o número de partículas (de 12000 para 25000)
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 25000); 
    for (let i = 0; i < numberOfParticles; i++) {
      const radius = Math.random() * 1.5 + 0.5; 
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const vx = (Math.random() - 0.5) * 0.25; // Velocidade ligeiramente reduzida
      const vy = (Math.random() - 0.5) * 0.25; // Velocidade ligeiramente reduzida
      particlesArray.current.push({ x, y, radius, vx, vy, originalX: x, originalY: y, opacity: Math.random() * 0.3 + 0.7 }); 
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
          const forceDirectionX = dxMouse / distanceMouse; 
          const forceDirectionY = dyMouse / distanceMouse; 
          
          const maxDistance = mouse.current.radius;
          // Reduzida a força de repulsão para movimentos mais suaves
          const forceMagnitude = (1 - distanceMouse / maxDistance) * 1.5; 
          
          p.x -= forceDirectionX * forceMagnitude; 
          p.y -= forceDirectionY * forceMagnitude; 
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
      const baseParticleColor = particleColor.substring(0, particleColor.lastIndexOf(',')) 
      ctx.fillStyle = `${baseParticleColor}, ${p.opacity})`;
      ctx.fill();

      for (let j = i + 1; j < particlesArray.current.length; j++) {
        const p2 = particlesArray.current[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) { // Distância para desenhar linhas de conexão
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const lineOpacityValue = Math.max(0, 0.8 * (1 - distance / 100)); // Opacidade da linha ligeiramente aumentada
          const baseLineColor = lineColor.substring(0, lineColor.lastIndexOf(',')) 
          const finalLineOpacity = parseFloat(lineColor.substring(lineColor.lastIndexOf(',') + 1, lineColor.lastIndexOf(')')));
          ctx.strokeStyle = `${baseLineColor}, ${lineOpacityValue * finalLineOpacity })`;
          ctx.lineWidth = 0.5; // Espessura da linha reduzida
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
      if (!isComponentMounted || !particlesArray.current.length) return;
      newAnimateParticles(ctx, canvas);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const heroContentElement = document.getElementById('hero-section-content'); 

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      // Adiciona uma altura mínima para o canvas, e garante que cubra o conteúdo da hero section
      const contentHeight = heroContentElement ? heroContentElement.offsetHeight + 100 : window.innerHeight;
      canvas.height = Math.max(contentHeight, 500); 
      initParticles(canvas);
    };
    
    resizeCanvas(); 
    
    if (particlesArray.current.length > 0) {
        renderLoop();
    } else { 
        initParticles(canvas);
        if (particlesArray.current.length > 0) {
            renderLoop();
        }
    }
    
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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave); 

    return () => {
      isComponentMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasMounted, initParticles, newAnimateParticles]);

  if (!hasMounted) {
    return null; 
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto" 
    />
  );
};

export default InteractiveBackground;
