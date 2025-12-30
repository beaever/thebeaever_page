'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

export function SplitText({
  children,
  className = '',
  delay = 0,
  charDelay = 0.03,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const chars = children.split('');

  return (
    <div ref={ref} className={className}>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          className='inline-block'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            ease: [0.33, 1, 0.68, 1],
            delay: delay + index * charDelay,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
