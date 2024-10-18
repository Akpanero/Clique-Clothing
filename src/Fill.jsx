import React from 'react'
import Curved from './images/Curved.png'

const Fill = () => {
  return (
    <>
       <div className="flex flex-row border-box">
        <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:items-center lg:h-screen bg-[#EAE1DA87]">
            <h1 className='text-2xl pb-10 font-Libre -ml-36'><span className='text-[#BF5532] flex-none'>Clique</span> Clothing</h1>
           <img src={Curved} alt="" className='w-80'/>
        </div>
        <div class="flex flex-col flex-1 justify-center h-full lg:h-screen items-center">
        <form action="" method="post" className='w-[57%]' >
                <div class="mb-2 mt-2 font-Libre text-xl">
                    <h2>Kindly complete your registration</h2>
                </div>
                <div class="mb-2">
                    <label className='text-lg font-Libre' for="">First Name</label>
                    <input type="text" name="First-Name" placeholder="input your first name" className='block w-full bg-white border-2 border-[#BF5532] rounded-md mt-1 p-1' required/>
                </div>
                <div class="mb-2">
                    <label className='text-lg font-Libre' for="">Last Name</label>
                    <input type="text" name="Last-Name" placeholder="input your last name" className='block w-full bg-white border-2 border-[#BF5532] rounded-md mt-1 p-1' required/>
                </div>
                <div class="mb-2">
                    <label className='text-lg font-Libre' for="">Email Address</label>
                    <input type="email" name="Email" placeholder="johndoe@gmail.com" className='block w-full bg-white border-2 border-[#BF5532] rounded-md mt-1 p-1' required/>
                </div>
                <div class="mb-2">
                    <label className='text-lg font-Libre' for="">Phone Number</label>
                    <input type="tel" name="Phone-Number" placeholder="+248183006070" className='block w-full bg-white border-2 border-[#BF5532] rounded-md mt-1 p-1' required/>
                </div>
                <div class="mb-2">
                    <label className='text-lg font-Libre' for="">Create Password</label>
                    <input type="password" name="Password" placeholder="input your password" maxlength="10"
                    pattern="[A-Za-z0-9!@#$%^&*()_+=-]{1,10}" className='block w-full bg-white border-2 border-[#BF5532] rounded-md mt-1 p-1' required/>
                </div>
                <div class="mb-2">
                    <label className='text-lg font-Libre' for="">Confirm Password</label>
                    <input type="password" name="Password" placeholder="confirm password" maxlength="10"
                    pattern="[A-Za-z0-9!@#$%^&*()_+=-]{1,10}" className='block w-full bg-white border-2 border-[#BF5532] rounded-md mt-1 p-1' required/>
                </div>
                <div class="">
                    <label className='text-lg font-Libre' for="">What did you hear about us?</label>
                    <select name="" id="select" className='block w-full bg-white border-2 border-[#BF5532] rounded-md mt-1 p-1' >
                        <option value="">Friends & Family</option>
                        <option value="">Social Media Ads (Facebook, Instagram)</option>
                        <option value="">Search Engine Ads (Google, Bing)</option>
                        <option value="">Promotional emails (newsletters, etc)</option>
                        <option value="">Social Media Influencer</option>
                        <option value="">Chique Clothing Representative</option>
                        <option value="">Blog posts</option>
                        <option value="">Public Relations (press release, media outreach)</option>
                        <option value="">Other</option>
                    </select>
                    <div class="text-right">
                    <div class="pt-1 pb-1">
                        <a href="#" className='text-[#075CFF] no-underline text-xs'>Privacy Notice</a> | <a href="#" className='text-[#075CFF] no-underline text-xs'>Terms and Condition</a>
                    </div>
                    <p className='inline-block text-xs w-[85%] font-Poppins'>
                        Note: by clicking “continue”, you agree to our Terms & Conditions and Privacy Notice.
                    </p>
                    </div>
                </div>
                <input type='submit' value="Continue" class="block w-full p-2 font-medium h-11 bg-[#BF5532] border-none rounded-3xl font-Libre text-white cursor-pointer text-center no-underline"/>
            </form>
        </div>
    </div>
    </>
  )
}

export default Fill