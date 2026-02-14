/**
 * ContactSection Component
 */

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/common/GlassCard';
import { fadeInUp } from '@/lib/animations';
import { PROFILE } from '@/constants/data';

export function ContactSection() {
  return (
    <Section id='contact'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <GlassCard padding="lg" className="text-center">
          <div className='bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 rounded-2xl p-8 md:p-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Let&apos;s Work Together
            </h2>
            <p className='text-[var(--text-secondary)] text-lg mb-8'>
              새로운 프로젝트나 협업 기회에 대해 이야기 나눠요.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <a
                href={`mailto:${PROFILE.email}`}
                className='px-8 py-3 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg font-medium hover:shadow-lg hover:shadow-[var(--shadow-accent)] transition-all'
              >
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                target='_blank'
                rel='noopener noreferrer'
                className='px-8 py-3 border border-[var(--border-primary)] rounded-lg font-medium hover:bg-[var(--bg-surface)] transition-all'
              >
                GitHub
              </a>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
