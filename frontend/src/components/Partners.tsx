const partners = [
  { name: 'Tata Technologies', type: 'Hiring Partner' },
  { name: 'Wipro Ltd.', type: 'Hiring Partner' },
  { name: 'Apollo Hospitals', type: 'Placement' },
  { name: 'L&T Construction', type: 'Hiring Partner' },
  { name: 'Reliance Retail', type: 'Placement' },
  { name: 'HDFC Bank', type: 'Funding Partner' },
  { name: 'Skill India (MSDE)', type: 'Government' },
  { name: 'NSDC', type: 'Certification' },
]

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Our Partners</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900">
            Backed by Industry Leaders
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto text-sm">
            Our curriculum, certifications, and placements are powered by partnerships with leading national companies and government bodies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p.name} className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-xl font-black text-indigo-700">
                {p.name.charAt(0)}
              </div>
              <div className="text-sm font-semibold text-gray-800">{p.name}</div>
              <span className="text-xs text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full font-medium">{p.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
