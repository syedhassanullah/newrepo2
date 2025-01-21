import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import AboutSec from '../Components/AboutSec'
import ContactSec from '../Components/ContactSec'
import LogoSlider from '../Components/Slider/LogoSlider'



export default function About() {
  return (
    <MainLayout>
    <div className='heroother'>
      <Container>
        <h1>ABOUT US</h1>
      </Container>
    </div>
      <AboutSec/>
    
      <ContactSec/>
      <LogoSlider/> 
    </MainLayout>
  ) 
}



