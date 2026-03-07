const fbPosts = [
  {
    id: 1,
    author: 'BMPL Official',
    time: '2 hours ago',
    content: '🎉 Congratulations to our 2025 batch graduates! 94 students placed in leading companies this month alone. Proud of every single one of you. #SkillDevelopment #BMPL',
    likes: 247,
    comments: 38,
    tag: 'Placement',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 2,
    author: 'BMPL Official',
    time: 'Yesterday',
    content: '📢 New batch starting for Retail Management & ITeS programs from August 1st. Limited seats available — apply now before the window closes!',
    likes: 189,
    comments: 22,
    tag: 'Admissions',
    color: 'from-emerald-400 to-teal-500',
  },
]

const igPosts = [
  {
    id: 1,
    caption: 'Hands-on training day at our Construction Skills lab 🏗️ #BMPL #SkillIndia',
    likes: 312,
    color: 'from-orange-400 to-rose-500',
    emoji: '🏗️',
  },
  {
    id: 2,
    caption: 'Our students are heroes! Celebrating placement at a Fortune 500 company 🎊',
    likes: 498,
    color: 'from-purple-400 to-pink-500',
    emoji: '🎊',
  },
  {
    id: 3,
    caption: 'Campus life at BMPL Skill Centre — where every day is a learning experience ✨',
    likes: 275,
    color: 'from-sky-400 to-blue-500',
    emoji: '✨',
  },
  {
    id: 4,
    caption: 'Women empowerment through skill development 💪 #WomenInTech #BMPL',
    likes: 421,
    color: 'from-pink-400 to-rose-400',
    emoji: '💪',
  },
]

export default function SocialFeed() {
  return (
    <section id="social-feed" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">Follow Us</span>
          <h2 className="text-4xl font-extrabold text-gray-900">Stay Connected</h2>
          <p className="mt-3 text-gray-500 text-lg">Follow BMPL on social media for updates, success stories, and more.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Facebook */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#1877F2] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-white font-bold text-sm">BMPL Official</span>
              </div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="bg-white text-[#1877F2] text-xs font-bold px-3 py-1 rounded-full hover:bg-blue-50 transition-colors">
                Follow Page
              </a>
            </div>
            <div className="p-4 space-y-4 max-h-72 overflow-y-auto">
              {fbPosts.map(post => (
                <div key={post.id} className="border border-gray-100 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${post.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>BM</div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{post.author}</p>
                      <p className="text-[10px] text-gray-400">{post.time}</p>
                    </div>
                    <span className="ml-auto bg-indigo-50 text-indigo-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">{post.tag}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{post.content}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                    <span>👍 {post.likes} Likes</span>
                    <span>💬 {post.comments} Comments</span>
                    <span className="ml-auto cursor-pointer hover:text-blue-500 transition-colors">Share</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="block text-center text-xs font-semibold text-[#1877F2] border border-[#1877F2] rounded-lg py-2 hover:bg-blue-50 transition-colors">
                View All Posts on Facebook →
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="text-white font-bold text-sm">@bmpl_official</span>
              </div>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="bg-white text-pink-600 text-xs font-bold px-3 py-1 rounded-full hover:bg-pink-50 transition-colors">
                Follow
              </a>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2">
              {igPosts.map(post => (
                <div key={post.id} className={`bg-gradient-to-br ${post.color} rounded-xl aspect-square flex flex-col items-center justify-center text-white p-3 cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden`}>
                  <span className="text-4xl mb-1">{post.emoji}</span>
                  <p className="text-[10px] text-center leading-tight opacity-90">{post.caption.slice(0, 55)}…</p>
                  <div className="absolute bottom-2 right-2 text-[10px] bg-black/30 rounded-full px-2 py-0.5">❤ {post.likes}</div>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="block text-center text-xs font-semibold text-pink-600 border border-pink-400 rounded-lg py-2 hover:bg-pink-50 transition-colors">
                View Profile on Instagram →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
