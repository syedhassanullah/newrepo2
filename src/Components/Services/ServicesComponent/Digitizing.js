import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Col, Container, Row } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import DegitizingData from '../../../DataFile/ServicesData/DegitizingData'
import Process from '../../Process/Process'

function Digitizing() {
    return (
        <MainLayout>
            <div className='heroother'>
                <Container>
                    <h1>Digitizing</h1>
                </Container>
            </div>

            <Container>
                <div className='ServicesDetailcard'>
                    {DegitizingData?.map((data) => {
                        return (
                            <div className="card" key={data.id}>
                                <h3>{data.name}</h3>
                                <p>{data.description}</p>
                            </div>
                        );
                    })}
                </div>


                <Row className='servicedesc'>

                    <Col md={6} style={{ padding: '0px' }}>
                        <div className='sDescImg'></div>
                    </Col>
                    <Col>
                        <div className='sDesctext'>
                            <h1>Digitizing</h1>
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