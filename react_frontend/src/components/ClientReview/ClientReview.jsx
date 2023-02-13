import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import {faCircleArrowDown} from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ClientReview extends Component {
  constructor(){
    super();
    this.state={
         myData:[],
        
    }
   }

   componentDidMount(){
    RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
         this.setState({myData:result});
    }) 
  }



 

   
      render() {
        const settings = {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 3,
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500
        };

        const MyList = this.state.myData;
        const MyView = MyList.map(MyList=>{     //foreach
           
           return   <div>

           <Row className="text-center justify-content-center">
               <Col lg={6} md={6} sm={12}>
                   <img className="circleImg" src={MyList.client_img} />

                   <h2 className='reviewName'>{MyList.client_title}</h2>
                    <p className='reviewDescription'>{MyList.client_description}</p>
               </Col>
           </Row>
           </div>
        })   
    
    return (
        <Fragment>
            <Container fluid={true} className="siderBack text-center">
            <h1 className='reviewMainTitle'>EKİBİMİZLE TANIŞIN</h1>
              <div className="reviewbottom"></div>

              <Slider ref={slider => (this.slider = slider)} {...settings}>
               

              
                {MyView}

                </Slider>
               
            </Container>
            
        </Fragment>
    )
  }
}

export default ClientReview