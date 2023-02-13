import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import DataProtection from '../components/DataProtection/DataProtection'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class DataProtectPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
 }
  render() {
    return (
      <Fragment>
          <TopNavigation title="Veri Koruma İlkeleri"/>
          <PageTop pageTitle="Veri Koruma İlkeleri"/>
          <DataProtection />
          <Footer />            
        
      </Fragment>

    )
  }
}

export default DataProtectPage