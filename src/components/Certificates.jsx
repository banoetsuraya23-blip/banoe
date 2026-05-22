const Certificates = () => {
  const certificates = [
    {
      title: 'Cisco IT Essentials',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      image: '/images/certificate 1.jpg',
      isPdf: false,
      placeholder: false,
    },
    {
      title: 'Hour of Code',
      issuer: 'Code.org',
      date: '2025',
      image: '/images/certificate 2.jpg',
      isPdf: false,
      placeholder: false,
    },
    {
      title: 'Certificate 3',
      issuer: 'Coming Soon',
      date: null,
      image: null,
      isPdf: false,
      placeholder: true,
    },
  ]

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up">
          <h2 className="section-heading text-center">Certificates</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-center text-text-muted max-w-2xl mx-auto mb-12">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={cert.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="card group cursor-pointer"
              onClick={() => {
                if (cert.image && !cert.placeholder) {
                  window.open(cert.image, '_blank')
                }
              }}
            >
              {/* Certificate Image */}
              <div className="w-full h-64 bg-gradient-to-br from-bg-primary to-accent-dark rounded-lg mb-4 flex flex-col items-center justify-center overflow-hidden border-2 border-accent/20">
                {cert.image && !cert.placeholder ? (
                  cert.isPdf ? (
                    // PDF Preview
                    <div className="w-full h-full flex flex-col items-center justify-center bg-red-900/10">
                      <svg
                        className="w-20 h-20 text-accent mb-3 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                        <path d="M14 2v6h6" />
                        <path d="M10 12h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1z" />
                      </svg>
                      <p className="text-accent font-semibold text-sm">PDF Certificate</p>
                      <p className="text-text-muted text-xs mt-1">Click to view</p>
                    </div>
                  ) : (
                    // Image Preview
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                  )
                ) : (
                  // Placeholder
                  <>
                    <svg
                      className="w-16 h-16 text-accent/50 mb-3 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <p className="text-text-muted text-sm">Certificate Image</p>
                    <p className="text-accent text-xs mt-1">Coming Soon</p>
                  </>
                )}
              </div>

              {/* Certificate Info */}
              <h3 className="font-heading text-xl font-bold text-text-white mb-2 tracking-tight">
                {cert.title}
              </h3>
              <p className="text-accent text-sm font-medium mb-1">{cert.issuer}</p>
              {cert.date && (
                <p className="text-text-muted text-sm">{cert.date}</p>
              )}

              {cert.placeholder && (
                <div className="mt-3 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs inline-block">
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div data-aos="fade-up" className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            Certificates will be added as I complete more courses and certifications
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certificates
