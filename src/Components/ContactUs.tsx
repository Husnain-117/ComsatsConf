"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  Clock,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  CheckCircle,
  Zap,
  Heart,
  Calendar,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Textarea } from "@/Components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, duration: 0.8, ease: "easeOut" } },
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

const contactMethods = [
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "info@fsnc2025.com",
    subContact: "registration@fsnc2025.com",
    color: "from-blue-600 to-indigo-700",
    accent: "from-blue-400 to-indigo-500",
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+92 51 9049 000",
    subContact: "+92 300 1234567",
    color: "from-emerald-600 to-teal-700",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Visit Us",
    description: "Conference venue location",
    contact: "COMSATS University Islamabad",
    subContact: "Park Road, Tarlai Kalan, Islamabad",
    color: "from-purple-600 to-violet-700",
    accent: "from-purple-400 to-violet-500",
  },
]

const socialLinks = [
  { icon: <Facebook className="h-6 w-6" />, name: "Facebook", color: "hover:text-blue-600", url: "#" },
  { icon: <Twitter className="h-6 w-6" />, name: "Twitter", color: "hover:text-sky-500", url: "#" },
  { icon: <Linkedin className="h-6 w-6" />, name: "LinkedIn", color: "hover:text-blue-700", url: "#" },
  { icon: <Instagram className="h-6 w-6" />, name: "Instagram", color: "hover:text-pink-600", url: "#" },
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Reset form or show success message
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto space-y-20"
      >
        {/* Enhanced Heading */}
        <motion.div variants={item} className="text-center space-y-8">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-slate-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          <motion.p variants={item} className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Have questions about the conference? Need assistance with registration? Our dedicated team is here to help
            you every step of the way.
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div variants={item} className="grid lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={cardVariants}
              className="group bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03, y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Header */}
              <div className={`relative bg-gradient-to-br ${method.color} p-8 text-white overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

                <div className="relative z-10 space-y-4">
                  <motion.div
                    className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm inline-block"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {method.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                    <p className="text-white/90">{method.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${method.accent}`} />
                    <span className="font-semibold text-slate-800">{method.contact}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${method.accent} opacity-60`} />
                    <span className="text-slate-600">{method.subContact}</span>
                  </div>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${method.color} text-white font-bold rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all duration-300 mt-6`}
                >
                  <motion.div className="flex items-center justify-center gap-2">
                    {method.icon}
                    Contact Now
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 overflow-hidden"
          >
            {/* Enhanced Form Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white">
              <div className="flex items-center gap-4">
                <motion.div
                  className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MessageSquare className="h-8 w-8" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Send Us a Message</h3>
                  <p className="text-blue-100 text-lg">We'll get back to you within 24 hours</p>
                  <div className="flex items-center gap-2 mt-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-sm text-blue-100">Guaranteed response</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Form Content */}
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Personal Information Section */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 pb-4 border-b-2 border-blue-100">
                  <div className="p-3 bg-blue-100 rounded-2xl">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">Personal Information</h4>
                    <p className="text-slate-600 text-sm">Tell us who you are</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <User className="h-4 w-4 text-blue-600" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-12 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="Enter your complete full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      We'll send our response to this email address
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Professional Information Section */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 pb-4 border-b-2 border-emerald-100">
                  <div className="p-3 bg-emerald-100 rounded-2xl">
                    <Building className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">Professional Information</h4>
                    <p className="text-slate-600 text-sm">Help us understand your background</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <Building className="h-4 w-4 text-emerald-600" />
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      className="h-12 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                      placeholder="Your university, company, or institution"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-emerald-600" />
                      Inquiry Type *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger className="h-12 rounded-xl border-2 border-slate-200 focus:border-emerald-500">
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="registration">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Registration Support
                          </div>
                        </SelectItem>
                        <SelectItem value="sponsorship">
                          <div className="flex items-center gap-2">
                            <Heart className="h-4 w-4" />
                            Sponsorship Opportunities
                          </div>
                        </SelectItem>
                        <SelectItem value="accommodation">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Accommodation & Travel
                          </div>
                        </SelectItem>
                        <SelectItem value="program">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Conference Program
                          </div>
                        </SelectItem>
                        <SelectItem value="general">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            General Inquiry
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>

              {/* Message Section */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 pb-4 border-b-2 border-purple-100">
                  <div className="p-3 bg-purple-100 rounded-2xl">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">Your Message</h4>
                    <p className="text-slate-600 text-sm">Please provide details about your inquiry</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="h-12 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                      placeholder="Brief subject of your message"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 min-h-[140px] resize-none transition-all duration-300"
                      placeholder="Please provide detailed information about your inquiry. The more specific you are, the better we can assist you..."
                      required
                    />
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Minimum 20 characters recommended for better assistance
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Submit Button */}
              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.div className="flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Zap className="w-6 h-6" />
                        </motion.div>
                        <span>Sending Your Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>Send Message</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <ArrowRight className="w-6 h-6" />
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                </Button>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Your message will be encrypted and sent securely
                  </p>
                </div>
              </motion.div>
            </form>
          </motion.div>

          {/* Sidebar Information */}
          <div className="space-y-8">
            {/* Office Hours */}
            <motion.div
              variants={cardVariants}
              className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-emerald-200" />
                  <h3 className="text-xl font-bold">Office Hours</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {officeHours.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    className="flex justify-between items-center p-3 bg-slate-50 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="font-medium text-slate-800">{schedule.day}</span>
                    <span className="text-slate-600">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={cardVariants}
              className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-violet-700 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-purple-200" />
                  <h3 className="text-xl font-bold">Follow Us</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-6">Stay updated with the latest conference news and announcements</p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className={`flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors ${social.color}`}
                      whileHover={{ scale: 1.05, x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {social.icon}
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Response Promise */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 text-white text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Quick Response Promise</h3>
              <p className="text-blue-100 leading-relaxed">
                We value your time and are committed to responding to all inquiries within 24 hours during business
                days.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-blue-200">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Guaranteed Response</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
