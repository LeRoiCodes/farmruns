import React from 'react'
import { Link } from 'react-router-dom'

function BlogFoodCard({ desc, imageUrl, author, name, authorImageUrl, authorTitle,}) {
  return (
    <div className='flex flex-col md:flex-row   gap-10 font-oswald text-black'>
                <img src={imageUrl} alt={imageUrl.name} className=' w-[300px] mx-auto md:w-[375px] md:h-[375px]' style={{borderRadius:"30px"}}/>
                <div className='flex flex-col justify-between'>
                    <h2 className='text-[30px] md:text-[36px] font-medium text-center'>{name}</h2>
                    <p className='text-[16px] md:text-[20px] font-light '>{desc}</p>
                    <p className='text-[16px] md:text-[20px] font-light text-center md:text-start underline'>Posted by</p>
                    <div className='flex mt-3 md:mt-1 justify-between items-center'>
                        <div className='flex gap-2'>
                            <img src={authorImageUrl} alt={authorImageUrl.name} className='h-[70px]'/>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[16px] md:text-[20px] font-light'>{author}</p>
                                <p className='text-[12px] md:text-[16px] font-extralight'>{authorTitle}</p>
                            </div>
                        </div>
                        <Link to="/" className="bg-[#55A349] hover:bg-white hover:text-black text-white shadow-gray-400 shadow-sm rounded-lg px-3 lg:px-9 py-3"> Read More </Link>
                    </div>
                </div>
            </div>
  )
}

export default BlogFoodCard