import React from 'react'
import BlogNav from '../components/BlogComponents/BlogNav'
import { Link } from 'react-router-dom'
import image1 from '../images/blogHeader.png'
import BlogMainContainer from '../components/BlogComponents/BlogMainContainer'
import BlogSidebar from '../components/BlogComponents/BlogSidebar'

function BlogPage() {
    const image = image1
  return (
    <div>
        <header className="bg-cover bg-center h-screen font-oswald" style={{backgroundImage: `url(${image})`}}>
           <div className='h-full w-full bg-opacity-40 bg-black'>
           <BlogNav />
            <div className='w-[95%] m-auto font-oswald text-white'>
                <h1 className='mt-[40px] text-[30px]  md:text-start md:text-[70px] font-medium'>Indulge In Deliciousness</h1>
                <h1 className='mt-[20px] text-[30px]  md:text-start md:text-[70px] font-medium'>Dive Into Flavors Unknown</h1>
                <p className='mt-[20px] text-[16px] text-center md:text-start md:text-[24px] font-normal lg:w-[55%] mb-[30px]'>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish.</p>
                <div className='flex justify-center md:justify-start'>
                <Link to="/" className="bg-white hover:bg-[#55A349] hover:text-white text-black shadow-gray-400 shadow-sm rounded-lg px-3 lg:px-9 py-3">Visit Store</Link>
                </div>
            </div>
           </div>  
        </header>
        {/* <br className='p-20 bg-[#55A349] border-spacing-5' /> */}
        <div className='h-[90px] w-full bg-[#55A349]'></div>
        <div className='grid grid-cols-3'>
            <BlogMainContainer/>
            <BlogSidebar />
        </div>
        
    </div>
  )
}

export default BlogPage