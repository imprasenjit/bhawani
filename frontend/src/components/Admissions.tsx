export default function Admissions() {
  return (
    <section id="admissions" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Left: info */}
            <div className="p-10 lg:p-14 text-white">
              <span className="text-indigo-200 text-xs font-semibold uppercase tracking-widest">Admissions 2026–27</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
                Take the First Step Toward Your Career
              </h2>
              <p className="mt-4 text-indigo-200 text-sm leading-relaxed">
                Enrollment is open for all programs. Seats are limited. Apply early
                to secure your spot and begin your transformation.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Class 8 pass minimum eligibility',
                  'No entrance exam required',
                  'Scholarships available for SC/ST/Women',
                  'Free career counselling before enrollment',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-indigo-100">
                    <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div className="bg-white p-10 lg:p-14">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Request Information</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Program of Interest</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white">
                    <option value="">Select a program</option>
                    <option>Information Technology</option>
                    <option>Industrial Electrician</option>
                    <option>Healthcare Assistant</option>
                    <option>Mechanical Technician</option>
                    <option>Retail & Sales</option>
                    <option>Food & Hospitality</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md hover:shadow-indigo-200 text-sm"
                >
                  Submit Application
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Our counsellor will contact you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
