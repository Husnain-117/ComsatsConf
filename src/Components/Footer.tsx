"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Calendar,
  Users,
  Award,
  ArrowUp,
  Globe,
  Building,
  Clock,
  CheckCircle,
  Star,
  Zap,
  Heart,
  Instagram,
  Youtube,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
}

const socialLinks = [
  { icon: <Facebook className="h-6 w-6" />, href: "#", label: "Facebook", color: "hover:text-blue-400" },
  { icon: <Twitter className="h-6 w-6" />, href: "#", label: "Twitter", color: "hover:text-sky-400" },
  { icon: <Linkedin className="h-6 w-6" />, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: <Instagram className="h-6 w-6" />, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  { icon: <Youtube className="h-6 w-6" />, href: "#", label: "YouTube", color: "hover:text-red-400" },
]

const quickLinks = [
  { name: "Conference Program", href: "#program", icon: <Calendar className="h-4 w-4" /> },
  { name: "Registration", href: "#registration", icon: <Users className="h-4 w-4" /> },
  { name: "Keynote Speakers", href: "#speakers", icon: <Award className="h-4 w-4" /> },
  { name: "Venue & Travel", href: "#venue", icon: <MapPin className="h-4 w-4" /> },
  { name: "Abstract Guidelines", href: "#abstract-guidelines", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Photo Gallery", href: "#gallery", icon: <Star className="h-4 w-4" /> },
]

const importantDates = [
  {
    event: "Abstract Submission Deadline",
    date: "30 Nov 2025",
    color: "text-blue-300",
    bgColor: "bg-blue-500/20",
    icon: <Send className="h-4 w-4" />,
  },
  {
    event: "Acceptance Notification",
    date: "15 Dec 2025",
    color: "text-green-300",
    bgColor: "bg-green-500/20",
    icon: <CheckCircle className="h-4 w-4" />,
  },
  {
    event: "Early Bird Registration",
    date: "31 Dec 2025",
    color: "text-yellow-300",
    bgColor: "bg-yellow-500/20",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    event: "Conference Dates",
    date: "21-22 Feb 2026",
    color: "text-purple-300",
    bgColor: "bg-purple-500/20",
    icon: <Calendar className="h-4 w-4" />,
  },
]

const footerStats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "500+",
    label: "Expected Attendees",
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "20+",
    label: "Expert Speakers",
    color: "text-emerald-400",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    value: "2",
    label: "Days of Innovation",
    color: "text-purple-400",
    bgGradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    value: "15+",
    label: "Countries",
    color: "text-orange-400",
    bgGradient: "from-orange-500/20 to-red-500/20",
  },
]

