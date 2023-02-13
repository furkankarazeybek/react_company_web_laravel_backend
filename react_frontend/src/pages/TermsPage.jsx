import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TermsDescription from '../components/TermsDescription/TermsDescription'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class TermsPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
 }
  render() {
    return (
    <Fragment>
        <TopNavigation title="Şartlar ve Koşullar"/>
        <PageTop pageTitle="Şartlar ve Koşullar"/>
        <TermsDescription />
        <Footer />            
      
    </Fragment>
  )
  }
}

export default TermsPage