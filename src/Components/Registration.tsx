"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { CreditCard, Banknote, Wallet, CheckCircle, XCircle, UserPlus, ArrowRight, Info } from "lucide-react"
import { Button } from "@/Components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/Components/ui/dialog" // Assuming shadcn/ui Dialog

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const categories = [
  {
    type: "Student",
    early: "$100",
    regular: "$150",
    benefits: ["Access to all sessions", "Digital proceedings", "Student networking events"],
  },
  {
    type: "Academic",
    early: "$150",
    regular: "$200",
    benefits: [
      "All Student benefits",
      "Networking reception",
      "Certificate of attendance",
      "Access to research papers",
    ],
  },
  {
    type: "Industry",
    early: "$250",
    regular: "$300",
    benefits: ["All Academic benefits", "Exclusive workshop access", "VIP lounge access", "Priority seating"],
  },
]

const paymentOptions = [
  { label: "Credit Card", icon: <CreditCard className="h-6 w-6 text-purple-600" /> },
  { label: "Bank Transfer", icon: <Banknote className="h-6 w-6 text-indigo-600" /> },
  { label: "Digital Wallet", icon: <Wallet className="h-6 w-6 text-blue-600" /> },
]

export const Registration: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // In a real application, you would send form data to a server here.
    // For this example, we just open the dialog.
    setIsModalOpen(true)
  }

  const currentBenefits = selectedRole ? categories.find((cat) => cat.type === selectedRole)?.benefits || [] : []

  return (
    <section
      id="registration"
      className="relative min-h-screen py-16 px-8 overflow-hidden bg-gradient-to-br from-purple-100/80 via-indigo-200/70 to-blue-100/80 text-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Register Now
          </span>
        </motion.h2>

        {/* Motivational Paragraph */}
        <motion.p
          variants={item}
          className="text-xl italic text-gray-600 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Secure your spot at the premier event for digital innovators. Don't miss out on groundbreaking insights,
          unparalleled networking, and a chance to shape the future.
        </motion.p>

        {/* Registration Form */}
        <motion.div
          variants={item}
          className="bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/70 max-w-2xl mx-auto space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center">Your Details</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 bg-white/80 text-gray-900"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 bg-white/80 text-gray-900"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Select Your Role
              </label>
              <select
                id="role"
                name="role"
                required
                onChange={handleRoleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 bg-white/80 text-gray-900"
              >
                <option value="">-- Please select --</option>
                {categories.map((cat) => (
                  <option key={cat.type} value={cat.type}>
                    {cat.type} ({cat.early} Early-bird)
                  </option>
                ))}
              </select>
            </div>

            {selectedRole && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-purple-50/70 border border-purple-200 rounded-lg p-4 text-purple-800 shadow-inner"
              >
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Info className="h-5 w-5" /> Benefits for {selectedRole}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {currentBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </motion.div>
            )}

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
                  <UserPlus className="w-5 h-5" />
                </motion.div>
                Complete Registration
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

        {/* Payment Options (Small Cards) */}
        <motion.div variants={item} className="mx-auto flex flex-wrap justify-center gap-6 max-w-4xl pt-6">
          {paymentOptions.map((p, index) => (
            <motion.div
              key={p.label}
              className="group flex flex-col items-center gap-3 rounded-xl bg-white/50 px-6 py-5 backdrop-blur-md border border-white/70 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-200 to-indigo-200 flex items-center justify-center mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {p.icon}
              </motion.div>
              <span className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                {p.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Registration Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white/90 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-white/80">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-500" /> Registration Successful!
            </DialogTitle>
            <DialogDescription className="text-gray-700 italic mt-2">
              Thank you for your interest in registering for the conference. This is a placeholder for the actual
              registration form.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-gray-800 font-semibold">Your registration request has been noted.</p>
            <p className="text-gray-600 text-sm mt-2">
              A full registration form will appear here in a live environment.
            </p>
          </div>
          <DialogFooter>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-purple-500/25"
            >
              <motion.div className="flex items-center gap-2">
                Close
                <XCircle className="w-4 h-4" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Registration
