const BASE = '/bhawani/public/images/'

const row1 = [
  'DSC_2001', 'DSC_2031', 'DSC_2042', 'DSC_2099', 'DSC_2118',
  'DSC_2171', 'DSC_2178', 'DSC_2207', 'DSC_2227', 'DSC_2256',
  'DSC_2279', 'DSC_2293', 'DSC_2306', 'DSC_2341', 'DSC_2358', 'DSC_2488',
].map(n => BASE + n + '.JPG')

const row2 = [
  'DSC_2493', 'DSC_2604', 'DSC_2689', 'DSC_2804', 'DSC_2827',
  'DSC_2833', 'DSC_2871', 'DSC_2902', 'DSC_2909', 'DSC_2927',
  'DSC_2939', 'DSC_2991', 'DSC_2994', 'DSC_2995', 'DSC_3007', 'DSC_3082',
].map(n => BASE + n + '.JPG')

export default function PhotoMarquee() {
  return (
    <section className="py-20 bg-slate-950 overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: scroll-left  55s linear infinite; }
        .marquee-right { animation: scroll-right 55s linear infinite; }
        .marquee-left:hover,
        .marquee-right:hover { animation-play-state: paused; }
      `}</style>

      <div className="text-center mb-12 px-4">
        <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">Our People</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
          Real Faces,{' '}
          <span className="text-amber-400">Real Impact</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-lg mx-auto text-sm">
          Thousands of trainees from North East India skilled and empowered by BMPL every year.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden mb-3">
        <div className="flex gap-3 w-max marquee-left">
          {[...row1, ...row1].map((src, i) => (
            <div key={i} className="w-52 h-36 rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden">
        <div className="flex gap-3 w-max marquee-right">
          {[...row2, ...row2].map((src, i) => (
            <div key={i} className="w-52 h-36 rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
