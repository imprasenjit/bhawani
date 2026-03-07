// ─── ITeS & Allied Services page (C4) ───────────────────────────────────

const clients = [
  'Directorate of Handloom & Textiles, Govt. of Assam',
  'General Administrative Department',
  'NRC',
  'UIDAI (Unique Identification Authority of India)',
]

const highlights = [
  { icon: '🚀', label: 'Digital Transformation', desc: 'Helping businesses achieve agility, scale and exceptional performance through digital means.' },
  { icon: '🧠', label: 'Agile Mindset', desc: 'We approach our work with an agile mindset that allows us to iterate towards the best solutions.' },
  { icon: '🤝', label: 'Digital Skills Transfer', desc: 'Committed to building and transferring digital skills, knowledge, and innovative ideas to our clients.' },
  { icon: '🔮', label: 'Future-Proof Solutions', desc: 'We embrace the future with vision and clarity about where technology and business are headed.' },
]

export default function ITeS() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-sky-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Our Approach</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">ITeS &amp; Allied Services</h1>
          <p className="text-sky-200 max-w-2xl mx-auto text-lg">
            A trusted digital partner with decades of experience in IT-enabled services, guiding clients through their digital journey.
          </p>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────── */}
      <section id="ites" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">About ITeS &amp; Allied Services</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">Empowering Businesses Through Digital</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              As a trusted partner with decades of experience in IT enabled services, we have the expertise and knowledge to guide our clients through their digital journey. We are committed to empowering businesses to achieve agility and scale through digital means, leading to exceptional performance and customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Our commitment to continuous learning and improvement drives our efforts to build and transfer digital skills, knowledge, and innovative ideas to our clients, ensuring that they are always at the forefront of progress and success.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              In this rapidly evolving world, the challenges businesses face are increasingly unique and complex. At BMPL, we specialize in digital product engineering and are dedicated to delivering innovative solutions to help your business transform, adapt, and grow.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We pride ourselves on our talented team and their ability to deliver innovative, customer-focused digital experiences. With a focus on leveraging the latest and practical technologies, we have helped our clients across various industries achieve end-to-end digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(h => (
              <div key={h.label} className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
                <span className="text-2xl block mb-2">{h.icon}</span>
                <h3 className="font-extrabold text-sm text-gray-900 mb-1">{h.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ──────────────────────────────────────────────────── */}
      <section id="ites-work" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Clients</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">List of Clients</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {clients.map(c => (
              <div key={c} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100 text-sm text-gray-700">
                <span className="text-sky-500 shrink-0 text-xl">🏢</span>
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
            <div className="text-5xl mb-4">💻</div>
            <p className="text-gray-400 text-sm">Project images and case studies will be added here.</p>
          </div>
        </div>
      </section>

    </div>
  )
}
