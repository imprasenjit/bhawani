import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bmplLogo from '../../assets/logo.png'

// ─── Types ──────────────────────────────────────────────────────────────────

interface SubItem {
  label: string
  href: string
}

interface SubGroup {
  heading: string
  items: SubItem[]
}

interface NavItem {
  label: string
  href?: string
  /** Simple dropdown columns */
  dropdown?: SubGroup[]
  /** Full-width mega-menu */
  mega?: MegaSection[]
}

interface MegaSection {
  heading: string
  icon: string
  color: string
  items: SubItem[]
}

// ─── Nav structure ───────────────────────────────────────────────────────────

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },

  {
    label: 'Who We Are',
    dropdown: [
      {
        heading: 'BMPL – at a Glance',
        items: [
          { label: 'Overview', href: '/about#overview' },
          { label: 'Mission, Vision & Values', href: '/about#mission' },
          { label: 'Our Leadership', href: '/about#leadership' },
          { label: 'Operations Pan India', href: '/about#operations' },
          { label: 'Annual Report & Awards', href: '/about#awards' },
        ],
      },
    ],
  },

  {
    label: 'Our Approach',
    mega: [
      {
        heading: 'Skills & Livelihood Training',
        icon: '🎓',
        color: 'text-indigo-600',
        items: [
          { label: 'Skill Training Overview', href: '/approach/skills#skill-training' },
          { label: 'Affiliation & Accreditation', href: '/approach/skills#affiliation' },
          { label: 'Approach & Methodology', href: '/approach/skills#methodology' },
          { label: 'Course Details', href: '/approach/skills#courses' },
          { label: 'CSR', href: '/approach/skills#csr' },
          { label: 'Livelihood', href: '/approach/skills#livelihood' },
          { label: 'Training & Placement', href: '/approach/skills#placement' },
        ],
      },
      {
        heading: 'BMPL Events',
        icon: '📅',
        color: 'text-amber-600',
        items: [
          { label: 'About BMPL Events', href: '/approach/events#about-events' },
          { label: 'Empanelment', href: '/approach/events#events-empanelment' },
          { label: 'Corporate Brochure', href: '/approach/events#brochure' },
        ],
      },
      {
        heading: 'BMPL Constructions',
        icon: '🏗️',
        color: 'text-emerald-600',
        items: [
          { label: 'About Construction', href: '/approach/construction#construction' },
          { label: 'Work Executed', href: '/approach/construction#construction-work' },
        ],
      },
      {
        heading: 'ITeS & Allied Services',
        icon: '💻',
        color: 'text-blue-600',
        items: [
          { label: 'About ITeS & Allied Services', href: '/approach/ites#ites' },
          { label: 'Work Executed', href: '/approach/ites#ites-work' },
        ],
      },
      {
        heading: 'Manpower & Staffing',
        icon: '👥',
        color: 'text-rose-600',
        items: [
          { label: 'About Manpower & Staffing', href: '/approach/manpower#manpower' },
          { label: 'Work Executed', href: '/approach/manpower#manpower-work' },
        ],
      },
    ],
  },

  {
    label: 'Media',
    dropdown: [
      {
        heading: 'Media Centre',
        items: [
          { label: 'Media & Press', href: '/media' },
        ],
      },
      {
        heading: 'Gallery',
        items: [
          { label: 'Photo Gallery', href: '/gallery' },
          { label: 'Video Gallery', href: '/gallery#video' },
        ],
      },
    ],
  },

  {
    label: 'Join Us',
    dropdown: [
      {
        heading: 'Opportunities',
        items: [
          { label: 'Careers', href: '/join-us#careers' },
          { label: 'Volunteer & Interns', href: '/join-us#volunteer' },
        ],
      },
    ],
  },

  {
    label: 'Partner',
    dropdown: [
      {
        heading: 'Partnership Types',
        items: [
          { label: 'Collaborations & CSR', href: '/partner' },
          { label: 'Business Associates', href: '/partner#requirements' },
          { label: 'Franchise Guidance', href: '/partner#guidance' },
        ],
      },
    ],
  },

  { label: 'Contact', href: '/#contact' },
]

