/**
 * HeroSection Component
 *
 * 포트폴리오 메인 히어로 섹션
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '@/components/common/GradientText';
import { Text } from '@/components/ui/Text';
import { CodeBlock } from './CodeBlock';
import { useTotalExperience } from '@/hooks/useCareerCalculator';
import { EXPERIENCES_DATE, PROFILE } from '@/constants/data';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const totalExperienceText = useTotalExperience(EXPERIENCES_DATE);
  const DYNAMIC_CODE_TEXT = `const developer = {\n  experience: '${totalExperienceText}',\n  focus: ['Performance', 'Scalability']\n}`;

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
            <motion.div variants={fadeInUp}>
              <Text.Heading size='xl' as='h1' className='mb-6'>
                Solving Complexity
                <br />
                with <GradientText>Clean Code</GradientText>.
              </Text.Heading>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Text.Body size='lg' color='secondary' className='mb-4'>
                {PROFILE.description}
              </Text.Body>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className='space-y-2'>
                {PROFILE.highlights.map((highlight, index) => (
                  <Text.Body
                    key={index}
                    size='md'
                    color='tertiary'
                    className='leading-relaxed'
                  >
                    • <GradientText>{highlight}</GradientText>
                  </Text.Body>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Code Typing Animation */}
          <CodeBlock typedText={typedText} />
        </div>
      </div>
    </section>
  );
}
