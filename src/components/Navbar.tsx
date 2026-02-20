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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className=" top-0 left-0 right-0 z-50 bg-gradient-to-b from-white to-red-800 backdrop-blur-md ">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-[160px] h-[122px]">
        {/* Logo */}
        {/* <a href="#home" className="flex flex-col leading-none">
          <span className="text-primary font-extrabold text-xl tracking-tight">GO MECH</span>
          <span className="text-dark-foreground text-[10px] font-bold tracking-[3px] uppercase">Engineering</span>
        </a> */}

        <a href="#home" className="flex items-center">
          <img
            src="images/mainlogo.png"
            alt="GO MECH Engineering Logo"
            className="h-40 w-auto"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-white-foreground/80 hover:text-white text-bold font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-dark-foreground"
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
                  className="text-dark-foreground/80 hover:text-primary text-base font-medium transition-colors bg-transparent border-none cursor-pointer"
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
