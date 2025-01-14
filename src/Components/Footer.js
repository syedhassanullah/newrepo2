import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Icons from './Icons'
function Footer() {
    return (
        <div className='footer '>
            <Container>
                <Row >
                    <Col md={4} >
                    <h4>hello</h4>
                    <h4>hello</h4>
                    <h4>hello</h4>
                    <h4>hello</h4>
                    <h4>hello</h4>
                    
                    <h4>hello</h4>
                    </Col>
                    <Col md={4} >hello</Col>
                    <Col md={4} className='iconcol'>
                    <div style={{width:'100%'}}>
                        <h2>hello</h2>
                        <h2>hello</h2>
                        <h2>hello</h2>
                        <h2>hello</h2>
                        <h2>hello</h2>
                        <h2>hello</h2>
                        <div><Icons/></div>
                    </div>
                    
                   
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer