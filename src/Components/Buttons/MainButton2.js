
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Button.css'

function MainButton2() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      className="hassan"
    >
      <Link to="/about" className="Button">
      <span></span>
     <span></span>
     <span></span>
     <span></span>
    DISCOVER MORE
      </Link>
    </motion.div>
  );
}

export default MainButton2; 
