
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MotionLink from '../Varient/FooterVarient'
import Icons from './Icons'

function Footer() {
    return (
        <div className='footer'>
            <Container>
                <div className='itemsCol'>
                    <Row>
                        <Col md={4}>
                            <div className='About-footer'>
                                <h2>About</h2>
                                <p>Lorem fkjahskjasfjsafjkjfsakjas slhagjasng
                                    asfasjfasbfhjasbfsa asf aksjflkans lsafnsahf
                                    Asfjashbfkjbasbfkjhasbfkjbasjkbfjas
                                </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='footer-QuickLinks'>
                                <h2>Services</h2>
                                <div className='footerLinks'>
                                    <MotionLink to={'/'}>Home</MotionLink>
                                    <MotionLink to={'/about'}>About</MotionLink>
                                    <MotionLink to={'/portfolio'}>Portfolio</MotionLink>
                                    <MotionLink to={'/contact'}>Contact</MotionLink>
                                    <MotionLink to={'/services'}>Services</MotionLink>
                                    <MotionLink to={'/'}>Home</MotionLink>
                                    
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='footer-QuickLinks'>
                                <h2>Quick Links</h2>
                                <div className='footerLinks'>
                                    <MotionLink to={'/'}>Home</MotionLink>
                                    <MotionLink to={'/about'}>About</MotionLink>
                                    <MotionLink to={'/portfolio'}>Portfolio</MotionLink>
                                    <MotionLink to={'/contact'}>Contact</MotionLink>
                                    <MotionLink to={'/services'}>Services</MotionLink>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className='iconcol'>
                            <div style={{ width: '100%' }}>
                                
                                <div><Icons /></div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={12}>
                        <div style={{ borderTop: '2px solid white', textAlign: 'center', color:'white' }}>
                            <h3>Syed Hassan Ullah</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer