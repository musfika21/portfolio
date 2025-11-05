import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";
import { Link, NavLink } from "react-router";

const Navbar = () => {

  const { theme, toggleTheme } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "/projects" },
    { name: "about-me", href: "/about-me" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/musfika21", label: "Github", title: "@musfika21" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/musfika-iqfat21", label: "LinkedIn", title: "@Musfika Iqfat" },
    { icon: FiFacebook, href: "https://www.facebook.com/musfikaiqfatmomo21", label: "Facebook", title: "@Musfika Iqfat Momo" },
    { icon: FaXTwitter, href: "https://x.com/Musfika_Iqfat21", label: "Twitter", title: "@Musfika_Iqfat21" },
  ];

  return (
    <>
      {/* Vertical Social Links - Left Side */}
      <div className="fixed left-3 -top-10 md:-top-20 bottom-0 w-8 z-400 hidden md:flex flex-col items-center justify-start pt-4">
        {/* Vertical Line */}
        <div className="w-px h-45 mb-4 bg-gray-400" />

        {/* Social Icons */}
        <div className="flex flex-col gap-4">
          {socialLinks?.map((social, index) => (
            <Link
              key={index}
              to={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-gray-500 transition-all duration-300 hover:scale-110 hover:text-blue-500"
              aria-label={social?.label}
            >
              <social.icon size={20} />
              {/* Custom Tooltip */}
              <span className="absolute left-full ml-2 px-2 py-1 bg-blue-500 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
                {social?.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Top Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50`}>
        <div className={`w-full mx-auto px-4 md:px-8 ${theme ? "bg-black" : "bg-white"} `}>
          <div className="w-full mx-auto xl:max-w-7xl xl:px-5">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link
                to="/"
                className="font-bold">
                <span className="text-blue-500 md:ml-10 lg:ml-10 xl:ml-5"> MUSFIKA IQFAT</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-8">
                  {navLinks.map((link) => (
                    <li key={link.name} className="text-lg flex items-center space-x-2">
                      <NavLink to={link.href} className="relative inline-block group px-1 py-0.5 transition-colors duration-300">
                        {({ isActive }) => (
                          <>
                            <span className={`${isActive ? 'text-blue-500' : (theme ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-black')}`}>
                              {link.name}
                            </span>
                          </>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                {/* Theme Toggle Button */}
                <button
                  className={`p-2 text-gray-400 transition-all duration-300 rounded-lg ${theme ? "hover:bg-gray-700 hover:text-white" : "hover:bg-gray-300 hover:text-black"}  cursor-pointer`}
                  onClick={toggleTheme}
                >
                  {theme ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {/* Mobile: Theme Toggle + Menu Button */}
              <div className="md:hidden flex items-center gap-2">
                {/* Theme Toggle Button - mobile e o visible */}
                <button
                  className="p-2 text-gray-400 transition-all duration-300 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer"
                  onClick={toggleTheme}
                >
                  {theme ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-gray-400 transition-all duration-300 hover:text-white"
                >
                  {isOpen ? <X className={`${theme ? "bg-black" : "bg-white"}`} size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden border-gray-700 ${theme ? 'bg-black' : 'bg-white'}`}>
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 transition-all duration-300 font-medium"
                >
                  {({ isActive }) => (
                    <span className={`${isActive ? 'text-blue-500' : (theme ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-black')}`}>
                      {link.name}
                    </span>
                  )}
                </NavLink>
              ))}

              {/* Mobile Social Links */}
              <div className="flex gap-6 pt-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-all duration-300 hover:text-[#C778DD]"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>

            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;