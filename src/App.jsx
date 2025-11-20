import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Card from "./Components/Card";
import Multiplay from "./Components/Multiplay";
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
        </Routes>

        <Footer />
      </div>
    </>
  )
}
export default App;
