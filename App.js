import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Service";
import Contact from "./Components/Contact";
import Policy from "./Components/Policy";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
const App=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App;