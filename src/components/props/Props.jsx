import React from 'react';
// Props are used to pass information from a parent component to child component. They are similar to argument in a function and attributes in HTML.
function Props({text}){

    return(
        // <div className='w-full h-screen flex bg-black'>
        // </div>
            <button className='m-3 px-3 py-2 bg-blue-400 rounded-md'>{text}</button>
    )
}

export default Props;