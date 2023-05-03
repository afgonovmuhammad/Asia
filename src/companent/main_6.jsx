
import React from "react";
import '../App.css';



const Card6 = (props) => {
    return (
        <div className="cards lg:flex lg:py-[80px] sm:py-[10px] lg:w-[100%] sm:w-[30%] mx-auto">
            <div className=" ">
                <h1 className="text-[#BC1D4A] text-[60px] font-[300]">{props.text_h}</h1>
                <p className="py-[20px] text-[#625e6b] text-[18px]">{props.text_p}</p>
            </div>
        </div>
    )
}

export default Card6;