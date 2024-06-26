import React, {useState} from 'react';
import PropsCard from '../props/PropsCard';

function UserData(){
    const details = [
        {name: "Yash",  friend: false, profession: "Editor", img: "https://media.istockphoto.com/id/908231976/photo/bearded-young-man-with-hat.webp?b=1&s=170667a&w=0&k=20&c=jM2iPw2Qe1HZ0_vYAaTYSPRTTizm8-SwZVDg-sNRXOo="},
        {name: "Ravi",  friend: false, profession: "Coder", img: "https://media.istockphoto.com/id/1447861263/photo/smiling-handsome-young-indian-man-wearing-white-casual-t-shirt-and-jeans-isolated-on-beige.webp?b=1&s=170667a&w=0&k=20&c=LrU0W4yKSXS5CY-6NTjvKlWppVGp2cOngkMm7VjXVZY="},
        {name: "Ram",   friend: false, profession: "Crickter", img: "https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.webp?b=1&s=170667a&w=0&k=20&c=-bG-98gM7AR79cs9Fe7UaRGZnENYooOdSkHF5QkZ7xo="},
        {name: "Sohit",  friend: false, profession: "influencer", img: "https://media.istockphoto.com/id/1286408574/photo/young-woman-facial-expression-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=bjzCX1Z6MKxKoVZQzk9UhbCOiKyZBsWzwosSdY5wcbw="},
        {name: "Vasu", friend: false, profession: "Artist", img: "https://media.istockphoto.com/id/1221041044/photo/teenage-girl-at-white-background-stock-images.webp?b=1&s=170667a&w=0&k=20&c=0Gy4mH-Gobn1EeqlVOPicXxWQtl3Y9IhVrumvlxFZKk="},
      ]

      const [realDetails, setRealDetails] = useState(details);
      // console.log(realDetails);
      const handlebuttonClick = (btnIndex)=>{
        // alert(" Button clicked ")
        setRealDetails((prev)=>{
          return prev.map((item, index)=>{
            if(index === btnIndex){
              return {...item, friend: !item.friend}
            }
            return item;
          })
        
        })
      }

    return(
        <div className="w-full h-screen flex justify-center items-center flex-wrap">
        {realDetails.map((item, index)=> (
          < PropsCard key={index} index={index} values={item} handleClick={handlebuttonClick}/>)
        )}
        </div>
    )
} 

export default UserData;