import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import { Container } from 'react-bootstrap';
import LogoSlider from '../../Slider/LogoSlider';
import './ServicesDetail.css'
import PatchesData from '../../../DataFile/ServicesData/PatchesData';
import Process from '../../Process/ProcessPatches';
import digi from '../../../images/ServiceShowsIMG/Embroidered-Patches.jpg'
import { Row, Col } from 'react-bootstrap'

function Patches() {

    console.log(PatchesData)
    return (
        <MainLayout>
            <div className='heroother'>
                <Container>
                    <h1>Patches</h1>
                </Container>
            </div>

            <Container>
                <div className="ServicesDetailcard">
                    {PatchesData?.map((data) => (
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
        <h1>Patches</h1>
        <p>Create custom embroidered patches with unmatched quality and detail. Whether for branding, uniforms, or personal use, our patches are designed to be durable, vibrant, and easy to apply.
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

export default Patches;
