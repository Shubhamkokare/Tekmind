import Hero from "../component/Hero";
import About from "../component/About";
import Services from "../component/Services";
import Stats from "../component/Stats";
import Team from "../component/Team";
import Contact from "../component/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Team />
      <Contact />
    </>
  );
}

export default Home;