import React from 'react';
import { useForm } from 'react-hook-form';

function Form({handleFormData}){
const {register, handleSubmit, reset} = useForm();
const handleFormSubmit = ( data )=> { 
        handleFormData(data);
        reset();  
}
    return(
        <div className='my-10 flex justify-center'>
            <form className="flex gap-10" onSubmit={handleSubmit(handleFormSubmit)}>
                <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='name'/>
                <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="email" placeholder='email'/>
                <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="url" placeholder='image url'/>
                <input  className='rounded-md px-3 py-1 bg-blue-500 text-white' type="submit" />
            </form>
        </div>
    )
}

export default Form;