import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Icons from './Icons'
function Footer() {
    return (
        <div className='footer section-padding'>
            <Container>
                <Row >
                    <Col md={4} >hassan</Col>
                    <Col md={4} >hassan</Col>
                    <Col md={4} className='iconcol'>
                    <div style={{width:'100%'}}>
                        <h2>hassan</h2>
                        <div><Icons/></div>
                    </div>
                    
                   
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer