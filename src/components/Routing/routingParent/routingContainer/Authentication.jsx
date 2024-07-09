import React from 'react';
import { useParams, useNavigate, Outlet} from 'react-router-dom';

function Authentication() {
    const { authenticate } = useParams();
    const navigate = useNavigate();
    const goBackHandler = ()=>{
        navigate(-1);
    }
    return (
        <div className="flex items-center flex-col">
        <div className="text-xl font-semibold">{authenticate} Form</div>
            {authenticate === "login" ? (
                <form className="flex flex-col gap-5 my-3">
                <input className="px-2" type="text" placeholder='User name'/>
                    <input className="px-2" type="password" placeholder='Password'/>
                <input className="px-2" type="text" placeholder='Email'/>
                <input className="px-3 py-2 bg-orange-300" type="Submit" />
            </form>
            ) : (
                <form className="flex flex-col gap-5 my-3">
            <input className="px-2" type="text" placeholder='User name'/>
            <input className="px-2" type="text" placeholder='Email'/>
            <input className="px-3 py-2 bg-orange-300" type="Submit" />
        </form>
            )}
        
            <button onClick={goBackHandler} className="w-full px-3 py-2 bg-blue-300">Back</button>

        </div>
    )
}

export default Authentication;