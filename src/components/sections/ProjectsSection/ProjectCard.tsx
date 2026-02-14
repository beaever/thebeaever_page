/**
 * ProjectCard Component
 */

import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';

interface ProjectCardProps {
  title: string;
  problem: string;
  solution: string;
  metrics?: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  problem,
  solution,
  metrics,
  technologies,
}: ProjectCardProps) {
  return (
    <GlassCard variant="group" padding="lg">
      <div className='flex items-start justify-between mb-6'>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <ArrowUpRight
          className='text-[var(--text-quaternary)] group-hover:text-[var(--accent-primary)] transition-colors'
          size={24}
        />
      </div>

      <div className='space-y-4'>
        <div>
          <p className='text-sm text-[var(--accent-primary)] font-semibold mb-2'>
            문제
          </p>
          <p className='text-[var(--text-secondary)] text-sm'>{problem}</p>
        </div>
        <div>
          <p className='text-sm text-[var(--accent-secondary)] font-semibold mb-2'>
            해결
          </p>
          <p className='text-[var(--text-secondary)] text-sm mb-2'>
            {solution}
            {metrics && (
              <>
                {' '}
                <strong className='text-[var(--accent-secondary)]'>
                  {metrics}
                </strong>
                .
              </>
            )}
          </p>
          <ul className='text-xs text-[var(--text-tertiary)] space-y-1'>
            {technologies.map((tech, index) => (
              <li key={index}>• {tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </GlassCard>
  );
}
