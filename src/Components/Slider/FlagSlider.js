import React from 'react'
import Marquee from "react-fast-marquee";
import './Slider.css'
import flg1 from '../../images/sliderIMG/flgs/flg1.png';
import flg2 from '../../images/sliderIMG/flgs/flg2.png';
import flg3 from '../../images/sliderIMG/flgs/flg3.png';
import flg4 from '../../images/sliderIMG/flgs/flg4.png';
import flg5 from '../../images/sliderIMG/flgs/flg5.png';
import flg6 from '../../images/sliderIMG/flgs/flg6.png';
import flg7 from '../../images/sliderIMG/flgs/flg7.png';
import flg8 from '../../images/sliderIMG/flgs/flg8.png';
import flg9 from '../../images/sliderIMG/flgs/flg9.png';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FadeIn } from '../../Varient/Varient'

function FlagSlider() {
    return (
        <div className='Slideee'>
        <Container>
            <div className='marqueeSlide1' >
            <motion.h1
            variants={FadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
                once: true, amount: 0.3
            }}
            transition={{ type: 'tween' }}
            >Payment Methods</motion.h1>
            <Marquee pauseOnHover={false} speed={50} gradient={true} gradientWidth={50} >

                <div className='marqueeSlide'>
                    <img src={flg1} alt='flag' />
                </div>
                <div className='marqueeSlide'>
                    <img src={flg2} alt='flag' />
                </div>
                <div className='marqueeSlide'>
                    <img src={flg3} alt='flag' />
                </div>
                <div className='marqueeSlide'>
                    <img src={flg4} alt='flag' />
                </div>
                <div className='marqueeSlide'>
                    <img src={flg5} alt='flag' />
                </div>
                <div className='marqueeSlide'>
                    <img src={flg6} alt='flag' />
                </div>

                <div className='marqueeSlide'>
                    <img src={flg7} alt='flag' />
                </div>
                <div className='marqueeSlide'>
                    <img src={flg8} alt='flag' />
                </div>
                <div className='marqueeSlide'>
                    <img src={flg9} alt='flag' />
                </div>
            </Marquee>
            </div>
        </Container>
        </div>
    )
}

export default FlagSlider