import { useState } from 'react'

export default function QuickQuery() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="query" className="py-24 bg-gradient-to-br from-indigo-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Left info panel */}
            <div className="lg:col-span-2 bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 text-white flex flex-col justify-center">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="text-2xl font-extrabold mb-3">Quick Query</h2>
              <p className="text-indigo-200 text-sm leading-relaxed mb-6">
                Have a question? Send us a quick message and our counsellors will get back to you within 24 hours.
              </p>
              <ul className="space-y-3">
                {['Free career counselling', 'Program fee details', 'Scholarship eligibility', 'Admission process'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-indigo-100">
                    <svg className="w-4 h-4 text-indigo-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-indigo-500">
                <p className="text-xs text-indigo-300 font-semibold uppercase tracking-widest mb-2">Call Us Directly</p>
                <p className="text-xl font-bold">1800-419-7654</p>
                <p className="text-indigo-300 text-xs mt-1">Mon–Sat, 9am – 6pm</p>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-3xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Query Submitted!</h3>
                  <p className="text-gray-500 text-sm">Thank you! Our counsellor will contact you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-indigo-600 font-semibold hover:underline">
                    Submit another query
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Tell Us About Yourself</h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Full Name <span className="text-rose-500">*</span></label>
                        <input required type="text" placeholder="Your full name"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Email Address</label>
                        <input type="email" placeholder="your@email.com"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Phone Number <span className="text-rose-500">*</span></label>
                        <input required type="tel" placeholder="+91 00000 00000"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Profession / Status</label>
                        <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white">
                          <option value="">Select...</option>
                          <option>Student</option>
                          <option>Job Seeker</option>
                          <option>Working Professional</option>
                          <option>Entrepreneur</option>
                          <option>Parent / Guardian</option>
                          <option>Corporate / CSR</option>
                          <option>Government Official</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Subject <span className="text-rose-500">*</span></label>
                      <input required type="text" placeholder="What would you like to know?"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Message</label>
                      <textarea rows={3} placeholder="Additional details..."
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg text-sm transition-colors shadow-md">
                      Send My Query
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
