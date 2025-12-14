'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Briefcase } from 'lucide-react';
import { PROFILE } from '@/constants/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <section id='about' className='py-20 sm:py-32 bg-secondary/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='max-w-4xl mx-auto'
        >
          <motion.div variants={itemVariants} className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
              About Me
            </h2>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full' />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='grid md:grid-cols-2 gap-12 items-center'
          >
            <div className='space-y-6'>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                {PROFILE.description}
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                새로운 기술을 배우고 적용하는 것을 즐기며, 팀과 함께 성장하는
                것을 중요하게 생각합니다. 사용자 중심의 개발을 통해 실제 가치를
                전달하는 것이 목표입니다.
              </p>
            </div>

            <div className='space-y-4'>
              <motion.div
                variants={itemVariants}
                className='flex items-center gap-4 p-4 rounded-lg bg-background border border-border'
              >
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-5 w-5 text-primary' />
                </div>
                <div>
                  <p className='text-sm text-muted-foreground'>Position</p>
                  <p className='font-medium text-foreground'>{PROFILE.title}</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className='flex items-center gap-4 p-4 rounded-lg bg-background border border-border'
              >
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-5 w-5 text-primary' />
                </div>
                <div>
                  <p className='text-sm text-muted-foreground'>Location</p>
                  <p className='font-medium text-foreground'>
                    {PROFILE.location}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className='flex items-center gap-4 p-4 rounded-lg bg-background border border-border'
              >
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-5 w-5 text-primary' />
                </div>
                <div>
                  <p className='text-sm text-muted-foreground'>Email</p>
                  <p className='font-medium text-foreground'>{PROFILE.email}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
