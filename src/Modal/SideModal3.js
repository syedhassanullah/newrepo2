import React from 'react'
// import { useState } from 'react';
import './SideModal.css';
import { motion } from 'framer-motion';
import { ImArrowRight2 } from "react-icons/im";
import Icons from '../Components/Icons';
// import logo from '../images/MainLogo/BD WHITE LOGO VERSION PNG2.png'
import { Link } from 'react-router-dom';
// import { AiOutlineDown } from 'react-icons/ai';
import { ImLocation } from "react-icons/im";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import { MdKeyboardArrowDown } from "react-icons/md";

function SideModal3({ helo, onClose }) {


    // const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

    // const toggleSubMenu = () => {
    //     setIsSubMenuVisible(!isSubMenuVisible);
    // }

    useEffect(() => {
        if (helo) {
            // When the sidebar is open, add the "sidebar-open" class to the body
            document.body.classList.add('sidebar-open');
        } else {
            // When the sidebar is closed, remove the "sidebar-open" class from the body
            document.body.classList.remove('sidebar-open');
        }

        // Clean up the class on component unmount or when sidebar is closed
        return () => {
            document.body.classList.remove('sidebar-open');
        };
    }, [helo]);  // Dependency array ensures this effect runs when `helo` changes

    const items = [
        {
            label: (
                <NavLink
                    to="/services/digitizing"
                    activeClassName="active"
                    className="main-menu"
                >
                    Digitizing
                </NavLink>
            ),
            key: '0',

        },
         {
            label: (
                <NavLink
                    to="/services/vector"
                    activeClassName="active"
                    className="main-menu"
                >
                    Vector
                </NavLink>
            ),
            key: '2',
        },
        {
            label: (
                <NavLink
                    to="/services/patches"
                    activeClassName="active"
                    className="main-menu"
                >
                    Patches
                </NavLink>
            ),
            key: '1',
        },
       {
            label: (
                <NavLink
                    to="/services/promotional"
                    activeClassName="active"
                    className="main-menu"
                >
                    Promotional
                </NavLink>
            ),
            key: '5',
        },
        {
            label: (
                <NavLink
                    to="/services/apparel-item"
                    activeClassName="active"
                    className="main-menu"
                >
                    Apparel-item
                </NavLink>
            ),
            key: '3',
        },
            // {
            //     label: (
            //         <NavLink
            //             to="/services/hats-beanies"
            //             activeClassName="active"
            //             className="main-menu"
            //         >
            //             Hats-Beanies
            //         </NavLink>
            //     ),
            //     key: '4',
            // },
        
        {
            type: 'divider',
        },
    ];

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
                            <div className='Sidebarcontent' >


                                {/* <img src={logo} alt='logo' style={{ width: '200px' }} /> */}
                                <div className='side-navigation'>
                                    <div className="navigation-links">
                                        <Link className='menu-item' to={'/'}>Home</Link>
                                        <Link className='menu-item' to={'/about'}>About</Link>

                                        {/* <div className={`services-dropdown ${isSubMenuVisible ? 'expanded' : ''}`}>
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

                                        </div> */}
                                        <Dropdown menu={{ items }} trigger={['click']}>
                                            <Link onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    <Link
                                                        className="main-menu"
                                                    // to={'/services/digitizing'}
                                                    >
                                                        Services
                                                        {/* <DownOutlined /> */}
                                                        {/* <AiOutlineDown /> */}
                                                        <MdKeyboardArrowDown/>
                                                    </Link>
                                                </Space>
                                            </Link>
                                        </Dropdown>

                                        <Link className='menu-item' to={'/portfolio'}>Portfolio</Link>
                                        <Link className='menu-item' to={'/contact'}>Contact</Link>
                                    </div>
                                </div>




                                <h1>Our Address</h1>
                                <div style={{ display: 'flex', paddingTop: '0px', paddingLeft: '10px' }}><h2><ImLocation /></h2>
                                    <div style={{ paddingLeft: '20px' }}>
                                        <h5>Address</h5>
                                        <p>218 W Colorado Ave #104, Colorado Springs, CO 80903, United States</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', paddingTop: '0px', paddingLeft: '10px' }}><h2><MdPermPhoneMsg /></h2>
                                    <div style={{ paddingLeft: '20px' }}>
                                        <h5>Contact</h5>
                                        <p>+1-409-995-3047</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', paddingTop: '0px', paddingLeft: '10px' }}><h2><MdEmail /></h2>
                                    <div style={{ paddingLeft: '20px' }}>
                                        <h5>Email</h5>
                                        <p>ceo@beyonddigitizing.com <br/>sales@beyonddigitizing.com<br/>info@beyonddigitizing.com</p>
                                    </div>
                                </div>
                                {/* <div style={{ display: 'flex', alignItems: 'center' }}><h2><ImLocation /></h2>
                                    <p>Working Hours: 10:00 - 18:00 GST</p>
                                </div> */}
                                <div style={{ paddingTop: '40px' }}><Icons /></div>

                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default SideModal3