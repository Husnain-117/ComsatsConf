"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  CalendarDays,
  FileText,
  Send,
  CheckCircle,
  Users,
  Award,
  Lightbulb,
  Target,
  ArrowRight,
  Download,
} from "lucide-react"
import { Button } from "@/Components/ui/button"

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

const timeline = [
  {
    label: "Abstract Submission Opens",
    date: "1 Oct 2025",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "Abstract Deadline",
    date: "30 Nov 2025",
    icon: CalendarDays,
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Notification of Acceptance",
    date: "15 Dec 2025",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-500",
  },
  {
    label: "Camera-Ready Paper Due",
    date: "10 Jan 2026",
    icon: Award,
    color: "from-orange-500 to-red-500",
  },
]

const themes = [
  { name: "AI & Machine Learning", icon: Lightbulb, color: "from-yellow-400 to-orange-500" },
  { name: "Human-Computer Interaction", icon: Users, color: "from-blue-400 to-indigo-500" },
  { name: "Sustainable Computing", icon: Target, color: "from-green-400 to-teal-500" },
  { name: "Cyber-Physical Systems", icon: Award, color: "from-purple-400 to-pink-500" },
  { name: "Data Visualization", icon: FileText, color: "from-cyan-400 to-blue-500" },
]

export const CallForPapers: React.FC = () => {
  return (
    <section className="relative min-h-screen py-16 px-8 overflow-hidden bg-gradient-to-br from-[#8B7AA8] via-[#A294C7] to-[#B8A9D9]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-white/10 to-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-300/20 to-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300/15 to-purple-300/15 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <motion.div variants={item} className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xl mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div variants={iconFloat} animate="animate">
              <FileText className="w-6 h-6 text-cyan-300" />
            </motion.div>
            <span className="text-lg font-semibold">Call for Papers</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight"
            variants={item}
          >
            Share Your{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
              Innovation
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl italic text-white/80 max-w-4xl mx-auto leading-relaxed"
            variants={item}
          >
            We invite researchers, practitioners, and enthusiasts to submit high-quality abstracts that push the
            boundaries of today's technology and help craft the digital future.
          </motion.p>
        </motion.div>

        {/* Themes Section */}
        <motion.div variants={item} className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Research Themes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.name}
                className={`group relative overflow-hidden rounded-xl bg-gradient-to-r ${theme.color} p-1 shadow-lg hover:shadow-2xl transition-all duration-500`}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 h-full flex flex-col items-center text-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <theme.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-sm font-semibold text-white">{theme.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Timeline */}
        <motion.div variants={item} className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Submission Timeline</h3>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 via-green-400 to-orange-400 transform -translate-y-1/2 rounded-full opacity-60" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {timeline.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Step Circle */}
                  <motion.div
                    className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${step.color} p-1 mb-6 shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <motion.div variants={iconFloat} animate="animate" style={{ animationDelay: `${index * 0.5}s` }}>
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>

                  <h4 className="text-lg font-bold text-white mb-2">{step.label}</h4>
                  <p className="text-white/70 italic text-sm flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {step.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guidelines Cards */}
        <motion.div variants={item} className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/20 shadow-xl hover:shadow-2xl relative overflow-hidden"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Abstract Guidelines</h3>
              </div>

              <ul className="space-y-3 text-white/80 italic">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  Max 300 words
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  Must include objectives, methodology, results, and conclusions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  Use APA 7th referencing style
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  Upload in PDF format
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/20 shadow-xl hover:shadow-2xl relative overflow-hidden"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 p-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Submission Tips</h3>
              </div>

              <p className="text-white/80 italic leading-relaxed">
                Submissions should align with one of the conference themes listed above. Interdisciplinary work that
                bridges multiple themes is highly encouraged. Focus on innovation and practical applications.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={item}
          className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 backdrop-blur-md border border-white/30 text-white shadow-lg mb-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <CalendarDays className="w-5 h-5" />
            <span className="font-semibold">Deadline: November 30, 2025</span>
          </motion.div>

          <h3 className="text-3xl font-bold text-white mb-6">Ready to Submit?</h3>
          <p className="text-xl italic text-white/80 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to showcase your research to a global audience of industry leaders and
            innovators.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-cyan-500/25 hover:scale-105 border-0"
            >
              <motion.div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="group-hover:animate-none"
                >
                  <Send className="w-5 h-5" />
                </motion.div>
                Submit Abstract
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>

            <Button
              variant="outline"
              className="group rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:border-white/60 hover:bg-white/30 hover:scale-105"
            >
              <motion.div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Guidelines
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CallForPapers
