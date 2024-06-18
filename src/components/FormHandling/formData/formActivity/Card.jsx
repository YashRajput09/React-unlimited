import React from 'react';

function Card(){
    return(
     <div className='w-40 h-full bg-blue-400 flex flex-col items-center p-2 rounded-lg gap'>
        <div className="w-12 h-12 bg-orange-200 rounded-full overflow-hidden">
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1718102696639-451bd772dca4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="text-xs font-semibold flex flex-col items-center text-slate-300">
            <h1 className='text-base'>Yash</h1>
            <p>rajputyash@gamil.com</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elite!</p>
        </div>
        <button className='px-3 py-2 bg-red-400 rounded-full text-xs mt-3 text-slate-100'>Remove It</button>
     </div>
    )
}

export  default Card;