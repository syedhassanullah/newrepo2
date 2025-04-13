import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import ContactSec from '../Components/ContactSec2'
import FlagSlider from '../Components/Slider/FlagSlider';
import Counter from '../Components/Counter/Counter';
import { motion } from 'framer-motion'
import { FadeIn } from '../Varient/Varient'
import MeetourTeam from '../Components/Meetteam/MeetourTeam';


function Contact() {
  return (
    <MainLayout>
    <div className='heroother'>
      <Container>
      <motion.h1
            variants={FadeIn('left')}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false, amount: 0.3
            }}
            transition={{ type: 'tween' }}
          >CONTACT US</motion.h1>
      </Container>
    </div>
    <ContactSec/>
    <MeetourTeam/>
    <Counter/>
    <FlagSlider/>
  </MainLayout>
  )
}

export default Contact