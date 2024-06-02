import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


function ActivityOne(){
    const [val, setval] = useState(false);
    
    return(
        <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
            <div className="relative w-60 h-32 bg-zinc-400 rounded-md flex overflow-hidden">
                <img className={` transition-transform duration-700 shrink-0 w-full h-full object-cover ${val ? "-translate-x-[100%]" : "-translate-x-[0%]" }`} src="https://images.unsplash.com/photo-1716285386261-8de02ca53ce9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className={` transition-transform duration-700 shrink-0 w-full h-full object-cover ${val ? "-translate-x-[100%]" : "-translate-x-[0%]" }`} src="https://images.unsplash.com/photo-1716919208972-9799c4ae7da2?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span onClick={()=>setval(()=> !val)} className="w-8 h-8 bg-[#dadada7b] flex justify-center items-center rounded-full absolute bottom-0.5 right-1 -translate-x-[50%] -translate-y-[50%] decoration-white">
                    <FaRegArrowAltCircleRight />
                </span>
            </div>
        </div>
    )
}

export default ActivityOne;