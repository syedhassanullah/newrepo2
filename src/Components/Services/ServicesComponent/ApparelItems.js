import React from 'react'
import { Row, Col } from 'react-bootstrap'
import MainLayout from '../../../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import ApparelItemsData from '../../../DataFile/ServicesData/ApparelItemsData'
import Process from '../../Process/ProcessApperal'
import digi from '../../../images/ServiceShowsIMG/flatlay-outfit-travel.webp'
import { motion } from 'framer-motion';
import { FadeUp } from '../../../Varient/Varient2';
function ApparelItems() {
    return (
        <MainLayout>
            <div className='herootherservice heroimage1'>
                <Container>
                    <h1>Apparel Items</h1>
                </Container>
            </div>

            <Container>
                
                <div className='ServicesDetailcard'>
                    {ApparelItemsData?.map((data) => {
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
                                <h3>{data.name}</h3>
                                <p>{data.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
                <Row className=' servicedesc d-flex flex-wrap align-items-center justify-content-center'>

                    <Col md={6} style={{padding:'0px'}}>
                        <div className='sDescImg '>
                            <img src={digi} alt='img' />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='sDesctext'>
                            <h1>Apparel-Item</h1>
                            <p>Enhance your wardrobe with customized apparel featuring high-quality embroidery and printing. From t-shirts to jackets, we bring your designs to life with precision and lasting impact.
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

export default ApparelItems