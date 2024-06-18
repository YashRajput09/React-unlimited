import React from 'react';

function Form(){
    return(
        <div className='my-10 '>
            <form className="flex gap-10" action="">
                <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='name'/>
                <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="email" placeholder='email'/>
                <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="url" placeholder='image url'/>
                <input className='rounded-md px-3 py-1 bg-blue-500 text-white' type="submit" />
            </form>
        </div>
    )
}

export default Form;