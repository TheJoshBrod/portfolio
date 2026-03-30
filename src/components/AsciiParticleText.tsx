'use client';

import { useEffect, useRef } from 'react';

const ASCII_CHARS = ['.', '*', '+', '~', '-', '|', ':', ';', '='];

type Particle = {
  char: string;
  displayChar: string;
  targetX: number;
  targetY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  settled: boolean;
};

type Props = {
  text: string;
  className?: string;
  desktopFontSize?: number;
  mobileFontSize?: number;
  fontWeight?: string;
  color?: string;
  inactiveColor?: string;
  wrap?: boolean;
  delay?: number;
};

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export default function AsciiParticleText({
  text,
  className,
  desktopFontSize = 64,
  mobileFontSize = 36,
  fontWeight = 'bold',
  color = '#ffffff',
  inactiveColor = '#6b7280',
  wrap = false,
  delay = 0,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMd = window.matchMedia('(min-width: 768px)').matches;
    const fontSize = isMd ? desktopFontSize : mobileFontSize;
    const fontStr = `${fontWeight} ${fontSize}px 'Courier Prime', 'Courier New', monospace`;
    const dpr = window.devicePixelRatio || 1;
    const padY = 4;
    const lineHeight = fontSize * 1.5;

    let rafId = 0;
    let loopRunning = false;
    let cssW = 0;
    let cssH = 0;
    let particles: Particle[] = [];

    function startLoop() {
      if (loopRunning) return;
      loopRunning = true;
      rafId = requestAnimationFrame(tick);
    }

    function tick() {
      const ctx = canvas!.getContext('2d')!;
      ctx.clearRect(0, 0, cssW, cssH);

      let allSettled = true;

      for (const p of particles) {
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx += dx * 0.09;
        p.vy += dy * 0.09;
        p.vx *= 0.76;
        p.vy *= 0.76;
        p.x += p.vx;
        p.y += p.vy;

        const distSq = (p.targetX - p.x) ** 2 + (p.targetY - p.y) ** 2;
        if (distSq < 0.25 && p.vx * p.vx + p.vy * p.vy < 0.01) {
          p.settled = true;
          p.x = p.targetX;
          p.y = p.targetY;
        } else {
          p.settled = false;
          allSettled = false;
          if (Math.random() < 0.1) {
            p.displayChar = ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)]!;
          }
        }

        ctx.font = fontStr;
        ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = p.settled ? color : inactiveColor;
        ctx.fillText(p.settled ? p.char : p.displayChar, p.x, p.y);
      }

      if (!allSettled) {
        rafId = requestAnimationFrame(tick);
      } else {
        loopRunning = false;
      }
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    document.fonts.load(fontStr).then(() => {
      // Use an offscreen canvas for measurement
      const measureCanvas = document.createElement('canvas');
      const mCtx = measureCanvas.getContext('2d')!;
      mCtx.font = fontStr;

      const containerWidth = wrap ? (canvas.parentElement?.clientWidth ?? 576) : Infinity;
      const lines = wrap ? wrapText(mCtx, text, containerWidth) : [text];

      if (wrap) {
        cssW = containerWidth;
        cssH = Math.ceil(lines.length * lineHeight + padY * 2 + fontSize * 0.3);
      } else {
        cssW = Math.ceil(mCtx.measureText(text).width);
        cssH = Math.ceil(lineHeight + padY * 2);
      }

      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;

      const ctx = canvas.getContext('2d')!;
      ctx.scale(dpr, dpr);
      ctx.font = fontStr;

      // Build particles for every character across all lines
      particles = [];
      lines.forEach((line, lineIdx) => {
        const baseY = (lineIdx + 1) * lineHeight + padY;
        const lineWidth = mCtx.measureText(line).width;
        let curX = wrap ? (cssW - lineWidth) / 2 : 0;
        for (const ch of line) {
          const chWidth = mCtx.measureText(ch).width;
          particles.push({
            char: ch,
            displayChar: ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)]!,
            targetX: curX,
            targetY: baseY,
            x: Math.random() * cssW,
            y: Math.random() * cssH,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            settled: false,
          });
          curX += chWidth;
        }
      });

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        ctx.font = fontStr;
        ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = color;
        for (const p of particles) {
          ctx.fillText(p.char, p.targetX, p.targetY);
          p.settled = true;
        }
      } else {
        timeoutId = setTimeout(startLoop, delay);
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [text, desktopFontSize, mobileFontSize, fontWeight, color, inactiveColor, wrap, delay]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`block mx-auto ${className ?? ''}`} />;
}
