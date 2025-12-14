'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { SKILLS } from '@/constants/data';

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
  etc: 'Etc',
};

export function SkillsSection() {
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  return (
    <section id='skills' className='py-20 sm:py-32'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            Skills
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full' />
          <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>
            다양한 기술 스택을 활용하여 웹 애플리케이션을 개발합니다.
          </p>
        </motion.div>

        <div className='max-w-4xl mx-auto space-y-12'>
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-50px' }}
            >
              <h3 className='text-xl font-semibold text-foreground mb-6'>
                {categoryLabels[category]}
              </h3>
              <div className='flex flex-wrap gap-3'>
                {skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <Badge
                      variant='secondary'
                      className='px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default'
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
