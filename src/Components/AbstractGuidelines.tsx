"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  FileText,
  UploadCloud,
  Mic2,
  Download,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  Clock,
  Users,
  Award,
} from "lucide-react"
import { Button } from "@/Components/ui/button"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.8, ease: "easeOut" },
  },
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

const guidelines = [
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: "Formatting Requirements",
    details: [
      "Maximum 300 words with clear, concise language",
      "Structure: Background, Methods, Results, Conclusion",
      "APA 7th edition referencing style required",
      "Times New Roman, 12pt font, single spacing",
    ],
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    stats: "4 Key Rules",
  },
  {
    icon: <UploadCloud className="h-6 w-6 text-white" />,
    title: "Submission Process",
    details: [
      "Upload PDF via EasyChair portal only",
      "Filename format: <Track>_<LastName>.pdf",
      "Deadline: 30 Nov 2025, 23:59 GMT",
      "Confirmation email sent within 24 hours",
    ],
    color: "from-indigo-500 to-purple-600",
    bgColor: "from-indigo-50 to-purple-50",
    stats: "3 Steps",
  },
  {
    icon: <Mic2 className="h-6 w-6 text-white" />,
    title: "Presentation Guidelines",
    details: [
      "Oral presentations: 12 minutes + 3 minutes Q&A",
      "Poster presentations: A0 portrait format",
      "Slides must be in 16:9 aspect ratio",
      "Technical check 30 minutes before session",
    ],
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-50 to-violet-50",
    stats: "2 Formats",
  },
]

const quickStats = [
  { icon: <Clock className="h-6 w-6" />, value: "300", label: "Word Limit" },
  { icon: <Users className="h-6 w-6" />, value: "15", label: "Min Duration" },
  { icon: <Award className="h-6 w-6" />, value: "24h", label: "Response Time" },
]

export const AbstractGuidelines: React.FC = () => {
  const [selectedGuideline, setSelectedGuideline] = useState<number | null>(null)

  return (
    <section
      id="abstract-guidelines"
      className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto space-y-16"
      >
        {/* Enhanced Heading */}
        <motion.div variants={item} className="text-center space-y-6">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Abstract{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Guidelines
            </span>
          </motion.h2>
          <motion.p variants={item} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Follow our comprehensive submission guidelines to ensure your abstract meets all requirements for successful
            review and presentation.
          </motion.p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={item} className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-white/50"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-blue-600 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-black text-slate-800 mb-1">{stat.value}</div>
              <div className="text-slate-600 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Guideline Cards */}
        <motion.div variants={item} className="grid gap-8 md:grid-cols-3">
          {guidelines.map((guideline, index) => (
            <motion.div
              key={guideline.title}
              variants={cardVariants}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedGuideline(selectedGuideline === index ? null : index)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${guideline.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white/80">{guideline.icon}</div>
                  <div className="text-right">
                    <div className="text-sm opacity-80">{guideline.stats}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{guideline.title}</h3>
                <div className="w-12 h-1 bg-white/30 rounded-full"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <ul className="space-y-3">
                  {guideline.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="font-medium leading-relaxed">{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-6 pt-4 border-t border-slate-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-slate-500">
                    <Lightbulb className="h-4 w-4" />
                    <span className="text-sm font-medium">Click for detailed requirements</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Guidelines Modal */}
        <AnimatePresence>
          {selectedGuideline !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedGuideline(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`bg-gradient-to-r ${guidelines[selectedGuideline].color} p-8 text-white`}>
                  <h3 className="text-3xl font-bold mb-4">{guidelines[selectedGuideline].title}</h3>
                  <p className="text-white/90">Detailed requirements and best practices</p>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3">Requirements Checklist</h4>
                      <ul className="space-y-3">
                        {guidelines[selectedGuideline].details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced CTA Section */}
        <motion.div variants={item} className="text-center pt-12">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Submit Your Abstract?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Download our comprehensive guidelines document with templates, examples, and submission checklist.
            </p>
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-5 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-blue-500/25 hover:scale-105 border-0"
            >
              <motion.div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="group-hover:animate-none"
                >
                  <Download className="w-6 h-6" />
                </motion.div>
                Download Complete Guidelines
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AbstractGuidelines
