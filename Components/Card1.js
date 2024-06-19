import React from "react";
import { NavLink } from "react-router-dom";

const Card1 =(props)=>{
    return(
        <>
         <div className="card1">
            <h2>{props.title1}</h2>
            <img src={props.ImgSource} alt="images" className="serviceImg1"/>
            <h5> {props.Desc} </h5>
            </div>
        </>
    )
}
export default Card1;