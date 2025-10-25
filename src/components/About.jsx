import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
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
        <motion.div variants={itemVariants} className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 w-full">
          {/* Texts */}
          <div className="w-full xs:w-11/12 mx-auto">
            <div
              className="relative overflow-hidden group"
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent.primary}40, ${colors.accent.secondary}40, ${colors.accent.primary}40)`,
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Content card */}
              <div
                className="relative p-5 xs:p-6 sm:p-7 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl backdrop-blur-sm m-[2px]"
                style={{
                  backgroundColor: colors.bg.card,
                  border: `1px solid ${colors.accent.border}`,
                  boxShadow: `0 8px 32px ${colors.accent.primary}10`,
                }}
              >
                {/* Top accent bar with animation */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl sm:rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${colors.accent.primary}, ${colors.accent.secondary}, ${colors.accent.primary})`,
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Greeting with typing effect style */}
                <motion.div
                  className="mb-6 xs:mb-7 sm:mb-8 md:mb-10 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.accent.primary }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <span
                      className="text-xs xs:text-sm font-mono tracking-wider uppercase"
                      style={{ color: colors.accent.primary }}
                    >
                      Introduction
                    </span>
                  </div>
                  <h3
                    className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                    style={{ color: colors.text.primary }}
                  >
                    Hello! I'm{" "}
                    <motion.span
                      style={{
                        color: colors.accent.primary,
                        background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      Musfika Iqfat
                    </motion.span>
                  </h3>
                </motion.div>

                {/* Content sections with better spacing and icons */}
                <div className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8">
                  {/* Section 1 */}
                  <motion.div
                    className="relative pl-4 xs:pl-5 sm:pl-6 border-l-2"
                    style={{ borderColor: colors.accent.primary + '40' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: colors.accent.primary }}
                      animate={{
                        scale: [1, 1.5, 1],
                        boxShadow: [`0 0 0 0 ${colors.accent.primary}40`, `0 0 0 6px ${colors.accent.primary}00`, `0 0 0 0 ${colors.accent.primary}40`],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <p
                      className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed"
                      style={{ color: colors.text.secondary }}
                    >
                      I'm currently pursuing my Bachelor's degree in <span style={{ color: colors.text.primary, fontWeight: 600 }}>Computer Science and Engineering</span> at{" "}
                      <span style={{
                        color: colors.accent.primary,
                        fontWeight: 700,
                        textShadow: `0 0 20px ${colors.accent.primary}30`,
                      }}>
                        Z. H. Sikder University of Science and Technology
                      </span>, where I'm in my 3rd year. My academic journey has been fueled by a deep passion for technology and innovation.
                    </p>
                  </motion.div>

                  {/* Section 2 */}
                  <motion.div
                    className="relative pl-4 xs:pl-5 sm:pl-6 border-l-2"
                    style={{ borderColor: colors.accent.secondary + '40' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: colors.accent.secondary }}
                      animate={{
                        scale: [1, 1.5, 1],
                        boxShadow: [`0 0 0 0 ${colors.accent.secondary}40`, `0 0 0 6px ${colors.accent.secondary}00`, `0 0 0 0 ${colors.accent.secondary}40`],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                    <p
                      className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed"
                      style={{ color: colors.text.secondary }}
                    >
                      As a <span style={{ color: colors.accent.secondary, fontWeight: 700 }}>Full Stack Developer</span> specializing in the{" "}
                      <span style={{ color: colors.text.primary, fontWeight: 600 }}>MERN stack</span>, I love bringing ideas to life through code. I find joy in building web applications that are not only functional but also provide seamless user experiences. My journey in web development is driven by curiosity and a constant desire to learn and grow.
                    </p>
                  </motion.div>

                  {/* Section 3 */}
                  <motion.div
                    className="relative pl-4 xs:pl-5 sm:pl-6 border-l-2"
                    style={{ borderColor: colors.accent.primary + '40' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: colors.accent.primary }}
                      animate={{
                        scale: [1, 1.5, 1],
                        boxShadow: [`0 0 0 0 ${colors.accent.primary}40`, `0 0 0 6px ${colors.accent.primary}00`, `0 0 0 0 ${colors.accent.primary}40`],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1,
                      }}
                    />
                    <p
                      className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed"
                      style={{ color: colors.text.secondary }}
                    >
                      Beyond coding, I'm passionate about understanding the theoretical foundations of computer science and applying them to solve real-world problems. Whether it's{" "}
                      <span style={{ color: colors.text.primary, fontWeight: 600 }}>algorithms, data structures, or system design</span>, I believe that a strong foundation in CS fundamentals is key to becoming a better developer.
                    </p>
                  </motion.div>
                </div>

                {/* Bottom decorative element */}
                <motion.div
                  className="mt-6 xs:mt-7 sm:mt-8 flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <motion.div
                    className="h-px flex-1 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${colors.accent.primary}40, transparent)`,
                    }}
                  />
                  <motion.div
                    className="flex gap-1.5"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: colors.accent.primary }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                  <motion.div
                    className="h-px flex-1 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${colors.accent.primary}40, transparent)`,
                    }}
                  />
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