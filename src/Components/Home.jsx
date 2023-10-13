import React from 'react'

import SwiperSlides from './SwiperSlides';
import Projects from './Projects';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Album from './Album';

const Home = () => {
  return (
    <div className='max-w-[1400px] maxi:m-auto min-w-[400px]'>
      <SwiperSlides/>
      <p className='text-black font-semibold my-4 p-4 text-center'>Welcome to Meghana Constructions, where we turn your dream of owning a home into a concrete reality</p>
      <Projects/>
      <Gallery/>
      <Album/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home