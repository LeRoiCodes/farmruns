import React from 'react'
import HomeNav from '../components/HomeComponents/HomeNav'
import HomeHeroSection from '../components/HomeComponents/HomeHeroSection'
import HomeProducts from '../components/HomeComponents/HomeProducts'
import FoodCard from '../components/HomeComponents/FoodCard'

function HomePage() {

  return (
    <div className="">
        <HomeNav />
        <HomeHeroSection />
        <HomeProducts />
        <FoodCard />
    </div>
  )
}

export default HomePage