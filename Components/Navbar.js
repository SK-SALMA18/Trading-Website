import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import "../CSS/List.css";
const Navbar =()=>{
    return(
        <header>
            <div className="container container-flex">
                <div className="Logo">
                    <img src="https://scalebranding.com/wp-content/uploads/2022/01/wordmark-trader-logo-1.jpg" alt="Logo" className="image"/>
                </div>
                <nav>
                    <div className="list">
                        <NavLink exact to="/" className="listitem" activeClassName="activeItem">Home</NavLink>
                        <NavLink to="/about" className="listitem" activeClassName="activeItem">Course</NavLink>
                        <NavLink to="/services" className="listitem" activeClassName="activeItem">Blogs</NavLink>
                        <NavLink to="/contact" className="listitem" activeClassName="activeItem">Contact</NavLink>
                        <NavLink to="/policy" className="listitem" activeClassName="activeItem">Policy</NavLink>
                        <NavLink to="/login" className="listitem" activeClassName="activeItem">Login</NavLink>
                    </div>
                </nav>
                <div className="icons">
                    <SearchIcon className="icon"/>
                    <PersonIcon className="icon"/>
                    <CallIcon className="icon"/>
                </div>
            </div>
        </header>
    )
}
export default Navbar;