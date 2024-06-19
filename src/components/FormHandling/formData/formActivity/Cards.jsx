import React from 'react';
import Card from './Card';

function Cards({users, handleRemoveBtn }){    
    return( 
      <div className='px-10w-full max-h-72 overflow-auto flex justify-center items-center p-2 gap-4 flex-wrap'>
        {users.map((item, index) =>{
           return < Card user={item} key={index} id={index} handleRemoveBtn={handleRemoveBtn}/>
        })}
    </div>
    )
}

export default Cards;