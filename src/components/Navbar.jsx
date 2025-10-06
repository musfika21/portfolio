import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, toggleTheme, colors } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detect active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{
          background: `linear-gradient(90deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
          scaleX: scrollProgress / 100,
        }}
        initial={{ scaleX: 0 }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="fixed w-full z-50 pt-2 px-2 sm:pt-3 sm:px-3 md:pt-4 md:px-4"
        style={{ top: '0.1rem' }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-xl sm:rounded-2xl shadow-2xl backdrop-blur-xl transition-all duration-500"
            style={{
              backgroundColor: isDark
                ? 'rgba(76, 91, 108, 0.7)'
                : 'rgba(208, 205, 201, 0.7)',
              border: `1px solid ${colors.accent.border}20`,
              boxShadow: isDark
                ? `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px ${colors.accent.border}30`
                : `0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px ${colors.accent.border}30`,
            }}
          >
            <div className="flex justify-between items-center px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4">
              {/* Logo Container - Elevated */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-lg sm:rounded-xl cursor-pointer"
                style={{
                  backgroundColor: colors.bg.card,
                  boxShadow: `0 4px 12px ${colors.accent.primary}40`,
                }}
              >
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight relative"
                  style={{
                    color: colors.text.primary,
                    textShadow: `0 0 20px ${colors.accent.primary}60`
                  }}
                >
                  <img src="./logo.png" className="w-10" />
                </a>
              </motion.div>

              {/* Desktop Menu - Layered Cards */}
              <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <motion.a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-3 py-2 xl:px-5 xl:py-2.5 rounded-lg font-medium text-xs xl:text-sm transition-all duration-300 block"
                        style={{
                          color: isActive ? colors.text.primary : colors.text.secondary,
                          backgroundColor: isActive ? colors.bg.secondary : 'transparent',
                          boxShadow: isActive ? `0 4px 12px ${colors.accent.primary}30` : 'none',
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = colors.bg.cardHover + '40';
                            e.currentTarget.style.color = colors.text.primary;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = colors.text.secondary;
                          }
                        }}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute bottom-0 left-1/2 w-1/2 h-0.5 rounded-full"
                            style={{
                              backgroundColor: colors.accent.primary,
                              transform: 'translateX(-50%)',
                              boxShadow: `0 0 10px ${colors.accent.primary}`
                            }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Theme Toggle & Mobile Menu */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Glowing Theme Toggle Orb */}
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="relative p-2 rounded-full transition-all duration-500 cursor-pointer"
                  style={{
                    backgroundColor: colors.bg.card,
                    boxShadow: isDark
                      ? `0 0 20px ${colors.accent.primary}60, 0 4px 12px rgba(0, 0, 0, 0.3)`
                      : `0 0 20px ${colors.accent.secondary}40, 0 4px 12px rgba(0, 0, 0, 0.1)`,
                    color: colors.accent.primary,
                  }}
                  aria-label="Toggle theme"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isDark ? 0 : 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    {isDark ? (
                      <FaSun className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                    ) : (
                      <FaMoon className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                    )}
                  </motion.div>

                  {/* Orb Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${colors.accent.primary}40, transparent)`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.2, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden p-2 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: colors.bg.card,
                    color: colors.text.primary,
                    boxShadow: `0 4px 12px ${colors.accent.primary}30`
                  }}
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <FaTimes className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    ) : (
                      <FaBars className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu - Layered Dropdown */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden overflow-hidden px-3 pb-3 sm:px-4 sm:pb-4"
                >
                  <div
                    className="rounded-lg sm:rounded-xl p-3 sm:p-4 space-y-1.5 sm:space-y-2 mt-2"
                    style={{
                      backgroundColor: colors.bg.secondary,
                      boxShadow: `inset 0 2px 8px ${colors.accent.primary}20`
                    }}
                  >
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.08 }}
                        className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300"
                        style={{
                          color: activeSection === link.href.slice(1) ? colors.text.primary : colors.text.secondary,
                          backgroundColor: activeSection === link.href.slice(1)
                            ? colors.bg.card
                            : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colors.bg.cardHover;
                          e.currentTarget.style.color = colors.text.primary;
                          e.currentTarget.style.transform = 'translateX(8px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            activeSection === link.href.slice(1) ? colors.bg.card : 'transparent';
                          e.currentTarget.style.color =
                            activeSection === link.href.slice(1) ? colors.text.primary : colors.text.secondary;
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;