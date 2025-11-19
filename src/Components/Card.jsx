import Professor from "../assets/images/professor.jpg";
import Tokyo from "../assets/images/tokyo.jpg";
import Berlin from "../assets/images/berlin.webp";
import Denver from "../assets/images/denver.jpg";
import Nairobi from "../assets/images/nairobi.jpeg";
import Helsinki from "../assets/images/helsinki.webp";
import Lisboa from "../assets/images/lisboa.jpg";


const Card = () => {

    const characters = [
        { name: "The Professor", job: "Mastermind & Planner of the heist", img: Professor },
        { name: "Tokyo", job: "Main narrator & Heist attacker/frontline fighter", img: Tokyo },
        { name: "Berlin", job: "Second-in-command & Strategic planner", img: Berlin },
        { name: "Denver", job: "Heist member & Combat/support inside the bank", img: Denver },
        { name: "Nairobi", job: "Quality control & Oversees gold/money production", img: Nairobi },
        { name: "Helsinki", job: "Heavy weapons expert & Strongman", img: Helsinki },
        { name: "Lisboa", job: "Professor’s partner & External operations coordinator", img: Lisboa },
    ];

    return (
        <>
            <div className="cards-container">
                {characters.map((char, index) => (
                    <div className="card" key={index}>
                        <div className="card-img">
                            <img src={char.img} alt={char.name} />
                        </div>
                        <div className="card-content">
                            <h1>{char.name}</h1>
                            <p>{char.job}</p>
                            <button className="card-btn">Show</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Card;
