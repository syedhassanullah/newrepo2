import React from 'react'
import { motion } from 'framer-motion';


function MainButton() {
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className='mainButton'
>
    GET STARTED
</motion.div>
  )
}

export default MainButton