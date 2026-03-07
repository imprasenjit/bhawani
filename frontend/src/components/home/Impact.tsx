const stats = [
  { value: '27+', label: 'Years of Experience', sub: 'established since 1998' },
  { value: '5', label: 'Business Segments', sub: 'Skills, Events, Construction, ITeS, Manpower' },
  { value: 'Pan India', label: 'Service Coverage', sub: 'North & North East Region focus' },
  { value: '1998', label: 'Year Founded', sub: 'Guwahati, Assam' },
]

const outcomes = [
  { icon: '�', title: 'Skill Development', value: 'CSR', desc: 'Govt-funded skilling & livelihood training' },
  { icon: '🏗️', title: 'Infrastructure', value: 'PWD', desc: 'Class 1(A) registered construction contractor' },
  { icon: '🌐', title: 'Digital Services', value: 'ITeS', desc: 'End-to-end IT-enabled services & staffing' },
]

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-indigo-950 to-slate-900 text-white relative overflow-hidden">
      <img src="/bhawani/public/images/DSC_1915.JPG" alt="" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-luminosity" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-300 uppercase tracking-widest">BMPL at a Glance</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">
            A Market Leader{' '}
            <span className="text-amber-400">Built on Trust</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            BMPL is a company built around teamwork, outstanding quality and strong relationships.
            We serve across North & North East India with professional and impeccable services.
          </p>
        </div>

        {/* Big stat cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-4xl font-black text-white mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-indigo-300">{s.label}</div>
              <div className="text-xs text-slate-500 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Outcome breakdown */}
        <div className="grid sm:grid-cols-3 gap-6">
          {outcomes.map((o) => (
            <div key={o.title} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="text-4xl">{o.icon}</div>
              <div>
                <div className="text-2xl font-extrabold text-amber-400">{o.value}</div>
                <div className="text-sm font-semibold text-white">{o.title}</div>
                <div className="text-xs text-slate-400">{o.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Demographic bar */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-5">Our Reach</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: 'Govt. Depts. Served', pct: 80 },
              { label: 'North East Coverage', pct: 95 },
              { label: 'Client Satisfaction', pct: 100 },
            ].map((d) => (
              <div key={d.label}>
                <div className="text-2xl font-extrabold text-emerald-400">{d.pct}%</div>
                <div className="text-sm text-slate-300 mt-1">{d.label}</div>
                <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${d.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
