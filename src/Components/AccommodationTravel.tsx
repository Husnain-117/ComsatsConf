"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Hotel, Plane, MapPin, Car, ArrowRight } from "lucide-react"
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
  },
}

import type { Easing } from "framer-motion"

const iconFloatTransition = {
  duration: 3,
  repeat: Number.POSITIVE_INFINITY,
  ease: "easeInOut" as Easing,
};

const hotels = [
  {
    name: "Grand Plaza Hotel",
    distance: "0.5 km",
    price: "from $90",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    name: "City Inn Suites",
    distance: "1 km",
    price: "from $70",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    name: "Budget Stay Lodge",
    distance: "1.2 km",
    price: "from $50",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
]

export const AccommodationTravel: React.FC = () => (
  <section
    id="accommodation"
    className="relative min-h-screen py-16 px-8 overflow-hidden bg-gradient-to-br from-[#b8a9d9]/40 via-[#e0d4f7]/35 to-[#f7f3fc]/30 text-gray-800"
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
        Accommodation &{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Travel
        </span>
      </motion.h2>

      {/* Introductory Paragraph */}
      <motion.p variants={item} className="text-xl italic text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
        Plan your visit with ease. Discover recommended hotels near the venue and essential travel information to make
        your journey seamless.
      </motion.p>

      {/* Hotels Section */}
      <motion.div variants={item} className="space-y-6">
        <h3 className="text-3xl font-bold text-gray-900 text-center">Recommended Hotels</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((h, index) => (
            <motion.a
              key={h.name}
              href={h.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-white/50 p-6 backdrop-blur-md shadow-xl border border-white/70 flex flex-col gap-4 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
            >
              <img
                src={h.image || "/placeholder.svg"}
                alt={h.name}
                className="w-full h-40 object-cover rounded-lg mb-2 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex items-center gap-3 text-lg font-semibold">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shadow-md"
                  variants={iconFloat}
                  animate="animate"
                  transition={{ ...iconFloatTransition, delay: index * 0.2 }}
                >
                  <Hotel className="h-5 w-5 text-white" />
                </motion.div>
                <h4 className="text-gray-900 group-hover:text-purple-700 transition-colors duration-300">{h.name}</h4>
              </div>
              <p className="text-base text-gray-700 italic">{h.distance} from venue</p>
              <p className="text-lg text-purple-600 font-bold">{h.price} / night</p>
              <Button
                variant="outline"
                className="mt-auto group relative overflow-hidden rounded-full border-2 border-purple-400 bg-white/70 text-purple-700 hover:bg-purple-100 hover:text-purple-800 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Book Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Travel Section */}
      <motion.div variants={item} className="space-y-6 pt-10">
        <h3 className="text-3xl font-bold text-gray-900 text-center">Getting There</h3>
        <div className="grid gap-8 sm:grid-cols-2">
          <motion.div
            className="group rounded-2xl bg-white/50 p-6 backdrop-blur-md shadow-xl border border-white/70 space-y-4 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center gap-3 text-lg font-semibold">
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center shadow-md"
                variants={iconFloat}
                animate="animate"
              >
                <Plane className="h-5 w-5 text-white" />
              </motion.div>
              <h4 className="text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">By Air</h4>
            </div>
            <p className="text-base text-gray-700 italic leading-relaxed">
              Islamabad International Airport (ISB) is 25 km from the city center. Taxis, ride-hailing services, and
              shuttle buses are readily available 24/7 for convenient transfers.
            </p>
            <Button
              variant="outline"
              className="mt-auto group relative overflow-hidden rounded-full border-2 border-indigo-400 bg-white/70 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Airport Info
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            className="group rounded-2xl bg-white/50 p-6 backdrop-blur-md shadow-xl border border-white/70 space-y-4 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center gap-3 text-lg font-semibold">
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-md"
                variants={iconFloat}
                animate="animate"
              >
                <MapPin className="h-5 w-5 text-white" />
              </motion.div>
              <h4 className="text-gray-900 group-hover:text-blue-700 transition-colors duration-300">Venue Details</h4>
            </div>
            <p className="text-base text-gray-700 italic leading-relaxed">
              The conference will be held at COMSATS University Islamabad, Park Road, Tarlai Kalan, Islamabad 45550,
              Pakistan. Easily accessible by public transport and private vehicles.
            </p>
            <Button
              variant="outline"
              className="mt-auto group relative overflow-hidden rounded-full border-2 border-blue-400 bg-white/70 text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View on Map
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>
        </div>
        <motion.div
          variants={item}
          className="bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/70 max-w-2xl mx-auto space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center flex items-center justify-center gap-2">
            <Car className="h-6 w-6 text-purple-600" /> Local Transport
          </h3>
          <p className="text-base text-gray-700 italic text-center">
            Islamabad offers various local transport options including ride-hailing apps (Careem, Uber), taxis, and a
            well-connected bus network.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="group relative overflow-hidden rounded-full border-2 border-purple-400 bg-white/70 text-purple-700 hover:bg-purple-100 hover:text-purple-800 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Ride-Hailing
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            <Button
              variant="outline"
              className="group relative overflow-hidden rounded-full border-2 border-purple-400 bg-white/70 text-purple-700 hover:bg-purple-100 hover:text-purple-800 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Bus Routes
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
)

export default AccommodationTravel
