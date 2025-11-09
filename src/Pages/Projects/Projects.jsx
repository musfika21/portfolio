import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Search, X } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import useAuth from '../../Hooks/useAuth';
export default function PortfolioShowcase() {
  const { theme } = useAuth();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTech, setSelectedTech] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [allTechStacks, setAllTechStacks] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('/projects.json');

        if (!response.ok) {
          throw new Error('Failed to load projects');
        }

        const data = await response.json();
        setProjects(data.projects);
        setFilteredProjects(data.projects);

        // Extract all unique tech stacks
        const techSet = new Set();
        data.projects.forEach(project => {
          project.tech.forEach(tech => techSet.add(tech));
        });
        setAllTechStacks(['all', ...Array.from(techSet).sort()]);

        setError(null);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError(err.message);
        setProjects([]);
        setFilteredProjects([]);
        setAllTechStacks(['all']);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on selected tech and search query
  useEffect(() => {
    let filtered = projects;

    // Filter by tech stack
    if (selectedTech !== 'all') {
      filtered = filtered.filter(project =>
        project.tech.some(tech => tech.toLowerCase() === selectedTech.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [selectedTech, searchQuery, projects]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme ? 'bg-black' : 'bg-white'}`}>
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className={theme ? 'text-gray-400' : 'text-gray-600'}>Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 ${theme ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl md:w-11/12 mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
        {/* header + search bar */}
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          {/* Header */}
          <div className="mb-1 sm:mb-10 md:mb-12">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
              <span className="text-blue-500 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold">/</span>
              <h2 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold ${theme ? "text-white" : "text-gray-900"}`}>
                PROJECTS
              </h2>
            </div>
            <p className={`text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed ${theme ? "text-gray-400" : "text-gray-600"}`}>
              Explore my work and filter by technology
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-3">
            <div className="relative w-10/12 lg:w-lg">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${theme ? 'text-gray-500' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-10 py-2 border-2 rounded-lg transition-all duration-300 text-xs sm:text-base ${theme
                    ? 'bg-gray-900 border-gray-800 text-white placeholder-gray-500 focus:border-blue-500'
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                  } outline-none`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${theme ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tech Stack Filter */}
        <div className="mb-3 sm:mb-10">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {allTechStacks.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded cursor-pointer text-xs sm:text-sm font-medium transition-all duration-300 border-2 ${selectedTech === tech
                    ? 'bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : theme
                      ? 'border-gray-700 text-gray-400 hover:border-blue-500/50 hover:text-blue-400'
                      : 'border-gray-300 text-gray-600 hover:border-blue-500/50'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech === 'all' ? 'All Projects' : tech}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-3">
          <p className={`text-sm ${theme ? 'text-gray-400' : 'text-gray-600'}`}>
            Showing <span className="font-bold text-blue-500">{filteredProjects.length}</span> of {projects.length} projects
            {selectedTech !== 'all' && (
              <span className="ml-2">
                with <span className="font-bold text-blue-500">{selectedTech}</span>
              </span>
            )}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center py-16 ${theme ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <p className="text-lg mb-2">No projects found</p>
            <p className="text-sm">Try adjusting your filters or search query</p>
          </motion.div>
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