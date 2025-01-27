import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import { Container } from 'react-bootstrap';
import LogoSlider from '../../Slider/LogoSlider';
import './ServicesDetail.css';
import VectorData from '../../../DataFile/ServicesData/VectorData';
import Process from '../../Process';

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
            </Container>
<Process/>
            <LogoSlider />
        </MainLayout>
    );
}

export default Vector;
