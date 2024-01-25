import React from 'react'
import ProductCard from '../ProductCard'
import { Link } from 'react-router-dom'
import productList from '../../utilities/productList'

function HomeProducts() {
  return (
    <div className='w-[95%] mx-auto mt-8'>
        <div className='font-oswald flex justify-center lg:justify-between items-center text-[24px]'>
            <h1 className='text-[38px] md:text-[48px] text-[#55A349] font-medium'>Explore, Share, Purchase</h1>
            <Link to="/" className=' hidden lg:block text-white bg-[#55A349] hover:bg-white hover:text-black rounded-lg shadow-gray-400 shadow-sm  px-3 lg:px-4 py-2'>See All</Link>
        </div>
        <div className='mt-3 flex flex-wrap justify-center md:justify-between gap-4 items-center mb-6'>
            {productList.map((product) => (
                <ProductCard key={product.id} name={product.name} imageUrl={product.imageUrl} farmer={product.farmer} id={product.id} />
            ))}
        </div>
        <div className='flex justify-center lg:hidden '>
            <Link to="/" className=' text-white bg-[#55A349] hover:bg-white hover:text-black rounded-lg shadow-gray-400 shadow-sm  px-3 lg:px-4 py-2'>See All</Link>
        </div>
        
    </div>
  )
}

export default HomeProducts