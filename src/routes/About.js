import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import image2 from '../assets/2.jpg';

function About() {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero-about"
      heroImg={image2}
      title="About"
      btnClass="hide"
      />
    </>
  );
}

export default About;
