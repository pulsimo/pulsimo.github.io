import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Activity,
  ArrowUpRight,
  Award,
  Briefcase,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Github,
  GraduationCap,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Phone,
  Server,
  Terminal,
  Zap,
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Developers',
  description: 'Kader Khan, DevOps engineer and the developer behind Pulsimo.',
  alternates: { canonical: '/about/' },
}

const EMAIL = 'kader.devops@gmail.com'
const GITHUB = 'https://github.com/onedord1'
const LINKEDIN = 'https://linkedin.com/in/abir-k'

const stats = [
  { value: '1.5+', label: 'Years in DevOps' },
  { value: '50+', label: 'Tools and technologies' },
  { value: 'CKA', label: 'Kubernetes certified' },
  { value: '85%', label: 'Faster deployments' },
]

const skills = [
  { icon: Cloud, title: 'Cloud platforms', text: 'AWS (EC2, S3, IAM, EKS, SNS, ECR, ALB), CodePipeline, CodeDeploy, CodeBuild, DigitalOcean', tone: 'from-orange-500 to-amber-500' },
  { icon: GitBranch, title: 'CI/CD and GitOps', text: 'GitLab CI, Jenkins, ArgoCD, GitHub Actions', tone: 'from-rose-500 to-orange-500' },
  { icon: Code2, title: 'Infrastructure as code', text: 'Terraform, OpenTofu, Pulumi', tone: 'from-violet-500 to-fuchsia-500' },
  { icon: Container, title: 'Orchestration', text: 'Docker, Kubernetes (EKS, kubeadm), Helm, Kustomize', tone: 'from-cyan-500 to-blue-600' },
  { icon: Activity, title: 'Observability', text: 'Prometheus, Grafana, EFK and ELK, SigNoz, OpenTelemetry, Pulsimo', tone: 'from-emerald-500 to-teal-600' },
  { icon: Lock, title: 'Security', text: 'Vulnerability scanning with Trivy, secrets with Vault, access controls', tone: 'from-amber-500 to-yellow-500' },
  { icon: Server, title: 'Tools and platforms', text: 'Ansible, Git, Nexus, Jira, Confluence', tone: 'from-slate-500 to-slate-700' },
  { icon: Terminal, title: 'Programming', text: 'Go, Python, Shell, Bash', tone: 'from-blue-500 to-indigo-600' },
]

const experience = [
  'Work with development and operations teams to turn project requirements, KPIs and deployment targets into infrastructure and release workflows.',
  'Engineered CI/CD workflows with GitLab CI and Jenkins that automate build, test, containerization and deployment, cutting manual deployment work by 85%.',
  'Led an organization-wide GitOps transformation with ArgoCD, giving development teams self-service deployments with better reliability and turnaround.',
  'Containerized microservices and run them on Kubernetes (DOKS and kubeadm) with horizontal scaling and zero-downtime rollouts.',
  'Deployed an observability stack with Prometheus, Grafana and OpenTelemetry to reduce MTTR, plus centralized logging with Elasticsearch (EFK) across distributed systems.',
  'Provisioned AWS infrastructure with Terraform (EKS, VPC, S3, IAM roles) for repeatable, scalable deployments.',
]

const projects = [
  {
    icon: Zap,
    title: 'AWS EKS event-driven autoscaler',
    points: [
      'Kubernetes applications on AWS EKS that scale with KEDA on RabbitMQ queue length.',
      'Velero with Amazon S3 for scheduled backups of Kubernetes resources and persistent volumes.',
      'Ingress through the AWS Load Balancer Controller with TLS termination on ACM.',
    ],
  },
  {
    icon: Database,
    title: 'SmartDB-Terraform',
    points: [
      '"ShopSmart Resilient Infra": a multi-region Terraform platform for high availability and disaster recovery.',
      'Warm-standby DR across AWS regions, so a failure domain never takes the application down.',
      'Cross-region replication and DNS failover meeting an RPO under 5 minutes and an RTO under 30 minutes.',
    ],
  },
]

