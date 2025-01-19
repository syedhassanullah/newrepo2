import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FooterVarient = ({ to, children }) => {
  return (
    <motion.h6
      whileHover={{
        translateX: 10,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 400,
          damping: 10,
        }
      }}
      whileTap={{
        scale: '0.98',
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        }
      }}
    >
      <Link to={to}>{children}</Link>
    </motion.h6>
  )
}

export default FooterVarient