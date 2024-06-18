import React from 'react';
import Card from './Card';

function Cards(){
    return(
        <div className='px-10w-full max-h-72 overflow-auto flex justify-center items-center p-2 gap-4 flex-wrap'>
           < Card />
        </div>
    )
}

export default Cards;