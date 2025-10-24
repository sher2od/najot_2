"use client"

import { useState } from "react"
import { Mail, Linkedin, Github, Twitter, ArrowRight, Menu, X, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory, payment processing, and analytics dashboard. Handles 10k+ daily transactions with 99.9% uptime.",
      tags: ["Next.js", "React", "Stripe", "PostgreSQL", "Redis"],
      image: "/modern-e-commerce-platform-dashboard-with-products.jpg",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative workspace with real-time sync, team permissions, and advanced filtering. Used by 500+ teams for project coordination and workflow automation.",
      tags: ["React", "Firebase", "Tailwind CSS", "WebSocket"],
      image: "/task-management-app.png",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "Enterprise analytics platform with custom visualizations, real-time data processing, and predictive insights. Processes 1M+ data points daily.",
      tags: ["Next.js", "D3.js", "PostgreSQL", "TypeScript"],
      image: "/analytics-dashboard.png",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Design System",
      description:
        "Comprehensive component library with 100+ components, accessibility standards, and design tokens. Adopted across 15+ internal projects.",
      tags: ["React", "Storybook", "TypeScript", "Tailwind CSS"],
      image: "/project-design.jpg",
      link: "#",
      github: "#",
    },
  ]

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "REST APIs", "GraphQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
  ]

  const experience = [
    {
      role: "Senior Frontend Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading frontend architecture and mentoring junior developers",
    },
    {
      role: "Full Stack Developer",
      company: "Startup",
      period: "2020 - 2022",
      description: "Built scalable web applications from scratch",
    },
    {
      role: "Frontend Developer",
      company: "Agency",
      period: "2018 - 2020",
      description: "Developed responsive websites for enterprise clients",
    },
  ]

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "#",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourprofile",
      href: "#",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@yourhandle",
      href: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/60 flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-primary-foreground">YN</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Your Name</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {[
              { id: "home", label: "Home" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold transition-all duration-300 relative group ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col p-4 gap-2">
              {[
                { id: "home", label: "Home" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="mb-8 inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold text-balance mb-8 leading-tight">
                Raqamli tajribalarni aniqlik va ijodiylik bilan yaratish.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                8+ yillik tajribaga ega senior frontend muhandis. React, Next.js va zamonaviy veb texnologiyalarida
                ixtisoslashgan. Toza kod, ishlash samaradorligi va foydalanuvchi tajribasini yaratishga ishtiyoq.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2"
                >
                  Mening ishlarini ko'ring <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-all duration-300"
                >
                  Bog'lanish
                </button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                <Image
                  src="/professional-developer-portrait.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted text-foreground text-sm font-medium rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Mening full-stack development, design systems va ishlash samaradorligidagi eng so'nggi ishlarining
              tanlangan to'plami.
            </p>
          </div>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-cols-2 md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/50 hover:border-primary transition-all duration-300">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-border">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold transition-all duration-200 group/link"
                    >
                      View Project{" "}
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold transition-all duration-200 group/link"
                    >
                      GitHub <Github size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Tajriba</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Startuplar va o'rnatilgan kompaniyalarda mahsulot yaratish va jamoalarni boshqarish bo'yicha professional
              yo'lim.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-primary font-semibold mt-1">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground font-semibold mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Bog'lanish</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Men har doim yangi loyihalar va imkoniyatlar haqida eshitishga qiziqaman. Muammosiz bog'lanib qolishingiz
              mumkin!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactLinks.map((contact) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group p-8 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-xl hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{contact.label}</p>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1"
                    />
                  </div>
                </a>
              )
            })}
          </div>

          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2025 Sizning Ismingiz. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
