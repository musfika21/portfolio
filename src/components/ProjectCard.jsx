import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-primary/60 transition duration-300 flex flex-col">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-primary mb-2">
          {project.name}
        </h3>
        <p className="text-gray-300 flex-grow line-clamp-3">
          {project.description}
        </p>
        <Link
          to={`/project/${project.id}`}
          className="mt-4 inline-block bg-primary text-black px-4 py-2 rounded font-semibold text-center hover:bg-primary/80 transition"
        >
          View More / Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
