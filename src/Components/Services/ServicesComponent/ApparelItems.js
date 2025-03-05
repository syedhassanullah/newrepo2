import React from 'react'
import { Row, Col } from 'react-bootstrap'
import MainLayout from '../../../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import ApparelItemsData from '../../../DataFile/ServicesData/ApparelItemsData'
import Process from '../../Process/ProcessApperal'
import digi from '../../../images/ServiceShowsIMG/flatlay-outfit-travel.jpg'
function ApparelItems() {
    return (
        <MainLayout>
            <div className='heroother'>
                <Container>
                    <h1>Apparel Items</h1>
                </Container>
            </div>

            <Container>
                
                <div className='ServicesDetailcard'>
                    {ApparelItemsData?.map((data) => {
                        return (
                            <div className="card" key={data.id}>
                                <h3>{data.name}</h3>
                                <p>{data.description}</p>
                            </div>
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