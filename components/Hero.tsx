"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Azamat Shgoen
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-400 mb-8"
        >
          Software Developer
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="bg-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-purple-700 transition duration-300"
          >
            Get in touch <ArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

