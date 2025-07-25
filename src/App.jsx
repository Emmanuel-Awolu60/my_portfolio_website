import { useState, useEffect } from "react";

import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Services from "./sections/Services";
// import ProjectCard from "./components/ProjectCard";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./components/Skill";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showContent ? (
        <Preloader />
      ) : (
        <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
          <Navbar />
          <main className="pt-20">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Blog />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
