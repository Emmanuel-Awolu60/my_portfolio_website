import { useState } from "react";
import {
  Eye,
  Github,
  Calendar,
  Code,
  Sparkles,
  ArrowUpRight,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/emmanuelao",
    live: "https://demo-ecommerce.com",
    category: "Full-Stack",
    status: "Completed",
    year: "2024",
    featured: true,
    metrics: { users: "10k+", performance: "98%" },
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
    github: "https://github.com/emmanuelao",
    live: "https://demo-tasks.com",
    category: "Web App",
    status: "Completed",
    year: "2024",
    featured: false,
    metrics: { teams: "500+", uptime: "99.9%" },
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design for all devices.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
    github: "https://github.com/emmanuelao",
    live: "https://demo-weather.com",
    category: "Frontend",
    status: "Completed",
    year: "2023",
    featured: true,
    metrics: { accuracy: "95%", cities: "1000+" },
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "Modern blog platform with markdown support, SEO optimization, and content management system. Built for performance and scalability.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/emmanuelao",
    live: "https://demo-blog.com",
    category: "Full-Stack",
    status: "Completed",
    year: "2023",
    featured: false,
    metrics: { articles: "2k+", readers: "50k+" },
  },
  {
    id: 5,
    title: "AI Chat Interface",
    description:
      "Intelligent chat interface with natural language processing, context awareness, and seamless user experience design.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    technologies: ["React", "Python", "OpenAI API", "WebSocket"],
    github: "https://github.com/emmanuelao",
    live: "https://demo-chat.com",
    category: "AI/ML",
    status: "In Progress",
    year: "2024",
    featured: true,
    metrics: { messages: "100k+", satisfaction: "4.8/5" },
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing modern web development techniques with smooth animations and responsive design.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/emmanuelao",
    live: "https://emmanuelao.dev",
    category: "Frontend",
    status: "Completed",
    year: "2024",
    featured: false,
    metrics: { visitors: "25k+", bounce: "2.3%" },
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Web App", "AI/ML"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  // const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);
  // const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/20 dark:border-blue-800/20 rounded-full mb-8 group hover:scale-105 transition-all duration-300">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-semibold">
              Featured Work & Projects
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              My Creative
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
              Portfolio
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30" />
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Crafting digital experiences that push boundaries and solve
            real-world problems through innovative technology
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Projects Completed", value: "12+", icon: "🚀" },
            { label: "Technologies Used", value: "20+", icon: "⚡" },
            { label: "Years Experience", value: "3+", icon: "📈" },
            { label: "Happy Clients", value: "25+", icon: "❤️" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:animate-bounce">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mr-4">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                )}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 p-1 rounded-xl border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div
          className={`${viewMode === "grid" ? "grid grid-cols-1 lg:grid-cols-2 gap-8" : "space-y-6"} mb-16`}
        >
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              // onMouseEnter={() => setHoveredProject(project.id)}
              // onMouseLeave={() => setHoveredProject(null)}
              className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 ${
                viewMode === "list" ? "flex gap-6 p-6" : ""
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                  <Sparkles className="w-3 h-3" />
                  FEATURED
                </div>
              )}

              {/* Project Image */}
              <div
                className={`relative overflow-hidden ${viewMode === "list" ? "w-48 h-32 flex-shrink-0 rounded-2xl" : "h-64"}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                    project.status === "Completed"
                      ? "bg-emerald-500/90 text-white"
                      : "bg-amber-500/90 text-white"
                  }`}
                >
                  {project.status === "Completed"
                    ? "✓ Completed"
                    : "⏳ In Progress"}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/95 dark:bg-gray-900/95 rounded-full text-gray-900 dark:text-white shadow-lg backdrop-blur-sm hover:scale-110 transition-all duration-200 group/btn"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">View GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-blue-600 rounded-full text-white shadow-lg backdrop-blur-sm hover:scale-110 hover:bg-blue-700 transition-all duration-200"
                  >
                    <Eye className="w-5 h-5" />
                    <span className="sr-only">View Live</span>
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className={`${viewMode === "list" ? "flex-1" : "p-8"}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="flex gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10">
                {showAll
                  ? "Show Less Projects"
                  : `Explore All ${filteredProjects.length} Projects`}
              </span>
              <div
                className={`relative z-10 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              >
                <ArrowUpRight className="w-5 h-5" />
              </div>

              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-size-200 {
          background-size: 200% 100%;
        }

        .bg-pos-0 {
          background-position: 0% 50%;
        }

        .bg-pos-100 {
          background-position: 100% 50%;
        }
      `}</style>
    </section>
  );
};

export default Projects;
