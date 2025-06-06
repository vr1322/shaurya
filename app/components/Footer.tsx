"use client"

import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    "VIP Protection",
    "Corporate Security",
    "Event Security",
    "Residential Security",
    "Surveillance Systems",
    "Risk Assessment",
  ]

  const quickLinks = ["About Us", "Services", "Testimonials", "Contact", "Privacy Policy", "Terms of Service"]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold gradient-text">Shaurya Protection Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Elite security services providing uncompromising protection for high-profile clients worldwide. Your
              safety is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="glass-effect rounded-lg p-2 hover:bg-white/10 transition-colors">
                <Facebook className="h-5 w-5 text-blue-400" />
              </a>
              <a href="#" className="glass-effect rounded-lg p-2 hover:bg-white/10 transition-colors">
                <Twitter className="h-5 w-5 text-blue-400" />
              </a>
              <a href="#" className="glass-effect rounded-lg p-2 hover:bg-white/10 transition-colors">
                <Instagram className="h-5 w-5 text-blue-400" />
              </a>
              <a href="#" className="glass-effect rounded-lg p-2 hover:bg-white/10 transition-colors">
                <Linkedin className="h-5 w-5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@shauryaprotection.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 Security Plaza
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 glass-effect rounded-lg p-4 border border-red-500/30">
              <h4 className="text-red-400 font-semibold mb-2">24/7 Emergency</h4>
              <p className="text-white font-bold">+1 (555) 911-HELP</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} Shaurya Protection Group. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
