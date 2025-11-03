import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";

// Custom useInView hook
const useInView = (options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
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
  { icon: "FaLinkedin", url: "https://www.linkedin.com/in/musfika-iqfat21" },
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

  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Front End Developer",
  ];

  useEffect(() => {
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
      className="min-h-screen flex items-center justify-center pt-24 xs:pt-28 sm:pt-32 md:pt-40 lg:pt-45 xl:pt-50 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pb-8 xs:pb-12 sm:pb-16 md:pb-20 lg:pb-24"
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
          className="absolute top-10 left-5 w-24 h-24 sm:top-20 sm:left-10 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl"
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
          className="absolute bottom-10 right-5 w-32 h-32 sm:bottom-20 sm:right-10 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full blur-3xl"
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
        className="relative w-full max-w-7xl mx-auto z-10 flex flex-col-reverse lg:flex-row justify-center items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-40"
      >
        {/* Left Side - Profile Image with Decorative Elements */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center order-2 lg:order-1 w-full lg:w-auto flex-shrink-0 xl:pl-20"
        >
          <div className="relative">
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
                className="absolute top-0 right-0 w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full"
                style={{ backgroundColor: colors.accent.primary }}
              />
              <div
                className="absolute bottom-0 left-0 w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full"
                style={{ backgroundColor: colors.accent.secondary }}
              />
            </motion.div>

            {/* Outer Glow Ring */}
            <motion.div
              className="absolute -inset-2.5 xs:-inset-3 sm:-inset-4 md:-inset-6 lg:-inset-8 rounded-full"
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
              className="relative rounded-full p-0.5 xs:p-1 sm:p-1.5 md:p-2"
              style={{
                background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                boxShadow: `0 20px 60px ${colors.accent.primary}40`,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="rounded-full p-1.5 xs:p-2 sm:p-3 md:p-4"
                style={{ backgroundColor: colors.bg.primary }}
              >
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-36 h-36 xs:w-40 xs:h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full object-cover"
                  style={{
                    border: `3px solid ${colors.bg.card}`,
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-0.5 -right-0.5 xs:-bottom-1 xs:-right-1 sm:-bottom-2 sm:-right-2 md:-bottom-3 md:-right-3 lg:-bottom-4 lg:-right-4 xl:-bottom-6 xl:-right-6 px-2 py-0.5 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-full shadow-2xl"
              style={{
                backgroundColor: colors.bg.card,
                border: `2px solid ${colors.accent.border}`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <span
                className="font-bold text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap"
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
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 space-y-2.5 xs:space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 w-full lg:flex-1 xl:pl-10"
        >
          {/* Name */}
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight"
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
            className="h-7 xs:h-8 sm:h-9 md:h-10 lg:h-12 xl:h-14 2xl:h-16 w-full flex items-center justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold"
              style={{
                color: colors.accent.primary,
                textShadow: `0 0 30px ${colors.accent.primary}60`,
              }}
            >
              {roles[currentRole]}
            </motion.h2>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-2.5 xs:gap-3 sm:gap-4 w-full sm:w-auto"
            variants={itemVariants}
          >
            <motion.a
              href="/Musfika Iqfat.pdf"
              download
              className="group relative px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-xl font-semibold text-xs xs:text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300"
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
                <FaDownload className="text-xs xs:text-sm sm:text-base" />
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
              className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-xl font-semibold text-xs xs:text-sm sm:text-base md:text-lg transition-all duration-300"
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
            className="flex gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 pt-1.5 xs:pt-2 sm:pt-3 md:pt-4"
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
                  className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 flex items-center justify-center rounded-full transition-all duration-300"
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
                  <Icon className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl" />
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