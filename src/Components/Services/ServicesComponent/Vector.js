import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import { Container } from 'react-bootstrap';
import LogoSlider from '../../Slider/LogoSlider';
import './ServicesDetail.css';
import VectorData from '../../../DataFile/ServicesData/VectorData';
import Process from '../../Process/ProcessVector';
import digi from '../../../images/ServiceShowsIMG/vectorlion.webp'
import { Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { FadeUp } from '../../../Varient/Varient2';

function Vector() {
    return (
        <MainLayout>
            <div className='herootherservice heroimage6'>
                <Container>
                    <h1>Vector Services</h1>
                </Container>
            </div>

            <Container>
                <div className="ServicesDetailcard">
                    {VectorData?.map((data) => (
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
                            }}
                            className="card" key={data.id}>
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                        </motion.div>
                    ))}
                </div>
                <Row className=' servicedesc d-flex flex-wrap align-items-center justify-content-center'>

                    <Col md={6} style={{ padding: '0px' }}>
                        <div className='sDescImg '>
                            <img src={digi} alt='img' />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='sDesctext'>
                            <h1>Vector</h1>
                            <p>Convert your raster images into crisp, scalable vector files with our professional vectorization service. Ideal for printing, engraving, and embroidery, we ensure clean lines and sharp details in every design.

                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Process />
            <LogoSlider />
        </MainLayout>
    );
}

export default Vector;
