import { useState } from 'react'

const BASE = '/bhawani/public/images/'

type GalleryCategory = 'All' | 'Skill & Livelihood' | 'Events' | 'Construction' | 'ITeS' | 'Manpower'

const images = [
  { cat: 'Skill & Livelihood' as GalleryCategory, label: 'Trainees — Residential Facility', src: BASE + 'DSC_1993.JPG', span: 'col-span-2 row-span-2' },
  { cat: 'Events' as GalleryCategory, label: 'Cultural Programme', src: BASE + 'DSC_1844.JPG', span: '' },
  { cat: 'Events' as GalleryCategory, label: 'Traditional Attire — Group', src: BASE + 'DSC_1861.JPG', span: '' },
  { cat: 'Skill & Livelihood' as GalleryCategory, label: 'Skill Trainee', src: BASE + 'DSC_1911.JPG', span: '' },
  { cat: 'Skill & Livelihood' as GalleryCategory, label: 'Skill Trainee', src: BASE + 'DSC_1912.JPG', span: '' },
  { cat: 'Skill & Livelihood' as GalleryCategory, label: 'Trainees Group', src: BASE + 'DSC_1915.JPG', span: 'col-span-2' },
  { cat: 'Skill & Livelihood' as GalleryCategory, label: 'Training Centre', src: BASE + 'DSC_1718.JPG', span: '' },
  { cat: 'Skill & Livelihood' as GalleryCategory, label: 'Training Hostel', src: BASE + 'DSC_1720.JPG', span: '' },
  { cat: 'Skill & Livelihood' as GalleryCategory, label: 'Residential Training', src: BASE + 'DSC_1961.JPG', span: '' },
]

const categories: GalleryCategory[] = ['All', 'Skill & Livelihood', 'Events', 'Construction', 'ITeS', 'Manpower']

export default function GalleryPreview() {
  const [active, setActive] = useState<GalleryCategory>('All')
  const [lightbox, setLightbox] = useState<typeof images[0] | null>(null)

  const filtered = active === 'All' ? images : images.filter(i => i.cat === active)

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">Our Gallery</span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Moments That Matter
            </h2>
          </div>
          <a href="/gallery" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 shrink-0">
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3">
          {filtered.map((img, i) => (
            <button key={i} onClick={() => setLightbox(img)}
              className={`relative group rounded-2xl overflow-hidden ${img.span || ''} cursor-pointer`}>
              <img src={img.src} alt={img.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span className="text-white text-sm font-semibold text-center">{img.label}</span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-bold bg-black/40 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">{img.cat}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.label}
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
            <div className="mt-3 text-center">
              <span className="text-white text-sm font-semibold">{lightbox.label}</span>
              <span className="ml-2 text-white/50 text-xs">{lightbox.cat}</span>
            </div>
          </div>
          <button onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      )}
    </section>
  )
}
