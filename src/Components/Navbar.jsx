import Banner from '../assets/images/banner.jpeg';


const Navbar = () => {

    const MovieName = "Money Heist"
    const Year = "2021"


    return (
        <>
        <div style={{background:"red",padding:"15px",textAlign:"center",color:"white"}}>
            <h1>{MovieName} {Year}</h1>
        </div>
        <div>
            <img style={{width:"100%"}} src={Banner} alt="banner-img"/>
        </div>
        </>
    )
}
export default Navbar;