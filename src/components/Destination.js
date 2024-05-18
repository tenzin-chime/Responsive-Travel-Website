import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
    <h1>Popular destination for You</h1>
    <p>Tours give you the opportunity to explore a lot of new places.</p>

    <div className="first-des">

    <div className="des-text">
      <h2>Palawan Island</h2>
      <p>Palawan is a slice of heaven, a sliver of an island that teems with exotic wildlife, quaint fishing villages, and UNESCO World Heritage Sites. Wave hello to endangered animals at the Calauit Game Preserve and Wildlife Sanctuary or explore the Japanese shipwrecks of Coron Island, regarded as one of the best dive sites in the world. A guided boat tour of the Puerto Princesa Underground River will take your breath away.</p>
    </div>

    <div className="image">
      <img alt="img" src={Mountain1} />
      <img alt="img" src={Mountain2} />
    </div>
    

    </div>
    </div>
  );
};

export default Destination;
