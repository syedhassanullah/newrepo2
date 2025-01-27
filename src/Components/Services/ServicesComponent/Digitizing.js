import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import DegitizingData from '../../../DataFile/ServicesData/DegitizingData'
import Process from '../../Process'

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
            </Container>
            <Process/>
            <LogoSlider />
        </MainLayout>
    )
}

export default Digitizing