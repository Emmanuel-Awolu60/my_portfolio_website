import React from "react";
import FadeInSection from "../utils/FadeInSection";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        logo: "/logos/html5.png",
        use: "Structure and semantics",
      },
      {
        name: "CSS3",
        logo: "/logos/css.png",
        use: "Styling and responsive design",
      },
      {
        name: "JavaScript",
        logo: "/logos/js.png",
        use: "Dynamic functionality",
      },
      {
        name: "TypeScript",
        logo: "/logos/typescript.png",
        use: "Type-safe JavaScript",
      },
      {
        name: "React.js",
        logo: "/logos/react.png",
        use: "Building UI components",
      },
      {
        name: "Tailwind",
        logo: "/logos/tailwindcss.svg",
        use: "Utility-first styling",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        logo: "/logos/nodejs.svg",
        use: "Server-side JS runtime",
      },
      { name: "Express", logo: "/logos/express.svg", use: "Routing and APIs" },
      {
        name: "Django",
        logo: "/logos/django.svg",
        use: "Python web framework",
      },
      {
        name: "Python",
        logo: "/logos/python.png",
        use: "General purpose backend scripting",
      },
      { name: "MongoDB", logo: "/logos/mongodb.svg", use: "NoSQL database" },
      {
        name: "PostgreSQL",
        logo: "/logos/postgre.png",
        use: "Relational database",
      },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "Git", logo: "/logos/git.svg", use: "Version control" },
      { name: "Docker", logo: "/logos/docker.png", use: "Containerization" },
      { name: "Postman", logo: "/logos/postman.svg", use: "API testing" },
      { name: "GraphQL", logo: "/logos/graphql.svg", use: "Flexible APIs" },
      {
        name: "WebSockets",
        logo: "/logos/ws.png",
        use: "Real-time communication",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
            My <span className="text-blue-500">Skills & Tools</span>
          </h2>
        </FadeInSection>

        <div className="space-y-16">
          {skillGroups.map((group, i) => (
            <FadeInSection key={i}>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {group.skills.map((skill, j) => (
                    <div
                      key={j}
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-2xl shadow-md hover:scale-105 transition-transform"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 mx-auto mb-3 object-contain"
                      />
                      <h4 className="text-gray-900 dark:text-white text-lg font-medium">
                        {skill.name}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        {skill.use}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
