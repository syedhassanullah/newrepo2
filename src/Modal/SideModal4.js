import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SideModal4() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => setIsOpen(!isOpen);
  
    return (
      <div style={{ position: 'relative' }}>
        <button onClick={toggleSidebar} style={styles.toggleButton}>
          {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
  
        {/* Sidebar container with framer-motion animation */}
        <motion.div
          initial={{ x: '-100%' }} // Sidebar starts off-screen to the left
          animate={{ x: isOpen ? 0 : '-100%' }} // Sidebar slides in when `isOpen` is true
          transition={{ type: 'spring', stiffness: 300, damping: 10 }} // Smooth animation
          style={styles.sidebar}
        >
          <h2 style={styles.title}>Sidebar</h2>
          <ul style={styles.menu}>
            <li style={styles.menuItem}>Home</li>
            <li style={styles.menuItem}>About</li>
            <li style={styles.menuItem}>Services</li>
            <li style={styles.menuItem}>Contact</li>
          </ul>
        </motion.div>
      </div>
    );
  };
  
  const styles = {
    toggleButton: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#2C3E50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
    },
    sidebar: {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      width: '250px',
      backgroundColor: '#34495E',
      padding: '20px',
      color: '#fff',
      zIndex: 1000,
      boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.5)',
    },
    title: {
      margin: '0',
      fontSize: '24px',
    },
    menu: {
      listStyle: 'none',
      padding: '0',
      marginTop: '30px',
    },
    menuItem: {
      marginBottom: '15px',
      fontSize: '18px',
      cursor: 'pointer',
    },
}

export default SideModal4