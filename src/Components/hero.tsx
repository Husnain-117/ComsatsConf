"use client"

import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/Components/ui/button"
import { Calendar, Award, Clock, ArrowRight, Sparkles } from "lucide-react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const handleDownloadPDF = async () => {
    setDownloading(true)
    setDownloaded(false)

    const toastId = toast.info("Starting download...", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    })

    try {
      const response = await fetch("/FSNC 2025.pdf")
      if (!response.ok) throw new Error("File not found")

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "FSNC 2025.pdf"
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)

      setDownloaded(true)
      toast.update(toastId, { render: "Download complete!", type: "success", autoClose: 1500, isLoading: false })
      setTimeout(() => setDownloaded(false), 1500)
    } catch (e) {
      toast.update(toastId, { render: "PDF download failed.", type: "error", autoClose: 1500, isLoading: false })
    } finally {
      setDownloading(false)
    }
  }

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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.4,
      },
    },
  }

  const glowVariants: Variants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.3)",
        "0 0 40px rgba(59, 130, 246, 0.5)",
        "0 0 20px rgba(59, 130, 246, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-4 font-display"
        style={{ backgroundColor: "#ffffff" }}
      >
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Date Badge - moved up slightly */}
          <motion.div
            variants={itemVariants}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100/90 to-indigo-100/90 hover:from-blue-500/20 hover:to-indigo-500/20 backdrop-blur-md border border-white/50 hover:border-white/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl -mt-4"
          >
            <Calendar className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-base font-semibold text-blue-700 group-hover:text-opacity-90">
              October 13-14, 2025
            </span>
          </motion.div>

          {/* Main Heading - reduced size */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 text-[#1a2233] drop-shadow-[0_2px_8px_rgba(0,0,0,0.09)]"
          >
            Advancing <span className="text-blue-700">Food Science & Nutrition</span>
          </motion.h1>

          {/* Subtitle - made smaller and more compact */}
          <motion.p
            variants={itemVariants}
            className="mb-6 text-sm md:text-base lg:text-lg font-medium text-[#233047]/90 leading-relaxed max-w-4xl"
          >
            Join global and local experts to bridge research, policy, and practice in food science and nutrition at{" "}
            <span className="font-semibold text-blue-800">COMSATS University Islamabad (Sahiwal Campus)</span> on{" "}
            <span className="font-semibold text-blue-800">October 13–14, 2025</span> in celebration of{" "}
            <span className="font-semibold text-fuchsia-700">World Food Day 2025</span>, fostering innovation,
            interdisciplinary collaboration, and research-to-policy transition for a healthier, food-secure future.
          </motion.p>

          {/* Compact Countdown Timer */}
          <motion.div variants={itemVariants} className="relative mb-6">
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 md:gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/50 shadow-xl"
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
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
                >
                  <div
                    className={`relative p-3 md:p-4 rounded-xl bg-gradient-to-br ${item.bg} backdrop-blur-sm border border-white/30 group-hover:border-white/50 transition-all duration-200 shadow-lg`}
                  >
                    <motion.span
                      className={`text-2xl md:text-3xl lg:text-4xl font-black ${item.color} block leading-none`}
                      key={item.value}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25, duration: 0.3 }}
                    >
                      {formatTime(item.value)}
                    </motion.span>
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-200`}
                    />
                  </div>
                  <motion.span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-700 mt-2 group-hover:text-slate-900 transition-colors duration-200">
                    {item.label}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Compact CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto"
          >
            <Button
              asChild
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-base font-bold text-white shadow-xl transition-all duration-300 hover:shadow-blue-500/25 hover:scale-102 border-0"
            >
              <motion.a
                href="#registration"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2"
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="group-hover:animate-none"
                >
                  <Award className="w-4 h-4" />
                </motion.div>
                Register Now
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </motion.a>
            </Button>

            <Button
              variant="outline"
              className="group w-full sm:w-auto rounded-full border-2 border-slate-300 bg-white/80 backdrop-blur-sm px-6 py-3 text-base font-bold text-slate-700 hover:text-slate-900 shadow-lg transition-all duration-200 hover:border-slate-400 hover:bg-white/90 hover:scale-102 flex items-center gap-2 relative"
              onClick={handleDownloadPDF}
              disabled={downloading}
            >
              {downloading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Preparing PDF...
                </span>
              ) : downloaded ? (
                <span className="flex items-center gap-2 text-emerald-600">
                  <Sparkles className="w-4 h-4 animate-bounce" />
                  Downloaded!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Download PDF
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <ToastContainer />
    </>
  )
}
