import React from "react";
import { NavLink } from "react-router-dom";

const Card =(props)=>{
    return(
        <>
         <div className="card">
            <h2>{props.title}</h2>
            <img src={props.imgSource} alt="hhh" className="serviceImg"/>
            <p> {props.desc} </p>
            <div className="button">
                <div className="btn">
                    <NavLink to="/about" className="readmore">
                        {props.btnService}
                    </NavLink>
                </div>
            </div>
            </div>
        </>
    )
}
export default Card;