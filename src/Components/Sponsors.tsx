"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  Award,
  Building2,
  Handshake,
  Star,
  Crown,
  Trophy,
  Medal,
  Heart,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/Components/ui/button"

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

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const partners = [
  {
    name: "COMSATS University Islamabad, Sahiwal Campus",
    type: "Host Institution",
    logo: "/placeholder.svg?height=80&width=160&text=COMSATS",
    description: "Leading institution in higher education and research excellence",
    color: "from-blue-600 via-blue-700 to-indigo-800",
    accent: "from-blue-400 to-indigo-500",
    icon: <Building2 className="h-8 w-8" />,
    stats: { projects: "500+", students: "15K+", research: "200+" },
  },
  {
    name: "Higher Education Commission (HEC), Pakistan",
    type: "Government Partner",
    logo: "/placeholder.svg?height=80&width=160&text=HEC",
    description: "Promoting excellence in higher education and research development",
    color: "from-emerald-600 via-emerald-700 to-teal-800",
    accent: "from-emerald-400 to-teal-500",
    icon: <Award className="h-8 w-8" />,
    stats: { universities: "200+", funding: "$2B+", programs: "1000+" },
  },
  {
    name: "Pakistan Society of Food Scientists and Technologists (PSFST)",
    type: "Professional Society",
    logo: "/placeholder.svg?height=80&width=160&text=PSFST",
    description: "Advancing food science and technology through innovation",
    color: "from-purple-600 via-purple-700 to-violet-800",
    accent: "from-purple-400 to-violet-500",
    icon: <Users className="h-8 w-8" />,
    stats: { members: "5K+", events: "50+", publications: "300+" },
  },
]

const sponsorshipTiers = [
  {
    tier: "Platinum",
    amount: "Rs. 500,000",
    icon: <Crown className="h-10 w-10" />,
    color: "from-slate-400 via-slate-500 to-slate-700",
    accent: "from-slate-300 to-slate-500",
    borderColor: "border-slate-300",
    textColor: "text-slate-800",
    popular: true,
    benefits: [
      "Logo on all event banners and printed materials",
      "Branding in keynote session",
      "Recognition during opening/closing ceremony",
      "Promotional stall at venue",
      "4 complimentary registrations",
      "VIP networking access",
      "Custom branding opportunities",
    ],
  },
  {
    tier: "Gold",
    amount: "Rs. 300,000",
    icon: <Trophy className="h-10 w-10" />,
    color: "from-yellow-400 via-yellow-500 to-amber-600",
    accent: "from-yellow-300 to-amber-500",
    borderColor: "border-yellow-300",
    textColor: "text-yellow-800",
    popular: false,
    benefits: [
      "Logo on event brochure and venue banners",
      "Recognition on website",
      "2 complimentary registrations",
      "Networking session access",
      "Digital marketing inclusion",
    ],
  },
  {
    tier: "Silver",
    amount: "Rs. 150,000",
    icon: <Medal className="h-10 w-10" />,
    color: "from-gray-400 via-gray-500 to-gray-600",
    accent: "from-gray-300 to-gray-500",
    borderColor: "border-gray-300",
    textColor: "text-gray-800",
    popular: false,
    benefits: [
      "Logo on official website",
      "1 complimentary registration",
      "Conference materials inclusion",
      "Social media recognition",
    ],
  },
  {
    tier: "Supporter",
    amount: "Rs. 75,000",
    icon: <Heart className="h-10 w-10" />,
    color: "from-rose-400 via-rose-500 to-pink-600",
    accent: "from-rose-300 to-pink-500",
    borderColor: "border-rose-300",
    textColor: "text-rose-800",
    popular: false,
    benefits: ["Logo featured in digital abstract book only", "Certificate of appreciation"],
  },
]

const sponsorStats = [
  { icon: <Target className="h-10 w-10" />, value: "4", label: "Sponsorship Tiers", color: "text-blue-600" },
  { icon: <Building2 className="h-10 w-10" />, value: "3", label: "Partner Organizations", color: "text-emerald-600" },
  { icon: <TrendingUp className="h-10 w-10" />, value: "500+", label: "Expected Reach", color: "text-purple-600" },
  { icon: <Globe className="h-10 w-10" />, value: "∞", label: "Opportunities", color: "text-orange-600" },
]

