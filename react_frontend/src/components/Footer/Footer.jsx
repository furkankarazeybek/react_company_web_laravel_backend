import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link} from "react-router-dom";
import { Navbar,Nav,NavDropdown, NavLink } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';



class Footer extends Component {

  constructor(){
    super();
    this.state={
        address:"...",
        email:"...",
        phone:"...",
        facebook:"...",
        linkedin:"...",
        twitter:"...",
        footercredit:"...",

    }


}

 componentDidMount(){


    RestClient.GetRequest(AppUrl.FooterData).then(result=>{
      this.setState({
        address:result[0]['adress'],
        email:result[0]['email'],
        phone:result[0]['phone'],
        facebook:result[0]['facebook'],
        linkedin:result[0]['linkedin'],
        twitter:result[0]['twitter'],
        footercredit:result[0]['footer_credit'],
 

      
      
      });
    })
    
  } 
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
            <Row>
                <Col lg={3} md={6} sm={12} className="p-5 text-center">
                    <h2 className='footerName text-center'>Bize Ulaşın</h2>

                    <div className='social-container'>

                    <a className="facebook social" href={this.state.facebook}><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                    <a className="twitter social" href={this.state.linkedin}><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    <a  className="twitter social" href={this.state.twitter}><FontAwesomeIcon icon={faTwitter} size="2x"/></a>

                    </div>


                </Col>

                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                   <h2 className='footerName'>Adres</h2>
                   <p className='footerDescription'>
                     {this.state.address}<br />
                     <FontAwesomeIcon icon={faEnvelope} />Email : {this.state.email} <br />
                     <FontAwesomeIcon icon={faPhone} /> Telefon :  {this.state.phone}

                   </p>
 
                </Col>

                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                   <h2 className='footerName'>İletişim</h2>
                    <Nav.Link id="footerPolicyName" href={"/about"}>Hakkımızda</Nav.Link> 
                    <Nav.Link id="footerPolicyName" href="/contact">Bize Ulaşın</Nav.Link> 


                </Col>

                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                    <h2 className='footerName'>İdare Bilgileri</h2>
                    <Nav.Link id="footerPolicyName" href="/dataProtect">Veri Koruma İlkeleri </Nav.Link> 
                    <Nav.Link id="footerPolicyName" href="/terms">Şartlar ve Koşullar</Nav.Link> 
                    <Nav.Link id="footerPolicyName" href="/privacy">Gizlilik Politikası</Nav.Link> 
                 </Col>   


                
            </Row>
        </Container>



        <Container fluid="true" className="text-center copyrightSection">
            <a className="copyrightlink" href="#">{this.state.footercredit}
</a>

        </Container>
      </Fragment>
    )
  }
}

export default Footer