import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* NEXT SECTIONS WILL BE ADDED HERE */}
        <section id="about"></section>
        <section id="stack"></section>
        <section id="projects"></section>
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
