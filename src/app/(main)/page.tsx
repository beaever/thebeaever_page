'use client';

import { Header } from '@/components/layout/Header';
import { FloatingText } from '@/components/background/FloatingText';
import { NoiseTexture } from '@/components/background/NoiseTexture';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
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
