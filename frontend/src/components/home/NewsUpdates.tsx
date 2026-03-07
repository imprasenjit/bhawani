const news = [
  {
    date: 'Recent',
    tag: 'Empanelment',
    tagColor: 'bg-indigo-100 text-indigo-700',
    title: 'BMPL Empanelled under Jal Jeevan Mission, Assam for IEC Activities',
    excerpt: 'BMPL has been officially empanelled under Jal Jeevan Mission, Assam to carry out Information, Education and Communication (IEC) activities across the state.',
    readTime: '2 min read',
  },
  {
    date: 'Recent',
    tag: 'Registration',
    tagColor: 'bg-emerald-100 text-emerald-700',
    title: 'BMPL Registered as Class 1(A) Contractor under PWD Buildings, Assam',
    excerpt: 'BMPL has been registered as a Class 1(A) contractor under the Public Works Department (Buildings Division), Government of Assam — a mark of trust and capability in construction.',
    readTime: '2 min read',
  },
  {
    date: 'Recent',
    tag: 'Skill Development',
    tagColor: 'bg-amber-100 text-amber-700',
    title: 'BMPL Affiliated with CSDCI, ESSCI, THSSC and TSSCI as Training Partner',
    excerpt: 'BMPL has secured affiliations with multiple Sector Skill Councils including Construction, Electronics, Tourism & Hospitality, and Telecom SSCs for skills training.',
    readTime: '3 min read',
  },
  {
    date: 'Recent',
    tag: 'Partnership',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'BMPL Empanelled by NFDB and NiMSME as Registered Training Provider',
    excerpt: 'National Fisheries Development Board (NFDB) and National Institute for Micro Small & Medium Enterprises (NiMSME) have empanelled BMPL as a certified Training Provider.',
    readTime: '2 min read',
  },
  {
    date: 'Recent',
    tag: 'CSR',
    tagColor: 'bg-rose-100 text-rose-700',
    title: 'BMPL Implements Multi-Sectoral CSR Initiatives with PSUs & Corporates',
    excerpt: 'BMPL has partnered with reputed public sector enterprises and corporates through public-private partnerships for vocational training, computer literacy, and youth sports promotion.',
    readTime: '2 min read',
  },
  {
    date: 'Recent',
    tag: 'Livelihood',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'BMPL Livelihood Skilling Programmes Target Underprivileged Youth Across NE India',
    excerpt: 'BMPL is executing livelihood skill development programmes funded by state missions in Nagaland, Bihar, and Assam, helping unemployed rural youth generate sustainable income.',
    readTime: '3 min read',
  },
]

export default function NewsUpdates() {
  return (
    <section id="news" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Stay Informed</span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Latest News & Updates
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 shrink-0">
            View All News
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
              {/* Colored top bar */}
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500" />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.tagColor}`}>{item.tag}</span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 hover:text-indigo-600 cursor-pointer flex-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{item.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {item.readTime}
                  </span>
                  <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                    Read More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
