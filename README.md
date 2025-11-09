# 🌟 Pulsimo Landing Website

> A stunning, animated landing page for Pulsimo - The Modern Service Monitoring Platform

![Tech Stack](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0+-38bdf8?style=for-the-badge&logo=tailwind-css)

---

## ✨ Features

- 🎨 **Beautiful Design** - Modern, clean, and professional
- 🎬 **Smooth Animations** - Scroll-triggered and interactive
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Lightning Fast** - Optimized performance
- 🎯 **SEO Optimized** - Meta tags and sitemap
- 🌙 **Dark Mode** - Matches Pulsimo dashboard theme

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to project
cd pulsimo-landing-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Additional Setup

### Install shadcn/ui Components

```bash
# Initialize shadcn/ui
npx shadcn-ui@latest init

# Add components as needed
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add input
```

### Install Animation Libraries

```bash
npm install framer-motion react-intersection-observer
```

---

## 🎨 Design System

### Colors
- **Primary:** Violet to Purple gradient (`#7c3aed` → `#a855f7`)
- **Accent:** Cyan (`#06b6d4`)
- **Success:** Green (`#10b981`)
- **Warning:** Orange (`#f59e0b`)
- **Error:** Red (`#ef4444`)

### Typography
- **Headings:** Inter Bold
- **Body:** Inter Regular
- **Code:** JetBrains Mono

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Features.tsx      # Features section
│   │   ├── Benefits.tsx      # Benefits section
│   │   ├── Pricing.tsx       # Pricing section
│   │   └── Testimonials.tsx  # Testimonials section
│   ├── ui/                   # shadcn components
│   └── layout/
│       ├── Header.tsx        # Navigation
│       └── Footer.tsx        # Footer
└── lib/
    └── utils.ts              # Utility functions
```

---

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev/) - Icons

---

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
```

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t pulsimo-landing .
docker run -p 3001:3000 pulsimo-landing
```

---

## 📄 License

This project is part of the Pulsimo monitoring system.

---

## 💬 Next Steps

**Continue development in a NEW CHAT** focused on this landing page project!

Topics to cover:
1. Create animated Hero section
2. Build Features showcase
3. Add pricing cards
4. Implement testimonials carousel
5. Create contact form
6. Add SEO optimization
7. Deploy to production

**Start a new conversation and let's build something amazing! 🚀**
