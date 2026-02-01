'use client';

import React, { useEffect, useState } from 'react';
import { ParallaxBackground } from './ParallaxBackground';
import { NavigationDots } from './NavigationDots';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';
export function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <main className="relative bg-background-dark text-white min-h-screen">
      <ParallaxBackground />

      <NavigationDots
        activeSection={activeSection}
        onNavigate={handleNavigate} />


      <div className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>);

}