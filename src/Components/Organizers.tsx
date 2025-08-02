"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Users, Building2, Handshake, Award, Lightbulb, UserCheck, ArrowRight } from "lucide-react"
import { Button } from "@/Components/ui/button"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const iconFloat: Variants = {
  animate: {
    y: [-3, 3, -3],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const committees = [
  { role: "General Chair", names: ["Prof. Alice Johnson"], icon: <Award className="h-5 w-5 text-white" /> },
  {
    role: "Program Chairs",
    names: ["Dr. Bob Lee", "Dr. Carol Singh"],
    icon: <Lightbulb className="h-5 w-5 text-white" />,
  },
  { role: "Publication Chair", names: ["Dr. David Kim"], icon: <UserCheck className="h-5 w-5 text-white" /> },
  {
    role: "Publicity Chairs",
    names: ["Dr. Eva Brown", "Mr. Frank Wu"],
    icon: <Users className="h-5 w-5 text-white" />,
  },
]

const collaborators = ["IEEE XYZ Section", "ACM SIGCHI Chapter", "TechCorp Labs", "Global Research Institute"]

export const Organizers: React.FC = () => (
  <section
    id="organizers"
    className="relative min-h-screen py-16 px-8 overflow-hidden bg-gradient-to-br from-[#cfc3e6]/40 via-[#e0d4f7]/30 to-[#f7f3fc]/20 text-gray-800"
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
        Meet Our{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Organizers
        </span>
      </motion.h2>

      {/* Introductory Paragraph */}
      <motion.p variants={item} className="text-xl italic text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
        Our dedicated team and esteemed partners work tirelessly to bring you an exceptional conference experience.
        Discover the minds behind the event.
      </motion.p>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Committees Section */}
        <motion.div
          variants={item}
          className="bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/70 space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center flex items-center justify-center gap-2">
            <Users className="h-6 w-6 text-purple-600" /> Organizing Committees
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {committees.map((c, index) => (
              <motion.div
                key={c.role}
                className="group rounded-xl bg-white/70 p-4 shadow-md border border-white/80 flex flex-col items-center text-center cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-2 shadow-sm"
                  variants={iconFloat}
                  animate="animate"
                >
                  {c.icon}
                </motion.div>
                <h4 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  {c.role}
                </h4>
                <p className="text-sm text-gray-700 italic">{c.names.join(", ")}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Host & Collaborators Section */}
        <div className="space-y-8">
          <motion.div
            variants={item}
            className="group rounded-2xl bg-white/50 p-8 backdrop-blur-md shadow-xl border border-white/70 space-y-4 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center gap-3 text-lg font-semibold">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center shadow-md"
                variants={iconFloat}
                animate="animate"
              >
                <Building2 className="h-6 w-6 text-white" />
              </motion.div>
              <h3 className="text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
                Host Institution
              </h3>
            </div>
            <p className="text-base text-gray-700 italic leading-relaxed">
              Department of Computer Science, COMSATS University Islamabad, is proud to host this international
              conference.
            </p>
            <Button
              variant="outline"
              className="mt-auto group relative overflow-hidden rounded-full border-2 border-indigo-400 bg-white/70 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="group rounded-2xl bg-white/50 p-8 backdrop-blur-md shadow-xl border border-white/70 space-y-4 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center gap-3 text-lg font-semibold">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-md"
                variants={iconFloat}
                animate="animate"
              >
                <Handshake className="h-6 w-6 text-white" />
              </motion.div>
              <h3 className="text-gray-900 group-hover:text-blue-700 transition-colors duration-300">Collaborators</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 italic">
              {collaborators.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="mt-auto group relative overflow-hidden rounded-full border-2 border-blue-400 bg-white/70 text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View Partners
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
)

export default Organizers

