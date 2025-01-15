import React from 'react'
import Marquee from "react-fast-marquee";
import './Slider.css'
import soft1 from '../../images/sliderIMG/soft/soft1.png.png'
import soft2 from '../../images/sliderIMG/soft/soft2.png.png'
import soft3 from '../../images/sliderIMG/soft/soft3.png.png'
import soft4 from '../../images/sliderIMG/soft/soft4.png.png'
import soft5 from '../../images/sliderIMG/soft/soft5.png.png'
import soft6 from '../../images/sliderIMG/soft/soft6.png.png'
import soft7 from '../../images/sliderIMG/soft/soft7.png.png'
import { Container } from 'react-bootstrap';

function FlagSlider() {
    return (
        <Container>
            <div className='marqueeSlide1' >
            <h1>Software We Use</h1>
            <Marquee pauseOnHover={true} speed={50} gradient={true} gradientWidth={70} direction={"right"}>

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
    )
}

export default FlagSlider