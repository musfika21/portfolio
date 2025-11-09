import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const ProjectCard = ({ project, onClick }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gray-900 rounded overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"

      onClick={onClick}
    >
      {/* Image Container with Scroll Effect */}
      <div className="relative h-75 overflow-hidden">
        <img
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={project.cardImage}
          alt={project.title}
          className="w-full min-h-full object-cover object-top transition-all duration-[8000ms] ease-linear"
          style={{
            transform: isHovered ? 'translateY(calc(-100% + 320px))' : 'translateY(0)',
            // 320px = h-80 এর height
          }}
        />

        {/* Hover Indicator - Only on image */}
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
          View Details
        </div>
      </div>

      {/* Content Section - Separate from Image */}
      <div className="bg-gray-900/50 backdrop-blur-sm p-3 xs:p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
        {/* Title with Gradient */}
        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 xs:mb-2.5 sm:mb-3 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-400 mb-3 xs:mb-4 sm:mb-5 line-clamp-2 leading-relaxed">
          {project.shortDesc}
        </p>

        {/* Tech Stack with Better Styling */}
        <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 xs:mb-4 sm:mb-5">
          {project.tech.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-[9px] xs:text-[10px] sm:text-xs bg-gray-800/80 backdrop-blur-sm text-gray-300 px-1.5 py-0.5 xs:px-2 xs:py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 border border-gray-700 transition-all duration-300 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-[9px] xs:text-[10px] sm:text-xs bg-gray-800/80 text-gray-400 px-1.5 py-0.5 xs:px-2 xs:py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded border border-gray-700">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>

        {/* Links with Icons - Fully Responsive Grid */}
        <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3 pt-2 xs:pt-3 sm:pt-4 border-t border-gray-800/50 mt-auto">
          {/* Live Demo - Always visible */}
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center justify-center gap-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-[9px] xs:text-[10px] sm:text-xs rounded-md sm:rounded transition-all duration-300 font-semibold border border-blue-500/30 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 ${
              !project.frontend_githubLink && !project.backend_githubLink ? 'col-span-2 sm:col-span-3' : ''
            }`}
          >
            <ExternalLink className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="hidden xs:inline">Live Demo</span>
            <span className="xs:hidden">Live</span>
          </Link>

          {/* Frontend GitHub */}
          {project.frontend_githubLink && (
            <Link
              href={project.frontend_githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`flex items-center justify-center gap-1 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-[9px] xs:text-[10px] sm:text-xs rounded-md sm:rounded transition-all duration-300 font-semibold border border-gray-700 hover:border-gray-600 ${
                !project.backend_githubLink ? 'col-span-1' : ''
              }`}
            >
              <Github className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Frontend</span>
              <span className="sm:hidden">Front</span>
            </Link>
          )}

          {/* Backend GitHub */}
          {project.backend_githubLink && (
            <Link
              href={project.backend_githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-[9px] xs:text-[10px] sm:text-xs rounded-md sm:rounded transition-all duration-300 font-semibold border border-gray-700 hover:border-gray-600"
            >
              <Github className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Backend</span>
              <span className="sm:hidden">Back</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;