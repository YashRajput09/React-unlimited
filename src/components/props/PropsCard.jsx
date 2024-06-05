import React, { useState } from "react";

function PropsCard({ values, handleClick, index }) {
  // console.log(values);
    const {img, name, profession, friend} = values;
  return (
    <div className="w-[200px] bg-zinc-300 m-5 rounded-md">
      <div className="w-full h-32 bg-blue-400 rounded-md  overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="w-full p-3 flex justify-between">
        <div>
          <h4 className="font-semibold text-xl">{name}</h4>
          <p className="text-sm">{profession}</p>
        </div>

        <button onClick={()=> handleClick(index)} className={`${friend ?  "bg-green-400" : "bg-blue-400"} px-3 rounded-md text-sm font-semibold mt-2 text-white`}>
          {friend ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default PropsCard;
