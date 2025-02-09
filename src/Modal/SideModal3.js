import React from 'react'
import { useState } from 'react';
import './SideModal.css';
import { motion } from 'framer-motion';
import { ImArrowRight2 } from "react-icons/im";
import Icons from '../Components/Icons';
import logo from '../images/MainLogo/BD WHITE LOGO VERSION PNG2.png'
import { Link } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';



function SideModal3({ helo, onClose }) {


    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuVisible(!isSubMenuVisible);
    }
    return (
        <>
            <div>
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: helo ? '0%' : '100%' }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    className='sidebarbak'
                >
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: helo ? '0%' : '100%' }}
                        transition={{ type: 'spring', stiffness: 600, damping: 50 }}
                        className={`Sidebar ${helo ? 'ActiveSide' : ''}`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.6 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onClose} className="close-btn" >
                            <ImArrowRight2 style={{ color: '#0091d4', width: '1.5rem', height: '1.5rem' }} />
                        </motion.div>
                        <div className='sidebarin'>



                        <div className="navigation-links">
      <Link className='menu-item' to={'/'}>Home</Link>
      <Link className='menu-item' to={'/about'}>About</Link>

      <div className={`services-dropdown ${isSubMenuVisible ? 'expanded' : ''}`}>
        <Link className='menu-item' to={'#'} onClick={toggleSubMenu}>
          Services <AiOutlineDown />
        </Link>

        <div className={`submenu ${isSubMenuVisible ? 'visible' : ''}`}>
          <Link to={'/services/digitizing'} className='submenu-item'>Digitizing</Link>
          <Link to={'/services/patches'} className='submenu-item'>Patches</Link>
          <Link to={'/services/vector'} className='submenu-item'>Vector</Link>
          <Link to={'/services/apparel-item'} className='submenu-item'>Apparel Items</Link>
          <Link to={'/services/hats-beanies'} className='submenu-item'>Hats & Beanies</Link>
          <Link to={'/services/promotional'} className='submenu-item'>Promotional Products</Link>
        </div>
      </div>

      <Link className='menu-item' to={'/portfolio'}>Portfolio</Link>
      <Link className='menu-item' to={'/contact'}>Contact</Link>
    </div>



                            <img src={logo} alt='logo' style={{ width: '200px' }} />
                            <h1>Our Address</h1>
                            <h6>218 W Colorado Ave #104, Colorado Springs, CO 80903, United States</h6>
                            <h6>+1-719-900-4662</h6>
                            <h6>beyonddigitizing7@gmail.com</h6>
                            <h6>Working Hours: 10:00 - 18:00 GST</h6>
                            <div style={{ paddingTop: '40px' }}><Icons /></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default SideModal3