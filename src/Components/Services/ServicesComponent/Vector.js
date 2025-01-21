import React from 'react'
import MainLayout from '../../../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import LogoSlider from '../../Slider/LogoSlider'

function Vector() {
    return (
        <MainLayout>
            <div className='heroother'>
                <Container>
                    <h1>Vector</h1>
                </Container>
            </div>
            

            <LogoSlider />
        </MainLayout>
    )
}

export default Vector