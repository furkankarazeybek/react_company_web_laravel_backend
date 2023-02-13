import React, { Component, Fragment } from 'react'
import AllApplications from '../components/AllApplications/AllApplications'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'

import TopNavigation from '../components/TopNavigation/TopNavigation'

class AllApplicationPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
 }
  render() {
    
    return (
      <Fragment>
        <TopNavigation title="Staj İmkanları " />
        <PageTop pageTitle="Staj İmkanları "/>
        <AllApplications />
        <Footer />


      </Fragment>

    )
  }
}

export default AllApplicationPage