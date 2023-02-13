import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';

class TermsDescription extends Component {

  constructor(){
    super();
    this.state={
        termsdesc:"..."
    }


}

componentDidMount(){


  RestClient.GetRequest(AppUrl.Information).then(result=>{
    this.setState({termsdesc:result[0]['terms']});
  })
  
} 
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
            <Col lg={12} md={12} sm={12}>
                    <h1 className="serviceName">Şartlar ve Koşullar</h1>
                    <hr />
               <p className="serviceDescription">
               { ReactHtmlParser(this.state.termsdesc) }
                 
                  
               </p>     

                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default TermsDescription