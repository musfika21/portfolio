import { motion } from "framer-motion";
import useAuth from "../../Hooks/useAuth";
import DottedBox from "../../components/Shared/DottedBox";

const About = () => {
  const { theme } = useAuth();

  return (
    <section
      id="about"
      className={`w-full py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative overflow-hidden ${
        theme ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-7xl md:w-11/12 mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Section Title */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
              <h2
                className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold ${
                  theme ? "text-white" : "text-gray-900"
                }`}
              >
                About-me
              </h2>
              <div
                className={`flex-1 h-1 max-w-[150px] sm:max-w-[200px] md:max-w-[250px] bg-blue-500 mt-3`}
              />
            </div>

            {/* Greeting */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`text-base xs:text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 ${
                theme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Hello, i'm Musfika!
            </motion.h3>

            {/* Description Paragraphs */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={`text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed ${
                  theme ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I’m a self-taught Front-End and MERN Stack Developer who loves bringing ideas to life through clean, interactive web experiences. I focus on writing efficient code, creating responsive designs, and continuously improving my craft.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className={`text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed ${
                  theme ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Although I’m at the beginning of my professional journey, I’m always learning, building, and exploring new technologies to grow as a developer and deliver meaningful digital experiences.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px]">
              {/* Decorative dots for image - positioned outside */}
              <div className="absolute -top-8 -right-8 xs:-top-10 xs:-right-10 sm:-top-12 sm:-right-12 z-0">
                <DottedBox rows={5} cols={5} />
              </div>
              <div className="absolute -bottom-8 -left-8 xs:-bottom-10 xs:-left-10 sm:-bottom-12 sm:-left-12 z-0">
                <DottedBox rows={5} cols={5} />
              </div>

              {/* Image Container */}
              <div className="relative z-10">
                  {/* Image */}
                  <img
                    src="profile.png"
                    alt="Musfika"
                    className={`w-full h-full object-cover`}
                  />
                

                {/* Bottom border decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;