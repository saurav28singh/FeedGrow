"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  color: string;
}

export default function InteractiveBackgroundCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140,
    };

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Palette: dark teal (#064E4A), emerald green (#008F68), bright lime (#84CC16)
    const colors = ["#008F68", "#064E4A", "#84CC16", "#10B981"];

    // Initialize nodes
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const r = 1.6 + Math.random() * 2.2;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: r,
        baseRadius: r,
        alpha: 0.25 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", onResize, { passive: true });

    let time = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      time += 0.015;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      const maxDist = 130;

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 143, 104, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;

          // Bounce off boundaries with padding
          if (n.x < 10) {
            n.x = 10;
            n.vx *= -1;
          }
          if (n.x > width - 10) {
            n.x = width - 10;
            n.vx *= -1;
          }
          if (n.y < 10) {
            n.y = 10;
            n.vy *= -1;
          }
          if (n.y > height - 10) {
            n.y = height - 10;
            n.vy *= -1;
          }

          // Gentle mouse avoidance / attraction
          const mdx = n.x - mouse.x;
          const mdy = n.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouse.radius && mDist > 0) {
            const force = (1 - mDist / mouse.radius) * 1.5;
            n.x += (mdx / mDist) * force;
            n.y += (mdy / mDist) * force;
            n.radius = n.baseRadius * 1.6;
          } else {
            n.radius += (n.baseRadius - n.radius) * 0.08;
          }
        }

        // Pulse alpha gently
        const currentAlpha = n.alpha + Math.sin(time + i) * 0.12;

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.5, n.radius), 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.85, currentAlpha));
        ctx.fill();

        // Subtle glow halo for larger nodes
        if (n.baseRadius > 2.8) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = n.color;
          ctx.globalAlpha = Math.max(0.05, currentAlpha * 0.25);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1.0;
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 w-full h-full ${className}`}
    />
  );
}
