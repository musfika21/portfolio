import React from "react";
import { useParams, Link, useNavigate } from "react-router";
import { projects } from "../data";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project by id (id is string from params, convert to number)
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-300 px-6">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Project not found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-black px-4 py-2 rounded hover:bg-primary/80 transition"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen bg-black text-gray-300 px-6 md:px-20 py-16 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-4xl font-bold text-primary mb-6">{project.name}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover rounded-lg mb-8 shadow-lg"
      />

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          Technology Stack
        </h2>
        <ul className="list-disc list-inside flex flex-wrap gap-3 text-gray-300">
          {project.techStack.map((tech, idx) => (
            <li
              key={idx}
              className="bg-gray-800 px-3 py-1 rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          Description
        </h2>
        <p className="text-gray-300">{project.description}</p>
      </div>

      <div className="mb-6 space-x-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-black px-5 py-3 rounded font-semibold hover:bg-primary/80 transition"
        >
          Live Project
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-black px-5 py-3 rounded font-semibold hover:bg-primary/80 transition"
        >
          GitHub Repo
        </a>
      </div>

      <div className="mt-12">
        <Link
          to="/"
          className="inline-block bg-gray-800 text-primary px-5 py-3 rounded hover:bg-gray-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
