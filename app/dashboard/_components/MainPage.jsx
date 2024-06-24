import React from 'react'
import Carousel from './ProjectData'
import ProjectData from './ProjectData'
import DemoCarousel from './ProjectData'
import Card from './ClientCard'

function MainPage() {


 
  







  return (
    <div className=' md:ml-64 p-6 h-screen flex flex-col justify-center text-center'>
      <DemoCarousel />
      <div className="mt-16 w-full px-4 md:px-0">
        <h1 className="oswald-hwlo font-semibold text-2xl mb-4">Coordinators</h1>
        <div className="flex justify-center">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default MainPage
