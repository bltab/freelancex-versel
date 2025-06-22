"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Brain, ArrowRight, Star, Wallet } from "lucide-react"
import { Aurora } from "@/components/ui/aurora"
import { AnimatedText } from "@/components/ui/animated-text"
import { GlowingText } from "@/components/ui/glowing-text"
import { Header } from "@/components/navigation/header"
import FuzzyText from "@/components/ui/fuzzy-text"

// Hero Section
function HeroSection({ setIsVideoModalOpen }: { setIsVideoModalOpen: (open: boolean) => void }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Aurora Background */}
      <Aurora className="absolute inset-0 opacity-30" />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-green-900/20" />

      {/* Animated Background Objects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Blockchain Nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + (i * 0.5),
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-[#5B2EFF] to-[#6EFF6B] rounded-full opacity-60 shadow-lg shadow-purple-500/30">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF] to-[#6EFF6B] rounded-full animate-pulse" />
            </div>
          </motion.div>
        ))}

        {/* Floating Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              right: `${5 + (i * 15)}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + (i * 0.3),
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-4 h-4 border-2 border-[#5B2EFF] opacity-40 transform rotate-45" />
            ) : i % 3 === 1 ? (
              <div className="w-5 h-5 border-2 border-[#6EFF6B] rounded-full opacity-40" />
            ) : (
              <div className="w-4 h-4 bg-gradient-to-r from-[#5B2EFF]/30 to-[#6EFF6B]/30 transform rotate-45" />
            )}
          </motion.div>
        ))}

        {/* Crypto Symbols */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`crypto-${i}`}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${15 + (i * 18)}%`,
              bottom: `${10 + (i % 2) * 30}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + (i * 0.4),
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            {i % 5 === 0 && <span className="text-[#5B2EFF]">₿</span>}
            {i % 5 === 1 && <span className="text-[#6EFF6B]">Ξ</span>}
            {i % 5 === 2 && <span className="text-[#5B2EFF]">◊</span>}
            {i % 5 === 3 && <span className="text-[#6EFF6B]">⬡</span>}
            {i % 5 === 4 && <span className="text-[#5B2EFF]">⟐</span>}
          </motion.div>
        ))}

        {/* Connecting Lines Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(4)].map((_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${10 + i * 20}%`}
              y1="20%"
              x2={`${30 + i * 20}%`}
              y2="80%"
              stroke="url(#gradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.5,
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5B2EFF" />
              <stop offset="100%" stopColor="#6EFF6B" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Data Packets */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`packet-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Blockchain Blocks */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`block-${i}`}
            className="absolute"
            style={{
              right: `${20 + i * 25}%`,
              bottom: `${20 + i * 15}%`,
            }}
            animate={{
              rotateY: [0, 360],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            <div className="w-6 h-6 border border-[#5B2EFF]/40 bg-gradient-to-br from-[#5B2EFF]/10 to-[#6EFF6B]/10 backdrop-blur-sm">
              <div className="w-full h-full border border-[#6EFF6B]/20 transform rotate-45" />
            </div>
          </motion.div>
        ))}

        {/* Orbiting Satellites */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`satellite-${i}`}
            className="absolute w-20 h-20"
            style={{
              left: `${30 + i * 40}%`,
              top: `${40 + i * 20}%`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 w-2 h-2 bg-[#5B2EFF] rounded-full -translate-x-1/2"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}

        {/* Energy Waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-32 h-32 border border-[#6EFF6B]/20 rounded-full"
            style={{
              left: `${25 + i * 25}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/50 hover:bg-purple-500/30">
            <Zap className="w-4 h-4 mr-2" />
            <GlowingText glowColor="#5B2EFF" intensity="low">
              Powered by Web3 Technology
            </GlowingText>
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <motion.div
              className="text-white mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                {"Secure freelance payments.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "#5B2EFF",
                      textShadow: "0 0 15px rgba(91,46,255,0.8)",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            <GlowingText glowColor="#6EFF6B" intensity="low" animated={false}>
              Experience the future of freelancing with instant payments, smart escrow, and AI-powered dispute
              resolution on the blockchain.
            </GlowingText>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">
                <GlowingText glowColor="#FFFFFF" intensity="low">
                  Get Started Free
                </GlowingText>
              </span>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF]/20 to-[#6EFF6B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/5 backdrop-blur-md border border-[#5B2EFF]/30 text-[#5B2EFF] hover:bg-[#5B2EFF]/20 hover:border-[#5B2EFF]/50 hover:text-white px-8 py-4 rounded-full transition-all duration-300 relative overflow-hidden group"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <span className="relative z-10">
                <GlowingText glowColor="#5B2EFF" intensity="low">
                  Watch Demo
                </GlowingText>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Trust Section with Brand Logos
function TrustSection() {
  const partners = [
    { name: "Stellar", logo: "https://research.stellar.org/img/Stellar-logo-black.png" },
    { name: "RiseIn", logo: "https://www.risein.com/risein-logo3.png" },
    {
      name: "Patika",
      logo: "https://cdn.prod.website-files.com/6097e0eca1e87557da031fef/65ddd0b63551335908fb216e_patika%20logo.png",
    },
    { name: "Ledger", logo: "https://cdn.freebiesupply.com/logos/large/2x/ledger-logo-png-transparent.png" },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">
            <GlowingText glowColor="#5B2EFF" intensity="medium">
              Trusted by Industry Leaders
            </GlowingText>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 border-2 border-[#5B2EFF]/20 rounded-xl hover:border-[#5B2EFF]/60 transition-all duration-300 group bg-gray-900/30 backdrop-blur-sm"
              >
                <div className="w-48 h-48 mb-3 flex items-center justify-center">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain filter brightness-0 invert transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.currentTarget.style.display = "none"
                      e.currentTarget.nextElementSibling.style.display = "block"
                    }}
                  />
                  <div className="hidden w-32 h-32 bg-gradient-to-r from-[#5B2EFF] to-[#6EFF6B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {partner.name.charAt(0)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Instant Payments",
      description:
        "Get paid immediately upon project completion with cryptocurrency transactions that settle in seconds, not days.",
    },
    {
      icon: Shield,
      title: "Smart Escrow",
      description:
        "Automated escrow system protects both freelancers and clients with blockchain-secured milestone payments.",
    },
    {
      icon: Brain,
      title: "AI Disputes",
      description:
        "Advanced AI mediates disputes fairly and quickly, analyzing project requirements and deliverables automatically.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <GlowingText glowColor="#FFFFFF" intensity="low">
              Why Choose{" "}
            </GlowingText>
            <GlowingText glowColor="#5B2EFF" intensity="medium">
              FreelanceX
            </GlowingText>
            <GlowingText glowColor="#FFFFFF" intensity="low">
              ?
            </GlowingText>
          </h2>
          <p className="text-xl text-gray-400 max-w2xl mx-auto">
            <GlowingText glowColor="#6EFF6B" intensity="low" animated={false}>
              Built for the future of work with cutting-edge Web3 technology
            </GlowingText>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-2 border-gray-800 hover:border-[#5B2EFF]/50 transition-all duration-300 h-full backdrop-blur-sm group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#5B2EFF]/20 to-[#6EFF6B]/20 flex items-center justify-center border-2 border-[#5B2EFF]/30 group-hover:border-[#5B2EFF]/60 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-[#5B2EFF] group-hover:drop-shadow-[0_0_10px_rgba(91,46,255,0.8)] transition-all duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    <GlowingText glowColor="#5B2EFF" intensity="low" animated={false}>
                      {feature.title}
                    </GlowingText>
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Interactive Web3 Payment Process Section
function MockupSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const steps = [
    {
      title: "Smart Contract Creation",
      description: "Client creates a secure smart contract with project details and milestone payments",
      icon: "📄",
      color: "#5B2EFF",
    },
    {
      title: "Freelancer Accepts",
      description: "Freelancer reviews terms and accepts the contract on the blockchain",
      icon: "🤝",
      color: "#6EFF6B",
    },
    {
      title: "Escrow Lock",
      description: "Funds are automatically locked in decentralized escrow for security",
      icon: "🔒",
      color: "#FF6B6B",
    },
    {
      title: "Work Delivery",
      description: "Freelancer completes milestones and submits deliverables for review",
      icon: "🚀",
      color: "#FFD700",
    },
    {
      title: "Instant Payment",
      description: "Smart contract automatically releases payment upon milestone approval",
      icon: "⚡",
      color: "#00FFFF",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
        setIsAnimating(false)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#5B2EFF] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#6EFF6B] rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#FF6B6B] rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <GlowingText glowColor="#FFFFFF" intensity="low">
              Web3 Payment{" "}
            </GlowingText>
            <AnimatedText text="Revolution" animationType="glow" glowColor="#5B2EFF" />
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            <GlowingText glowColor="#6EFF6B" intensity="low" animated={false}>
              Experience the future of freelance payments with blockchain technology, smart contracts, and instant
              settlements
            </GlowingText>
          </p>
        </motion.div>

        {/* Interactive Payment Flow Visualization */}
        <div className="max-w-6xl mx-auto">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                  activeStep === index
                    ? "bg-gradient-to-r from-[#5B2EFF] to-[#6EFF6B] text-white shadow-lg shadow-purple-500/25"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{step.icon}</span>
                  <GlowingText
                    glowColor={activeStep === index ? "#FFFFFF" : step.color}
                    intensity="low"
                    animated={false}
                  >
                    {step.title}
                  </GlowingText>
                </span>
              </motion.button>
            ))}
          </div>

          {/* Main Visualization Area */}
          <div className="relative">
            {/* Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: activeStep === index ? 1 : 0.4,
                    scale: activeStep === index ? 1.1 : 0.9,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-500 ${
                    activeStep === index
                      ? "bg-gray-900/80 border-[#5B2EFF]/60 shadow-lg shadow-purple-500/20"
                      : "bg-gray-900/40 border-gray-700/50"
                  }`}
                >
                  {/* Step Number */}
                  <div
                    className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      activeStep === index
                        ? "bg-gradient-to-r from-[#5B2EFF] to-[#6EFF6B] text-white"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="text-center mb-4">
                    <motion.div
                      className="text-4xl mb-2"
                      animate={
                        activeStep === index
                          ? {
                              scale: [1, 1.2, 1],
                              rotate: [0, 10, -10, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1,
                        repeat: activeStep === index ? Number.POSITIVE_INFINITY : 0,
                        repeatDelay: 2,
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      <GlowingText
                        glowColor={activeStep === index ? step.color : "#FFFFFF"}
                        intensity={activeStep === index ? "medium" : "low"}
                        animated={activeStep === index}
                      >
                        {step.title}
                      </GlowingText>
                    </h3>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-gray-700 rounded-full mb-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#5B2EFF] to-[#6EFF6B]"
                      initial={{ width: "0%" }}
                      animate={{ width: activeStep >= index ? "100%" : "0%" }}
                      transition={{ duration: 0.8, delay: activeStep === index ? 0.2 : 0 }}
                    />
                  </div>

                  <p className="text-sm text-gray-400 text-center leading-relaxed">{step.description}</p>

                  {/* Particle Effects for Active Step */}
                  {activeStep === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-[#5B2EFF] rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                          }}
                          animate={{
                            y: [-10, -20, -10],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-gray-900/40 rounded-xl border border-[#5B2EFF]/20">
              <div className="text-3xl font-bold text-[#5B2EFF] mb-2">
                <GlowingText glowColor="#5B2EFF" intensity="high">
                  <AnimatedText text="<2s" animationType="typewriter" />
                </GlowingText>
              </div>
              <div className="text-gray-400">Payment Settlement</div>
            </div>

            <div className="text-center p-6 bg-gray-900/40 rounded-xl border border-[#6EFF6B]/20">
              <div className="text-3xl font-bold text-[#6EFF6B] mb-2">
                <GlowingText glowColor="#6EFF6B" intensity="high">
                  <AnimatedText text="0%" animationType="typewriter" />
                </GlowingText>
              </div>
              <div className="text-gray-400">Transaction Fees</div>
            </div>

            <div className="text-center p-6 bg-gray-900/40 rounded-xl border border-[#FFD700]/20">
              <div className="text-3xl font-bold text-[#FFD700] mb-2">
                <GlowingText glowColor="#FFD700" intensity="high">
                  <AnimatedText text="24/7" animationType="typewriter" />
                </GlowingText>
              </div>
              <div className="text-gray-400">Global Availability</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full-Stack Developer",
      content: "FreelanceX revolutionized how I get paid. No more waiting weeks for payments!",
      rating: 5,
      earnings: "$50K+",
    },
    {
      name: "Marcus Rodriguez",
      role: "UI/UX Designer",
      content: "The smart escrow system gives me confidence that I'll always get paid for my work.",
      rating: 5,
      earnings: "$35K+",
    },
    {
      name: "Emily Watson",
      role: "Content Writer",
      content: "AI dispute resolution saved me from a difficult client situation. Amazing platform!",
      rating: 5,
      earnings: "$25K+",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <GlowingText glowColor="#FFFFFF" intensity="low">
              Success{" "}
            </GlowingText>
            <AnimatedText text="Stories" animationType="glow" glowColor="#6EFF6B" />
          </h2>
          <div className="flex justify-center gap-12 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#5B2EFF] mb-2">
                <GlowingText glowColor="#5B2EFF" intensity="high">
                  10K+
                </GlowingText>
              </div>
              <div className="text-gray-400">Active Freelancers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6EFF6B] mb-2">
                <GlowingText glowColor="#6EFF6B" intensity="high">
                  $2M+
                </GlowingText>
              </div>
              <div className="text-gray-400">Paid Out</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#5B2EFF] mb-2">
                <GlowingText glowColor="#5B2EFF" intensity="high">
                  99.9%
                </GlowingText>
              </div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-2 border-[#6EFF6B]/30 hover:border-[#6EFF6B]/60 transition-all duration-300 h-full backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#6EFF6B] fill-current group-hover:drop-shadow-[0_0_8px_rgba(110,255,107,0.8)] transition-all duration-300"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">
                        <GlowingText glowColor="#FFFFFF" intensity="low" animated={false}>
                          {testimonial.name}
                        </GlowingText>
                      </div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                    <Badge className="bg-[#6EFF6B]/20 text-[#6EFF6B] border-[#6EFF6B]/50">
                      <GlowingText glowColor="#6EFF6B" intensity="medium" animated={false}>
                        {testimonial.earnings}
                      </GlowingText>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Aurora Background */}
      <Aurora className="absolute inset-0 opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF]/10 via-transparent to-[#6EFF6B]/10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <GlowingText glowColor="#FFFFFF" intensity="low">
              Ready to{" "}
            </GlowingText>
            <AnimatedText text="Transform" animationType="glow" glowColor="#5B2EFF" />
            <GlowingText glowColor="#FFFFFF" intensity="low">
              {" "}
              Your Freelance Career?
            </GlowingText>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            <GlowingText glowColor="#6EFF6B" intensity="low" animated={false}>
              Join thousands of freelancers already earning with Web3 technology
            </GlowingText>
          </p>
          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-md border border-[#5B2EFF]/30 text-[#5B2EFF] hover:bg-[#5B2EFF]/20 hover:border-[#5B2EFF]/50 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 group relative overflow-hidden"
          >
            <Wallet className="mr-2 w-5 h-5 relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300" />
            <span className="relative z-10">
              <GlowingText glowColor="#5B2EFF" intensity="medium" animated={false}>
                Connect Wallet
              </GlowingText>
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer id="about" className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">
                <FuzzyText
                  baseIntensity={0.12}
                  hoverIntensity={0.4}
                  enableHover={true}
                  fontSize="2rem"
                  fontWeight={700}
                  color="#ffffff"
                >
                  FreelanceX
                </FuzzyText>
              </div>
            </div>
            <p className="text-gray-400">
              <GlowingText glowColor="#6EFF6B" intensity="low" animated={false}>
                {""}
              </GlowingText>
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              <GlowingText glowColor="#5B2EFF" intensity="low" animated={false}>
                Platform
              </GlowingText>
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-[#5B2EFF] transition-colors hover:drop-shadow-[0_0_5px_rgba(91,46,255,0.6)]"
                >
                  Find Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#5B2EFF] transition-colors hover:drop-shadow-[0_0_5px_rgba(91,46,255,0.6)]"
                >
                  Post Project
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-[#5B2EFF] transition-colors hover:drop-shadow-[0_0_5px_rgba(91,46,255,0.6)]"
                >
                  How it Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              <GlowingText glowColor="#6EFF6B" intensity="low" animated={false}>
                Support
              </GlowingText>
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-[#6EFF6B] transition-colors hover:drop-shadow-[0_0_5px_rgba(110,255,107,0.6)]"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6EFF6B] transition-colors hover:drop-shadow-[0_0_5px_rgba(110,255,107,0.6)]"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6EFF6B] transition-colors hover:drop-shadow-[0_0_5px_rgba(110,255,107,0.6)]"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              <GlowingText glowColor="#5B2EFF" intensity="low" animated={false}>
                Company
              </GlowingText>
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#5B2EFF] transition-colors hover:drop-shadow-[0_0_5px_rgba(91,46,255,0.6)]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#5B2EFF] transition-colors hover:drop-shadow-[0_0_5px_rgba(91,46,255,0.6)]"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#5B2EFF] transition-colors hover:drop-shadow-[0_0_5px_rgba(91,46,255,0.6)]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © 2024 FreelanceX. Built with{" "}
            <GlowingText glowColor="#FF6B6B" intensity="medium" animated={false}>
              ❤️
            </GlowingText>{" "}
            for the decentralized future.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Video Modal Component
function VideoModal({ isVideoModalOpen, setIsVideoModalOpen }: { isVideoModalOpen: boolean; setIsVideoModalOpen: (open: boolean) => void }) {
  if (!isVideoModalOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative w-full max-w-4xl mx-4 bg-gray-900 rounded-2xl overflow-hidden border-2 border-[#5B2EFF]/50"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsVideoModalOpen(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300"
        >
          ✕
        </button>

        {/* Video Container */}
        <div className="aspect-video bg-black">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            poster="/placeholder.svg?height=600&width=1200"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Info */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            <GlowingText glowColor="#5B2EFF" intensity="medium" animated={false}>
              FreelanceX Platform Demo
            </GlowingText>
          </h3>
          <p className="text-gray-400">
            See how FreelanceX revolutionizes freelance payments with Web3 technology, smart contracts, and instant
            settlements.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

// Main Page Component
export default function FreelanceXLanding() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <HeroSection setIsVideoModalOpen={setIsVideoModalOpen} />
      <TrustSection />
      <FeaturesSection />
      <MockupSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
      <VideoModal isVideoModalOpen={isVideoModalOpen} setIsVideoModalOpen={setIsVideoModalOpen} />
    </div>
  )
}