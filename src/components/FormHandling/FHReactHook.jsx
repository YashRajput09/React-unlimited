import React from 'react';
import { useForm } from 'react-hook-form'

function FHReactHook(){
    const {register, handleSubmit} = useForm();
//    console.log(register())

    return(
        <div>
            <form action="" onSubmit={handleSubmit((e) => console.log(e))}>
                <input {...register('name')} type="text" placeholder="name"/>
                <input {...register('email')} type="text" placeholder="email"/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default FHReactHook;