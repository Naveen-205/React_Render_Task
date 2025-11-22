import { useState } from "react";

import Professor from "../assets/images/professor.jpg";
import Tokyo from "../assets/images/tokyo.jpg";
import Berlin from "../assets/images/berlin.webp";
import Denver from "../assets/images/denver.jpg";


const State = () =>{

    // String Rendering
    const [name,setName] = useState("Hello Everyone");
    const [from,setFrom] = useState("I'm from");
    const [school,setSchool] = useState("My Schooling at");
    const [college,setCollege] = useState("Graduated at");
    const [goal,setGoal] = useState("My Goal are");
    const [dream,setDream] = useState("Dream is");

    //Number Rendering
    const [num,setNum] = useState(0);
    const [age,setAge] = useState(15);
    const [count,setCount] = useState(2);
    const [total,setTotal] = useState(10);

    //Null Rendering
    const [nul,setNull] = useState(null);

    //Boolean Rendering
    const [lapon,setLapon] = useState(true);
    const [lapoff,setLapoff] = useState(false);

    //Array Rendering
    const [juice,setJuice] = useState(['Apple','Orange','Mango']);
    const [food,setFood] = useState(['Briyani','Rice']);
    const [bike,setBike] = useState(['Bajai','Honda','Suzuki']);
    const [car,setCar] = useState(['Toyoto','Hyundai','Volkswegan']);

    //Object Rendering
    const [fan,setFan] = useState({fan1:'Number One',fan2:'Number Two'});
    const [milk,setMilk] = useState({cold:'Milk',hot:'Tea'});
    const [biscuit,setBiscuit] = useState({bis1:'Milk Bikies',bis2:'Treat'});

    //Array Of Object Rendering
    const [movie,setMovie] = useState([
        {name:'', img:''},
        {name:'' , img:''},
        {name:'' , img:''},
        {name:'' , img:''}
    ]);

    // String Function
    const UpdatedName = () => {
        setName("I'm Naveen")
    }

    const UpdatedFrom = () => {
        setFrom("Paramakudi")
    }

    const UpdatedSchool = () => {
        setSchool("Sourashatra Higher Secondary School")
    }

    const UpdatedCollege = () => {
        setCollege("Syed Ammal Arts & Science College")
    }

    const UpdatedGoal = () => {
        setGoal("Become a Full Stack Developer")
    }

    const UpdatedDream = () => {
        setDream("Work in These Companies Like Zoho , Cognizant")
    }


    //Number Function
    const UpdatedNumber = () => {
        setNum (num+1)
    }
    const UpdatedAge = () => {
        setAge(age+1)
    }
    const UpdatedCount = () => {
        setCount(count*2)
    }
    const UpdatedTotal = () => {
        setTotal(total+5)
    }

    //Null Function
    const UpdatedNull = () => {
        setNull("This is Null Value!")
    }

    //Boolean Function
    const UpdatedOn = () => {
        setLapon("Laptop is Working!")
    }
    const UpdatedOff = () => {
        setLapoff("Laptop is Not Working")
    }

    //Array Function
    const ArrJuices = () => {
        setJuice(['Pomegranate', 'Pappaya', 'Muskmelon'])
    }
    const ArrFoods = () => {
        setFood(['Chicken','Curd'])
    }
    const ArrBikes = () => {
        setBike(['Pulsar','Shine','Access'])
    }
    const ArrCars = () => {
        setCar(['Innova','Creta','Polo'])
    }
    
    //Object Function
    const ObjFan = () => {
        setFan({fan1:'Crompten',fan2:'Havells'})
    }
    const ObjMilk = () => {
        setMilk({cold:'Badam Milk',hot:'Black Tea'})
    }
    const ObjBiscuit = () => {
        setBiscuit({bis1:'Oreo',bis2:'BourBan'})
    }

    //Array of Object Function
    const ArrMovie = () => {
        setMovie([{name:'Money Heist - Game over', img:Professor},
            {name:'Money Heist - The End of the Road' , img:Tokyo},
            {name:'Money Heist - Welcome to the Spectacle of Life' , img:Berlin},
            {name:'Money Heist - Efectuar lo acordado' , img:Denver}
        ])
    }

return (
  <>
    {/* STRING SECTION */}
    <div className="sec-title">
      <h1>String Rendering</h1>
    </div>

    <div className="string-box">
      <h2>{name}</h2>
      <button className="string-btn" onClick={UpdatedName}>Click</button>
    </div>

    <div className="string-box">
      <h2>{from}</h2>
      <button className="string-btn" onClick={UpdatedFrom}>Click</button>
    </div>

    <div className="string-box">
      <h2>{school}</h2>
      <button className="string-btn" onClick={UpdatedSchool}>Click</button>
    </div>

    <div className="string-box">
      <h2>{college}</h2>
      <button className="string-btn" onClick={UpdatedCollege}>Click</button>
    </div>

    <div className="string-box">
      <h2>{goal}</h2>
      <button className="string-btn" onClick={UpdatedGoal}>Click</button>
    </div>

    <div className="string-box">
      <h2>{dream}</h2>
      <button className="string-btn" onClick={UpdatedDream}>Click</button>
    </div>


    {/* NUMBER SECTION */}
    <div className="sec-title">
      <h1>Number Rendering</h1>
    </div>

    <div className="number-box">
      <h2>{num}</h2>
      <button className="num-btn" onClick={UpdatedNumber}>Click</button>
    </div>

    <div className="number-box">
      <h2>{age}</h2>
      <button className="num-btn" onClick={UpdatedAge}>Click</button>
    </div>

    <div className="number-box">
      <h2>{count}</h2>
      <button className="num-btn" onClick={UpdatedCount}>Click</button>
    </div>

    <div className="number-box">
      <h2>{total}</h2>
      <button className="num-btn" onClick={UpdatedTotal}>Click</button>
    </div>


    {/* NULL SECTION */}
    <div className="sec-title">
      <h1>Null Rendering</h1>
    </div>

    <div className="null-box">
      <h2>{nul}</h2>
      <button className="null-btn" onClick={UpdatedNull}>Click</button>
    </div>


    {/* BOOLEAN SECTION */}
    <div className="sec-title">
      <h1>Boolean Rendering</h1>
    </div>

    <div className="boolean-box">
      <h2>{lapon}</h2>
      <button className="bool-btn" onClick={UpdatedOn}>True</button>
    </div>

    <div className="boolean-box">
      <h2>{lapoff}</h2>
      <button className="bool-btn" onClick={UpdatedOff}>False</button>
    </div>


    {/* ARRAY SECTION */}
    <div className="sec-title">
      <h1>Array Rendering</h1>
    </div>

    <div className="array-group">
      <h2>Juices:</h2>
      <h2>{juice[0]}</h2>
      <h2>{juice[1]}</h2>
      <h2>{juice[2]}</h2>
      <button className="arr-btn" onClick={ArrJuices}>Juice Menu</button>
    </div>

    <div className="array-group">
      <h2>Food:</h2>
      <h2>{food[0]}</h2>
      <h2>{food[1]}</h2>
      <button className="arr-btn" onClick={ArrFoods}>Food Menu</button>
    </div>

    <div className="array-group">
      <h2>Bikes:</h2>
      <h2>{bike[0]}</h2>
      <h2>{bike[1]}</h2>
      <h2>{bike[2]}</h2>
      <button className="arr-btn" onClick={ArrBikes}>Bikes</button>
    </div>

    <div className="array-group">
      <h2>Cars:</h2>
      <h2>{car[0]}</h2>
      <h2>{car[1]}</h2>
      <h2>{car[2]}</h2>
      <button className="arr-btn" onClick={ArrCars}>Cars</button>
    </div>


    {/* OBJECT SECTION */}
    <div className="sec-title">
      <h1>Object Rendering</h1>
    </div>

    <div className="object-group">
      <h2>Fan Brands:</h2>
      <h2>{fan.fan1}</h2>
      <h2>{fan.fan2}</h2>
      <button className="obj-btn" onClick={ObjFan}>Show Brands</button>
    </div>

    <div className="object-group">
      <h2>Milks:</h2>
      <h2>{milk.cold}</h2>
      <h2>{milk.hot}</h2>
      <button className="obj-btn" onClick={ObjMilk}>Click Menu</button>
    </div>

    <div className="object-group">
      <h2>Biscuits:</h2>
      <h2>{biscuit.bis1}</h2>
      <h2>{biscuit.bis2}</h2>
      <button className="obj-btn" onClick={ObjBiscuit}>Click Biscuit</button>
    </div>


    {/* ARRAY OF OBJECT SECTION */}
    <div className="sec-title">
      <h1>Array of Object Rendering</h1>
    </div>

    <div className="movie-grid">
      {movie.map((e, i) => (
        <div className="movie-card" key={i}>
          <div className="movie-img">
            <img src={e.img} alt="movie-poster" />
          </div>
          <div className="movie-info">
            <h3>{e.name}</h3>
            <button className="movie-btn" onClick={ArrMovie}>Show Movie</button>
          </div>
        </div>
      ))}
    </div>
  </>
);

}
export default State;