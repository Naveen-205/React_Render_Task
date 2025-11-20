import { Link } from "react-router-dom"

const Navbar = () => {

    const MovieName = "Money Heist"
    const Year = "2021"


    return (
        <>

            <div className='navbar'>
                <div className='navtitle'>
                    <h1>{MovieName} {Year}</h1>
                </div>
                <div className="navlink">
                    <Link className="navlinksec" to="/">Home</Link>
                    <Link className="navlinksec" to="/about">About</Link>
                    <Link className="navlinksec" to="/characters">Characters</Link>
                    <Link className="navlinksec" to="/multiplay">Multiplay</Link>
                </div>

            </div>



        </>
    )
}
export default Navbar;