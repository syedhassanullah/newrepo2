import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";  // Correct import for FaFacebookSquare and FaInstagramSquare
import { FaWhatsappSquare } from "react-icons/fa";  // Correct import for FaWhatsappSquare and FaTwitterSquare
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { motion } from 'framer-motion';

function Icons() {
    const icons = [
        { component: <FaFacebookSquare />, id: 'facebook', url: 'https://www.facebook.com/beyonddigitizingofficial' },
        { component: <FaWhatsappSquare />, id: 'whatsapp', url: 'https://wa.me/+14099953047' },  
        { component: <FaInstagramSquare />, id: 'instagram', url: 'https://www.instagram.com/william_beyond/#' },
        { component: <FaSquareXTwitter />, id: 'twitter', url: 'http://x.com/customsbybd' }, 
        { component: <IoLogoLinkedin />, id: 'twitter', url: 'https://www.linkedin.com/in/beyonddigitizing' }  
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
