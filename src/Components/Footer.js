
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MotionLink from '../Varient/FooterVarient'
import Icons from './Icons'
// import { Link } from 'react-router-dom'
import Paypal from '../images/MainLogo/Pay-with-paypal.png'
// import Whatsapp from '../images/MainLogo/whatsapplogo.png'
// import beyond from '../images/MainLogo/beyondDigitizing.png'

function Footer() {
    return (
        <div className='footer'>
            <Container>
                <div className='itemsCol'>
                    <Row>
                        <Col md={4}>
                            <div className='About-footer'>
                                <h1>About Beyond Digitizing</h1>
                                <div >
                                    {/* <p>We specialize in transforming your logos and images into high-quality embroidery designs. Our expert team ensures precision in every stitch, delivering flawless results that bring your vision to life. Trust us to make your brand stand out with exceptional embroidery.
                                    </p> */}
                                    <p>We specialize in turning logos and images into precise, high-quality embroidery designs.
                                        Our expert team ensures every design is crafted with care and precision.</p>
                                    <a href={'https://paypal.me/beyonddigitizing'} target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center' }}>
                                        <img src={Paypal} alt='helo' style={{ width: '15rem', border: '3px solid white', cursor: 'pointer' }} />
                                    </a>
                                    {/* <a href={'https://paypal.me/beyonddigitizing'} target="_blank" rel="noopener noreferrer">
                                        <img src={Whatsapp} alt='helo' style={{ width: '12rem' }} />
                                    </a> */}
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Col md={6}>
                                    <div className='footer-QuickLinks'>
                                        <h3>Services</h3>
                                        <div className='footerLinks'>
                                            <MotionLink to={'/services/digitizing'}>Digitizing</MotionLink>
                                            <MotionLink to={'/services/vector'}>Vector</MotionLink>
                                            <MotionLink to={'/services/patches'}>Custom Patches</MotionLink>
                                            <MotionLink to={'/services/promotional'}>Promotional Products</MotionLink>
                                            <MotionLink to={'/services/apparel-item'}>Apparel Items</MotionLink>
                                            <MotionLink to={'/services/hats-beanies'}>Hats & Beanies</MotionLink>

                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='footer-QuickLinks' >
                                        <h3>Quick Links</h3>
                                        <div className='footerLinks' >
                                            <MotionLink to={'/'}>Home</MotionLink>
                                            <MotionLink to={'/about'}>About</MotionLink>
                                            <MotionLink to={'/portfolio'}>Portfolio</MotionLink>
                                            <MotionLink to={'/contact'}>Contact</MotionLink>
                                            <MotionLink to={'/services/digitizing'}>Services</MotionLink>

                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                        <Col md={3} className='footer-QuickLinks'>
                            <div style={{ width: '100%' }}>
                                <h3>Our Address</h3>
                                <div className='AddressLinks'>
                                    {/* <div style={{width:'7rem',backgroundColor:'white'}} >
                                    <img src={beyond} alt='LOGO' style={{width:'100%'}}/>
                                    </div> */}
                                    <h6>218 W Colorado Ave #104, Colorado Springs, CO 80903, United States</h6>
                                    <h6>+1-719-900-4662</h6>
                                    <h6>beyonddigitizing7@gmail.com</h6>
                                    <h6>Working Hours: 10:00 - 18:00 GST</h6>
                                </div>
                                <div style={{ paddingTop: '40px' }}><Icons /></div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={12}>
                        <div className='f-line' >
                            © 2025 Beyound Digitizing | All Rights Reserved | beyonddigitizing.com
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer