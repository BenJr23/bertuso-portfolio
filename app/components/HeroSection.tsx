import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center snap-start overflow-hidden">

      <div className="relative z-10 text-center px-4">
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
            duration: 0.8
          }}
          viewport={{
            once: true
          }}>

          <h2 className="text-primary-dark font-display font-medium tracking-widest text-lg md:text-xl mb-4 uppercase">
            Creative Developer
          </h2>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tight"
            initial={{
              y: 100
            }}
            whileInView={{
              y: 0
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2
            }}
            viewport={{
              once: true
            }}>

            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              RUBEN JR
            </span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-blue-500 ml-4">
              BERTUSO
            </span>
          </motion.h1>
        </div>

        <motion.p
          className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 0.8
          }}
          viewport={{
            once: true
          }}>

          Engineering robust systems and scalable server architecture.
          <br />
          Specialized in Laravel, .NET, Node.js, and cloud-native data solutions.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 2
        }}>

        <ChevronDown className="w-8 h-8 text-primary-dark/70" />
      </motion.div>
    </section>);

}