import { Text } from '@/components/ui/Text';
import { PROFILE } from '@/constants/data';

export function Footer() {
  return (
    <footer className='py-8 border-t border-[var(--border-primary)] relative z-10'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 text-center'>
        <Text.Body size='sm' color='quaternary'>
          © {new Date().getFullYear()} {PROFILE.logo}. All rights reserved.
        </Text.Body>
      </div>
    </footer>
  );
}
