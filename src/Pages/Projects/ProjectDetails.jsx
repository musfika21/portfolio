import { ArrowLeft, ExternalLink, Github, X, Sparkles } from "lucide-react";
import { Link } from "react-router";

const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8 lg:mb-12">
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:gap-3 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Back to Projects</span>
              <span className="sm:hidden">Back</span>
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-6 lg:mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-blue-500 animate-pulse" size={28} />
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                {project.title}
              </h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
              {project.details.description}
            </p>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-5 sm:px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 font-medium"
              >
                <ExternalLink size={20} />
                View Live Project
              </a>
              <a
                href={project.frontend_githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800/80 backdrop-blur hover:bg-gray-700 text-white px-5 sm:px-6 py-3 rounded-lg transition-all duration-300 border border-gray-700 hover:border-blue-600 hover:scale-105 font-medium"
              >
                <Github size={20} />
                <span className="hidden sm:inline">Frontend Code</span>
                <span className="sm:hidden">Frontend</span>
              </a>
              {project.backend_githubLink && (
                <a
                  href={project.backend_githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-800/80 backdrop-blur hover:bg-gray-700 text-white px-5 sm:px-6 py-3 rounded-lg transition-all duration-300 border border-gray-700 hover:border-blue-600 hover:scale-105 font-medium"
                >
                  <Github size={20} />
                  <span className="hidden sm:inline">Backend Code</span>
                  <span className="sm:hidden">Backend</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-7xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 lg:mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></span>
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.tech.map((tech, idx) => (
              <span 
                key={idx} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-medium border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 lg:mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></span>
            Key Features
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {project.details.features.map((feature, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-3 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur p-4 sm:p-5 lg:p-6 rounded-xl border border-gray-800 hover:border-blue-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <span className="text-blue-500 mt-1 text-xl font-bold group-hover:scale-110 transition-transform">✓</span>
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Screenshots Gallery */}
        <div className="max-w-7xl mx-auto pb-8 lg:pb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 lg:mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></span>
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {project.details.screenshots.map((screenshot, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden group border border-gray-800 hover:border-blue-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={screenshot.url}
                    alt={screenshot.caption}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">
                    {screenshot.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;