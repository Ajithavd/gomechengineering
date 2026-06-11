import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "#contact" },
];

const desktopLinks = navLinks.filter((link) => link.label !== "Contact");

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
  setMobileOpen(false);

  // If link is an internal section like #about
  if (href.startsWith("#")) {
    if (location.pathname !== "/") {
          // Navigate to home first, then scroll after rendering
          navigate("/");

          setTimeout(() => {
            const el = document.querySelector(href);
            el?.scrollIntoView({ behavior: "smooth" });
          }, 50);
        } else {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      // If link is a regular page like /gallery
      if (href.startsWith("/")) {
        navigate(href);
      }
    };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-gray-100 shadow-sm">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-[160px] h-20 md:h-[122px]">
        {/* Left: Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <img
            src="images/mainlogo.png"
            alt="GO MECH Engineering Logo"
            className="h-24 md:h-36 lg:h-44 w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* Right Side: Links & Contact button with exactly 100px gap */}
        <div className="hidden md:flex items-center gap-[100px]">
          <ul className="flex items-center gap-8 lg:gap-10 whitespace-nowrap">
            {desktopLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground/90 hover:text-primary text-[17px] font-semibold transition-colors bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleNavClick("#contact")}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md animate-contact-btn contact-btn-shine cursor-pointer whitespace-nowrap"
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-dark-foreground/90 hover:text-primary text-[17px] font-medium transition-colors bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
