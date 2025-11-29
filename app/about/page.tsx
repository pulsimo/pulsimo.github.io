'use client'

import Navigation from '@/components/Navigation'
import ThemeToggle from '@/components/ThemeToggle'
import { 
  Code2, Server, Container, Cloud, GitBranch, Settings, Rocket, Mail, Github, Linkedin,
  Shield, Eye, Database, Network, GitCommit, Terminal, Lock, Activity, 
  Zap, Package, FileCode, Globe, Award, GraduationCap, Briefcase, MapPin, Phone, ExternalLink,
  Layers, Gauge, BarChart3, AlertTriangle, CheckCircle2, TrendingUp
} from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutDevPage() {
  // Comprehensive tech stack organized by category
  const cloudPlatforms = [
    { name: 'AWS EC2', icon: Cloud, color: 'from-orange-500 to-yellow-500' },
    { name: 'AWS S3', icon: Database, color: 'from-orange-400 to-yellow-400' },
    { name: 'AWS EKS', icon: Settings, color: 'from-orange-600 to-yellow-600' },
    { name: 'AWS IAM', icon: Shield, color: 'from-orange-500 to-red-500' },
    { name: 'AWS SNS', icon: Network, color: 'from-orange-400 to-pink-400' },
    { name: 'AWS ECR', icon: Package, color: 'from-orange-500 to-purple-500' },
    { name: 'CodePipeline', icon: GitBranch, color: 'from-blue-500 to-purple-500' },
    { name: 'CodeDeploy', icon: Rocket, color: 'from-blue-600 to-purple-600' },
    { name: 'CodeBuild', icon: Package, color: 'from-blue-500 to-cyan-500' },
    { name: 'ALB', icon: Network, color: 'from-orange-400 to-red-400' },
    { name: 'Digital Ocean', icon: Globe, color: 'from-blue-500 to-blue-700' },
  ]

  const cicdTools = [
    { name: 'GitLab CI', icon: GitBranch, color: 'from-orange-500 to-red-500' },
    { name: 'Jenkins', icon: GitCommit, color: 'from-red-600 to-orange-500' },
    { name: 'ArgoCD', icon: GitBranch, color: 'from-orange-500 to-pink-500' },
    { name: 'GitHub Actions', icon: Github, color: 'from-slate-700 to-slate-900' },
  ]

  const iacTools = [
    { name: 'Terraform', icon: Code2, color: 'from-purple-600 to-indigo-700' },
    { name: 'OpenTofu', icon: FileCode, color: 'from-purple-500 to-pink-600' },
    { name: 'Pulumi', icon: Code2, color: 'from-purple-700 to-blue-700' },
  ]

  const orchestrationTools = [
    { name: 'Docker', icon: Container, color: 'from-blue-500 to-blue-600' },
    { name: 'Kubernetes', icon: Settings, color: 'from-blue-400 to-cyan-500' },
    { name: 'Helm', icon: Package, color: 'from-blue-600 to-purple-600' },
    { name: 'Kustomize', icon: Layers, color: 'from-cyan-500 to-blue-600' },
    { name: 'Kubeadm', icon: Settings, color: 'from-blue-500 to-indigo-600' },
  ]

  const observabilityTools = [
    { name: 'Prometheus', icon: Activity, color: 'from-orange-500 to-red-600' },
    { name: 'Grafana', icon: BarChart3, color: 'from-orange-600 to-yellow-500' },
    { name: 'EFK Stack', icon: Eye, color: 'from-green-500 to-emerald-600' },
    { name: 'ELK Stack', icon: Eye, color: 'from-yellow-500 to-orange-500' },
    { name: 'Signoz', icon: Gauge, color: 'from-purple-500 to-pink-600' },
    { name: 'OpenTelemetry', icon: Activity, color: 'from-cyan-500 to-blue-600' },
    { name: 'Pulsimo', icon: Rocket, color: 'from-cyan-500 to-blue-600' },
  ]

  const securityTools = [
    { name: 'Vault', icon: Lock, color: 'from-yellow-500 to-orange-500' },
    { name: 'Trivy', icon: Shield, color: 'from-cyan-500 to-blue-600' },
  ]

  const otherTools = [
    { name: 'Ansible', icon: Server, color: 'from-red-600 to-pink-600' },
    { name: 'Git', icon: GitBranch, color: 'from-orange-600 to-red-600' },
    { name: 'Jira', icon: Briefcase, color: 'from-blue-600 to-blue-700' },
    { name: 'Confluence', icon: FileCode, color: 'from-blue-500 to-cyan-500' },
    { name: 'Nexus', icon: Package, color: 'from-green-600 to-emerald-600' },
  ]

  const programmingTools = [
    { name: 'Go', icon: Code2, color: 'from-cyan-400 to-blue-500' },
    { name: 'Python', icon: Code2, color: 'from-blue-500 to-yellow-500' },
    { name: 'Shell', icon: Terminal, color: 'from-green-600 to-emerald-600' },
    { name: 'Bash', icon: Terminal, color: 'from-slate-600 to-slate-800' },
  ]

  return (
    <>
      <Navigation />
      <ThemeToggle />
      <main className="min-h-screen pt-16">
        {/* Hero Section with Photo */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          {/* Animated blobs */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Photo & Contact */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center lg:items-start"
                >
                  <div className="relative mb-8">
                    <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-75 animate-pulse"></div>
                    <div className="relative">
                      <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl ring-4 ring-cyan-500/20 dark:ring-cyan-400/20">
                        <Image
                          src="/images/kader-khan.jpg"
                          alt="Kader Khan - DevOps Engineer"
                          width={288}
                          height={288}
                          className="object-cover"
                          priority
                        />
                      </div>
                      {/* Certification Badge */}
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-3 shadow-xl border-4 border-white dark:border-slate-900">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left mb-6">
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-3">
                      Kader Khan
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                      DevOps Engineer
                    </p>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 dark:text-slate-400 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 dark:text-slate-400 mb-2">
                      <Phone className="w-4 h-4" />
                      <span>(+880) 1776629162</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 dark:text-slate-400">
                      <Briefcase className="w-4 h-4" />
                      <span>Anwar Technologies</span>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a href="mailto:kader.devops@gmail.com" 
                       className="group px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold">Email</span>
                    </a>
                    <a href="https://github.com/onedord1" target="_blank" rel="noopener noreferrer" 
                       className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-slate-200 dark:border-slate-700">
                      <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    </a>
                    <a href="https://linkedin.com/in/abir-k" target="_blank" rel="noopener noreferrer" 
                       className="p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-slate-200 dark:border-slate-700">
                      <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </a>
                  </div>
                </motion.div>

                {/* Right: Professional Summary */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                        <Rocket className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Professional Summary
                      </h2>
                    </div>
                    
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                      <span className="font-bold text-cyan-600 dark:text-cyan-400">DevOps Engineer</span> with <span className="font-bold text-blue-600 dark:text-blue-400">1.5 years of hands-on experience</span> automating AWS infrastructure, designing CI/CD pipelines and orchestrating containerized workloads.
                    </p>
                    
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                      Proficient in <span className="font-semibold">Terraform, Docker, Kubernetes, Linux/Unix administration</span> and scripting (Python, Bash) to streamline deployments and bolster system reliability.
                    </p>
                    
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                      Led enterprise-wide <span className="font-semibold text-purple-600 dark:text-purple-400">GitOps transformation</span> using ArgoCD, improving deployment speed by <span className="font-bold">85%</span> and system reliability.
                    </p>
                    
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      Skilled at collaborating with development and operations teams to monitor performance, implement risk-mitigation strategies, and deliver resilient solutions that power modern applications.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center justify-center gap-3">
                      <Zap className="w-7 h-7 text-white" />
                      <p className="text-white text-center font-bold text-xl">
                        "Building resilient infrastructure, one pipeline at a time"
                      </p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-slate-200 dark:border-slate-700 text-center">
                      <div className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-1">1.5+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Years Experience</div>
                    </div>
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-slate-200 dark:border-slate-700 text-center">
                      <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-1">50+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Technologies</div>
                    </div>
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-slate-200 dark:border-slate-700 text-center">
                      <div className="text-3xl font-black bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-1">3.71</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">CGPA</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Skills Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Core Skills
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  Comprehensive DevOps expertise across multiple domains
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-6 border-2 border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all"
                >
                  <Cloud className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Cloud Platforms</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">AWS (EC2, S3, IAM, EKS, SNS, ECR, ALB), CodePipeline, CodeDeploy, CodeBuild</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all"
                >
                  <GitBranch className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">CI/CD & DevOps Tools</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">GitLab CI, Jenkins, ArgoCD, GitHub Actions</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-6 border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all"
                >
                  <Code2 className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Infrastructure as Code</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Terraform, OpenTofu, Pulumi</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all"
                >
                  <Container className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Orchestration</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Docker, Kubernetes (EKS, Kubeadm), Helm, Kustomize</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 transition-all"
                >
                  <Activity className="w-10 h-10 text-orange-600 dark:text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">System Observability</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Prometheus, Grafana, EFK/ELK stack, Signoz, OpenTelemetry</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600 transition-all"
                >
                  <Lock className="w-10 h-10 text-yellow-600 dark:text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Security & Compliance</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Vulnerability scanning, secrets management, access controls</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl p-6 border-2 border-pink-200 dark:border-pink-800 hover:border-pink-400 dark:hover:border-pink-600 transition-all"
                >
                  <Server className="w-10 h-10 text-pink-600 dark:text-pink-400 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Tools & Platforms</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Ansible, Git, Vault, Trivy, Nexus, Digital Ocean, Jira, Confluence</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-all"
                >
                  <Terminal className="w-10 h-10 text-green-600 dark:text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Programming & Scripting</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Go, Python, Shell, Bash</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Grid - Comprehensive */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  DevOps Tools & Technologies
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  50+ tools across the modern DevOps ecosystem
                </p>
              </motion.div>

              {/* Cloud Platforms */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Cloud className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                  Cloud Platforms
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {cloudPlatforms.map((tech: any, index: number) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.08, y: -5 }}
                        className="group"
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-xl transition-all">
                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} mb-2 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{tech.name}</h4>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* CI/CD Tools */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <GitBranch className="w-7 h-7 text-red-600 dark:text-red-400" />
                  CI/CD & DevOps Tools
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cicdTools.map((tech: any, index: number) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.08, y: -5 }}
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-slate-200 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-500 hover:shadow-xl transition-all">
                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} mb-2`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{tech.name}</h4>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Infrastructure as Code */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Code2 className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  Infrastructure as Code
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {iacTools.map((tech: any, index: number) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.08, y: -5 }}
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl transition-all">
                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} mb-2`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{tech.name}</h4>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Orchestration */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Container className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  Container Orchestration
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {orchestrationTools.map((tech: any, index: number) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.08, y: -5 }}
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all">
                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} mb-2`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{tech.name}</h4>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Observability */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Eye className="w-7 h-7 text-green-600 dark:text-green-400" />
                  Observability & Monitoring
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {observabilityTools.map((tech: any, index: number) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.08, y: -5 }}
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-500 hover:shadow-xl transition-all">
                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} mb-2`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{tech.name}</h4>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Programming Languages */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Terminal className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                  Programming & Scripting
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {programmingTools.map((tech: any, index: number) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.08, y: -5 }}
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-xl transition-all">
                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} mb-2`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{tech.name}</h4>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Other Tools */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Package className="w-7 h-7 text-pink-600 dark:text-pink-400" />
                  Additional Tools & Platforms
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {otherTools.map((tech: any, index: number) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.08, y: -5 }}
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-slate-200 dark:border-slate-700 hover:border-pink-400 dark:hover:border-pink-500 hover:shadow-xl transition-all">
                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} mb-2`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{tech.name}</h4>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  Professional Experience
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  Building resilient infrastructure at scale
                </p>
              </motion.div>

              {/* Current Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 shadow-2xl border-2 border-cyan-200 dark:border-cyan-800 mb-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">
                      DevOps Engineer
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-lg mb-1">
                      <Briefcase className="w-5 h-5" />
                      <span>Anwar Technologies</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <MapPin className="w-4 h-4" />
                      <span>Dhaka - Onsite</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-bold shadow-lg">
                    <TrendingUp className="w-5 h-5" />
                    <span>October 2024 — Present</span>
                  </div>
                </div>

                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                    <span>Collaborate with development & operations teams to understand project requirements, KPIs and deployment targets; translated them into <strong>infrastructure & release workflows</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                    <span>Engineered high-performance <strong>CI/CD workflows with GitLab CI and Jenkins</strong> automating application build, test, containerization and deployment phases; reduced deployment tasks by <strong>85%</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                    <span>Led enterprise-wide <strong>GitOps transformation using ArgoCD</strong>, establishing self-service deployment capabilities that <strong>improved reliability and turnaround time for development teams by empowering infrastructure autonomy</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                    <span>Containerized microservices into <strong>Docker images and orchestrated deployments on Kubernetes (DOKS or Kubeadm)</strong>, enabling horizontal scaling, resilient service mesh architecture, and <strong>zero-downtime rollouts</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                    <span>Deployed end-to-end observability stack with <strong>Prometheus, Grafana, and OpenTelemetry</strong>, reducing MTTR through real-time system insights, while establishing centralized logging with <strong>Elasticsearch (EFK)</strong> for correlation, aggregation and analysis across distributed systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                    <span>Provisioned AWS infrastructure using <strong>Terraform (EKS, VPC, S3, IAM roles)</strong>, ensuring repeatable and scalable deployments</span>
                  </li>
                </ul>
              </motion.div>

              {/* Key Projects */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">AWS EKS Event-Driven Auto-Scaler</h4>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 font-semibold">Oct 2024 — Present</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400">•</span>
                      <span>Deployed <strong>Kubernetes applications on AWS EKS</strong> using <strong>KEDA</strong>, to auto-scale based on <strong>RabbitMQ</strong> queue length</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400">•</span>
                      <span>Implemented <strong>Velero with Amazon S3</strong> for periodic backups of <strong>Kubernetes resources and persistent volumes</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400">•</span>
                      <span>Built robust AWS ingress setup using <strong>AWS ALB via AWS Load Balancer Controller</strong> with <strong>SSL termination via ACM</strong></span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">SmartDB-Terraform</h4>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold">Oct 2024 — Present</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">•</span>
                      <span>Built "ShopSmart Resilient Infra" — a multi-region <strong>Terraform-based platform</strong> enabling high availability and <strong>disaster recovery</strong> for an online application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">•</span>
                      <span>Engineered a multi-region AWS infrastructure with <strong>warm-standby DR via Terraform</strong>, ensuring high availability across failure domains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">•</span>
                      <span>Integrated <strong>cross-region data replication + DNS failover automation</strong> to satisfy <strong>RPO less than 5 min</strong> and <strong>RTO less than 30 min</strong></span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certification */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                      Education
                    </h2>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                        <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          Bachelor of Science
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                          Computer Science and Engineering
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
                          American International University-Bangladesh
                        </p>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold">
                            May 2017 — May 2021
                          </span>
                          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold">
                            Dhaka, Bangladesh
                          </span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800">
                          <Award className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                          <span className="text-slate-900 dark:text-white font-bold">CGPA: 3.71/4.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Certification */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                      Certifications
                    </h2>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border-2 border-cyan-200 dark:border-cyan-800">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
                        <Shield className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          CKA-CNCF
                        </h3>
                        <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold mb-3">
                          Certified Kubernetes Administrator
                        </p>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold">
                            August 2025
                          </span>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            <strong>Professional certification</strong> demonstrating expertise in deploying, managing, and troubleshooting Kubernetes clusters in production environments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-6">
                  <Rocket className="w-5 h-5" />
                  <span className="font-semibold">Available for Opportunities</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Let's Build Something Great Together
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-4">
                  Open to collaboration, consulting, and interesting DevOps challenges
                </p>
                <p className="text-lg text-white/80 mb-10">
                  Specializing in cloud infrastructure, Kubernetes orchestration, and CI/CD automation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="mailto:kader.devops@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-cyan-600 font-bold text-lg hover:bg-slate-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-6 h-6" />
                  <span>Get in Touch</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://github.com/onedord1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <Github className="w-6 h-6" />
                  <span>View GitHub</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">(+880) 1776629162</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">kader.devops@gmail.com</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
