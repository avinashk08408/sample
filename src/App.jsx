import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";
import Certifications from "./components/Certifications/Certifications";
import Activity from "./components/Activity/Activity";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio */}
      <main>

        {/* 01 — Hero */}
        <Hero />

        {/* 02 — About Me */}
        <About />

        {/* 03 — Engineering Stack */}
        <Stack />

        {/* 04 — Selected Projects */}
        <Projects />

        {/* 05 — Education & Journey */}
        <Journey />

        {/* 06 — Certifications */}
        <Certifications />

        {/* 07 — Activity / Proof of Work */}
        <Activity />

        {/* 08 — Resume */}
        <Resume />

        {/* 09 — Contact & Collaboration */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
