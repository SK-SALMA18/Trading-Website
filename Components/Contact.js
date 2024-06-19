import React from "react";
import { NavLink } from "react-router-dom";
import '../CSS/Contact.css';
const Contact =()=>{
    return(
        <>
            <h1>📞Contact Us for More Details..💬</h1>
            <form className="contact">
                <div>
                    <label htmlFor="name">Name/Email</label>
                    <input type="text" placeholder="Enter Your Name/EmailID"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Your Password"/>
                </div>
                <div>
                    <label htmlFor="moblie">Mobile</label>
                    <input type="tel" placeholder="Enter Your MObile Number"/>
                </div>
                <div className="button">
                <div className="btn">
                    <NavLink to="/login" className="readmore">
                       Submit Details To Login 
                    </NavLink>
                </div>
            </div>
            </form>
        </>
    )
}
export default Contact;