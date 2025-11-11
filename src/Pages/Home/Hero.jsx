import { Link } from "react-router";
import heroImage from "../../assets/hero.png";
import DottedBox from "../../components/Shared/DottedBox";
import useAuth from "../../Hooks/useAuth";

const Hero = () => {

  const { theme } = useAuth()
  return (
    <div className={`w-full mx-auto ${theme ? "bg-black text-white" : "bg-white text-black"} pt-28 md:pt-38 md:px-16 xl:px-40 relative overflow-hidden min-h-screen flex items-center`}>
      {/* Decorative dots using DottedBox component */}
      <DottedBox position="top-right" className="pt-15" rows={4} cols={5} />
      <DottedBox position="bottom-right" rows={4} cols={5} />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Musfika is a <span className="text-blue-500">MERN Stack Developer</span> and{' '}
            <span className="text-blue-500">Front End Developer</span>
          </h1>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 px-2">
            She crafts responsive websites where technologies meet creativity
          </p>

          <Link to='/contact'>
            <button className={`border-2 border-blue-500 text-blue-500 hover:text-white ${theme ? "hover:bg-blue-500 " : "bg-blue-100  hover:bg-blue-500"} px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition-colors duration-300 cursor-pointer`}>
              Contact me!!
            </button>
          </Link>
        </div>

        {/* Right Content - Image Section */}
        <div className="flex-1 relative flex justify-center items-center w-full">

          {/* Image Container */}
          <div className="relative z-10 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[28rem]">
            <img
              src={heroImage}
              alt="Elias - Web Designer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;