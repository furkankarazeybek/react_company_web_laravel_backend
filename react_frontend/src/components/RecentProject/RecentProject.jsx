import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
//.

class RecentProject extends Component {

  constructor(){
    super();
    this.state={
      myData:[]
    }
  }

  componentDidMount(){
    RestClient.GetRequest(AppUrl.ProjectHome).then(result=>{
      this.setState({myData:result});
    })
  } 

  render() {
    const MyList = this.state.myData;
    const MyView = MyList.map(MyList=>{     //foreach
       
       return  <Col lg={4} md={6} sm={12}>
       <Card className="projectCard">
         <Card.Img variant="top" src={MyList.img_one} />
         <Card.Body>
           <Card.Title className="serviceName">{MyList.project_name}</Card.Title>
           <Card.Text className="serviceDescription">{MyList.project_description}
           </Card.Text>
           <Button variant="primary"><Nav.Link className="link-style" link href={"/projectdetails/"+MyList.id+"/"+MyList.project_name} >Projeyi Görüntüle</Nav.Link> </Button>                  
         </Card.Body>
       </Card>
       </Col>
    })
    return (
       <Fragment>
          <Container  className="recentProject text-center">
            <h1 className='serviceMainTitle'>SON PROJELERİMİZ</h1>
            <div className='bottom'></div>

              <Row>
               {MyView}
               
                
              </Row>

          </Container>


       </Fragment>
    )
  }
}

export default RecentProject