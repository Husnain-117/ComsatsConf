"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  Users,
  Building2,
  Handshake,
  Award,
  Globe,
  Crown,
  Shield,
  Zap,
  Heart,
  Target,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/Components/ui/button"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, duration: 0.8, ease: "easeOut" } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.97,
    filter: "blur(3px)",
    zIndex: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    zIndex: 1,
    transition: {
      x: { type: "spring", stiffness: 120, damping: 18 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.25 },
      filter: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
    scale: 0.97,
    filter: "blur(3px)",
    zIndex: 0,
    transition: {
      x: { type: "spring", stiffness: 120, damping: 18 },
      opacity: { duration: 0.32 },
      scale: { duration: 0.22 },
      filter: { duration: 0.22 },
    },
  }),
}

const committees = [
  {
    role: "Patron-in-Chief",
    names: ["Prof. Dr. Sajid Qamar"],
    icon: <Crown className="h-7 w-7 text-white" />,
    color: "from-purple-600 via-purple-700 to-indigo-800",
    accent: "from-purple-400 to-indigo-500",
    bio: "Visionary leader providing strategic direction and unwavering support for the conference's mission to advance scientific excellence.",
    achievements: ["20+ Years Leadership", "100+ Publications", "International Recognition"],
  },
  {
    role: "Patron",
    names: ["Prof. Dr. Najeeb-ur-Rehman"],
    icon: <Shield className="h-7 w-7 text-white" />,
    color: "from-blue-600 via-blue-700 to-cyan-800",
    accent: "from-blue-400 to-cyan-500",
    bio: "Distinguished academic leader fostering innovation and collaboration in the scientific community.",
    achievements: ["Research Excellence", "Academic Leadership", "Industry Partnerships"],
  },
  {
    role: "Conference Patron",
    names: ["Prof. Dr. M. Irshad"],
    icon: <Award className="h-7 w-7 text-white" />,
    color: "from-emerald-600 via-emerald-700 to-teal-800",
    accent: "from-emerald-400 to-teal-500",
    bio: "Dedicated patron ensuring the highest standards of academic excellence and professional development.",
    achievements: ["Conference Excellence", "Mentorship", "Global Network"],
  },
  {
    role: "Conference Chairperson",
    names: ["Prof. Dr. Mahmood A. Kayani"],
    icon: <Zap className="h-7 w-7 text-white" />,
    color: "from-orange-600 via-orange-700 to-red-800",
    accent: "from-orange-400 to-red-500",
    bio: "Dynamic chairperson orchestrating all conference activities with precision and innovation.",
    achievements: ["Event Management", "Strategic Planning", "Team Leadership"],
  },
  {
    role: "President PSFST",
    names: ["Prof. Dr. Muhammad Atif Randhawa"],
    icon: <Heart className="h-7 w-7 text-white" />,
    color: "from-pink-600 via-pink-700 to-rose-800",
    accent: "from-pink-400 to-rose-500",
    bio: "Esteemed president of Pakistan Society of Food Scientists and Technologists, driving industry advancement.",
    achievements: ["Society Leadership", "Industry Impact", "Professional Development"],
  },
]

const collaborators = [
  {
    name: "Higher Education Commission (HEC), Pakistan",
    logo: "/placeholder.svg?height=60&width=120&text=HEC",
    website: "https://www.hec.gov.pk/",
    description: "Leading higher education development in Pakistan",
  },
  {
    name: "Pakistan Society of Food Scientists and Technologists (PSFST)",
    logo: "/placeholder.svg?height=60&width=120&text=PSFST",
    website: "https://psfst.org/",
    description: "Advancing food science and technology research",
  },
]

const organizationStats = [
  { icon: <Users className="h-10 w-10" />, value: "15+", label: "Committee Members", color: "text-blue-600" },
  { icon: <Building2 className="h-10 w-10" />, value: "5+", label: "Partner Organizations", color: "text-emerald-600" },
  { icon: <Award className="h-10 w-10" />, value: "10+", label: "Years Experience", color: "text-purple-600" },
  { icon: <Target className="h-10 w-10" />, value: "500+", label: "Expected Participants", color: "text-orange-600" },
]

