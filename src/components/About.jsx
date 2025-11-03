import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaGraduationCap, FaRocket, FaDatabase, FaPalette } from "react-icons/fa";

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

const About = () => {
  const { colors } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const interests = [
    {
      icon: FaCode,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies",
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Creating efficient and scalable database architectures",
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Crafting beautiful and intuitive user interfaces",
    },
    {
      icon: FaRocket,
      title: "Problem Solving",
      description: "Tackling complex challenges with creative solutions",
    },
    {
      icon: FaLaptopCode,
      title: "Clean Code",
      description: "Writing maintainable and well-documented code",
    },
    {
      icon: FaGraduationCap,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
    },
  ];

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

  return (
    <section
      id="about"
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
          className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full blur-3xl"
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
            About{" "}
            <span style={{ color: colors.accent.primary }}>Me</span>
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
        </motion.div>

        {/* Main content about me */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="w-full xs:w-11/12 mx-auto">
            {/* Modern Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8">
              {/* Left Column - Introduction Card */}
              <motion.div
                className="relative overflow-hidden group rounded-2xl"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent.primary}15, ${colors.accent.secondary}15)`,
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <div
                  className="relative p-6 xs:p-7 sm:p-8 md:p-9 lg:p-10 backdrop-blur-sm"
                  style={{
                    backgroundColor: colors.bg.card + 'F0',
                    border: `2px solid ${colors.accent.primary}30`,
                  }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                      style={{
                        backgroundColor: colors.accent.primary + '20',
                        border: `1px solid ${colors.accent.primary}40`,
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 20px ${colors.accent.primary}30`,
                          `0 0 30px ${colors.accent.primary}50`,
                          `0 0 20px ${colors.accent.primary}30`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: colors.accent.primary }}
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      />
                      <span
                        className="text-xs sm:text-sm font-semibold tracking-wider uppercase"
                        style={{ color: colors.accent.primary }}
                      >
                        Introduction
                      </span>
                    </motion.div>

                    <h3
                      className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                      style={{ color: colors.text.primary }}
                    >
                      Hello! I'm{" "}
                      <motion.span
                        className="block mt-2"
                        style={{
                          background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundSize: '200% 200%',
                        }}
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                        }}
                      >
                        Musfika Iqfat
                      </motion.span>
                    </h3>
                  </div>

                  {/* Education Badge */}
                  <motion.div
                    className="p-5 rounded-xl mb-6"
                    style={{
                      backgroundColor: colors.bg.secondary,
                      border: `1px solid ${colors.accent.border}`,
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg"
                        style={{
                          backgroundColor: colors.accent.primary + '20',
                        }}
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      >
                        <FaGraduationCap
                          className="text-2xl sm:text-3xl"
                          style={{ color: colors.accent.primary }}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <p
                          className="text-xs sm:text-sm font-semibold mb-1"
                          style={{ color: colors.accent.primary }}
                        >
                          Currently Studying
                        </p>
                        <p
                          className="text-sm sm:text-base font-bold mb-1"
                          style={{ color: colors.text.primary }}
                        >
                          B.Sc. in Computer Science & Engineering
                        </p>
                        <p
                          className="text-xs sm:text-sm leading-relaxed"
                          style={{ color: colors.text.secondary }}
                        >
                          Z. H. Sikder University of Science and Technology
                        </p>
                        <p
                          className="text-xs mt-2 font-semibold"
                          style={{ color: colors.accent.secondary }}
                        >
                          3rd Year Student
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom Decorative Line */}
                  <motion.div
                    className="h-1 rounded-full mt-6"
                    style={{
                      background: `linear-gradient(90deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                    }}
                    initial={{ width: '0%' }}
                    animate={inView ? { width: '100%' } : { width: '0%' }}
                    transition={{ delay: 0.8, duration: 1 }}
                  />
                </div>
              </motion.div>

              {/* Right Column - Experience Cards */}
              <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                {/* Full Stack Developer Card */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl group"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${colors.accent.secondary}10, ${colors.accent.primary}10)`,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div
                    className="relative p-6 xs:p-7 sm:p-8"
                    style={{
                      backgroundColor: colors.bg.card,
                      border: `2px solid ${colors.accent.secondary}30`,
                    }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className="p-3 rounded-xl"
                        style={{
                          backgroundColor: colors.accent.secondary + '20',
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaLaptopCode
                          className="text-2xl sm:text-3xl"
                          style={{ color: colors.accent.secondary }}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h4
                          className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
                          style={{ color: colors.accent.secondary }}
                        >
                          Full Stack Developer
                        </h4>
                        <p
                          className="text-sm sm:text-base leading-relaxed"
                          style={{ color: colors.text.secondary }}
                        >
                          Specializing in the <span style={{ color: colors.text.primary, fontWeight: 600 }}>MERN stack</span>, I bring ideas to life through code. Building web applications that are functional and provide seamless user experiences drives my passion for development.
                        </p>
                      </div>
                    </div>

                    <motion.div
                      className="h-1 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${colors.accent.secondary}, transparent)`,
                      }}
                      initial={{ width: '0%' }}
                      animate={inView ? { width: '100%' } : { width: '0%' }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </div>
                </motion.div>

                {/* CS Fundamentals Card */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl group"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${colors.accent.primary}10, ${colors.accent.secondary}10)`,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div
                    className="relative p-6 xs:p-7 sm:p-8"
                    style={{
                      backgroundColor: colors.bg.card,
                      border: `2px solid ${colors.accent.primary}30`,
                    }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className="p-3 rounded-xl"
                        style={{
                          backgroundColor: colors.accent.primary + '20',
                        }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaDatabase
                          className="text-2xl sm:text-3xl"
                          style={{ color: colors.accent.primary }}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h4
                          className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
                          style={{ color: colors.accent.primary }}
                        >
                          CS Fundamentals
                        </h4>
                        <p
                          className="text-sm sm:text-base leading-relaxed"
                          style={{ color: colors.text.secondary }}
                        >
                          Passionate about <span style={{ color: colors.text.primary, fontWeight: 600 }}>algorithms, data structures, and system design</span>. I believe a strong foundation in CS fundamentals is essential for solving real-world problems effectively.
                        </p>
                      </div>
                    </div>

                    <motion.div
                      className="h-1 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${colors.accent.primary}, transparent)`,
                      }}
                      initial={{ width: '0%' }}
                      animate={inView ? { width: '100%' } : { width: '0%' }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div variants={itemVariants} className="mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20 w-full xs:w-11/12 mx-auto">
          <h3
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12"
            style={{ color: colors.text.primary }}
          >
            What I'm{" "}
            <span style={{ color: colors.accent.primary }}>Passionate About</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
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

                  <h5
                    className="text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-1.5 xs:mb-2 relative z-10 transition-colors duration-300"
                    style={{
                      color: isHovered ? colors.accent.primary : colors.text.primary,
                    }}
                  >
                    {interest.title}
                  </h5>
                  <p
                    className="text-xs xs:text-sm sm:text-base relative z-10 leading-relaxed transition-colors duration-300"
                    style={{
                      color: colors.text.secondary,
                    }}
                  >
                    {interest.description}
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
      </motion.div>
    </section>
  );
};

export default About;