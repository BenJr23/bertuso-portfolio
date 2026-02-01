'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-surface-dark/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-surface-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex items-center justify-between">
                <h2 className="text-3xl font-display font-bold text-white">
                  Technical Arsenal
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {categories.map((category, idx) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-colors"
                    >
                      <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-3">
                        <span className="inline-block w-3 h-3 rounded-full bg-primary-dark/80" />
                        {category.title}
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, itemIdx) => (
                          <motion.span
                            key={item}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.05 + itemIdx * 0.02 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-white/6 to-white/3 border border-white/5 text-sm text-gray-200 hover:from-primary-dark/30 hover:to-blue-500/10 transition-colors"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${itemIdx % 2 === 0 ? 'bg-primary-dark' : 'bg-blue-500'}`} />
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
