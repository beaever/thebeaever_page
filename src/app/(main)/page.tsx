'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROFILE, PROJECTS, SKILLS } from '@/constants/data';
import { MagneticButton } from '@/components/ui/MagneticButton';

const STATS = [
  { number: '5+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '10+', label: 'Technologies' },
  { number: '100%', label: 'Passion' },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className='min-h-screen'>
      {/* Hero Section - Full Screen */}
      <motion.section
        ref={heroRef}
        className='min-h-screen flex flex-col justify-center px-8 lg:px-16 relative'
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className='max-w-5xl'
        >
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8'>
            Creative
            <br />
            <span className='text-muted-foreground'>Developer</span>
            <br />& Designer
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className='text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium'
        >
          {PROFILE.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mt-12'
        >
          <MagneticButton>
            <Link
              href='/projects'
              className='inline-flex items-center gap-3 text-lg font-bold uppercase tracking-wider hover:gap-5 transition-all duration-300'
              data-cursor-text='View'
            >
              View Projects
              <ArrowRight className='w-5 h-5' />
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className='absolute bottom-12 left-8 lg:left-16'
        >
          <p className='text-sm text-muted-foreground font-medium'>
            Scroll to explore
          </p>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className='py-24 lg:py-32 px-8 lg:px-16 border-t border-border/30'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16'>
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='text-center lg:text-left'
            >
              <p className='text-5xl lg:text-7xl font-black mb-2'>
                {stat.number}
              </p>
              <p className='text-sm lg:text-base text-muted-foreground font-medium uppercase tracking-wider'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className='py-24 lg:py-32 px-8 lg:px-16 border-t border-border/30'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-4xl lg:text-6xl font-black mb-8 leading-tight'>
              About
              <br />
              <span className='text-muted-foreground'>Me</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex flex-col justify-center'
          >
            <p className='text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 font-medium'>
              I create digital experiences that combine aesthetics with
              functionality. With a focus on clean code and modern design
              principles, I help brands stand out in the digital landscape.
            </p>
            <MagneticButton>
              <Link
                href='/info'
                className='inline-flex items-center gap-3 text-base font-bold uppercase tracking-wider hover:gap-5 transition-all duration-300'
              >
                Learn More
                <ArrowRight className='w-4 h-4' />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-24 lg:py-32 px-8 lg:px-16 border-t border-border/30'>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl lg:text-6xl font-black mb-16'
        >
          Skills & <span className='text-muted-foreground'>Tools</span>
        </motion.h2>

        <div className='flex flex-wrap gap-4'>
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className='px-6 py-3 border border-border/50 rounded-full text-sm lg:text-base font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 cursor-default'
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-24 lg:py-32 px-8 lg:px-16 border-t border-border/30'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex justify-between items-end mb-16'
        >
          <h2 className='text-4xl lg:text-6xl font-black'>
            Selected <span className='text-muted-foreground'>Works</span>
          </h2>
          <MagneticButton className='hidden lg:block'>
            <Link
              href='/projects'
              className='inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:gap-4 transition-all duration-300'
            >
              View All
              <ArrowRight className='w-4 h-4' />
            </Link>
          </MagneticButton>
        </motion.div>

        <div className='space-y-0'>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group'
            >
              <Link
                href={project.liveUrl || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between py-8 lg:py-12 border-b border-border/30 hover:border-foreground/50 transition-all duration-500'
                data-cursor-text='Open'
              >
                <div className='flex items-baseline gap-6 lg:gap-12'>
                  <span className='text-sm text-muted-foreground font-mono'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className='text-2xl lg:text-4xl font-black transition-transform duration-500 group-hover:translate-x-4'>
                    {project.title}
                  </h3>
                </div>
                <div className='flex items-center gap-6'>
                  <span className='hidden lg:block text-sm text-muted-foreground font-medium'>
                    {project.role}
                  </span>
                  <ArrowRight className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0' />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='mt-12 lg:hidden'
        >
          <MagneticButton>
            <Link
              href='/projects'
              className='inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider'
            >
              View All Projects
              <ArrowRight className='w-4 h-4' />
            </Link>
          </MagneticButton>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className='py-32 lg:py-48 px-8 lg:px-16 border-t border-border/30 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight'>
            Let&apos;s Work
            <br />
            <span className='text-muted-foreground'>Together</span>
          </h2>
          <p className='text-lg lg:text-xl text-muted-foreground mb-12 max-w-xl mx-auto font-medium'>
            Have a project in mind? Let&apos;s create something amazing
            together.
          </p>
          <MagneticButton>
            <Link
              href='/contact'
              className='inline-flex items-center gap-3 text-lg font-bold uppercase tracking-wider border border-foreground/30 px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300'
              data-cursor-text='Contact'
            >
              Get in Touch
              <ArrowRight className='w-5 h-5' />
            </Link>
          </MagneticButton>
        </motion.div>
      </section>
    </div>
  );
}
