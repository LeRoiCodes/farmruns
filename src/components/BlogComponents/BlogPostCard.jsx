import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../images/profile.png'

function BlogPostCard() {
  return (
    <div className='bg-white flex justify-between p-4 flex-col' style={{borderRadius: "30px", boxShadow:"0px 2px 4px 2px rgba(0, 0, 0, 0.25)"}}>
      <div className='h-[500px]'>
        <img src={profile} alt={profile.name} className='w-[60px] mb-4' />
        <textarea type="" name="" id="" placeholder="What's on your mind?" className='p-1 w-full border-b border-black focus:outline-none placeholder:text-2xl placeholder:font-light placeholder:text-black'   />
      </div>
      <div className='flex justify-center'>
      <Link to="/" className="bg-[#55A349] hover:bg-white hover:text-black text-white shadow-gray-400 shadow-sm rounded-lg px-3 lg:px-9 py-3"> Create New Post </Link>
      </div>
    </div>
  )
}

export default BlogPostCard