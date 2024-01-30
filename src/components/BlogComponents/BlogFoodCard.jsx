import React from 'react'
import { Link } from 'react-router-dom'

function BlogFoodCard({ desc, imageUrl, author, name, authorImageUrl, authorTitle,}) {
  return (
    <div className='flex gap-10 font-oswald text-black'>
                <img src={imageUrl} alt={imageUrl.name} className='w-[375px] h-[375px]' />
                <div className='flex flex-col justify-between'>
                    <h2 className='text-[36px] font-medium '>{name}</h2>
                    <p className='text-[20px] font-light '>{desc}</p>
                    <p className='text-[20px] font-light underline'>Posted by</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <img src={authorImageUrl} alt={authorImageUrl.name} className='h-[70px]'/>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[20px] font-light'>{author}</p>
                                <p className='text-[16px] font-extralight'>{authorTitle}</p>
                            </div>
                        </div>
                        <Link to="/" className="bg-[#55A349] hover:bg-white hover:text-black text-white shadow-gray-400 shadow-sm rounded-lg px-3 lg:px-9 py-3"> Read More </Link>
                    </div>
                </div>
            </div>
  )
}

export default BlogFoodCard