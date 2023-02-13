import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AboutUs from '../components/AboutUs/AboutUs';
import Analysis from '../components/Analysis/Analysis';
import ClientReview from '../components/ClientReview/ClientReview';
import Applications from '../components/Applications/Applications';
import Footer from '../components/Footer/Footer';
import RecentProject from '../components/RecentProject/RecentProject';
import Services from '../components/Services/Services';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';


class HomePage extends Component {
  componentDidMount() {
    window.scroll(0,0)
 }
  render() {
    return (
      <Fragment>

      <TopNavigation title="Arslan Arge"/>
      <TopBanner />
      <Analysis />
      <Summary />
      <Services />
      <RecentProject />
      <Applications />
      <ClientReview />
      <AboutUs />
      <Footer />  

      </Fragment>
    )
  }
}

export default HomePage