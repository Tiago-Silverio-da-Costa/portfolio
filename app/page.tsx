import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/home/footer";
import Solutions from "@/components/home/solutions";
import Step from "@/components/home/step";
import Contact from "@/components/home/contact";
import Projects from "@/components/home/projects";
import About from "@/components/home/about";
import Necessity from "@/components/home/createNecessity";

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
