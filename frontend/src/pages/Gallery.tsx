// ─── Gallery page (G8) ───────────────────────────────────────────────────

const photoCategories = [
  {
    id: 'skill',
    label: 'Skill & Livelihood',
    icon: '🎓',
    color: 'from-indigo-500 to-blue-600',
    count: 0,
  },
  {
    id: 'events',
    label: 'Events',
    icon: '📅',
    color: 'from-amber-500 to-orange-500',
    count: 0,
  },
  {
    id: 'construction',
    label: 'Construction',
    icon: '🏗️',
    color: 'from-emerald-500 to-teal-600',
    count: 0,
  },
  {
    id: 'ites',
    label: 'ITeS & Allied Services',
    icon: '💻',
    color: 'from-sky-500 to-blue-600',
    count: 0,
  },
]

export default function Gallery() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Media</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">Gallery</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore BMPL's work across Skill Development, Events, Construction and ITeS through our photo and video gallery.
          </p>
        </div>
      </section>

      {/* ── Photos ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Photos</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Photo Gallery</h2>
            <p className="text-gray-500 mt-2 text-sm">Images will be uploaded category-wise.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoCategories.map(cat => (
              <div key={cat.id} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
                <div className={`bg-gradient-to-br ${cat.color} h-40 flex flex-col items-center justify-center text-white`}>
                  <span className="text-5xl mb-2">{cat.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80">{cat.label}</span>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{cat.label}</span>
                  <span className="text-xs text-gray-400 bg-gray-200 rounded-full px-2 py-0.5">{cat.count} photos</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-10 text-center">
            <div className="text-5xl mb-4">📷</div>
            <p className="text-gray-400 text-sm">Photo uploads are being configured. Please check back soon.</p>
          </div>
        </div>
      </section>

      {/* ── Videos ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Video</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Video Gallery</h2>
            <p className="text-gray-500 mt-2 text-sm">Watch our impactful videos on skill training, events and community work.</p>
          </div>
          <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-16 text-center">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="font-extrabold text-gray-700 mb-2">Videos Coming Soon</h3>
            <p className="text-gray-400 text-sm">Video content will be embedded here from YouTube.</p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Visit our YouTube Channel
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
