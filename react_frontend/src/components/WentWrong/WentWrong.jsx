import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ErrorIcon from '../../asset/image/error.svg';
 class WentWrong extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
                   <Row>
                     <Col>
                       <img className="errorIcon" src={ErrorIcon} />
                         
                     </Col>
                   </Row>
        </Container>
      </Fragment>
    )
  }
}

export default WentWrong