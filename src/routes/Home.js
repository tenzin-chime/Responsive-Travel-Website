import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import image1 from '../assets/3.jpg';

function Home() {
  return (
    <>
    <Navbar />
    <Hero 
      cName="hero"
      heroImg={image1}
      title="Welcome to the world of travel"
      text="Choose your favourite destination. We will take you there."
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
    />
    <Destination /> 
    </>
  );
}

export default Home;
