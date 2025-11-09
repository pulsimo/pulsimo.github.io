'use client'

import Navigation from '@/components/Navigation'
import ThemeToggle from '@/components/ThemeToggle'
import { Code2, Server, Container, Cloud, GitBranch, Settings, Rocket, Mail, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutDevPage() {
  const techStack = [
    { name: 'Docker', icon: Container, color: 'from-blue-500 to-blue-600' },
    { name: 'Kubernetes', icon: Settings, color: 'from-blue-400 to-cyan-500' },
    { name: 'AWS', icon: Cloud, color: 'from-orange-500 to-yellow-500' },
    { name: 'Jenkins', icon: GitBranch, color: 'from-red-500 to-orange-500' },
    { name: 'GitHub Actions', icon: Github, color: 'from-slate-700 to-slate-900' },
    { name: 'Terraform', icon: Code2, color: 'from-purple-500 to-indigo-600' },
    { name: 'Ansible', icon: Server, color: 'from-red-600 to-pink-600' },
    { name: 'Pulsimo', icon: Rocket, color: 'from-cyan-500 to-blue-600' },
  ]

  return (
    <>
      <Navigation />
      <ThemeToggle />
      <main className="min-h-screen pt-16">
        {/* Hero Section with Photo */}
        <section className="relative py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Photo & Name */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center md:items-start"
                >
                  <div className="relative mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-75 animate-pulse"></div>
                    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                      <Image
                        src="/images/kader-khan.jpg"
                        alt="Kader Khan - DevOps Engineer"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">
                    Kader Khan
                  </h1>
                  <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                    DevOps Engineer
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a href="mailto:kader@example.com" className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-900/30 hover:bg-cyan-200 dark:hover:bg-cyan-900/50 transition-colors">
                      <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                      <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </a>
                  </div>
                </motion.div>

                {/* Right: Bio */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Rocket className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      About Me
                    </h2>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      Currently working as a <span className="font-bold text-cyan-600 dark:text-cyan-400">DevOps Engineer</span> at X Company, 
                      bringing <span className="font-bold">2+ years of hands-on experience</span> in DevOps culture and practices.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      I actively contribute to <span className="font-bold text-blue-600 dark:text-blue-400">Pulsimo</span>, 
                      a cutting-edge real-time monitoring platform, and have precise expertise working with various DevOps tools and cloud platforms.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      Passionate about automating infrastructure, optimizing CI/CD pipelines, and building scalable, 
                      resilient systems that power modern applications.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl p-6 shadow-xl">
                    <p className="text-white text-center font-semibold text-lg">
                      💡 "Building resilient infrastructure, one pipeline at a time"
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack & Tools */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  DevOps Tools & Technologies
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Expertise across the modern DevOps ecosystem
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techStack.map((tech, index) => {
                  const Icon = tech.icon
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative"
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-cyan-400 dark:hover:border-cyan-500 transition-all">
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.color} mb-3 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{tech.name}</h3>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  What I Bring to the Table
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-6 border-2 border-cyan-200 dark:border-cyan-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500 shadow-lg">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Infrastructure as Code</h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Expert in Terraform, Ansible, and CloudFormation for automated, version-controlled infrastructure deployment.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500 shadow-lg">
                      <Container className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Container Orchestration</h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Proficient in Docker and Kubernetes for scalable, cloud-native application deployment and management.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-500 shadow-lg">
                      <GitBranch className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">CI/CD Pipelines</h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Building robust pipelines with Jenkins, GitHub Actions, and GitLab CI for automated testing and deployment.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-500 shadow-lg">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Cloud Platforms</h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Experienced with AWS, GCP, and Azure for building highly available, fault-tolerant cloud architectures.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-xl text-cyan-50 mb-8">
                Open to collaboration, consulting, and interesting DevOps challenges
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-cyan-600 font-bold text-lg hover:bg-slate-50 transition-all shadow-2xl hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