const card = 'rounded-2xl border border-slate-200 bg-slate-50/60 dark:border-white/[0.08] dark:bg-white/[0.02]'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">{children}</p>
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white dark:bg-black">
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl dark:bg-violet-600/25" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8">
            <div>
              <Eyebrow>The developer behind Pulsimo</Eyebrow>
              <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">Kader Khan</h1>
              <p className="mt-3 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-2xl font-semibold text-transparent dark:from-violet-400 dark:to-cyan-400">
                DevOps Engineer
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 dark:border-white/10"><Briefcase className="h-3.5 w-3.5" /> Anwar Technologies</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 dark:border-white/10"><MapPin className="h-3.5 w-3.5" /> Dhaka, Bangladesh</span>
              </div>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I automate AWS infrastructure, design CI/CD pipelines and run containerized workloads on Kubernetes, working with development and
                operations teams to keep systems fast, observable and reliable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_40px_-6px_rgba(124,58,237,0.8)] ring-1 ring-inset ring-white/20 transition hover:bg-violet-500">
                  <Mail className="h-4 w-4" /> Get in touch
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/[0.06]">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/[0.06]">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet-500/40 via-fuchsia-500/20 to-cyan-400/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-slate-900 shadow-2xl">
                <Image src="/images/kader-khan.jpg" alt="Kader Khan" width={480} height={480} priority className="aspect-square w-full object-cover" />
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <Award className="h-5 w-5" />
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-white">Certified Kubernetes Administrator</p>
                    <p className="text-slate-300">CNCF · August 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 px-0 dark:border-white/[0.08] dark:bg-white/[0.08] sm:grid-cols-4 lg:mx-8 xl:mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-6 py-6 text-center dark:bg-black">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{s.value}</dd>
                <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Skills */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <Eyebrow>Skills</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">What I work with</h2>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">From the cloud account to the dashboard that tells you something is wrong.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map(({ icon: Icon, title, text, tone }) => (
                <div key={title} className={`group relative overflow-hidden p-5 transition-colors hover:border-slate-300 dark:hover:border-white/[0.16] ${card}`}>
                  <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-violet-500/0 blur-3xl transition-colors duration-500 group-hover:bg-violet-500/15" />
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-lg`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Experience</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Building resilient infrastructure</h2>

            <div className={`mt-10 p-6 sm:p-8 ${card}`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">DevOps Engineer</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">Anwar Technologies · Dhaka, on site</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> October 2024 to present
                </span>
              </div>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {experience.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {projects.map(({ icon: Icon, title, points }) => (
                <div key={title} className={`p-6 ${card}`}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-[0_0_24px_-4px_rgba(124,58,237,0.7)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Project · October 2024 to present</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education and certification */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
            <div className={`p-6 sm:p-8 ${card}`}>
              <GraduationCap className="h-6 w-6 text-violet-500" />
              <Eyebrow><span className="mt-4 block">Education</span></Eyebrow>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">BSc in Computer Science and Engineering</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-400">American International University-Bangladesh</p>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">May 2017 to May 2021 · Dhaka · CGPA 3.71 / 4.00</p>
            </div>
            <div className={`p-6 sm:p-8 ${card}`}>
              <Award className="h-6 w-6 text-cyan-500" />
              <Eyebrow><span className="mt-4 block">Certification</span></Eyebrow>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Certified Kubernetes Administrator (CKA)</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-400">Cloud Native Computing Foundation · August 2025</p>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Deploying, managing and troubleshooting Kubernetes clusters in production.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-4 pb-28 pt-8 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-b from-violet-50 to-white px-6 py-14 text-center dark:border-violet-500/20 dark:from-violet-950/40 dark:to-black sm:px-16">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/30 blur-3xl dark:bg-violet-600/40" />
            <h2 className="relative text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Let&apos;s build something together</h2>
            <p className="relative mx-auto mt-3 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Open to collaboration, consulting and interesting DevOps problems: cloud infrastructure, Kubernetes and CI/CD.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-6px_rgba(124,58,237,0.8)] ring-1 ring-inset ring-white/20 transition hover:bg-violet-500">
                <Mail className="h-4 w-4" /> {EMAIL}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="tel:+8801776629162" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/[0.06]">
                <Phone className="h-4 w-4" /> +880 1776 629162
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
