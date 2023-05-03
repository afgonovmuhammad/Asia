import React from "react";
import '../App.css';



const Card_4 = (props) => {
    return (
        <div className=" lg:flex lg:w-[40%] lg:flex-wrap sm:w-[65%] mx-auto sm:py-[40px] lg:pt-[80px]">
            <div className="lg:mb-[40px] ">
                <img className=" " src={props.imgg} alt="" />
                <h1 className="text-[20px] text-[#e7e5eb] lg:w-[70%] font-[500] py-[20px]">{props.text}</h1>
                
            </div>
        </div>
    )
}

export default Card_4;