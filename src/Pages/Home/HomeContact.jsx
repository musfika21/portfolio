import { FaDiscord, FaEnvelope } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const HomeContact = () => {
  const { theme } = useAuth();

  return (
    <section 
      id="contacts"
      className={`w-full py-16 md:py-24 ${theme ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* Left Side - Title and Description */}
          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-blue-500 text-2xl md:text-3xl font-bold">#</span>
              <h2 className={`text-2xl md:text-3xl font-bold ${theme ? "text-white" : "text-gray-900"}`}>
                Contacts
              </h2>
              <div className={`flex-1 h-px ${theme ? "bg-blue-500" : "bg-blue-500"} max-w-xs`}></div>
            </div>
            
            <p className={`text-base md:text-lg leading-relaxed ${theme ? "text-gray-400" : "text-gray-600"}`}>
              I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
            </p>
          </div>

          {/* Right Side - Contact Box */}
          <div className={`border-2 p-6 min-w-[280px] ${
            theme 
              ? "border-gray-700 bg-gray-800/50" 
              : "border-gray-300 bg-white"
          }`}>
            <h3 className={`text-lg font-semibold mb-4 ${theme ? "text-white" : "text-gray-900"}`}>
              Message me here
            </h3>
            
            <div className="space-y-3">
              {/* Discord */}
              <a 
                href="#"
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  theme 
                    ? "text-gray-400 hover:text-blue-500" 
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <FaDiscord className="text-xl flex-shrink-0" />
                <span className="text-sm">musfika_iqfat_21</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:elias@elias.me"
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  theme 
                    ? "text-gray-400 hover:text-blue-500" 
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <FaEnvelope className="text-xl flex-shrink-0" />
                <span className="text-sm">musfikaiqfatmomo21@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;