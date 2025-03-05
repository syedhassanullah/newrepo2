import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import HatsAndBeaniesData from '../../../DataFile/ServicesData/HatsAndBeaniesData'
import Process from '../../Process/processHats'
import digi from '../../../images/ServiceShowsIMG/hello.jpg'
import { Row, Col } from 'react-bootstrap'

function HatsAndBeanies() {
    return (
        <MainLayout>
            <div className='heroother'>
                <Container>
                    <h1>Hats And Bean</h1>
                </Container>
            </div>

            <Container>
               
                <div className='ServicesDetailcard'>
                    {HatsAndBeaniesData?.map((data) => {
                        return (
                            <div className="card" key={data.id}>
                                <h3>{data.name}</h3>
                                <p>{data.description}</p>
                            </div>
                        );
                    })}
                </div>
                <Row className='servicedesc d-flex flex-wrap align-items-center justify-content-center'>

                    <Col md={6} style={{padding:'0px'}}>
                        <div className='sDescImg '>
                            <img src={digi} alt='img' />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='sDesctext'>
                            <h1>
                            Hats & Beanies</h1>
                            <p>Make a statement with custom-embroidered hats and beanies. Whether for a brand, event, or personal style, we deliver premium embroidery that stands out and lasts.</p>
                        </div>
                    </Col>

                </Row> 
            </Container>
            <Process />
            <LogoSlider />
        </MainLayout>
    )
}

export default HatsAndBeanies