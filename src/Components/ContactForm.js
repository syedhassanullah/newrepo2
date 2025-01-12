import React from 'react'
import { Stack, TextField } from '@mui/material'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import '../App.css'


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

  return (
    <>

      <ThemeProvider theme={darkTheme}>
        <div className='cform'>
          <div style={{ marginBottom: '30px' }}>
            <h2>Contact Us</h2>
          </div>
          <Stack spacing={3}>
            <Stack direction='row' spacing={2}>
              <TextField label='name' variant='outlined' size='small' className='cinput' />
              <TextField label='name' variant='outlined' size='small' className='cinput' />
            </Stack>
            <Stack direction='row' spacing={2}>
              <TextField label='name' variant='outlined' size='small' className='cinput' />
              <TextField label='name' variant='outlined' size='small' className='cinput' />
            </Stack>
            <Stack direction='row' >
              <TextField label='Message' variant='outlined' size='small' className='cinputm' fullWidth multiline rows={4} />
            </Stack>
          </Stack>
          <div style={{ right: '0px', textAlign: 'end', marginTop: '30px' }} >

            <Button variant="contained" size='small'>Submit Now</Button>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default ContactForm

