import React from 'react'
import { Link } from 'react-router-dom'

function BlogMainContainer() {
  return (
    <div className='col-span-2'>
        <div className='bg-[#f6f6f6] lg:ml-[2.333%] lg:pl-[1%] pt-[48px] pb-[48px] pr-[1%] ' style={{boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)"}} >
            <div className=''>
                <img src="" alt="" />
                <div>
                    <h2>garlic Shrimp Spaghetti</h2>
                    <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish.</p>
                    <p>Posted by</p>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p>Susan Fletcher</p>
                                <p>Food Enthusiast</p>
                            </div>
                        </div>
                        <Link>Read More </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogMainContainer