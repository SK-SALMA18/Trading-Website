import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/services.css";
import Card from "./Card";
import Data from "./Data";
const Services =()=>{
    return(
        <>
          <div className="services">
            {Data.map((values)=>{
                return(
                    <Card 
                        title={values.Stitle}
                        imgSource={values.imgSrc}
                        desc={values.desc}
                        btnService={values.btnService}
                    />
                )
            })}
          </div>
        </>
    )
}
export default Services;