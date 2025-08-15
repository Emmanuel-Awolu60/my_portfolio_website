import React from "react";
import { FadeInStagger } from "../utils/motion/FadeInStagger";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title:
      "Mastering Backends with Python: the things I wish someone told me sooner",
    excerpt:
      "I didn’t plan to learn backend development. I just wanted my little web app to “remember stuff.” Next thing I knew, I was neck-deep in APIs, HTTP status codes, and wondering why my database kept vanishing. If the word backend sounds mysterious — like...",
    cover: "/img/python.png",
    url: "https://emmanuelao.hashnode.dev/mastering-backends-with-python-the-things-i-wish-someone-told-me-sooner",
  },
  {
    title:
      "10 Developer Tools I Couldn’t Work Without (That Hardly Anyone Talks About)",
    excerpt:
      "When you say “developer tools,” people picture the same greatest-hits lineup — VS Code, GitHub, maybe Postman if you’re feeling like living dangerously. And fair enough, they’re essential. But honestly? Once you start coding every day, you realize yo...",
    cover: "/img/tools.jpg",
    url: "https://emmanuelao.hashnode.dev/10-developer-tools-i-couldnt-work-without-that-hardly-anyone-talks-about",
  },
  {
    title: "My 30-Day Tech Content Challenge: Lessons from Writing Daily",
    excerpt:
      "Here’s how writing every day changed my thinking, my reach, and how I now plan content...",
    cover: "/img/writing.jpg",
    url: "https://emmanuelao.hashnode.dev/30-day-content-challenge",
  },
  {
    title: "How to Build an API Project from Scratch (with GitHub Commits)",
    excerpt:
      "I broke down every commit while building my Link Tracking API, so you can follow and learn easily...",
    cover: "/img/api.jpg",
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
