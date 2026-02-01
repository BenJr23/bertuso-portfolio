'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const FlutterFlowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
  </svg>
);

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
            className="fixed inset-0 bg-black/65 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-surface-dark via-slate-800 to-surface-dark border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/25 to-purple-500/25 pointer-events-none" />
              <div className="flex items-center justify-between p-6 border-b border-white/10 relative z-10">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{project.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href={project.repoUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-300 p-2 rounded-md hover:bg-white/5" aria-label={project.id === 7 ? 'View preview' : 'Repository'}>
                    {project.id === 7 ? <FlutterFlowIcon /> : <Github size={18} />}
                  </a>
                  <button onClick={onClose} className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white">
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-y-auto max-h-[75vh] relative z-10">
                <div className="lg:col-span-2 flex flex-col gap-4">
                  {project.images && project.images.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      {project.images.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${project.title} ${i + 1}`}
                          className="w-full rounded-xl object-cover shadow-md"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="h-64 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-400">
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

                <div className="text-gray-300 lg:col-span-1">
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
