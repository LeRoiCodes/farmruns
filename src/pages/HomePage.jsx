import React from 'react'
import HomeNav from '../components/HomeComponents/HomeNav'
import HomeHeroSection from '../components/HomeComponents/HomeHeroSection'
import HomeProducts from '../components/HomeComponents/HomeProducts'
function HomePage() {
  return (
    <div className="">
        <HomeNav />
        <HomeHeroSection />
        <HomeProducts />
    </div>
  )
}

export default HomePage