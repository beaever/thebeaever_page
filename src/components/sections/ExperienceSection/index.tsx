/**
 * ExperienceSection Component
 */

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { AchievementCard } from './AchievementCard';
import { useCareerCalculator } from '@/hooks/useCareerCalculator';
import { ACHIEVEMENTS } from '@/constants/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function ExperienceSection() {
  return (
    <Section id='experience'>
      <AnimatedWrapper variant="fadeInUp">
        <Text.Heading size="md" className="mb-12 md:mb-16">
          Experience
        </Text.Heading>
      </AnimatedWrapper>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={staggerContainer}
        className='space-y-12 md:space-y-16'
      >
        {/* NCITS */}
        <motion.div variants={fadeInUp}>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
            <div>
              <h3 className='text-2xl font-bold mb-1'>NCITS</h3>
              <p className='text-[var(--text-tertiary)]'>
                ITSM 서비스개발 1팀 · Frontend Developer · 2022.01 - 2025.04
              </p>
            </div>
            <span className='text-[var(--accent-primary)] font-mono text-sm mt-2 md:mt-0'>
              {useCareerCalculator('2022.01', '2025.04').formattedText}
            </span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {ACHIEVEMENTS.NCITS.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </motion.div>

        {/* HUBDNC */}
        <motion.div variants={fadeInUp}>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
            <div>
              <h3 className='text-2xl font-bold mb-1'>HubDnc</h3>
              <p className='text-[var(--text-tertiary)]'>
                Frontend Developer · 2021.07 - 2021.12
              </p>
            </div>
            <span className='text-[var(--accent-primary)] font-mono text-sm mt-2 md:mt-0'>
              {useCareerCalculator('2021.07', '2021.12').formattedText}
            </span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {ACHIEVEMENTS.HUBDNC.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
