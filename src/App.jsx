import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Stack />

        <Projects />

        <section id="journey"></section>
        <section id="certifications"></section>
        <section id="activity"></section>
        <section id="resume"></section>
        <section id="contact"></section>
      </main>
    </>
  );
}

export default App;
