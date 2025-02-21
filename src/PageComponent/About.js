import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import AboutSec from '../Components/AboutSec'
import ContactSec from '../Components/ContactSec'
import LogoSlider from '../Components/Slider/LogoSlider'
import { motion } from 'framer-motion'
import { FadeIn } from '../Varient/Varient'
import ClientReview from '../Components/ClientReview/ClientReview'
import Counter from '../Components/Counter/Counter'
import CountrySlider from '../Components/Slider/CountrySlider'
export default function About() {
  return (
    <MainLayout>
      <div className='heroother'>
        <Container>
          <motion.h1
            variants={FadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false, amount: 0.3
            }}
            transition={{ type: 'tween' }}
          >ABOUT US</motion.h1>
        </Container>
      </div>
      <AboutSec />
      <Counter/>
      <CountrySlider/>
      <ClientReview/>
      <ContactSec />
      
      <LogoSlider />
    </MainLayout>
  )
}



