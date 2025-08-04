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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      // Omit proofOfPayment for now
      const { proofOfPayment, ...submissionData } = formData;
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({
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
          proofOfPayment: null,
          confirmAccuracy: false,
          agreeConduct: false,
        });
        setShowForm(false); // Optionally close form
        console.log('Registration successful!');
      } else {
        setError('Registration failed. Please try again.');
        console.error('Registration failed.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
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
      />
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
            Join us for an extraordinary conference experience. Choose your registration category and secure your spot
            today.
          </motion.p>
        </motion.div>

        {/* Enhanced Registration Categories */}
        <motion.div variants={item} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.type}
              variants={cardVariants}
              className={`group relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 ${
                category.borderColor
              } overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-3xl ${
                category.popular ? "ring-4 ring-blue-500 ring-offset-4 ring-offset-transparent scale-105" : ""
              }`}
              whileHover={{ scale: category.popular ? 1.08 : 1.05, y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleRegisterClick(category.type)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`relative bg-gradient-to-br ${category.color} p-8 text-white overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
                
                <div className="relative z-10 text-center space-y-4">
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold leading-tight">{category.type}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-black text-slate-800 mb-2">{category.early}</div>
                    <div className="text-sm text-slate-600 font-medium">Early Bird Rate</div>
                    {category.regular !== "–" && (
                      <div className="mt-2">
                        <div className="text-lg font-bold text-slate-500 line-through">{category.regular}</div>
                        <div className="text-xs text-slate-500">Regular Rate</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 text-sm">Includes:</h4>
                  <ul className="space-y-2">
                    {commonBenefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                    <li className="text-xs text-slate-500 italic">+ {commonBenefits.length - 4} more benefits</li>
                  </ul>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${category.color} text-white font-bold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                  onClick={() => handleRegisterClick(category.type)}
                >
                  <motion.div className="flex items-center justify-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    Register Now
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

        {/* Enhanced Registration Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseForm}
            >
              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Enhanced Form Header */}
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        <UserPlus className="h-8 w-8" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold">Conference Registration</h3>
                        <p className="text-blue-100">Food Science & Nutrition Conference 2025</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                            {selectedCategory}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCloseForm}
                      className="text-white hover:bg-white/20 rounded-full p-3 transition-all duration-300"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                </div>

                {/* Enhanced Form Content */}
                <div className="max-h-[calc(90vh-200px)] overflow-y-auto">
                  <form className="p-8 space-y-8" onSubmit={handleSubmit}>

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
                          <p className="text-slate-600 text-sm">Please provide your personal details</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <User className="h-4 w-4 text-blue-600" />
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            className="h-12 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            placeholder="Enter your complete full name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-blue-600" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="h-12 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            placeholder="your.email@example.com"
                          />
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            We'll send confirmation and updates to this email
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <Zap className="h-4 w-4 text-blue-600" />
                            Phone (WhatsApp) *
                          </Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="h-12 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            placeholder="+92 300 1234567"
                          />
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            WhatsApp number preferred for quick communication
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cityCountry" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <Building className="h-4 w-4 text-blue-600" />
                            City & Country *
                          </Label>
                          <Input
                            id="cityCountry"
                            value={formData.cityCountry}
                            onChange={(e) => handleInputChange("cityCountry", e.target.value)}
                            className="h-12 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                            placeholder="e.g., Lahore, Pakistan"
                          />
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
                          <p className="text-slate-600 text-sm">Tell us about your professional background</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="organization" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <Building className="h-4 w-4 text-emerald-600" />
                            Organization *
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
                          <Label htmlFor="department" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <Users className="h-4 w-4 text-emerald-600" />
                            Department *
                          </Label>
                          <Input
                            id="department"
                            value={formData.department}
                            onChange={(e) => handleInputChange("department", e.target.value)}
                            className="h-12 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                            placeholder="Department or division name"
                          />
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="designation" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <Award className="h-4 w-4 text-emerald-600" />
                            Designation *
                          </Label>
                          <Input
                            id="designation"
                            value={formData.designation}
                            onChange={(e) => handleInputChange("designation", e.target.value)}
                            className="h-12 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                            placeholder="Your current position or title"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Conference Options Section */}
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center gap-3 pb-4 border-b-2 border-purple-100">
                        <div className="p-3 bg-purple-100 rounded-2xl">
                          <Calendar className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-800">Conference Options</h4>
                          <p className="text-slate-600 text-sm">Customize your conference experience</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <Users className="h-4 w-4 text-purple-600" />
                            Participation Mode *
                          </Label>
                          <Select onValueChange={(value) => handleInputChange("participationMode", value)}>
                            <SelectTrigger className="h-12 rounded-xl border-2 border-slate-200 focus:border-purple-500">
                              <SelectValue placeholder="Select participation mode" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="in-person">In-Person Attendance</SelectItem>
                              <SelectItem value="virtual">Virtual Attendance</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-purple-600" />
                            Cultural Visit *
                          </Label>
                          <Select onValueChange={(value) => handleInputChange("culturalVisit", value)}>
                            <SelectTrigger className="h-12 rounded-xl border-2 border-slate-200 focus:border-purple-500">
                              <SelectValue placeholder="Join cultural visit?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes, I want to join</SelectItem>
                              <SelectItem value="no">No, thank you</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>

                    {/* Payment Information Section */}
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3 pb-4 border-b-2 border-orange-100">
                        <div className="p-3 bg-orange-100 rounded-2xl">
                          <DollarSign className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-800">Payment Information</h4>
                          <p className="text-slate-600 text-sm">Provide your payment details</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="totalFee" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-orange-600" />
                            Total Fee Paid *
                          </Label>
                          <Input
                            id="totalFee"
                            value={formData.totalFee}
                            onChange={(e) => handleInputChange("totalFee", e.target.value)}
                            className="h-12 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                            placeholder="Enter amount paid (e.g., Rs. 2000)"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="transactionId" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-orange-600" />
                            Transaction ID *
                          </Label>
                          <Input
                            id="transactionId"
                            value={formData.transactionId}
                            onChange={(e) => handleInputChange("transactionId", e.target.value)}
                            className="h-12 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                            placeholder="Bank reference or transaction number"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="paymentDate" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-orange-600" />
                            Payment Date *
                          </Label>
                          <Input
                            id="paymentDate"
                            type="date"
                            value={formData.paymentDate}
                            onChange={(e) => handleInputChange("paymentDate", e.target.value)}
                            className="h-12 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="bankName" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <Building className="h-4 w-4 text-orange-600" />
                            Bank Name *
                          </Label>
                          <Input
                            id="bankName"
                            value={formData.bankName}
                            onChange={(e) => handleInputChange("bankName", e.target.value)}
                            className="h-12 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                            placeholder="Name of your bank (e.g., HBL, UBL)"
                          />
                        </div>
                      </div>
                      
                      {/* File Upload */}
                      <div className="space-y-3">
                        <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                          <Upload className="h-4 w-4 text-orange-600" />
                          Payment Proof *
                        </Label>
                        <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-orange-400 transition-colors duration-300">
                          <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                          <p className="text-slate-600 font-medium mb-2">Upload payment screenshot or receipt</p>
                          <p className="text-xs text-slate-500 mb-4">
                            Accepted formats: JPG, PNG, PDF (Max size: 5MB)
                          </p>
                          <Button
                            type="button"
                            variant="outline"
                            className="border-orange-300 text-orange-600 hover:bg-orange-50"
                          >
                            Choose File
                          </Button>
                          <input
                            type="file"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={(e) => handleInputChange("proofOfPayment", e.target.files?.[0] || null)}
                            className="hidden"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Terms and Conditions */}
                    <motion.div 
                      className="space-y-4 p-6 bg-slate-50 rounded-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="confirmAccuracy"
                            checked={formData.confirmAccuracy}
                            onCheckedChange={(checked) => handleInputChange("confirmAccuracy", checked)}
                            className="mt-1"
                          />
                          <Label htmlFor="confirmAccuracy" className="text-sm text-slate-700 leading-relaxed">
                            I confirm that all the information provided above is accurate and complete to the best of my knowledge.
                          </Label>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="agreeConduct"
                            checked={formData.agreeConduct}
                            onCheckedChange={(checked) => handleInputChange("agreeConduct", checked)}
                            className="mt-1"
                          />
                          <Label htmlFor="agreeConduct" className="text-sm text-slate-700 leading-relaxed">
                            I agree to abide by the conference code of conduct and understand that any violation may result in removal from the event.
                          </Label>
                        </div>
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div 
                      className="pt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button
                        type="submit"
                        className="w-full h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={loading || !formData.confirmAccuracy || !formData.agreeConduct}
                      >
                        <motion.div className="flex items-center justify-center gap-3">
                          {loading ? (
                            <span className="animate-spin mr-2">⏳</span>
                          ) : (
                            <CheckCircle className="w-6 h-6" />
                          )}
                          {loading ? "Submitting..." : "Complete Registration"}
                          {!loading && (
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <ArrowRight className="w-6 h-6" />
                            </motion.div>
                          )}
                        </motion.div>
                      </Button>
                    </motion.div>

                    {/* Feedback messages */}
                    {error && (
                      <div className="text-red-600 font-semibold text-center mb-4">{error}</div>
                    )}
                    {success && (
                      <div className="text-green-600 font-semibold text-center mb-4">Registration successful!</div>
                    )}
                  </form>
                  </div>

                  {/* Registration Benefits and Information */}
                  <div className="p-8 bg-gradient-to-br from-slate-50 to-blue-50/30 space-y-8">
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
                  </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
    </section>
  )
}
export default Registration
