import { Github, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with product catalog, shopping cart, and payment integration. Built with modern technologies for scalability and performance.",
    tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team collaboration features. Designed for productivity and seamless team workflows.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with real-time data, forecasts, and location-based features. Provides intuitive weather insights with interactive visualizations.",
    tags: ["Next.js", "API Integration", "Charts"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Modern portfolio website showcasing projects and skills with smooth animations. Demonstrates design and development capabilities in a professional context.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A selection of recent work showcasing my skills and experience.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-6 border-t border-border">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold transition-all duration-200"
                >
                  View Project <ArrowRight size={16} />
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold transition-all duration-200"
                >
                  GitHub <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
