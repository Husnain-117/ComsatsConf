"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import { Linkedin, Twitter, Globe, Users, Star, ChevronLeft, ChevronRight, Play } from "lucide-react"
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

interface Speaker {
  id: string
  name: string
  title: string
  company: string
  image: string
  bio: string
  expertise: string[]
  social: {
    linkedin?: string
    twitter?: string
    website?: string
  }
  featured: boolean
  talkTitle: string
  talkDescription: string
}

const speakers: Speaker[] = [
  // Keynote Speakers
  {
    id: "1",
    name: "Dr. Sarah Chen",
    title: "Chief AI Officer",
    company: "TechVision Corp",
    image: "/placeholder.svg?height=400&width=400&text=Dr.+Sarah+Chen",
    bio: "Leading AI researcher with 15+ years of experience in machine learning and neural networks. Pioneer in explainable AI and ethical technology development.",
    expertise: ["Artificial Intelligence", "Machine Learning", "Ethics in Tech"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    featured: true,
    talkTitle: "The Future of Explainable AI",
    talkDescription: "Exploring how we can make AI systems more transparent and trustworthy for widespread adoption.",
  },
  {
    id: "2",
    name: "Prof. Michael Rodriguez",
    title: "Director of Innovation",
    company: "Stanford University",
    image: "/placeholder.svg?height=400&width=400&text=Prof.+Michael+Rodriguez",
    bio: "Renowned computer scientist and educator, specializing in human-computer interaction and user experience design. Author of 3 bestselling books on technology.",
    expertise: ["Human-Computer Interaction", "UX Design", "Technology Education"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
    featured: true,
    talkTitle: "Designing for Human Connection",
    talkDescription: "How technology can enhance rather than replace human relationships and interactions.",
  },
  // Invited Speakers
  {
    id: "3",
    name: "Dr. James Park",
    title: "Research Scientist",
    company: "Quantum Dynamics Lab",
    image: "/placeholder.svg?height=400&width=400&text=Dr.+James+Park",
    bio: "Quantum computing researcher pushing the boundaries of computational possibilities. Published over 50 papers in leading scientific journals.",
    expertise: ["Quantum Computing", "Cryptography", "Research"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    featured: false,
    talkTitle: "Quantum Computing: Present and Future",
    talkDescription: "Understanding the current state and future potential of quantum computing technology.",
  },
  {
    id: "4",
    name: "Maria Gonzalez",
    title: "Cybersecurity Director",
    company: "SecureNet Solutions",
    image: "/placeholder.svg?height=400&width=400&text=Maria+Gonzalez",
    bio: "Cybersecurity expert with extensive experience in protecting enterprise systems. Recognized leader in security strategy and risk management.",
    expertise: ["Cybersecurity", "Risk Management", "Enterprise Security"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
    featured: false,
    talkTitle: "Zero Trust Security Architecture",
    talkDescription: "Implementing comprehensive security strategies for modern distributed systems.",
  },
  {
    id: "5",
    name: "Alex Kumar",
    title: "Blockchain Architect",
    company: "DecentralTech",
    image: "/placeholder.svg?height=400&width=400&text=Alex+Kumar",
    bio: "Blockchain technology pioneer and cryptocurrency expert. Built multiple successful DeFi platforms and advised numerous blockchain startups.",
    expertise: ["Blockchain", "Cryptocurrency", "DeFi"],
    social: {
      linkedin: "#",
      website: "#",
    },
    featured: false,
    talkTitle: "The Evolution of Decentralized Finance",
    talkDescription: "How blockchain technology is revolutionizing traditional financial systems.",
  },
  {
    id: "6",
    name: "Lisa Thompson",
    title: "VP of Engineering",
    company: "CloudScale Systems",
    image: "/placeholder.svg?height=400&width=400&text=Lisa+Thompson",
    bio: "Expert in cloud architecture and scalable systems. Led engineering teams at major tech companies and successfully scaled platforms to millions of users.",
    expertise: ["Cloud Computing", "System Architecture", "Team Leadership"],
    social: {
      linkedin: "#",
      website: "#",
    },
    featured: false,
    talkTitle: "Building Resilient Cloud Infrastructure",
    talkDescription: "Best practices for creating scalable and reliable cloud-based systems.",
  },
  // Session Chair
  {
    id: "7",
    name: "Dr. Robert Johnson",
    title: "Conference Chair",
    company: "MIT Computer Science",
    image: "/placeholder.svg?height=400&width=400&text=Dr.+Robert+Johnson",
    bio: "Distinguished professor and researcher in computer science with over 20 years of experience. Specializes in distributed systems and has chaired multiple international conferences.",
    expertise: ["Distributed Systems", "Conference Management", "Academic Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
    featured: false,
    talkTitle: "Welcome and Conference Overview",
    talkDescription: "Opening remarks and overview of the conference themes and schedule.",
  },
  {
    id: "8",
    name: "Prof. Emily Wilson",
    title: "Session Moderator",
    company: "Harvard University",
    image: "/placeholder.svg?height=400&width=400&text=Prof.+Emily+Wilson",
    bio: "Leading researcher in human-computer interaction with extensive experience in academic conference organization. Published over 40 papers in top-tier conferences.",
    expertise: ["Human-Computer Interaction", "User Experience", "Conference Organization"],
    social: {
      linkedin: "#",
      website: "#",
    },
    featured: false,
    talkTitle: "Panel Discussion: Future of Tech Education",
    talkDescription: "Moderating a panel of experts discussing innovations in technology education.",
  },
]

export const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const keynoteSpeakers = speakers.filter((speaker) => speaker.featured)
  const invitedSpeakers = speakers.filter((speaker) => !speaker.featured && speaker.id !== "7" && speaker.id !== "8")
  const sessionChairs = speakers.filter((speaker) => !speaker.featured && (speaker.id === "7" || speaker.id === "8"))

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(invitedSpeakers.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.ceil(invitedSpeakers.length / 3)) % Math.ceil(invitedSpeakers.length / 3),
    )
  }

  const visibleSpeakers = invitedSpeakers.slice(currentIndex * 3, (currentIndex + 1) * 3)

  return (
    <section
      id="speakers"
      className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto space-y-16"
      >
        {/* Heading */}
        <motion.div variants={item} className="text-center space-y-6">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Speakers
            </span>
          </motion.h2>
          <motion.p variants={item} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Learn from industry leaders, renowned researchers, and visionary innovators who are shaping the future of
            technology.
          </motion.p>
        </motion.div>

        {/* Keynote Speakers */}
        <motion.div variants={item} className="space-y-8">
          <h3 className="text-3xl font-bold text-slate-800 text-center">Keynote Speakers</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {keynoteSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                variants={cardVariants}
                className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedSpeaker(speaker)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Keynote
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">{speaker.name}</h4>
                  <p className="text-lg font-semibold text-blue-600 mb-1">{speaker.title}</p>
                  <p className="text-slate-600 font-medium mb-4">{speaker.company}</p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-slate-800 mb-2">Talk: {speaker.talkTitle}</h5>
                      <p className="text-slate-600 text-sm leading-relaxed">{speaker.talkDescription}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {speaker.expertise.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      {speaker.social.linkedin && (
                        <motion.a
                          href={speaker.social.linkedin}
                          className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="h-5 w-5 text-blue-600" />
                        </motion.a>
                      )}
                      {speaker.social.twitter && (
                        <motion.a
                          href={speaker.social.twitter}
                          className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Twitter className="h-5 w-5 text-blue-600" />
                        </motion.a>
                      )}
                      {speaker.social.website && (
                        <motion.a
                          href={speaker.social.website}
                          className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Globe className="h-5 w-5 text-blue-600" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Invited Speakers Carousel */}
        <motion.div variants={item} className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold text-slate-800">Invited Speakers</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="p-2 rounded-full border-slate-300 hover:bg-slate-100 bg-transparent"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="p-2 rounded-full border-slate-300 hover:bg-slate-100 bg-transparent"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {visibleSpeakers.map((speaker: Speaker, index: number) => (
                <motion.div
                  key={`${currentIndex}-${speaker.id}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02, y: -3 }}
                  onClick={() => setSelectedSpeaker(speaker)}
                >
                  <div className="relative">
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{speaker.name}</h4>
                    <p className="text-blue-600 font-semibold mb-1">{speaker.title}</p>
                    <p className="text-slate-600 text-sm mb-3">{speaker.company}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {speaker.expertise.slice(0, 2).map((skill: string) => (
                        <span
                          key={skill}
                          className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {speaker.social.linkedin && (
                        <div className="p-1.5 bg-slate-100 rounded-md">
                          <Linkedin className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                      {speaker.social.twitter && (
                        <div className="p-1.5 bg-slate-100 rounded-md">
                          <Twitter className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                      {speaker.social.website && (
                        <div className="p-1.5 bg-slate-100 rounded-md">
                          <Globe className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Session Chairs Section */}
        <motion.div variants={item} className="space-y-8 pt-12">
          <h3 className="text-3xl font-bold text-slate-800 text-center">Session Chairs</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sessionChairs.map((speaker: Speaker, index: number) => (
              <motion.div
                key={speaker.id}
                variants={cardVariants}
                className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedSpeaker(speaker)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Session Chair
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">{speaker.name}</h4>
                  <p className="text-lg font-semibold text-blue-600 mb-1">{speaker.title}</p>
                  <p className="text-slate-600 font-medium mb-4">{speaker.company}</p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-slate-800 mb-2">Talk: {speaker.talkTitle}</h5>
                      <p className="text-slate-600 text-sm leading-relaxed">{speaker.talkDescription}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {speaker.expertise.slice(0, 3).map((skill: string) => (
                        <span
                          key={skill}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      {speaker.social.linkedin && (
                        <motion.a
                          href={speaker.social.linkedin}
                          className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="h-5 w-5 text-blue-600" />
                        </motion.a>
                      )}
                      {speaker.social.twitter && (
                        <motion.a
                          href={speaker.social.twitter}
                          className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Twitter className="h-5 w-5 text-blue-600" />
                        </motion.a>
                      )}
                      {speaker.social.website && (
                        <motion.a
                          href={speaker.social.website}
                          className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Globe className="h-5 w-5 text-blue-600" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={item} className="text-center pt-12">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Want to Speak at Our Conference?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for innovative speakers to share their expertise. Submit your proposal and join our
              community of thought leaders.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Submit Speaking Proposal
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Speaker Detail Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedSpeaker.image || "/placeholder.svg"}
                  alt={selectedSpeaker.name}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="absolute top-4 right-4 bg-black/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-black/40 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{selectedSpeaker.name}</h3>
                    <p className="text-xl font-semibold text-blue-600 mb-1">{selectedSpeaker.title}</p>
                    <p className="text-slate-600 font-medium">{selectedSpeaker.company}</p>
                  </div>
                  {selectedSpeaker.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Keynote
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Biography</h4>
                    <p className="text-slate-600 leading-relaxed">{selectedSpeaker.bio}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Talk: {selectedSpeaker.talkTitle}</h4>
                    <p className="text-slate-600 leading-relaxed">{selectedSpeaker.talkDescription}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSpeaker.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {selectedSpeaker.social.linkedin && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </Button>
                    )}
                    {selectedSpeaker.social.twitter && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                        <Twitter className="h-4 w-4" />
                        Twitter
                      </Button>
                    )}
                    {selectedSpeaker.social.website && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                        <Globe className="h-4 w-4" />
                        Website
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Speakers
