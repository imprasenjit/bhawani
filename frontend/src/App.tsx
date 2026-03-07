import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar  from './components/layout/Navbar'
import Footer  from './components/layout/Footer'

// Pages
import Home         from './pages/Home'
import About        from './pages/About'
import Gallery      from './pages/Gallery'
import JoinUs       from './pages/JoinUs'
import Partner      from './pages/Partner'
import Media        from './pages/Media'

// Approach sub-pages
import Skills       from './pages/approach/Skills'
import Events       from './pages/approach/Events'
import Construction from './pages/approach/Construction'
import ITeS         from './pages/approach/ITeS'
import Manpower     from './pages/approach/Manpower'

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-gray-900 antialiased text-[1rem]">
        <Navbar />
        <main>
          <Routes>
            {/* ── Main pages ────────────────────────── */}
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/gallery"    element={<Gallery />} />
            <Route path="/join-us"    element={<JoinUs />} />
            <Route path="/partner"    element={<Partner />} />
            <Route path="/media"      element={<Media />} />

            {/* ── Approach sub-pages ───────────────── */}
            <Route path="/approach/skills"       element={<Skills />} />
            <Route path="/approach/events"       element={<Events />} />
            <Route path="/approach/construction" element={<Construction />} />
            <Route path="/approach/ites"         element={<ITeS />} />
            <Route path="/approach/manpower"     element={<Manpower />} />

            {/* ── CI4 serves SPA so all other paths → home ── */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
