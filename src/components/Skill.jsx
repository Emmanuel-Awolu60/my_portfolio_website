import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import FadeInSection from "../utils/FadeInSection"; // 👈 Make sure path is correct
// import FadeInSection from "./FadeInSection";

const skills = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Express", logo: "/logos/express.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-white mb-10">
            My <span className="text-blue-500">Skills & Tools</span>
          </h2>

          <div className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-3xl p-6 shadow-lg">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              freeMode={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              modules={[Autoplay, FreeMode]}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {skills.map((tool, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-16 w-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                    />
                    <p className="mt-2 text-gray-200 text-sm">{tool.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Skills;
