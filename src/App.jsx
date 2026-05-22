import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="min-h-screen bg-bg-primary text-text-light relative overflow-hidden">
      {/* Abstract Background Elements with Backlight (Rear Light) Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* NEAR Rear Lights - Large, Sharp, Bright (Close to viewer) */}
        <div className="absolute top-12 left-0 w-80 h-2.5 bg-gradient-to-r from-transparent via-accent/80 to-transparent shadow-[0_0_25px_rgba(164,22,26,0.9),0_0_50px_rgba(164,22,26,0.5)] animate-speed-trail-1 rounded-full blur-[1px]"></div>
        <div className="absolute bottom-1/4 left-0 w-76 h-2.5 bg-gradient-to-r from-transparent via-accent-medium/75 to-transparent shadow-[0_0_25px_rgba(186,24,27,0.9),0_0_50px_rgba(186,24,27,0.5)] animate-speed-trail-3 rounded-full blur-[1px]"></div>
        <div className="absolute top-1/2 left-0 w-84 h-2.5 bg-gradient-to-r from-transparent via-accent/80 to-transparent shadow-[0_0_25px_rgba(164,22,26,0.9),0_0_50px_rgba(164,22,26,0.5)] animate-speed-trail-5 rounded-full blur-[1px]"></div>
        
        <div className="absolute top-0 left-1/4 w-2.5 h-80 bg-gradient-to-b from-transparent via-accent/80 to-transparent shadow-[0_0_25px_rgba(164,22,26,0.9),0_0_50px_rgba(164,22,26,0.5)] animate-speed-trail-vertical-1 rounded-full blur-[1px]"></div>
        <div className="absolute top-0 left-2/3 w-2.5 h-84 bg-gradient-to-b from-transparent via-accent/80 to-transparent shadow-[0_0_25px_rgba(164,22,26,0.9),0_0_50px_rgba(164,22,26,0.5)] animate-speed-trail-vertical-5 rounded-full blur-[1px]"></div>
        
        {/* MEDIUM Rear Lights - Medium Size, Medium Blur (Middle distance) */}
        <div className="absolute top-1/3 right-0 w-64 h-2 bg-gradient-to-l from-transparent via-accent-light/65 to-transparent shadow-[0_0_20px_rgba(229,56,59,0.8),0_0_40px_rgba(229,56,59,0.4)] animate-speed-trail-2 rounded-full blur-[2px]"></div>
        <div className="absolute top-2/3 right-0 w-60 h-2 bg-gradient-to-l from-transparent via-accent-dark/60 to-transparent shadow-[0_0_20px_rgba(102,7,8,0.7),0_0_40px_rgba(102,7,8,0.3)] animate-speed-trail-4 rounded-full blur-[2px]"></div>
        <div className="absolute bottom-1/3 right-0 w-68 h-2 bg-gradient-to-l from-transparent via-accent-light/75 to-transparent shadow-[0_0_20px_rgba(229,56,59,0.8),0_0_40px_rgba(229,56,59,0.4)] animate-speed-trail-6 rounded-full blur-[2px]"></div>
        
        <div className="absolute bottom-0 left-1/3 w-2 h-64 bg-gradient-to-t from-transparent via-accent-light/65 to-transparent shadow-[0_0_20px_rgba(229,56,59,0.8),0_0_40px_rgba(229,56,59,0.4)] animate-speed-trail-vertical-2 rounded-full blur-[2px]"></div>
        <div className="absolute top-0 right-1/4 w-2 h-68 bg-gradient-to-b from-transparent via-accent-medium/68 to-transparent shadow-[0_0_20px_rgba(186,24,27,0.8),0_0_40px_rgba(186,24,27,0.4)] animate-speed-trail-vertical-3 rounded-full blur-[2px]"></div>
        
        {/* FAR Rear Lights - Small, Blurry, Dim (Far from viewer) */}
        <div className="absolute top-20 left-0 w-48 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent shadow-[0_0_15px_rgba(164,22,26,0.5)] animate-speed-trail-7 rounded-full blur-[3px]"></div>
        <div className="absolute bottom-1/5 right-0 w-44 h-1 bg-gradient-to-l from-transparent via-accent-light/35 to-transparent shadow-[0_0_15px_rgba(229,56,59,0.5)] animate-speed-trail-8 rounded-full blur-[3px]"></div>
        <div className="absolute top-3/4 left-0 w-40 h-1 bg-gradient-to-r from-transparent via-accent-dark/30 to-transparent shadow-[0_0_15px_rgba(102,7,8,0.4)] animate-speed-trail-1 rounded-full blur-[3px]"></div>
        
        <div className="absolute top-0 left-1/5 w-1 h-48 bg-gradient-to-b from-transparent via-accent/40 to-transparent shadow-[0_0_15px_rgba(164,22,26,0.5)] animate-speed-trail-vertical-6 rounded-full blur-[3px]"></div>
        <div className="absolute bottom-0 right-1/5 w-1 h-44 bg-gradient-to-t from-transparent via-accent-medium/35 to-transparent shadow-[0_0_15px_rgba(186,24,27,0.5)] animate-speed-trail-vertical-4 rounded-full blur-[3px]"></div>
        <div className="absolute top-0 right-2/5 w-1 h-40 bg-gradient-to-b from-transparent via-accent-light/30 to-transparent shadow-[0_0_15px_rgba(229,56,59,0.4)] animate-speed-trail-vertical-2 rounded-full blur-[3px]"></div>
        
        {/* Abstract Organic Shapes - Floating (No Blur) */}
        <div className="absolute top-20 left-10 w-16 h-24 bg-accent/20 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] animate-float-abstract-1"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-accent-light/25 rounded-[60%_40%_30%_70%/40%_60%_70%_30%] animate-float-abstract-2"></div>
        <div className="absolute top-60 left-1/3 w-12 h-18 bg-accent-medium/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-float-abstract-3"></div>
        
        {/* Medium Abstract Blobs (No Blur) */}
        <div className="absolute top-1/4 right-1/4 w-24 h-32 bg-accent/15 rounded-[70%_30%_50%_50%/30%_60%_40%_70%] animate-blob-1"></div>
        <div className="absolute top-1/2 left-20 w-28 h-20 bg-accent-light/20 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] animate-blob-2"></div>
        <div className="absolute bottom-1/3 right-10 w-20 h-28 bg-accent-dark/18 rounded-[50%_50%_30%_70%/50%_50%_70%_30%] animate-blob-3"></div>
        
        {/* Large Organic Shapes (No Blur) */}
        <div className="absolute bottom-20 left-1/4 w-32 h-40 bg-accent/12 rounded-[60%_40%_70%_30%/40%_60%_30%_70%] animate-float-slow-abstract"></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-28 bg-accent-medium/15 rounded-[30%_70%_40%_60%/70%_30%_60%_40%] animate-drift-abstract"></div>
        
        {/* NEW: Additional Abstract Shapes - Various Sizes */}
        <div className="absolute top-1/5 left-1/2 w-18 h-26 bg-accent/18 rounded-[50%_50%_60%_40%/40%_60%_50%_50%] animate-float-abstract-1"></div>
        <div className="absolute bottom-1/5 left-1/5 w-22 h-30 bg-accent-light/22 rounded-[65%_35%_45%_55%/55%_45%_35%_65%] animate-blob-2"></div>
        <div className="absolute top-2/5 right-1/5 w-26 h-22 bg-accent-medium/16 rounded-[45%_55%_65%_35%/35%_65%_55%_45%] animate-float-abstract-3"></div>
        <div className="absolute bottom-2/5 right-2/5 w-20 h-24 bg-accent-dark/14 rounded-[55%_45%_50%_50%/50%_50%_45%_55%] animate-blob-1"></div>
        
        {/* NEW: Smaller Floating Elements */}
        <div className="absolute top-1/6 right-1/6 w-10 h-14 bg-accent/25 rounded-[70%_30%_60%_40%/40%_60%_30%_70%] animate-float-abstract-2"></div>
        <div className="absolute bottom-1/6 left-2/5 w-14 h-10 bg-accent-light/20 rounded-[40%_60%_70%_30%/60%_40%_70%_30%] animate-float-abstract-1"></div>
        <div className="absolute top-3/5 left-1/6 w-12 h-16 bg-accent-medium/22 rounded-[60%_40%_55%_45%/45%_55%_40%_60%] animate-blob-3"></div>
        
        {/* Glowing Particles with Trails (No Blur) */}
        <div className="absolute top-32 left-1/2 w-3 h-3 bg-accent-light/70 rounded-full animate-particle-trail-1 shadow-[0_0_20px_rgba(229,56,59,0.6)]"></div>
        <div className="absolute top-80 right-40 w-2 h-2 bg-accent/60 rounded-full animate-particle-trail-2 shadow-[0_0_15px_rgba(164,22,26,0.5)]"></div>
        <div className="absolute bottom-60 left-40 w-3 h-3 bg-accent-dark/50 rounded-full animate-particle-trail-3 shadow-[0_0_18px_rgba(102,7,8,0.4)]"></div>
        
        {/* NEW: Additional Glowing Particles */}
        <div className="absolute top-1/4 right-1/3 w-2.5 h-2.5 bg-accent-medium/65 rounded-full animate-particle-trail-1 shadow-[0_0_18px_rgba(186,24,27,0.6)]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent-light/55 rounded-full animate-particle-trail-2 shadow-[0_0_16px_rgba(229,56,59,0.5)]"></div>
        <div className="absolute top-2/3 left-1/4 w-2.5 h-2.5 bg-accent/60 rounded-full animate-particle-trail-3 shadow-[0_0_17px_rgba(164,22,26,0.5)]"></div>
        
        {/* Background Ambient Glow (Keep blur for ambient) */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-ambient-glow-1"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-light/5 rounded-full blur-3xl animate-ambient-glow-2"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent-medium/4 rounded-full blur-3xl animate-ambient-glow-3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
