"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import { PlayCircle, ImageIcon, Video, Download, Share2, Eye, X } from "lucide-react"
import { Button } from "@/Components/ui/button"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.8, ease: "easeOut" } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

const media = [
  {
    type: "image",
    src: "/placeholder.svg?height=800&width=600&text=Conference+Audience",
    alt: "Conference audience",
    title: "Opening Ceremony",
    description: "Packed auditorium during the opening keynote",
    category: "Event Highlights",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=801&width=601&text=Speaker+on+Stage",
    alt: "Speaker on stage",
    title: "Keynote Presentation",
    description: "Dr. Sarah Chen delivering her AI keynote",
    category: "Speakers",
  },
  {
    type: "video",
    src: "#",
    alt: "Event highlight video",
    title: "Conference Highlights",
    description: "Best moments from the 2-day event",
    category: "Videos",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=802&width=602&text=Networking+Event",
    alt: "Networking event",
    title: "Networking Reception",
    description: "Attendees connecting during evening reception",
    category: "Networking",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=803&width=603&text=Workshop+Session",
    alt: "Workshop session",
    title: "Interactive Workshop",
    description: "Hands-on AI workshop in progress",
    category: "Workshops",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=804&width=604&text=Exhibition+Booth",
    alt: "Exhibition booth",
    title: "Technology Exhibition",
    description: "Latest innovations on display",
    category: "Exhibition",
  },
  {
    type: "video",
    src: "#",
    alt: "Speaker interviews",
    title: "Speaker Interviews",
    description: "Exclusive interviews with keynote speakers",
    category: "Videos",
  },
  {
    type: "image",
    src: "/placeholder.svg?height=805&width=605&text=Awards+Ceremony",
    alt: "Awards ceremony",
    title: "Awards Ceremony",
    description: "Recognizing outstanding research contributions",
    category: "Awards",
  },
]

const categories = ["All", "Event Highlights", "Speakers", "Videos", "Networking", "Workshops", "Exhibition", "Awards"]

const galleryStats = [
  { icon: <ImageIcon className="h-6 w-6" />, value: "200+", label: "Photos" },
  { icon: <Video className="h-6 w-6" />, value: "15+", label: "Videos" },
  { icon: <Eye className="h-6 w-6" />, value: "10K+", label: "Views" },
]

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)

  const filteredMedia = selectedCategory === "All" ? media : media.filter((item) => item.category === selectedCategory)

  return (
    <section
      id="gallery"
      className="relative min-h-screen py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "rgb(153, 173, 193)" }}
    >
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
            Event{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h2>
          <motion.p variants={item} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Relive the memorable moments from our conference. Explore photos, videos, and highlights from keynotes,
            workshops, networking events, and more.
          </motion.p>
        </motion.div>

        {/* Gallery Stats */}
        <motion.div variants={item} className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {galleryStats.map((stat, index) => (
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

        {/* Category Filter */}
        <motion.div variants={item} className="flex justify-center">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white/50 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "text-slate-700 hover:bg-white/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Media Grid */}
        <motion.div variants={container} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence>
            {filteredMedia.map((mediaItem, i) => (
              <motion.div
                key={`${selectedCategory}-${i}`}
                variants={mediaCardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                className="group relative overflow-hidden rounded-2xl bg-white/90 shadow-xl backdrop-blur-md border border-white/50 cursor-pointer"
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                onClick={() => setSelectedMedia(i)}
              >
                {mediaItem.type === "image" ? (
                  <div className="relative">
                    <img
                      src={mediaItem.src || "/placeholder.svg"}
                      alt={mediaItem.alt}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2">
                      <ImageIcon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="h-48 w-full flex items-center justify-center bg-gradient-to-br from-blue-600/80 to-indigo-600/80 relative">
                    <PlayCircle className="h-16 w-16 text-white/90 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2">
                      <Video className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}

                {/* Media Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {mediaItem.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {mediaItem.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{mediaItem.description}</p>
                </div>

                {/* Hover Actions */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 flex-1"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={item} className="text-center pt-12">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Want to Share Your Photos?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Help us build a comprehensive gallery by sharing your conference photos and videos with the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Upload Photos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share Gallery
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Media Viewer Modal */}
      <AnimatePresence>
        {selectedMedia !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {filteredMedia[selectedMedia].type === "image" ? (
                  <img
                    src={filteredMedia[selectedMedia].src || "/placeholder.svg"}
                    alt={filteredMedia[selectedMedia].alt}
                    className="w-full h-96 object-cover"
                  />
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <PlayCircle className="h-24 w-24 text-white" />
                  </div>
                )}
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 bg-black/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-black/40 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{filteredMedia[selectedMedia].title}</h3>
                    <p className="text-slate-600">{filteredMedia[selectedMedia].description}</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {filteredMedia[selectedMedia].category}
                  </span>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
