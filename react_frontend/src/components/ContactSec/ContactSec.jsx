import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';

class ContactSec extends Component {

  constructor(){
    super();
    this.state={
        address:"...",
        email:"...",
        phone:"...",
     

    }


}

 componentDidMount(){


    RestClient.GetRequest(AppUrl.FooterData).then(result=>{
      this.setState({
        address:result[0]['adress'],
        email:result[0]['email'],
        phone:result[0]['phone'],
    
      });
    })
  } 

  sendContact() {
      let name= document.getElementById("name").value;
      let email= document.getElementById("email").value;
      let message= document.getElementById("message").value;
     // alert(name+"/"+email+"/"+message);

     let jsonObject = {name:name, email:email, message:message}

      RestClient.PostRequest(AppUrl.ContactSend,JSON.stringify(jsonObject)).then(result=>{
        alert(result);
      }).catch(error=>{
        alert("Error");
      })
  }
  render() {
    return (
       <Fragment>

        <Container className="mt-5">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <h1 className='serviceName'>Bizimle İletişime Geçin</h1>


                    <Form>
                     <Form.Group className="mb-3" >
                       <Form.Label>Ad Soyad</Form.Label>
                       <Form.Control id="name" type="text" placeholder="Ad Soyad" />
                     </Form.Group>

                     <Form.Group className="mb-3" >
                       <Form.Label>Email Adresi</Form.Label>
                       <Form.Control id="email" type="email" placeholder="Email" />
                     </Form.Group>
                     <Form.Group className="mb-3" >
                       <Form.Label>Mesajınız</Form.Label>
                       <Form.Control id="message" as="textarea" rows={3} />
                     </Form.Group>

                  
                     <Button onClick={this.sendContact} variant="primary" >
                       Gönder
                     </Button>
                   </Form>
                </Col>

                <Col lg={6} md={6} sm={12}>
                    <h1 className='serviceName'>Bize Ulaşın</h1>

                    <p className='serviceDescription'>
                     {this.state.address}<br />
                     <FontAwesomeIcon icon={faEnvelope} /> Email : {this.state.email} <br />
                     <FontAwesomeIcon icon={faPhone} /> Telefon : {this.state.phone}

                   </p>
                </Col>
            </Row>

        </Container>
       </Fragment>
    
    )
  }
}

export default ContactSec