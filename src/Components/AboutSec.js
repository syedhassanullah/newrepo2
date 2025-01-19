import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import homeImage from '../Embroidery-Landing-Page-1-Parrot-600x600-TinyPNG-Compressed2.png'
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
                                            <h1>Beyond Digitizing</h1>
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
                                            {/* <p>At Beyond Digitizing, we believe that embroidery is an art, and every design tells a story. We have been at the forefront of providing world-class digitizing services, transforming your logos and images into beautiful, stitch-perfect works of art. Our skilled team of experienced digitizers uses advanced techniques to ensure every detail is captured with precision, bringing your ideas to life in the most vibrant way.</p> */}
                                            {/* <p>As a leading digitizing company, we pride ourselves on delivering high-quality, flawless designs that not only meet but exceed your expectations. Whether it’s a logo, custom design, or a unique project, we specialize in making each stitch count. Our goal is simple: to create exceptional embroidery designs that add value and dimension to your brand, apparel, or promotional material.</p> */}
                                            {/* <p>Beyond just digitizing – we aim to bring your vision to life, crafting designs that resonate with perfection. Join us in turning your creative concepts into stunning embroidered realities.</p> */}
                                            {/* <Button variant="contained" size='large'><Link to={'/about'} style={{ textDecoration: 'none', color: 'white' }}>Get More</Link></Button> */}
                                           
                                           <p>At Beyond Digitizing, we turn your ideas into stunning embroidery designs. Our experienced team uses advanced techniques to transform logos and images into precise, high-quality artwork. We focus on every stitch, ensuring your design is flawless and vibrant.</p>
                                           <p>As a trusted leader in the digitizing industry, we aim to bring your vision to life with perfection, making every project truly stand out. Let us help you create the perfect embroidered design that elevates your brand and captures attention.</p>
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className='mainButton2'
                                            >
                                               <Link to={'/about'} style={{ textDecoration: 'none', color: 'white' }}>Get More</Link>
                                            </motion.div>

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