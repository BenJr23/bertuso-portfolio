import React from 'react';
import { motion } from 'framer-motion';
interface Skill {
  name: string;
  level: number;
  category: string;
}
const skills: Skill[] = [
{
  name: 'React / Next.js',
  level: 95,
  category: 'Frontend'
},
{
  name: 'TypeScript',
  level: 90,
  category: 'Frontend'
},
{
  name: 'Tailwind CSS',
  level: 98,
  category: 'Frontend'
},
{
  name: 'Node.js',
  level: 85,
  category: 'Backend'
},
{
  name: 'Python',
  level: 80,
  category: 'Backend'
},
{
  name: 'UI/UX Design',
  level: 75,
  category: 'Design'
},
{
  name: 'Framer Motion',
  level: 88,
  category: 'Animation'
},
{
  name: 'PostgreSQL',
  level: 70,
  category: 'Database'
}];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex items-center justify-center snap-start py-20 px-4">

      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated list of technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) =>
          <div key={skill.name} className="relative">
              <div className="flex justify-between items-end mb-2">
                <span className="text-lg font-medium text-white">
                  {skill.name}
                </span>
                <span className="text-sm text-primary-dark font-mono">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="h-2 w-full bg-surface-dark rounded-full overflow-hidden border border-white/5">
                {/* Animated Progress Bar */}
                <motion.div
                className="h-full bg-gradient-to-r from-primary-dark to-blue-500 rounded-full relative"
                initial={{
                  width: 0
                }}
                whileInView={{
                  width: `${skill.level}%`
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: 'easeOut'
                }}
                viewport={{
                  once: true,
                  margin: '-50px'
                }}>

                  <div className="absolute right-0 top-0 bottom-0 w-px bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </motion.div>
              </div>
            </div>
          )}
        </div>

        {/* Additional decorative elements */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
          {
            label: 'Years Experience',
            value: '5+'
          },
          {
            label: 'Projects Completed',
            value: '50+'
          },
          {
            label: 'Happy Clients',
            value: '30+'
          },
          {
            label: 'Coffee Consumed',
            value: '∞'
          }].
          map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.5 + i * 0.1
            }}
            viewport={{
              once: true
            }}
            className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">

              <h3 className="text-3xl font-display font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}