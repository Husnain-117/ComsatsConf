"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  CreditCard,
  CheckCircle,
  UserPlus,
  ArrowRight,
  Calendar,
  Users,
  Award,
  Zap,
  X,
  Upload,
  Building,
  User,
  DollarSign,
} from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Checkbox } from "@/Components/ui/checkbox"

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
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const formVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -50,
    transition: { duration: 0.4, ease: "easeIn" },
  },
}

const commonBenefits = [
  "Abstract Book (digital)",
  "Conference Kit",
  "Certificate of Participation",
  "Entry to All Sessions",
  "Lunch & Tea Breaks",
  "Cultural Visit",
  "Networking Access",
]

const categories = [
  {
    type: "Pakistani Students",
    early: "Rs. 2000",
    regular: "Rs. 3000",
    popular: false,
    icon: <Users className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
  },
  {
    type: "Pakistani Professionals",
    early: "Rs. 3000",
    regular: "Rs. 5000",
    popular: true,
    icon: <Award className="h-6 w-6" />,
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
  },
  {
    type: "International Students",
    early: "$150",
    regular: "–",
    popular: false,
    icon: <Calendar className="h-6 w-6" />,
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
  },
  {
    type: "International Professionals",
    early: "$250",
    regular: "–",
    popular: false,
    icon: <Zap className="h-6 w-6" />,
    color: "from-pink-500 to-rose-600",
    bgColor: "from-pink-50 to-rose-50",
    borderColor: "border-pink-200",
  },
]

