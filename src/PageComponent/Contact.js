import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import ContactSec from '../Components/ContactSec'
import FlagSlider from '../Components/Slider/FlagSlider';
import Counter from '../Components/Counter/Counter';



function Contact() {
  return (
    <MainLayout>
    <div className='heroother'>
      <Container>
        <h1>Contact US</h1>
      </Container>
    </div>
    <ContactSec/>
    <Counter/>
    <FlagSlider/>
  </MainLayout>
  )
}

export default Contact