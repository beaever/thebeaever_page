/**
 * HeroSection Component
 * 
 * 포트폴리오 메인 히어로 섹션
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/common/GradientText';
import { CodeBlock } from './CodeBlock';
import { useTotalCareer } from '@/hooks/useCareerCalculator';
import { EXPERIENCES } from '@/constants/data';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const totalCareerText = useTotalCareer(EXPERIENCES);
  const DYNAMIC_CODE_TEXT = `const developer = {\n  experience: '${totalCareerText}',\n  focus: ['Performance', 'Scalability']\n}`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= DYNAMIC_CODE_TEXT.length) {
        setTypedText(DYNAMIC_CODE_TEXT.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [DYNAMIC_CODE_TEXT]);

  return (
    <section id='about' className='min-h-screen flex items-center pt-20'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left: Text */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'
            >
              Solving Complexity
              <br />
              with <GradientText>Clean Code</GradientText>.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className='text-lg md:text-xl text-[var(--text-secondary)] mb-4'
            >
              프론트엔드 개발자 <GradientText>김진영</GradientText>입니다.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className='text-base md:text-lg text-[var(--text-tertiary)] leading-relaxed'
            >
              비즈니스 가치를 코드에 녹여내고,
              <br />
              사용자 경험의 <GradientText>&apos;깊이&apos;</GradientText>를
              고민합니다.
            </motion.p>
          </motion.div>

          {/* Right: Code Typing Animation */}
          <CodeBlock typedText={typedText} />
        </div>
      </div>
    </section>
  );
}
