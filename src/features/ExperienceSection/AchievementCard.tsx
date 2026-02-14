/**
 * AchievementCard Component
 */

import { Zap, TrendingUp } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';
import { Text } from '@/components/ui/Text';

interface AchievementCardProps {
  title: string;
  description: string;
  metrics?: string;
  metricsLabel?: string;
  tags?: string[];
  accentColor?: 'primary' | 'secondary';
}

export function AchievementCard({
  title,
  description,
  metrics,
  metricsLabel,
  tags = [],
  accentColor = 'primary',
}: AchievementCardProps) {
  const accentClass =
    accentColor === 'primary'
      ? 'text-[var(--accent-primary)]'
      : 'text-[var(--accent-secondary)]';

  const hoverClass =
    accentColor === 'primary'
      ? 'group-hover:text-[var(--accent-primary)]'
      : 'group-hover:text-[var(--accent-secondary)]';

  return (
    <GlassCard variant='group' padding='md' rounded='xl'>
      <div className='flex items-start justify-between mb-4'>
        <Zap className={accentClass} size={24} />
        <TrendingUp
          className={`text-[var(--text-quaternary)] ${hoverClass} transition-colors`}
          size={20}
        />
      </div>
      <Text.Heading size='xs' as='h4' className='mb-2'>
        {title}
      </Text.Heading>
      {metrics && metricsLabel && (
        <Text.Body size='sm' color='secondary' className='leading-relaxed mb-3'>
          {metricsLabel} <strong className={accentClass}>{metrics}</strong>{' '}
          {description}
        </Text.Body>
      )}
      {!metrics && (
        <Text.Body size='sm' color='secondary' className='leading-relaxed mb-3'>
          {description}
        </Text.Body>
      )}
      {tags.length > 0 && (
        <ul className='text-xs text-[var(--text-tertiary)] space-y-1'>
          {tags.map((tag, index) => (
            <li key={index}>• {tag}</li>
          ))}
        </ul>
      )}
    </GlassCard>
  );
}
