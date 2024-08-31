import {  useState } from 'react';

export default function Counter(){
    const [counter, setCounter]= useState(0);

    const handleCounter = () => {
         setCounter(counter + 1);
    }
    return (
        <>
        <div className="">
            <button onClick={() => console.log(handleCounter())} className="px-5 py-2 bg-slate-200 rounded-full">Click: {counter}</button>
        </div>
                
        </>
    )
}
