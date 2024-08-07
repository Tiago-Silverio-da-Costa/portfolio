import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/home/footer";
import Solutions from "@/components/home/solutions";
import Step from "@/components/home/step";
import Contact from "@/components/home/contact";
import Projects from "@/components/home/projects";
import About from "@/components/home/about";
import Necessity from "@/components/home/createNecessity";
import { Country } from "react-phone-number-input";
import { headers } from "next/headers";

const headersList = headers();
const countryCode: Country =
(headersList.get("cf-ipcountry") as Country) ?? "BR";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About countryCode={countryCode} />
      <Solutions />
      <Projects />
      <Step />
      <Necessity countryCode={countryCode} />
      <Contact countryCode={countryCode} />
      <Footer />
    </>

  );
}
