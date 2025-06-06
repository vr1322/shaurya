"use client"

import { Shield, Users, Award, Clock } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Protection",
      description: "State-of-the-art security technology and protocols",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained security professionals with military background",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Award-winning security services with 99.9% success rate",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance and rapid response",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Shaurya</span> Protection Group
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience in elite security services, we provide uncompromising protection for
            high-profile individuals, corporations, and exclusive events worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="scroll-reveal">
            <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              To deliver world-class security solutions that exceed expectations while maintaining the highest standards
              of professionalism, discretion, and technological innovation.
            </p>

            <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              To be the global leader in premium security services, setting new benchmarks for excellence and trust in
              the protection industry.
            </p>

            <div className="glass-effect rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 gradient-text">Why Choose Us?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Certified security professionals
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Cutting-edge surveillance technology
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Customized security solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Rapid emergency response
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 scroll-reveal">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <feature.icon className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
