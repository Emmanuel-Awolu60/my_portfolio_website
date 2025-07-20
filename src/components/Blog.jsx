import React from "react";
import { FadeInStagger } from "../utils/motion/FadeInStagger";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Mastering Backend with Python: What I Wish I Knew Earlier",
    excerpt:
      "I walk you through what I learned building APIs from scratch with Python and real lessons that changed my workflow...",
    cover: "./public/img/python.jpg",
    url: "https://emmanuelao.hashnode.dev/mastering-backend-with-python",
  },
  {
    title: "10 Underrated Tools I Use Daily as a Developer",
    excerpt:
      "Beyond VS Code and GitHub, these are tools I can’t live without when building or writing code...",
    cover: "./public/img/tools.jpg",
    url: "https://emmanuelao.hashnode.dev/underrated-dev-tools",
  },
  {
    title: "My 30-Day Tech Content Challenge: Lessons from Writing Daily",
    excerpt:
      "Here’s how writing every day changed my thinking, my reach, and how I now plan content...",
    cover: "./public/img/writing.jpg",
    url: "https://emmanuelao.hashnode.dev/30-day-content-challenge",
  },
  {
    title: "How to Build an API Project from Scratch (with GitHub Commits)",
    excerpt:
      "I broke down every commit while building my Link Tracking API, so you can follow and learn easily...",
    cover: "./public/img/api.jpg",
    url: "https://emmanuelao.hashnode.dev/build-api-from-scratch",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <FadeInStagger>
          <p className="text-blue-600 font-medium mb-2">Blog & Writings</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learn from My{" "}
            <span className="bg-blue-100 dark:bg-blue-900 px-2">
              experiences
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            I share lessons, projects, and systems I build as a developer.
          </p>
        </FadeInStagger>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
            >
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                  Read More →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://emmanuelao.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
