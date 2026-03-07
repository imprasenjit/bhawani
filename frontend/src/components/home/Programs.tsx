const programs = [
  {
    icon: '🎓',
    title: 'Skills & Livelihood Training',
    description: 'Vocational education, CSR-linked skill development, and livelihood training for underprivileged youth. Affiliated with CSDCI, ESSCI, THSSC and TSSCI.',
    duration: 'Govt. Funded',
    badge: 'NSDC / Skill India',
    badgeColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    icon: '🎪',
    title: 'Events & Promotions',
    description: 'End-to-end event management for Government, corporate and public events. Outdoor advertising, media production, design & print, and IEC activities across North East.',
    duration: 'Full-Service',
    badge: 'Govt. Empanelled',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    icon: '🏗️',
    title: 'Construction Services',
    description: 'Civil works, commercial construction, renovation and designs with over 25 years of experience. Registered as Class 1(A) contractor under PWD (Building), Assam.',
    duration: '25+ Years',
    badge: 'PWD Class 1(A)',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: '💻',
    title: 'ITeS & Allied Services',
    description: 'Digital product engineering, IT-enabled services and digital transformation solutions. Partnered with Government departments and enterprises across Assam.',
    duration: 'End-to-End',
    badge: 'Digital Ready',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: '👥',
    title: 'Manpower & Staffing',
    description: "Volume and quality manpower for Government departments, private organisations and industries. One of Assam's leading staffing agencies serving since 1998.",
    duration: 'Multi-location',
    badge: 'Trusted Agency',
    badgeColor: 'bg-rose-100 text-rose-700',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">What We Do</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Five Market-Leading{' '}
            <span className="text-indigo-600">Business Segments</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            BMPL operates across five differentiated sectors — each serving end-markets
            with strong fundamentals and positive long-term prospects across North & North East India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{p.icon}</div>
                {p.badge && (
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{p.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {p.duration}
                </div>
                <a href="/approach/skills" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/about" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md hover:shadow-indigo-200">
            About BMPL
          </a>
        </div>
      </div>
    </section>
  )
}
