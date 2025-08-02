"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { PlayCircle, ImageIcon, Video } from "lucide-react"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.6, ease: "easeOut" } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const mediaCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
}

// Placeholder media items; replace src with real links after event
const media = [
  { type: "image", src: "/placeholder.svg?height=800&width=600", alt: "Conference audience" },
  { type: "image", src: "/placeholder.svg?height=801&width=601", alt: "Speaker on stage" },
  { type: "video", src: "#", alt: "Event highlight video" }, // Placeholder for video
  { type: "image", src: "/placeholder.svg?height=802&width=602", alt: "Networking event" },
  { type: "image", src: "/placeholder.svg?height=803&width=603", alt: "Workshop session" },
  { type: "image", src: "/placeholder.svg?height=804&width=604", alt: "Exhibition booth" },
]

export const Gallery: React.FC = () => (
  <section
    id="gallery"
    className="relative min-h-screen py-16 px-8 overflow-hidden bg-gradient-to-br from-[#e0d4f7]/40 via-[#f7f3fc]/30 to-[#ffffff]/20 text-gray-800"
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
        Event{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Gallery
        </span>
      </motion.h2>

      {/* Introductory Paragraph */}
      <motion.p variants={item} className="text-xl italic text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
        Relive the moments and explore the vibrant atmosphere of our past events. From insightful keynotes to engaging
        workshops, see what makes our conference unforgettable.
      </motion.p>

      {/* Media Grid */}
      <motion.div variants={container} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {media.map((m, i) => (
          <motion.div
            key={i}
            variants={mediaCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
            className="relative overflow-hidden rounded-xl bg-white/50 shadow-xl backdrop-blur-md border border-white/70 group cursor-pointer"
          >
            {m.type === "image" ? (
              <img
                src={m.src || "/placeholder.svg"}
                alt={m.alt}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="h-64 w-full flex items-center justify-center bg-gradient-to-br from-purple-600/80 to-indigo-600/80 relative">
                <PlayCircle className="h-16 w-16 text-white/90 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center text-white/70 text-lg font-semibold">
                  <Video className="h-8 w-8 mr-2" /> Event Video
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {m.type === "image" ? (
                <ImageIcon className="h-10 w-10 text-white" />
              ) : (
                <PlayCircle className="h-10 w-10 text-white" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
)

export default Gallery
