import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Card from "./Components/Card";
import Multiplay from "./Components/Multiplay";
import State from "./Components/State";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";








const App = () => {
  return (
    <>

      <div className="app">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/characters' element={<Card />} />
          <Route path='/multiplay' element={<Multiplay />} />
          <Route path='/state' element={<State />} />
        </Routes>

        <Footer />
        
      </div>
    </>
  )
}
export default App;
