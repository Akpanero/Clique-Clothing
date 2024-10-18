import React from 'react'
import { useNavigate } from "react-router-dom";
import Curved from './images/Curved.png'

const Register = () => {
  let navigate = useNavigate();
  return (
    <>
       <div className="flex flex-row">
        <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:items-center lg:h-screen bg-[#EAE1DA87]">
            <h1 className='text-2xl pb-16 font-Libre -ml-36'><span className='text-[#BF5532] flex-none'>Clique</span> Clothing</h1>
           <img src={Curved} alt="" className='w-80'/>
        </div>
        <div class="flex flex-col flex-1 justify-center h-screen items-center">
            <form>
                <div class="mb-4 font-Libre text-2xl">
                    <h2>Get Started</h2>
                    <p>Already have an account? <button  class="text-[#BF5532]" onClick={()=>{navigate('/login')}}>Login</button></p>
                </div>
                <div className='mb-2'>
                    <label for="" className='text-xl font-medium font-Libre'>Email Address</label>
                    <input type="email" name="Email" placeholder="input your email address" required className='w-full bg-white border-2 border-[#BF5532] rounded mt-1 p-1'/>
                </div>
                <input type='submit' value="Register" class="block w-full p-2 font-medium h-11 bg-[#BF5532] border-none rounded-3xl text-white text-center cursor-pointer" onClick={()=>{navigate('/fill')}}/>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register