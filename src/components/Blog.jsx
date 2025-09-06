import React, { useState } from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title:
      "Mastering Backends with Python: the things I wish someone told me sooner",
    excerpt:
      "I didn't plan to learn backend development. I just wanted my little web app to 'remember stuff.' Next thing I knew, I was neck-deep in APIs, HTTP status codes, and wondering why my database kept vanishing.",
    cover:
      "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&h=600&fit=crop",
    url: "https://emmanuelao.hashnode.dev/mastering-backends-with-python-the-things-i-wish-someone-told-me-sooner",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Backend",
    tags: ["Python", "APIs", "Backend"],
  },
  {
    id: 2,
    title:
      "10 Developer Tools I Couldn't Work Without (That Hardly Anyone Talks About)",
    excerpt:
      "When you say 'developer tools,' people picture the same greatest-hits lineup VS Code, GitHub, maybe Postman if you're feeling like living dangerously. But honestly? Once you start coding every day, you realize you need more.",
    cover:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    url: "https://emmanuelao.hashnode.dev/10-developer-tools-i-couldnt-work-without-that-hardly-anyone-talks-about",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    category: "Tools",
    tags: ["Tools", "Productivity", "Development"],
  },
  {
    id: 3,
    title: "Thirty Days of Tech Writing: The Honest Version",
    excerpt:
      "I didn't, like, map this whole thing out on a whiteboard or anything. It was more… me, one evening, staring into a half-cold cup of coffee thinking, eh, why not write and post something every single day for a month?",
    cover:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
    url: "https://emmanuelao.hashnode.dev/thirty-days-of-tech-writing-the-honest-version",
    date: "Oct 20, 2024",
    readTime: "5 min read",
    category: "Writing",
    tags: ["Writing", "Challenge", "Experience"],
  },
  {
    id: 4,
    title:
      "How I Built My First API (and Why My GitHub History Looks Like a Diary)",
    excerpt:
      "At some point, every beginner coder hits the same wall: 'Okay… I can build a calculator. Now what?' For me, the next step was an API. Why? Because APIs are like the secret tunnels of the internet.",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    url: "https://emmanuelao.hashnode.dev/how-i-built-my-first-api-and-why-my-github-history-looks-like-a-diary",
    date: "Sep 12, 2024",
    readTime: "7 min read",
    category: "Tutorial",
    tags: ["API", "Tutorial", "Beginner"],
  },
  {
    id: 5,
    title: "The Art of Code Reviews: Beyond Just Finding Bugs",
    excerpt:
      "Code reviews aren't just about catching bugs—they're about building better teams, sharing knowledge, and creating maintainable codebases that don't make future developers cry.",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    url: "#",
    date: "Aug 25, 2024",
    readTime: "10 min read",
    category: "Best Practices",
    tags: ["Code Review", "Team", "Best Practices"],
  },
  {
    id: 6,
    title: "From CSS Chaos to Tailwind Zen: My Styling Journey",
    excerpt:
      "Remember when we used to write 500 lines of CSS just to center a div? Those were dark times. Here's how Tailwind CSS changed everything and why I'll never go back to traditional CSS.",
    cover:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    url: "#",
    date: "Jul 18, 2024",
    readTime: "6 min read",
    category: "CSS",
    tags: ["CSS", "Tailwind", "Styling"],
  },
];

const categories = [
  "All",
  "Backend",
  "Tools",
  "Writing",
  "Tutorial",
  "Best Practices",
  "CSS",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredPosts = blogPosts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 4);

  return (
    <section
      id="blog"
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-40 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium border border-green-200 dark:border-green-800 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            Blog & Writings
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Learn from My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I share lessons, projects, and insights from my journey as a
            developer. Real experiences, practical tips, and honest reflections.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {displayedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full text-xs font-medium backdrop-blur-sm">
                  {post.category}
                </div>

                {/* Read More Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold shadow-lg backdrop-blur-sm"
                  >
                    Read Article
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6m0 6v6" />
                      <path d="m21 12-6 0-6 0-6 0" />
                    </svg>
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <motion.a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Show More & Visit Blog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {filteredPosts.length > 4 && (
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {showAll
                ? "Show Less"
                : `Show More Posts (${filteredPosts.length - 4} more)`}
              <svg
                className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
          )}

          <motion.a
            href="https://emmanuelao.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group"
          >
            <span>Visit My Blog</span>
            <motion.svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
