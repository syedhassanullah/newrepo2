import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import PromotionalProductsData from '../../../DataFile/ServicesData/PromotionalProducts'
import Process from '../../Process/ProcessPromotional'

function PromotionalProducts() {
    return (
        <MainLayout>
            <div className='heroother'>
                <Container>
                    <h1>Promotional Products</h1>
                </Container>
            </div>

            <Container>
                <div className='ServicesDetailcard'>
                    {PromotionalProductsData?.map((data) => {
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

export default PromotionalProducts