import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import image3 from '../assets/3.jpg';

function Service() {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero-about"
      heroImg={image3}
      
      />
    </>
  );
}

export default Service;
