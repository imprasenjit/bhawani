// ─── BMPL Constructions page (C3) ───────────────────────────────────────

const clients = [
  'Public Works Department (Building), Assam',
  'Jal Jeevan Mission, Assam',
  'Bharat Sanchar Nigam Limited, Assam',
  'Assam Plain Tribes Development Corporation',
  'Welfare of Plain Tribes & Backward Classes, Assam',
  'Assam State Housing Board',
]

const highlights = [
  { icon: '🏗️', label: 'Large-Scale Projects', desc: 'Successfully completed large scale projects delivering exactly what clients envision.' },
  { icon: '⏱️', label: 'Time-Bound Delivery', desc: 'Competitive rates with strict time-bound completion on every project.' },
  { icon: '🛡️', label: 'Safety & Sustainability', desc: 'Projects not only look great, but are built to last with a strong safety focus.' },
  { icon: '👷', label: 'Expert Team', desc: 'Technically qualified engineers form the majority of our workforce since 1998.' },
  { icon: '🔬', label: 'Premium Materials', desc: 'Committed to using only the highest-quality materials and latest construction techniques.' },
  { icon: '🤝', label: 'Transparent Communication', desc: 'Clients receive regular updates throughout the construction and design process.' },
]

export default function Construction() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Our Approach</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">BMPL Constructions</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-lg">
            Over 25 years of experience in civil works, construction, commercial construction, renovation and designs across Assam.
          </p>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────── */}
      <section id="construction" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">About BMPL Constructions</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">Leading Construction Company in Assam</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              BMPL is one of the leading construction companies in Assam. We have experience of over 25 years in civil works, construction, commercial construction, renovation and designs. We have successfully completed large scale projects and delivered what our clients wish for.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              From inception, we have focused on and achieved total satisfaction for our clients. The veritable list of our clientele are clear indicators of our ability to deliver large scale projects on time maintaining the highest quality standards.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              We are confident of executing Civil Works of any type and dimension, thanks to our decades of experience, technical know-how, state-of-the-art equipment and experienced work force, complemented by competitive rates and time-bound completion.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Technically qualified engineers form the majority of our employees. The strong technological and engineering background lays the foundation for sound designs and impeccable implementation of projects. Team BMPL is always geared up to take initiatives for innovative designs and finding solutions to problems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(h => (
              <div key={h.label} className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                <span className="text-2xl block mb-2">{h.icon}</span>
                <h3 className="font-extrabold text-sm text-gray-900 mb-1">{h.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration ─────────────────────────────────────────────── */}
      <section className="py-10 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-200 block mb-1">Certification</span>
          <p className="text-xl font-extrabold">Registered as Class 1 (A) Contractor under PWD (Building), Assam</p>
        </div>
      </section>

      {/* ── Clients ──────────────────────────────────────────────────── */}
      <section id="construction-work" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Clients</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">List of Clients</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {clients.map(c => (
              <div key={c} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100 text-sm text-gray-700">
                <span className="text-emerald-500 shrink-0 text-xl">🏛️</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Placeholder ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Work Executed – Gallery</h2>
          <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-12">
            <div className="text-5xl mb-4">🖼️</div>
            <p className="text-gray-400 text-sm">Project photographs and work executed gallery will be added here.</p>
          </div>
        </div>
      </section>

    </div>
  )
}
