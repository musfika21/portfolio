import React, { useState, useEffect } from "react";
import { Code2, Server, Wrench, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";


// Mock skills data - replace with your actual data import
const skills = {
  frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
  backend: ["Node.js", "Express.js", "MongoDB"],
  tools: ["Git", "Figma"]
};

const SkillCard = ({ skill, index, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 p-4 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-[#9CAFAA]/50 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      style={{
        transitionDelay: isVisible ? '0ms' : `${delay}ms`,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="absolute inset-0 bg-[#9CAFAA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <ChevronRight className="w-4 h-4 text-[#9CAFAA]/60 mb-2 transform group-hover:translate-x-1 group-hover:text-[#9CAFAA] transition-all duration-300" />
        <h3 className="text-gray-200 font-medium text-sm sm:text-base group-hover:text-[#9CAFAA] transition-colors duration-300">
          {skill}
        </h3>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 bg-[#9CAFAA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

const SkillCategory = ({ title, skillList, icon: Icon, index }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-full">
      <div
        className={`mb-8 transform transition-all duration-700 ${index === 0 ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
          }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        {/* Category Header */}
        <div
          className="flex items-center justify-between mb-6 cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-[#9CAFAA] shadow-lg group-hover:scale-110 group-hover:bg-[#9CAFAA]/90 transition-all duration-300">
              <Icon className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#9CAFAA] transition-colors duration-300">
              {title}
            </h2>
          </div>
          <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#9CAFAA]" />
          </div>
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          {skillList.map((skill, skillIndex) => (
            <SkillCard
              key={skill}
              skill={skill}
              index={skillIndex}
              delay={index * 200 + skillIndex * 50}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    {
      title: "Frontend",
      skills: skills.frontend,
      icon: Code2
    },
    {
      title: "Backend",
      skills: skills.backend,
      icon: Server
    },
    {
      title: "Tools",
      skills: skills.tools,
      icon: Wrench
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#9CAFAA]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#9CAFAA]/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9CAFAA]/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          <motion.h2
            className="text-3xl font-bold text-primary mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>
          <div className="w-24 h-1 bg-[#9CAFAA] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skillList={category.skills}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#9CAFAA] rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#9CAFAA]/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-5 w-1 h-1 bg-[#9CAFAA] rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default Skills;