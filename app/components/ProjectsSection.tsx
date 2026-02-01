import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
}
const projects: Project[] = [
{
  id: 1,
  title: 'Nebula Dashboard',
  category: 'SaaS Platform',
  description:
  'A comprehensive analytics dashboard for space exploration data, featuring real-time visualization and predictive modeling.',
  tags: ['React', 'D3.js', 'Node.js'],
  color: 'from-blue-600 to-cyan-500'
},
{
  id: 2,
  title: 'Echo Commerce',
  category: 'E-Commerce',
  description:
  'Headless e-commerce solution built for speed and scalability, with advanced filtering and seamless checkout experience.',
  tags: ['Next.js', 'Shopify API', 'Tailwind'],
  color: 'from-purple-600 to-pink-500'
},
{
  id: 3,
  title: 'Zenith AI',
  category: 'AI Interface',
  description:
  'Conversational AI interface with voice recognition and natural language processing capabilities.',
  tags: ['Python', 'OpenAI', 'React'],
  color: 'from-emerald-600 to-teal-500'
},
{
  id: 4,
  title: 'Flux Social',
  category: 'Social Network',
  description:
  'Decentralized social networking protocol focusing on privacy and user data ownership.',
  tags: ['Web3', 'Solidity', 'React'],
  color: 'from-orange-600 to-red-500'
}];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
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
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-12 pb-12 no-scrollbar items-center h-[60vh]">

        {projects.map((project, index) =>
        <motion.div
          key={project.id}
          className="relative flex-none w-[85vw] md:w-[600px] h-full snap-center rounded-3xl overflow-hidden bg-surface-dark border border-white/10 group"
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


            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10">
              <div className="mb-auto">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white mb-4 border border-white/10">
                  {project.category}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 text-lg mb-8 max-w-md group-hover:text-white transition-colors duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag) =>
              <span key={tag} className="text-sm text-gray-400 font-mono">
                    #{tag}
                  </span>
              )}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                  View Project <ExternalLink size={16} />
                </button>
                <button className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                  <Github size={20} />
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
    </section>);

}