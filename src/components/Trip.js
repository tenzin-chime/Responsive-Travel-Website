import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <>
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Explore and discover unique destination.</p>
    
    <div className="tripcard">
        <TripData 
          image={Trip1}
          heading={"Trip to Morocco"}
          text="Morocco, officially the Kingdom of Morocco, is a country in the Maghreb region of North Africa. It overlooks the Mediterranean Sea to the north and the Atlantic Ocean to the west, and has land borders with Algeria to the east, and the disputed territory of Western Sahara to the south."
        />
        <TripData 
          image={Trip2}
          heading={"Trip to Bali"}
          text="Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast."
        />
        <TripData 
          image={Trip3}
          heading={"Trip to Italy"}
          text="Italy, officially the Italian Republic, is a country in Southern and Western Europe. It is located on a peninsula that extends into the middle of the Mediterranean Sea, with the Alps on its northern land border, as well as several islands, notably Sicily and Sardinia."
        /> 
      </div>
      </div>
      </>
  );
}

export default Trip;
