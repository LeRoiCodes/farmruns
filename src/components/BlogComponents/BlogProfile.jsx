import React from 'react'
import profile from '../../images/profilebig.png'

function BlogProfile() {
  return (
    <div className='mt-5 bg-[#d3e7d0] h-[400px] flex flex-col items-center p-10' style={{borderRadius:"30px", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)"}}>
        <img src={profile} alt={profile.name} style={{borderRadius: "50%", width: "150px"}} className='mb-3'/>
        <div>
            <p className='text-2xl font-normal '>Susan Fletcher</p>
            <p className='text-xl font-light text-[#55A349]'>Certified Foodie</p>
        </div>
        <p className='w-[300px] text-center font-light text-2xl mt-6'>I live for the edible pleasures life has to offer</p>
    </div>
  )
}

export default BlogProfile