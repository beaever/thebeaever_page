'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const words = children.split(' ');

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className='inline-block overflow-hidden mr-[0.25em]'>
          <motion.span
            className='inline-block'
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + index * 0.05,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
