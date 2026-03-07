const reasons = [
  {
    icon: '💡',
    title: 'Innovation',
    points: ['Pioneering new methods in every sector', 'Technology-driven solutions', 'Continuous R&D and curriculum updates'],
    color: 'border-indigo-200 bg-indigo-50',
    iconBg: 'bg-indigo-100',
  },
  {
    icon: '🚀',
    title: 'Aggressiveness',
    points: ['Bold strategies for market leadership', 'Proactive client engagement', 'Result-oriented approach in every project'],
    color: 'border-amber-200 bg-amber-50',
    iconBg: 'bg-amber-100',
  },
  {
    icon: '🌱',
    title: 'Sustainable Growth',
    points: ['Long-term value for all stakeholders', 'Environmentally responsible practices', 'Community upliftment through every project'],
    color: 'border-emerald-200 bg-emerald-50',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    points: ['Transparent business practices', 'Honesty and ethical behaviour', 'Trusted by Government & corporates since 1998'],
    color: 'border-blue-200 bg-blue-50',
    iconBg: 'bg-blue-100',
  },
  {
    icon: '❤️',
    title: 'Passion',
    points: ['Driven to make a real difference', 'Every employee committed to excellence', 'Going beyond the call of duty every time'],
    color: 'border-rose-200 bg-rose-50',
    iconBg: 'bg-rose-100',
  },
  {
    icon: '🌍',
    title: 'Humanity',
    points: ['Giving back value to society', 'CSR-driven community engagement', 'Empowering the underprivileged & women'],
    color: 'border-violet-200 bg-violet-50',
    iconBg: 'bg-violet-100',
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Our Core Values</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            The BMPL Difference
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Founded in 1998 with a vision to combine decades of collective experience with a passion for quality work and business integrity — these values guide everything we do.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className={`rounded-2xl border-2 ${r.color} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
              <div className={`w-12 h-12 ${r.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {r.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3">{r.title}</h3>
              <ul className="space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
