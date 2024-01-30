import React from 'react'
import BlogPostCard from './BlogPostCard'
import BlogProfile from './BlogProfile'

function BlogSidebar() {
  return (
    <div className='col-span-1 p-7'>
      <div>
        <BlogPostCard />
        <BlogProfile />
      </div>
    </div>
  )
}

export default BlogSidebar