"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export const Footer: React.FC = () => (
  <footer className="relative bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-blue-900/90 text-white pt-16 pb-10 px-8 text-sm overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-purple-700/10 to-blue-700/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-700/10 to-purple-700/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>

    {/* Top gradient border */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />

    <motion.div
      className="relative z-10 mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Branding */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
          COMSATS Conf&nbsp;2026
        </h3>
        <p className="text-white/80 text-base leading-relaxed">
          Innovating the future through cutting-edge research and global collaboration. Join us to shape tomorrow.
        </p>
        <div className="flex gap-5 pt-2">
          <motion.a
            href="#"
            aria-label="Facebook"
            className="text-white/70 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Facebook className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="#"
            aria-label="Twitter"
            className="text-white/70 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="#"
            aria-label="LinkedIn"
            className="text-white/70 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h4 className="text-xl font-semibold text-white">Quick Links</h4>
        <ul className="space-y-3 text-white/80">
          <motion.li whileHover={{ x: 5, color: "#67e8f9" }} transition={{ duration: 0.2 }}>
            <a href="#program" className="hover:text-cyan-400 transition-colors">
              Program
            </a>
          </motion.li>
          <motion.li whileHover={{ x: 5, color: "#67e8f9" }} transition={{ duration: 0.2 }}>
            <a href="#registration" className="hover:text-cyan-400 transition-colors">
              Registration
            </a>
          </motion.li>
          <motion.li whileHover={{ x: 5, color: "#67e8f9" }} transition={{ duration: 0.2 }}>
            <a href="#abstract-guidelines" className="hover:text-cyan-400 transition-colors">
              Guidelines
            </a>
          </motion.li>
          <motion.li whileHover={{ x: 5, color: "#67e8f9" }} transition={{ duration: 0.2 }}>
            <a href="#speakers" className="hover:text-cyan-400 transition-colors">
              Speakers
            </a>
          </motion.li>
          <motion.li whileHover={{ x: 5, color: "#67e8f9" }} transition={{ duration: 0.2 }}>
            <a href="#gallery" className="hover:text-cyan-400 transition-colors">
              Gallery
            </a>
          </motion.li>
          <motion.li whileHover={{ x: 5, color: "#67e8f9" }} transition={{ duration: 0.2 }}>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact Us
            </a>
          </motion.li>
        </ul>
      </motion.div>

      {/* Important Dates */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h4 className="text-xl font-semibold text-white">Important Dates</h4>
        <ul className="space-y-3 text-white/80">
          <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <span className="font-semibold text-cyan-300">Abstract Deadline:</span> 30 Nov 25
          </motion.li>
          <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <span className="font-semibold text-purple-300">Notification:</span> 15 Dec 25
          </motion.li>
          <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <span className="font-semibold text-pink-300">Early-bird:</span> 31 Dec 25
          </motion.li>
          <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <span className="font-semibold text-yellow-300">Conference:</span> 21-22 Feb 26
          </motion.li>
        </ul>
      </motion.div>

      {/* Contact & Newsletter */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
        <div className="space-y-3 text-white/80">
          <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-cyan-400" /> conf2026@cui.edu.pk
          </motion.p>
          <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-cyan-400" /> +92&nbsp;51&nbsp;1234567
          </motion.p>
          <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-cyan-400" /> Islamabad, Pakistan
          </motion.p>
        </div>

        <h4 className="text-xl font-semibold text-white pt-4">Stay Updated</h4>
        <p className="text-white/80 text-base">Join our mailing list for the latest news.</p>
        <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 rounded-l-md bg-white/15 px-4 py-3 text-sm placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
          />
          <motion.button
            type="submit"
            className="rounded-r-md bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-sm font-bold text-white shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe <Send className="h-4 w-4" />
          </motion.button>
        </form>
      </motion.div>
    </motion.div>

    <motion.div
      variants={itemVariants}
      className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-8 text-center text-white/60"
    >
      © {new Date().getFullYear()} COMSATS International Conference. All rights reserved.
    </motion.div>
  </footer>
)

export default Footer
