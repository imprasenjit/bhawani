const stories = [
  {
    name: 'Director, BMPL',
    trade: "Director's Message",
    quote: 'With over two and a half decades of experience, we have witnessed the ever-evolving landscape across all sectors. Our employees form the backbone of the Company and our clientele are the pillars of our organisation — they are the source of inspiration to me and my team.',
    avatar: 'MD',
    color: 'bg-indigo-500',
  },
  {
    name: 'Jal Jeevan Mission',
    trade: 'Government Client, Assam',
    quote: 'BMPL has been a reliable partner in our IEC activities and event management requirements. Their professional approach and timely execution set them apart from other agencies we have worked with.',
    avatar: 'JJ',
    color: 'bg-amber-500',
  },
  {
    name: 'PWD Buildings Division',
    trade: 'Construction Client, Assam',
    quote: 'BMPL has consistently delivered civil works on time and within budget. Their Class 1(A) registration and technically qualified team make them a preferred contractor for our department.',
    avatar: 'PW',
    color: 'bg-emerald-500',
  },
  {
    name: 'ASDMA',
    trade: 'Events & IEC Client, Assam',
    quote: 'BMPL handled our awareness campaigns and IEC activities with great professionalism. Their understanding of government objectives and their creative execution truly exceeded our expectations.',
    avatar: 'AS',
    color: 'bg-rose-500',
  },
]

export default function Testimonials() {
  return (
    <section id="stories" className="py-24 bg-slate-50 relative overflow-hidden">
      <img src={`${import.meta.env.VITE_IMAGES_BASE}DSC_1844.JPG`} alt="" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">What They Say</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Trusted by Government &{' '}
            <span className="text-indigo-600">Corporate Leaders</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            From the Director's desk to our valued clients — hear what drives the BMPL story
            of 27 years of integrity and service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((s) => (
            <div key={s.name} className="bg-slate-50 rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
              {/* Quote mark */}
              <svg className="w-8 h-8 text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">"{s.quote}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <div className={`w-9 h-9 rounded-full ${s.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {s.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{s.name}</div>
                  <div className="text-xs text-gray-400">{s.trade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
