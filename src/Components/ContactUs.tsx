"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Mail, Phone, SendHorizonal, MapPin, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/Components/ui/button"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}



export const ContactUs: React.FC = () => (
  <section
    id="contact"
    className="relative min-h-screen py-16 px-8 overflow-hidden bg-gradient-to-br from-[#6d7fa3] via-[#b8a9d9] to-[#e0d4f7] text-gray-900"
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
      className="relative z-10 max-w-7xl mx-auto space-y-12 text-center"
    >
      {/* Heading */}
      <motion.h2
        variants={item}
        className="text-center text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Get In{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Touch
        </span>
      </motion.h2>

      {/* Introductory Paragraph */}
      <motion.p variants={item} className="text-xl italic text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Have questions, feedback, or collaboration inquiries? Reach out to us through the channels below, or fill out
        the form, and we'll get back to you promptly.
      </motion.p>

      {/* Contact Info Cards */}
      <motion.div variants={item} className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
        {[
          {
            icon: <Mail className="h-7 w-7 text-purple-600" />,
            title: "Email Us",
            value: "conf2026@cui.edu.pk",
            link: "mailto:conf2026@cui.edu.pk",
          },
          {
            icon: <Phone className="h-7 w-7 text-indigo-600" />,
            title: "Call Us",
            value: "+92 51 1234567",
            link: "tel:+92511234567",
          },
          {
            icon: <MapPin className="h-7 w-7 text-blue-600" />,
            title: "Our Location",
            value: "Islamabad, Pakistan",
            link: "https://maps.app.goo.gl/yourlocation", // Replace with actual map link
          },
        ].map((info, index) => (
          <motion.a
            key={info.title}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl bg-white/50 p-6 backdrop-blur-md shadow-lg border border-white/70 flex flex-col items-center text-center gap-3 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-md"
              animate={{
                y: [-3, 3, -3],
                transition: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
              }}
            >
              {info.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
              {info.title}
            </h3>
            <p className="text-gray-700 text-base italic">{info.value}</p>
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        variants={item}
        className="bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/70 max-w-2xl mx-auto space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 text-center flex items-center justify-center gap-2">
          <MessageSquare className="h-6 w-6 text-purple-600" /> Send Us a Message
        </h3>
        <form className="grid gap-5 text-left" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-lg bg-white/80 px-4 py-3 text-base placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 border border-gray-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-lg bg-white/80 px-4 py-3 text-base placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 border border-gray-300"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="rounded-lg bg-white/80 px-4 py-3 text-base placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 border border-gray-300 resize-y"
            required
          />
          <Button
            type="submit"
            size="lg"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-500 hover:shadow-purple-500/25 hover:scale-105 border-0 w-full"
          >
            <motion.div className="flex items-center justify-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="group-hover:animate-none"
              >
                <SendHorizonal className="w-5 h-5" />
              </motion.div>
              Send Message
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </form>
      </motion.div>
    </motion.div>
  </section>
)

export default ContactUs
