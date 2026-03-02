import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";
import Social from "../components/Social.jsx";
import Section from "../components/Section.jsx";

export default function Home() {
  return (
    <>
      <Hero />



      <Section id="skills">
        <Skills />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      <Social />
    </>
  );
}