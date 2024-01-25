import React from 'react'
import stall from '../../images/foodstall.png'
import food from '../../images/fancy.png'
import { Link } from 'react-router-dom'

function HomeHeroSection() {
  return (
    <div className='Hero w-[100%] border-red h-[500px] mt-1 relative xl:h-[700px]'>
        <div className='hero-bg w-full hidden md:block h-full absolute lg:flex justify-between z-[-1] top-0 left-0 opacity-90'>
            <img src={food} alt="food" className='h-full' />
            <img src={stall} alt="food stand" className='h-full md:hidden lg:block' />
        </div>
        <div className='hero-txt z-50 w-[95%] m-auto font-oswald pt-3'>
            <div className='text-[30px] w-[350px] md:w-[500px] mx-auto lg:mx-0 lg:w-[600px] lg:text-left  font-medium md:text-[40px] lg:text-[50px] text-black xl:text-[64px] xl:w-[750px]'>
                <h1 className=''><span className='text-[#55A349]'>Groceries Shopping</span> Made </h1>
                <h1>Exciting and Easy: Eat <span className='text-[#55A349]'>Fresh</span> & </h1>
                <h1 className='text-[#55A349]'>Healthy Food</h1>
            </div>
            <p className=' w-[350px] md:w-[500px]  mx-auto lg:mx-0 lg:w-[600px] text-black lg:text-[20px] font-light mt-6 xl:text-[28px] xl:w-[750px]'>FarmRuns is an agriculture-based platform that facilitates a hub where consumers and farmers can interact. This hub allows consumers and retailers to share, communicate and purchase farm produce from the comfort of their homes. </p>
            <div className='flex justify-center lg:justify-start  gap-[21px] items-ccenter lg:w-[600px] mt-6 text-2xl font-normal'>
                <Link to="/" className="bg-white hover:bg-[#55A349] hover:text-white text-black shadow-gray-400 shadow-sm rounded-lg px-3 lg:px-9 py-3">Discover</Link>
                <Link to="/" className="bg-[#55A349] hover:bg-white hover:text-black text-white shadow-gray-400 shadow-sm rounded-lg px-3 lg:px-9 py-3">Order Now</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeHeroSection