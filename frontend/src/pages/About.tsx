// ─── About / Who We Are page ──────────────────────────────────────────────
// Covers: B1 (BMPL at a Glance, Vision, Mission, Values),
//         B2 (Director's Message), B3 (Operations Pan India),
//         B4 (Annual Report & Awards)

const values = [
  { icon: '💡', label: 'Innovation', desc: 'Constantly pioneering new approaches to skill and service delivery.' },
  { icon: '⚡', label: 'Aggressiveness', desc: 'Bold, decisive action to stay ahead in competitive markets.' },
  { icon: '🌱', label: 'Sustainable Growth', desc: 'Building value that endures for communities and stakeholders alike.' },
  { icon: '🤝', label: 'Integrity', desc: 'Unwavering honesty and ethical conduct in every engagement.' },
  { icon: '🔥', label: 'Passion', desc: 'Deep commitment to excellence that motivates every team member.' },
  { icon: '❤️', label: 'Humanity', desc: 'Placing people at the centre of every decision we make.' },
]

const segments = [
  { icon: '🎓', color: 'from-indigo-500 to-blue-600',    label: 'Skill Development',   desc: 'Vocational & livelihood training across 25+ domains.' },
  { icon: '📅', color: 'from-amber-500 to-orange-500',   label: 'Events & Promotions', desc: 'Government, corporate and outdoor media solutions.' },
  { icon: '🏗️', color: 'from-emerald-500 to-teal-600',   label: 'Construction',        desc: 'Civil works, renovation and design since 1998.' },
  { icon: '💻', color: 'from-sky-500 to-blue-600',       label: 'ITeS & Allied',       desc: 'Digital transformation and IT-enabled services.' },
  { icon: '👥', color: 'from-rose-500 to-pink-600',      label: 'Manpower & Staffing', desc: 'Skilled and un-skilled workforce across sectors.' },
]

