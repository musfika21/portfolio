import { ArrowLeft, ExternalLink, Github, Loader2 } from "lucide-react";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useAuth();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await fetch('/projects.json');
        
        if (!response.ok) {
          throw new Error('Failed to load project');
        }
        
        const data = await response.json();
        const foundProject = data.projects.find(p => p.id === parseInt(id));
        
        if (!foundProject) {
          throw new Error('Project not found');
        }
        
        setProject(foundProject);
        setError(null);
      } catch (err) {
        console.error('Error loading project:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme ? 'bg-black' : 'bg-white'}`}>
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className={theme ? 'text-gray-400' : 'text-gray-600'}>Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme ? 'bg-black' : 'bg-white'}`}>
        <div className="text-center">
          <h2 className={`text-2xl font-bold mb-4 ${theme ? 'text-white' : 'text-gray-900'}`}>
            {error || 'Project Not Found'}
          </h2>
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 mx-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme ? 'bg-black' : 'bg-white'}`}>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        {/* Header */}
        <div className="max-w-7xl md:w-11/12 mx-auto mb-8 lg:mb-12">
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <button
              onClick={() => navigate('/projects')}
              className={`flex items-center gap-2 transition-all duration-300 hover:gap-3 group ${
                theme ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Back to Projects</span>
              <span className="sm:hidden">Back</span>
            </button>
          </div>

          <div className="mb-6 lg:mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold ${
                theme 
                  ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-blue-600 to-blue-800 bg-clip-text text-transparent'
              }`}>
                {project.title}
              </h1>
            </div>
            <p className={`text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed ${
              theme ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.details.description}
            </p>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-5 sm:px-6 py-3 rounded transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 font-medium"
              >
                <ExternalLink size={20} />
                View Live Project
              </a>
              <a
                href={project.frontend_githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800/80 backdrop-blur hover:bg-gray-700 text-white px-5 sm:px-6 py-3 rounded transition-all duration-300 border border-gray-700 hover:border-blue-600 hover:scale-105 font-medium"
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
                  className="flex items-center justify-center gap-2 bg-gray-800/80 backdrop-blur hover:bg-gray-700 text-white px-5 sm:px-6 py-3 rounded transition-all duration-300 border border-gray-700 hover:border-blue-600 hover:scale-105 font-medium"
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
        <div className="max-w-7xl md:w-11/12 mx-auto mb-10 lg:mb-16">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-4 lg:mb-6 flex items-center gap-3 ${
            theme ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded"></span>
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.tech.map((tech, idx) => (
              <span 
                key={idx} 
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  theme
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200 border-gray-700 hover:border-blue-600 hover:shadow-blue-500/20'
                    : 'bg-gradient-to-br from-white to-gray-50 text-gray-700 border-gray-300 hover:border-blue-500 hover:shadow-blue-500/20'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-7xl md:w-11/12 mx-auto mb-10 lg:mb-16">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-2 lg:mb-6 flex items-center gap-3 ${
            theme ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded"></span>
            Key Features
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {project.details.features.map((feature, idx) => (
              <li 
                key={idx} 
                className={`flex items-center gap-3 backdrop-blur p-2  rounded border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group ${
                  theme
                    ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-800 hover:border-blue-600/50 hover:shadow-blue-500/10'
                    : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 hover:border-blue-500/50 hover:shadow-blue-500/10'
                }`}
              >
                <span className="text-blue-500 mt-1 text-xl font-bold group-hover:scale-110 transition-transform">✓</span>
                <span className={`text-sm sm:text-base leading-relaxed ${
                  theme ? 'text-gray-300' : 'text-gray-700'
                }`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Screenshots Gallery */}
        <div className="max-w-7xl md:w-11/12 mx-auto pb-8 lg:pb-12">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 lg:mb-8 flex items-center gap-3 ${
            theme ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded"></span>
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {project.details.screenshots.map((screenshot, idx) => (
              <div 
                key={idx} 
                className={`rounded overflow-hidden group border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                  theme
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-600/50 hover:shadow-blue-500/20'
                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500/50 hover:shadow-blue-500/20'
                }`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={screenshot.url}
                    alt={screenshot.caption}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t opacity-60 group-hover:opacity-80 transition-all duration-500 ${
                    theme 
                      ? 'from-gray-900 via-gray-900/50 to-transparent'
                      : 'from-gray-100 via-gray-100/50 to-transparent'
                  }`} />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className={`font-medium text-sm sm:text-base group-hover:text-blue-500 transition-colors ${
                    theme ? 'text-gray-300' : 'text-gray-700'
                  }`}>
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