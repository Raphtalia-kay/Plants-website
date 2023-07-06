import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Plants from '../components/Plants'
import Category from '../components/Category'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Supplies from '../components/Supplies'


const Home = () => {
  return (
    <>
      <Announce/>
      <Navbar/>
      <Slider/>
      <Category/>
      <Plants/>
      <Supplies/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home
