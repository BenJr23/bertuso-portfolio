import React, { Children, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Code, Globe, Coffee } from 'lucide-react';
import { SkillsModal } from './SkillsModal';

const softSkills = [
  'Problem Solver',
  'Communication Skills',
  'Team Player',
  'Fast Learner',
  'Adaptable',
  'Detail-Oriented',
  'Leadership',
  'Mentorship'
];

export function AboutSection() {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center snap-start py-20 px-4">

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Image/Visual */}
        <motion.div
          className="relative order-2 lg:order-1"
          initial={{
            opacity: 0,
            x: -50
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}>

          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border-2 border-primary-dark/30 rounded-2xl translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-surface-dark rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/20 to-purple-500/20 mix-blend-overlay" />
              {/* Profile image (from public/profile.jpg) */}
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600">
                <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating stats cards */}
            <motion.div
              className="absolute -right-8 top-10 bg-surface-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-dark/20 rounded-lg text-primary-dark">
                  <Code size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Experience</p>
                  <p className="text-lg font-bold text-white">4+ Years</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-8 bottom-10 bg-surface-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Projects</p>
                  <p className="text-lg font-bold text-white">50+ Done</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          className="order-1 lg:order-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-6">

            <span className="h-px w-12 bg-primary-dark" />
            <span className="text-primary-dark font-medium uppercase tracking-wider">
              About Me
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-3xl font-display font-bold text-white mb-8 leading-tight">

            Engineering the logic that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-purple-400">
              powers
            </span>{' '}
            exceptional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-blue-500">
              experiences
            </span>
            .
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg leading-relaxed mb-6">

            I'm a dedicated Back-end Developer with a focus on scalable 
            architecture. I build robust, secure, and efficient systems 
            using a diverse toolkit. My goal is to create server-side 
            solutions that not only handle data flawlessly but also 
            provide a seamless foundation for the user experience.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg leading-relaxed mb-8">

            When I'm not architecting databases or building APIs, you can 
            find me exploring new frameworks, optimizing deployment pipelines, 
            or diving into documentation with a good cup of coffee.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-8">
            <label className="text-sm text-gray-400 mb-3 block">Soft Skills</label>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {softSkills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex-shrink-0 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 whitespace-nowrap hover:bg-white/10 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <SkillsModal isOpen={isSkillsModalOpen} onClose={() => setIsSkillsModalOpen(false)} />
    </section>);

}