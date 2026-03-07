const milestones = [
  { year: '2010', title: 'Foundation', desc: 'Sikk College established with a single hall and 40 students in our first batch of basic electronics.' },
  { year: '2013', title: 'First 1,000 Graduates', desc: 'Crossed the milestone of 1,000 placed graduates. Expanded to 4 trade programs and partnered with 10 local industries.' },
  { year: '2016', title: 'Digital Training Centre', desc: 'Launched a dedicated IT lab with 50 workstations, enabling web development and coding programs for the first time.' },
  { year: '2019', title: 'National Recognition', desc: 'Awarded "Best Skill Development Institute" by the Ministry of Skill Development. Expanded to 3 new districts.' },
  { year: '2022', title: '10,000 Lives Touched', desc: 'A landmark year — 10,000 graduates across 18 programs, with 87% placement rate and ₹18,500 average salary.' },
  { year: '2025', title: 'Sikk 2.0 Launch', desc: 'Launched blended online-offline curriculum, AI career counselling tool, and established 5 new extension centres.' },
]

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Our Journey</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Milestones That{' '}
            <span className="text-indigo-600">Define Us</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 -translate-x-1/2" />

          <div className="space-y-10">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={m.year} className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 sm:w-5/12 pl-16 sm:pl-0 ${isLeft ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'}`}>
                    <div className={`bg-slate-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow`}>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">{m.year}</span>
                      <h3 className="text-base font-bold text-gray-900 mt-2 mb-1">{m.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm ring-2 ring-indigo-100 mt-5" />

                  {/* Empty half for alternating layout */}
                  <div className="hidden sm:block flex-1 sm:w-5/12" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
