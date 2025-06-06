"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to secure your assets? Contact us for a personalized security consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="scroll-reveal">
            <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="glass-effect rounded-lg p-3">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="glass-effect rounded-lg p-3">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-300">info@shauryaprotection.com</p>
                  <p className="text-gray-300">emergency@shauryaprotection.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="glass-effect rounded-lg p-3">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Address</h4>
                  <p className="text-gray-300">123 Security Plaza</p>
                  <p className="text-gray-300">New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="glass-effect rounded-lg p-3">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Hours</h4>
                  <p className="text-gray-300">24/7 Emergency Response</p>
                  <p className="text-gray-300">Office: Mon-Fri 9AM-6PM</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 glass-effect rounded-lg p-6 border border-red-500/30">
              <h4 className="text-xl font-semibold text-red-400 mb-2">Emergency Hotline</h4>
              <p className="text-2xl font-bold text-white">+1 (555) 911-HELP</p>
              <p className="text-gray-300 text-sm mt-2">Available 24/7 for immediate assistance</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Request a Quote</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="vip-protection">VIP Protection</option>
                    <option value="corporate-security">Corporate Security</option>
                    <option value="event-security">Event Security</option>
                    <option value="residential-security">Residential Security</option>
                    <option value="consultation">Security Consultation</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white resize-none"
                  placeholder="Please describe your security needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 neon-glow flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 scroll-reveal">
          <div className="glass-effect rounded-xl p-4 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-300">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-400">123 Security Plaza, New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
