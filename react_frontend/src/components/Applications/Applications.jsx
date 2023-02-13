import React, { Component } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
//.
class Courses extends Component {

  constructor(){
    super();
    this.state={
      myData:[]
    }
  }

  componentDidMount(){
    RestClient.GetRequest(AppUrl.ApplicationHome).then(result=>{
      this.setState({myData:result});
    })
  } 



  render() {
    const MyList = this.state.myData;
    const MyView = MyList.map(MyList=>{     //foreach
       
       return  <Col lg={6} md={12} sm={12}>
        <Row>
       <Col lg={6} md={6} sm={12} className="p-2">
       <img className="courseImg" src={MyList.small_img}></img>
     </Col>

     <Col lg={6} md={6} sm={12}>

        <h5 className="serviceName">{MyList.short_title}</h5>
        <p className='serviceDescription'>{MyList.short_description}</p>
        <Nav.Link  link href={"/applicationdetails/"+MyList.id+"/"+MyList.short_title}><a className='courseViewMore float-left'> Detay Görüntüle </a></Nav.Link>
     </Col> 
     </Row>

    </Col>         
   
    })
    return (
      <fragment>
        <Container  className="recentProject text-center">
            <h1 className='serviceMainTitle'>STAJ İMKANLARI</h1>
            <div className='bottom'></div>

              <Row>
               {MyView}
               
                
              </Row>

          </Container>
      </fragment>
    )
  }
}

export default Courses