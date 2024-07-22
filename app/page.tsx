import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Solutions from "@/components/solutions";
import Step from "@/components/step";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import About from "@/components/about";
import Necessity from "@/components/createNecessity";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Projects />
      <Step />
      <Necessity />
      <Contact />
      <Footer />
    </>

  );
}
