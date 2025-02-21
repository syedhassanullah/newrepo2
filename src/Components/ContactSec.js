import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Cimg from '../images/MainLogo/Untitled-2.png'
import { motion } from 'framer-motion'
import { FadeIn } from '../Varient/Varient'
import { ImLocation } from "react-icons/im";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdEmail } from "react-icons/md";


function ContactSec() {

  return (
    <>
      <div className='cccc'>
        <Container>
          <div className='ContactForm section-padding'>
          <motion.div
                    variants={FadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{
                      once: true, amount: 0.3
                    }}
                    transition={{ type: 'tween' }}
                    className='component-heading'>......
                    <h1

                    >CONTACT US</h1>
                    {/* <h1>Bayond Digitizing</h1> */}
                  </motion.div>
            <Row >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                <Col md={6} >
                  
                  <ContactForm />
                </Col>
                <Col md={6}>
                  <motion.div className='cformimg'
                    variants={FadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{
                      once: true, amount: 0.3
                    }}
                    transition={{ type: 'tween' }}>
                    <div style={{ display: 'flex', alignItems: 'center', }}><h2><ImLocation /></h2>
                      <div style={{ paddingLeft: '20px' }}>
                        <h5>Address</h5>
                        <p>218 W Colorado Ave #104, Colorado Springs, CO 80903, United States</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', }}><h2><MdPermPhoneMsg /></h2>
                      <div style={{ paddingLeft: '20px' }}>
                        <h5>Contact</h5>
                        <p>+1-719-900-4662</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', }}><h2><MdEmail /></h2>
                      <div style={{ paddingLeft: '20px' }}>
                        <h5>Email</h5>
                        <p>beyonddigitizing7@gmail.com</p>
                      </div>
                    </div>
                    <img src={Cimg} alt='has' />
                  </motion.div>
                </Col>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ContactSec

// import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import { Stack, TextField } from '@mui/material'
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Cimg from '../images/images/jeremy-foster-H2rZNMZokVA-unsplash.jpg'


// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#a10000', // Set primary color to red (you can change this to any red hex code)
//     },
//   },
//   // components: {
//   //   // Customize TextField styles
//   //   MuiTextField: {
//   //     styleOverrides: {
//   //       root: {
//   //         '& .MuiInput-underline:before': {
//   //           borderBottomColor: '#b8b8b8', // Change the line color to red on focus
//   //         },
//   //         '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
//   //           borderBottomColor: '#b8b8b8', // Change the line color to red on hover
//   //         },
//   //         '& .MuiInput-underline.Mui-focused:before': {
//   //           borderBottomColor: '#b8b8b8', // Change the line color to red when focused
//   //         },
//   //       },
//   //     },
//   //   },
//   // },

// });
// function ContactForm() {

//   return (
//     <>
//       <div className='ContactForm section-padding'>
//           <Container>
//             <h1>Contact Us</h1>
//             <Row >
//               <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent:'space-between' }}>
//                 <Col md={7}>
//                   <div className='cformimg'>
//                     <img src={Cimg} alt='has' />
//                   </div>
//                 </Col>
//                 <Col md={5}>
//
//                 </Col>
//               </div>
//             </Row>
//           </Container>
//       </div>
//     </>
//   )
// }

// export default ContactForm