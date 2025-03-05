import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Col, Container, Row } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import DegitizingData from '../../../DataFile/ServicesData/DegitizingData'
import Process from '../../Process/Process'
import digi from '../../../images/ServiceShowsIMG/Capture.PNG'

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
                <Row className='servicedesc d-flex flex-wrap align-items-center justify-content-center'>

                    <Col md={6} style={{padding:'0px'}}>
                        <div className='sDescImg '>
                            <img src={digi} alt='img' />
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