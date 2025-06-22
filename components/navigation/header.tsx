"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlowingText } from "@/components/ui/glowing-text"
import { Menu, X, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"
import FuzzyText from "@/components/ui/fuzzy-text"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoTrigger, setLogoTrigger] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Trigger logo animation on mount
    const timer = setTimeout(() => setLogoTrigger(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-gray-800/50 shadow-lg shadow-purple-500/10"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <div className="text-xl sm:text-2xl font-bold">
              <FuzzyText
                baseIntensity={0.12}
                hoverIntensity={0.4}
                enableHover={true}
                fontSize="1.5rem"
                fontWeight={700}
                color="#ffffff"
              >
                FreelanceX
              </FuzzyText>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group text-sm xl:text-base"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <GlowingText glowColor="#5B2EFF" intensity="low" animated={false}>
                  {item.name}
                </GlowingText>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5B2EFF] to-[#6EFF6B] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm"
            >
              <GlowingText glowColor="#6EFF6B" intensity="low" animated={false}>
                Sign In
              </GlowingText>
            </Button>
            <Button
              size="sm"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white font-semibold px-4 xl:px-6 py-2 rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 relative overflow-hidden group text-sm"
            >
              <Wallet className="w-4 h-4 mr-1 xl:mr-2" />
              <span className="relative z-10">
                <GlowingText glowColor="#FFFFFF" intensity="low" animated={false}>
                  <span className="xl:inline hidden">Connect Wallet</span>
                  <span className="xl:hidden">Connect</span>
                </GlowingText>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF]/20 to-[#6EFF6B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50"
          >
            <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
              <nav className="flex flex-col space-y-3 sm:space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-gray-800/30 last:border-b-0 text-base sm:text-lg"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMobileMenuOpen(false)
                      setTimeout(() => {
                        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                      }, 300)
                    }}
                  >
                    <GlowingText glowColor="#5B2EFF" intensity="low" animated={false}>
                      {item.name}
                    </GlowingText>
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col space-y-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800/30">
                <Button
                  variant="ghost"
                  className="bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 justify-start"
                >
                  <GlowingText glowColor="#6EFF6B" intensity="low" animated={false}>
                    Sign In
                  </GlowingText>
                </Button>
                <Button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white font-semibold px-4 sm:px-6 py-3 rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 relative overflow-hidden group">
                  <Wallet className="w-4 h-4 mr-2" />
                  <span className="relative z-10">
                    <GlowingText glowColor="#FFFFFF" intensity="low" animated={false}>
                      Connect Wallet
                    </GlowingText>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5B2EFF]/20 to-[#6EFF6B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}