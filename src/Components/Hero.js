import React from 'react'
import { Container } from 'react-bootstrap'
import homeImage from '../Embroidery-Landing-Page-1-Parrot-600x600-TinyPNG-Compressed2.png'
import { motion } from 'framer-motion';
import { FadeIn } from '../Varient/Varient'
import MainButton from './Buttons/MainButton';


function Hero() {
    return (
        <>
            <div className='hero'>
                <Container>
                    <div className='hero-comp ' >
                        <motion.div
                            variants={FadeIn('left', 0.2)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{
                                once: false, amount: 0.7
                            }}
                            transition={{ type: 'tween' }}

                            className='hero-text col-md-8' >
                            <h3>Byond Digitizing <br />Agency</h3>
                            <h1>We are working on </h1>
                            <span className='chngecontent'></span>
                            <MainButton/>
                        </motion.div>
                        <motion.div className='about-image-sec col-md-4 heroimg' md={6} sm={12}
                        variants={FadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{
                            once: false, amount: 0.7
                        }}
                        transition={{ type: 'tween' }}
                        >
                            <img src={homeImage} alt='HERO' className='about-image img-fluid' ></img>
                        </motion.div>
                    </div>

                </Container>
            </div>
        </>
    )
}

export default Hero