"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowingTextProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  intensity?: "low" | "medium" | "high"
  animated?: boolean
}

export function GlowingText({
  children,
  className,
  glowColor = "#5B2EFF",
  intensity = "medium",
  animated = true,
}: GlowingTextProps) {
  const getGlowIntensity = () => {
    switch (intensity) {
      case "low":
        return `0 0 5px ${glowColor}30, 0 0 10px ${glowColor}20, 0 0 15px ${glowColor}10`
      case "high":
        return `0 0 15px ${glowColor}80, 0 0 30px ${glowColor}60, 0 0 45px ${glowColor}40, 0 0 60px ${glowColor}20`
      default:
        return `0 0 10px ${glowColor}60, 0 0 20px ${glowColor}40, 0 0 30px ${glowColor}20`
    }
  }

  const animatedGlow = animated
    ? {
        textShadow: [
          getGlowIntensity(),
          `0 0 20px ${glowColor}80, 0 0 35px ${glowColor}60, 0 0 50px ${glowColor}40`,
          getGlowIntensity(),
        ],
      }
    : {}

  const transition = animated
    ? {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }
    : {}

  return (
    <motion.span
      animate={animatedGlow}
      transition={transition}
      className={cn("relative", className)}
      style={{
        textShadow: getGlowIntensity(),
      }}
    >
      {children}
    </motion.span>
  )
}
