import React from 'react';
import Cards from './formActivity/Cards';
import Form from './formActivity/Form';

function FHControledComponent(){
    return(
        <div className='w-full h-screen bg-zinc-200 flex jsutify-center items-center'>
            <div className="container mx-auto bg-white">
            < Cards />
            < Form />
            </div>
        </div>
    )
}

export default FHControledComponent;