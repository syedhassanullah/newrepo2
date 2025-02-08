import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideModal3 from '../../Modal/SideModal3';
import Hamburger from 'hamburger-react';
import { AiOutlineDown } from "react-icons/ai";



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // Change background color when scrolled
    } else {
      setScrolled(false); // Set to transparent when at the top
    }
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  
  // get color from css
    const getPrimaryColorFromCSS = () => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-color')
        .trim();
    };
    const defaultColor = getPrimaryColorFromCSS();
  
  
    // Toggle Work 
    const [humburger, setHumburger] = useState(defaultColor);
    const [helo, setHelo] = useState(false);
  
    const click = () => {
      setHelo(true);
      setHumburger(defaultColor)
    };
  
    const onClose = () => {
      setHelo(false)
      setHumburger(defaultColor)
    };
  
    const HandelTogel = (toggled) => {
      if (toggled) {
        click();
      } else {
        onClose();
      }
    }
  
    



return (
    <>
      <div className="App fixed-top">
        <nav className={`helo ${scrolled ? 'scrolled' : ''}`}>
          <Container >
            <div className='head-item' >
              <div className="logo"></div>
              <div className='Nav-buttons'>
              <div className="nav-links">
                <Link className='main-menu' to={'/'}>Home</Link>
                <Link className='main-menu' to={'/about'}>About</Link>
                <div className="services-link" >
                  <Link className='main-menu'>Services <AiOutlineDown /></Link>
                  <div className="sub-menu">
                    <Link to={'/services/digitizing'}>Digitizing</Link>
                    <Link to={'/services/patches'}>Patches</Link>
                    <Link to={'/services/vector'}>Vector</Link>
                    <Link to={'/services/apparel-item'}>Apparel Items</Link>
                    <Link to={'/services/hats-beanies'}>Hats & Beanies</Link>
                    <Link to={'/services/promotional'}>Promotional Products</Link>
                  </div>
                </div>
                <Link className='main-menu' to={'/portfolio'}>Portfolio</Link>
                <Link className='main-menu' to={'/Contact'}>Contact</Link>
              </div>
              </div>
              <div>
                <div className='humburger'>
                  <Hamburger
                    toggled={helo}
                    type="primary"
                    color={humburger}
                    direction='right'
                    size={25}
                    duration={0.5}
                    onToggle={HandelTogel}
                  />
                </div>
                <SideModal3 helo={helo} onClose={onClose} />
              </div>
            </div>
          </Container>
        </nav>
      </div>
    </>
  );
  
}

export default Navbar;