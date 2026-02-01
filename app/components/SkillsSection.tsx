import React from 'react';
import { motion } from 'framer-motion';
interface SkillCategory {
  title: string;
  items: string[];
}

const accentMap = [
  {
    cardBg: 'bg-gradient-to-br from-sky-900/5 to-sky-700/5',
    border: 'border-sky-400/10',
    dot: 'bg-sky-400',
    chipHoverFrom: 'hover:from-sky-400/30',
    chipHoverTo: 'hover:to-sky-300/10'
  },
  {
    cardBg: 'bg-gradient-to-br from-emerald-900/5 to-emerald-700/5',
    border: 'border-emerald-400/10',
    dot: 'bg-emerald-400',
    chipHoverFrom: 'hover:from-emerald-400/30',
    chipHoverTo: 'hover:to-emerald-300/10'
  },
  {
    cardBg: 'bg-gradient-to-br from-purple-900/5 to-purple-700/5',
    border: 'border-purple-400/10',
    dot: 'bg-purple-400',
    chipHoverFrom: 'hover:from-purple-400/30',
    chipHoverTo: 'hover:to-purple-300/10'
  },
  {
    cardBg: 'bg-gradient-to-br from-amber-900/5 to-amber-700/5',
    border: 'border-amber-400/10',
    dot: 'bg-amber-400',
    chipHoverFrom: 'hover:from-amber-400/30',
    chipHoverTo: 'hover:to-amber-300/10'
  },
  {
    cardBg: 'bg-gradient-to-br from-pink-900/5 to-pink-700/5',
    border: 'border-pink-400/10',
    dot: 'bg-pink-400',
    chipHoverFrom: 'hover:from-pink-400/30',
    chipHoverTo: 'hover:to-pink-300/10'
  }
];

const categories: SkillCategory[] = [
  {
    title: 'PHP Stack',
    items: ['Laragon', 'Laravel', 'PHP', 'MySQL', 'JavaScript', 'Railway']
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
    title: 'Mobile Development',
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
              className={`p-6 rounded-2xl bg-white/5 ${accentMap[i % accentMap.length].cardBg} border ${accentMap[i % accentMap.length].border} backdrop-blur-sm`}>

              <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                <span className={`inline-block w-3 h-3 rounded-full ${accentMap[i % accentMap.length].dot}`} />
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, idx) => (
                  <span
                    key={item}
                    className={`inline-flex items-center gap-3 px-3 py-1 rounded-lg bg-gradient-to-r from-white/6 to-white/3 border border-white/5 text-sm text-gray-200 min-w-0 transition-colors ${accentMap[i % accentMap.length].chipHoverFrom} ${accentMap[i % accentMap.length].chipHoverTo}` }
                  >
                    <span className={`w-2 h-2 rounded-full ${accentMap[i % accentMap.length].dot}`} />
                    <span className="whitespace-normal break-words">{item}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>);

}