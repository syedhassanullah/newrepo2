import React from 'react'
import ContactForm from '../Components/ContactForm'
import { SlArrowRight } from "react-icons/sl";
import './SideModal.css';
import { motion } from 'framer-motion';

function SideModal3({ helo, onClose }) {

    return (
        <>
            <div>
                <motion.div
                    initial={{ x: '100%' }} // Sidebar starts off-screen to the left
                    animate={{ x: helo ? '0%' : '100%' }} // Sidebar slides in when `isOpen` is true
                    // transition={{ type: 'spring', stiffness: 900, damping: 10 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    // transition={{ type: 'decay', velocity: 100 }}

                    className='sidebarbak'
                >
                    <motion.div
                        initial={{ x: '100%' }} // Sidebar starts off-screen to the left
                        animate={{ x: helo ? '0%' : '100%' }} // Sidebar slides in when `isOpen` is true
                        transition={{ type: 'spring', stiffness: 600, damping: 50 }}
                        // transition={{ type: 'tween', duration: 0.5 }}
                        className={`Sidebar ${helo ? 'ActiveSide' : ''}`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.6 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onClose} className="close-btn" >
                            <SlArrowRight style={{ color: '#bb0000', width: '1.5rem', height: '1.5rem' }} />
                        </motion.div>
                        <div className='sidebarin'>
                            <ContactForm />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default SideModal3