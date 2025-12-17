'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/constants/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <div className='min-h-screen p-8 lg:p-16'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='max-w-4xl'
      >
        <motion.h1
          variants={itemVariants}
          className='text-3xl font-medium mb-12'
        >
          Projects
        </motion.h1>

        <div className='space-y-0'>
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className='group'
            >
              <Link
                href={project.liveUrl || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-start justify-between py-6 border-b border-border hover:bg-muted/30 transition-colors -mx-4 px-4'
              >
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-1'>
                    <h3 className='text-base font-medium group-hover:text-primary transition-colors'>
                      {project.title}
                    </h3>
                    <ArrowUpRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    {project.date} / {project.role}
                  </p>
                  <p className='text-sm text-muted-foreground mt-2 max-w-lg'>
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
