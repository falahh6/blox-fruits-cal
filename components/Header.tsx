"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, User } from "lucide-react"

const Header = () => {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-3xl font-bold text-cyan-400"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            BloxTrade
          </motion.div>
          <nav className="hidden md:flex space-x-4">
            {["Home", "Games", "Giveaways", "Contact"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <motion.div className="relative" animate={searchFocused ? { scale: 1.05 } : { scale: 1 }}>
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 text-white rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </motion.div>
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full py-2 px-4 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={18} />
              <span>Login</span>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

