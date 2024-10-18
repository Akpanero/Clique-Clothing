import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Rectangle from './images/Rectangle 23rectangle.png'
import Lady from './images/Lady on red.png'
import Black from './images/Lady on black dres.png'
import Jacket from './images/Lady on Jacket.png'
import Jean from './images/Lady on jean.png'
import Jumpsuit from './images/Lady on jumpsuit.png'
import Pattern from './images/Lady on pattern dress.png'
import Building from './images/Lady infront of a building.png'
import Shirt from './images/Lady on shirt.png'
import Bag from './images/Lady with bag.png'
import Overall from './images/Lady on Overall.png'
import Hand from './images/A Lady Hand.png'
import Car from './images/Car.png'
import Wall from './images/Wall.png'

const Home = () => {
  let navigate = useNavigate();
  return (
<>
<div className='bg-[#EAE1DA87] '>
<div class="min-h-screen px-6 py-3 flex flex-col md:px-10 md:py-7 lg:px-16">
        <navbar className="flex justify-between">
            <div class="flex items-center justify-center gap-2 font-Libre">
                <h1 className="text-2xl"><span class="text-[#BF5532]">Chique</span> Clothing</h1>
            </div>
            <ul class="hidden lg:flex justify-between items-center font-Libre gap-6 text-base">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="#Category">Category</a></li>
              <li><a href="#Blog">Blog</a></li>
            </ul>
            <button className="hidden lg:flex justify-center items-center font-Libre bg-[#BF5532] text-xl text-white px-6 py-1.5 rounded-3xl" onClick={()=>{navigate('/register')}}>
                Register
            </button>
            <div className="lg:hidden">
              <FaBars />
            </div>
        </navbar>

          <div class="lg:flex mt-24">
            <div class="flex lg:flex-1 items-center justify-center lg:order-2 lg:justify-end">
                <img src={Rectangle} alt="Rectangle with a curved top" class="w-48 md:w-64 md:-translate-y-0.5 -translate-y-2 translate-x-4 lg:-translate-x-8"/>
                <img src={Lady} alt="lady on red holding her hat and smiling" class="absolute h-72 md:h-96 -translate-y-6"/>
            </div>
            <div class="lg:flex-1 space-y-4 mt-16 lg:order-1">
                <h2 class="text-5xl text-[#BF5532] font-bold leading-tight font-Libre">STAY AHEAD  OF FASHION CURVE.</h2>
                <p class="font-Poppins leading-9 ">Our collection of chic women's clothing features versatile pieces that are perfect for any occasion, from work to a night out on the town.</p>
                <div class="mt-15 font-Libre">
                    <button class="inline-block rounded-full border border- bg-[#BF5532] px-6 py-1.5 mr-3 text-lg font-Libre text-white hover:bg-transparent hover:text-[#BF5532] focus:outline-none focus:ring active:text-[#BF5532]" href="#" onClick={()=>{navigate('/register')}}>
                      Get Started
                    </button>
                    <button class="inline-block rounded-full border border-[#BF5532] px-10 py-1.5 text-lg font-Libre text-black hover:bg-[#BF5532] hover:text-white focus:outline-none focus:ring active:bg-[#BF5532]" href="#" onClick={()=>{navigate('/login')}}>
                      Login
                    </button>
                    <div>
                      <a className='inline-block mt-10 mr-2' href="#">View Collection</a>
                      <FaArrowRight className='inline-block'/>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>     

          <section class="font-Libre px-6 py-3 flex flex-col md:px-10 md:py-7 lg:px-16" id='Category'>
                <h2 class=" text-2xl text-center justify-center items-center my-10">Category</h2>
                <div className='md:flex lg:flex'>
                    <a class="inline-block rounded-full bg-[#BF5532] mr-5 mb-1  px-8 py-3 text-lg font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-[#BF5532]" href="#">
                        All
                    </a>

                    <a class="inline-block rounded-full border px-8 py-3 mr-5 mb-1 text-lg font-medium text-black border-[#BF5532] transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-[#BF5532]" href="#">
                        Dresses
                    </a>

                    <a class="inline-block rounded-full px-8 py-3 mr-5 mb-1 text-lg font-medium text-black border border-[#BF5532] transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:[#BF5532]" href="#">
                        Tops
                    </a>

                    <a class="inline-block rounded-full border px-8 py-3 mb-1 text-lg font-medium text-black border-[#BF5532] transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-[#BF5532]" href="#">
                        Bottom
                    </a>
                </div>
                <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 justify-center my-5">
                    <div>
                        <img src={Black} alt=""/>
                    </div>
                    <div class="row-span-2">
                        <img src={Jacket} alt=""/>
                    </div>
                    <div>
                        <img src={Jean} alt=""/>
                    </div>
                    <div>
                        <img src={Jumpsuit} alt=""/>
                    </div>
                    <div>
                        <img src={Pattern} alt=""/>
                    </div>
                  </div>
                
                <div>
                  <h2 className='text-2xl text-center my-10 font-Libre bg-white'>This Month Trending</h2>
                </div>
          </section>
            
            
<section className="bg-[#EAE1DA87]  lg:py-10">
  <div className="lg:flex lg:overflow-x-hidden md:p-6 lg:px-px">
    <div className="flex flex-col rounded-lg bg-white md:max-w-xl md:flex-row md:mx-auto lg:flex-row-reverse  mb-5 lg:mr-5">
      <img className="h-96 w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg lg:w-72 p-6" src={Wall}alt="Japanese Blazer" />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-Libre my-2">Japanese Blazer</h5>
        <p className="my-5 text-base font-Poppins">Our collection of chic women's clothing features versatile pieces that are perfect for any occasion.</p>
        <div className="flex space-x-10 lg:space-x-6 my-10">
          <div>
            <h6 className="font-Libre">Price</h6>
            <p>NGN 67,000</p>
          </div>
          <div>
            <h6 className="font-Libre">Color</h6>
            <span className="inline-block w-4 h-4 mr-1 bg-purple-500 rounded-full"></span>
            <span className="inline-block w-4 h-4 mr-1 bg-gray-500 rounded-full"></span>
            <span className="inline-block w-4 h-4 bg-pink-500 rounded-full"></span>
          </div>
          <div>
            <h6 className="font-Libre">Size</h6>
            <p>M L XL</p>
          </div>
        </div>
        <button className="bg-[#BF5532] text-xl text-white rounded-3xl w-32 px-2 py-1 font-Libre mt-5">Buy Now</button>
      </div>
    </div>
    <div className="flex flex-col rounded-lg bg-white md:max-w-xl md:flex-row md:mx-auto lg:flex-row-reverse  mb-5">
      <img className="h-96 w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg lg:w-72 p-6" src={Car}alt="Japanese Blazer" />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-Libre my-2">Turkish Suit</h5>
        <p className="my-5 text-base font-Poppins">Our collection of chic women's clothing features versatile pieces that are perfect for any occasion.</p>
        <div className="flex space-x-10 lg:space-x-6 my-10">
          <div>
            <h6 className="font-Libre">Price</h6>
            <p>NGN 34,000</p>
          </div>
          <div>
            <h6 className="font-Libre">Color</h6>
            <span className="inline-block w-4 h-4 mr-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-4 h-4 mr-1 bg-green-500 rounded-full"></span>
            <span className="inline-block w-4 h-4  bg-purple-500 rounded-full"></span>
          </div>
          <div>
            <h6 className="font-Libre">Size</h6>
            <p>M L XL</p>
          </div>
        </div>
        <button className="bg-[#BF5532] text-xl text-white rounded-3xl w-32 px-2 py-1 font-Libre mt-5">Buy Now</button>
      </div>
    </div>
  </div>
</section>

            

<section class="min-h-screen px-6 flex flex-col gap-16 md:px-10 md:py-7 lg:px-16 sm:px-8 py-10" id='Blog'>
  <h2 class="text-2xl text-center my-10 lg:my-5 font-Libre">Insightful Fashion Articles</h2>
  <div class="lg:flex">
    <div class="lg:flex-none flex justify-center">
      <img src={Building} alt="Building" class=""/>
    </div>
    <div class="lg:flex lg:flex-col lg:h-auto md:flex md:flex-wrap md:justify-between lg:ml-3">
      <div class="lg:mb-1 mb-8 md:w-1/2 items-center lg:items-start lg:flex lg:flex-row flex flex-col">
        <img src={Bag} alt="Bag" class="my-4 lg:my-0 max-w-full h-auto" />
        <div class="lg:flex-none md:w-full lg:w-full text-center lg:text-left lg:pl-8">
          <h3 class="font-Libre text-lg">2023 Galant Styles</h3>
          <p className='font-Poppins'>
            Our collection of chic women's clothing features versatile pieces that are perfect for any occasion.
          </p>
        </div>
      </div>
      <div class="lg:mb-1 mb-8 md:w-1/2 items-center lg:flex lg:flex-row flex flex-col">
        <img src={Shirt} alt="Bag" class="my-4 lg:my-0 max-w-full h-auto" />
        <div class="lg:flex-none md:w-full lg:w-full text-center lg:text-left lg:pl-8">
          <h3 class="font-Libre text-lg">Fashion Trends</h3>
          <p className='font-Poppins'>
            Our collection of chic women's clothing features versatile pieces that are perfect for any occasion.
          </p>
        </div>
      </div>
      {/* <div class="mb-8 lg:mb-3 md:w-1/2 lg:flex lg:flex-row flex flex-col">
        <img src={Shirt} alt="Shirt" class="my-4 lg:mb-2 max-w-full h-auto" />
        <div class="lg:flex-none md:w-full lg:w-full text-center lg:text-left lg:pl-8">
          <h3 class="font-Libre text-lg">Fashion Trends</h3>
          <p className='font-Poppins'>
            Our collection of chic women's clothing features versatile pieces that are perfect for any occasion.
          </p>
        </div>
      </div> */}
      <div class="lg:mb-5 mb-8 md:w-1/2 lg:flex items-center lg:flex-row flex flex-col">
        <img src={Overall} alt="Overall" class="mb-4 lg:mb-0 max-w-full h-auto" />
        <div class="lg:flex-none md:w-full lg:w-full text-center lg:text-left lg:pl-8">
          <h3 class="lg:flex-none font-Libre text-lg">Royal Dressing Style</h3>
          <p className='font-Poppins'>
            Our collection of chic women's clothing features versatile pieces that are perfect for any occasion.
          </p>
        </div>
      </div>
      <div class="mb-8 lg:mb-3 lg:flex-none md:w-1/2 items-center lg:flex lg:flex-row flex flex-col">
        <img src={Hand} alt="Hand" class="mb-4 lg:mb-0 max-w-full h-auto" />
        <div class="lg:flex-none md:w-full lg:w-full text-center lg:text-left lg:pl-8">
          <h3 class="font-Libre text-lg">Pant Styling</h3>
          <p className='font-Poppins'>
            Our collection of chic women's clothing features versatile pieces that are perfect for any occasion.
          </p>
        </div>
      </div>
    </div>
  </div> 
  </section>


<footer class="bg-[#BF5532]">
    <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
          <div class="text-center sm:text-left">
            <p class="text-lg font-Libre text-white">COMPANY</p>
            <ul class="mt-8 space-y-4 text-sm">
              <li>
                <a class="text-white font-Poppins" href="#">
                  Home
                </a>
              </li>
  
              <li>
                <a class="text-white font-Poppins" href="#">
                  About
                </a>
              </li>
  
              <li>
                <a class="text-white font-Poppins" href="#">
                  Category
                </a>
              </li>
  
              <li>
                <a class="text-white font-Poppins" href="#"> Blog </a>
              </li>
            </ul>
          </div>
  
          <div class="text-center sm:text-left">
            <p class="text-lg font-Libre text-white">CONTACT</p>
            <ul class="mt-8 space-y-4 text-sm">
              <li>
                <a class="text-white font-Poppins" href="#">
                    <span class="flex-1 text-white ">+234803464978</span>
                </a>
              </li>
              <li>
                <a class="text-white font-Poppins" href="#">
                    <span class="flex-1 text-white">info@chiqueclothing@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

  
          <div class="text-center sm:text-left">
            <p class="text-lg font-Libre text-white">ADDRESS</p>
            <ul class="mt-8 space-y-4 text-sm">
              <li class="flex-1 items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                <address class="-mt-0.5 flex-1 not-italic text-white font-Poppins">
                    120, Abayomi Kofo Victoria Island, Lagos State.
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>


</>  )
}

export default Home