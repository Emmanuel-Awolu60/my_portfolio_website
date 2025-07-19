import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          Home Section
        </section>
        <section
          id="projects"
          className="h-screen flex items-center justify-center"
        >
          Projects Section
        </section>
        <section
          id="contact"
          className="h-screen flex items-center justify-center"
        >
          Contact Section
        </section>
      </main>
    </div>
  );
}

export default App;
