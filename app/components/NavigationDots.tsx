import React from 'react';
import { motion } from 'framer-motion';
interface NavigationDotsProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}
const sections = [
{
  id: 'hero',
  label: 'Home'
},
{
  id: 'about',
  label: 'About'
},
{
  id: 'skills',
  label: 'Skills'
},
{
  id: 'projects',
  label: 'Projects'
},
{
  id: 'contact',
  label: 'Contact'
}];

export function NavigationDots({
  activeSection,
  onNavigate
}: NavigationDotsProps) {
  const dotColorMap: Record<string, string> = {
    hero: 'bg-gradient-to-r from-primary-dark to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]',
    about: 'bg-gradient-to-r from-primary-dark to-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]',
    skills: 'bg-gradient-to-r from-primary-dark to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]',
    projects: 'bg-gradient-to-r from-primary-dark to-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]',
    contact: 'bg-gradient-to-r from-primary-dark to-teal-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
  };
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
      {sections.map((section) =>
      <button
        key={section.id}
        onClick={() => onNavigate(section.id)}
        className="group relative flex items-center justify-end"
        aria-label={`Navigate to ${section.label}`}>

          <span className="absolute right-8 px-2 py-1 rounded bg-surface-dark/80 text-white text-xs font-medium opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none whitespace-nowrap border border-white/10 backdrop-blur-sm">
            {section.label}
          </span>
          <div className="relative flex items-center justify-center w-4 h-4">
            {activeSection === section.id &&
          <motion.div
            layoutId="activeDot"
            className="absolute inset-0 rounded-full bg-primary-dark/30"
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }} />

          }
            <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === section.id ? `${dotColorMap[section.id] ?? 'bg-primary-dark'} scale-125` : 'bg-gray-500/50 hover:bg-gray-400'}`} />

          </div>
        </button>
      )}
    </div>);

}