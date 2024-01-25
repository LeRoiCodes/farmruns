import React from 'react'
import HomeNav from '../components/HomeComponents/HomeNav'
import HomeHeroSection from '../components/HomeComponents/HomeHeroSection'

function HomePage() {
  return (
    <div className="xl:w-[90%] xl:mx-auto">
        <HomeNav />
        <HomeHeroSection />
    </div>
  )
}

export default HomePage