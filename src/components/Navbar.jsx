import { useState } from "react";
import { Menu, X, Sun, Moon, Github, Dribbble, Figma } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "home", href: "#home" },
    { name: "works", href: "#works" },
    { name: "about-me", href: "#about-me" },
    { name: "contacts", href: "#contacts" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "Github" },
    { icon: Dribbble, href: "https://dribbble.com", label: "Dribbble" },
    { icon: Figma, href: "https://figma.com", label: "Figma" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(href.slice(1));
    setIsOpen(false);
  };

  const colors = {
    bg: isDark ? "#000000" : "#FFFFFF",
    text: isDark ? "#ffffff" : "#000000",
    accent: "#C778DD",
    border: isDark ? "#C778DD" : "#C778DD",
  };

  return (
    <>
      {/* Vertical Social Links - Left Side */}
      <div 
        className="fixed left-0 top-0 bottom-0 w-8 z-40 hidden md:flex flex-col items-center justify-start pt-4"
        style={{ backgroundColor: colors.bg }}
      >
        {/* Vertical Line */}
        <div 
          className="w-px h-32 mb-4"
          style={{ backgroundColor: colors.text }}
        />
        
        {/* Social Icons */}
        <div className="flex flex-col gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
              style={{ color: colors.text }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Top Navbar */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 font-bold text-white"
            >
              <div className="w-4 h-4 border-2 border-white" />
              <span>Elias</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="transition-all duration-300 font-medium"
                  style={{
                    color: activeSection === link.href.slice(1) ? "#FFFFFF" : colors.text,
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#FFFFFF"}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = activeSection === link.href.slice(1) ? "#FFFFFF" : colors.text;
                  }}
                >
                  <span style={{ color: colors.accent }}>#</span>{link.name}
                </a>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 transition-all duration-300 rounded-lg hover:bg-opacity-10 cursor-pointer"
                style={{ color: colors.text }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 transition-all duration-300"
              style={{ color: colors.text }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            className="md:hidden border-t"
            style={{ 
              backgroundColor: colors.bg,
              borderColor: colors.text + "40"
            }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 transition-all duration-300 font-medium border-l-2 pl-4"
                  style={{
                    color: activeSection === link.href.slice(1) ? "#FFFFFF" : colors.text,
                    borderColor: activeSection === link.href.slice(1) ? colors.accent : "transparent",
                  }}
                >
                  <span style={{ color: colors.accent }}>#</span>{link.name}
                </a>
              ))}
              
              {/* Theme Toggle in Mobile */}
              <div className="pt-4 border-t" style={{ borderColor: colors.text + "40" }}>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="flex items-center gap-2 w-full py-2 transition-all duration-300"
                  style={{ color: colors.text }}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
              
              <div className="border-t" style={{ borderColor: colors.text + "40" }}>
                <select 
                  className="bg-transparent border-none outline-none cursor-pointer w-full py-2"
                  style={{ color: colors.text }}
                >
                  <option value="en">EN</option>
                  <option value="bn">BN</option>
                </select>
              </div>

              {/* Mobile Social Links */}
              <div className="flex gap-6 pt-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300"
                    style={{ color: colors.text }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.text}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;