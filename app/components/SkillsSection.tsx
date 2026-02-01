import React from 'react';
import { motion } from 'framer-motion';
interface SkillCategory {
  title: string;
  items: string[];
}

const categories: SkillCategory[] = [
  {
    title: 'PHP Stack',
    items: ['Laragon', 'Laravel', 'PHP', 'MySQL', 'JavaScript', 'Render']
  },
  {
    title: '.NET Stack',
    items: ['C#', 'ASP.NET', 'Microsoft SQL Server']
  },
  {
    title: 'Next.js Stack',
    items: ['Node.js', 'React', 'Prisma', 'Supabase', 'Clerk Auth', 'Vercel']
  },
  {
    title: 'Application Development',
    items: ['C# WinForms (OOP)', 'Python Tkinter', 'SQLite']
  },
  {
    title: 'Mobile Back-End',
    items: ['FlutterFlow', 'Firebase']
  }
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">

              <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-primary-dark/80" />
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, idx) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-3 px-3 py-1 rounded-lg bg-gradient-to-r from-white/6 to-white/3 border border-white/5 text-sm text-gray-200 hover:from-primary-dark/30 hover:to-blue-500/10 transition-colors"
                  >
                    <span className={`w-2 h-2 rounded-full ${idx % 2 === 0 ? 'bg-primary-dark' : 'bg-blue-500'}`} />
                    <span className="whitespace-nowrap">{item}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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