import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import HatsAndBeaniesData from '../../../DataFile/ServicesData/HatsAndBeaniesData'
import Process from '../../Process/Process'

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
            </Container>
            <Process/>
            <LogoSlider />
        </MainLayout>
    )
}

export default HatsAndBeanies