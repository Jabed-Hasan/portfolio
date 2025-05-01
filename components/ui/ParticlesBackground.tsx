"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
}

export const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        // Use the container's dimensions to make canvas fill the entire hero section
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      } else {
        // Fallback to window dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      initParticles();
    };

    const initParticles = () => {
      particles.current = [];
      // Significantly increase particle count
      const particleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / 15000),
        100
      );

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Larger particles
          size: Math.random() * 3.5 + 1,
          // More vibrant colors with higher opacity
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
            Math.random() * 100 + 155
          )}, 255, ${Math.random() * 0.35 + 0.25})`,
          // Faster movement
          speedX: Math.random() * 0.4 - 0.2,
          speedY: Math.random() * 0.4 - 0.2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Constant movement
        if (Math.random() > 0.05) {
          // Move particles 95% of the time
          particle.x += particle.speedX;
          particle.y += particle.speedY;
        }

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      // Draw connections almost all the time
      if (Math.random() > 0.2) {
        drawConnections(ctx);
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      // Much longer connection distance
      const maxDistance = 200;

      for (let i = 0; i < particles.current.length; i++) {
        // Check more particles for connections
        if (Math.random() > 0.7) continue;

        for (let j = i + 1; j < particles.current.length; j++) {
          // More connections
          if (Math.random() > 0.6) continue;

          const dx = particles.current[i].x - particles.current[j].x;
          const dy = particles.current[i].y - particles.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            // More visible connections
            ctx.strokeStyle = `rgba(150, 150, 255, ${opacity * 0.3})`;
            // Thicker lines
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-[5] pointer-events-none w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};
