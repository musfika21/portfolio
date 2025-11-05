import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";

const Footer = () => {
  const { theme } = useAuth();

  const socialLinks = [
    { icon: FiGithub, url: "https://github.com/musfika21", label: "GitHub" },
    { icon: FiLinkedin, url: "https://www.linkedin.com/in/musfika-iqfat21", label: "LinkedIn" },
    { icon: FaXTwitter, url: "https://x.com/Musfika_Iqfat21", label: "Twitter" },
    { icon: FiFacebook, url: "https://www.facebook.com/musfikaiqfatmomo21", label: "Facebook" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full py-8 ${theme ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section - Name & Description */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center`}>
                <img src="/logo.png" alt="" />
              </div>
              <div>
                <h3 className={`font-semibold ${theme ? "text-white" : "text-gray-900"}`}>
                  Musfika
                </h3>
                <p className="text-xs text-blue-500">musfikaiqfatmomo21@gmail.com</p>
              </div>
            </div>
            <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
              MERN Stack Developer and Front End Developer
            </p>
          </div>

          {/* Right Section - Media Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h4 className={`text-sm font-medium ${theme ? "text-gray-300" : "text-gray-700"}`}>
              Media
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${
                      theme 
                        ? "text-gray-400 hover:text-blue-500" 
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                    aria-label={social.label}
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-6 border-t text-center ${theme ? "border-gray-800" : "border-gray-200"}`}>
          <p className={`text-sm ${theme ? "text-gray-400" : "text-gray-600"}`}>
            © Copyright {currentYear}. Made by Musfika Iqfat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;