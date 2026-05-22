const Skills = () => {
  // ============================================
  // DATA SKILLS
  // ============================================
  
  // Technical Skills dengan Progress Bar
  const technicalSkills = [
    { name: 'HTML', percentage: 80, color: 'from-accent-light to-accent' },
    { name: 'CSS', percentage: 75, color: 'from-accent to-accent-medium' },
    { name: 'JavaScript', percentage: 50, color: 'from-accent-medium to-accent-dark' },
    { name: 'React', percentage: 20, color: 'from-accent-dark to-accent' },
    { name: 'Tailwind CSS', percentage: 70, color: 'from-accent-light to-accent-medium' },
    { name: 'Git & GitHub', percentage: 65, color: 'from-accent to-accent-dark' },
    { name: 'Responsive Design', percentage: 78, color: 'from-accent-medium to-accent-light' },
    { name: 'Vite', percentage: 55, color: 'from-accent-dark to-accent-medium' },
  ]

  // Design & Soft Skills dengan Progress Bar
  const designAndSoftSkills = [
    { name: 'Figma', percentage: 50, color: 'from-accent-light to-accent' },
    { name: 'Editing', percentage: 60, color: 'from-accent to-accent-medium' },
    { name: 'Teamwork', percentage: 85, color: 'from-accent-medium to-accent-dark' },
    { name: 'Adaptability', percentage: 80, color: 'from-accent-dark to-accent' },
    { name: 'Communication', percentage: 75, color: 'from-accent-light to-accent-medium' },
    { name: 'Time Management', percentage: 70, color: 'from-accent to-accent-dark' },
    { name: 'Problem Solving', percentage: 82, color: 'from-accent-medium to-accent-light' },
    { name: 'Critical Thinking', percentage: 77, color: 'from-accent-dark to-accent-medium' },
  ]

  // Gabungkan semua skills untuk hitung rata-rata
  const allSkills = [...technicalSkills, ...designAndSoftSkills]
  const averagePercentage = Math.round(
    allSkills.reduce((sum, skill) => sum + skill.percentage, 0) / allSkills.length
  )

  // Tools & Technologies
  const skillsData = [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript' },
      ],
    },
    {
      category: 'Framework',
      items: [
        { name: 'React' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'VS Code' },
        { name: 'Kiro' },
      ],
    },
    {
      category: 'OS',
      items: [
        { name: 'Windows' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ============================================ */}
        {/* SECTION HEADER */}
        {/* ============================================ */}
        <div data-aos="fade-up">
          <h2 className="section-heading text-center">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-center text-text-muted max-w-2xl mx-auto mb-12">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* ============================================ */}
        {/* SKILLS PROGRESS BARS WITH CIRCULAR AVERAGE */}
        {/* ============================================ */}
        <div data-aos="fade-up" className="mb-12 max-w-6xl mx-auto">
          <div className="card">
            <h3 className="section-subheading text-center mb-8">Technical Proficiency</h3>
            
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              {/* LEFT SIDE: Progress Bars */}
              <div className="space-y-8">
                {/* Technical Skills */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h4 className="text-accent font-semibold text-lg">Technical Skills</h4>
                  </div>
                  <div className="space-y-5">
                    {technicalSkills.map((skill, idx) => (
                      <div key={skill.name} data-aos="fade-right" data-aos-delay={idx * 100}>
                        <div className="flex justify-between items-center mb-2.5">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-text-light font-medium text-base">{skill.name}</span>
                          </div>
                          <span className="text-accent font-semibold text-base">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-bg-primary rounded-full h-3.5 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ width: `${skill.percentage}%` }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-progress-shine"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design & Soft Skills */}
                <div className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-accent font-semibold text-lg">Design & Soft Skills</h4>
                  </div>
                  <div className="space-y-5">
                    {designAndSoftSkills.map((skill, idx) => (
                      <div key={skill.name} data-aos="fade-right" data-aos-delay={idx * 100 + 400}>
                        <div className="flex justify-between items-center mb-2.5">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-text-light font-medium text-base">{skill.name}</span>
                          </div>
                          <span className="text-accent font-semibold text-base">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-bg-primary rounded-full h-3.5 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ width: `${skill.percentage}%` }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-progress-shine"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Circular Average */}
              <div data-aos="fade-left" className="flex justify-center lg:justify-end">
                <div className="relative w-48 h-48">
                  {/* Background Circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-bg-primary"
                    />
                    {/* Progress Circle with Animation */}
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 80}`}
                      strokeDashoffset={`${2 * Math.PI * 80 * (1 - averagePercentage / 100)}`}
                      className="transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A4161A" />
                        <stop offset="50%" stopColor="#BA181B" />
                        <stop offset="100%" stopColor="#E5383B" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-accent font-heading">{averagePercentage}%</span>
                    <span className="text-sm text-text-muted mt-1">Average</span>
                    <span className="text-xs text-text-muted">Skills</span>
                  </div>

                  {/* Animated shine overlay */}
                  <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-progress-shine"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* TOOLS & TECHNOLOGIES GRID */}
        {/* ============================================ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => (
            <div
              key={category.category}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="card group hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
            >
              <h3 className="font-heading text-xl font-semibold text-accent mb-4 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={item.name}
                    data-aos="fade-right"
                    data-aos-delay={idx * 100 + itemIdx * 50}
                    className="relative overflow-hidden p-3 bg-bg-primary/50 rounded-lg hover:bg-accent/10 hover:border-l-4 hover:border-accent hover:pl-4 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group/item"
                  >
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                    
                    {/* Text content */}
                    <span className="relative text-text-light font-medium group-hover/item:text-accent group-hover/item:font-semibold transition-all duration-300">
                      {item.name}
                    </span>
                    
                    {/* Animated dot indicator */}
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:animate-pulse transition-opacity duration-300"></span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ============================================ */}
        {/* OTHER COMPETENCIES */}
        {/* ============================================ */}
        <div data-aos="fade-up" className="mt-12">
          <div className="card">
            <h3 className="section-subheading text-center mb-6">Other Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Responsive Design',
                'UI/UX Principles',
                'Version Control (Git)',
                'Problem Solving',
                'Team Collaboration',
                'Agile Methodology',
                'RESTful APIs',
                'Database Basics',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent hover:bg-accent hover:text-bg-primary transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
