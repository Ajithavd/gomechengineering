import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-dark text-dark-foreground">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-[160px] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              Leading precision engineering company in Chennai, specializing in CNC machining, VMC services, metal fabrication, and industrial welding solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-foreground font-bold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
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
                <a href="tel:+917305946887" className="text-dark-foreground/60 hover:text-primary text-sm transition-colors">
                  +91 7305946887
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@gomechengineering.com" className="text-dark-foreground/60 hover:text-primary text-sm transition-colors">
                  info@gomechengineering.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span className="text-dark-foreground/60 text-sm">Ambattur, Chennai</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-foreground/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-[160px] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-foreground/40 text-sm">
            © 2025 Go Mech Engineering. All rights reserved.
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
