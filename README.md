# Ege Zambelli - Portfolio Website

A modern, responsive portfolio website showcasing my work in cloud engineering, cybersecurity, and software development.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with red accents and animated lightning effects
- **Multi-language Support**: Turkish (TR), Polish (PL), and English (ENG)
- **Interactive Animations**: Click-based particle effects and smooth scroll transitions
- **Projects Showcase**: Detailed presentation of thesis project and cloud automation work
- **Responsive Design**: Fully responsive on all devices
- **Custom Cursor**: Interactive red circle cursor
- **Active Section Indicator**: Real-time navigation indicator showing current section

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## 📦 Installation & Setup

1. Clone or navigate to the project:
```bash
cd websitesi2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
WATCHPACK_POLLING=true npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
websitesi2/
├── app/
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles & animations
├── components/
│   ├── Navbar.tsx           # Navigation with language switcher
│   ├── Hero.tsx             # Hero section
│   ├── Projects.tsx         # Projects showcase
│   ├── Contact.tsx          # Contact section
│   ├── LanguageProvider.tsx # Multi-language support
│   ├── ClickParticles.tsx   # Click animation effects
│   └── AnimatedBackground.tsx # Lightning animation
├── public/
│   ├── images/              # Project images (SVG)
│   └── robots.txt
└── package.json
```

## 🎨 Key Components

- **Navbar**: Fixed navigation with language switcher, active section indicator, and 2025 year badge
- **Hero**: Introduction section with animated background
- **Projects**: Showcase of thesis project and cloud automation work
- **Contact**: Email and social links
- **AnimatedBackground**: Red-to-white gradient lightning effects
- **ClickParticles**: Interactive particle explosion on click

## 🌐 Language Support

The portfolio supports three languages:
- **TR** - Turkish
- **PL** - Polish  
- **ENG** - English (default)

Language preference is saved in localStorage.

## ✨ Special Features

- Custom SVG cursor (red circle)
- Particle effect on every click
- Smooth section scrolling with automatic active indicator
- Responsive navbar that scales appropriately
- Professional project showcase with metrics and highlights

## 📄 License

© 2025 Ege Zambelli. All rights reserved.

## 👤 Author

**Ege Zambelli**
- 3rd Year Software Engineering Student
- WSB Merito Wrocław University
- Cloud Engineer & Security Enthusiast
- Specialization: Cloud Architecture, Cybersecurity, Automation
