"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { LuGithub } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const projects = [
  {
    title: "Admin Dashboard",
    description: "Full-stack platform built with Next.js, ShadCN UI, Server Actions, and Prisma. Features user and admin tools for managing registrations, equipment, and orders.",
    image: "/images/project-8.gif?height=200&width=300",
    github: "#",
    demo: "https://www.ipro-permits.com/",
    private: true,
    demoDisabled: false
  },
  {
    title: "Spring Social Media Blog API",
    description: "API-only social media backend built with Java, Spring Boot, Spring Data, and the Spring Framework. Handles user accounts and message management.",
    image: "/images/placeholder.svg?height=200&width=300",
    github: "https://github.com/Azamat-Shogen/Azamat-Shogen-pep-spring-project",
    demo: "#",
    private: false,
    demoDisabled: true
  },
  {
    title: "E-commerce Test Automation Framework",
    description: "Automated testing framework for a WooCommerce site using Python, Pytest, and Selenium. Features CI/CD with GitLab, real-time result tracking via a Flask API and Next.js frontend, and Dockerized deployment. Tech: Python, Selenium, Pytest, Flask, Next.js, MySQL, Docker, GitLab CI/CD.",
    image: "/images/project-9.gif?height=200&width=300",
    github: "https://gitlab.com/python-testing5061140/ecom-store-automation",
    demo: "https://store-tests-reports.netlify.app/",
    private: false,
    demoDisabled: false
  },
  {
    title: "Javalin Social Media Blog API",
    description: "API-only social media backend built with Java, Javalin, and JDBC. Supports user management, authentication, and full CRUD operations for messages.",
    image: "/images/placeholder.svg?height=200&width=300",
    github: "https://github.com/Azamat-Shogen/Azamat-Shogen-pep-project",
    demo: "#",
    private: false,
    demoDisabled: true
  },
  {
    title: "React Card Game",
    description: "Card game originally built in Python, rebuilt with React, JavaScript, and Redux for improved interactivity and state management.",
    image: "/images/project-3.gif?height=200&width=300",
    github: "https://github.com/Azamat-Shogen/c_game",
    demo: "https://c-game-az.netlify.app/",
    private: false,
    demoDisabled: false
  },
  {
    title: "UFC Rankins Clone",
    description: "UFC rankings app with React and React-Bootstrap frontend, backed by a Python Django API using PostgreSQL. Deployed with Docker on AWS.",
    image: "/images/project-2.gif?height=200&width=300",
    github: "https://github.com/Azamat-Shogen/ufc_rankings_client",
    demo: "https://ufc-rankings.netlify.app/rankings",
    private: false,
    demoDisabled: false
  },
    {
    title: "Bean Machine Game",
    description: "Bean Machine game built with React, JavaScript, and Canvas for dynamic graphics and gameplay.",
    image: "/images/project-6.gif?height=200&width=300",
    github: "https://github.com/Azamat-Shogen/bean-machine",
    demo: "https://bean-machine.netlify.app/",
    private: false,
    demoDisabled: false
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
                     {/* GitHub Link */}
                      {project.private ? (
                        <span
                          className="text-gray-600 cursor-not-allowed flex items-center"
                          title="Private repository"
                        >
                           
                           <LuGithub className="mr-1" size={18} />
                            GitHub
                        </span>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-500 hover:text-purple-600 transition duration-300 flex items-center"
                        >
                           {/* <LuGithub className="mr-1 w-5 h-5" /> */}
                           <LuGithub className="mr-1" size={18} />
                            GitHub
                        </a>
                      )}

                      {/* Demo Link */}
                      {project.demoDisabled ? (
                        <span
                          className="text-gray-600 cursor-not-allowed flex items-center"
                          title="Not available"
                        >
                          <ExternalLink className="mr-1" size={18} /> Live Demo
                        </span>
                      ) : (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-500 hover:text-purple-600 transition duration-300 flex items-center"
                        >
                          <ExternalLink className="mr-1" size={18} /> Live Demo
                        </a>
                      )}
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

