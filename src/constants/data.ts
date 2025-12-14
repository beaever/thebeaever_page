import type { Project, Skill, SocialLink } from '@/types';

export const PROFILE = {
  name: 'THEBEAEVER',
  title: 'Frontend Developer',
  description:
    '사용자 경험을 중시하는 프론트엔드 개발자입니다. React, TypeScript, Next.js를 주로 사용하며, 클린 코드와 최신 기술 트렌드에 관심이 많습니다.',
  email: 'thebeaever@gmail.com',
  location: 'Seoul, South Korea',
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description:
      'React와 TypeScript를 활용한 웹 애플리케이션입니다. 사용자 인터페이스 최적화에 중점을 두었습니다.',
    image: '/projects/project1.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Project Two',
    description:
      'Next.js 기반의 풀스택 프로젝트입니다. SSR과 API Routes를 활용했습니다.',
    image: '/projects/project2.png',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Project Three',
    description:
      '모바일 반응형 대시보드 애플리케이션입니다. 데이터 시각화에 초점을 맞췄습니다.',
    image: '/projects/project3.png',
    tags: ['React', 'D3.js', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'react', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
  { name: 'Node.js', icon: 'nodejs', category: 'backend' },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'backend' },
  { name: 'Git', icon: 'git', category: 'tools' },
  { name: 'Figma', icon: 'figma', category: 'tools' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:thebeaever@gmail.com',
    icon: 'mail',
  },
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
