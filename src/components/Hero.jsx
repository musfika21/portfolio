import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaSquareXTwitter } from "react-icons/fa6";

// Custom useInView hook
const useInView = (options = {}) => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) {
          observer.disconnect();
        }
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, {
      threshold: options.threshold || 0.2,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, inView];
};

const socialLinks = [
  { icon: "FaGithub", url: "https://github.com/musfika21" },
  { icon: "FaLinkedin", url: "https://www.linkedin.com/in/musfika-iqfat21/" },
  { icon: "FaSquareXTwitter", url: "https://x.com/Musfika_Iqfat21" },
  { icon: "FaFacebook", url: "https://www.facebook.com/musfikaiqfatmomo21" },
];

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaSquareXTwitter: FaSquareXTwitter,
  FaFacebook: FaFacebook,
};

const Hero = () => {
  const { colors } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [currentRole, setCurrentRole] = React.useState(0);
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Front End Developer",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-between gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-2 pt-33 md:py-45 lg:py-25 xl:py-30"
      style={{
        backgroundColor: colors.bg.primary,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full blur-3xl"
          style={{ backgroundColor: colors.accent.primary }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full blur-3xl"
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
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative w-10/12 max-w-screen-xl z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-13 md:gap-20 lg:gap-30 xl:gap-40 items-center"
      >
        {/* Left Side - Profile Image with Decorative Elements */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-end order-1 lg:order-1"
        >
          <div className="relative group">
            {/* Decorative Rings */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px solid ${colors.accent.primary}40`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                style={{ backgroundColor: colors.accent.primary }}
              />
              <div
                className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                style={{ backgroundColor: colors.accent.secondary }}
              />
            </motion.div>

            {/* Outer Glow Ring */}
            <motion.div
              className="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-full"
              style={{
                background: `radial-gradient(circle, ${colors.accent.primary}20, transparent)`,
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Profile Image Container */}
            <motion.div
              className="relative rounded-full p-1 sm:p-1.5 md:p-2"
              style={{
                background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                boxShadow: `0 20px 60px ${colors.accent.primary}40`,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="rounded-full p-2 sm:p-3 md:p-4"
                style={{ backgroundColor: colors.bg.primary }}
              >
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-48 h-48 xs:w-52 xs:h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover"
                  style={{
                    border: `4px solid ${colors.bg.card}`,
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-2xl"
              style={{
                backgroundColor: colors.bg.card,
                border: `2px solid ${colors.accent.border}`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <span
                className="font-bold text-xs sm:text-sm md:text-base"
                style={{ color: colors.accent.primary }}
              >
                ✨ Available
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6"
        >

          {/* Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold leading-tight"
            style={{ color: colors.text.primary }}
            variants={itemVariants}
          >
            Musfika{" "}
            <span
              style={{
                color: colors.accent.primary,
              }}
            >
              Iqfat
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            className="h-10 sm:h-12 md:h-14 lg:h-18 w-full flex items-center"
            variants={itemVariants}
          >
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold"
              style={{
                color: colors.accent.primary,
                textShadow: `0 0 30px ${colors.accent.primary}60`,
              }}
            >
              {roles[currentRole]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl leading-relaxed"
            style={{ color: colors.text.secondary }}
            variants={itemVariants}
          >
            I love building modern, responsive, and user-friendly web
            applications. Passionate about clean code, beautiful UI, and smooth
            UX that delivers exceptional digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            variants={itemVariants}
          >
            <motion.a
              href="/Musfika Iqfat.pdf"
              download
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: colors.bg.card,
                color: colors.text.primary,
                border: `2px solid ${colors.accent.primary}`,
                boxShadow: `0 10px 30px ${colors.accent.primary}30`,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaDownload />
                Download Resume
              </span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent.primary}20, ${colors.accent.secondary}20)`,
                }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: colors.accent.primary,
                border: `2px solid ${colors.accent.border}`,
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                backgroundColor: colors.bg.card,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-3 sm:gap-4 pt-4"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: colors.bg.card,
                    color: colors.text.secondary,
                    border: `1px solid ${colors.accent.border}`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    backgroundColor: colors.bg.cardHover,
                    color: colors.accent.primary,
                    boxShadow: `0 10px 30px ${colors.accent.primary}40`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="text-lg sm:text-xl md:text-2xl" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;