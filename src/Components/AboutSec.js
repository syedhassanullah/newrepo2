import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import homeImage from '../Embroidery-Landing-Page-1-Parrot-600x600-TinyPNG-Compressed2.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn } from '../Varient/Varient'





function AboutSec() {
    return (
        <>
            <div className='about'>
                <Container >
                    <div className='section-padding '>
                        <Row>
                            <div className='aboutSec'>
                                <Col md={8} sm={12}>
                                    <div className='about-text '>
                                        <motion.div
                                            variants={FadeIn('left', 0.2)}
                                            initial="hidden"
                                            whileInView={'show'}
                                            viewport={{
                                                once: false, amount: 0.7
                                            }}
                                            transition={{ type: 'tween' }}


                                            className='component-heading'>.....
                                            <h2>WHO WE ARE</h2>
                                            <h1>Bayond Digitizing</h1>
                                        </motion.div>
                                        <motion.div
                                            variants={FadeIn('up', 0.2)}
                                            initial="hidden"
                                            whileInView={'show'}
                                            viewport={{
                                                once: false, amount: 0.3
                                            }}
                                            transition={{ type: 'tween' }}

                                        >
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                                            <Button variant="contained" size='large'><Link to={'/about'} style={{ textDecoration: 'none', color: 'white' }}>Get More</Link></Button>
                                        </motion.div>
                                    </div>
                                </Col>
                                <Col className='about-image-sec' md={4} sm={12}>
                                    <img src={homeImage} alt='about' className='about-image img-fluid' ></img>
                                </Col>

                            </div>
                        </Row>
                    </div>
                </Container >
            </div>
        </>
    )
}

export default AboutSec