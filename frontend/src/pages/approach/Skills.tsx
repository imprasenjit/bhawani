// ─── Skills, CSR & Livelihood Training page (C1) ─────────────────────────

const affiliations = [
  'Construction Skill Development Council of India (CSDCI) – Training Partner',
  'Electronics Sector Skill Council of India (ESSCI) – Training Partner',
  'Tourism and Hospitality Skill Council (THSSC) – Training Partner',
  'Telecom Sector Skill Council (TSSCI) – Associate Member',
]

const empanelments = [
  'National Fisheries Development Board, Hyderabad – Training Provider',
  'National Institute for Micro Small & Medium Enterprises (NiMSME) – Training Provider',
]

const fundingAgencies = [
  'Nagaland State Rural Livelihood Mission, Nagaland',
  'Ministry of Tourism, Govt. of India',
  'Nagaland Skill Development & Entrepreneurship Society',
  'CHALET (CSR)',
  'Total Environment (CSR)',
  'Panchayat & Rural Development, Assam',
  'Bihar Skill Development Mission, Bihar',
  'Labour Resource Department, Bihar',
  'SC & ST Welfare Department, Bihar',
  'Backward & Extremely Backward Welfare Department, Bihar',
  'Department of Tourism, Bihar',
]

const csrActivities = [
  'Vocational and Skill Training',
  'Awareness Programmes',
  'Computer Literacy Programs at Rural Schools',
  'Promote sports activities among youth',
]

export default function Skills() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-indigo-700 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Our Approach</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">Skills, CSR &amp; Livelihood Training</h1>
          <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
            Enabling people to unlock their potential through skill acquisition, livelihood training and impactful CSR initiatives.
          </p>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────── */}
      <section id="skill-training" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">What We Do</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">BMPL Skills Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our purpose is to enable people to unlock their potential and develop the knowledge and skills needed for personal and economic growth. We do this by developing platforms for Skill Acquisition and Enhancement through Infrastructure Development, Relevant Qualifications that are Recognized and Respected by Employers all over the world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We facilitate Professional &amp; Vocational Education, Livelihood Training, and CSR through managing and partnering with Educational Institutions and NGOs.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-8">
            <h3 className="font-extrabold text-lg text-indigo-800 mb-4">BMPL Skill Mission</h3>
            <p className="text-indigo-700 text-sm leading-relaxed">
              The Mission of BMPL Skill is to facilitate a Skilled Economy by Developing Skilled Manpower with Diversity and Innovation, Improved Learning Outcomes and Responsible Business Practices through Raising Literacy Levels, Professional &amp; Vocational Education, Research &amp; Development and other Allied Activities.
            </p>
            <p className="text-indigo-600 text-sm leading-relaxed mt-4">
              We are committed to empowering individuals to do what we truly believe in, tapping into curiosity and entrepreneurial spirit to make independent ideas align with collective convictions.
            </p>
          </div>
        </div>
      </section>

      {/* ── CSR ───────────────────────────────────────────────────────── */}
      <section id="csr" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Corporate Social Responsibility</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">CSR Initiatives</h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                BMPL implements impactful multi-sectoral CSR initiatives and has partnered with reputed public sector enterprises and corporates through public and private partnerships at the community, national and global level. BMPL has established itself as a leading organization in executing the CSR activities of Corporate Houses, PSUs, Banks and Financial Institutions.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our deliberate approach to making the most of social responsibility opportunities improves people's lives both individually and collectively, fosters employee volunteerism, and promotes sustainable growth.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-base text-gray-800 mb-4">CSR Activities We Undertake</h3>
              <ul className="space-y-3">
                {csrActivities.map(a => (
                  <li key={a} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Livelihood ───────────────────────────────────────────────── */}
      <section id="livelihood" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Livelihood</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Livelihood Training</h2>
          </div>
          <div className="prose prose-gray max-w-none text-sm text-gray-600 space-y-4">
            <p>Earning a respectable livelihood is a basic need of every individual and household. To make a living, it is also important to possess necessary skills that make one employable. For a large number of people, our livelihood skill training programme does this work.</p>
            <p>We are in charge of creating, carrying out, and overseeing livelihood skilling programs that target impoverished youth and enhance the financial security of people, communities, and areas. Identifying possible livelihood prospects, evaluating their viability, and creating plans to assist the expansion of livelihoods are all included in this.</p>
            <p>BMPL works with unemployed youths through our interventions to help them learn skills for alternative livelihoods and show them a way to generate income. BMPL helps millions of youths to become part of the national economic mainstream and help them become contributing members to the Indian GDP.</p>
            <p>BMPL also creates livelihood opportunities through skilling for underprivileged youths and young adults living in rural &amp; semi-urban areas, who are unemployed and demotivated to earn livelihood. BMPL's mission is to provide a second chance to the deprived youth and to empower women, through sustainable livelihood opportunities based on technical, business and life skill training programs.</p>
          </div>
        </div>
      </section>

      {/* ── Approach & Methodology ───────────────────────────────────── */}
      <section id="methodology" className="py-20 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 text-center">
          <h2 className="text-3xl font-extrabold mb-5">Approach &amp; Methodology</h2>
          <p className="text-indigo-200 leading-relaxed mb-4">
            Skills training refers to an employer-provided program that teaches or develops proficiencies for the workplace. The aim of skills training is to equip employees with the knowledge and attributes necessary to carry out their duties at the optimal level.
          </p>
          <p className="text-indigo-200 leading-relaxed">
            BMPL is well positioned to meet the increasing demand for skill development and professional education across India. The skill training is dynamic in nature especially in the present context of technological changes. This demands a proper understanding of the original ideas, theories and systems that are fundamental base of a good instructor.
          </p>
        </div>
      </section>

      {/* ── Course Details ───────────────────────────────────────────── */}
      <section id="courses" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Course Details</h2>
          <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-12">
            <div className="text-5xl mb-4">📚</div>
            <p className="text-gray-500 text-sm">Course details will be added here. Please check back soon.</p>
          </div>
        </div>
      </section>

      {/* ── Affiliations & Empanelment ───────────────────────────────── */}
      <section id="affiliation" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 grid md:grid-cols-2 gap-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Affiliations</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-2 mb-5">Sector Skill Councils</h2>
            <ul className="space-y-3">
              {affiliations.map(a => (
                <li key={a} className="flex items-start gap-3 text-sm text-gray-700 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                  <span className="text-indigo-500 mt-0.5 shrink-0">🏅</span>
                  {a}
                </li>
              ))}
            </ul>
            <h3 className="font-extrabold text-base text-gray-800 mt-8 mb-4">Empanelment</h3>
            <ul className="space-y-3">
              {empanelments.map(e => (
                <li key={e} className="flex items-start gap-3 text-sm text-gray-700 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                  <span className="text-emerald-500 mt-0.5 shrink-0">✅</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Funding Agencies</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-2 mb-5">Government & Corporate Partners</h2>
            <ul className="space-y-2">
              {fundingAgencies.map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-700 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                  <span className="text-amber-500 mt-0.5 shrink-0">🏛️</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Placement Partners / Success Stories (placeholders) ───────── */}
      <section id="placement" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🤝', color: 'indigo', title: 'Placement Partners', text: 'Details to be added' },
              { icon: '🏢', color: 'emerald', title: 'Organizations Where Our Students Work', text: 'Details to be added' },
              { icon: '⭐', color: 'amber', title: 'Success Stories', text: 'Details to be added' },
            ].map(card => (
              <div key={card.title} className="bg-gray-50 rounded-2xl p-8 border border-dashed border-gray-300 text-center">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-extrabold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
