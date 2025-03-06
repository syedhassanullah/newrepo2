import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import { Container } from 'react-bootstrap';
import LogoSlider from '../../Slider/LogoSlider';
import './ServicesDetail.css';
import VectorData from '../../../DataFile/ServicesData/VectorData';
import Process from '../../Process/ProcessVector';
import digi from '../../../images/ServiceShowsIMG/vectorlion.PNG'
import { Row, Col } from 'react-bootstrap'


function Vector() {
    return (
        <MainLayout>
            <div className='heroother'>
                <Container>
                    <h1>Vector Services</h1>
                </Container>
            </div>

            <Container>
                <div className="ServicesDetailcard">
                    {VectorData?.map((data) => (
                        <div className="card" key={data.id}>
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                        </div>
                    ))}
                </div>
                <Row className=' servicedesc d-flex flex-wrap align-items-center justify-content-center'>

<Col md={6} style={{padding:'0px'}}>
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
<Process/>
            <LogoSlider />
        </MainLayout>
    );
}

export default Vector;
