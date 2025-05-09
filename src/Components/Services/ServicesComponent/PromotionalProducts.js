import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import PromotionalProductsData from '../../../DataFile/ServicesData/PromotionalProducts'
import Process from '../../Process/ProcessPromotional'
import digi from '../../../images/ServiceShowsIMG/pro.webp'
import { Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { FadeUp } from '../../../Varient/Varient2';


function PromotionalProducts() {
    return (
        <MainLayout>
            <div className='herootherservice heroimage5'>
                <Container>
                    <h1>Promotional Products</h1>
                </Container>
            </div>

            <Container>
                <div className='ServicesDetailcard'>
                    {PromotionalProductsData?.map((data) => {
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
                                }}
                                className="card" key={data.id}>
                                <div>
                                    <h3>{data.name}</h3>
                                    <p>{data.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                <Row className=' servicedesc d-flex flex-wrap align-items-center justify-content-center'>

                    <Col md={6} style={{ padding: '0px' }}>
                        <div className='sDescImg '>
                            <img src={digi} alt='img' />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='sDesctext'>
                            <h1>Promotional Items</h1>
                            <p>Boost your brand with customized promotional items like mugs, keychains, and tote bags. Our printing and embroidery services ensure high-quality branding that leaves a lasting impression.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Process />
            <LogoSlider />
        </MainLayout>
    )
}

export default PromotionalProducts