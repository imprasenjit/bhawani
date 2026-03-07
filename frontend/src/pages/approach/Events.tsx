// ─── BMPL Events page (C2) ───────────────────────────────────────────────

const services = [
  {
    icon: '🎪', title: 'Event Management', color: 'from-amber-500 to-orange-500',
    items: ['Government Events', 'Corporate Events', 'Branding', 'Event Exhibitions', 'Interior Design', 'Campaign Management', 'Natural/Artificial Flower Décor', 'Tents and Structures', 'Conferences & Symposiums', 'Food and Beverage Services'],
  },
  {
    icon: '🎬', title: 'Media Production', color: 'from-purple-500 to-indigo-500',
    items: ['Still Photography', 'Video Production', 'Video Editing', 'Live Streaming', 'Staging', 'Audio Video Services'],
  },
  {
    icon: '🖨️', title: 'Design & Print', color: 'from-sky-500 to-blue-600',
    items: ['Creative Graphics', 'Animation', 'Marketing Collaterals', 'Brochures', 'Booklets', 'Leaflets', 'Catalogues', 'Coffee Table Books'],
  },
  {
    icon: '🪧', title: 'Outdoor Advertising', color: 'from-rose-500 to-pink-600',
    items: ['Indoor & Outdoor Branding', 'OOH Locations across North East', 'Billboards', 'Digital Display', 'Transit Advertising'],
  },
  {
    icon: '📢', title: 'IEC Activities', color: 'from-emerald-500 to-teal-600',
    items: ['Visit Schedule', 'Training', 'Supervision', 'Monitoring and Evaluation', 'Using different media to raise awareness', 'Identify & build connections with NGOs'],
  },
]

const whyUs = [
  { icon: '❤️', title: 'We Are Passionate', desc: 'We love what we do.' },
  { icon: '💪', title: 'We Are Bold', desc: "We believe it's either good marketing, or no marketing at all!" },
  { icon: '🔍', title: 'We Are Curious', desc: 'We enjoy exploring new territories, learning new things and experimenting with new ways.' },
  { icon: '💬', title: 'We Are Clear', desc: 'To us, communication is key.' },
  { icon: '🎨', title: 'We Are Creative', desc: 'Our team is a creative machine fuelled by imagination. We strive for greatness, and fun follows us around!' },
  { icon: '🔄', title: 'We Are Flexible', desc: 'We change to keep you ahead of the competition.' },
  { icon: '🔤', title: 'We Are A–Z', desc: 'Full-service agency providing Market Research, Event Management, Media Buying, Media Production, Digital Marketing and Brand Development — one point of contact.' },
  { icon: '📊', title: 'We Invest in Knowing', desc: 'We put effort into knowing before we act to guarantee you the most value. Assessment, Sufficient Research and solid insights with compromising agility.' },
]

const empanelment = [
  'Jal Jeevan Mission, Assam',
  'Swachh Bharat Mission Gramin, Assam',
  'Directorate of Cultural Affairs, Govt. of Assam',
  'Guwahati Municipal Corporation (GMC)',
  'PWD Buildings Division, Govt. of Assam',
  'Assam State Disaster Management Authority (ASDMA)',
  'Assam Small Industries Development Corporation (ASIDC)',
  'SBI Life, Assam',
]

const clients = [
  'Jal Jeevan Mission, Assam',
  'Swachh Bharat Mission Gramin, Assam',
  'Directorate of Cultural Affairs, Assam',
  'Guwahati Municipal Corporation (GMC)',
  'Assam State Disaster Management Authority (ASDMA)',
  'PWD Buildings Division, Govt. of Assam',
  'Assam Small Industries Development Corporation (ASIDC)',
  'SBI Life, Assam',
  'Assam Science Technology & Environment Council (ASTEC)',
  'Directorate of Soil Conservation, Assam',
  'Assam State Rural Livelihood Mission (ASRLM)',
]

