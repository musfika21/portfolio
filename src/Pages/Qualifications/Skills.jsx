import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub,
  FaDatabase
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb,
  SiFirebase,
  SiMui,
  SiNetlify,
  SiVercel,
  SiReactquery
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

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

const Skills = () => {
  const { colors } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const skillsData = {
    frontend: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 95 },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 90 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 85 },
      { name: "React.js", icon: FaReact, color: "#61DAFB", level: 90 },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 88 },
      { name: "Material UI", icon: SiMui, color: "#007FFF", level: 85 },
      { name: "ShadCn", icon: TbBrandFramerMotion, color: "#000000", level: 80 },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 82 },
      { name: "Tanstack Query", icon: SiReactquery, color: "#FF4154", level: 78 },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 85 },
      { name: "Express.js", icon: SiExpress, color: "#000000", level: 82 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 80 },
    ],
    tools: [
      { name: "Git", icon: FaGitAlt, color: "#F05032", level: 85 },
      { name: "GitHub", icon: FaGithub, color: "#181717", level: 85 },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7", level: 80 },
      { name: "Vercel", icon: SiVercel, color: "#000000", level: 82 },
    ],
  };

  const categories = [
    { id: "all", label: "All Skills", icon: FaDatabase },
    { id: "frontend", label: "Frontend", icon: FaReact },
    { id: "backend", label: "Backend", icon: FaNodeJs },
    { id: "tools", label: "Tools", icon: FaGitAlt },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools];
    }
    return skillsData[activeCategory] || [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
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
          className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full blur-3xl"
          style={{ backgroundColor: colors.accent.primary }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full blur-3xl"
          style={{ backgroundColor: colors.accent.secondary }}
          animate={{
            scale: [1, 1.2, 1],
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
            My{" "}
            <span style={{ color: colors.accent.primary }}>Skills</span>
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
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-10 sm:mb-12 md:mb-16"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 xs:gap-2 px-3 py-2 xs:px-4 xs:py-2.5 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs xs:text-sm sm:text-base transition-all duration-300"
                style={{
                  backgroundColor: isActive ? colors.bg.secondary : colors.bg.card,
                  color: isActive ? colors.text.primary : colors.text.secondary,
                  border: `1px solid ${isActive ? colors.accent.primary + '40' : colors.accent.border}`,
                  boxShadow: isActive ? `0 4px 16px ${colors.accent.primary}30` : 'none',
                }}
              >
                <Icon className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                <span>{category.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 xs:gap-4 sm:gap-5"
        >
          {getFilteredSkills().map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                layout
                variants={skillVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.05 }}
                className="relative p-3 xs:p-4 sm:p-5 rounded-xl sm:rounded-2xl cursor-pointer overflow-hidden group"
                style={{
                  backgroundColor: colors.bg.card,
                  border: `1px solid ${isHovered ? colors.accent.primary : colors.accent.border}`,
                  transition: 'background-color 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${colors.accent.primary}12, transparent)`,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />

                {/* Skill Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon with background */}
                  <motion.div
                    className="mb-2 xs:mb-3 p-2 xs:p-2.5 sm:p-3 rounded-lg sm:rounded-xl"
                    style={{
                      backgroundColor: colors.bg.primary,
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <Icon
                      className="text-2xl xs:text-3xl sm:text-4xl transition-all duration-300"
                      style={{
                        color: isHovered ? skill.color : colors.text.primary,
                        filter: isHovered ? `drop-shadow(0 0 8px ${skill.color}80)` : 'none',
                      }}
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <h4
                    className="text-xs xs:text-sm sm:text-base font-bold transition-colors duration-300"
                    style={{
                      color: colors.text.primary,
                    }}
                  >
                    {skill.name}
                  </h4>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 sm:h-1 rounded-full"
                  style={{
                    backgroundColor: skill.color,
                    width: isHovered ? '100%' : '0%',
                    transition: 'width 0.3s ease',
                    boxShadow: isHovered ? `0 0 8px ${skill.color}` : 'none',
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;