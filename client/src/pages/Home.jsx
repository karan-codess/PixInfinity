import React from 'react'
import Header from '../components/Header'
import Video from '../components/Video'
import Describe from '../components/Describe'
import Features from '../components/Features'
import Subscription from '../components/Subscription'
import Testimonial from '../components/Testimonial'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#e9e9e7] p-2 md:p-3">
      <div className="min-h-[calc(100vh-16px)] bg-white rounded-[22px] border border-black overflow-hidden">

      
      <Navbar/>
        <Header />
        <Video />
        <Describe />
        <Features />
        <Subscription />
        <Testimonial />
        <Faqs />
        <Footer />
        </div>
    </div>
  )
}

export default Home