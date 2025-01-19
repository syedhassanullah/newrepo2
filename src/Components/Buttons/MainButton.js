import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function MainButton() {
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className='mainButton'
>
    <Link to={'/contact'}>GET STARTED</Link>
</motion.div>
  )
}

export default MainButton