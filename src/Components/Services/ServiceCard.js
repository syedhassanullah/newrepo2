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
      viewport={{ once: true, amount: 0.9 }}
      transition={{
        type: 'tween',
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: defaultColor,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.27)',
        // rotate: -3,
        borderRadius: '5px',
      }}
      whileTap={{ scale: 1 }}
      className='sCard' >

      <motion.div

        className='ServiceSecCard'
      >

        <div className='service_icon'>{icon}</div>
        <h4 >{title}</h4>
        <p>{description}</p>
        <div className='buttom'>
          <Link to={url} >
            <h6>see more</h6>
          </Link>
        </div>
      </motion.div>

    </motion.div>
  );
}

export default ServiceCard;
