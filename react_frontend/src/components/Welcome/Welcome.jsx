import React, { Component, Fragment } from 'react'
import { Col,Container,Row } from 'react-bootstrap'
import pageone from '../../asset/image/page1.jpg';
import pagetwo from '../../asset/image/page2.jpg';
import pagethree from '../../asset/image/page3.jpg';

import imageone from '../../asset/image/19.png';
import imagetwo from '../../asset/image/20.png';
import imagethree from '../../asset/image/21.png';



class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <div className="intro-area--top">
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='section-title text-center'>
                        <div className='intro-area-inner allx'>
                         <h6 className='sub-title double-line'>ARSLAN ARGE</h6>
                         <h2 className="maintitle">Arslan Arge Elektrik Mak. San. Tic. Ltd. Şti.</h2>


                        <Container className="text-center mt-5">
                            <Row>
                                <Col lg={4} md={6} sm={12}>
                                    <img src={pageone} className="pageone"/>
                            
                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                   <img src={pagetwo} className="pagetwo"/>
                                

                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                  <img src={pagethree} className="pagethree"/>
                                
                                </Col>
                            </Row>

                        


                        {/*Intro footer start */}

                        <Row className="intro-footer bg-base text-center mt-5 ">
                            <Col lg={4} md={6} sm={6}>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className='sideImg' src={imageone} />
                                      
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className='homeIntro'>Mühendislik</h5>
                                      
  
                                      
                                      </Col>
                                </Row>

                              
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className='sideImg' src={imagetwo} />
                                      
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className='homeIntro'>AR-GE</h5>
                                        <p class="homeDescription">Lorem ipsum dolor</p>
  
                                      
                                      </Col>
                                </Row>

                              
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className='sideImg' src={imagethree} />
                                      
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className='homeIntro'>Teknoloji</h5>
                                        <p class="homeDescription">Lorem ipsum dolor</p>
  
                                      
                                      </Col>
                                </Row>

                              
                            </Col>

                        </Row>
                        </Container>


                        </div>
                    </div>
                
                </Col>
            </Row>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default Welcome