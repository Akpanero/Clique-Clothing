import React from 'react'
import { useNavigate } from "react-router-dom";
import Curved from './images/Curved.png'


const Login = () => {
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
             <div class="mb-4 font-Libre text-xl">
                 <h2>Welcome Back !</h2>
             </div>
             <div className='mb-2'>
                 <label for="" className='text-xl font-medium font-Libre'>Email Address</label>
                 <input type="email" name="Email" placeholder="input your email address" required className='w-full bg-white border-2 border-[#BF5532] rounded mt-1 p-1'/>
             </div>
             <div className='mb-2'>
                 <label for="" className='text-xl font-medium font-Libre'>Password</label>
                 <input type="password" name="Password" placeholder="input your password" required className='w-full bg-white border-2 border-[#BF5532] rounded mt-1 p-1'/>
             </div>
             <button class="block w-full p-2 font-medium font-Libre h-11 bg-[#BF5532] border-none rounded-3xl text-white text-center" onClick={()=>{navigate('/')}}>Login</button>
         </form>
     </div>
 </div>
 </>
  )
}

export default Login