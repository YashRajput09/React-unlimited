import React from "react";

function Card() {
    const data = [
      {
        img :"https://plus.unsplash.com/premium_photo-1683121324577-a0e371055654?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        name : "Fast food",
        disc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        instock : true,
      },
      {
        img :"https://images.unsplash.com/photo-1714969894946-8d5e55419ed3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
        name : "Paper", 
        disc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        instock : false,
      },
      {
        img :"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D", 
        name : "Stree", 
        disc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        instock : false,
      }   
    ]

    const handleOrder = () =>{
      // data.map((e, i)=>{
      //   console.log(e.instock);
        // if(data.instock === true){
        //   alert("Order successful")
        // } else if(data.instock === false) {
        //   alert("Item out of stock")
        // } else {
        //   console.log("somthig went wrong");
        // }
      // })
      alert("Order delivered soon")
    }

    return (
      <div className="w-full h-screen bg-zinc-200 flex  justify-center items-center gap-10">
        {data.map((elem, index)=> (
              <div key={index} className="w-52 overflow-hidden bg-zinc-100 rounded-lg ">
              <div className="w-full h-32 bg-zinc-300">
                <img className="w-full h-full object-cover"
                  src= {elem.img}
                  alt=""
                />.
              </div>
              <div className="w-full px-3 py-3">
                <h1 className="font-semibold">{elem.name}</h1>
                <p className="text-sm mt-2">
                 {elem.disc}
                </p>
              </div>
              <button onClick={handleOrder} className= {`px-3 py-1 ${elem.instock ? "bg-blue-500" : "bg-red-400"} m-2 rounded font-semibold text-xs text-zinc-100`}>
                {elem.instock ? "In Stock" : "Out Of Stock"}
              </button>
            </div>
))}
    </div>
  );
}
export default Card;
