import React from 'react'
import './SideModal.css';
import { motion } from 'framer-motion';
import { ImArrowRight2 } from "react-icons/im";
import Icons from '../Components/Icons';
import logo from '../images/MainLogo/BD WHITE LOGO VERSION PNG.png'
function SideModal3({ helo, onClose }) {

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
                            <img src={logo} alt='logo' style={{width:'200px'}}/>
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