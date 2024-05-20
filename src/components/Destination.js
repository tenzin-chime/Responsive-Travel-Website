import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Rome1 from "../assets/rome.jpeg";
import Rome2 from "../assets/rome3.jpg";

const Destination = () => {
  return (
    <div className="destination">
    <h1>Popular destination for You</h1>
    <p>Tours give you the opportunity to explore a lot of new places.</p>

    <DestinationData
    className="first-des"
    heading="Palawan Island"
    text="Palawan is a slice of heaven, a sliver of an island that teems with exotic wildlife, quaint fishing villages, and 
    UNESCO World Heritage Sites. Wave hello to 
    endangered animals at the Calauit Game Preserve
     and Wildlife Sanctuary or explore the Japanese
      shipwrecks of Coron Island, regarded as one of 
      the best dive sites in the world. A guided boat 
      tour of the Puerto Princesa Underground River 
      will take your breath away."
    image1={Mountain1}
    image2={Mountain2}
     />
     <DestinationData
     className="first-des-reverse"
    heading="Rome"
    text="Rome, the city of seven hills, enjoyed a mythic 
    beginning. Romulus and Remus – twin brothers
     who were nursed by a she-wolf and fathered by a 
     war god – reportedly founded the Eternal City. 
     And although historians are a little skeptical 
     about this epic entry into the world, most travelers
      are absolutely certain that there is something magical about Rome. Whether it's the mystery of nearby Vatican City or the ghosts of the Colosseum, an afternoon caffè on
     Piazza Navona or a piled-high 
     plate of pasta at a trattoria, Rome is sure to enchant."
    image1={Rome1}
    image2={Rome2}
     />
    </div>
  );
};

export default Destination;
