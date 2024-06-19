import React from 'react';

function Card({user, handleRemoveBtn, id}){
    return(
        <div className='w-40 h-full bg-blue-400 flex flex-col items-center p-2 rounded-lg gap'>
        <div className="w-12 h-12 bg-orange-200 rounded-full overflow-hidden">
            <img className='w-full h-full object-cover' src={user.image} alt="" />
        </div>
        <div className="text-xs font-semibold flex flex-col items-center text-slate-300">
            <h1 className='text-base'>{user.name}</h1>
            <p>{user.email}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elite!</p>
        </div>
        <button onClick={()=> handleRemoveBtn(id)} className='px-3 py-2 bg-red-400 rounded-full text-xs mt-3 text-slate-100'>Remove It</button>
     </div>
    )
}

export  default Card;