import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import useAuth from '../../Hooks/useAuth';

export default function PortfolioShowcase() {

  const { theme } = useAuth();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch projects from JSON file
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Replace with your actual JSON file path
        const response = await fetch('/projects.json');

        if (!response.ok) {
          throw new Error('Failed to load projects');
        }

        const data = await response.json();
        setProjects(data.projects);
        setError(null);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError(err.message);

        // Fallback to sample data for demo
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 lg:pb-10 ${theme ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl md:w-11/12 mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
          <span className="text-blue-500 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold">/</span>
          <h2
            className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold ${theme ? "text-white" : "text-gray-900"}`}
          >
            PROJECTS
          </h2>
          {error && (
            <p className="text-yellow-500 mt-2 text-sm">
              Note: Using demo data (couldn't load projects.json)
            </p>
          )}
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400">
            <p>No projects found. Add your projects to projects.json</p>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}