import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Azamat Shogen. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Azamat-Shogen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition duration-300"
            >
              <LuGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/azamat101/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition duration-300"
            >
              <LuLinkedin size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition duration-300"
            >
              <LuTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

