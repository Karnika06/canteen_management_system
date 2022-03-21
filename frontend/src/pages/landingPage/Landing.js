import React from 'react'
import CanteenNames from '../../components/landingPage/CanteenNames'
import Carousel from '../../components/landingPage/CarouselPart'
import Footer from '../../components/landingPage/Footer'
import Middle from '../../components/landingPage/Middle'
import Navbar from '../../components/shared/Navbar'

import Register from './LogInRegister/Register'


export default function Landing() {
  return (
    <>
        <Navbar/>
        
        <Carousel/>
        <CanteenNames/>
        <Middle/>
        <Footer/>
    </>
  )
}
