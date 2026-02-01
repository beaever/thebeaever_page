'use client';

import { useEffect, useRef } from 'react';

export function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const generateNoise = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.sin(i * 0.001) * 127 + 128;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 25;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    generateNoise();
    window.addEventListener('resize', generateNoise);

    return () => {
      window.removeEventListener('resize', generateNoise);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 -z-20 pointer-events-none'
      style={{ opacity: 0.1 }}
    />
  );
}
