import React from "react";
import Card from "./components/Card";
import State from "./components/State";
import Addproperty from "./components/Addproperty";
import ArrayOne from "./components/ArrayOne";
import RemoveArrItem from  "./components/RemoveArrItem";
import AddArrItem from "./components/AddArrItem";
import ActivityOne from "./components/ActivityOne";
import Props from "./components/props/Props";
import PropsCard from "./components/props/PropsCard";

function App(){
  const details = [
    {name: "Yash",  friend: false, profession: "Editor", img: "https://media.istockphoto.com/id/908231976/photo/bearded-young-man-with-hat.webp?b=1&s=170667a&w=0&k=20&c=jM2iPw2Qe1HZ0_vYAaTYSPRTTizm8-SwZVDg-sNRXOo="},
    {name: "Ravi",  friend: false, profession: "Coder", img: "https://media.istockphoto.com/id/1447861263/photo/smiling-handsome-young-indian-man-wearing-white-casual-t-shirt-and-jeans-isolated-on-beige.webp?b=1&s=170667a&w=0&k=20&c=LrU0W4yKSXS5CY-6NTjvKlWppVGp2cOngkMm7VjXVZY="},
    {name: "Ram",   friend: false, profession: "Crickter", img: "https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.webp?b=1&s=170667a&w=0&k=20&c=-bG-98gM7AR79cs9Fe7UaRGZnENYooOdSkHF5QkZ7xo="},
    {name: "Urvi",  friend: false, profession: "influencer", img: "https://media.istockphoto.com/id/1286408574/photo/young-woman-facial-expression-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=bjzCX1Z6MKxKoVZQzk9UhbCOiKyZBsWzwosSdY5wcbw="},
    {name: "Nishu", friend: false, profession: "Artist", img: "https://media.istockphoto.com/id/1221041044/photo/teenage-girl-at-white-background-stock-images.webp?b=1&s=170667a&w=0&k=20&c=0Gy4mH-Gobn1EeqlVOPicXxWQtl3Y9IhVrumvlxFZKk="},
  ]

  return (
    // <> this sign called fragments, without creating a new div we can return multiple components
    <> 
        {/* <Card /> */}
        {/* <State /> */}
        {/* < Addproperty /> */}
        {/* < ArrayOne /> */}
        {/* < RemoveArrItem /> */}
        {/* < AddArrItem /> */}
        {/* < ActivityOne /> */}
        {/* < Props text="Know More" />
        < Props text="Download"/> */}
        <div className="w-full h-screen flex justify-center items-center flex-wrap">
        {details.map((item, index)=> (
        < PropsCard image={item.img} name={item.name} profession={item.profession} friend={item.friend}/>)
        )}
        </div>
    </>
  )
}

export default App;