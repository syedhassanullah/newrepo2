
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
                                <h2>About Beyond Digitizing</h2>
                                <div className='footerLinks'>
                                    {/* <p>We specialize in transforming your logos and images into high-quality embroidery designs. Our expert team ensures precision in every stitch, delivering flawless results that bring your vision to life. Trust us to make your brand stand out with exceptional embroidery.
                                    </p> */}
                                    <p>We specialize in turning logos and images into precise, high-quality embroidery designs.
                                    Our expert team ensures every design is crafted with care and precision.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='footer-QuickLinks'>
                                <h3>Services</h3>
                                <div className='footerLinks'>
                                    <MotionLink to={'/services/digitizing'}>Digitizing</MotionLink>
                                    <MotionLink to={'/services/patches'}>Patche</MotionLink>
                                    <MotionLink to={'/services/vector'}>Vector</MotionLink>
                                    <MotionLink to={'/services/hoodie'}>Hoodies</MotionLink>
                                    <MotionLink to={'/services'}>Services</MotionLink>
                                    <MotionLink to={'/'}>Home</MotionLink>

                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='footer-QuickLinks'>
                                <h3>Quick Links</h3>
                                <div className='footerLinks'>
                                    <MotionLink to={'/'}>Home</MotionLink>
                                    <MotionLink to={'/about'}>About</MotionLink>
                                    <MotionLink to={'/portfolio'}>Portfolio</MotionLink>
                                    <MotionLink to={'/contact'}>Contact</MotionLink>
                                    <MotionLink to={'/services'}>Services</MotionLink>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className='footer-QuickLinks'>
                            <div style={{ width: '100%' }}>
                                {/* <h3>Our Address</h3> */}
                                <div className='AddressLinks'>
                                    <h6>15 Laurel pl, farmingville 11738 NY</h6>
                                    <h6>+1-719-900-4662</h6>
                                    <h6>beyonddigitizing7@gmail.com</h6>
                                    <h6>Working Hours: 10:00 - 18:00 GST</h6>
                                </div>
                                <div style={{paddingTop:'40px'}}><Icons /></div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={12}>
                        <div style={{ borderTop: '1px solid white', textAlign: 'end', color: 'white' ,padding:'15px 0px'}}>
                        © 2025 Beyound Digitizing | All Rights Reserved | beyonddigitizing.com
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer