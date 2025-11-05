import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import HomeContact from "./HomeContact";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
         <Hero />
        {/* <About />
        <Skills />
        <Education />
        <Projects /> */}
        <HomeContact/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
