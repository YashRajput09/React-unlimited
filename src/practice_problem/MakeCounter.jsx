import React, { useState } from 'react';

 export default function MakeCounter({ initialValue = 0 }) {
    const [count, setCount] = useState(initialValue);
  
    function makeCounter(){
         setCount(count + 1);
    };


    return(
        <>
        <button className="px-5 py-2 bg-slate-200 rounded-full" onClick={makeCounter}>
            Count: {count}
        </button>
        </>
    )
}