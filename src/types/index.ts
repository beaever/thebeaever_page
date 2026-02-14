export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  role: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'etc';
  proficiency?: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface CareerProject {
  title: string;
  period: string;
  description: string;
  details: string[];
}

export interface Career {
  company: string;
  position: string;
  period: string;
  projects: CareerProject[];
}

export interface Achievement {
  title: string;
  description: string;
  metrics?: string;
  tags?: string[];
  accentColor?: 'primary' | 'secondary';
}

export interface PortfolioProject {
  title: string;
  problem: string;
  solution: string;
  metrics?: string;
  technologies: string[];
}
