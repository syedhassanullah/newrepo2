import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Cimg from '../images/MainLogo/Untitled-2.png'
import { motion } from 'framer-motion'
import { FadeIn } from '../Varient/Varient'

function ContactSec() {

  return (
    <>
    <div className='cccc'>
      <Container>
        <div className='ContactForm section-padding'>

          <Row >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <Col md={6} >
                <motion.div 
                 variants={FadeIn('left', 0.2)}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{
                   once: false, amount: 0.3
                 }}
                 transition={{ type: 'tween' }}
                 className='component-heading'>......
                  <h1
                   
                  >CONTACT US</h1>
                  {/* <h1>Bayond Digitizing</h1> */}
                </motion.div>
                <ContactForm />
              </Col>
              <Col md={6}>
                <motion.div className='cformimg'
                 variants={FadeIn('right', 0.2)}
                 initial="hidden"
                 whileInView={'show'}
                 viewport={{
                   once: false, amount: 0.3
                 }}
                 transition={{ type: 'tween' }}>
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