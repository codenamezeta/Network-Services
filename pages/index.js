import React, { Component } from 'react'
import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import Banner from '../components/NetworkServices/Banner'
import Partner from '../components/NetworkServices/Partner'
import About from '../components/NetworkServices/About'
import Features from '../components/NetworkServices/Features'
import Process from '../components/NetworkServices/Process'
import Cta from '../components/NetworkServices/Cta'
import Funfact from '../components/NetworkServices/Funfact'
import Testimonials from '../components/NetworkServices/Testimonials'
// import Pricing from '../components/NetworkServices/Pricing'
// import Blog from '../components/NetworkServices/Blog'
import Contact from '../components/NetworkServices/Contact'
import Subscribe from '../components/NetworkServices/Subscribe'
import CloudReadiness from '../components/NetworkServices/CloudReadiness'

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        {/* <Banner /> */}
        <Cta />
        <Funfact />
        <Partner />
        <Contact />
        <Process />
        <About />
        <CloudReadiness />
        {/* <Features /> */}
        <Testimonials />
        {/* <Pricing /> */}
        {/* <Blog /> */}
        <Subscribe />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Index
