import React from 'react'
import TopNavbar from '../components/Header/TopNavbar'
import Footer from '../components/Footer/Footer'
import HaderSlider from '../components/slider/HaderSlider'
import AllCategories from '../components/categories/AllCategories'
import LatestProducts from '../components/product/LatestProducts'

const Home = () => {
  return (
    <>
     <TopNavbar />
     <HaderSlider/>
     <AllCategories/>
     <LatestProducts/>
     <div className='mb-5 pb-5'></div>
     <Footer/> 
    </>
  )
}

export default Home
