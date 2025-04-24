import { useState, useEffect } from "react"
import logo from '../../assets/marca.svg';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  
    const navLinks = [
      { name: "HOME", href: "#home" },
      { name: "SOLUCIONES", href: "#solutions" },
      { name: "INDUSTRIAS", href: "#industries" },
      { name: "CONTACTO", href: "#contact" },
      { name: "PREGUNTAS FRECUENTES", href: "#faq" },
    ]
  
    return (
      <nav
        className={`fixed w-full z-50 transition-all duration-300  ${isScrolled ? "bg-gray-900/90 border border-b-2 backdrop-blur-md py-2 shadow-lg" : "bg-gray-900/90 py-4"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img className="h-10" src={logo} alt="logo" />
          </a>
  
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
  
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-200" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
  
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg">
            <div className="container mx-auto px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-sm font-medium text-gray-200 hover:text-cyan-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    )
  }

export default Navbar;
