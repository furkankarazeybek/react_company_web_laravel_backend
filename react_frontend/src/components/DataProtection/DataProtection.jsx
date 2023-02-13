import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';

class DataProtectDescription extends Component {

  constructor(){
    super();
    this.state={
        dataprotectdesc:"..."
    }


}

componentDidMount(){


  RestClient.GetRequest(AppUrl.Information).then(result=>{
    this.setState({dataprotectdesc:result[0]['data_protect']});
  })
  
} 

  render() {
    return (
      <Fragment>
        <Container className="mt-5">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h1 className="serviceName">Veri Koruma İlkeleri</h1>
                    <hr />
               <p className="serviceDescription">{ ReactHtmlParser(this.state.dataprotectdesc) }
                 
               </p>     

                </Col>
            </Row>
        </Container>


      </Fragment>

    )
  }
}

export default DataProtectDescription