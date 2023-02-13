import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import projectImg from '../../asset/image/project_detail.png';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';

class ApplicationDetails extends Component {

  constructor(props){
    super();
   


  }
  componentDidMount(){


    RestClient.GetRequest(AppUrl.ApplicationDetails).then(result=>{
      this.setState({
     
    
      });
    })
  } 

  render() {

    let LongTitle="";
    let LongDescription="";
    let TotalDuration="";
    let TotalLecture="";
    let TotalApplication="";
    let SkillAll="";
    let SmallImg="";

    let ApplicationDetailsArray = this.props.applicationAllData;
    
    if(ApplicationDetailsArray.length==1) {
      LongTitle = ApplicationDetailsArray[0]['long_title'];
      LongDescription = ApplicationDetailsArray[0]['long_description'];
      TotalDuration = ApplicationDetailsArray[0]['total_duration'];
      TotalLecture = ApplicationDetailsArray[0]['total_lecture'];
      TotalApplication = ApplicationDetailsArray[0]['total_application'];
      SkillAll = ApplicationDetailsArray[0]['skill_all'];
      SmallImg = ApplicationDetailsArray[0]['small_img'];




    
    }



    return (
      <Fragment>
        <Container>
            <Row>
                <Col lg={8} md={6} sm={12}>
                   <h1 className='appDetailsText'>{LongTitle} </h1>
                   <img className="appDetailsImg" src={SmallImg} />
                   <br></br><br></br>

                   <p className="appAllDescription">
                   {LongDescription}
                   </p>
                </Col>

                <Col lg={4} md={6} sm={12}>
                <div className="widget_feature">
                            <h4 className="widget-title text-center">Staj Detay Bilgileri</h4> 
                            <hr />                                
                            <ul>
                                <li><FontAwesomeIcon className='iconBullent' icon={faUser} /><span> Alınacak Stajyer Sayısı : </span> {TotalApplication} </li>
                                <li><FontAwesomeIcon className='iconBullent' icon={faClock} /><span> Staj Süresi : </span> {TotalDuration}</li>
                                <li><FontAwesomeIcon className='iconBullent' icon={faClipboard} /><span> Teknik Alanlar :</span> {TotalLecture}</li>
                                <li><FontAwesomeIcon className='iconBullent' icon={faClone} /><span> Deneyim: </span> {SkillAll}</li>
                              
                                <li><FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /><span> İlgili Mühendis: </span> Mustafa ARSLAN</li>
                            </ul>
                            <div class="price-wrap text-center">
                                <h5>Maaş: <span> -</span></h5>
                                <Button variant="warning">BAŞVUR</Button>
                               
                            </div>
                        </div>

         

                </Col>
            </Row>
        </Container>

        <Container>
          <Row>
            <Col lg={7} md={6} sm={12}>
               <div className="widget_feature">

               <h1 className='appDetailsText'> GENEL NİTELİKLER VE İŞ TANIMI </h1>
               <hr />
               <ul>
                 <li><FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Lorem ipsum dolor sit amet consectetur</li>

                 <li><FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Lorem ipsum dolor sit amet consectetur</li>

                 <li><FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Lorem ipsum dolor sit amet consectetur</li>

                 <li><FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Lorem ipsum dolor sit amet consectetur</li>
                 
               </ul>

               </div>
               
            </Col>
            
            <Col lg={5} md={6} sm={12}>
          
               <img id="stajImg" className="text-center" src={projectImg} />
            

            </Col>

          </Row>

        </Container>
      </Fragment>
    )
  }
}

export default ApplicationDetails