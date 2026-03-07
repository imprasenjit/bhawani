// ─── Media page (E6) ────────────────────────────────────────────────────

export default function Media() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Media</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Media Centre</h1>
          <p className="text-gray-400 max-w-xl mx-auto">News, press releases, event coverage and video productions from BMPL.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 grid md:grid-cols-2 gap-8">
          {[
            { icon: '📸', title: 'Events & Photos', desc: 'Event photographs and coverage will be available here.' },
            { icon: '🎬', title: 'Video Productions', desc: 'Promotional and documentary videos will be available here.' },
            { icon: '📰', title: 'Press & News', desc: 'Press releases and media coverage to be provided.' },
            { icon: '📡', title: 'Live Coverage', desc: 'Live streaming links for upcoming events will appear here.' },
          ].map(card => (
            <div key={card.title} className="bg-white rounded-2xl p-8 border border-dashed border-gray-300 text-center">
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="font-extrabold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
