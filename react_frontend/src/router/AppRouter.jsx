import React, { Component, Fragment } from 'react'
import {BrowserRouter as Switch,Route, Routes} from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import AllApplicationPage from '../pages/AllApplicationPage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import DataProtectPage from '../pages/DataProtectPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import ApplicationDetailsPage from '../pages/ApplicationDetailsPage';

class AppRouter extends Component {
  render() {
    return (
       <Fragment>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={AllServicePage} />
          <Route exact path="/application" component={AllApplicationPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/dataProtect" component={DataProtectPage} />
          <Route exact path="/terms" component={TermsPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/projectdetails/:projectID/:projectName" component={ProjectDetailPage} />
          <Route exact path="/applicationdetails/:applicationID/:applicationName" component={ApplicationDetailsPage} />




    


    



         
        </Switch>

       </Fragment>

    )
  }
}

export default AppRouter