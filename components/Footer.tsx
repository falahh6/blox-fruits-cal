"use client"

import { motion } from "framer-motion"
import { Youtube, DiscIcon as Discord } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">BloxTrade</h3>
            <p className="text-gray-400">The ultimate Blox Fruits trading companion</p>
          </div>
          <nav className="flex space-x-4">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              Contact Us
            </motion.a>
          </nav>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <motion.a
            href="#"
            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Youtube size={24} />
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-200"
            whileHover={{ scale: 1.2, rotate: -5 }}
          >
            <Discord size={24} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

