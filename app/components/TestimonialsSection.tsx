"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp International",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Shaurya Protection Group provided exceptional security for our annual conference. Their professionalism and attention to detail were outstanding. I felt completely secure throughout the event.",
    },
    {
      name: "Michael Chen",
      position: "Film Producer",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As a high-profile producer, I need discreet yet effective protection. Shaurya's team has been incredible - professional, reliable, and always one step ahead. Highly recommended!",
    },
    {
      name: "Dr. Amanda Rodriguez",
      position: "Medical Director",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The residential security system installed by Shaurya has given my family complete peace of mind. Their 24/7 monitoring service is top-notch, and their response time is impressive.",
    },
    {
      name: "Robert Thompson",
      position: "Real Estate Mogul",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I've worked with several security companies, but none compare to Shaurya Protection Group. Their VIP protection service is unmatched, and their team is incredibly professional.",
    },
    {
      name: "Lisa Park",
      position: "Event Coordinator",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Shaurya handled security for our luxury wedding with 500+ guests flawlessly. They were invisible yet omnipresent, ensuring our special day went perfectly without any incidents.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by industry leaders and high-profile individuals worldwide
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="glass-effect rounded-2xl p-8 md:p-12 scroll-reveal">
            <Quote className="h-12 w-12 text-blue-400 mb-6 mx-auto" />

            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-blue-400"
                />
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-blue-400">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 hover:bg-white/10 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 hover:bg-white/10 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 scroll-reveal">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
            <div className="text-gray-400">Events Secured</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
