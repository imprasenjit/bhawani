import { useState, useEffect, useCallback } from 'react'

const BASE = import.meta.env.VITE_IMAGES_BASE

const slides = [
  {
    badge: 'Since 1998 — 27 Years of Excellence',
    title: 'BMPL — Inspiration for',
    highlight: 'Innovation',
    subtitle: 'Bhawani Marketing Private Limited is a Market Leader in Skill Development, Events & Promotions, Construction, ITeS and Manpower services across North & North East India.',
    cta1: { label: 'About Us', href: '/about' },
    cta2: { label: 'Our Services', href: '/approach/skills' },
    from: '#0f172a', via: '#1e1b4b', to: '#1e3a5f',
    accent: '#6366f1',
    photo: BASE + 'DSC_1915.JPG',
  },
  {
    badge: 'CSDCI · ESSCI · THSSC Affiliated',
    title: 'Empowering Youth Through',
    highlight: 'Skill & Livelihood',
    subtitle: 'BMPL facilitates a skilled economy by developing skilled manpower with diversity and innovation through vocational education, livelihood training and CSR partnerships.',
    cta1: { label: 'Skill Programs', href: '/approach/skills' },
    cta2: { label: 'Partner With Us', href: '/partner' },
    from: '#052e16', via: '#134e4a', to: '#0f172a',
    accent: '#10b981',
    photo: BASE + 'DSC_1993.JPG',
  },
  {
    badge: 'Government & Corporate Events Since 1998',
    title: 'Creating Events That',
    highlight: 'Go Beyond Expectations',
    subtitle: 'BMPL is a leading Event Management, Outdoor Advertising, Media Production and IEC Activities company in Guwahati with a 360-degree approach to every event.',
    cta1: { label: 'Events & Media', href: '/approach/events' },
    cta2: { label: 'Our Clients', href: '/approach/events#clients' },
    from: '#1e1b4b', via: '#312e81', to: '#1e3a5f',
    accent: '#f59e0b',
    photo: BASE + 'DSC_1844.JPG',
  },
  {
    badge: 'PWD Class 1(A) Registered Contractor',
    title: 'Building Assam with',
    highlight: 'Quality & Trust',
    subtitle: 'With 25+ years in civil works and construction, BMPL delivers large-scale projects on time with the highest quality standards for Government and Corporate clients.',
    cta1: { label: 'Construction', href: '/approach/construction' },
    cta2: { label: 'ITeS & Manpower', href: '/approach/ites' },
    from: '#450a0a', via: '#1e1b4b', to: '#0c0a09',
    accent: '#f43f5e',
    photo: BASE + 'DSC_1861.JPG',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const goTo = useCallback((idx: number) => {
    setCurrent(idx)
    setAnimKey(k => k + 1)
  }, [])

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const slide = slides[current]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{
      background: `linear-gradient(135deg, ${slide.from}, ${slide.via}, ${slide.to})`,
      transition: 'background 0.8s ease',
    }}>
      {/* Photo background */}
      <img
        key={slide.photo}
        src={slide.photo}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25 transition-opacity duration-700"
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 transition-all duration-1000"
        style={{ backgroundColor: slide.accent }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[80px] opacity-15 transition-all duration-1000"
        style={{ backgroundColor: slide.accent }} />

      {/* Content */}
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 py-32 w-full">
        <div key={animKey} className="slide-enter max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-6 bg-white/5 backdrop-blur-sm">
            {slide.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            {slide.title}{' '}
            <span className="block" style={{ color: slide.accent }}>{slide.highlight}</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">{slide.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a href={slide.cta1.href}
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-md text-slate-900"
              style={{ backgroundColor: slide.accent }}>
              {slide.cta1.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href={slide.cta2.href}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-sm transition-all">
              {slide.cta2.label}
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all hover:scale-110 z-10">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all hover:scale-110 z-10">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2.5' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'}`}
            style={i === current ? { backgroundColor: slide.accent } : {}} />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-6 text-white/40 text-xs font-mono">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 56L1440 56L1440 28C1200 0 960 56 720 28C480 0 240 56 0 28Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  )
}