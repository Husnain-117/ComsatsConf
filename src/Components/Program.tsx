"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  CalendarDays,
  Download,
  ArrowRight,
  Clock,
  MapPin,
  Users,
  Presentation,
  Award,
  Coffee,
  Camera,
  Sparkles,
} from "lucide-react"
import { Button } from "@/Components/ui/button"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, duration: 0.8, ease: "easeOut" },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const highlightItemVariants: Variants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    x: 8,
    scale: 1.03,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
}

const programHighlights = [
  {
    title: "Inaugural Ceremony",
    description: "Grand opening with distinguished guests and keynote address",
    icon: <Sparkles className="h-6 w-6" />,
    time: "9:00 AM",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Keynote Lectures",
    description: "Inspiring talks from industry leaders and renowned researchers",
    icon: <Presentation className="h-6 w-6" />,
    time: "10:30 AM",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Technical Sessions",
    description: "Parallel sessions covering cutting-edge research and innovations",
    icon: <Users className="h-6 w-6" />,
    time: "2:00 PM",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Poster Presentations",
    description: "Interactive showcase of research findings and methodologies",
    icon: <Award className="h-6 w-6" />,
    time: "3:30 PM",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Panel Discussions",
    description: "Expert panels addressing current challenges and future trends",
    icon: <Coffee className="h-6 w-6" />,
    time: "4:30 PM",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Cultural Visit",
    description: "Exclusive guided tour to the historic Harappa archaeological site",
    icon: <Camera className="h-6 w-6" />,
    time: "Full Day",
    gradient: "from-violet-500 to-purple-600",
  },
]

export const Program: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section
      id="program"
      className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-100/20 to-blue-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto space-y-20"
      >
        {/* Enhanced Heading */}
        <motion.div variants={item} className="text-center space-y-8">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-slate-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Conference{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Program
            </span>
          </motion.h2>
          <motion.p variants={item} className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Discover an extraordinary lineup of sessions, presentations, and networking opportunities designed to
            inspire and educate.
          </motion.p>
        </motion.div>

        {/* Program Highlights Grid */}
        <motion.div variants={item} className="space-y-12">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Program Highlights</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience a carefully curated program featuring world-class speakers, innovative research, and meaningful
              connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={highlightItemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1 }}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${highlight.gradient} text-white shadow-lg`}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {highlight.icon}
                    </motion.div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">{highlight.time}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    animate={{ x: hoveredCard === idx ? 0 : -10 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Program Announcement - Separate Professional Section */}
        <motion.div
          variants={cardVariants}
          className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
          <div className="relative p-12 text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white"
            >
              <CalendarDays className="h-6 w-6 text-blue-400" />
              <span className="font-semibold text-lg">Final Program Release</span>
            </motion.div>

            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-black text-white">Complete Program Guide</h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                The detailed conference schedule with session timings, speaker information, and venue details will be
                available on
              </p>
              <motion.div
                className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                October 6, 2025
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="outline"
                className="group bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4"
                disabled
              >
                <Download className="h-5 w-5 mr-2" />
                Download Program PDF
                <span className="ml-3 text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Coming Soon</span>
              </Button>

              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  Get Notified
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </motion.div>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div variants={item} className="text-center pt-16">
          <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
  size="lg"
  className="
    group relative overflow-hidden rounded-3xl
    bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
    px-4 py-3 sm:px-8 sm:py-5 md:px-12 md:py-6
    text-base sm:text-xl md:text-2xl font-bold text-white
    shadow-2xl transition-all duration-500 hover:shadow-blue-500/25 border-0
    w-full sm:w-auto
  "
>
  <motion.div className="flex items-center gap-2 sm:gap-4 justify-center">
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="group-hover:animate-none"
    >
      <Download className="w-5 h-5 sm:w-7 sm:h-7" />
    </motion.div>
    <span className="truncate">Stay Updated on Program Details</span>
    <motion.div
      animate={{ x: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7" />
    </motion.div>
  </motion.div>
  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
</Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Program
