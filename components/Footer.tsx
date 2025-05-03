import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Jane Doe. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/janedoe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/janedoe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/janedoe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition duration-300"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

