// ─── Join Us page (H9) ───────────────────────────────────────────────────

const careerRoles = [
  { dept: 'Skill Training', roles: ['Trainer – IT/ITeS', 'Trainer – Construction Trades', 'Trainer – Hospitality', 'Placement Coordinator', 'Centre Manager'] },
  { dept: 'Events & Media', roles: ['Event Manager', 'Content Creator', 'Graphic Designer', 'Videographer', 'Social Media Executive'] },
  { dept: 'Construction', roles: ['Site Engineer', 'Project Manager', 'Safety Officer', 'AutoCAD Drafter'] },
  { dept: 'Corporate & Admin', roles: ['HR Executive', 'Accounts Executive', 'Business Development Executive', 'MIS Coordinator'] },
]

export default function JoinUs() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Opportunities</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">Join Us at BMPL</h1>
          <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
            Be part of a team that's making a real difference in people's lives across North and North East India.
          </p>
        </div>
      </section>

      {/* ── Careers ──────────────────────────────────────────────────── */}
      <section id="careers" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Careers</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Open Positions</h2>
            <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
              We're always looking for passionate, driven professionals who want to contribute to skill development and community growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {careerRoles.map(dept => (
              <div key={dept.dept} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-extrabold text-indigo-700 text-sm uppercase tracking-widest mb-4">{dept.dept}</h3>
                <ul className="space-y-2">
                  {dept.roles.map(role => (
                    <li key={role} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 shadow-sm">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        {role}
                      </span>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Apply</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
            <p className="text-gray-600 text-sm mb-4">Don't see a matching role? Send us your resume and we'll keep it on file.</p>
            <a href="mailto:careers@bhawanimarketing.com"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* ── Volunteer & Internships ───────────────────────────────────── */}
      <section id="volunteer" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Volunteer */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Volunteer</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-2 mb-4">Volunteer With Us</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Make a meaningful impact in your community. Our volunteers work alongside our trainers and field teams to support skill training, awareness campaigns and CSR activities across North East India.
              </p>
              <ul className="space-y-2 mb-6">
                {['Assist at skill training centres', 'Support community outreach programmes', 'Participate in CSR events', 'Mentor unemployed youth', 'Help with awareness campaigns'].map(a => (
                  <li key={a} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-purple-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {a}
                  </li>
                ))}
              </ul>
              <a href="mailto:volunteer@bhawanimarketing.com"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                Apply to Volunteer
              </a>
            </div>

            {/* Internships */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Interns</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-2 mb-4">Internship Programme</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Gain real-world experience in a dynamic, multi-sector organization. BMPL offers structured internships across all our business verticals for students and fresh graduates.
              </p>
              <ul className="space-y-2 mb-6">
                {['Skill Training & Education', 'Event Management & Media', 'IT & Digital Services', 'Construction & Engineering', 'Business Development & HR'].map(a => (
                  <li key={a} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {a}
                  </li>
                ))}
              </ul>
              <a href="mailto:internships@bhawanimarketing.com"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                Apply for Internship
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
