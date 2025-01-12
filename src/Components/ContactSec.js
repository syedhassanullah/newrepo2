import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm'


function ContactSec() {

  return (
    <>
      
        <Container>
        <div className='ContactForm section-padding'>
        
          <Row >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <Col md={5} >
              <div className='component-heading'>.....
                  <h2>REACH US</h2>
                  {/* <h1>Bayond Digitizing</h1> */}
                </div>
              <ContactForm />
              </Col>
              <Col md={7}>
                <div className='cformimg'>
                  {/* <img src={Cimg} alt='has' /> */}
                </div>
              </Col>
            </div>
          </Row>
          </div>
        </Container>
      
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