import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'
import './ServicesDetail.css'
import PromotionalProductsData from '../../../DataFile/ServicesData/PromotionalProducts'
import Process from '../../Process/ProcessPromotional'
import digi from '../../../images/ServiceShowsIMG/pro.jpg'
import { Row, Col } from 'react-bootstrap'


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
                <Row className=' servicedesc d-flex flex-wrap align-items-center justify-content-center'>

<Col md={6} style={{padding:'0px'}}>
    <div className='sDescImg '>
        <img src={digi} alt='img' />
    </div>
</Col>
<Col md={6}>
    <div className='sDesctext'>
        <h1>Promotional Items</h1>
        <p>Boost your brand with customized promotional items like mugs, keychains, and tote bags. Our printing and embroidery services ensure high-quality branding that leaves a lasting impression.</p>
    </div>
</Col>
</Row>
            </Container>
            <Process/>
            <LogoSlider />
        </MainLayout>
    )
}

export default PromotionalProducts