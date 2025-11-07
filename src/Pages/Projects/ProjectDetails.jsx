import { ArrowLeft, ExternalLink, Github, X } from "lucide-react";
import { Link } from "react-router";

const ProjectDetails = ({ project, onClose }) => {

  return (
    <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
      <div className="min-h-screen p-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-4">
            <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{project.details.description}</p>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <ExternalLink size={20} />
                View Live Project
              </a>
              <Link
                href={project.frontend_githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Github size={20} />
                View Source Code
              </Link>
              <Link
                href={project.backend_githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Github size={20} />
                View Source Code
              </Link>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.details.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-gray-900 p-4 rounded-lg">
                <span className="text-blue-500 mt-1">✓</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Screenshots Gallery */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.details.screenshots.map((screenshot, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={screenshot.url}
                    alt={screenshot.caption}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <p className="text-gray-300 font-medium">{screenshot.caption}</p>
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