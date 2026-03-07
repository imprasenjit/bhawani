// ─── Manpower & Staffing Services page (C4) ─────────────────────────────

const clients = [
  'Directorate of Handloom & Textiles, Assam',
  'General Administrative Department, Assam',
  'Bharat Sanchar Nigam Limited, Assam',
]

const differentiators = [
  { icon: '🎯', title: 'Right Candidate Guaranteed', desc: 'Our consultants screen for formal training, skills, experience and culture to place the right people at the right place.' },
  { icon: '📦', title: 'Volume & Quality', desc: 'One of very few agencies in Assam providing top-of-class service in both volume and quality.' },
  { icon: '🔄', title: 'End-to-End Hiring', desc: 'We handle every aspect — from advertising to training and handing over your workforce when ready.' },
  { icon: '🌐', title: 'Multi-Location', desc: 'Capable of providing multi-location manpower services across geographies.' },
  { icon: '👔', title: 'Skilled & Unskilled', desc: 'Diverse pool of employees — from skilled professionals to un-skilled workers.' },
  { icon: '📋', title: 'Outsourcing Specialist', desc: 'We specialize in supplying workforce on an outsourcing basis since our establishment.' },
]

export default function Manpower() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-rose-600 to-pink-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Our Approach</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">Manpower &amp; Staffing Services</h1>
          <p className="text-rose-200 max-w-2xl mx-auto text-lg">
            25+ years of experience — one of Assam's well-known manpower and staffing agencies for government, private and industrial organizations.
          </p>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────── */}
      <section id="manpower" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">About Manpower &amp; Staffing</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">Your Trusted Workforce Partner</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              With over 25 years of experience in manpower &amp; staffing services, we have grown over the years to become one of Assam's well-known manpower and staffing agencies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              We cater to the manpower requirements of organizations ranging from Government departments, private organisations and industries. Capable of providing multi-location manpower services, our experienced team is passionate about finding the best candidates for any job.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              We not only provide skilled manpower, but also assist organizations for recruitment in various sectors. We work closely with organizations and suggest optimum solutions for their manpower requirements. Our consultants understand crucial aspects such as formal training, skills, experience and culture required to place the right people at the right place.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Given how sensitive your productivity is to the people who work for you and their skills, you may need a partner you can trust to meet your needs and provide quality service. We value the skills of the workforce we put at your disposal, analysing your needs to know what you need, when you need it and how much you need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map(d => (
              <div key={d.title} className="bg-rose-50 rounded-2xl p-5 border border-rose-100">
                <span className="text-2xl block mb-2">{d.icon}</span>
                <h3 className="font-extrabold text-sm text-gray-900 mb-1">{d.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ──────────────────────────────────────────────────── */}
      <section id="manpower-work" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Clients</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">List of Clients</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {clients.map(c => (
              <div key={c} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100 text-sm text-gray-700">
                <span className="text-rose-400 shrink-0 text-xl">👥</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Works Placeholder ───────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Past Works – Gallery</h2>
          <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-12">
            <div className="text-5xl mb-4">🖼️</div>
            <p className="text-gray-400 text-sm">Past work photographs and case studies will be added here.</p>
          </div>
        </div>
      </section>

    </div>
  )
}
