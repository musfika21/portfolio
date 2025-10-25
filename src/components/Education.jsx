import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

// Custom useInView hook
const useInView = (options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

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

const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Z. H. Sikder University of Science and Technology",
    year: "2023 - Present",
    status: "3rd Year",
    icon: FaUniversity,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Narayanganj Government Mohila College",
    year: "2020 - 2022",
    status: "Completed",
    icon: FaGraduationCap,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Imperial Ideal School and College",
    year: "2018 - 2020",
    status: "Completed",
    icon: FaSchool,
  },
];

const Education = () => {
  const { colors } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  if (!education.length) return null;

  return (
    <section
      id="education"
      ref={ref}
      className="min-h-screen py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 relative overflow-hidden"
      style={{ backgroundColor: colors.bg.primary }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full blur-3xl"
          style={{ backgroundColor: colors.accent.secondary }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full blur-3xl"
          style={{ backgroundColor: colors.accent.primary }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4"
            style={{ color: colors.text.primary }}
          >
            My{" "}
            <span style={{ color: colors.accent.primary }}>Education</span>
          </h2>
          <motion.div
            className="w-16 xs:w-20 sm:w-24 md:w-32 h-1 mx-auto rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
            }}
            initial={{ width: 0 }}
            animate={inView ? { width: "8rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <p
            className="mt-4 xs:mt-5 sm:mt-6 text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: colors.text.secondary }}
          >
            My academic journey and educational background
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl cursor-pointer overflow-hidden relative group"
                style={{
                  backgroundColor: isHovered ? colors.bg.secondary : colors.bg.card,
                  border: `1px solid ${isHovered ? colors.accent.primary + '40' : colors.accent.border}`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 + index * 0.08, duration: 0.5 }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent.primary}08, ${colors.accent.secondary}08)`,
                  }}
                />

                {/* Icon with glow effect */}
                <div className="relative mb-3 xs:mb-4">
                  <Icon
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl transition-all duration-300"
                    style={{
                      color: isHovered ? colors.accent.primary : colors.accent.primary + 'CC',
                      filter: isHovered ? `drop-shadow(0 0 10px ${colors.accent.primary})` : 'none',
                    }}
                  />
                </div>

                {/* Status Badge */}
                <div
                  className="inline-block px-3 py-1.5 rounded-full text-xs xs:text-sm font-semibold mb-3 xs:mb-4 relative z-10"
                  style={{
                    backgroundColor: colors.accent.primary + '20',
                    color: colors.accent.primary,
                  }}
                >
                  {edu.status}
                </div>

                {/* Degree */}
                <h5
                  className="text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-1.5 xs:mb-2 relative z-10 transition-colors duration-300 leading-tight"
                  style={{
                    color: isHovered ? colors.accent.primary : colors.text.primary,
                  }}
                >
                  {edu.degree}
                </h5>

                {/* Institution */}
                <p
                  className="text-xs xs:text-sm sm:text-base relative z-10 leading-relaxed transition-colors duration-300 mb-2 xs:mb-3"
                  style={{
                    color: colors.text.secondary,
                  }}
                >
                  {edu.institution}
                </p>

                {/* Year */}
                <p
                  className="text-xs xs:text-sm sm:text-base font-medium relative z-10 transition-colors duration-300"
                  style={{
                    color: colors.text.secondary,
                  }}
                >
                  {edu.year}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                    width: isHovered ? '100%' : '0%',
                    transition: 'width 0.3s ease',
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;