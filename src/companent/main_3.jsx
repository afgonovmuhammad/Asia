import React from "react";
import '../App.css';



const Card_3 = (props) => {
    return (
        <div className=" lg:flex lg:w-[50%] lg:flex-wrap">
            <div className="mb-[110px]">
                <img className=" " src={props.imgg} alt="" />
                <h1 className="text-[24px] text-[#424047] font-[500] py-[20px]">{props.text_h}</h1>
                <p className=" text-[#625e6b] text-[18px] lg:w-[80%]">{props.text_p}</p>
            </div>
        </div>
    )
}

export default Card_3;