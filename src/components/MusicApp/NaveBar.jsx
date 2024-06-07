import React from "react";

function NaveBar(){
    return(
        <div className="w-full px-20 py-3 flex justify-between text-white bg-zinc-400">
            <h3 className="bg-orange-500 px-4 py-1 rounded-md text-sm">Orange</h3>
            <div className="bg-orange-500 px-4 py-1 rounded-md flex text-sm gap-2">
                <h3>Favourite</h3>
                <h4>9</h4>
                </div>
        </div>
    )
}

export default NaveBar;