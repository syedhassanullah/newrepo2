import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import ApparelItemsData from '../../../DataFile/ServicesData/ApparelItemsData'
import Process from '../../Process/Process'

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
            </Container>
            <Process/>
            <LogoSlider />
        </MainLayout>
    )
}

export default ApparelItems