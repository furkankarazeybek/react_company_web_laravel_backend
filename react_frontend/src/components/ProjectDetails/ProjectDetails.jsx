import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import {Button, Col, Container, Row } from 'react-bootstrap'
import projectImg from '../../asset/image/project_detail.png';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';

class ProjectDetails extends Component {

  constructor(props){
    super();
    this.state={
      MyProjectId:props.id,
      img_two:"...",
      projectname:"...",
      project_description:"...",
      project_features:"...",
      live_preview:"..."

    }
  }
  componentDidMount(){


    RestClient.GetRequest(AppUrl.ProjectDetails+this.state.MyProjectId).then(result=>{
      this.setState({
        img_two:result[0]['img_two'],
        projectname:result[0]['project_name'],
        project_description:result[0]['project_description'],
        project_features:result[0]['project_features'],
        live_preview:result[0]['live_preview'],

    
      });
    })
  } 

  render() {
    return (
       <Fragment>
           <Container className="mt-5">
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <div className="about-thumb-wrap after-shape">
                        <img src={this.state.img_two} />
                    </div>
                    
                </Col>

                <Col></Col>
      
    
                <Col lg={4} md={12} sm={12} className="mt-5">
                  <div className="projectDetails">
                    <h1 className="projectDetailsText">{this.state.projectname}</h1>
                    <p className="detailsName">
                      {ReactHtmlParser(this.state.project_description)}</p>
                    

                    <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> {ReactHtmlParser(this.state.project_features)} </p>

                    <Button variant="info" href={this.state.live_preview}> Live Preview</Button>
                  </div>
                </Col>
            </Row>
           </Container>

          
       </Fragment>

   
    )
  }
}

export default ProjectDetails