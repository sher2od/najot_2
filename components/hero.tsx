export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="max-w-3xl w-full">
        <div className="mb-12 flex flex-col items-start">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 mb-8 flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-primary-foreground">YN</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6 leading-tight">
            Crafting digital experiences with code and creativity.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            I'm a full-stack developer specializing in building modern web applications. I combine clean code,
            thoughtful design, and user-focused development to create solutions that matter.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Currently exploring emerging technologies and collaborating on impactful projects. Passionate about open
            source and continuous learning.
          </p>
        </div>

        <div className="pt-12 border-t border-border">
          <h3 className="text-xs font-bold text-primary mb-6 uppercase tracking-widest">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "REST APIs", "Git"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg border border-border hover:border-primary transition-colors duration-200"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
