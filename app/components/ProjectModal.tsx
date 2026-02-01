'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  images?: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-3xl bg-surface-dark/95 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{project.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#" className="text-gray-300 p-2 rounded-md hover:bg-white/5" aria-label="External link">
                    <ExternalLink size={18} />
                  </a>
                  <a href="#" className="text-gray-300 p-2 rounded-md hover:bg-white/5" aria-label="Repository">
                    <Github size={18} />
                  </a>
                  <button onClick={onClose} className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white">
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto max-h-[70vh]">
                <div className="flex flex-col gap-4">
                  {project.images && project.images.length > 0 ? (
                    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                      {project.images.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${project.title} ${i + 1}`}
                          className="h-48 w-auto rounded-xl object-cover shadow-md"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="h-48 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-400">
                      No images available
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((t) => (
                      <span key={t} className="text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-gray-300">
                  <h4 className="text-lg font-medium text-white mb-3">Overview</h4>
                  <p className="leading-relaxed text-gray-300 mb-6">{project.description}</p>

                  <h4 className="text-lg font-medium text-white mb-3">Details</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Backend: {project.tags.join(', ')}</li>
                    <li>Category: {project.category}</li>
                    <li>Project ID: {project.id}</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
