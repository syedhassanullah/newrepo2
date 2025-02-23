import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../../Varient/Varient2';
import { Link } from 'react-router-dom';

function ServiceCard({ title, description, icon, url }) {
  const getPrimaryColorFromCSS = () => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-color')
      .trim();
  };

  const defaultColor = getPrimaryColorFromCSS();
  console.log(url, "hello")
  return (
    <motion.div
      variants={FadeUp(5.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
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
        borderRadius: '35px',
      }}
      whileTap={{ scale: 1 }}
      className='sCard' >
      <Link to={url} >
        <motion.div

          className='ServiceSecCard'
        >
          <h1 >{title}</h1>
          <p>{description}</p>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default ServiceCard;
