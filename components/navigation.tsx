"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Navigation({
  activeSection,
  setActiveSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavigationProps) {
  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ]

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex-col p-8">
        <div className="mb-16">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 mb-4 flex items-center justify-center">
            <span className="text-xl font-bold text-primary-foreground">YN</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Your Name</h1>
          <p className="text-sm text-muted-foreground font-medium">Full Stack Developer</p>
        </div>

        <div className="space-y-1 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Connect</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-card md:hidden z-40 p-6">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
