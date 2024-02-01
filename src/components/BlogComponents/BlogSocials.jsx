import React from 'react'
import { Link } from 'react-router-dom'
import tweet from '../../images/tweet.png'
import facebook from '../../images/face.png'
import instagram from '../../images/insta.png'
import email from '../../images/mail.png'

function BlogSocials() {
  return (
    <div className='mt-5 p-3 md:p-10 bg-[#55A349] font-oswald text-white' style={{borderRadius:"30px", boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)"}}>
        <h1 className='text-center text-4xl font-medium mb-4 '>Contact Us</h1>
        <div>
            <Link to='/' className='flex gap-3 items-center mb-4'>
                <img src={tweet} alt={tweet.name} className='w-[52px]' />
                <p className='font-normal text-xl md:text-2xl '>{"@FarmRuns"}</p>
            </Link>
            <Link to='/' className='flex gap-3 items-center mb-4'>
                <img src={facebook} alt={facebook.name} className='w-[52px]' />
                <p className='font-normal text-xl md:text-2xl '>{"@FarmRuns"}</p>
            </Link>
            <Link to='/' className='flex gap-3 items-center mb-4'>
                <img src={instagram} alt={instagram.name} className='w-[52px]' />
                <p className='font-normal text-xl md:text-2xl '>{"@FarmRuns"}</p>
            </Link>
            <Link to='/' className='flex gap-3 items-center mb-4'>
                <img src={email} alt={email.name} className='w-[52px]' />
                <p className='font-normal text-[18px] md:text-2xl '>{"customercare@farmruns.com"}</p>
            </Link>
        </div>
        <h2 className='text-center text-6xl font-normal font-nanum mt-4'>FarmRuns</h2>
    </div>
  )
}

export default BlogSocials