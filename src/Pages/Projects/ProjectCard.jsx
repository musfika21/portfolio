import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const ProjectCard = ({ project, onClick }) => {
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container with Scroll Effect */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={project.cardImage}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-all duration-[3000ms] ease-linear"
          style={{
            transform: isHovered ? 'translateY(-60%)' : 'translateY(0)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80" />
        
        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          View Details
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="mb-2">
          <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.shortDesc}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors text-sm"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;