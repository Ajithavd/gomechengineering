import { Phone, Mail, MapPin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Find Us", href: "#map" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full bg-dark text-dark-foreground">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-primary font-extrabold text-2xl">GO MECH</span>
              <br />
              <span className="text-dark-foreground text-xs font-bold tracking-[4px] uppercase">
                Engineering
              </span>
            </div>
            <p className="text-dark-foreground/60 text-sm leading-7 max-w-[360px]">
              Leading precision engineering company in Chennai, specializing in CNC machining, VMC machining and industrial welding solutions.
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-xs text-dark-foreground/50 font-medium">
              <p>GST Registration Number : 33BGDPB9189B2ZM</p>
              <p>MSME Reg no : UDYAM-TN-02-0182901</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-foreground font-bold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-dark-foreground/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-dark-foreground font-bold text-lg mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+916381397949" className="text-dark-foreground/60 hover:text-primary text-sm transition-colors">
                  +91 63813 97949
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@gomechengineering.com" className="text-dark-foreground/60 hover:text-primary text-sm transition-colors">
                  info@gomechengineering.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <div className="flex flex-col text-left">
                  <a
                    href="#map"
                    onClick={(e) => handleNavClick(e, "#map")}
                    className="text-dark-foreground font-semibold text-sm hover:text-primary transition"
                  >
                    Location / Address
                  </a>
                  <a
                    href="#map"
                    onClick={(e) => handleNavClick(e, "#map")}
                    className="text-dark-foreground/60 text-sm hover:text-primary transition mt-1 leading-relaxed"
                  >
                    No. 563 Shop No. 16, MTH Road,
                    <br />
                    SIDCO Industrial Estate, Ambattur,
                    <br />
                    Chennai - 600098, Tamil Nadu, India
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-foreground/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-dark-foreground/40 text-sm">
            © 2026 Go Mech Engineering. All rights reserved.
          </p>
          <p className="text-primary font-bold text-sm italic">
            Innovating Success, Delivering Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
