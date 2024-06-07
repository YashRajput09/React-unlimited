import React from "react";
import MusicCard from "../MusicApp/MusicCard";
import NaveBar from "../MusicApp/NaveBar"

function MusicWeb(){
    return(
        <div className="w-full h-screen bg-zinc-300">
            < NaveBar />
            < MusicCard />
        </div>
    )
}

export default MusicWeb;