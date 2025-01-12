import React from 'react'
import { Container } from 'react-bootstrap'
import homeImage from '../Embroidery-Landing-Page-1-Parrot-600x600-TinyPNG-Compressed2.png'
import { motion } from 'framer-motion';
import {FadeIn} from '../Varient/Varient'


function Hero() {
    return (
        <>
            <div className='hero'>
                <Container>
                    <div className='hero-comp ' >
                        <motion.div
                            variants={FadeIn('left',0.2)}
                            initial= "hidden"
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7
                            }}
                            transition={{ type: 'tween'}}

                         className='hero-text col-md-6' >
                            <h3>Byond Digitizing <br />Agency</h3>
                            <h1>We are working on </h1>
                            <span className='chngecontent'></span>
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ cursor:'pointer',padding: '15px', backgroundColor: 'white', color: 'red', width: '250px', textAlign: 'center', marginTop: '30px' }}
                            >
                                GET STARTED
                            </motion.div>
                        </motion.div>
                        <div className='about-image-sec col-md-4 heroimg' md={6} sm={12}>
                            <img src={homeImage} alt='HERO' className='about-image img-fluid' ></img>
                        </div>
                    </div>

                </Container>
            </div>
        </>
    )
}

export default Hero