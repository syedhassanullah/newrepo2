import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";  // Correct import for FaFacebookSquare and FaInstagramSquare
import { FaWhatsappSquare, FaTwitterSquare } from "react-icons/fa";  // Correct import for FaWhatsappSquare and FaTwitterSquare
import { motion } from 'framer-motion';

function Icons() {
    const icons = [
        { component: <FaFacebookSquare />, id: 'facebook', url: 'https://www.facebook.com' },
        { component: <FaWhatsappSquare />, id: 'whatsapp', url: 'https://www.whatsapp.com' },  
        { component: <FaInstagramSquare />, id: 'instagram', url: 'https://www.instagram.com' },
        { component: <FaTwitterSquare />, id: 'twitter', url: 'https://www.twitter.com' }  
    ];

    return (
        <div className="icons">
            {icons.map(icon => (
                <motion.div 
                    key={icon.id}
                    className="ibtn"
                    whileHover={{ scale: 1.5 }} 
                    whileTap={{ scale: 0.95 }}
                >
                    <a href={icon.url} target="_blank" rel="noopener noreferrer">
                        {icon.component}
                    </a>
                </motion.div>
            ))}
        </div>
    );
}

export default Icons;
