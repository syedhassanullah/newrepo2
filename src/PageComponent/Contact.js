import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Container } from 'react-bootstrap'
import ContactSec from '../Components/ContactSec'



function Contact() {
  return (
    <MainLayout>
    <div className='heroother'>
      <Container>
        <h1>Contact US</h1>
      </Container>
    </div>
    <ContactSec/>
  </MainLayout>
  )
}

export default Contact