export default function Events() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Our Approach</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">BMPL Events</h1>
          <p className="text-amber-100 max-w-2xl mx-auto text-lg">
            One of the top Event Management, Outdoor Advertising, IEC Activities &amp; Media Production companies based in Guwahati.
          </p>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section id="about-events" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">About BMPL Events</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">Creating Experiences Beyond Expectations</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              BMPL is one of the top Event Management, Outdoor Advertising, IEC Activities, Media Production company based in Guwahati. Our main goal is to create experiences that not only reach your expectation but go way beyond. Our professional approach, 360-degree assessment, clear brand vision and experience of working with clients across various industries have helped us exceed expectations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              We understand Clients' needs, objectives, brand goals and interpret them into a meticulously planned, innovative and impactful event experience. We pride ourselves on delivering a first-class service to each and every one of our clients, large and small.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We provide solutions for a range of occasions, including public meetings, government gatherings, annual days, product, brand, and facility launches, theme-based events, corporate conferences, exhibits, outdoor advertising, IEC activities and media production. We are fully equipped to produce a wide range of events from conception to completion.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: '🔭', label: 'Our Vision', text: 'Perform business with integrity and dependability to meet the goals and objectives of the company.' },
              { icon: '🎯', label: 'Our Mission', text: 'Always encourage, inspire and make an impression on employees, clients and customers.' },
              { icon: '🔄', label: 'Work Process', text: 'Our work process begins at the conceptualization phase, all the way through to the final phase. We undertake projects from all sectors, setting the highest possible standards.' },
            ].map(c => (
              <div key={c.label} className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{c.icon}</span>
                  <h3 className="font-extrabold text-gray-900">{c.label}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">What We Do</h2>
            <p className="mt-3 text-gray-500 text-sm">Full-spectrum event and communication services.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className={`bg-gradient-to-br ${s.color} px-6 py-4 flex items-center gap-3 text-white`}>
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-extrabold">{s.title}</h3>
                </div>
                <ul className="p-5 space-y-1.5">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Why Choose Us?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map(w => (
              <div key={w.title} className="bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-5 backdrop-blur-sm">
                <span className="text-3xl block mb-2">{w.icon}</span>
                <h3 className="font-extrabold text-sm mb-1">{w.title}</h3>
                <p className="text-amber-100 text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Empanelment & Clients ─────────────────────────────────────── */}
      <section id="events-empanelment" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Government Empanelment</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-2 mb-5">Empanelled Under</h2>
            <p className="text-gray-600 text-sm mb-4">BMPL is empanelled under various Departments of Govt. of Assam, Public Sector Undertakings &amp; Corporate Houses.</p>
            <ul className="space-y-2">
              {empanelment.map(e => (
                <li key={e} className="flex items-center gap-2 text-sm text-gray-700 bg-amber-50 rounded-lg px-3 py-2 border border-amber-100">
                  <span className="text-amber-500 shrink-0">🏛️</span>{e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Clients</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-2 mb-5">List of Clients</h2>
            <ul className="space-y-2">
              {clients.map(c => (
                <li key={c} className="flex items-center gap-2 text-sm text-gray-700 bg-orange-50 rounded-lg px-3 py-2 border border-orange-100">
                  <span className="text-orange-500 shrink-0">✅</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Brochure & Gallery ───────────────────────────────────────── */}
      <section id="brochure" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-dashed border-gray-300 text-center">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="font-extrabold text-gray-800 mb-2">Corporate Brochure</h3>
            <p className="text-gray-400 text-sm mb-5">Download our corporate brochure to learn more about BMPL Events.</p>
            <button className="bg-amber-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-amber-600 transition-colors opacity-50 cursor-not-allowed">Download (Coming Soon)</button>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-dashed border-gray-300 text-center">
            <div className="text-5xl mb-4">🖼️</div>
            <h3 className="font-extrabold text-gray-800 mb-2">Past Events – Gallery</h3>
            <p className="text-gray-400 text-sm mb-5">Gallery of past event photographs will be available here.</p>
            <button className="bg-orange-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-orange-600 transition-colors opacity-50 cursor-not-allowed">Coming Soon</button>
          </div>
        </div>
      </section>

    </div>
  )
}
