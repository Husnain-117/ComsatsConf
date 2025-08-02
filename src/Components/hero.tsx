"use client"

import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { Button } from "../Components/ui/button"
import FallingDotsBackground from "../aniimated-background"
import { Calendar, MapPin, Users, Award, Clock, ArrowRight, Sparkles, ChevronDown } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date()
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }
  return timeLeft
}

const formatTime = (time: number) => String(time).padStart(2, "0")

export default function Hero() {
  const targetDate = new Date("2025-09-25T09:00:00")
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
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

  const floatVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const scrollVariants: Variants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const glowVariants: Variants = {
    animate: {
      boxShadow: [
        "0 0 30px rgba(99, 102, 241, 0.4)",
        "0 0 60px rgba(99, 102, 241, 0.7)",
        "0 0 30px rgba(99, 102, 241, 0.4)",
      ],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      {/* First Section - Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#9d8fb8]/45 via-[#b8a9d9]/40 to-[#e0d4f7]/35 backdrop-blur-md px-8 py-16 text-white font-display">
        {/* Enhanced animated background */}
        <FallingDotsBackground
          colors={["#7B68EE", "#9370DB", "#BA55D3", "#DA70D6", "#DDA0DD", "#E6E6FA", "#F0E68C"]}
          dotCount={60}
        />

        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-600/10 via-transparent to-purple-400/8 pointer-events-none z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/8 via-transparent to-pink-400/8 pointer-events-none z-[2]" />

        {/* Animated color orbs for visual interest */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-300/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-300/15 to-purple-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-violet-300/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Main content container */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center space-y-8 text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Date Badge - Smaller */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl"
          >
            <Calendar className="w-5 h-5 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              25<sup className="text-sm">th</sup>
            </span>
            <span className="text-lg font-medium">September 2025</span>
          </motion.div>

          {/* Main Heading - Perfectly Centered */}
          <motion.div variants={itemVariants} className="space-y-10">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center leading-tight tracking-tight"
              variants={floatVariants}
              animate="animate"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-white drop-shadow-lg">Crafting the&nbsp;Digital </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                Future
              </span>
            </motion.h1>

            {/* Italic Text */}
            <motion.p
              className="text-base md:text-lg italic text-white/70 max-w-3xl mx-auto leading-relaxed mt-8"
              variants={itemVariants}
            >
              Join the most innovative designers and creators for an unforgettable experience that will transform your
              creative journey
            </motion.p>
          </motion.div>

          {/* Three Small Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto mt-6"
          >
            {[
              { icon: Users, title: "Network", desc: "Connect globally", color: "from-cyan-400 to-blue-500" },
              { icon: Sparkles, title: "Innovate", desc: "Create the future", color: "from-purple-400 to-pink-500" },
              { icon: Award, title: "Excel", desc: "Master your craft", color: "from-yellow-400 to-orange-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group p-4 rounded-xl bg-white/25 backdrop-blur-md border border-white/40 hover:border-white/60 transition-all duration-500 hover:bg-white/35 shadow-xl hover:shadow-2xl relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 group-hover:text-white transition-colors duration-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Scroll Down Indicator */}
          <motion.div variants={itemVariants} className="mt-12">
            <motion.div
              className="flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:border-white/50 transition-all duration-300 shadow-lg"
                animate={{
                  y: [0, 8, 0],
                  boxShadow: [
                    "0 4px 20px rgba(99, 102, 241, 0.2)",
                    "0 8px 30px rgba(99, 102, 241, 0.4)",
                    "0 4px 20px rgba(99, 102, 241, 0.2)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="w-7 h-7 text-white/80 group-hover:text-white transition-colors duration-300" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Second Section - Countdown and Details */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200/80 via-purple-100/60 to-pink-200/80 px-8 py-16 text-white font-display">
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center space-y-12 text-center max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Enhanced Event Details with Professional Animations */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Calendar,
                text: "September 25, 2025",
                color: "text-indigo-700",
                bg: "from-indigo-100/90 to-blue-100/90",
                hoverBg: "from-indigo-500/30 to-blue-500/30",
              },
              {
                icon: MapPin,
                text: "New York City",
                color: "text-emerald-700",
                bg: "from-emerald-100/90 to-green-100/90",
                hoverBg: "from-emerald-500/30 to-green-500/30",
              },
              {
                icon: Users,
                text: "500+ Designers",
                color: "text-amber-700",
                bg: "from-amber-100/90 to-orange-100/90",
                hoverBg: "from-amber-500/30 to-orange-500/30",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`group flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r ${item.bg} hover:${item.hoverBg} backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.08, y: -4, boxShadow: "0 8px 25px rgba(255, 255, 255, 0.25)" }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  
                  className="group-hover:animate-none"
                >
                  <item.icon
                    className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </motion.div>
                <span className={`text-lg font-semibold ${item.color} group-hover:text-opacity-90`}>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 md:gap-8 p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-2xl"
              variants={glowVariants}
              animate="animate"
            >
              {[
                {
                  value: timeLeft.days,
                  label: "Days",
                  color: "text-white",
                  bg: "from-indigo-700/70 to-purple-700/70",
                  accent: "from-indigo-500 to-purple-500",
                },
                {
                  value: timeLeft.hours,
                  label: "Hours",
                  color: "text-white",
                  bg: "from-purple-700/70 to-pink-700/70",
                  accent: "from-purple-500 to-pink-500",
                },
                {
                  value: timeLeft.minutes,
                  label: "Minutes",
                  color: "text-white",
                  bg: "from-pink-700/70 to-rose-700/70",
                  accent: "from-pink-500 to-rose-500",
                },
                {
                  value: timeLeft.seconds,
                  label: "Seconds",
                  color: "text-white",
                  bg: "from-rose-700/70 to-orange-700/70",
                  accent: "from-rose-500 to-orange-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.bg} backdrop-blur-sm border border-slate-200/60 group-hover:border-white/40 transition-all duration-300 shadow-lg`}
                  >
                    <motion.span
                      className={`text-4xl md:text-6xl lg:text-7xl font-black ${item.color} block leading-none`}
                      key={item.value}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {formatTime(item.value)}
                    </motion.span>
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                  </div>
                  <motion.span className="text-sm md:text-base font-semibold uppercase tracking-wider text-slate-800 mt-3 group-hover:text-slate-900 transition-colors duration-300">
                    {item.label}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Professional CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-md mx-auto"
          >
            <Button
              asChild
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-4 text-lg font-bold text-white hover:text-[#2d1842] shadow-2xl transition-all duration-500 hover:shadow-indigo-500/25 hover:scale-105 border-0"
            >
              <motion.a
                href="#register"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="group-hover:animate-none"
                >
                  <Award className="w-5 h-5" />
                </motion.div>
                Register Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="group w-full sm:w-auto rounded-full border-2 border-slate-500/80 bg-white/60 backdrop-blur-sm px-8 py-4 text-lg font-bold text-slate-800 hover:text-[#2d1842] shadow-xl transition-all duration-300 hover:border-slate-600/90 hover:bg-white/80 hover:scale-105"
            >
              <motion.a
                href="#submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2"
              >
                <Clock className="w-5 h-5" />
                Submit Abstract
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
