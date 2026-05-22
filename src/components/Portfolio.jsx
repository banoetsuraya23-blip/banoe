const Portfolio = () => {
  const projects = [
    {
      title: 'Robloxin Aja',
      subtitle: 'Gaming Community Website',
      description:
        'Website ini berisi konten seputar game Roblox, seperti informasi, tips, atau penawaran terkait akun dan fitur dalam game. Targetnya adalah pemain Roblox yang ingin mendapatkan tambahan pengalaman atau keuntungan tertentu saat bermain.',
      tags: ['React', 'JavaScript', 'Web Design'],
      github: 'https://github.com/akhtarakifa/Robloxin-Aja',
      demo: 'https://robloxinaja.pages.dev/',
      image: '/images/portfolio web.png', // Portfolio image
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up">
          <h2 className="section-heading text-center">Portfolio</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-center text-text-muted max-w-2xl mx-auto mb-12">
            A showcase of my recent projects and development work
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="card group"
              >
                {/* Project Image - 16:9 Aspect Ratio */}
                <div className="w-full aspect-video bg-gradient-to-br from-accent-dark to-accent rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to icon if image not found
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  {/* Fallback Icon */}
                  <div className="w-full h-full flex items-center justify-center" style={{ display: project.image ? 'none' : 'flex' }}>
                    <svg
                      className="w-20 h-20 text-text-white/30 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="font-heading text-2xl font-bold text-text-white mb-1 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-text-muted leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-accent/10 border border-accent/30 rounded-full text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-bg-primary transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-text-white rounded-lg hover:bg-accent-light transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Projects Coming Soon */}
        <div data-aos="fade-up" className="mt-12 text-center">
          <div className="card inline-block">
            <p className="text-text-muted">
              More exciting projects coming soon! Stay tuned.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
