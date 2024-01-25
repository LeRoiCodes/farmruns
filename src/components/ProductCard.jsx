import React from 'react'
import { Link } from 'react-router-dom'
import product1 from "../images/product2.jpeg"
import circle from "../images/circle.png"

function ProductCard({id, name, farmer, imageUrl}) {
  return (
    <div className='w-[300px] rounded-3xl shadow-gray-700 shadow font-oswald mb-1'>
        <img src={imageUrl} alt="product 1" className='w-[300px] rounded-t-3xl' />
        <div className='p-4'>
            <h5 className='text-[20px] font-normal text-black'>{name}</h5>
            <div className='flex justify-between items-center mt-[21px]'>
                <div className='flex gap-3 items-center'>
                    <img src={circle} alt="circle" />
                    <p className='text-[15px] font-light text-black'>Farmer {farmer}</p>
                </div>
                <div>
                    <Link className='text-[#55A349] font-normal text-[15px] underline'>View Post</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard