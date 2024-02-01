import React from 'react'
// import { Link } from 'react-router-dom'
// import garlic from '../../images/Meat.png'
// import susan from '../../images/Susan.png'
import BlogFoodCard from './BlogFoodCard'
import foodList from '../../utilities/foodList'

function BlogMainContainer() {
  return (
    <div className='col-span-2'>
        <div className='bg-[#f6f6f6] lg:ml-[2.333%] pl-[1%] pt-[48px] pb-4 pr-[1%] mb-3' style={{boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)"}} >
            { foodList.map((food) => (
                <div>
                    <BlogFoodCard key={food.id} desc={food.desc} imageUrl={food.imageUrl} author={food.author} name={food.name} authorImageUrl={food.authorImageUrl} authorTitle={food.authorTitle} />
                    <div className='border border-[#989898] mt-10 mb-10' />
                </div>
            ))}
            
        </div>
        
    </div>
  )
}


export default BlogMainContainer