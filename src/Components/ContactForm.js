import React, { useState } from 'react'
import { Alert, Stack, TextField } from '@mui/material'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import '../App.css'
// import { message } from 'antd';


// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1fbb00', 
//     },
//   },

// });




function ContactForm() {


  const getPrimaryColorFromCSS = () => {
    // Read the primary color from the CSS root
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-color')
      .trim(); // Removing any extra whitespace
  };

  // Get the primary color from the CSS file
  const defaultColor = getPrimaryColorFromCSS(); // This will get the value of --primary-color from CSS

  // Define Material UI theme with the primary color from CSS
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: defaultColor, // Use the color from the CSS variable
      },
    },
  });
  const [formData,SetFormData] = useState({
    firstName:'',
    lastname:'',
    contact:'',
    email:'',
    message:''
  })

  const getValues = (e) =>{
    const {name , value} = e.target;
    SetFormData({
      ...formData,
      [name]: value,
    })
  }

  const Clickme = (e) =>{
    e.preventDefault();
    
    if(formData.firstName == '' || formData.lastname == '' || formData.email == '' || formData.contact ){
      // toast.error("Please fill in all the fields.");
      // return;
  }

  const data ={
    ...formData
  }
  // try {
  //   const response = await fetch('https://script.google.com/macros/s/AKfycbyR46UvNx_orRyHKO7OGc556p1QI6HewdmzpFI19Wdtk1C0nLicqxj7q-p166Nd_F-r/exec', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',  // Ensure Content-Type is application/json
  //     },
  //     body: JSON.stringify(data),
  //     mode: 'no-cors'
  //   });

  //   const result = await response;


  //   if (result) {
  //     console.log('send data:', response.data);
  //     toast.success("Your Applications send Successfully", {
  //       position: 'top-center'
  //     });
  //   } else {
  //     console.error('Error sending data:', result);
  //     toast.error(`${result.error}`, {
  //       position: 'top-center'
  //     });
  //   }

  // } catch (error) {
  //   console.error('Error:', error);
  // }


  console.log(data);
}


  return (

    <>
            {/* <div onClick={Clickme} style={{backgroundColor:'red'}}>hasssan</div> */}

      <ThemeProvider theme={darkTheme}>
        <div className='cform' >
          <div style={{ marginBottom: '30px' }}>
            <h2>Contact Us</h2>
          </div>
          <Stack spacing={3}>
            <Stack direction='row' spacing={2}>
              <TextField label='First Name' variant='outlined' size='small' className='cinput' onChange={getValues} name='firstName'/>
              <TextField label='Last Name' variant='outlined' size='small' className='cinput' onChange={getValues} name='lasttname'/>
            </Stack>
            <Stack direction='row' spacing={2}>
              <TextField label='Phone' variant='outlined' size='small' className='cinput' onChange={getValues} name='contact'/>
              <TextField label='Email' variant='outlined' size='small' className='cinput' onChange={getValues} name='email'/>
            </Stack>
            <Stack direction='row' >
              <TextField label='Message' variant='outlined' size='small' className='cinputm' fullWidth multiline rows={4} onChange={getValues} name='message'/>
            </Stack>
          </Stack>
          <div style={{ right: '0px', textAlign: 'end', marginTop: '30px' }} >
            
            <Button variant="contained" size='small' onClick={Clickme}>Submit Now</Button>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default ContactForm