// ─── Chevron icon ────────────────────────────────────────────────────────────

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

// ─── Simple dropdown ─────────────────────────────────────────────────────────

function NavLink({ href, children, className = '', onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) {
  const navigate = useNavigate()
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick?.()
    const [path, hash] = href.split('#')
    const target = path || '/'
    navigate(target)
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  return <a href={href} onClick={handleClick} className={className}>{children}</a>
}

function SimpleDropdown({ groups, onClose }: { groups: SubGroup[]; onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 mt-1 min-w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
      {groups.map((group, gi) => (
        <div key={group.heading}>
          {gi > 0 && <div className="my-1.5 border-t border-gray-100" />}
          <p className="px-4 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">{group.heading}</p>
          {group.items.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  )
}

// ─── Mega menu ───────────────────────────────────────────────────────────────

function MegaMenu({ sections, onClose, scrolled }: { sections: MegaSection[]; onClose: () => void; scrolled: boolean }) {
  return (
    <div className="fixed left-0 right-0 mt-1 bg-white border-t border-gray-100 shadow-2xl z-50" style={{ top: scrolled ? '56px' : '80px' }}>
      <div className="max-w-[1920px] mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sections.map((section) => (
            <div key={section.heading}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{section.icon}</span>
                <h3 className={`text-xs font-bold uppercase tracking-widest ${section.color}`}>{section.heading}</h3>
              </div>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <NavLink href={item.href} onClick={onClose} className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-indigo-600 transition-colors group">
                      <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-indigo-400 transition-colors shrink-0" />
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Desktop nav item ────────────────────────────────────────────────────────

function DesktopNavItem({ item, scrolled }: { item: NavItem; scrolled: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const hasMenu = item.dropdown || item.mega

  if (!hasMenu) {
    return (
      <NavLink href={item.href ?? '/'} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors whitespace-nowrap">
        {item.label}
      </NavLink>
    )
  }

  return (
    <div ref={ref} className="relative">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer select-none ${open ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
      >
        {item.label}
        <ChevronDown className={open ? 'rotate-180' : ''} />
      </div>
      {open && item.dropdown && <SimpleDropdown groups={item.dropdown} onClose={() => setOpen(false)} />}
      {open && item.mega && <MegaMenu sections={item.mega} onClose={() => setOpen(false)} scrolled={scrolled} />}
    </div>
  )
}

// ─── Mobile accordion item ───────────────────────────────────────────────────

function MobileAccordion({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false)

  const allItems: SubItem[] = item.dropdown
    ? item.dropdown.flatMap((g) => g.items)
    : item.mega
      ? item.mega.flatMap((s) => s.items)
      : []

  if (!allItems.length) {
    return (
      <NavLink href={item.href ?? '/'} onClick={onClose} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-indigo-600">
        {item.label}
      </NavLink>
    )
  }

  const groups: Array<{ heading: string; items: SubItem[] }> = item.dropdown
    ? item.dropdown
    : item.mega
      ? item.mega.map((s) => ({ heading: `${s.icon} ${s.heading}`, items: s.items }))
      : []

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
        className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium transition-colors cursor-pointer select-none ${open ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
      >
        {item.label}
        <ChevronDown className={open ? 'rotate-180' : ''} />
      </div>
      {open && (
        <div className="ml-3 mt-1 border-l-2 border-indigo-100 pl-3 space-y-3 pb-2">
          {groups.map((group) => (
            <div key={group.heading}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1 pb-1">{group.heading}</p>
              {group.items.map((it) => (
                <NavLink key={it.label} href={it.href} onClick={onClose} className="block px-1 py-1.5 text-sm text-gray-600 hover:text-indigo-600">
                  {it.label}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Navbar root ─────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-md'
        : 'bg-white/60 backdrop-blur-sm shadow-none'
    }`}>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={bmplLogo} alt="BMPL" className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-9' : 'h-13'}`} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <DesktopNavItem key={item.label} item={item} scrolled={scrolled} />
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <MobileAccordion key={item.label} item={item} onClose={() => setMobileOpen(false)} />
            ))}
            <a href="#careers" onClick={() => setMobileOpen(false)} className="block mt-1 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-indigo-600">
              Join Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

