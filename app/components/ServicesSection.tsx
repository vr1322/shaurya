"use client"

import {
  Shield,
  Building,
  Users,
  Camera,
  Car,
  Plane,
  Home,
  UserCheck,
  AlertTriangle,
  Lock,
  Eye,
  Headphones,
  MapPin,
  Briefcase,
  Crown,
} from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Crown,
      title: "VIP Protection",
      description: "Elite personal protection for high-profile individuals and executives",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Building,
      title: "Corporate Security",
      description: "Comprehensive security solutions for businesses and office complexes",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Professional security management for conferences, concerts, and private events",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Home,
      title: "Residential Security",
      description: "Advanced home security systems and personal protection services",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Camera,
      title: "Surveillance Systems",
      description: "State-of-the-art CCTV and monitoring solutions with AI integration",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Car,
      title: "Mobile Patrol",
      description: "Regular security patrols and rapid response services",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Plane,
      title: "Airport Security",
      description: "Specialized aviation security and passenger protection services",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: UserCheck,
      title: "Background Checks",
      description: "Thorough vetting and investigation services for personnel screening",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Comprehensive security audits and threat analysis",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Advanced biometric and keycard access management systems",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Eye,
      title: "Close Protection",
      description: "Discreet personal bodyguard services for celebrities and dignitaries",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Headphones,
      title: "Security Consulting",
      description: "Expert advice on security protocols and risk mitigation strategies",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: MapPin,
      title: "Location Security",
      description: "Venue-specific security planning and implementation",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "Executive Protection",
      description: "Comprehensive security packages for C-level executives",
      color: "from-gray-500 to-slate-500",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Digital protection services and cybersecurity consulting",
      color: "from-lime-500 to-green-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Security Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive protection solutions tailored to meet your specific security needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 group cursor-pointer scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">{service.description}</p>

              <div className="mt-4 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn More</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 neon-glow">
            Request Custom Security Plan
          </button>
        </div>
      </div>
    </section>
  )
}