export const Registration: React.FC = () => {
  const [showForm, setShowForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    department: "",
    designation: "",
    cityCountry: "",
    category: "",
    participationMode: "",
    culturalVisit: "",
    totalFee: "",
    transactionId: "",
    paymentDate: "",
    bankName: "",
    proofOfPayment: null as File | null,
    confirmAccuracy: false,
    agreeConduct: false,
  })

  const handleRegisterClick = (categoryType: string) => {
    setSelectedCategory(categoryType)
    setFormData((prev) => ({ ...prev, category: categoryType }))
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setSelectedCategory("")
  }

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section
      id="registration"
      className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto space-y-16"
      >
        {/* Enhanced Heading */}
        <motion.div variants={item} className="text-center space-y-8">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-slate-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Register Now
            </span>
          </motion.h2>
          <motion.p variants={item} className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Secure your spot at the premier event for digital innovators. Join industry leaders, researchers, and
            visionaries shaping the future of technology.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div variants={item} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.type}
              variants={cardVariants}
              className={`relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden group cursor-pointer ${
                category.popular ? "ring-2 ring-blue-500 ring-offset-4 ring-offset-transparent" : ""
              }`}
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className={`bg-gradient-to-r ${category.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className="text-white/80"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {category.icon}
                    </motion.div>
                    <div className="text-right">
                      <motion.div
                        className="text-4xl font-black"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {category.early}
                      </motion.div>
                      <div className="text-sm opacity-80">Early Bird</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{category.type}</h3>
                  <p className="text-white/80 text-sm">
                    Regular price:{" "}
                    <span className={category.regular !== "–" ? "line-through" : ""}>{category.regular}</span>
                  </p>
                </div>
              </div>

              <div className="p-8">
                <Button
                  onClick={() => handleRegisterClick(category.type)}
                  className={`w-full bg-gradient-to-r ${category.color} text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                >
                  <motion.div className="flex items-center justify-center gap-2">
                    <UserPlus className="h-5 w-5" />
                    Register Now
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </motion.div>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Registration Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleCloseForm}
            >
              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-3xl z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">FSNC 2025 Registration</h3>
                      <p className="text-blue-100 text-sm">Category: {selectedCategory}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCloseForm}
                      className="text-white hover:bg-white/20 rounded-full p-2"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-200 pb-2">
                      <User className="h-5 w-5 text-blue-600" />
                      Personal Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                          placeholder="Enter your complete full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                          placeholder="your.email@example.com"
                        />
                        <p className="text-xs text-slate-500 mt-1">
                          We'll send confirmation and updates to this email address
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone (WhatsApp) *
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                          placeholder="+92 300 1234567 (WhatsApp preferred)"
                        />
                        <p className="text-xs text-slate-500 mt-1">WhatsApp number preferred for quick communication</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cityCountry" className="text-sm font-medium">
                          City & Country *
                        </Label>
                        <Input
                          id="cityCountry"
                          value={formData.cityCountry}
                          onChange={(e) => handleInputChange("cityCountry", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                          placeholder="e.g., Lahore, Pakistan"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-200 pb-2">
                      <Building className="h-5 w-5 text-blue-600" />
                      Professional Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="organization" className="text-sm font-medium">
                          Organization *
                        </Label>
                        <Input
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => handleInputChange("organization", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                          placeholder="Your university, company, or institution"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department" className="text-sm font-medium">
                          Department *
                        </Label>
                        <Input
                          id="department"
                          value={formData.department}
                          onChange={(e) => handleInputChange("department", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                          placeholder="Department or division name"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="designation" className="text-sm font-medium">
                          Designation *
                        </Label>
                        <Input
                          id="designation"
                          value={formData.designation}
                          onChange={(e) => handleInputChange("designation", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                          placeholder="Your current position or title"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Conference Details */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-200 pb-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      Conference Details
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Participation Mode *</Label>
                        <Select onValueChange={(value) => handleInputChange("participationMode", value)}>
                          <SelectTrigger className="rounded-lg border-slate-300 h-10">
                            <SelectValue placeholder="Select mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="oral">Oral Presentation</SelectItem>
                            <SelectItem value="poster">Poster Presentation</SelectItem>
                            <SelectItem value="participant">Participant Only</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Cultural Visit to Harappa? *</Label>
                        <Select onValueChange={(value) => handleInputChange("culturalVisit", value)}>
                          <SelectTrigger className="rounded-lg border-slate-300 h-10">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-200 pb-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                      Payment Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="totalFee" className="text-sm font-medium">
                          Total Fee Paid *
                        </Label>
                        <Input
                          id="totalFee"
                          value={formData.totalFee}
                          onChange={(e) => handleInputChange("totalFee", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                          placeholder="Enter amount paid (e.g., Rs. 2000)"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="transactionId" className="text-sm font-medium">
                          Transaction ID *
                        </Label>
                        <Input
                          id="transactionId"
                          value={formData.transactionId}
                          onChange={(e) => handleInputChange("transactionId", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                          placeholder="Bank reference or transaction number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="paymentDate" className="text-sm font-medium">
                          Payment Date *
                        </Label>
                        <Input
                          id="paymentDate"
                          type="date"
                          value={formData.paymentDate}
                          onChange={(e) => handleInputChange("paymentDate", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bankName" className="text-sm font-medium">
                          Bank Name *
                        </Label>
                        <Input
                          id="bankName"
                          value={formData.bankName}
                          onChange={(e) => handleInputChange("bankName", e.target.value)}
                          className="rounded-lg border-slate-300 focus:border-blue-500 h-10"
                          placeholder="Name of your bank (e.g., HBL, UBL)"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Upload Payment Proof *</Label>
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                        <Upload className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                        <p className="text-slate-600 text-sm">Click to upload (JPG, PNG, PDF)</p>
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={(e) => handleInputChange("proofOfPayment", e.target.files?.[0] || null)}
                          className="hidden"
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        Accepted formats: JPG, PNG, PDF (Max size: 5MB). Please ensure the transaction details are
                        clearly visible.
                      </p>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-200 pb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      Consent
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="confirmAccuracy"
                          checked={formData.confirmAccuracy}
                          onCheckedChange={(checked) => handleInputChange("confirmAccuracy", checked as boolean)}
                          className="mt-1"
                        />
                        <Label htmlFor="confirmAccuracy" className="text-sm leading-relaxed">
                          I confirm that the information provided is accurate.
                        </Label>
                      </div>
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="agreeConduct"
                          checked={formData.agreeConduct}
                          onCheckedChange={(checked) => handleInputChange("agreeConduct", checked as boolean)}
                          className="mt-1"
                        />
                        <Label htmlFor="agreeConduct" className="text-sm leading-relaxed">
                          I agree to abide by the code of conduct of FSNC 2025.
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-slate-200">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={!formData.confirmAccuracy || !formData.agreeConduct}
                    >
                      <motion.div className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Submit Registration
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </motion.div>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Registration Includes & Payment Details */}
        <motion.div
          variants={item}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Registration Includes</h3>
            <ul className="space-y-3">
              {commonBenefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Important Information</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 border border-slate-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="h-6 w-6 text-blue-600" />
                <span className="font-bold text-slate-800">Payment Methods</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We accept bank transfers and online payments. Detailed payment instructions will be provided after
                registration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-6 w-6 text-amber-600" />
                <span className="font-bold text-amber-800">Registration Deadline</span>
              </div>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">October 6, 2025</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Registration
