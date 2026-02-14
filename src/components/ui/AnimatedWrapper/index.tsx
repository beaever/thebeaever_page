/**
 * AnimatedWrapper Component
 *
 * Framer Motion 애니메이션을 추상화한 래퍼 컴포넌트
 * UI 라이브러리로 이주 가능하도록 프로젝트 의존성 0%로 설계
 *
 * @example
 * <AnimatedWrapper variant="fadeInUp">Content</AnimatedWrapper>
 */

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

interface AnimatedWrapperProps {
  children: ReactNode;
  variant?: 'fadeInUp' | 'staggerContainer' | 'scaleIn';
  customVariants?: Variants;
  className?: string;
  delay?: number;
}

export function AnimatedWrapper({
  children,
  variant = 'fadeInUp',
  customVariants,
  className,
  delay,
}: AnimatedWrapperProps) {
  const variants = {
    fadeInUp,
    staggerContainer,
    scaleIn,
  };

  const selectedVariants = customVariants || variants[variant];

  const animationProps = delay
    ? {
        ...selectedVariants,
        visible: {
          ...(selectedVariants.visible as any),
          transition: {
            ...(selectedVariants.visible as any).transition,
            delay,
          },
        },
      }
    : selectedVariants;

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={animationProps}
      className={className}
    >
      {children}
    </motion.div>
  );
}
