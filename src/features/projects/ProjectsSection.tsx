'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/constants/data';

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  return (
    <section id='projects' className='py-20 sm:py-32 bg-secondary/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            Projects
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full' />
          <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>
            제가 작업한 프로젝트들입니다. 각 프로젝트를 클릭하여 자세한 내용을
            확인하세요.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className='h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow'>
                <div className='aspect-video bg-muted relative overflow-hidden'>
                  <div className='absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 group-hover:opacity-0 transition-opacity' />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-4xl font-bold text-muted-foreground/30'>
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className='text-xl'>{project.title}</CardTitle>
                  <CardDescription className='line-clamp-2'>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex-1 flex flex-col justify-between gap-4'>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant='outline' className='text-xs'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex gap-2'>
                    {project.liveUrl && (
                      <Button variant='outline' size='sm' asChild>
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ExternalLink className='h-4 w-4 mr-2' />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant='outline' size='sm' asChild>
                        <a
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Github className='h-4 w-4 mr-2' />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
