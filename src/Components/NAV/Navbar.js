import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import SideModal3 from '../../Modal/SideModal3';
import Hamburger from 'hamburger-react';
// import { AiOutlineDown } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
// import { DownOutlined } from '@ant-design/icons';

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
  // active nav
  // const [activeLink, setActiveLink] = useState('');
  // const handleLinkClick = (linkName) => {
  //   setActiveLink(linkName);
  // };


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
          to="/services/apparel-item"
          activeClassName="active"
          className="main-menu"
        >
          Apparel-item
        </NavLink>
      ),
      key: '3',
    },
    {
      label: (
        <NavLink
          to="/services/hats-beanies"
          activeClassName="active"
          className="main-menu"
        >
          Hats-Beanies
        </NavLink>
      ),
      key: '4',
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
      type: 'divider',
    },
  ];


  return (
    <>
      <div className="App fixed-top">
        <nav className={`helo ${scrolled ? 'scrolled' : ''}`}>
          <Container >
            <div className='head-item' >
              <div className="logo"></div>
              <div className='Nav-buttons'>
                <div className="nav-links">
                  {/* <Link className='main-menu' to={'/'}>Home</Link>
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
                <Link className='main-menu' to={'/Contact'}>Contact</Link> */}
                  <NavLink
                    className="main-menu"
                    exact
                    to={'/'}
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="main-menu"
                    to={'/about'}
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                  {/* <div className="services-link">
                  <NavLink
                    className="main-menu"
                    to={'/services'}
                    isActive={(match, location) => {
                      // Make 'Services' active if any sub-route is active (like /services/digitizing)
                      return location.pathname.startsWith('/services');
                    }}
                    activeClassName="active"
                  >
                  Services <AiOutlineDown />
                  </NavLink>
                  <div className="sub-menu">
                    <NavLink
                      className="active"
                      to={'/services/digitizing'}
                      activeClassName="active"
                    >
                      Digitizing
                    </NavLink>
                    <NavLink
                      className="active"
                      to={'/services/patches'}
                      activeClassName="active"
                    >
                      Patches
                    </NavLink>
                    <NavLink
                      className="active"
                      to={'/services/vector'}
                      activeClassName="active"
                    >
                      Vector
                    </NavLink>
                    <NavLink
                      className="active"
                      to={'/services/apparel-item'}
                      activeClassName="active"
                    >
                      Apparel Items
                    </NavLink>
                    <NavLink
                      className="active"
                      to={'/services/hats-beanies'}
                      activeClassName="active"
                    >
                      Hats & Beanies
                    </NavLink>
                    <NavLink
                      className="active"
                      to={'/services/promotional'}
                      activeClassName="active"
                    >
                      Promotional Products
                    </NavLink>
                  </div>
                </div> */}

                  <Dropdown menu={{ items }} >
                    <Link onClick={(e) => e.preventDefault()}>
                      <Space>
                        <Link
                          className="main-menu"
                          //  activeClassName="active"
                          //  to={'/services/digitizing'}
                          // style={{paddingBottom:'5px'}}
                          >
                            
                          Services
                          {/* <DownOutlined/> */}
                          <MdKeyboardArrowDown/>
                        </Link>
                      </Space>
                    </Link>
                  </Dropdown>

                  <NavLink
                    className="main-menu"
                    to={'/portfolio'}
                    activeClassName="active"
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    className="main-menu"
                    to={'/contact'}
                    activeClassName="active"
                  >
                    Contact
                  </NavLink>






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



// import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Space } from 'antd';

// const items = [
//   {
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     ),
//     key: '0',
//   },
//   {
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item
//       </a>
//     ),
//     key: '1',
//   },
//   {
//     type: 'divider',
//   },
//   {
//     label: '3rd menu item（disabled）',
//     key: '3',
//     disabled: true,
//   },
// ];

// const App = () => (
// <Dropdown menu={{ items }}>
//   <a onClick={(e) => e.preventDefault()}>
//     <Space>
//       Hover me
//       <DownOutlined />
//     </Space>
//   </a>
// </Dropdown>
// );

// export default App;
