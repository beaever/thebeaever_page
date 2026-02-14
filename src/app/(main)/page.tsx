'use client';

import { Header } from '@/components/layout/Header';
import { FloatingText } from '@/components/background/FloatingText';
import { NoiseTexture } from '@/components/background/NoiseTexture';
import { HeroSection } from '@/features/HeroSection';
import { ExperienceSection } from '@/features/ExperienceSection';
import { ProjectsSection } from '@/features/ProjectsSection';
import { ContactSection } from '@/features/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative'>
      <FloatingText />
      <NoiseTexture />
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