export default function About() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-indigo-700 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Who We Are</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">BMPL – At a Glance</h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto italic">"BMPL – Inspiration for Innovation"</p>
        </div>
      </section>

      {/* ── Company Overview ─────────────────────────────────────────── */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Founded 1998 · Guwahati</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">27 Years of Excellence</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bhawani Marketing Private Limited (BMPL) was founded in 1998 at Guwahati under the core values of integrity, professionalism and responsibility. We have 27 years of experience in the services that we offer. BMPL has established itself as a Market Leader.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The company initially started its operations in the fields of Construction &amp; Allied Services but along with time and professional expertise, BMPL has created a benchmark in the field of Education, Skills Development, Events &amp; Promotions, Constructions, ITeS &amp; Allied services. We serve in all of North and North East Region with professional and impeccable services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              BMPL is a company built around teamwork, outstanding quality and strong relationships. Beyond the services we provide, it's about the people we help — personally, professionally and philanthropically. Every BMPL employee is driven to make a difference and give back value addition to the society as a whole.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded-2xl p-6 text-center">
              <p className="text-4xl font-black text-indigo-600">27+</p>
              <p className="text-sm font-semibold text-gray-600 mt-1">Years of Experience</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 text-center">
              <p className="text-4xl font-black text-emerald-600">5</p>
              <p className="text-sm font-semibold text-gray-600 mt-1">Business Segments</p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 text-center">
              <p className="text-4xl font-black text-amber-600">PAN</p>
              <p className="text-sm font-semibold text-gray-600 mt-1">India Operations</p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6 text-center">
              <p className="text-4xl font-black text-rose-600">NE+</p>
              <p className="text-sm font-semibold text-gray-600 mt-1">North East Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision / Mission / Commitment ────────────────────────────── */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Vision · Mission · Commitment</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-5">🔭</div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We will enrich daily life and society by contributing to technological and humane development.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl mb-5">🎯</div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                BMPL's mission is to be the leading provider of products and services across the global spectrum of business opportunities, consistently applying resources and technologies to obtain the most value from people, places, and things.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl mb-5">🤝</div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-3">Our Commitment</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We are committed to leveraging our industry-wide leadership, combined with close collaboration with our customers, to continually stay ahead of the curve and innovate. Our passion is to help customers believe that our best-in-class performance solutions consistently exceed expectations and deliver next-level thinking for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">Values &amp; Goals</h2>
            <p className="text-indigo-200 max-w-xl mx-auto text-sm">
              BMPL's core values have been shaped by years of delivering the finest services to our clients — founded on a passion for quality work and business integrity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(v => (
              <div key={v.label} className="bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-6 backdrop-blur-sm">
                <span className="text-3xl mb-3 block">{v.icon}</span>
                <h3 className="font-extrabold text-lg mb-1">{v.label}</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Five Segments ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Five Market-Leading Segments</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm">
              Each segment operates in different industries but shares strong end-market fundamentals and positive long-term macro characteristics.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {segments.map(s => (
              <div key={s.label} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className={`bg-gradient-to-br ${s.color} p-6 text-center text-white`}>
                  <span className="text-4xl block mb-2">{s.icon}</span>
                  <h3 className="font-extrabold text-sm">{s.label}</h3>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-xs text-gray-600 text-center">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Director's Message ───────────────────────────────────────── */}
      <section id="leadership" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Our Leadership</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Director's Message</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 h-3" />
            <div className="p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-xl font-black shrink-0">BM</div>
                <div>
                  <p className="font-extrabold text-lg text-gray-900">Director, BMPL</p>
                  <p className="text-sm text-indigo-600 font-medium">Bhawani Marketing Private Limited</p>
                </div>
              </div>
              <blockquote className="text-gray-600 leading-relaxed space-y-4 text-sm">
                <p>Dear Guests,</p>
                <p>With immense pride, I welcome you to Bhawani Marketing Pvt Ltd and extend my gratitude for the continued support and trust you have shown for our organization. With over two and a half decades of experience in Skill Development &amp; Vocational Education, Construction Services, Event Management, Advertising, IT &amp; ITeS and Manpower &amp; Staffing Services, we have witnessed the ever-evolving landscape in all sectors and have learned invaluable lessons along the way.</p>
                <p>Our journey over the decades has been an eventful one with challenges that improved our learning. BMPL has kept its pace with the changing technology and work structure and have been instrumental in implementing major projects successfully based on the current environment.</p>
                <p>Our employees form the backbone of the Company and are at the core of our successful journey. From site workers to our staff and leaders, every person plays a vital role in making every project a success.</p>
                <p>Lastly, our clientele are the pillars of our organization and I convey my sincere gratitude to them for keeping their faith in us for all these years. They are the source of inspiration that drives me and my team to get the best results every time.</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Operations Pan India ─────────────────────────────────────── */}
      <section id="operations" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Reach</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">Operations – Pan India</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
            With services offered Pan India, BMPL's five market-leading business segments operate across Education, Skill Development, Events &amp; Promotions, Constructions, ITeS &amp; Allied services — with a strong focus on North and North East India.
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm inline-block w-full max-w-3xl">
            <iframe
              title="BMPL Operations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767764!2d78.963!3d26.193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374c5604e6a43c57!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="360"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── Annual Report & Awards ───────────────────────────────────── */}
      <section id="awards" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Recognition</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Annual Report &amp; Awards</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-dashed border-gray-300 text-center">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="font-extrabold text-lg text-gray-800 mb-2">Annual Reports</h3>
              <p className="text-gray-500 text-sm mb-6">Annual report documents will be available here for download.</p>
              <button className="bg-indigo-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-indigo-700 transition-colors opacity-50 cursor-not-allowed">Coming Soon</button>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-dashed border-gray-300 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-extrabold text-lg text-gray-800 mb-2">Awards &amp; Recognition</h3>
              <p className="text-gray-500 text-sm mb-6">Awards and accolades received by BMPL will be displayed here.</p>
              <button className="bg-amber-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-amber-600 transition-colors opacity-50 cursor-not-allowed">Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
