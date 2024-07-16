import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Solutions from "@/components/solutions";
import Step from "@/components/step";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Solutions />
      <About />
      <Projects />
      <Step />
      <Contact />
      <Footer />
    </>

  );
}
