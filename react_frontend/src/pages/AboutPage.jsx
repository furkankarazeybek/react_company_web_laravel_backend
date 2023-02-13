import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class AboutPage extends Component {
    
   componentDidMount() {
      window.scroll(0,0)
   }
   
  render() {
    return (
      <Fragment>
       <TopNavigation title="Hakkımızda"/>
       <PageTop pageTitle="Hakkımızda "/>
       <AboutUs />
       <AboutDescription />
       <Footer />
      </Fragment>
    )
  }
}

export default AboutPage