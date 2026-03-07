// ─── Partner page (I10) ──────────────────────────────────────────────────

const collaborationTypes = [
  { icon: '🎓', label: 'Projects, Placements & Entrepreneurship linked Skilling' },
  { icon: '🤝', label: 'Placement Partnerships' },
  { icon: '🏫', label: 'Academic Collaborations with Universities and Institutions' },
  { icon: '🌱', label: 'CSR Partnerships' },
]

const requiredQualities = [
  'Person who adopts honesty and ethical behaviour as a key value',
  'Ability to promote brand vision & their core values',
  'A strong desire to succeed & become an entrepreneur',
  'Experience to manage finances or willingness to devote time and best efforts to daily operations',
  'Leadership quality to manage & motivate personnel',
  'Great opportunity for Professionals planning to establish their own ventures',
  'Existing training institutes willing to enhance their business can partner with us',
]

const guidance = [
  { icon: '📍', title: 'Location Finalization', desc: 'Guidance on finalizing your centre location for maximum reach and viability.' },
  { icon: '📐', title: 'Project Guidance', desc: 'End-to-end project guidance from initial planning to launch.' },
  { icon: '🏗️', title: 'Infrastructure Guidance', desc: 'We help franchisees in charting out areas as per SSC Norms.' },
  { icon: '📣', title: 'Marketing Launch', desc: 'Support in marketing launch of the centre with Marketing Plans & Guidance.' },
]

const supports = [
  { icon: '📚', title: 'Course Design & Upgradation', items: ['Curriculum developed as per SSC norms', 'Extensive industry & market research', 'Access to latest technology for digital training updates'] },
  { icon: '📢', title: 'Marketing Support', items: ['Advertising campaigns & brand development', 'Design for banners, posters, signboards', 'Ongoing advice on how to improve business'] },
  { icon: '🎓', title: 'Academic & Logistics Support', items: ['Trained the Trainers (TOT) programme', 'Conduct of Govt. Exams & Online Certification', 'IT/MIS Portal Training Support'] },
  { icon: '✅', title: 'Quality Support', items: ['Quality Management System implementation', 'Continuous improvement across all activities', 'Strategic direction communication to all students'] },
  { icon: '💼', title: 'Placement Support', items: ['Dedicated Job Portal and Placement Cell', 'Special Job Interview Preparation & Mock Tests', 'Interview Alerts & Reviews every week', 'Campus Placement opportunities'] },
]

export default function Partner() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-teal-600 to-emerald-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Partner</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">Partner With BMPL</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg">
            BMPL is open for collaborations — CSR, Skills, Livelihood Projects, Placements, Academic and Business Associate partnerships.
          </p>
        </div>
      </section>

      {/* ── Collaboration Types ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-600">Opportunities</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">BMPL is Open for Collaborations</h2>
              <ul className="space-y-3 mb-8">
                {collaborationTypes.map(c => (
                  <li key={c.label} className="flex items-center gap-3 bg-teal-50 rounded-xl px-5 py-3.5 border border-teal-100 text-sm text-gray-700">
                    <span className="text-xl shrink-0">{c.icon}</span>
                    {c.label}
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-extrabold text-gray-900 mb-2">Business Associates – CSR, Skills &amp; Livelihood</h3>
                <p className="text-gray-600 text-sm mb-4">For connecting with us for business associations, please reach out to us:</p>
                <a href="mailto:info@bhawanimarketing.com" className="text-teal-600 font-semibold text-sm hover:underline">info@bhawanimarketing.com</a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-extrabold mb-3">Why BMPL?</h3>
              <p className="text-teal-100 text-sm leading-relaxed mb-4">
                BMPL Skills offers matchless opportunities in industries to help you make aspiring entrepreneurs. The authorized centre system is one of the unique &amp; most profitable businesses in today's world.
              </p>
              <p className="text-teal-100 text-sm leading-relaxed mb-4">
                Our proposal aims to create authorized Centres all over India offering our bouquet of courses from BMPL Skill Development Centre — one stop for a wide range of branded programs that no other institute is offering.
              </p>
              <p className="text-teal-100 text-sm leading-relaxed">
                We develop and deploy strategic knowledge initiatives to promote corporate excellence using proven methods of operating. We employ Indian trainers trained in international training fraternity practices — ensuring high quality at optimum cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Opportunities We Provide ─────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900">Opportunities We Provide</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed text-center max-w-3xl mx-auto">
            BMPL is creating an employable workforce in the country by implementing an end-to-end business model including community mobilization and counselling for rural/semi-urban/urban youth; training at block &amp; district levels; Assessment &amp; Certification in partnership with industry partners; placement and post placement support. BMPL works closely with the industry to identify job opportunities and then work towards providing training in those trades.
          </p>
        </div>
      </section>

      {/* ── Required Qualities ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600">Requirements</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-2">Required Qualities to Become a Partner</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {requiredQualities.map(q => (
              <div key={q} className="flex items-start gap-3 bg-teal-50 rounded-xl px-4 py-3 border border-teal-100 text-sm text-gray-700">
                <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {q}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6 italic">As a franchisor, we believe that our success is dependent on the success of our franchisees.</p>
        </div>
      </section>

      {/* ── Guidance to Start ────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900">Guidance to Start the Centre</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {guidance.map(g => (
              <div key={g.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <span className="text-4xl block mb-3">{g.icon}</span>
                <h3 className="font-extrabold text-gray-900 text-sm mb-2">{g.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>

          {/* Support areas */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900">Support We Provide</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supports.map(s => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-extrabold text-gray-900 text-sm">{s.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-700 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Partner With Us?</h2>
          <p className="text-teal-100 text-sm leading-relaxed mb-8">
            Contact us today to explore partnership opportunities across Skills, CSR, Construction, Events and ITeS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9435292999"
              className="flex items-center justify-center gap-2 bg-white text-teal-700 text-sm font-bold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              9435292999
            </a>
            <a href="mailto:info@bhawanimarketing.com"
              className="flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white text-sm font-bold px-6 py-3 rounded-full transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@bhawanimarketing.com
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
