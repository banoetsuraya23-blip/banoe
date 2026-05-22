const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up">
          <h2 className="section-heading text-center">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
        </div>

        {/* ROW 1: Background & Education */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div data-aos="fade-right" className="bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary/10 rounded-3xl p-8 transition-all duration-500 hover:bg-bg-secondary/70 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 hover:scale-[1.02] h-full">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-text-light mb-4">Background</h3>
            <p className="text-text-muted leading-relaxed">
              Anak pertama dari tiga bersaudara yang lahir dan besar di Semarang. Ketertarikan pada dunia teknologi mulai tumbuh sejak SMP, khususnya di bidang web development. Sejak saat itu mulai mempelajari dasar-dasar pembuatan website dan terus mengembangkan kemampuan di bidang front-end development. Saat ini fokus mempelajari pengembangan tampilan website yang modern, responsif, dan user-friendly melalui berbagai project pribadi. Memiliki semangat belajar tinggi dan terus mempersiapkan diri untuk berkarier sebagai software engineer di masa depan.
            </p>
          </div>

          <div data-aos="fade-left" className="bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary/10 rounded-3xl p-8 transition-all duration-500 hover:bg-bg-secondary/70 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 hover:scale-[1.02] h-full">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-text-light mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-accent/40 pl-4 py-2 hover:border-l-4 hover:pl-3 hover:bg-accent/5 rounded-r-2xl transition-all duration-300 cursor-pointer">
                <h4 className="font-semibold text-text-white">TK ABA 43</h4>
                <p className="text-accent text-sm">2013 - 2015</p>
              </div>
              <div className="border-l-2 border-accent/55 pl-4 py-2 hover:border-l-4 hover:pl-3 hover:bg-accent/5 rounded-r-2xl transition-all duration-300 cursor-pointer">
                <h4 className="font-semibold text-text-white">SDIT Bunayya</h4>
                <p className="text-accent text-sm">2015 - 2021</p>
              </div>
              <div className="border-l-2 border-accent/75 pl-4 py-2 hover:border-l-4 hover:pl-3 hover:bg-accent/5 rounded-r-2xl transition-all duration-300 cursor-pointer">
                <h4 className="font-semibold text-text-white">SMP Negeri 5 Semarang</h4>
                <p className="text-accent text-sm">2021 - 2024</p>
              </div>
              <div className="border-l-2 border-accent pl-4 py-2 hover:border-l-4 hover:pl-3 hover:bg-accent/5 rounded-r-2xl transition-all duration-300 cursor-pointer">
                <h4 className="font-semibold text-text-white">SMK Negeri 7 Semarang</h4>
                <p className="text-accent text-sm">2024 - 2028</p>
                <p className="text-text-muted text-sm">Sistem Informasi, Jaringan, dan Aplikasi (SIJA)</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Interests & Hobbies & Career Goals */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div data-aos="fade-right" className="bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary/10 rounded-3xl p-8 transition-all duration-500 hover:bg-bg-secondary/70 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 hover:scale-[1.02] h-full">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-text-light mb-4">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-3">
              {['Membaca Komik', 'Bermain Game', 'Mendengarkan Musik', 'Menonton Film', 'Coding', 'Design', 'Teknologi', 'Olahraga'].map((hobby) => (
                <span 
                  key={hobby}
                  className="px-4 py-2.5 bg-accent/10 border border-accent/30 rounded-2xl text-accent hover:bg-accent hover:text-bg-primary hover:scale-110 hover:-translate-y-1 hover:rotate-2 transition-all duration-300 cursor-pointer shadow-lg shadow-accent/0 hover:shadow-accent/20 text-sm"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" className="bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary/10 rounded-3xl p-8 transition-all duration-500 hover:bg-bg-secondary/70 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 hover:scale-[1.02] h-full">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-text-light mb-4">Career Goals</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              Fokus menjadi <span className="text-accent font-semibold">Web Developer</span> yang kompeten 
              dan <span className="text-accent font-semibold">Data Analyst</span>. Terus belajar teknologi 
              baru dan best practices untuk membangun aplikasi yang efisien dan bermanfaat.
            </p>
            <div className="flex items-center gap-2 text-accent group cursor-pointer">
              <svg className="w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-medium group-hover:font-bold group-hover:text-accent-light group-hover:tracking-wide transition-all duration-300">Terus belajar, terus berkembang</span>
            </div>
          </div>
        </div>

        {/* ROW 3: Soft Skills & Hard Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div data-aos="fade-right" className="bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary/10 rounded-3xl p-8 transition-all duration-500 hover:bg-bg-secondary/70 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 hover:scale-[1.02] h-full">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-text-light mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Communication', 'Teamwork', 'Problem Solving', 'Adaptability'].map((skill) => (
                <div 
                  key={skill} 
                  className="p-4 rounded-2xl bg-bg-primary/30 hover:bg-accent/10 hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-text-light group-hover:text-accent group-hover:font-semibold transition-all duration-300 block text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" className="bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary/10 rounded-3xl p-8 transition-all duration-500 hover:bg-bg-secondary/70 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 hover:scale-[1.02] h-full">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-text-light mb-4">Hard Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Programming', 'Basic UI/UX Design', 'HTML, CSS, JavaScript', 'Web Development'].map((skill) => (
                <div 
                  key={skill} 
                  className="p-4 rounded-2xl bg-bg-primary/30 hover:bg-accent/10 hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-text-light group-hover:text-accent group-hover:font-semibold transition-all duration-300 block text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 4: CV & River of Life - Centered Side by Side */}
        <div data-aos="fade-up" className="flex justify-center gap-6">
          <a
            href="https://drive.google.com/file/d/1rmfMj_hZ5jJU40U6wsqNrVtV2OfvLgNv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-2xl hover:scale-105 hover:-rotate-1 transition-all duration-300 px-8"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Unduh CV
            </span>
          </a>
          
          <a
            href="/images/RIVER OF LIFE (2).png"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-2xl hover:scale-105 hover:rotate-1 transition-all duration-300 px-8"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              River of Life
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
