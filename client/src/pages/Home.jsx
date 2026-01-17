import React from 'react'
import Header from '../components/Header'
import Video from '../components/Video'
import Describe from '../components/Describe'
import Features from '../components/Features'
import Subscription from '../components/Subscription'
import Testimonial from '../components/Testimonial'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Video />
        <Describe />
        <Features />
        {/* <Subscription /> */}
        <Testimonial />
        <Faqs />
        <Footer />
    </div>
  )
}

export default Home