import React from 'react'
import { motion } from 'framer-motion'
import { FadeUp } from '../../Varient/Varient2'

function ServiceCard({ title, description, icon }) {
  const getPrimaryColorFromCSS = () => {
    // Read the primary color from the CSS root
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-color')
      .trim(); // Removing any extra whitespace
  };

  // Get the primary color from the CSS file
  const defaultColor = getPrimaryColorFromCSS();
  return (
    <>
      <motion.div
        variants={FadeUp(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: defaultColor,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.27)',
          rotate: -2,
          borderRadius: ' 35px',
        }}
        whileTap={{ scale: 1 }}
        className='ServiceSecCard'>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>{icon}</div>

      </motion.div>
    </>
  )
}

export default ServiceCard