export const Sponsors: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null)
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null)

  hoveredPartner;
  return (
    <section
      id="sponsors"
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
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-indigo-100/20 to-blue-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
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
            Sponsors &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Partners
            </span>
          </motion.h2>
          <motion.p variants={item} className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            We acknowledge the invaluable support of our distinguished partners and invite visionary organizations to
            join us in advancing scientific research and fostering innovation through strategic collaborations.
          </motion.p>
        </motion.div>

        {/* Enhanced Sponsor Stats */}
        <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {sponsorStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/50 cursor-pointer"
              whileHover={{ scale: 1.08, y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-4xl font-black text-slate-800 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-600 font-semibold text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Revolutionary Partners Section */}
        <motion.div variants={item} className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-4xl font-bold text-slate-800">Our Distinguished Partners</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Collaborating with leading institutions and organizations to create an extraordinary conference experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                variants={cardVariants}
                className="group relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03, y: -8 }}
                onHoverStart={() => setHoveredPartner(index)}
                onHoverEnd={() => setHoveredPartner(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Header Section */}
                <div className={`relative bg-gradient-to-br ${partner.color} p-8 text-white`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <motion.div
                        className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {partner.icon}
                      </motion.div>
                      <motion.div variants={floatingVariants} animate="animate">
                        <Star className="h-6 w-6 text-yellow-300" />
                      </motion.div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-2">{partner.type}</h4>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <span className="text-xs font-bold">LOGO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-8 space-y-6">
                  <div>
                    <h5 className="text-xl font-bold text-slate-800 mb-3">{partner.name}</h5>
                    <p className="text-slate-600 leading-relaxed">{partner.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(partner.stats).map(([key, value], idx) => (
                      <motion.div
                        key={key}
                        className="text-center p-3 bg-slate-50 rounded-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <div className="text-lg font-bold text-slate-800">{value}</div>
                        <div className="text-xs text-slate-600 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Partnership Badge */}
                  <motion.div
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${partner.accent} text-white rounded-full text-sm font-semibold shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Handshake className="h-4 w-4" />
                    Strategic Partner
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Sponsorship Opportunities */}
        <motion.div variants={item} className="space-y-12">
          <div className="text-center space-y-6">
            <h3 className="text-4xl font-bold text-slate-800">Sponsorship Opportunities</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Partner with us to gain exceptional visibility while supporting groundbreaking scientific advancement and
              innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                variants={cardVariants}
                className={`relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 ${
                  tier.borderColor
                } overflow-hidden cursor-pointer group ${
                  tier.popular ? "ring-2 ring-blue-500 ring-offset-4 ring-offset-transparent" : ""
                }`}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setSelectedTier(selectedTier === index ? null : index)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className={`relative bg-gradient-to-br ${tier.color} p-8 text-white text-center overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
                  <div className="relative z-10">
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tier.icon}
                    </motion.div>
                    <h4 className="text-2xl font-bold mb-3">{tier.tier}</h4>
                    <motion.p
                      className="text-3xl font-black"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      {tier.amount}
                    </motion.p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h5 className={`text-lg font-bold ${tier.textColor} mb-4`}>Benefits Include:</h5>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <motion.li
                          key={benefitIndex}
                          className="flex items-start gap-3 text-sm text-slate-600"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + benefitIndex * 0.1 }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${tier.color} text-white font-bold rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                    size="sm"
                  >
                    <motion.div className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Choose {tier.tier}
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
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div variants={item} className="text-center pt-16">
          <motion.div
            className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl p-16 text-white overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <Handshake className="h-16 w-16 text-blue-400 mx-auto mb-6" />
              </motion.div>

              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-black">Become Our Partner</h3>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Join us in supporting scientific excellence and innovation. Let's discuss custom sponsorship packages
                  tailored to your organization's goals and vision.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-10 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <motion.div className="flex items-center gap-3">
                      <Handshake className="w-6 h-6" />
                      Partner With Us
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-10 py-4 rounded-2xl transition-all duration-300"
                  >
                    <Zap className="w-6 h-6 mr-3" />
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Sponsors
