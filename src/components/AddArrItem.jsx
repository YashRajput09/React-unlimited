import React, { useState } from 'react';

function AddArrItem(){
    const [val, setval] = useState([1, 2 ,3 ,4 ,5])

    return(
        <div>
            { val.map((item, index)=> <h1>{item}</h1>)}
            <button onClick={()=> setval([...val, 6])}
            /* <button onClick={()=> setval(()=> val.map((item, index) =>{
                item == index;
                return item + 1
            }))} */
            className='px-3 py-2 bg-blue-400 rounded-full'>Click</button>
        </div>
    )
}

export default AddArrItem;