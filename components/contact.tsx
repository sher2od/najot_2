import { Mail, Linkedin, Github, Twitter, ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="max-w-2xl w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm always open to new opportunities and collaborations. Reach out and let's create something amazing
            together.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-primary hover:bg-muted hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">your.email@example.com</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href="#"
            className="flex items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-primary hover:bg-muted hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="font-semibold text-foreground">LinkedIn</p>
                <p className="text-sm text-muted-foreground">linkedin.com/in/yourprofile</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href="#"
            className="flex items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-primary hover:bg-muted hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Github size={24} />
              </div>
              <div>
                <p className="font-semibold text-foreground">GitHub</p>
                <p className="text-sm text-muted-foreground">github.com/yourprofile</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href="#"
            className="flex items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-primary hover:bg-muted hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Twitter size={24} />
              </div>
              <div>
                <p className="font-semibold text-foreground">Twitter</p>
                <p className="text-sm text-muted-foreground">@yourhandle</p>
              </div>
            </div>
            <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">© 2025 Your Name. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
