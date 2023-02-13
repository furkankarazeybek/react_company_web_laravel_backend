import React, { Component, Fragment } from 'react'
import ApplicationDetails from '../components/ApplicationDetails/ApplicationDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';

class ApplicationDetailsPage extends Component {

  constructor({match}){
    super();
    this.state={
      ApplicationPassedID:match.params.applicationID,
      ApplicationPassedName:match.params.applicationName,

      ApplicationData:[]
     

      
    }
  }
  componentDidMount() {
    window.scroll(0,0)

    RestClient.GetRequest(AppUrl.ApplicationDetails+this.state.ApplicationPassedID).then(result=>{
      this.setState({ApplicationData:result});
 }) 


 }
  render() {
    return (
      <Fragment>
          <TopNavigation title="Staj Detay Sayfası"/>
          <PageTop pageTitle={this.state.ApplicationPassedName}/>
          <ApplicationDetails applicationAllData={this.state.ApplicationData} />
          <Footer />

      </Fragment>
    )
  }
}

export default ApplicationDetailsPage