'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star } from 'lucide-react';

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

interface SoftSkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SoftSkillsModal({ isOpen, onClose }: SoftSkillsModalProps) {
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
            <div className="bg-surface-dark/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-surface-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex items-center justify-between">
                <h2 className="text-3xl font-display font-bold text-white">
                  Soft Skills
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {softSkills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-white/8 to-white/3 border border-white/10 backdrop-blur-sm hover:from-white/12 hover:to-white/5 transition-all group cursor-default"
                    >
                      <div className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-primary-dark/70 group-hover:text-primary-dark transition-colors flex-shrink-0 mt-0.5" />
                        <span className="text-white font-medium">{skill}</span>
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
