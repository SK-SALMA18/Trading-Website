import React from "react";
import "../CSS/info.css";
import Card1 from "./Card1";
import Data1 from "./Data1";
const Info =()=>{
    return(
        <>
          <div className="services1">
            {Data1.map((values)=>{
                return(
                    <Card1
                        title1={values.title}
                        ImgSource={values.imgsrc}
                        Desc={values.desc1}
                    />  
                )
            })}
          </div>
        </>
    )
}
export default Info;