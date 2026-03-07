const stats = [
  { value: '12,000+', label: 'Students Trained' },
  { value: '87%', label: 'Placement Rate' },
  { value: '50+', label: 'Industry Partners' },
  { value: '25+', label: 'Skill Programs' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Admissions Open for 2026–27
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Build Skills That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Build Careers
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
            Sikk College of Skill Development equips youth with industry-ready
            skills through hands-on training, expert mentorship, and guaranteed
            placement support.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-full transition-all"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 30C1200 0 960 60 720 30C480 0 240 60 0 30Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  )
}
