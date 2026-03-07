const BASE = '/bhawani/public/images/'

const programs = [
  {
    photo: BASE + 'DSC_1993.JPG',
    accent: '#6366f1',
    title: 'Skills & Livelihood Training',
    description: 'Vocational education, CSR-linked skill development, and livelihood training for underprivileged youth. Affiliated with CSDCI, ESSCI, THSSC and TSSCI.',
    badge: 'NSDC / Skill India',
    href: '/approach/skills',
  },
  {
    photo: BASE + 'DSC_1844.JPG',
    accent: '#f59e0b',
    title: 'Events & Promotions',
    description: 'End-to-end event management for Government, corporate and public events. Outdoor advertising, media production, design & print, and IEC activities across North East.',
    badge: 'Govt. Empanelled',
    href: '/approach/events',
  },
  {
    photo: BASE + 'DSC_2301.JPG',
    accent: '#10b981',
    title: 'Construction Services',
    description: 'Civil works, commercial construction, renovation and designs with over 25 years of experience. Registered as Class 1(A) contractor under PWD (Building), Assam.',
    badge: 'PWD Class 1(A)',
    href: '/approach/construction',
  },
  {
    photo: BASE + 'DSC_2604.JPG',
    accent: '#3b82f6',
    title: 'ITeS & Allied Services',
    description: 'Digital product engineering, IT-enabled services and digital transformation solutions. Partnered with Government departments and enterprises across Assam.',
    badge: 'Digital Ready',
    href: '/approach/ites',
  },
  {
    photo: BASE + 'DSC_1861.JPG',
    accent: '#f43f5e',
    title: 'Manpower & Staffing',
    description: "Volume and quality manpower for Government departments, private organisations and industries. One of Assam's leading staffing agencies serving since 1998.",
    badge: 'Trusted Agency',
    href: '/approach/manpower',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-slate-950">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">What We Do</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Five Market-Leading{' '}
            <span className="text-indigo-400">Business Segments</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base">
            BMPL operates across five differentiated sectors — each serving end-markets
            with strong fundamentals and positive long-term prospects across North & North East India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="group relative h-80 rounded-2xl overflow-hidden">
              <img
                src={p.photo}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 group-hover:from-black/95 transition-colors duration-500" />
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: p.accent }} />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span
                  className="text-[11px] font-bold uppercase tracking-widest mb-2 px-2.5 py-0.5 rounded-full self-start"
                  style={{ backgroundColor: p.accent + '33', color: p.accent }}
                >
                  {p.badge}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-4 line-clamp-3 group-hover:text-white/80 transition-colors">
                  {p.description}
                </p>
                <a
                  href={p.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all"
                  style={{ color: p.accent }}
                >
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/about" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
            About BMPL
          </a>
        </div>
      </div>
    </section>
  )
}