export const Organizers: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % committees.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + committees.length) % committees.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % committees.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="organizers"
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "rgb(153, 173, 193)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto space-y-20"
      >
        {/* Enhanced Heading */}
        <motion.div variants={item} className="text-center space-y-8">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-slate-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Organizers
            </span>
          </motion.h2>
          <motion.p variants={item} className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Our distinguished team of visionary leaders, esteemed academics, and industry experts collaborate to create
            an extraordinary conference experience that drives innovation and fosters meaningful connections.
          </motion.p>
        </motion.div>

        {/* Enhanced Organization Stats */}
        <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {organizationStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/50 cursor-pointer"
              whileHover={{ scale: 1.08, y: -8 }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                animate={hoveredStat === index ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-4xl font-black text-slate-800 mb-2"
                animate={hoveredStat === index ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-600 font-semibold text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Committee Slideshow */}
        <motion.div variants={item} className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-4xl font-bold text-slate-800">Distinguished Organizing Committee</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet the exceptional leaders who bring decades of experience and unwavering dedication to make this
              conference a resounding success.
            </p>
          </div>

          {/* Slideshow Container */}
          <div className="relative max-w-2xl mx-auto">
            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="h-6 w-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="h-6 w-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
            </motion.button>

            {/* Slide Container */}
            <div className="relative h-[600px] overflow-hidden rounded-3xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                  transition={{
                    x: { type: "spring", stiffness: 120, damping: 18 },
                    opacity: { duration: 0.35 },
                    scale: { duration: 0.25 },
                    filter: { duration: 0.25 },
                  }}
                >
                  <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden h-full">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${committees[currentSlide].color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Header Section */}
                    <div className={`relative bg-gradient-to-br ${committees[currentSlide].color} p-10 text-white`}>
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16" />

                      <div className="relative z-10 space-y-6">
                        <div className="flex items-center justify-between">
                          <motion.div
                            className="p-5 bg-white/20 rounded-3xl backdrop-blur-sm"
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {committees[currentSlide].icon}
                          </motion.div>
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <Sparkles className="h-8 w-8 text-white/60" />
                          </motion.div>
                        </div>

                        <div className="text-center">
                          <h4 className="text-3xl font-bold mb-3">{committees[currentSlide].role}</h4>
                          <p className="text-white/90 text-xl font-medium">{committees[currentSlide].names.join(", ")}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative p-10 space-y-8">
                      <p className="text-slate-700 leading-relaxed font-medium text-lg text-center">
                        {committees[currentSlide].bio}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-4">
                        <h5 className="font-bold text-slate-800 text-center uppercase tracking-wide">Key Achievements</h5>
                        <div className="flex flex-wrap justify-center gap-3">
                          {committees[currentSlide].achievements.map((achievement, idx) => (
                            <motion.span
                              key={idx}
                              className={`px-4 py-2 bg-gradient-to-r ${committees[currentSlide].accent} text-white text-sm font-semibold rounded-full shadow-lg`}
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                            >
                              {achievement}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {committees.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 scale-125 shadow-lg"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  whileHover={{ scale: index === currentSlide ? 1.25 : 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Revolutionary Host & Partners Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Host Institution */}
          <motion.div
            variants={cardVariants}
            className="group bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-10 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -translate-y-20 translate-x-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full translate-y-16 -translate-x-16" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-4 bg-blue-500/20 rounded-2xl backdrop-blur-sm"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Building2 className="h-8 w-8 text-blue-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">Host Institution</h3>
                    <p className="text-white/90 text-lg md:text-xl font-semibold drop-shadow-md">Leading Excellence in Education</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                  Department of Biosciences
                </h4>
                <div className="text-lg md:text-xl font-semibold text-blue-600">
                  COMSATS University Islamabad, Sahiwal Campus
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">
                  The Department of Biosciences at COMSATS University Islamabad, Sahiwal Campus, proudly hosts this prestigious conference, bringing together brilliant minds to foster groundbreaking research and meaningful collaborations in the field of biosciences.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Leading Research Excellence</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">International Collaboration</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Innovation Hub</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Academic Excellence</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg">
                  <Globe className="w-5 h-5 mr-2" />
                  Visit Website
                </Button>
                <Button variant="outline" className="bg-transparent border-slate-300 hover:border-blue-500 rounded-2xl px-8 py-3 text-base md:text-lg text-slate-800 font-semibold hover:text-blue-600 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Partners & Collaborators */}
          <motion.div
            variants={cardVariants}
            className="group bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 p-10 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/20 rounded-full -translate-y-20 translate-x-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/20 rounded-full translate-y-16 -translate-x-16" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-4 bg-emerald-400/20 rounded-2xl backdrop-blur-sm"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Handshake className="h-8 w-8 text-emerald-300" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">Strategic Partners</h3>
                    <p className="text-white/90 text-lg md:text-xl font-semibold drop-shadow-md">Collaborating for Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 space-y-8">
              <div className="grid gap-6">
                {collaborators.map((collaborator, idx) => (
                  <motion.div
                    key={collaborator.name}
                    className="group/partner bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.03, x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={collaborator.logo || "/placeholder.svg"}
                        alt={collaborator.name}
                        className="w-16 h-8 object-contain"
                      />
                      <div className="flex-1">
                        <h5 className="font-black text-black text-lg md:text-xl leading-tight mb-1">{collaborator.name}</h5>
                        <p className="text-black text-base md:text-lg font-bold">{collaborator.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700 text-base font-bold opacity-0 group-hover/partner:opacity-100 transition-opacity">
                      <Globe className="h-5 w-5" />
                      <span>Visit Website</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl py-4 shadow-lg hover:shadow-xl transition-all duration-300 text-lg md:text-xl">
                <Handshake className="w-5 h-5 mr-2" />
                Become a Partner
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div variants={item} className="text-center pt-16">
          <motion.div
            className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl p-16 text-white overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <Users className="h-16 w-16 text-blue-400 mx-auto mb-6" />
              </motion.div>

              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-black">Join Our Organizing Team</h3>
                <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                  Passionate about making a difference? We're always seeking dedicated volunteers and committee members
                  to help shape the future of our conferences.
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="
                    group relative overflow-hidden rounded-2xl
                    bg-gradient-to-r from-blue-600 to-indigo-600
                    px-4 py-3 sm:px-8 sm:py-5 md:px-10 md:py-6
                    text-base sm:text-xl md:text-2xl font-bold text-white
                    shadow-2xl transition-all duration-500 hover:shadow-blue-500/25 hover:scale-105 border-0
                    w-full sm:w-auto
                  "                >
                  <motion.div className="flex items-center gap-4">
                    <Users className="w-7 h-7" />
                    Get Involved Today
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <Sparkles className="w-7 h-7" />
                    </motion.div>
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Organizers
