import React, { useState } from 'react'


function RemoveArrItem(){
   const [val, setval] = useState([1, 2, 3, 4, 5, 6]);

    return(
        <div>
            { 
                val.map((item, index) => <h1>{item}</h1>)
            }
            <button onClick={()=> setval(val.filter((item, index) =>{
                return item !==3;
            }))} className="px-3 py-2 rounded-full bg-blue-400">Click</button> 
        </div>
    )
}

export default RemoveArrItem;