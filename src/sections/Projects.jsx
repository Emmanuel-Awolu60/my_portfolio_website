import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  const limitedProjects = projects.slice(0, 4); // Show only the first 4

  return (
    <section id="projects" className="py-16 px-4 md:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Some cool things I've built recently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {limitedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
        >
          View More Projects →
        </Link>
      </div>
    </section>
  );
};

export default Projects;
