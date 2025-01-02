import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/home/footer";
import Solutions from "@/components/home/solutions";
import DevelopmentSteps from "@/components/home/developmentSteps";
import Contact from "@/components/home/contact";
import Projects from "@/components/home/projects";
import About from "@/components/home/about";
import PromoteServices from "@/components/home/promoteServices";
import { Country } from "react-phone-number-input";
import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  const countryCode: Country =
  (headersList.get("cf-ipcountry") as Country) ?? "BR";
  
  return (
    <>
      <Header />
      <Hero />
      <About countryCode={countryCode} />
      <Solutions />
      <Projects />
      <DevelopmentSteps />
      <PromoteServices countryCode={countryCode} />
      <Contact />
      <Footer />
    </>

  );
}
