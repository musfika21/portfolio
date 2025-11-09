import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Education = () => {
  const { theme } = useAuth();
  const [activeIndex, setActiveIndex] = useState(0);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Z. H. Sikder University of Science & Technology",
      location: "Shariatpur, Bangladesh",
      period: "2023 September - 2027 June (Expected)",
      status: "Ongoing",
      achievements: [
        "Batch Stand - Top 3",
        "Participate to organize ICT Olympiad Shariatpur",
        "Programming Contest Champion"
      ],
      color: "#3b82f6"
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Narayanganj Government Mohila College",
      location: "Narayanganj, Bangladesh",
      period: "2020 - 2022",
      status: "Completed",
      achievements: [
        "Science Group - 100% marks in ICT",
        "Merit Scholarship Recipient"
      ],
      color: "#8b5cf6"
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Imperial Ideal School & College",
      location: "Dhaka, Bangladesh",
      period: "2018 - 2020",
      status: "Completed",
      achievements: [
        "Class Stand - Top 3",
        "Computer Course Topper",
        "Perfect attendance"
      ],
      color: "#06b6d4"
    }
  ];

  return (
    <section
      id="education"
      className={`w-full pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative overflow-hidden ${
        theme ? "bg-black" : "bg-white"
      }`}
    >

      <div className="max-w-7xl md:w-11/12 mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 relative z-10">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
            <span className="text-blue-500 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold">/</span>
            <h2
              className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold ${
                theme ? "text-white" : "text-gray-900"
              }`}
            >
              EDUCATION
            </h2>
          </div>
          <p
            className={`text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed ${
              theme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My academic journey and qualifications
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row items-center gap-0 sm:gap-4 relative">
            {educationData.map((edu, index) => (
              <div key={edu.id} className="flex items-center">
                <motion.button
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex flex-col items-center gap-2 p-3 sm:p-4 transition-all duration-500 group`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icon Circle */}
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      activeIndex === index
                        ? theme
                          ? "border-blue-500 bg-blue-500/20 shadow-lg shadow-blue-500/50"
                          : "border-blue-500 bg-blue-500/20 shadow-lg shadow-blue-500/30"
                        : theme
                        ? "border-gray-700 bg-gray-900/50 hover:border-blue-500/50"
                        : "border-gray-300 bg-gray-50 hover:border-blue-500/50"
                    }`}
                    animate={activeIndex === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaGraduationCap
                      className={`text-xl sm:text-2xl transition-colors duration-500 ${
                        activeIndex === index ? "text-blue-500" : theme ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                  </motion.div>

                  {/* Year Label */}
                  <span
                    className={`text-xs sm:text-sm font-semibold transition-colors duration-500 ${
                      activeIndex === index
                        ? "text-blue-500"
                        : theme
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    {edu.period.split(" - ")[0]}
                  </span>

                  {/* Active Indicator */}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-2 left-1/2 w-2 h-2 rounded-full bg-blue-500"
                      style={{ x: "-50%" }}
                    />
                  )}
                </motion.button>

                {/* Connector Line */}
                {index < educationData.length - 1 && (
                  <div
                    className={`hidden sm:block w-16 md:w-24 lg:w-32 h-0.5 transition-colors duration-500 ${
                      activeIndex >= index ? "bg-blue-500/50" : theme ? "bg-gray-800" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education Content */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className={`relative p-6 sm:p-8 md:p-10 border-l-4 transition-all duration-500 ${
              theme
                ? "bg-gradient-to-r from-gray-900/80 to-gray-900/40 border-blue-500"
                : "bg-gradient-to-r from-gray-50 to-white border-blue-500"
            }`}
          >
            {/* Degree Title */}
            <div className="mb-6">
              <motion.h3
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 ${
                  theme ? "text-white" : "text-gray-900"
                }`}
              >
                {educationData[activeIndex].degree}
              </motion.h3>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded ${theme ? "bg-blue-500/10" : "bg-blue-500/10"}`}>
                    <FaMapMarkerAlt className="text-blue-500 text-sm" />
                  </div>
                  <div>
                    <p className={`text-sm sm:text-base font-semibold ${theme ? "text-gray-300" : "text-gray-700"}`}>
                      {educationData[activeIndex].institution}
                    </p>
                    <p className={`text-xs ${theme ? "text-gray-500" : "text-gray-500"}`}>
                      {educationData[activeIndex].location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded ${theme ? "bg-purple-500/10" : "bg-purple-500/10"}`}>
                    <FaCalendarAlt className="text-purple-500 text-sm" />
                  </div>
                  <div>
                    <p className={`text-sm sm:text-base font-semibold ${theme ? "text-gray-300" : "text-gray-700"}`}>
                      {educationData[activeIndex].period}
                    </p>
                    <p className={`text-xs ${theme ? "text-gray-500" : "text-gray-500"}`}>
                      {educationData[activeIndex].status}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Achievements */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FaAward className="text-yellow-500 text-lg" />
                <h4 className={`text-base sm:text-lg font-bold ${theme ? "text-white" : "text-gray-900"}`}>
                  Key Achievements
                </h4>
              </div>
              <div className="space-y-3">
                {educationData[activeIndex].achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1.5">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        theme ? "bg-blue-500/50 group-hover:bg-blue-500" : "bg-blue-500/50 group-hover:bg-blue-500"
                      }`} />
                    </div>
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      theme ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaGraduationCap className="w-full h-full text-blue-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Dots (Mobile) */}
        <div className="flex sm:hidden justify-center gap-2 mt-8">
          {educationData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-blue-500"
                  : theme
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;