"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Play } from "lucide-react"
import SecurityRobot3D from "./SecurityRobot3D"

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center animated-gradient overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl floating-animation"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 scroll-reveal">
            <span className="gradient-text">Trusted Security,</span>
            <br />
            <span className="text-white">Anytime, Anywhere</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 scroll-reveal leading-relaxed">
            Elite protection services for high-profile clients. Advanced technology meets uncompromising security
            standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start scroll-reveal">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 neon-glow flex items-center justify-center group">
              Get Protected Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="glass-effect hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 scroll-reveal">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-gray-400">Clients Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Robot */}
        <div className="relative h-96 lg:h-[600px] scroll-reveal">
          <SecurityRobot3D />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
