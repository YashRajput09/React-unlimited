import React from 'react';
import Cards from './formActivity/Cards';
import Form from './formActivity/Form';

function FHControledComponent(){
    return(
        <div className='w-full h-screen bg-zinc-200 flex justify-center items-center'>
            <div className="mx-12 rounded-lg">
            < Cards />
            < Form />
            </div>
        </div>
    )
}

export default FHControledComponent;