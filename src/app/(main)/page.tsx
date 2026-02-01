'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PROFILE, SKILLS, PROJECTS, CAREERS } from '@/constants/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function HomePage() {
  const [isScrollable, setIsScrollable] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const handleShowMore = () => {
    if (contentRef.current) {
      contentRef.current.style.overflow = 'auto';
      setIsScrollable(false);
    }
  };

  return (
    <div className='min-h-screen'>
      <div className='max-w-[1000px] mx-auto px-5 py-10'>
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex justify-between items-center mb-20'
        >
          <div className='font-bold text-xl'>{PROFILE.logo}</div>
          <Link
            href={`mailto:${PROFILE.email}`}
            className='border border-[#333] px-5 py-2 rounded-full text-sm transition-all hover:bg-white hover:text-black'
          >
            Get in Touch
          </Link>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='mb-16'
        >
          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white to-[#888] bg-clip-text text-transparent'>
            Building Digital
            <br />
            Experience.
          </h1>
          <p className='text-[#888] mt-4 text-lg'>{PROFILE.description}</p>
        </motion.section>

        {/* Bento Grid */}
        <motion.section
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='grid grid-cols-1 md:grid-cols-4 gap-5'
          style={{ gridAutoRows: '280px' }}
        >
          {/* Main Project - Large */}
          <motion.a
            href={PROJECTS[0]?.liveUrl || '#'}
            target='_blank'
            rel='noopener noreferrer'
            variants={itemVariants}
            className='col-span-1 md:col-span-2 row-span-2 bg-[#1a1a1a] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-end border border-white/5 transition-transform hover:-translate-y-1 hover:border-white/20 group'
          >
            <div
              className='absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-400 group-hover:opacity-70 group-hover:scale-105'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')",
              }}
            />
            <div className='relative z-10'>
              <h3 className='text-2xl font-bold mb-1'>{PROJECTS[0]?.title}</h3>
              <p className='text-[#888] text-sm'>
                {PROJECTS[0]?.tags.join(', ')}
              </p>
            </div>
          </motion.a>

          {/* Sub Project - Tall */}
          <motion.a
            href={PROJECTS[1]?.liveUrl || '#'}
            target='_blank'
            rel='noopener noreferrer'
            variants={itemVariants}
            className='col-span-1 row-span-2 bg-[#1a1a1a] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-end border border-white/5 transition-transform hover:-translate-y-1 hover:border-white/20 group'
          >
            <div
              className='absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-400 group-hover:opacity-70 group-hover:scale-105'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')",
              }}
            />
            <div className='relative z-10'>
              <h3 className='text-xl font-bold mb-1'>{PROJECTS[1]?.title}</h3>
              <p className='text-[#888] text-sm'>{PROJECTS[1]?.role}</p>
            </div>
          </motion.a>

          {/* Tech Stack Card */}
          <motion.div
            variants={itemVariants}
            className='col-span-1 bg-[#1a1a1a] rounded-3xl p-6 border border-white/5 flex flex-col'
          >
            <h3 className='text-xl font-bold mb-4'>Tech Stack</h3>
            <div className='flex flex-wrap gap-2 mt-auto'>
              {SKILLS.slice(0, 6).map((skill) => (
                <span
                  key={skill.name}
                  className='bg-white/10 px-3 py-1.5 rounded-xl text-sm backdrop-blur-sm'
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* GitHub Card - White */}
          <motion.a
            href={PROFILE.github}
            target='_blank'
            rel='noopener noreferrer'
            variants={itemVariants}
            className='col-span-1 bg-white text-black rounded-3xl p-6 border border-white/5 flex flex-col justify-between transition-transform hover:-translate-y-1'
          >
            <div>
              <h3 className='text-xl font-bold mb-1'>Github</h3>
              <p className='text-[#555] text-sm'>소스코드 보러가기</p>
            </div>
            <div className='text-4xl self-end'>↗</div>
          </motion.a>

          {/* Additional Project - Wide */}
          <motion.a
            href={PROJECTS[2]?.liveUrl || '#'}
            target='_blank'
            rel='noopener noreferrer'
            variants={itemVariants}
            className='col-span-1 md:col-span-2 bg-[#1a1a1a] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-end border border-white/5 transition-transform hover:-translate-y-1 hover:border-white/20 group'
          >
            <div
              className='absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-400 group-hover:opacity-70 group-hover:scale-105'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop')",
              }}
            />
            <div className='relative z-10'>
              <h3 className='text-xl font-bold mb-1'>{PROJECTS[2]?.title}</h3>
              <p className='text-[#888] text-sm'>{PROJECTS[2]?.role}</p>
            </div>
          </motion.a>

          {/* About Me Card - Wide */}
          <motion.div
            variants={itemVariants}
            className='col-span-1 md:col-span-2 bg-[#1a1a1a] rounded-3xl p-6 border border-white/5 flex flex-col'
          >
            <h3 className='text-xl font-bold mb-3'>About Me</h3>
            <p className='text-[#888] text-sm leading-relaxed'>
              {PROFILE.description}
            </p>
            <div className='mt-4 space-y-2'>
              {PROFILE.highlights?.map((highlight, index) => (
                <p
                  key={index}
                  className='text-[#888] text-sm flex items-start gap-2'
                >
                  <span className='text-white/40'>•</span>
                  {highlight}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Career Card - Wide & Tall */}
          <motion.div
            variants={itemVariants}
            className='col-span-1 md:col-span-2 row-span-2 bg-[#1a1a1a] rounded-3xl p-6 border border-white/5 flex flex-col overflow-hidden relative'
          >
            <h3 className='text-xl font-bold mb-4'>Experience</h3>
            <div ref={contentRef} className='flex-1 space-y-4 overflow-hidden'>
              {CAREERS.map((career) => (
                <div
                  key={career.company}
                  className='border-l-2 border-white/20 pl-4'
                >
                  <div className='flex items-center justify-between mb-1'>
                    <h4 className='font-bold text-lg'>{career.company}</h4>
                    <span className='text-[#888] text-xs'>{career.period}</span>
                  </div>
                  <p className='text-[#888] text-sm mb-2'>{career.position}</p>
                  <div className='space-y-2'>
                    {career.projects.map((project) => (
                      <div
                        key={project.title}
                        className='bg-white/5 rounded-xl p-3'
                      >
                        <p className='text-sm font-medium mb-1'>
                          {project.title}
                        </p>
                        <p className='text-[#888] text-xs line-clamp-2'>
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {isScrollable && (
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] to-transparent pt-12 pb-6 px-6'>
                <button
                  onClick={handleShowMore}
                  className='w-full text-center text-[#888] text-sm hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer'
                >
                  <span>↓</span>
                  Show more
                </button>
              </div>
            )}
          </motion.div>

          {/* Stats Card */}
          <motion.div
            variants={itemVariants}
            className='col-span-1 bg-[#1a1a1a] rounded-3xl p-6 border border-white/5 flex flex-col justify-between'
          >
            <h3 className='text-xl font-bold'>Stats</h3>
            <div className='mt-auto space-y-3'>
              <div>
                <p className='text-3xl font-bold'>
                  {CAREERS.reduce((acc, c) => acc + c.projects.length, 0)}+
                </p>
                <p className='text-[#888] text-xs'>Projects</p>
              </div>
              <div>
                <p className='text-3xl font-bold'>{CAREERS.length}</p>
                <p className='text-[#888] text-xs'>Companies</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.a
            href={`mailto:${PROFILE.email}`}
            variants={itemVariants}
            className='col-span-1 bg-[#1a1a1a] rounded-3xl p-6 border border-white/5 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:border-white/20'
          >
            <h3 className='text-xl font-bold'>Contact</h3>
            <div className='mt-auto'>
              <p className='text-[#888] text-sm mb-2'>{PROFILE.location}</p>
              <div className='flex items-center justify-between'>
                <p className='text-sm truncate pr-2'>{PROFILE.email}</p>
                <span className='text-2xl'>↗</span>
              </div>
            </div>
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
