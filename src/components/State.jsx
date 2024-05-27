import React from "react";
import { useState } from "react";

function State(){
    // let [val, setVal] = useState(1);
    const [val, setVal] = useState( {name : " Yash", isLoggedIn : true})
    // console.log(ans[0]);

    return (
    
           <div className="w-full m-5 ">
           <h1>Name : {val.name}</h1>
           <h1>LoggedIn : {val.isLoggedIn.toString()}</h1>
           {/* <button onClick={()=> setVal((val)=> val+1)} className="px-3 py-1 rounded bg-blue-400 text-xs mt-3">count</button> */}
           <button onClick={()=> setVal({...val, isLoggedIn : !val.isLoggedIn})} className="px-3 py-1 rounded bg-blue-400 text-xs mt-3">Change</button>
           </div>

    )
}

export default State;