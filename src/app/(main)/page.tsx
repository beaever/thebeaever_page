'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE, PROJECTS } from '@/constants/data';
import { TextReveal } from '@/components/ui/TextReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className='min-h-screen p-8 lg:p-16'>
      <div className='max-w-4xl'>
        {/* Hero Section */}
        <motion.section
          className='mb-32 min-h-[60vh] flex flex-col justify-center'
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className='text-4xl lg:text-6xl font-medium mb-8 leading-tight'>
              <TextReveal delay={0.2}>{PROFILE.name}</TextReveal>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className='text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-xl'>
              {PROFILE.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className='mt-12'
          >
            <MagneticButton>
              <Link
                href='/projects'
                className='inline-flex items-center gap-2 text-sm font-medium border border-foreground/20 px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition-all duration-300'
                data-cursor-text='View'
              >
                View Projects
                <ArrowUpRight className='w-4 h-4' />
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-sm text-muted-foreground mb-8 uppercase tracking-widest'
          >
            Selected Works
          </motion.h2>

          <div className='space-y-0'>
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='group'
              >
                <Link
                  href={project.liveUrl || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-between py-8 border-b border-border/50 hover:border-foreground/30 transition-all duration-500 -mx-4 px-4'
                  data-cursor-text='Open'
                >
                  <div className='flex-1'>
                    <motion.h3 className='text-2xl lg:text-3xl font-medium mb-2 transition-transform duration-500 group-hover:translate-x-4'>
                      {project.title}
                    </motion.h3>
                    <p className='text-sm text-muted-foreground transition-transform duration-500 group-hover:translate-x-4'>
                      {project.date} — {project.role}
                    </p>
                  </div>
                  <motion.div
                    className='opacity-0 group-hover:opacity-100 transition-all duration-300'
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ArrowUpRight className='w-6 h-6' />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='mt-32 mb-16 text-center'
        >
          <p className='text-muted-foreground mb-6'>
            Interested in working together?
          </p>
          <MagneticButton>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors'
              data-cursor-text='Say Hi'
            >
              Get in touch
              <ArrowUpRight className='w-5 h-5' />
            </Link>
          </MagneticButton>
        </motion.section>
      </div>
    </div>
  );
}
