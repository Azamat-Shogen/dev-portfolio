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
              src="/placeholder.svg?height=400&width=400"
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
              I'm a passionate full stack developer with 5 years of experience in building web applications. I love
              creating elegant solutions to complex problems and am always eager to learn new technologies.
            </p>
            <p className="text-xl text-gray-300">
              When I'm not coding, you can find me hiking in the mountains or experimenting with new recipes in the
              kitchen. I believe in continuous learning and staying up-to-date with the latest trends in web
              development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

