import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Group 1.png'
import searchImg from '../../images/search-01.png'
import storeImg from '../../images/store-add-01.png'

// border-solid border-[1px] border-red-700

function HomeNav() {
  return (
    <header className='mt-[20px] w-[95%] m-auto '>
    <nav className="bg-white border-gray-200 py-2.5 text-[32px] font-nanum ">
        <div className="flex flex-wrap justify-between items-center ">
            <Link to="/" className="flex items-center">
                <img src={logo} className="mr-1" alt="Farmruns Logo" />
                <span className="self-center whitespace-nowrap">Farmruns</span>
            </Link>
            <div className="flex items-center lg:order-2">
                <Link to="/" className="hover:bg-gray-50 focus:ring-4 focus:ring-[#55A349]  rounded-lg px-3 lg:px-4 py-2 mr-1 focus:outline-none">
                <img src={searchImg} className="w-[24px]" alt="search" />
                </Link>
                <Link to="/" className="hover:bg-gray-50 focus:ring-4 focus:ring-[#55A349]  rounded-lg px-3 lg:px-4 py-2 mr-1 focus:outline-none hidden lg:block">
                <img src={storeImg} className="w-[24px]" alt="store" />
                </Link>
                <Link to="/" className="text-white bg-[#55A349] hover:bg-white hover:text-black focus:ring-4 focus:ring-[#55A349] rounded-lg px-3 lg:px-4 py-2 focus:outline-none">Login</Link>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-[#55A349] lg:bg-transparent lg:text-[#55A349] lg:p-0" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-black border-b border-[#55A349] hover:bg-[#b5f9aa] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#55A349] lg:p-0">Blog</Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-black border-b border-[#55A349] hover:bg-[#b5f9aa] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#55A349] lg:p-0">Consumer</Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-black border-b border-[#55A349] hover:bg-[#b5f9aa] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#55A349] lg:p-0">e-commerce</Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-black border-b border-[#55A349] hover:bg-[#b5f9aa] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#55A349] lg:p-0">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-black border-b border-[#55A349] hover:bg-[#b5f9aa] lg:hover:bg-transparent lg:border-0 lg:hover:text-[#55A349] lg:p-0">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default HomeNav