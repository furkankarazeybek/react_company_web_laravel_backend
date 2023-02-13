
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import Zoom from 'react-reveal/Zoom';
class Summary extends Component {
     render() {
          return (
              <Fragment>
                     
     <Container id="summaryContent" fluid={true} className="summaryBanner p-0" >
<div className="summaryBannerOverlay">
               <Container className="text-center">
                    <Row>

     <Col lg={8} md={6} sm={12}>
          <Row id="countSection">
               <Col>
               <Zoom top>
               <FontAwesomeIcon className="iconProject" icon={faGlobe} color="white"/>
               <h1 className="countNumber">
               
               <CountUp start={0} end={3500}>
  {({ countUpRef, start }) => (
     <VisibilitySensor onChange={start} delayedCall>
      <span ref={countUpRef} />
      </VisibilitySensor>   
  )}
</CountUp>  
 </h1> </Zoom>
               <h4 className="countTitle">Ürün Sayısı</h4>
               <div className="bottomSummary"></div>
               </Col>

               <Col>
               <Zoom top>
               <FontAwesomeIcon className="iconProject" icon={faLaptop} color="white"/>
               <h1 className="countNumber">
               <CountUp start={0} end={22}>
  {({ countUpRef, start }) => (
     <VisibilitySensor onChange={start} delayedCall>
      <span ref={countUpRef} />
      </VisibilitySensor>   
  )}
</CountUp>  
               </h1></Zoom>
               <h4 className="countTitle">AR-GE Projesi</h4>
               <div className="bottomSummary"></div>
               </Col>

               <Col>
               <Zoom top>
               <FontAwesomeIcon className="iconProject" icon={faStar} color="white"/>
               <h1 className="countNumber">
               <CountUp start={0} end={7}>
  {({ countUpRef, start }) => (
     <VisibilitySensor onChange={start} delayedCall>
      <span ref={countUpRef} />
      </VisibilitySensor>   
  )}
</CountUp>   </h1> </Zoom>
               <h4 className="countTitle">Başvuruya Açık Staj Alanı</h4>
               <div className="bottomSummary"></div>

               
               </Col>


          </Row>
     </Col>

 

     <Col lg={4} md={6} sm={12}>
                
     <Card className="workCard" >
 
  <Card.Body>
    <Card.Title className="cardTitle">Nasıl Çalışıyoruz ?</Card.Title>
    <Card.Text>
      <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />  Donanım-Yazılım Argüman Toplama</p>
      
      <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />  Sistem Analizi</p>
      <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />  Yazılım Kodlama Testi</p>
      <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />  Uygulama</p>
      </Card.Text>
    
      </Card.Body>
    </Card>

     </Col>
     
   </Row>

  </Container> 
  </div>
</Container>

</Fragment>

          )
     }
}

export default Summary