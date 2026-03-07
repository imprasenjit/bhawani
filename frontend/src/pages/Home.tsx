// ─── Home page sections (in render order) ──────────────────────────────────
import HeroSlider       from '../components/home/HeroSlider'
import WhyChoose        from '../components/home/WhyChoose'
import Programs         from '../components/home/Programs'
import AffiliationSlider from '../components/home/AffiliationSlider'
import Impact           from '../components/home/Impact'
import PhotoMarquee     from '../components/home/PhotoMarquee'
import NewsUpdates      from '../components/home/NewsUpdates'
import GalleryPreview   from '../components/home/GalleryPreview'
import Testimonials     from '../components/home/Testimonials'
import PartnersRoller   from '../components/home/PartnersRoller'
import SocialFeed       from '../components/home/SocialFeed'
import QuickQuery       from '../components/home/QuickQuery'

// ─── Floating / fixed UI overlays ───────────────────────────────────────────
import FloatingWhatsApp from '../components/floating/FloatingWhatsApp'
import SocialStickers   from '../components/floating/SocialStickers'
import DBMSLogin        from '../components/floating/DBMSLogin'

export default function Home() {
  return (
    <>
      {/* ── Above-the-fold ─────────────────────────────────────── */}
      <HeroSlider />

      {/* ── About / value proposition ──────────────────────────── */}
      <WhyChoose />
      <Programs />
      <AffiliationSlider />

      {/* ── Proof & metrics ────────────────────────────────────── */}
      <Impact />
      <PhotoMarquee />
      <Testimonials />

      {/* ── Content & media ────────────────────────────────────── */}
      <NewsUpdates />
      <GalleryPreview />

      {/* ── Community & partnerships ───────────────────────────── */}
      <PartnersRoller />
      <SocialFeed />

      {/* ── Conversion / contact ───────────────────────────────── */}
      <QuickQuery />

      {/* ── Floating overlays (rendered in portal-like fixed layer) */}
      <FloatingWhatsApp />
      <SocialStickers />
      <DBMSLogin />
    </>
  )
}
