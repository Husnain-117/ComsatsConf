"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { easeInOut } from "framer-motion"
import { FileText, UploadCloud, Mic2, Download, ArrowRight, Lightbulb } from "lucide-react"
import { Button } from "@/Components/ui/button"

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

const iconFloat = {
  y: [-3, 3, -3],
}
const iconFloatTransition = {
  duration: 3,
  repeat: Number.POSITIVE_INFINITY,
  ease: easeInOut,
}

const guidelines = [
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: "Formatting",
    details: [
      "Max 300 words; use clear, concise language.",
      "Structure: Background, Methods, Results, Conclusion.",
      "APA 7th referencing style.",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <UploadCloud className="h-6 w-6 text-white" />,
    title: "Submission",
    details: [
      "Upload PDF via the EasyChair portal.",
      "Filename: <Track>_<LastName>.pdf.",
      "Deadline: 30 Nov 2025, 23:59 (GMT).",
    ],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: <Mic2 className="h-6 w-6 text-white" />,
    title: "Presentation",
    details: ["Oral presentations: 12 min + 3 min Q&A.", "Poster size: A0 portrait.", "Slides must be 16:9 ratio."],
    color: "from-blue-500 to-cyan-500",
  },
]

export const AbstractGuidelines: React.FC = () => (
  <section
    id="abstract-guidelines"
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
        Abstract{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Guidelines
        </span>
      </motion.h2>

      {/* Introductory Paragraph */}
      <motion.p variants={item} className="text-xl italic text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
        To ensure a smooth submission process, please review our comprehensive guidelines for abstract formatting,
        submission procedures, and presentation requirements.
      </motion.p>

      {/* Guideline Cards */}
      <motion.div variants={item} className="grid gap-8 sm:grid-cols-3">
        {guidelines.map((g, index) => (
          <motion.div
            key={g.title}
            className="group rounded-2xl bg-white/50 p-6 backdrop-blur-md shadow-xl border border-white/70 flex flex-col gap-4 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center gap-4 text-lg font-semibold">
              <motion.div
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${g.color} flex items-center justify-center shadow-md`}
                animate={iconFloat}
                transition={{ ...iconFloatTransition, delay: index * 0.2 }}
              >
                {g.icon}
              </motion.div>
              <h3 className="text-gray-900 group-hover:text-purple-700 transition-colors duration-300">{g.title}</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 italic">
              {g.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action / Download Button */}
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
            Download Full Guidelines PDF
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

export default AbstractGuidelines
