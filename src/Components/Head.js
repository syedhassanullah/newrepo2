import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, CaretDownOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'react-bootstrap';
// import SideModal from '../Modal/SideModal';
import { ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';
// import Sidemodal2 from '../Modal/Sidemodal2';
import SideModal3 from '../Modal/SideModal3';
// import ToggleSide from '../Modal/ToggleSide';
import { Sling as Hamburger } from 'hamburger-react';


const items = [
  {
    label: <Link to={'/'}> Home |</Link>,
    key: 'Home',
    // icon: <MailOutlined />,
  },
  {
    label: <Link to={'/about'}>About |</Link>,
    key: 'About',
    icon: <UserOutlined />,
  },
  {
    label: 'Servces |',
    key: 'SubMenu',
    icon: <CaretDownOutlined />,
    children: [
      { label: <Link to={'/services/digitizing'}>Digitizing</Link>, key: 'setting:1' },
      { label: <Link to={'/services/patches'}>Patches</Link>, key: 'setting:2' },
      { label: <Link to={'/services/vector'}>vactor</Link>, key: 'setting:3' },
    ],
  },
  {
    key: 'alipay',
    label: <Link to={'/Portfolio'}>Portfolio |</Link>,
    icon: <AppstoreOutlined />,
  },
  {
    key: 'Contact',
    label: <Link to={'/Contact'}>Contact Us |</Link>,
    icon: <PhoneOutlined />,

  },
];



const Head = () => {

// get color from css
  const getPrimaryColorFromCSS = () => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-color')
      .trim();
  };
  const defaultColor = getPrimaryColorFromCSS();


  // Toggle Work 
  const [humburger, setHumburger] = useState('black');
  const [helo, setHelo] = useState(false);

  const click = () => {
    setHelo(true);
    setHumburger(defaultColor)
  };

  const onClose = () => {
    setHelo(false)
    setHumburger('black')
  };

  const HandelTogel = (toggled) => {
    if (toggled) {
      click();
    } else {
      onClose();
    }
  }

  const CustomToken = {
    token: {
      colorText: 'Black',
      lineWidth: 2,
      colorBgContainer: 'teransparent',
      fontSize: 16,
    }
  }


  const renderMenuItems = (menuItems) => {
    return menuItems.map(item => {
      if (item.children) {
        return (
          <div className='subManu'>
            <Menu.SubMenu key={item.key} icon={item.icon} title={item.label} style={{ fontWeight: '700' }}>
              {renderMenuItems(item.children)}
            </Menu.SubMenu>
          </div>
        );
      }
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      );
    });
  };

// LINKS WORK
  const [current, setCurrent] = useState('Home'); 
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrent('Home');
    } else if (location.pathname === '/about') {
      setCurrent('About');
    } else if (location.pathname === '/Portfolio') {
      setCurrent('alipay');
    } else if (location.pathname === '/Contact') {
      setCurrent('Contact');
    }else if (location.pathname === '/services/digitizing') {
      setCurrent('setting:1');
    }else if (location.pathname === '/services/patches') {
      setCurrent('setting:2');
    }else if (location.pathname === '/services/vector') {
      setCurrent('setting:3');
    }
  }, [location.pathname]);
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key); // Update the active item when clicked
  };

  return (
    <ConfigProvider theme={CustomToken}>
      <div className='head fixed-top' >
        {/* <div className='headupper1'>
          <Container>
            <div className='row'>

              <div className=''>
                <div className='headUpper'>

                  <div className='headicon'>
                    <h6><SiGmail /> abcd.@gmail.com</h6>
                    <h6>+92-3181-088606</h6>
                  </div>
                  <div className='head-bt'>
                  <h5>GET A QOUT</h5>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </div> */}
        <div className='container'>
          <div classNa></div>

          <div className='row'>
            <div className='head-item'>
              <div >
                <Button>hassan</Button>
              </div>
              <div className='head-menu'>
                <Menu mode="horizontal" onClick={onClick} selectedKeys={[current]}>{renderMenuItems(items)}</Menu>
              </div>
              <div >
                {/* <SideModal /> */}
                {/* <Sidemodal2/> */}
                {/* <SideModal3/> */}
                <div 
                className='humburger'>
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
            <div />
          </div>
        </div>
      </div>

    </ConfigProvider>
  );
};

export default Head;

