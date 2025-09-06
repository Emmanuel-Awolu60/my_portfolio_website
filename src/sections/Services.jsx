import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaChartLine,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import { MdOutlineBrush, MdApi, MdSpeed, MdSecurity } from "react-icons/md";
import { BiGlobe, BiMobile } from "react-icons/bi";
import { HiCode, HiColorSwatch } from "react-icons/hi";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications using React, Node.js, TypeScript, and modern databases. From concept to deployment with scalable architecture.",
    icon: <FaLaptopCode />,
    features: [
      "React.js & Next.js",
      "Node.js APIs",
      "Database Design",
      "Cloud Deployment",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor:
      "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
  },
  {
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive interfaces with smooth animations. Creating engaging user experiences that convert visitors into customers.",
    icon: <MdOutlineBrush />,
    features: [
      "React & TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor:
      "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
  },
  {
    title: "Backend API Development",
    description:
      "Robust, scalable APIs with authentication, data validation, and comprehensive documentation. Built for performance and security.",
    icon: <MdApi />,
    features: [
      "RESTful APIs",
      "JWT Authentication",
      "Database Integration",
      "API Documentation",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor:
      "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
  },
  {
    title: "Performance Optimization",
    description:
      "Speed up your applications with advanced optimization techniques. Improving Core Web Vitals and user experience.",
    icon: <MdSpeed />,
    features: [
      "Code Splitting",
      "Image Optimization",
      "Caching Strategies",
      "Bundle Analysis",
    ],
    color: "from-orange-500 to-red-500",
    bgColor:
      "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
  },
  {
    title: "SEO & Web Analytics",
    description:
      "Drive organic traffic with technical SEO, performance optimization, and comprehensive analytics setup for data-driven decisions.",
    icon: <FaChartLine />,
    features: [
      "Technical SEO",
      "Analytics Setup",
      "Performance Audits",
      "Keyword Strategy",
    ],
    color: "from-indigo-500 to-purple-500",
    bgColor:
      "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
  },
  {
    title: "Mobile-First Design",
    description:
      "Responsive applications that work flawlessly across all devices. Progressive Web Apps with native-like experiences.",
    icon: <BiMobile />,
    features: [
      "PWA Development",
      "Mobile Optimization",
      "Touch Interfaces",
      "Offline Support",
    ],
    color: "from-teal-500 to-blue-500",
    bgColor:
      "from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            What I Offer
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Services &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development solutions tailored to bring your
            vision to life with cutting-edge technology and best practices
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
              />

              <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's discuss how I can help bring your ideas to life with modern
              web technologies
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group"
            >
              <span>Get In Touch</span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
