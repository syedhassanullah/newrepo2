import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FadeIn } from '../Varient/Varient'

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
              {/* <h2>OUR PROCESS</h2> */}
              <h1>OUR PROCESS</h1>
            </motion.div>

            <div className='process-container'>
              <div className='process-card'>
                <h1>Logo</h1>
                <h2>heading</h2>
                <p>Description</p>
              </div>
              <div className='process-card'>
                <h1>Logo</h1>
                <h2>heading</h2>
                <p>Description</p>
              </div>
              <div className='process-card'>
                <h1>Logo</h1>
                <h2>heading</h2>
                <p>Description</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Process