const contactPersons = [
  {
    title: "Conference Focal Person",
    name: "Dr. Muhammad Nadeem",
    position: "Associate Professor, Dept. of Biosciences",
    email: "nadeem@cuisahiwal.edu.pk",
    phone: "+92-300-9200474",
    color: "from-blue-600 to-indigo-700",
    icon: <Building className="h-5 w-5" />,
  },
  {
    title: "Conference Secretary",
    name: "Dr. Muhammad Wasim Sajid",
    position: "Associate Professor, Dept. of Biosciences",
    email: "muhammad.wasim@cuisahiwal.edu.pk",
    phone: "+92-333-6967095",
    color: "from-emerald-600 to-teal-700",
    icon: <Users className="h-5 w-5" />,
  },
]

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubscribing(false)
    setEmail("")
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" />

      <div className="relative z-10 pt-20 pb-10 px-6">
        <motion.div
          className="mx-auto max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Enhanced Footer Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {footerStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`group relative bg-gradient-to-br ${stat.bgGradient} backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 shadow-2xl cursor-pointer overflow-hidden`}
                whileHover={{ scale: 1.05, y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-4xl font-black text-white mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/70 font-semibold text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid gap-12 lg:grid-cols-4 mb-16">
            {/* Enhanced Branding Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              <div className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <h3 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    FSNC 2025
                  </h3>
                  <p className="text-lg font-semibold text-white/90 mb-2">Food Science & Nutrition Conference</p>
                  <p className="text-white/70 leading-relaxed">
                    Innovating the future through cutting-edge research and global collaboration. Join us to shape
                    tomorrow's food science landscape.
                  </p>
                </motion.div>

                <div className="flex items-center gap-3 text-white/60">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">February 21-22, 2026</span>
                </div>

                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm">COMSATS University Sahiwal</span>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">Connect With Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`group p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white/70 ${social.color} transition-all duration-300 hover:bg-white/20 hover:border-white/30`}
                      whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                <Zap className="h-6 w-6 text-blue-400" />
                Quick Navigation
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="group flex items-center gap-4 p-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                      whileHover={{ x: 8, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="text-blue-400 group-hover:text-white transition-colors duration-300">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.name}</span>
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowUp className="h-4 w-4 rotate-45" />
                      </motion.div>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Enhanced Important Dates */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                <Calendar className="h-6 w-6 text-emerald-400" />
                Important Dates
              </h4>
              <ul className="space-y-4">
                {importantDates.map((date, index) => (
                  <motion.li
                    key={date.event}
                    className={`group p-4 rounded-2xl ${date.bgColor} border border-white/10 hover:border-white/20 transition-all duration-300`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`${date.color} mt-1`}>{date.icon}</div>
                      <div className="flex-1">
                        <span className={`font-bold ${date.color} block mb-1`}>{date.event}</span>
                        <span className="text-white/70 text-sm font-medium">{date.date}</span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Enhanced Contact & Newsletter */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                <Mail className="h-6 w-6 text-purple-400" />
                Get In Touch
              </h4>

              {/* Contact Persons - Fixed Layout */}
              <div className="space-y-4">
                {contactPersons.map((person, index) => (
                  <motion.div
                    key={person.name}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${person.color} rounded-lg`}>
                          {person.icon}
                        </div>
                        <div>
                          <h5 className="text-white font-bold text-sm">{person.title}</h5>
                          <p className="text-white/90 font-semibold text-sm">{person.name}</p>
                        </div>
                      </div>
                      <p className="text-white/60 text-xs">{person.position}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white/70">
                          <Mail className="h-3 w-3 text-blue-400 flex-shrink-0" />
                          <span className="text-xs">{person.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <Phone className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                          <span className="text-xs">{person.phone}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* General Contact - Simplified */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <h5 className="text-white font-bold mb-3 flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-purple-400" />
                  General Information
                </h5>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/70">
                    <Mail className="h-3 w-3 text-purple-400 flex-shrink-0" />
                    <span className="text-xs">fsnconference@cuisahiwal.edu.pk</span>
                  </div>
                  <div className="flex items-start gap-2 text-white/70">
                    <MapPin className="h-3 w-3 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs">
                      COMSATS University Sahiwal
                      <br />
                      Sahiwal, Pakistan
                    </span>
                  </div>
                </div>
              </div>

              {/* Newsletter - Compact */}
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-md rounded-xl p-4 border border-blue-500/20">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-pink-400" />
                    <h5 className="font-bold text-white text-sm">Stay Updated</h5>
                  </div>
                  <p className="text-white/70 text-xs">
                    Subscribe for conference updates and announcements.
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder-white/50 focus:border-blue-400 rounded-lg h-10 text-sm"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isSubscribing}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm"
                    >
                      <motion.div className="flex items-center justify-center gap-2">
                        {isSubscribing ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                              <Zap className="h-3 w-3" />
                            </motion.div>
                            Subscribing...
                          </>
                        ) : (
                          <>
                            <Send className="h-3 w-3" />
                            Subscribe
                          </>
                        )}
                      </motion.div>
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/20 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6"
          >
            <div className="text-center lg:text-left space-y-2">
              <p className="text-white/60 text-sm font-medium">
                &copy; {new Date().getFullYear()} Food Science & Nutrition Conference (FSNC). All rights reserved.
              </p>
              <p className="text-white/40 text-xs flex items-center justify-center lg:justify-start gap-2">
                Designed with <Heart className="h-3 w-3 text-pink-400" /> for the future of food science
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Secure & Trusted</span>
              </div>
              <motion.button
                onClick={scrollToTop}
                className="group p-4 bg-gradient-to-r from-blue-600 to-indigo-600 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
