const affiliations = [
  { name: 'CSDCI', full: 'Construction Skill Development Council of India', emoji: '🏗️', color: 'bg-orange-50 border-orange-200' },
  { name: 'ESSCI', full: 'Electronics Sector Skill Council of India', emoji: '⚡', color: 'bg-indigo-50 border-indigo-200' },
  { name: 'THSSC', full: 'Tourism & Hospitality Skill Council', emoji: '🏨', color: 'bg-blue-50 border-blue-200' },
  { name: 'TSSCI', full: 'Telecom Sector Skill Council of India', emoji: '📡', color: 'bg-emerald-50 border-emerald-200' },
  { name: 'NFDB', full: 'National Fisheries Development Board', emoji: '🐟', color: 'bg-cyan-50 border-cyan-200' },
  { name: 'NiMSME', full: 'National Institute for Micro Small & Medium Enterprises', emoji: '🏭', color: 'bg-amber-50 border-amber-200' },
  { name: 'PWD Assam', full: 'Class 1(A) Registered Contractor — PWD Buildings', emoji: '🏛️', color: 'bg-rose-50 border-rose-200' },
  { name: 'Skill India', full: 'Ministry of Skill Development & Entrepreneurship', emoji: '🇮🇳', color: 'bg-violet-50 border-violet-200' },
  { name: 'GMC', full: 'Guwahati Municipal Corporation — Empanelled', emoji: '🏙️', color: 'bg-teal-50 border-teal-200' },
  { name: 'ASDMA', full: 'Assam State Disaster Management Authority', emoji: '🛡️', color: 'bg-slate-50 border-slate-200' },
]

// Duplicate for seamless loop
const doubled = [...affiliations, ...affiliations]

export default function AffiliationSlider() {
  return (
    <section id="affiliations" className="py-20 bg-gradient-to-br from-indigo-950 to-slate-900">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 mb-12 text-center">
        <span className="text-sm font-semibold text-indigo-300 uppercase tracking-widest">Affiliations & Empanelments</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
          Our Affiliations & Accreditations
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
          BMPL is affiliated with leading Sector Skill Councils, empanelled by Government departments, and registered with national institutions across India.
        </p>
      </div>

      {/* Auto-scroll track */}
      <div className="relative overflow-hidden pause-on-hover">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-indigo-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
          {doubled.map((a, i) => (
            <div key={i} className={`shrink-0 w-44 rounded-2xl border-2 ${a.color} p-5 flex flex-col items-center gap-2 text-center backdrop-blur-sm`}>
              <div className="text-3xl">{a.emoji}</div>
              <div className="text-sm font-extrabold text-gray-900">{a.name}</div>
              <div className="text-[10px] text-gray-500 leading-tight">{a.full}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
