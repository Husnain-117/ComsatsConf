"use client"
import type React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  CalendarDays,
  FileText,
  CheckCircle,
  Target,
  Clock,
  Star,
  Handshake,
  Apple,
  Scale,
  ShieldCheck,
  Leaf,
  FlaskConical,
  Package,
  Soup,
  Dna,
  ArrowRight,
  Home,
  BellRing,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import { useState } from "react" // Ensure useState is imported

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
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

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }, // cubic-bezier(0.22, 1, 0.36, 1) similar to easeOutQuint
  },
}

const iconFloat: Variants = {
  animate: {
    y: [0, -3, 0, 3, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      },
      rotate: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};



const themes = [
  {
    name: "Academia–Industry–Government Collaboration Models",
    icon: Handshake,
    color: "from-blue-500 to-indigo-600",
    description: "Exploring synergistic partnerships for research and development.",
  },
  {
    name: "Addressing Malnutrition through Nutritional Fortification",
    icon: Apple,
    color: "from-indigo-500 to-purple-600",
    description: "Strategies and innovations in enhancing food's nutritional value.",
  },
  {
    name: "Public Health Nutrition and Policy Translation",
    icon: Scale,
    color: "from-purple-500 to-violet-600",
    description: "Translating nutritional science into effective public health policies.",
  },
  {
    name: "Food Safety, Quality Assurance, and Regulations",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-600",
    description: "Ensuring food integrity from farm to fork through robust systems.",
  },
  {
    name: "Sustainable Food Systems and Climate Adaptation",
    icon: Leaf,
    color: "from-slate-500 to-gray-600",
    description: "Developing resilient food systems in the face of climate change.",
  },
  {
    name: "Functional Foods, Probiotics, and Nutraceuticals",
    icon: FlaskConical,
    color: "from-cyan-500 to-blue-600",
    description: "Research on health-promoting food components and their applications.",
  },
  {
    name: "Innovative Processing, Packaging, and Preservation Technologies",
    icon: Package,
    color: "from-orange-500 to-red-600",
    description: "Advancements in food technology for enhanced shelf-life and quality.",
  },
  {
    name: "Malnutrition, Hidden Hunger, and Community Interventions",
    icon: Soup,
    color: "from-pink-500 to-rose-600",
    description: "Community-based approaches to combat nutritional deficiencies.",
  },
  {
    name: "Food Biotechnology, Genomics, and Omics Technologies",
    icon: Dna,
    color: "from-teal-500 to-cyan-600",
    description: "Leveraging biotechnology for food improvement and understanding.",
  },
  {
    name: "Traditional, Local, and Indigenous Food Systems",
    icon: Home,
    color: "from-amber-500 to-yellow-600",
    description: "Preserving and promoting heritage food practices and knowledge.",
  },
]

const submissionStats = [
  { 
    icon: <FileText className="w-8 h-8" />, 
    value: "300", 
    label: "Word Limit" 
  },
  { 
    icon: <Star className="w-8 h-8" />, 
    value: "10", 
    label: "Research Themes" 
  },
  { 
    icon: <Clock className="w-8 h-8" />, 
    value: "24h", 
    label: "Response Time" 
  },
]

export const CallForPapers: React.FC = () => {
  const [showAllThemes, setShowAllThemes] = useState(false)

  return (
    <section
      id="call-for-papers"
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "rgb(153, 173, 193)" }}
    >
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Enhanced Header Section */}
        <motion.div variants={item} className="text-center mb-16 space-y-6">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-white/50 text-slate-700 shadow-xl mb-8"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div variants={iconFloat} animate="animate">
              <FileText className="w-6 h-6 text-blue-600" />
            </motion.div>
            <span className="text-lg font-bold">Call for Papers</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Call for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Papers
            </span>
          </motion.h2>

          <motion.p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium" variants={item}>
            We invite original research abstracts for oral and poster presentations. Open to students, researchers,
            practitioners, and industry professionals. Join us in advancing the frontiers of Food Science and Nutrition.
          </motion.p>
        </motion.div>

        {/* Submission Stats */}
        <motion.div variants={item} className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
          {submissionStats.map((stat, index) => (
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

        {/* Enhanced Research Themes */}
        <motion.div variants={item} className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Research Themes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.slice(0, showAllThemes ? themes.length : 6).map((theme, index) => (
              <motion.div
                key={theme.name}
                variants={cardVariants}
                className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`bg-gradient-to-r ${theme.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="p-3 bg-white/20 rounded-xl"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <theme.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="text-right">
                      <div className="text-sm opacity-80">Theme {index + 1}</div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{theme.name}</h4>
                  <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 font-medium leading-relaxed">{theme.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {themes.length > 6 && (
            <motion.div variants={item} className="text-center mt-12">
              <Button
                onClick={() => setShowAllThemes(!showAllThemes)}
                size="lg"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
              >
                {showAllThemes ? "Show Less Themes" : "View All Themes"}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced Guidelines Cards */}
        <motion.div variants={item} className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Submission Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={cardVariants}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="p-3 bg-white/20 rounded-xl"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FileText className="w-6 h-6" />
                  </motion.div>
                  <h4 className="text-2xl font-bold">Abstract Requirements</h4>
                </div>
                <div className="w-16 h-1 bg-white/30 rounded-full"></div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    "Maximum 300 words (English)",
                    "Include: Title, Authors, Affiliations, Methodology, Results",
                    "Format: MS Word (.doc/.docx), Times New Roman 12pt",
                    "Peer-reviewed by scientific committee",
                  ].map((requirement, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="font-medium leading-relaxed">{requirement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="p-3 bg-white/20 rounded-xl"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Target className="w-6 h-6" />
                  </motion.div>
                  <h4 className="text-2xl font-bold">Submission Tips</h4>
                </div>
                <div className="w-16 h-1 bg-white/30 rounded-full"></div>
              </div>
              <div className="p-8">
                <div className="space-y-4 text-slate-700 font-medium leading-relaxed">
                  <p>
                    Abstracts will be peer-reviewed by the scientific committee based on originality, methodology,
                    significance, and clarity. Authors will be notified of acceptance via email.
                  </p>
                  <p>
                    Accepted abstracts will be published in the conference proceedings. Selected papers may be invited
                    for submission to a special issue of a reputable journal.
                  </p>
                  <p>
                    For any queries regarding abstract submission, please contact the organizing committee at
                    fsnconference@cuisahiwal.edu.pk.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          variants={item}
          className="text-center bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-12 text-white">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <CalendarDays className="w-5 h-5 text-yellow-400" />
              <span className="font-bold">Deadline: September 15, 2025</span>
            </motion.div>
            <h3 className="text-4xl font-bold mb-4">Ready to Submit Your Research?</h3>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Don't miss this opportunity to showcase your research to a global audience of industry leaders,
              researchers, and innovators.
            </p>
          </div>

          <div className="p-12">
            <div className="space-y-6 max-w-2xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-base sm:text-lg md:text-xl text-slate-700">
  <span className="font-medium">Submit to:</span>
  <a
    href="mailto:fsnconference@cuisahiwal.edu.pk"
    className="text-blue-700 font-semibold break-all sm:ml-2 text-base sm:text-lg md:text-xl"
  >
    fsnconference@cuisahiwal.edu.pk
  </a>
</div>
            
              <div className="flex items-center justify-center gap-3 text-lg text-slate-700">
                <BellRing className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Acceptance Notification: </span>
                <span className="font-semibold">September 22, 2025</span>
              </div>
            </div>

            <motion.div
              className="mt-8 text-center text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-sm font-medium">
                Questions? Contact us at{" "}
                <span className="text-blue-600 font-bold">fsnconference@cuisahiwal.edu.pk</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CallForPapers
