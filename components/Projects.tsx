"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/janedoe/ecommerce-platform",
    demo: "https://ecommerce-platform-demo.com",
  },
  {
    title: "Task Management App",
    description: "A Trello-like task management application using React and Firebase.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/janedoe/task-management-app",
    demo: "https://task-management-app-demo.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data using a third-party API.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/janedoe/weather-dashboard",
    demo: "https://weather-dashboard-demo.com",
  },
  {
    title: "Social Media Analytics Tool",
    description: "A tool for analyzing social media engagement and growth using data visualization.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/janedoe/social-media-analytics",
    demo: "https://social-media-analytics-demo.com",
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile app for tracking workouts and nutrition, built with React Native.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/janedoe/fitness-tracker",
    demo: "https://fitness-tracker-demo.com",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-600 transition duration-300 flex items-center"
                    >
                      <Github className="mr-1" size={18} /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-600 transition duration-300 flex items-center"
                    >
                      <ExternalLink className="mr-1" size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Projects

