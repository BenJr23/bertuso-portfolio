'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';
export function ContactSection() {
  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      id="contact"
      className="relative h-screen w-full flex flex-col items-center justify-center snap-start px-4">

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8
          }}
          viewport={{
            once: true
          }}>

          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Let's work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-purple-500">
              together.
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Currently available for freelance projects and open to full-time
            opportunities. Have an idea? Let's discuss it.
          </p>

          <motion.a
            href="mailto:hello@example.com"
            className="inline-block px-8 py-4 bg-primary-dark text-black font-bold text-lg rounded-full hover:bg-primary-light transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] mb-16"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}>

            Say Hello
          </motion.a>

          <div className="flex justify-center gap-8 mb-20">
            {[
              {
                icon: Github,
                href: '#'
              },
              {
                icon: Linkedin,
                href: '#'
              },
              {
                icon: Twitter,
                href: '#'
              },
              {
                icon: Mail,
                href: '#'
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * 0.1
                }}
                whileHover={{
                  y: -5
                }}>

                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="absolute bottom-8 left-0 right-0 py-8 text-center text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()} Alex River. All rights reserved.
        </p>
      </footer>

      <motion.button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        whileHover={{
          y: -5
        }}
        aria-label="Scroll to top">

        <ArrowUp size={20} />
      </motion.button>
    </section>
  );
}