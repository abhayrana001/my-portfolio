import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact']

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  // ✅ Detect scroll for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ✅ IntersectionObserver to set active nav item
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id) // id of the section
          }
        })
      },
      { threshold: 0.6 } // 60% visible = active
    )

    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav
      className={`fixed ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      } top-0 w-full z-50 transition-all`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          AR
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`capitalize text-lg font-medium transition ${
                  active === item.toLowerCase()
                    ? "text-purple-600 font-bold"
                    : "text-gray-800 hover:text-purple-600"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`block w-full text-left py-2 transition ${
                active === item.toLowerCase()
                  ? "text-purple-600 font-bold"
                  : "text-gray-800 hover:text-purple-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
