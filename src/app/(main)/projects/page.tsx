'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/constants/data';

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
    transition: { duration: 0.5 },
  },
};

export default function ProjectsPage() {
  return (
    <div className='min-h-screen p-4 lg:p-8'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
      >
        {/* Header Card */}
        <motion.div
          variants={itemVariants}
          className='col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-3xl p-8 lg:p-10'
        >
          <p className='text-xs font-medium opacity-60 uppercase tracking-wider mb-2'>
            Portfolio
          </p>
          <h1 className='text-3xl lg:text-4xl font-bold mb-4'>Projects</h1>
          <p className='text-base lg:text-lg opacity-80 leading-relaxed max-w-2xl'>
            개인 프로젝트와 사이드 프로젝트 모음입니다. 각 프로젝트를 클릭하면
            상세 정보를 확인할 수 있습니다.
          </p>
        </motion.div>

        {/* Project Cards */}
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className={`${
              index === 0 ? 'col-span-1 md:col-span-2 row-span-2' : 'col-span-1'
            } bg-muted/50 rounded-3xl border border-border/50 overflow-hidden group hover:border-border transition-colors`}
          >
            <div className='p-6 lg:p-8 h-full flex flex-col'>
              <div className='flex items-start justify-between mb-4'>
                <span className='text-xs text-muted-foreground font-mono'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className='text-xs text-muted-foreground'>
                  {project.date}
                </span>
              </div>

              <div className='flex-1'>
                <h3
                  className={`font-bold mb-2 group-hover:text-primary transition-colors ${
                    index === 0 ? 'text-2xl lg:text-3xl' : 'text-lg'
                  }`}
                >
                  {project.title}
                </h3>
                <p className='text-sm text-muted-foreground mb-4'>
                  {project.role}
                </p>
                <p
                  className={`text-muted-foreground mb-4 ${
                    index === 0 ? 'text-base' : 'text-sm line-clamp-3'
                  }`}
                >
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tags.slice(0, index === 0 ? 6 : 3).map((tag) => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-background/80 rounded-full text-xs font-medium'
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > (index === 0 ? 6 : 3) && (
                    <span className='px-2 py-1 bg-background/80 rounded-full text-xs font-medium text-muted-foreground'>
                      +{project.tags.length - (index === 0 ? 6 : 3)}
                    </span>
                  )}
                </div>
              </div>

              <div className='flex items-center gap-3 pt-4 border-t border-border/30'>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors'
                  >
                    <ExternalLink className='w-4 h-4' />
                    Live
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors'
                  >
                    <Github className='w-4 h-4' />
                    Code
                  </Link>
                )}
                <ArrowUpRight className='w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity' />
              </div>
            </div>
          </motion.div>
        ))}

        {/* More Projects Coming Card */}
        <motion.div
          variants={itemVariants}
          className='col-span-1 bg-muted/30 rounded-3xl border border-dashed border-border/50 p-6 lg:p-8 flex flex-col items-center justify-center text-center min-h-[200px]'
        >
          <p className='text-muted-foreground text-sm mb-2'>More Coming Soon</p>
          <p className='text-xs text-muted-foreground/60'>
            새로운 프로젝트를 준비 중입니다
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
