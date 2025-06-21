"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

interface AuroraProps {
  className?: string
  children?: React.ReactNode
}

export function Aurora({ className, children }: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.01

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 200,
        canvas.height * 0.3 + Math.cos(time * 0.8) * 150,
        0,
        canvas.width * 0.3 + Math.sin(time) * 200,
        canvas.height * 0.3 + Math.cos(time * 0.8) * 150,
        canvas.width * 0.6,
      )

      gradient1.addColorStop(0, "rgba(91, 46, 255, 0.4)")
      gradient1.addColorStop(0.5, "rgba(91, 46, 255, 0.2)")
      gradient1.addColorStop(1, "rgba(91, 46, 255, 0)")

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 1.2) * 180,
        canvas.height * 0.6 + Math.sin(time * 0.9) * 120,
        0,
        canvas.width * 0.7 + Math.cos(time * 1.2) * 180,
        canvas.height * 0.6 + Math.sin(time * 0.9) * 120,
        canvas.width * 0.5,
      )

      gradient2.addColorStop(0, "rgba(110, 255, 107, 0.3)")
      gradient2.addColorStop(0.5, "rgba(110, 255, 107, 0.15)")
      gradient2.addColorStop(1, "rgba(110, 255, 107, 0)")

      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.7) * 160,
        canvas.height * 0.8 + Math.cos(time * 1.1) * 100,
        0,
        canvas.width * 0.5 + Math.sin(time * 0.7) * 160,
        canvas.height * 0.8 + Math.cos(time * 1.1) * 100,
        canvas.width * 0.4,
      )

      gradient3.addColorStop(0, "rgba(147, 51, 234, 0.25)")
      gradient3.addColorStop(0.5, "rgba(147, 51, 234, 0.1)")
      gradient3.addColorStop(1, "rgba(147, 51, 234, 0)")

      // Apply gradients
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalCompositeOperation = "screen"
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.globalCompositeOperation = "source-over"

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className={cn("relative", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ filter: "blur(40px)" }}
      />
      {children}
    </div>
  )
}
