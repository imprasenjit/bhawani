const pillars = [
  {
    icon: '📚',
    title: 'Pedagogy',
    color: 'from-indigo-500 to-blue-600',
    points: [
      'Coaches, not just teachers',
      'Activity-based learning modules',
      'Bilingual instruction support',
      'Regular formative assessments',
    ],
    description: 'Our faculty act as coaches who guide learners through real scenarios. Every concept is reinforced with hands-on activities designed for the target student profile.',
  },
  {
    icon: '⚙️',
    title: 'Methodology',
    color: 'from-amber-500 to-orange-500',
    points: [
      'Onboarding → Training → Placement pipeline',
      'Psychometric career counselling',
      'Soft skills & life skills integration',
      'Continuous industry feedback loop',
    ],
    description: 'A structured end-to-end journey: career counselling at entry, rigorous domain + soft skills training, and dedicated placement support at exit.',
  },
  {
    icon: '💡',
    title: 'Technology',
    color: 'from-emerald-500 to-teal-600',
    points: [
      'Digital learning management system',
      'Attendance & performance tracking',
      'Online job-readiness assessments',
      'Alumni community platform',
    ],
    description: 'A bespoke LMS tracks every learner\'s progress in real time, enabling data-driven decisions and scalable quality across all centres.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="py-24 bg-slate-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">The Sikk Way</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            A Proven 3-Pillar{' '}
            <span className="text-indigo-600">Approach</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Our unique training model is built on three tightly integrated pillars
            that together drive consistently high employment outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Gradient header */}
              <div className={`bg-gradient-to-br ${p.color} p-8 text-white`}>
                <div className="text-5xl mb-4">{p.icon}</div>
                <h3 className="text-2xl font-extrabold">{p.title}</h3>
              </div>
              {/* Body */}
              <div className="p-6">
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{p.description}</p>
                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
