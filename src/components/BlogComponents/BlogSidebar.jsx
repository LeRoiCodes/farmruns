import React from 'react'
import BlogPostCard from './BlogPostCard'
import BlogProfile from './BlogProfile'
import BlogSocials from './BlogSocials'

function BlogSidebar() {
  return (
    <div className='col-span-1 p-7'>
      <div>
        <BlogPostCard />
        <BlogProfile />
        <BlogSocials />
      </div>
    </div>
  )
}

export default BlogSidebar