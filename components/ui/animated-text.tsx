"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  glowColor?: string
  animationType?: "typewriter" | "fadeIn" | "slideUp" | "glow" | "wave"
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  duration = 0.05,
  glowColor = "#5B2EFF",
  animationType = "typewriter",
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (animationType === "typewriter") {
      const timer = setTimeout(
        () => {
          if (currentIndex < text.length) {
            setDisplayedText(text.slice(0, currentIndex + 1))
            setCurrentIndex(currentIndex + 1)
          }
        },
        delay + currentIndex * duration * 1000,
      )

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, delay, duration, animationType])

  if (animationType === "typewriter") {
    return (
      <span
        className={cn("relative", className)}
        style={{
          textShadow: `0 0 10px ${glowColor}40, 0 0 20px ${glowColor}30, 0 0 30px ${glowColor}20`,
        }}
      >
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
        />
      </span>
    )
  }

  if (animationType === "wave") {
    return (
      <span className={cn("inline-block", className)}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="inline-block"
            style={{
              textShadow: `0 0 10px ${glowColor}60, 0 0 20px ${glowColor}40, 0 0 30px ${glowColor}20`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  if (animationType === "glow") {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay }}
        className={cn("relative", className)}
      >
        <motion.span
          animate={{
            textShadow: [
              `0 0 10px ${glowColor}40, 0 0 20px ${glowColor}30, 0 0 30px ${glowColor}20`,
              `0 0 20px ${glowColor}60, 0 0 30px ${glowColor}50, 0 0 40px ${glowColor}40`,
              `0 0 10px ${glowColor}40, 0 0 20px ${glowColor}30, 0 0 30px ${glowColor}20`,
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative z-10"
        >
          {text}
        </motion.span>
      </motion.span>
    )
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={cn("relative", className)}
      style={{
        textShadow: `0 0 10px ${glowColor}40, 0 0 20px ${glowColor}30, 0 0 30px ${glowColor}20`,
      }}
    >
      {text}
    </motion.span>
  )
}
