import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navLinksRef = useRef({})
  const navContainerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ['home', 'about', 'skills', 'portfolio', 'certificates', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update indicator position when active section changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = navLinksRef.current[activeSection]
      const container = navContainerRef.current
      
      if (activeLink && container) {
        // Use offsetLeft and offsetWidth for precise positioning
        const left = activeLink.offsetLeft
        const width = activeLink.offsetWidth
        
        setIndicatorStyle({
          left: left,
          width: width,
        })
      }
    }

    // Update immediately
    updateIndicator()
    
    // Also update with slight delay to ensure DOM is settled
    const timer = setTimeout(updateIndicator, 50)
    
    // Add another update for safety
    const timer2 = setTimeout(updateIndicator, 200)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [activeSection])

  // Update indicator on window resize
  useEffect(() => {
    const handleResize = () => {
      const activeLink = navLinksRef.current[activeSection]
      const container = navContainerRef.current
      
      if (activeLink && container) {
        const left = activeLink.offsetLeft
        const width = activeLink.offsetWidth
        
        setIndicatorStyle({
          left: left,
          width: width,
        })
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeSection])

  // Initial position on mount
  useEffect(() => {
    const updateInitial = () => {
      const activeLink = navLinksRef.current[activeSection]
      const container = navContainerRef.current
      
      if (activeLink && container) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
        })
      }
    }
    
    // Multiple updates to ensure accuracy
    updateInitial()
    const timer1 = setTimeout(updateInitial, 100)
    const timer2 = setTimeout(updateInitial, 300)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-lg shadow-lg border-b border-bg-tertiary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Logo - Positioned Absolute Left */}
          <a href="#home" className="absolute left-4 font-heading text-2xl font-bold text-accent tracking-tighter">
            Noe
          </a>

          {/* Desktop Navigation - Centered */}
          <div ref={navContainerRef} className="hidden md:flex items-center gap-2 relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  ref={(el) => (navLinksRef.current[link.href.substring(1)] = el)}
                  className={`relative px-5 py-2 font-medium transition-all duration-300 rounded-full z-10 ${
                    isActive 
                      ? 'text-bg-primary' 
                      : 'text-text-light hover:text-accent'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
            
            {/* Dynamic Island Indicator - Behind text */}
            <span
              className="absolute bg-accent rounded-full transition-all duration-500 ease-out shadow-lg shadow-accent/30 z-0 pointer-events-none"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                height: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-accent"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-bg-secondary/95 backdrop-blur-lg rounded-lg mt-2 px-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition-colors duration-300 ${
                    isActive ? 'text-accent font-semibold' : 'text-text-light hover:text-accent'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
