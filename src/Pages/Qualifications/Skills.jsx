import { useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../Hooks/useAuth";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaBootstrap,
  FaNpm,
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
  SiReactquery,
  SiMysql,
  SiVite,
  SiStripe,
  SiShadcnui
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Skills = () => {
  const { theme } = useAuth();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const skillsData = [
    // Frontend
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "frontend" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "frontend" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "frontend" },
    { name: "React.js", icon: FaReact, color: "#61DAFB", category: "frontend" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "frontend" },
    { name: "Material UI", icon: SiMui, color: "#007FFF", category: "frontend" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", category: "frontend" },
    { name: "Framer Motion", icon: TbBrandFramerMotion, color: "#0055FF", category: "frontend" },
    { name: "ShadCN", icon: SiShadcnui, color: "#000000", category: "frontend" },

    // Backend
    { name: "Node.js", icon: FaNodeJs, color: "#339933", category: "backend" },
    { name: "Express.js", icon: SiExpress, color: "#000000", category: "backend" },
    { name: "PHP", icon: FaPhp, color: "#777BB4", category: "backend" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "backend" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "backend" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "backend" },

    // Tools & Others
    { name: "Git", icon: FaGitAlt, color: "#F05032", category: "tools" },
    { name: "GitHub", icon: FaGithub, color: "#181717", category: "tools" },
    { name: "Vite", icon: SiVite, color: "#646CFF", category: "tools" },
    { name: "NPM", icon: FaNpm, color: "#CB3837", category: "tools" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7", category: "tools" },
    { name: "Vercel", icon: SiVercel, color: "#000000", category: "tools" },
    { name: "Tanstack Query", icon: SiReactquery, color: "#FF4154", category: "tools" },
    { name: "Stripe", icon: SiStripe, color: "#635BFF", category: "tools" },
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" },
  ];

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring" }
    }
  };

  return (
    <section
      id="skills"
      className={`w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative overflow-hidden ${
        theme ? "bg-black" : "bg-white"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl md:w-11/12 mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 relative z-10">
        {/* Section Title */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
            <span className="text-blue-500 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold">/</span>
            <h2
              className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold ${
                theme ? "text-white" : "text-gray-900"
              }`}
            >
              SKILLS
            </h2>
          </div>
          <p
            className={`text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed ${
              theme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded cursor-pointer font-medium text-xs sm:text-sm transition-all duration-300 border-2 ${
                activeCategory === cat.id
                  ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/50"
                  : theme
                  ? "border-gray-700 text-gray-400 hover:border-blue-500/50 hover:text-blue-400"
                  : "border-gray-300 text-gray-600 hover:border-blue-500/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-3 xs:gap-4 sm:gap-5 md:gap-6"
        >
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                layout
                className={`relative p-3 xs:p-4 sm:p-5 border-2 flex flex-col items-center justify-center gap-2 xs:gap-3 cursor-pointer group transition-all duration-300 ${
                  theme
                    ? "border-gray-800 bg-gray-900/50 hover:border-blue-500/50 backdrop-blur-sm"
                    : "border-gray-200 bg-gray-50/50 hover:border-blue-500/50"
                }`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <motion.div
                  animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Icon
                    className="text-2xl xs:text-3xl sm:text-4xl transition-all duration-300"
                    style={{
                      color: isHovered ? skill.color : theme ? "#9ca3af" : "#6b7280",
                      filter: isHovered ? `drop-shadow(0 0 12px ${skill.color}80)` : "none"
                    }}
                  />
                </motion.div>

                {/* Skill Name */}
                <span
                  className={`text-[10px] xs:text-xs sm:text-sm font-medium text-center transition-colors duration-300 ${
                    isHovered
                      ? "text-blue-400"
                      : theme
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {skill.name}
                </span>

                {/* Bottom accent line with glow */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1"
                  style={{
                    backgroundColor: skill.color,
                    width: isHovered ? "100%" : "0%",
                    boxShadow: isHovered ? `0 0 12px ${skill.color}` : "none"
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover glow effect */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`
                    }}
                  />
                )}

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-8 h-8"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}40 0%, transparent 70%)`,
                    clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                    opacity: isHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;