import React from "react";
import '../App.css';



const Card = (props) => {
    return (
        <div className="cards lg:flex">
            <div className="card ">
                <img className="" src={props.imgg} alt="" />
                <p className="py-[20px] text-[#625e6b] text-[18px]">{props.text}</p>
            </div>
        </div>
    )
}

export default Card;