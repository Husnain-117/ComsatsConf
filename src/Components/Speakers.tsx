"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import { ChevronLeft, ChevronRight, Award, Users, Mic, Quote } from "lucide-react"

// ---------------------------------------------------
// Types & Data
// ---------------------------------------------------

type Speaker = {
  name: string
  role: string
  affiliation: string
  image: string
  type: "Keynote" | "Invited"
  topic: string
  bio: string
}

const speakers: Speaker[] = [
  {
    name: "Dr. Amelia Rodriguez",
    role: "Professor of Computer Science",
    affiliation: "MIT",
    image: "/placeholder.svg?height=400&width=400&text=Dr.+Amelia+Rodriguez",
    type: "Keynote",
    topic: "AI for Social Good",
    bio: "Leading researcher in ethical AI and machine learning applications for social impact.",
  },
  {
    name: "James Patel",
    role: "Chief Technology Officer",
    affiliation: "TechNova Inc.",
    image: "/placeholder.svg?height=400&width=400&text=James+Patel",
    type: "Keynote",
    topic: "Scaling Sustainable Cloud Infrastructure",
    bio: "Pioneering sustainable cloud computing solutions and green technology initiatives.",
  },
  {
    name: "Prof. Elena Petrova",
    role: "Head of HCI Lab",
    affiliation: "University of Helsinki",
    image: "/placeholder.svg?height=400&width=400&text=Prof.+Elena+Petrova",
    type: "Invited",
    topic: "The Future of Human-Centered AI",
    bio: "Expert in human-computer interaction and user experience design for AI systems.",
  },
  {
    name: "Dr. Kai Nakamura",
    role: "Senior Research Scientist",
    affiliation: "QuantumLeap Labs",
    image: "/placeholder.svg?height=400&width=400&text=Dr.+Kai+Nakamura",
    type: "Invited",
    topic: "Quantum Computing Meets Machine Learning",
    bio: "Breakthrough researcher in quantum computing applications and quantum machine learning.",
  },
]

// ---------------------------------------------------
// Animation Variants
// ---------------------------------------------------

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
}

const iconFloat = {
  animate: {
    y: [-5, 5, -5],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
}

// ---------------------------------------------------
// Component
// ---------------------------------------------------

export const Speakers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === speakers.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? speakers.length - 1 : prevIndex - 1
      }
    })
  }

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const keynoteCount = speakers.filter((s) => s.type === "Keynote").length
  const invitedCount = speakers.filter((s) => s.type === "Invited").length

  return (
    <section className="relative min-h-screen py-20 px-8 overflow-hidden bg-gradient-to-br from-[#9d8fb8]/45 via-[#b8a9d9]/40 to-[#e0d4f7]/35 backdrop-blur-md">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-32 w-72 h-72 bg-gradient-to-r from-white/8 to-indigo-300/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-to-r from-purple-300/15 to-white/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div variants={item} className="space-y-8">
            {/* Header Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Mic className="w-6 h-6 text-cyan-300" />
              </motion.div>
              <span className="text-lg font-semibold">Invited Speakers</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              Meet Our{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_200%]">
                Visionary
              </span>{" "}
              Speakers
            </motion.h2>

            {/* Description */}
            <motion.p className="text-xl italic text-white/90 leading-relaxed drop-shadow-sm" variants={item}>
              Join us for inspiring talks from world-renowned experts who are shaping the future of technology,
              innovation, and digital transformation across industries.
            </motion.p>

            {/* Stats Cards */}
            <motion.div className="grid grid-cols-2 gap-4" variants={item}>
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-yellow-300" />
                  <span className="text-3xl font-bold text-white">{keynoteCount}</span>
                </div>
                <p className="text-white/70 font-medium">Keynote Speakers</p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-cyan-300" />
                  <span className="text-3xl font-bold text-white">{invitedCount}</span>
                </div>
                <p className="text-white/70 font-medium">Invited Speakers</p>
              </motion.div>
            </motion.div>

            {/* Quote Section */}
            <motion.div
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/20 shadow-xl hover:shadow-2xl"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={item}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
              <motion.div variants={iconFloat} animate="animate" className="mb-4">
                <Quote className="w-8 h-8 text-cyan-300" />
              </motion.div>
              <p className="text-white/90 italic text-lg leading-relaxed">
                “Innovation <span className="text-cyan-300 font-semibold">distinguishes between</span> a leader and a follower. Our speakers embody this spirit of innovation and will inspire you to push the boundaries of what's possible.”
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Speaker Slideshow */}
          <motion.div variants={item} className="relative mt-12 lg:mt-12">
            <div className="relative h-[600px] overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                  }}
                  className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center"
                >
                  {/* Speaker Image */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
                      <img
                        src={speakers[currentIndex].image || "/placeholder.svg"}
                        alt={speakers[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Type Badge */}
                    <div
                      className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                        speakers[currentIndex].type === "Keynote"
                          ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                          : "bg-gradient-to-r from-cyan-400 to-blue-500"
                      }`}
                    >
                      {speakers[currentIndex].type}
                    </div>
                  </motion.div>

                  {/* Speaker Info */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-white">{speakers[currentIndex].name}</h3>

                    <p className="text-white/80 font-medium">{speakers[currentIndex].role}</p>

                    <p className="text-cyan-300 font-semibold">{speakers[currentIndex].affiliation}</p>

                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <p className="text-yellow-300 font-semibold mb-2 italic">"{speakers[currentIndex].topic}"</p>
                      <p className="text-white/70 text-sm italic leading-relaxed">{speakers[currentIndex].bio}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {speakers.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                    }`}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Speakers
