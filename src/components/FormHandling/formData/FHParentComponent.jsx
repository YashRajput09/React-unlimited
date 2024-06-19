import React, { useState } from 'react';
import Cards from './formActivity/Cards';
import Form from './formActivity/Form';

function FHControledComponent(){
    const [users, setUsers] = useState([]);
    const handleFormData = (data) =>{
        setUsers([...users, data]);
    }

    const handleRemoveBtn = (id)=>{
        setUsers((prev) => {
        return prev.filter((item, index) =>{
            return index !== id;
        })
    })
    }
    return(
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-center items-center'>
            <div className="mx-12 rounded-lg">
            < Cards users={users} handleRemoveBtn={handleRemoveBtn}/>
            < Form handleFormData={handleFormData} />
            </div>
        </div>
    )
}

export default FHControledComponent;