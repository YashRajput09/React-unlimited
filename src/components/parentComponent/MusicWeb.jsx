import React, { useState } from "react";
import MusicCard from "../MusicApp/MusicCard";
import NaveBar from "../MusicApp/NaveBar"

function MusicWeb(){
const musicData = [
    {title: "One Love", artist: "~Yash Rajput", favourite: true, img: "https://media.istockphoto.com/id/1386893256/photo/silhouette-of-man-with-headphones-against-ocean.webp?b=1&s=170667a&w=0&k=20&c=avyJ-6ermUvAk5twT30k0tZeM2z4cYDm73Yo9m75he0="},
    {title: "Sajni Re", artist: "~Ravi Rajput", favourite: false, img: "https://media.istockphoto.com/id/1488540963/photo/beautiful-emotional-woman-listening-to-music.webp?b=1&s=170667a&w=0&k=20&c=oHi8KTya1Wm_J_RWic3injOCjrZJie7HEu0wX_gJ9tQ="},
    {title: "Girls I Need You", artist: "~Braj Rajput", favourite: false, img: "https://media.istockphoto.com/id/914202356/photo/young-woman-listening-music.webp?b=1&s=170667a&w=0&k=20&c=IeIRXRLlpX2vCYB2cK83URSQUy6i3lwUvEnK8Kjmf2Q="},
    {title: "O maahi", artist: "~Ram Rajput", favourite: false, img: "https://media.istockphoto.com/id/1170687104/photo/photo-of-charming-beautiful-wavy-curly-haired-girl-listening-to-music-wearing-yellow-pullover.webp?b=1&s=170667a&w=0&k=20&c=FT3pdArjfKnz6tswXetB-dF7YHkqmjh6Jw-EYXQZSv4="},
    {title: "Titliyaan", artist: "~Sohit Verma", favourite: false, img: "https://media.istockphoto.com/id/1442141291/photo/portrait-of-indian-young-man-at-home-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=svR8x8j1H9oil9yVvgYfK9vwICreinUWdPHxef9b-t4="},
    {title: "Dokha", artist: "~Vasu Gupta", favourite: false, img: "https://media.istockphoto.com/id/888275014/photo/focused-young-artist-playing-electric-piano.webp?b=1&s=170667a&w=0&k=20&c=Z9CS7YBhBUqRALc5hsFQqBynSnlSX7VxwLTD6sLheic="},
]

const [musicDetail, setMusicDetail] = useState(musicData);

const handleFavBtn = (clickedBtnIndex)=>{
    setMusicDetail((prev)=>{
        return prev.map((value, index)=>{   
            if(index === clickedBtnIndex){
               return {...value, favourite: !value.favourite}
            }
        return value;
               })
               
               })
}

    return(
        <div className="w-full h-screen bg-zinc-300">
            < NaveBar musicData={musicDetail}/>
            <div className="flex gap-10 flex-wrap px-20 mt-8">
                {musicDetail.map((item, index)=>(

            < MusicCard item={item} index={index} handleClick={handleFavBtn}/>
                ))}
          
            </div>
        </div>
    )
}

export default MusicWeb;