// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// function MainButton() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.98 }}
//       className="mainButton"
//     >
//       <Link to="/contact" className="buttonLink">
//         GET STARTED
//       </Link>
//     </motion.div>
//   );
// }

// export default MainButton;


 import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Button.css'

function MainButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      className="hassan"
    >
      <Link to="/contact" className="Button">
      <span></span>
     <span></span>
     <span></span>
     <span></span>
    GET STARTED
      </Link>
    </motion.div>
  );
}

export default MainButton; 
