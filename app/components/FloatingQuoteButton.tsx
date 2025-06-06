"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export default function FloatingQuoteButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle chat submission
    console.log("Chat message:", message)
    setMessage("")
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 neon-glow pulse-glow"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 glass-effect rounded-xl shadow-2xl">
          <div className="p-4 border-b border-gray-600">
            <h3 className="text-lg font-semibold text-white">Quick Quote</h3>
            <p className="text-sm text-gray-300">Get instant security consultation</p>
          </div>

          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-blue-600/20 rounded-lg p-3">
                <p className="text-sm text-white">
                  👋 Hello! I'm here to help you with your security needs. What type of protection are you looking for?
                </p>
              </div>

              <div className="flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-xs text-white transition-colors">
                  VIP Protection
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-xs text-white transition-colors">
                  Event Security
                </button>
              </div>

              <div className="flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-xs text-white transition-colors">
                  Corporate Security
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-xs text-white transition-colors">
                  Home Security
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-600">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white text-sm"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors">
                <Send className="h-4 w-4 text-white" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
