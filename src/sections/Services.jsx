import { motion } from "framer-motion";
import { TbWriting } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa6";
import { BiGlobe } from "react-icons/bi";
import { MdOutlineBrush } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building responsive, dynamic, and performant web apps using React, Node.js, and PostgreSQL.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Frontend Development",
    description:
      "Crafting pixel-perfect UI with React and Tailwind, including animations and responsive design.",
    icon: <MdOutlineBrush />,
  },
  {
    title: "Backend API Development",
    description:
      "Creating scalable RESTful APIs using Express.js, JWT auth, and PostgreSQL with Prisma or Sequelize.",
    icon: <BiGlobe />,
  },
  {
    title: "SEO",
    description:
      "Driving your business to Google's first pages is what we do best. Our rich SEO technique will shoot your websites to the top in few weeks!",
    icon: <FaChartLine />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 px-6 w-full bg-gradient-to-br from-[#f9fafb] to-[#dbeafe] dark:from-[#0f172a] dark:to-[#1e293b]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          What I Offer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here’s a glimpse of the services I provide based on my expertise and
          experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 dark:border-gray-800 transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon with rotation and glow on hover */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mb-4 bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.7)] transition-all duration-300"
            >
              {service.icon}
            </motion.div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
