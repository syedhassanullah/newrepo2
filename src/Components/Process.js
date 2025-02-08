import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FadeIn } from '../Varient/Varient'
import { IoIosCloudUpload } from "react-icons/io";
import { GiPencilBrush } from "react-icons/gi";
import { FaTruckArrowRight } from "react-icons/fa6";
function Process() {
  return (
    <>
      <div className='Process'>
        <Container>
          <div className='section-padding'>
            <motion.div
              variants={FadeIn('left', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false, amount: 0.7
              }}
              transition={{
                type: 'tween', scale: 0.8,
              }}
              className='ServiceSecText component-heading'>........
              {/* <h4>OUR PROCESS</h4> */}
              <h1>OUR PROCESS</h1>
            </motion.div>

            <div className='process-container'>
              <div className='process-card'>
                <div className='process-csrd-logo'>
                  <h1><IoIosCloudUpload /></h1>
                </div>
                <h4>Submit Your Idea</h4>
                <p>Submit your logo, artwork, or design in any digital format, including JPEG, PNG, and PDF.</p>
              </div>
              <div className='process-card'>
                <div className='process-csrd-logo'>
                  <h1><GiPencilBrush /></h1>
                </div>
                {/* <h4>Fast Digitization & Approval</h4> */}
                <h4>Digitizing & Preview</h4>
                <p>Our skilled team will transform your design into a professional embroidery file. You’ll receive a preview for approval and we’ll fine-tune it to perfection.</p>
                {/* <p>Our team will convert your design into an embroidery file. You’ll get a preview and we’ll refine it until perfect.</p> */}
              </div>
              <div className='process-card'>
              <div className='process-csrd-logo'>
                <h1><FaTruckArrowRight /></h1>
                </div>
                {/* <h4>Quality Production & Timely Delivery</h4> */}
                <h4>Production & Delivery</h4>
                <p>Once approved, we’ll create your patches with meticulous attention to detail and deliver them to you, ready to enhance your look!</p>
                {/* <p>Once approved, we’ll craft your patches with care and ship them, ready to elevate your style!</p> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Process