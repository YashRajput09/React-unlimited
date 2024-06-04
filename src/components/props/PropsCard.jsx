import React from 'react';

function PropsCard({image, name, profession, friend}){
// const {name, profession, img} = data;
    return(
        
            <div className="w-[200px] bg-zinc-300 m-5 rounded-md">
                <div className="w-full h-32 bg-blue-400 rounded-md  overflow-hidden">
                <img src={image} alt="" />
            </div>
            <div className='w-full p-3 flex justify-between'>
                <div>
                <h4 className='font-semibold text-xl'>{name}</h4>
                <p className='text-sm'>{profession}</p>
                </div>

                <button className='bg-blue-400 px-3 rounded-md text-sm font-semibold mt-2 text-white'>Add Friend</button>
            </div>
            </div>
    )
}

export default PropsCard;