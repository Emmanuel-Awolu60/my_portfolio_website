import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./components/Projects";
import Contact from "./sections/Contact";
import Skills from "./components/Skill";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
