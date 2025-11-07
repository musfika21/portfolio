import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const ProjectCard = ({ project, onClick }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"

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
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
          View Details
        </div>
      </div>

      {/* Content Section - Separate from Image */}
      <div className="bg-gray-900/50 backdrop-blur-sm p-6 flex-grow">
        {/* Title with Gradient */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-400 mb-5 line-clamp-2 leading-relaxed">
          {project.shortDesc}
        </p>

        {/* Tech Stack with Better Styling */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-800/80 backdrop-blur-sm text-gray-300 px-3 py-1.5 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 border border-gray-700 transition-all duration-300 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-xs bg-gray-800/80 text-gray-400 px-3 py-1.5 rounded-lg border border-gray-700">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>

        {/* Links with Icons and Better Spacing */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-800/50">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-semibold border border-blue-500/30 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>

          {project.frontend_githubLink && (
            <a
              href={project.frontend_githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-semibold border border-gray-700 hover:border-gray-600"
            >
              <Github size={16} />
              Frontend
            </a>
          )}

          {project.backend_githubLink && (
            <a
              href={project.backend_githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-semibold border border-gray-700 hover:border-gray-600"
            >
              <Github size={16} />
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;