import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  images?: string[];
  repoUrl?: string;
}
const projects: Project[] = [
  {
    id: 1,
    title: 'Presenza',
    category: 'Attendance Management System',
    description:
      'A Integrated Attendance Management System specialized backend module integrated within a library ecosystem. Manages time-in/time-out records for visitors and employees, and automates LMS account activation/deactivation on check-in/check-out.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    color: 'from-blue-600 to-cyan-500',
    images: ['/projpics/AttendanceManagementSystem.png'],
    repoUrl: 'https://github.com/BenJr23/AMS-SIA.git'
  },
  {
    id: 2,
    title: 'Novella',
    category: 'Library Management System',
    description:
      'Full-featured library management platform built with Laravel. Handles book reservations, user accounts, shelf inventory, and administrative workflows with a modern UI.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    color: 'from-purple-600 to-pink-500',
    images: ['/projpics/Novela.png'],
    repoUrl: 'https://github.com/AltheaEHEM1/LMS-ADMIN.git'
  },
  {
    id: 3,
    title: 'ParKing',
    category: 'Parking Management',
    description:
      'Robust full-stack platform for parking facility operations: vehicle entry logging, parking activity tracking, and fine administration to optimize utilization and admin workflows.',
    tags: ['C#', 'ASP.NET', 'SQL Server'],
    color: 'from-emerald-600 to-teal-500',
    images: ['/projpics/ParKing.png'],
    repoUrl: 'https://github.com/Ranyeelll/ParKing.git'
  },
  {
    id: 4,
    title: 'Saint Joseph LMS',
    category: 'Learning Management System',
    description:
      'A tailored full-stack LMS for Saint Joseph School of Fairview. Provides course/module management, content distribution, assignments, forums, and recitation features.',
    tags: ['Next.js', 'Node.js', 'Prisma', 'Supabase'],
    color: 'from-indigo-600 to-violet-500',
    images: ['/projpics/LearningManagementSystem.png'],
    repoUrl: 'https://github.com/BenJr23/LMS-V0.0.6.1.git'
  },
  {
    id: 5,
    title: 'Tara Biyahe',
    category: 'Desktop App',
    description:
      'A Vehicle Rental System transaction-focused desktop application built with Python Tkinter and SQLite. The system allows administrators to maintain a centralized vehicle inventory and manage the complete rental lifecycle, while providing customers with an intuitive desktop interface to browse availability and book rentals.',
    tags: ['Python', 'Tkinter', 'SQLite'],
    color: 'from-amber-600 to-rose-500',
    images: ['/projpics/VehicleRentalSystem.png'],
    repoUrl: 'https://github.com/dnsxmrs/VRMS.git'
  },
  {
    id: 6,
    title: 'Reserve Ease (Desktop)',
    category: 'Parking Management',
    description:
      'A comprehensive hotel operations platform built with C# WinForms and SQLite. This desktop application is designed to efficiently manage core hospitality workflows, including room inventory, guest record administration, and the complete reservation and booking lifecycle.',
    tags: ['C#', 'WinForms', 'SQL Server'],
    color: 'from-yellow-600 to-orange-500',
    images: ['/projpics/ReserveEase.png'],
    repoUrl: 'https://github.com/Ranyeelll/ReserveEasev2.git'
  },
  {
    id: 7,
    title: 'NoTo (Student Companion)',
    category: 'Mobile Development',
    description:
      'Fully functioning mobile app for student productivity: scheduling, note-taking, Pomodoro timer with audio, and a personal finance tracker for allowances and expenses.',
    tags: ['FlutterFlow', 'Firebase'],
    color: 'from-pink-600 to-fuchsia-500',
    images: ['/projpics/NoTo.png'],
    repoUrl: 'https://app.flutterflow.io/preview/no-to-student-companion-oyd59a?page=LogInPage'
  }
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const getCards = () =>
      Array.from(el.querySelectorAll<HTMLElement>('[data-project-card="true"]'));

    const getClosestCardIndex = () => {
      const cards = getCards();
      if (cards.length === 0) return 0;

      const containerRect = el.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;

      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const dist = Math.abs(center - containerCenterX);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      }
      return bestIdx;
    };

    // Track the intended card index so repeated wheel ticks always advance,
    // even if smooth scrolling hasn't finished yet.
    let targetIndex = getClosestCardIndex();

    let scrollRaf: number | null = null;
    const onScroll = () => {
      if (scrollRaf !== null) return;
      scrollRaf = window.requestAnimationFrame(() => {
        scrollRaf = null;
        targetIndex = getClosestCardIndex();
      });
    };

    const onWheel = (e: WheelEvent) => {
      // Let the browser handle pinch-to-zoom gestures.
      if (e.ctrlKey) return;

      const rawDelta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (rawDelta === 0) return;

      const direction = rawDelta > 0 ? 1 : -1;

      const cards = getCards();
      if (cards.length === 0) return;

      // Ensure we're in sync if the user dragged the scrollbar.
      targetIndex = getClosestCardIndex();

      const nextIndex = Math.max(0, Math.min(targetIndex + direction, cards.length - 1));

      // If we can't move in that direction, let vertical scrolling happen.
      if (nextIndex === targetIndex) return;
      targetIndex = nextIndex;

      // Keep the page/section fixed while scrolling the horizontal list.
      e.preventDefault();
      e.stopPropagation();
      cards[targetIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    };

    el.addEventListener('wheel', onWheel, { passive: false, capture: true });
    el.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (scrollRaf !== null) window.cancelAnimationFrame(scrollRaf);
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('wheel', onWheel, { capture: true } as AddEventListenerOptions);
    };
  }, []);
  return (
    <section
      id="projects"
      className="relative h-screen w-full flex flex-col justify-center snap-start py-10 overflow-hidden">

      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="flex justify-between items-end">

          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              Featured Work
            </h2>
            <p className="text-gray-400">Swipe to explore recent projects</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-primary-dark">
            <span className="text-sm font-medium">Scroll</span>
            <ArrowRight size={16} />
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-proximity gap-6 px-4 md:px-12 pb-12 no-scrollbar items-center h-[72vh] overscroll-contain touch-pan-x">

        {projects.map((project, index) =>
        <motion.div
          key={project.id}
          data-project-card="true"
          className="relative flex-none w-[90vw] md:w-[720px] lg:w-[880px] h-full snap-center rounded-3xl overflow-hidden bg-surface-dark border border-white/10 group"
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1
          }}
          viewport={{
            margin: '-100px'
          }}>

            {/* Background Gradient */}
            <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />


            <div className="absolute inset-0 p-6 sm:p-8 md:p-16 flex flex-col justify-end z-10">
              <div className="mb-auto">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white mb-4 border border-white/10">
                  {project.category}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 text-base md:text-lg mb-5 md:mb-8 max-w-xl md:max-w-lg group-hover:text-white transition-colors duration-300 line-clamp-3 md:line-clamp-none">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
                {project.tags.map((tag) =>
              <span key={tag} className="text-sm text-gray-400 font-mono">
                    #{tag}
                  </span>
              )}
              </div>

              <div className="flex gap-4">
                <button onClick={() => setSelectedProject(project)} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                  View Project <ExternalLink size={16} />
                </button>
                <button className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors" onClick={() => project.repoUrl && window.open(project.repoUrl, '_blank')}>
                  {project.id === 7 ? <ExternalLink size={20} /> : <Github size={20} />}
                </button>
              </div>
            </div>

            {/* Decorative Number */}
            <div className="absolute top-4 right-8 text-9xl font-display font-bold text-white/5 pointer-events-none">
              0{project.id}
            </div>
          </motion.div>
        )}

        {/* End spacer */}
        <div className="w-4 flex-none" />
      </div>
      <ProjectModal isOpen={selectedProject !== null} project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>);

}