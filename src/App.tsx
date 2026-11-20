import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Identity from "@/components/Identity/Identity";
import Skills from "@/components/Skills/Skills";
import Certifications from "@/components/Certifications/Certifications";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Awards from "@/components/Awards/Awards";
import Learning from "@/components/Learning/Learning";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function App() {
  return (
    <div className="relative bg-void bg-noise">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Identity />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Awards />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
