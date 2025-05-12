"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <Image
              src="/avatar-3.jpg?height=400&width=400"
              alt="Jane Doe"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <p className="text-xl text-gray-300 mb-4">
            I'm a software engineer with a passion for building clean, efficient web applications. With years of hands-on experience, I enjoy solving complex problems and continuously exploring new technologies to improve my craft.
            </p>
            <p className="text-xl text-gray-300">
            When I'm not coding, I’m either solving logic puzzles like nonograms or at the gym staying active. I'm a strong believer in continuous learning and keeping up with the ever-evolving world of software development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

