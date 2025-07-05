import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Col, Container, Row } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import DegitizingData from '../../../DataFile/ServicesData/DegitizingData'
import Process from '../../Process/Process'
import digi from '../../../images/ServiceShowsIMG/Capture.webp'
import { motion } from 'framer-motion';
import { FadeUp } from '../../../Varient/Varient2';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import img1 from './use ing.jpg'
import img2 from './use iimg.jpg'
import { useNavigate } from 'react-router-dom'


function Digitizing() {

    const navigate = useNavigate();

    const handleCardClick = (data) => {
        navigate(`/portfolio?digitizing=${data}`); 
    };

    return (
        <MainLayout>
            <div className='herootherservice heroimage2'>
                <Container>
                    <h1>Digitizing</h1>
                </Container>
            </div>

            <Container>


                <div className='ServicesDetailcard'>
                    {DegitizingData?.map((data) => {
                        return (
                            <motion.div
                                variants={FadeUp(5.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.9 }}
                                transition={{
                                    type: 'tween',
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.27)',
                                    rotate: -3,
                                }} className="card" key={data.id}>
                                <div className='smg'> <img src={data.image} alt='img' /></div>
                                <div>
                                    <h3>{data.name}</h3>
                                    <p>{data.description}</p>
                                    <div className='servicebtncard'>
                                        <p onClick={() => handleCardClick(data.pname)}>see picture</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>



                <Row className='servicedesc d-flex flex-wrap align-items-center justify-content-center'>

                    <Col md={6} style={{ padding: '0px' }}>
                        <div className='sDescImg '>
                            {/* <img src={digi} alt='img' /> */}
                            <ImgComparisonSlider hover="hover" style={{ height: '70%' }}>
                                <img slot="first" width="100%" src={img1} alt="Before" />
                                <img slot="second" width="100%" src={img2} alt="After" />
                            </ImgComparisonSlider>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='sDesctext'>
                            <h1>Digitizing</h1>
                            <p>At Beyond Digitizing, we specialize in transforming your artwork into high-quality embroidery files. Our expert team ensures precision, clarity, and efficiency, making your designs stitch perfectly on any fabric.
                            </p>
                        </div>
                    </Col>

                </Row>





            </Container>
            <Process />
            <LogoSlider />
        </MainLayout>
    )
}

export default Digitizing