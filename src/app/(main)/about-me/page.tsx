'use client';

import { motion } from 'framer-motion';
import { Mail, Github, MapPin, Briefcase, Calendar } from 'lucide-react';
import { PROFILE, SKILLS, CAREERS } from '@/constants/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
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

export default function AboutMePage() {
  const groupedSkills = SKILLS.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof SKILLS>,
  );

  return (
    <div className='min-h-screen p-4 lg:p-8'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(100px,auto)]'
      >
        {/* Header Card */}
        <motion.div
          variants={itemVariants}
          className='col-span-1 md:col-span-2 lg:col-span-4 bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-3xl p-8 lg:p-10'
        >
          <p className='text-xs font-medium opacity-60 uppercase tracking-wider mb-2'>
            Info
          </p>
          <h1 className='text-3xl lg:text-4xl font-bold mb-4'>
            {PROFILE.name}{' '}
            <span className='font-normal opacity-60'>({PROFILE.nameEn})</span>
          </h1>
          <p className='text-base lg:text-lg opacity-80 leading-relaxed max-w-3xl'>
            {PROFILE.description}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.a
          href={`mailto:${PROFILE.email}`}
          variants={itemVariants}
          className='bg-muted/50 rounded-3xl p-6 flex flex-col justify-between border border-border/50 hover:bg-muted transition-colors group'
        >
          <Mail className='w-5 h-5 text-muted-foreground' />
          <div>
            <p className='text-xs text-muted-foreground mb-1'>Email</p>
            <p className='text-sm font-medium truncate'>{PROFILE.email}</p>
          </div>
        </motion.a>

        <motion.a
          href={PROFILE.github}
          target='_blank'
          rel='noopener noreferrer'
          variants={itemVariants}
          className='bg-muted/50 rounded-3xl p-6 flex flex-col justify-between border border-border/50 hover:bg-muted transition-colors group'
        >
          <Github className='w-5 h-5 text-muted-foreground' />
          <div>
            <p className='text-xs text-muted-foreground mb-1'>GitHub</p>
            <p className='text-sm font-medium'>@beaever</p>
          </div>
        </motion.a>

        <motion.div
          variants={itemVariants}
          className='bg-muted/50 rounded-3xl p-6 flex flex-col justify-between border border-border/50'
        >
          <MapPin className='w-5 h-5 text-muted-foreground' />
          <div>
            <p className='text-xs text-muted-foreground mb-1'>Location</p>
            <p className='text-sm font-medium'>{PROFILE.location}</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='bg-muted/50 rounded-3xl p-6 flex flex-col justify-between border border-border/50'
        >
          <Briefcase className='w-5 h-5 text-muted-foreground' />
          <div>
            <p className='text-xs text-muted-foreground mb-1'>Role</p>
            <p className='text-sm font-medium'>{PROFILE.title}</p>
          </div>
        </motion.div>

        {/* Highlights Card */}
        <motion.div
          variants={itemVariants}
          className='col-span-1 md:col-span-2 bg-muted/50 rounded-3xl p-6 lg:p-8 border border-border/50'
        >
          <p className='text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4'>
            What I Value
          </p>
          <ul className='space-y-3'>
            {PROFILE.highlights?.map((highlight, index) => (
              <li key={index} className='flex items-start gap-3'>
                <span className='w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0' />
                <span className='text-sm lg:text-base'>{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          variants={itemVariants}
          className='col-span-1 md:col-span-2 bg-muted/50 rounded-3xl p-6 lg:p-8 border border-border/50'
        >
          <p className='text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4'>
            Tech Stack
          </p>
          <div className='space-y-4'>
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category}>
                <p className='text-xs text-muted-foreground uppercase tracking-wider mb-2'>
                  {category}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className='px-3 py-1.5 bg-background/80 rounded-full text-sm font-medium'
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={itemVariants}
          className='col-span-1 md:col-span-2 lg:col-span-4'
        >
          <p className='text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 px-2'>
            Experience
          </p>
        </motion.div>

        {/* Career Cards */}
        {CAREERS.map((career) => (
          <motion.div
            key={career.company}
            variants={itemVariants}
            className='col-span-1 md:col-span-2 lg:col-span-4 bg-muted/50 rounded-3xl p-6 lg:p-8 border border-border/50'
          >
            <div className='flex flex-col lg:flex-row lg:items-start gap-6'>
              {/* Company Info */}
              <div className='lg:w-64 flex-shrink-0'>
                <h3 className='text-xl font-bold mb-1'>{career.company}</h3>
                <p className='text-sm text-muted-foreground mb-2'>
                  {career.position}
                </p>
                <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                  <Calendar className='w-3 h-3' />
                  <span>{career.period}</span>
                </div>
              </div>

              {/* Projects Grid */}
              <div className='flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {career.projects.map((project) => (
                  <div
                    key={project.title}
                    className='bg-background/50 rounded-2xl p-5'
                  >
                    <h4 className='font-semibold mb-1'>{project.title}</h4>
                    <p className='text-xs text-muted-foreground mb-3'>
                      {project.period}
                    </p>
                    <p className='text-sm text-muted-foreground mb-3'>
                      {project.description}
                    </p>
                    {project.details.length > 0 && (
                      <ul className='space-y-1'>
                        {project.details.slice(0, 3).map((detail, idx) => (
                          <li
                            key={idx}
                            className='text-xs text-muted-foreground flex items-start gap-2'
                          >
                            <span className='w-1 h-1 rounded-full bg-muted-foreground mt-1.5 flex-shrink-0' />
                            <span className='line-clamp-2'>{detail}</span>
                          </li>
                        ))}
                        {project.details.length > 3 && (
                          <li className='text-xs text-muted-foreground/60'>
                            +{project.details.length - 3} more
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
