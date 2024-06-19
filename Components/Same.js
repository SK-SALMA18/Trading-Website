import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/HomeAbout.css";

const Same =(props)=>{
    return(
        <>
          <div className="main">
            <div className="content anim">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div className="button anim">
                    <div className="btn anim">
                    <NavLink to="/about" className="readmore" activeClassName="activeItem">{props.btn}</NavLink>
                    </div>
                </div>
            </div>
            <div className="imgcontainer anim">
                <img src={props.imgSrc} alt="Images"/>
            </div>
        </div>
        </>
    )
}
export default Same;