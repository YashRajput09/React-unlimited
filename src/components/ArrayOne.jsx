import React, { useState} from 'react';

function ArrayOne(){
    const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

    return(
    <div>
        {val.map((item)=> <h1>{item}</h1>)}

        <button onClick={()=> setVal(()=> {
            return val.filter((item, index)=> index!=val.length-1)
        })} 
        className='bg-blue-400 m-2 p-2 rounded-full'>Click</button>
    </div>    
    )
}

export default ArrayOne;