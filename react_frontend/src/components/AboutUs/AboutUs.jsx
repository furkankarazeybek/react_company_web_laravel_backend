import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/teknokent.png';
import { init } from 'ityped'

class AboutUs extends Component {

    

    componentDidMount(){
      const myElement = document.querySelector('#abc')
      init(myElement, { showCursor: false, strings: ['Web Developer!','React-Laravel' ] })
    }
  render() {
    return (
      <Fragment>
        <Container className="text-center">

                <h1 className='serviceMainTitle'>HAKKIMIZDA</h1>
                <div className="bottom"></div>
            <Row>
                  <Col lg={6} md={6} sm={12}>
                      <div className="aboutMeImage">
                   <img className="aboutImg" src={face} /> 
                   </div>
                  </Col>


                  <Col lg={6} md={6} sm={12}>
                     <div className="aboutMeBody">
                        <h2 className='aboutMeDetails'>
Pamukkale Teknokent Zemin Kat B-Blok</h2>
                        <h2 className='aboutMeTitle'>ARSLAN ARGE</h2>
                        <h3 className='aboutMeDetails'>Arslan Arge Elektrik Mak. San. Tic. Ltd. Şti.<span id="myElement"></span></h3>



                     </div>
                  
                  </Col>


                  
            </Row>
        </Container>
      </Fragment> 
    )
  }
}

export default AboutUs