import React from 'react'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";  // Correct import for FaFacebookSquare and FaInstagramSquare
import { FaWhatsappSquare, FaTwitterSquare } from "react-icons/fa";  // Correct import for FaWhatsappSquare and FaTwitterSquare
import { motion } from 'framer-motion';

function Icons() {
    const icons = [
        { component: <FaFacebookSquare />, id: 'facebook' },
        { component: <FaWhatsappSquare />, id: 'whatsapp' },  
        { component: <FaInstagramSquare />, id: 'instagram' },
        { component: <FaTwitterSquare />, id: 'twitter' }  
    ];

    return (
        <div className="icons">
            {icons.map(icon => (
                <motion.div 
                    key={icon.id}
                    className="ibtn"
                    whileHover={{ scale: 1.7 }} 
                    whileTap={{ scale: 0.95 }}
                    // transition={{ duration: 0.1 }}
                >
                    {icon.component}
                </motion.div>
            ))}
        </div>
    );
}

export default Icons;
