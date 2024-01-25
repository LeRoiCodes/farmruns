import React from 'react'
import food1 from '../../images/food1.png'
import circle from '../../images/circle.png' 

function FoodCard() {
  return (
    <div className='w-[95%] rounded-3xl border mx-auto mt-[50px] flex flex-col-reverse md:flex-row p-[21px] font-oswald text-black'>
        <div className=''>
            <h4 className='text-[48px] font-medium'>Garlic Shrimp Spaghetti</h4>
            <p className='text-[24px] font-light mt-3'>This Garlic Shrimp Spaghetti is an easy and quick dish for the weekday menu that comes to together in 15 minutes with buttery garlic taste!</p>
            <h5 className='text-[24px] font-medium mt-12'>Ingredients</h5>
            <ul className='text-[24px] font-light list-none mt-4 p-3'>
                <li className='list-disc list-inside'>I8 oz Fettuccine or spaghetti (whole wheat, or whole grain )</li>
                <li className='list-disc list-inside'>2 cups Baby plum tomatoes (or grape tomatoes, halved)</li>
                <li className='list-disc list-inside'>4 oz Sun-dried tomatoes chopped (about 1/4 cup)</li>
                <li className='list-disc list-inside'>1 Tbsp Olive oil 4-6 Garlic cloves (crushed)</li>
            </ul>
            <div className='flex gap-[21px] items-center mt-10'>
                <img src={circle} alt="circle" className='w-[73px]' />
                <div className='flex-col gap-1'>
                    <p className='text-[24px] font-normal'>Susan Fletcher</p>
                    <p className='text-[24px] font-light'>Cooking Enthusiast</p>
                </div>
            </div>
            <div className='w-full mb-5 md:w-[85%] md:mb-0'>
                <input type="text" placeholder="Add a comment..." className='mt-[36px] p-8 w-[100%] bg-[#DEDEDE] rounded-3xl placeholder:text-[#555555] placeholder:text-2xl placeholder:font-light  focus:bg-white'/>
            </div>
        </div>
        <img src={food1} alt={food1.name} className='w-full md:w-[50%]'/>
    </div>
  )
}

export default FoodCard