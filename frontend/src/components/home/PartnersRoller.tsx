const partners = [
  { name: 'Jal Jeevan Mission', sector: 'Govt. of Assam' },
  { name: 'PWD Buildings', sector: 'Govt. of Assam' },
  { name: 'Directorate of Cultural Affairs', sector: 'Govt. of Assam' },
  { name: 'Guwahati Municipal Corporation', sector: 'Urban Local Body' },
  { name: 'ASDMA', sector: 'Disaster Management' },
  { name: 'ASIDC', sector: 'Industries, Assam' },
  { name: 'Swachh Bharat Mission', sector: 'Govt. of Assam' },
  { name: 'BSNL Assam', sector: 'Telecom PSU' },
  { name: 'Directorate of Handloom', sector: 'Govt. of Assam' },
  { name: 'UIDAI', sector: 'Unique ID Authority' },
  { name: 'NRC', sector: 'National Register' },
  { name: 'SBI Life, Assam', sector: 'Banking & Finance' },
]

const doubled = [...partners, ...partners]

const colors = [
  'from-indigo-500 to-blue-600',
  'from-amber-500 to-orange-500',
  'from-emerald-500 to-teal-600',
  'from-rose-500 to-pink-600',
  'from-violet-500 to-purple-600',
  'from-blue-500 to-cyan-600',
]

export default function PartnersRoller() {
  return (
    <section id="partners" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Our Clients</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
          Trusted by Government & Institutions
        </h2>
        <p className="mt-3 text-gray-500 max-w-lg mx-auto text-sm">
          BMPL has been empanelled by and serves a wide range of Government departments, PSUs and corporate clients across Assam and North East India.
        </p>
      </div>

      {/* Rolling track */}
      <div className="relative overflow-hidden pause-on-hover">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee-slow" style={{ width: 'max-content' }}>
          {doubled.map((p, i) => (
            <div key={i} className="shrink-0 w-40 bg-white rounded-2xl border border-gray-100 p-4 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow text-center cursor-default">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-white text-sm font-black`}>
                {p.name.charAt(0)}{p.name.split(' ')[1]?.charAt(0) ?? ''}
              </div>
              <div className="text-xs font-bold text-gray-800 leading-tight">{p.name}</div>
              <span className="text-[10px] text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full font-medium">{p.sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
