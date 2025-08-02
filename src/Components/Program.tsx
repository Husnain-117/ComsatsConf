"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import { CalendarDays, Clock, Users, Coffee, PanelLeftOpen, ImageIcon, Download, ArrowRight, Lightbulb } from "lucide-react"
import { Button } from "@/Components/ui/button"
const MotionButton = motion(Button)

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const imageGalleryVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
}

interface Session {
  time: string
  title: string
  speaker?: string
  icon?: React.ReactNode
}

interface DayAgenda {
  id: string
  date: string
  sessions: Session[]
}

const program: DayAgenda[] = [
  {
    id: "day1",
    date: "Day 1 · 21 Feb 2026",
    sessions: [
      { time: "09:00", title: "Registration & Welcome Coffee", icon: <Coffee className="h-4 w-4 text-purple-400" /> },
      {
        time: "10:00",
        title: "Opening Keynote: Crafting the Digital Future",
        speaker: "Prof. Jane Doe",
        icon: <PanelLeftOpen className="h-4 w-4 text-cyan-400" />,
      },
      { time: "11:00", title: "Session 1 – AI & ML Breakthroughs", icon: <Users className="h-4 w-4 text-pink-400" /> },
      { time: "13:00", title: "Networking Lunch Break" },
      {
        time: "14:00",
        title: "Workshop – Explainable AI in Practice",
        speaker: "Dr. John Smith",
        icon: <ImageIcon className="h-4 w-4 text-green-400" />,
      },
      { time: "16:00", title: "Interactive Poster Session" },
      { time: "18:00", title: "Evening Networking Reception" },
    ],
  },
  {
    id: "day2",
    date: "Day 2 · 22 Feb 2026",
    sessions: [
      { time: "09:30", title: "Breakfast & Morning Coffee", icon: <Coffee className="h-4 w-4 text-purple-400" /> },
      {
        time: "10:00",
        title: "Panel Discussion – Ethics in Computing",
        icon: <Users className="h-4 w-4 text-pink-400" />,
      },
      { time: "12:00", title: "Session 2 – HCI & UX Innovations" },
      { time: "13:30", title: "Lunch Break" },
      {
        time: "14:30",
        title: "Lightning Talks: Future Tech",
        icon: <Clock className="h-4 w-4 text-yellow-400" />,
      },
      { time: "16:00", title: "Closing Ceremony & Awards" },
    ],
  },
]

const galleryImages = [
  "/placeholder.svg?height=150&width=200&text=Conference+Hall",
  "/placeholder.svg?height=150&width=200&text=Networking",
  "/placeholder.svg?height=150&width=200&text=Workshop",
  "/placeholder.svg?height=150&width=200&text=Keynote",
]

export const Program: React.FC = () => {
  const [activeDay, setActiveDay] = useState(program[0].id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-advance image gallery
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 3000) // Change image every 3 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="program"
      className="relative min-h-screen py-16 px-8 overflow-hidden bg-gradient-to-br from-purple-50/80 via-indigo-100/70 to-blue-50/80 text-gray-800"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto space-y-12"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-center text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Conference{" "}
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Program
          </span>
        </motion.h2>

        <motion.p
          variants={item}
          className="text-xl italic text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Explore our meticulously curated agenda, designed to inspire and connect. Each session offers unique insights
          and opportunities for growth.
        </motion.p>

        {/* Image Gallery */}
        <motion.div
          variants={imageGalleryVariants}
          className="relative w-full max-w-2xl mx-auto h-40 rounded-xl overflow-hidden shadow-xl border border-gray-200"
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={galleryImages[currentImageIndex]}
              alt="Conference highlight"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center p-4">
            <div className="flex gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Day Tabs (Horizontal Progress Bar) */}
        <motion.div variants={item} className="flex justify-center gap-4 mb-8">
          {program.map((day) => (
            <MotionButton
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`relative group px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeDay === day.id
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                  : "bg-white/30 text-gray-700 hover:bg-white/50 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {day.date.split("·")[0].trim()}
              {activeDay === day.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full"
                />
              )}
            </MotionButton>
          ))}
        </motion.div>

        {/* Agenda Content */}
        <AnimatePresence mode="wait">
          {program.map(
            (day) =>
              activeDay === day.id && (
                <motion.div
                  key={day.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/70 relative"
                >
                  <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-800">
                    <CalendarDays className="h-6 w-6 text-purple-600" /> {day.date}
                  </h3>
                  <ul className="relative border-l-2 border-purple-300 pl-6 sm:pl-8 space-y-6">
                    {day.sessions.map((s, index) => (
                      <motion.li
                        key={`${day.date}-${s.time}-${index}`}
                        className="ml-2 relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="absolute -left-8 top-1.5 h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md" />
                        <p className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                          <Clock className="h-4 w-4 text-gray-500" /> {s.time}
                        </p>
                        <p className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          {s.icon && (
                            <motion.span
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {s.icon}
                            </motion.span>
                          )}
                          {s.title}
                        </p>
                        {s.speaker && <p className="text-sm text-gray-700 italic">{s.speaker}</p>}
                      </motion.li>
                    ))}
                  </ul>
                  {/* Fun Fact Card for Day 1 - now inside the agenda card */}
                  {day.id === "day1" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.2 }}
                      className="mt-8 flex flex-col items-start w-full bg-gradient-to-br from-purple-100 via-indigo-100 to-white/80 rounded-xl shadow-lg p-5 border border-purple-200/50 backdrop-blur-md"
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(80, 0, 255, 0.18)" }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Lightbulb className="h-6 w-6 text-yellow-400 animate-pulse" />
                        <span className="text-base font-bold text-purple-700">Fun Fact</span>
                      </div>
                      <p className="text-gray-800 text-base font-medium leading-snug">
                        The very first AI conference was held in 1956 at Dartmouth College. It marked the birth of Artificial Intelligence as a field!
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ),
          )}
        </AnimatePresence>

        <motion.div variants={item} className="text-center pt-10">
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-purple-500/25 hover:scale-105 border-0"
          >
            <motion.div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="group-hover:animate-none"
              >
                <Download className="w-5 h-5" />
              </motion.div>
              Download Full Program PDF
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Program
