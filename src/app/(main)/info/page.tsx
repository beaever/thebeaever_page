'use client';

import { motion } from 'framer-motion';
import { PROFILE, SKILLS } from '@/constants/data';

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

export default function InfoPage() {
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  return (
    <div className='min-h-screen p-8 lg:p-16'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='max-w-2xl'
      >
        <motion.h1
          variants={itemVariants}
          className='text-3xl font-medium mb-12'
        >
          Info
        </motion.h1>

        <motion.section variants={itemVariants} className='mb-16'>
          <h2 className='text-sm text-muted-foreground mb-4'>About</h2>
          <p className='text-base leading-relaxed'>{PROFILE.description}</p>
        </motion.section>

        <motion.section variants={itemVariants} className='mb-16'>
          <h2 className='text-sm text-muted-foreground mb-4'>Location</h2>
          <p className='text-base'>{PROFILE.location}</p>
        </motion.section>

        <motion.section variants={itemVariants} className='mb-16'>
          <h2 className='text-sm text-muted-foreground mb-4'>Skills</h2>
          <div className='space-y-6'>
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category}>
                <h3 className='text-xs text-muted-foreground uppercase tracking-wider mb-2'>
                  {category}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className='text-sm px-3 py-1 bg-muted rounded-full'
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
