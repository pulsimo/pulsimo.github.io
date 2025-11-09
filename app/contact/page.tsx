'use client'

import Navigation from '@/components/Navigation'
import ThemeToggle from '@/components/ThemeToggle'
import { Mail, MessageSquare, Github, Twitter, Linkedin, Send, Bug, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Navigation />
      <ThemeToggle />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#d5f4f4] via-[#e0f7f7] to-[#cbf0f0] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 border border-cyan-500/40 dark:border-cyan-500/30 backdrop-blur-sm mb-6">
                <MessageSquare className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-medium text-cyan-900 dark:text-cyan-100">
                  Get in Touch
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-slate-800 dark:text-white">We'd Love to </span>
                <span className="bg-gradient-to-r from-[#1e40af] via-[#0891b2] to-[#14b8a6] dark:from-[#3b82f6] dark:via-[#06b6d4] dark:to-[#14b8a6] bg-clip-text text-transparent">
                  Hear From You
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Have questions, feedback, or just want to say hello? Drop us a message!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                    Connect With Us
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-1">Email</h3>
                        <a
                          href="mailto:support@pulsimo.dev"
                          className="text-cyan-600 dark:text-cyan-400 hover:underline"
                        >
                          support@pulsimo.dev
                        </a>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Follow Us</h3>
                      <div className="flex gap-3">
                        <a
                          href="https://github.com/Cloud-Council/pulsimo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                        </a>
                        <a
                          href="https://twitter.com/pulsimo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
                          aria-label="Twitter"
                        >
                          <Twitter className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                        </a>
                        <a
                          href="https://linkedin.com/company/pulsimo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                        </a>
                      </div>
                    </div>

                    {/* Bug Report */}
                    <div className="p-6 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 border-2 border-red-300 dark:border-red-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-red-500 to-orange-500">
                          <Bug className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-slate-800 dark:text-white">
                          Found a Bug?
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Help us improve Pulsimo by reporting any bugs or issues you encounter.
                      </p>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc3ZuyIwqytCaw7NNatE79mkhB6DzbwMYq29fEIRC17bfO8vA/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium hover:from-red-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg group"
                      >
                        <Bug className="w-4 h-4" />
                        <span>Report Bug</span>
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                    {/* Response Time */}
                    <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/10 dark:to-blue-900/10 border border-cyan-200 dark:border-cyan-800">
                      <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                        Response Time
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        We typically respond within 24 hours during weekdays. For urgent issues,
                        please mention "URGENT" in your subject line.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                      Send us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                          >
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">
                    How can I get started with Pulsimo?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Check out our <a href="/documentation" className="text-cyan-600 dark:text-cyan-400 hover:underline">Documentation</a> page
                    for a comprehensive quick start guide and installation instructions.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">
                    Is Pulsimo free to use?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Pulsimo is currently in beta and free to use. We'll announce pricing plans before the official launch,
                    and early adopters will receive special benefits.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">
                    Can I contribute to Pulsimo?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Yes! Pulsimo is open source. Visit our <a href="https://github.com/Cloud-Council/pulsimo" className="text-cyan-600 dark:text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub repository</a> to
                    contribute or report issues.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">
                    What kind of support do you offer?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    During beta, we offer email support with a 24-hour response time on weekdays. We're also building
                    a community forum and Discord server for real-time help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
