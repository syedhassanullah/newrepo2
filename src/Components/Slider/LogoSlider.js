import React from 'react'
import Marquee from "react-fast-marquee";
import './Slider.css'
import soft1 from '../../images/sliderIMG/soft/soft1.png.webp'
import soft2 from '../../images/sliderIMG/soft/soft2.png.webp'
import soft3 from '../../images/sliderIMG/soft/soft3.png.webp'
import soft4 from '../../images/sliderIMG/soft/soft4.png.webp'
import soft5 from '../../images/sliderIMG/soft/soft5.png.webp'
import soft6 from '../../images/sliderIMG/soft/soft6.png.webp'
import soft7 from '../../images/sliderIMG/soft/soft7.png.webp'
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FadeIn } from '../../Varient/Varient'

function FlagSlider() {
    return (
        <div >
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
                        >Software We Use</motion.h1>
            <Marquee pauseOnHover={false} speed={50} gradient={true} gradientWidth={70} direction={"right"}>

                <div className='marqueeSlide' style={{paddingTop:'23px'}}>
                    <img src={soft1} alt='flag' />
                </div>
                <div className='marqueeSlide' style={{paddingTop:'23px'}}>
                    <img src={soft2} alt='flag' />
                </div>
                <div className='marqueeSlide' style={{paddingTop:'23px'}}>
                    <img src={soft3} alt='flag' />
                </div>
                <div className='marqueeSlide' style={{paddingTop:'23px'}}>
                    <img src={soft4} alt='flag' />
                </div>
                <div className='marqueeSlide' style={{paddingTop:'23px'}}>
                    <img src={soft5} alt='flag' />
                </div>
                <div className='marqueeSlide' style={{paddingTop:'23px'}}>
                    <img src={soft6} alt='flag' />
                </div>
                <div className='marqueeSlide' style={{paddingTop:'23px'}}>
                    <img src={soft7} alt='flag' />
                </div>
            </Marquee>
            </div>
        </Container>
        </div>
    )
}

export default FlagSlider