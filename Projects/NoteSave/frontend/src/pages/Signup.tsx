import { Input } from '../components/Input'
import { Button } from '../components/Buttons'
import { useRef } from 'react'
import axios from 'axios';
import BACKEND_URL from '../config';
import { useNavigate } from 'react-router-dom';





export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate()

    async function signup (){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
       await axios.post(BACKEND_URL + "/api/v1/brain/signup" ,  {
                username,
                password
        })
        navigate("/signin")
        alert("You have Signed Up!") 
    }

    return (
        <div className='h-screen w-screen flex bg-gray-200 justify-center items-center'>
            <div className='bg-white rounded-xl border min-w-48 p-8'>
                <Input reference={usernameRef} placeholder='Username' />
                <Input reference={passwordRef} placeholder='Password' />
                <div className='flex justify-center pt-4'>
                    <Button onClick={signup} loading={false} text='Signup' variant='primary' fullWidth={true} />
                </div>
            </div>
        </div>
    )
}
