import { useRef } from 'react';
import { Button } from '../components/Buttons'
import { Input } from '../components/Input'
import BACKEND_URL from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const SignIn = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate()
    
    async function signin() {
        try{
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/brain/signin", {
            username,
            password
        })
      
        const jwt = response.data.message;
        if(!jwt){
             console.error(" jwt is missing")
        }
       
        localStorage.setItem("token", jwt)
        navigate("/dashboard")
      
        // redicret to user to the dashboard
    }  catch(error){
    console.log("Siginin error" , error)
}
}
    return (
        <div className='h-screen w-screen flex bg-gray-200 justify-center items-center'>
            <div className='bg-white rounded-xl border min-w-48 p-8'>
                <Input reference={usernameRef} placeholder='Username' />
                <Input reference={passwordRef} placeholder='Password' />
                <div className='flex justify-center pt-4'>
                    <Button onClick={signin} loading={false} text='Signin' variant='primary' fullWidth={true} />
                </div>
            </div>
        </div>
    )
}
