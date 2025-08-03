"use client"
import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/Components/ui/button"
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
  const targetDate = new Date("2025-10-13T09:00:00")
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

  const glowVariants: Variants = {
    animate: {
      boxShadow: [
        "0 0 30px rgba(59, 130, 246, 0.4)",
        "0 0 60px rgba(59, 130, 246, 0.7)",
        "0 0 30px rgba(59, 130, 246, 0.4)",
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
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-8 py-16 text-white font-display">
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-blue-900/10 pointer-events-none z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-indigo-900/10 pointer-events-none z-[2]" />

        {/* Animated color orbs for visual interest */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Main content container */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center space-y-8 text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Date Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl"
          >
            <Calendar className="w-5 h-5 text-blue-400" />
            <span className="text-xl font-bold text-blue-300">
              13-14<sup className="text-sm">th</sup>
            </span>
            <span className="text-lg font-medium">October 2025</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-10">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center leading-tight tracking-tight"
              variants={floatVariants}
              animate="animate"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-white drop-shadow-lg">Advancing&nbsp;</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Food Science &amp; Nutrition
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mt-8"
              variants={itemVariants}
            >
              Join global and local experts to bridge research, policy, and practice in food science and nutrition at <span className="font-semibold text-blue-300">COMSATS University Islamabad (Sahiwal Campus)</span> on <span className="font-semibold text-blue-300">October&nbsp;13–14,&nbsp;2025</span> in celebration of <span className="font-semibold text-purple-300">World Food Day&nbsp;2025</span>, fostering innovation, interdisciplinary collaboration, and research-to-policy translation for a healthier, food-secure future.
            </motion.p>
          </motion.div>

          {/* Three Small Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto mt-6"
          >
            {[
              { icon: Users, title: "Network", desc: "500+ Attendees", color: "from-blue-500 to-indigo-600" },
              { icon: Sparkles, title: "Innovate", desc: "20+ Speakers", color: "from-indigo-500 to-purple-600" },
              { icon: Award, title: "Excel", desc: "15+ Sessions", color: "from-purple-500 to-violet-600" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/20 shadow-xl hover:shadow-2xl relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
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
                className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:border-white/50 transition-all duration-300 shadow-lg"
                animate={{
                  y: [0, 8, 0],
                  boxShadow: [
                    "0 4px 20px rgba(59, 130, 246, 0.2)",
                    "0 8px 30px rgba(59, 130, 246, 0.4)",
                    "0 4px 20px rgba(59, 130, 246, 0.2)",
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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80 px-8 py-16 text-slate-800 font-display">
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center space-y-12 text-center max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Enhanced Event Details */}
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
                text: "October 13-14, 2025",
                color: "text-blue-700",
                bg: "from-blue-100/90 to-indigo-100/90",
                hoverBg: "from-blue-500/20 to-indigo-500/20",
              },
              {
                icon: MapPin,
                text: "Sahiwal, Pakistan",
                color: "text-indigo-700",
                bg: "from-indigo-100/90 to-purple-100/90",
                hoverBg: "from-indigo-500/20 to-purple-500/20",
              },
              {
                icon: Users,
                text: "500+ Attendees",
                color: "text-purple-700",
                bg: "from-purple-100/90 to-violet-100/90",
                hoverBg: "from-purple-500/20 to-violet-500/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`group flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r ${item.bg} hover:${item.hoverBg} backdrop-blur-md border border-white/50 hover:border-white/70 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.08, y: -4, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.25)" }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div className="group-hover:animate-none">
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
              className="flex flex-wrap items-center justify-center gap-4 md:gap-8 p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-white/50 shadow-2xl"
              variants={glowVariants}
              animate="animate"
            >
              {[
                {
                  value: timeLeft.days,
                  label: "Days",
                  color: "text-white",
                  bg: "from-blue-600/90 to-indigo-600/90",
                  accent: "from-blue-500 to-indigo-500",
                },
                {
                  value: timeLeft.hours,
                  label: "Hours",
                  color: "text-white",
                  bg: "from-indigo-600/90 to-purple-600/90",
                  accent: "from-indigo-500 to-purple-500",
                },
                {
                  value: timeLeft.minutes,
                  label: "Minutes",
                  color: "text-white",
                  bg: "from-purple-600/90 to-violet-600/90",
                  accent: "from-purple-500 to-violet-500",
                },
                {
                  value: timeLeft.seconds,
                  label: "Seconds",
                  color: "text-white",
                  bg: "from-violet-600/90 to-slate-600/90",
                  accent: "from-violet-500 to-slate-500",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.bg} backdrop-blur-sm border border-white/30 group-hover:border-white/50 transition-all duration-300 shadow-lg`}
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
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                  </div>
                  <motion.span className="text-sm md:text-base font-semibold uppercase tracking-wider text-slate-700 mt-3 group-hover:text-slate-900 transition-colors duration-300">
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
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-blue-500/25 hover:scale-105 border-0"
            >
              <motion.a
                href="#registration"
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
              </motion.a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="group w-full sm:w-auto rounded-full border-2 border-slate-300 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg font-bold text-slate-700 hover:text-slate-900 shadow-xl transition-all duration-300 hover:border-slate-400 hover:bg-white/90 hover:scale-105"
            >
              <motion.a
                href="#call-for-papers"
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
