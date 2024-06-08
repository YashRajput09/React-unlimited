import React from "react";

function MusicCard({item, handleClick, index}){
const {title, artist, img, favourite} = item;
    return(
        <div className="relative w-60 p-4 pb-6 bg-zinc-100 rounded-md flex">
            <div className="w-16 h-16 bg-orange-400 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={img} alt="" />
            </div>
            <div className="px-2 flex flex-col justify-center">
                <h3 className="font-semibold">{title}</h3>
                <h5 className="text-xs">{artist}</h5>
            </div>
            <button onClick={()=> handleClick(index)} className={`px-3 py-2 ${favourite ? "bg-emerald-500" : "bg-orange-500"} text-white rounded-full bottom-0 absolute left-1/2 -translate-x-[50%] translate-y-[50%] text-xs font-semibold whitespace-nowrap`}>{favourite ? "Added" : "Add Favourites"}</button>
        </div>
    )
}

export default MusicCard;