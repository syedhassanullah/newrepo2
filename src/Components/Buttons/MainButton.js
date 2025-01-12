import React from 'react'
import { motion } from 'framer-motion';


function MainButton() {
  return (
    <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.95 }}
    style={{ cursor: 'pointer', padding: '15px', backgroundColor: 'white', color: 'red', width: '250px', textAlign: 'center', marginTop: '30px' }}
    className='mainButton'
>
    GET STARTED
</motion.div>
  )
}

export default MainButton