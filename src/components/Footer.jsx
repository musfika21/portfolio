import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";

const Footer = () => {

  const { theme } = useAuth();
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/musfika21", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/musfika-iqfat21/", label: "LinkedIn" },
    { icon: FaSquareXTwitter, url: "https://x.com/Musfika_Iqfat21", label: "Twitter" },
    { icon: FaFacebook, url: "https://www.facebook.com/musfikaiqfatmomo21", label: "Facebook" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: "your.email@example.com", href: "mailto:your.email@example.com" },
    { icon: FaPhone, text: "+880 1XXX-XXXXXX", href: "tel:+8801XXXXXXXXX" },
    { icon: FaMapMarkerAlt, text: "Dhaka, Bangladesh" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 overflow-hidden"
      style={{ backgroundColor: colors.bg.card }}
    >
      {/* Animated Background Elements
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl"
          style={{ backgroundColor: colors.accent.primary }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-3xl"
          style={{ backgroundColor: colors.accent.secondary }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* About Section */}
          <motion.div
            className="space-y-4 sm:space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              // style={{ color: colors.text.primary }}
            >
              Musfika{" "}
              {/* <span style={{ color: colors.accent.primary }}>Iqfat</span> */}
            </h3>
            <p
              className="text-sm sm:text-base leading-relaxed"
              // style={{ color: colors.text.secondary }}
            >
              Full Stack Developer passionate about creating beautiful and functional web applications with modern technologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl transition-all duration-300"
                    style={{
                      // backgroundColor: colors.bg.primary,
                      // color: colors.text.secondary,
                      // border: `1px solid ${colors.accent.border}`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      // backgroundColor: colors.bg.secondary,
                      // color: colors.accent.primary,
                      // boxShadow: `0 8px 20px ${colors.accent.primary}40`,
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="text-lg sm:text-xl" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4 sm:space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-lg sm:text-xl md:text-2xl font-bold"
              style={{ color: colors.text.primary }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-sm sm:text-base inline-block transition-colors duration-300"
                    style={{ color: colors.text.secondary }}
                    whileHover={{
                      x: 5,
                      color: colors.accent.primary,
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4 sm:space-y-5 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-lg sm:text-xl md:text-2xl font-bold"
              style={{ color: colors.text.primary }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl flex-shrink-0"
                      style={{
                        backgroundColor: colors.bg.primary,
                        border: `1px solid ${colors.accent.border}`,
                      }}
                    >
                      <Icon
                        className="text-base sm:text-lg"
                        style={{ color: colors.accent.primary }}
                      />
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm sm:text-base transition-colors duration-300"
                        style={{ color: colors.text.secondary }}
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span
                        className="text-sm sm:text-base"
                        style={{ color: colors.text.secondary }}
                      >
                        {info.text}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Newsletter or CTA */}
            <motion.div
              className="pt-4 sm:pt-6"
              whileHover={{ scale: 1.02 }}
            >
              <a
                href="#contact"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                  color: "#ffffff",
                  boxShadow: `0 8px 20px ${colors.accent.primary}40`,
                }}
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px mb-6 sm:mb-8"
          style={{
            background: `linear-gradient(90deg, transparent, ${colors.accent.border}, transparent)`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xs sm:text-sm md:text-base text-center sm:text-left"
            style={{ color: colors.text.secondary }}
          >
            © {currentYear} Musfika Iqfat. All rights reserved.
          </p>

          <motion.p
            className="text-xs sm:text-sm md:text-base flex items-center gap-2"
            style={{ color: colors.text.secondary }}
            whileHover={{ scale: 1.05 }}
          >
            Made with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaHeart style={{ color: colors.accent.primary }} />
            </motion.span>{" "}
            by Musfika Iqfat
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg z-50"
        style={{
          background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
          color: "#ffffff",
        }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;