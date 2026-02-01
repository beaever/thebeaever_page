import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS, PROFILE } from '@/constants/data';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className='h-5 w-5' />,
  linkedin: <Linkedin className='h-5 w-5' />,
  mail: <Mail className='h-5 w-5' />,
};

export function Footer() {
  return (
    <footer className='border-t border-border bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} {PROFILE.logo}. All rights reserved.
          </p>

          <div className='flex items-center gap-4'>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors'
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
