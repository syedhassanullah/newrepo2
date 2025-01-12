
import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import { Space } from 'antd';
import ContactForm from '../Components/ContactForm'
// import { createTheme } from '@ant-design/cssinjs';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import '../App.css';





const SideModal = () => {
  // const [open, setOpen] = useState(false);
  // const [placement, setPlacement] = useState('right');
  
  // const [isOpen, setIsOpen] = useState(false);

  // const showDrawer = () => {
  //   setOpen(true);
  //   setIsOpen(true);
  //   setHumburger('rgb(158, 0, 34)')
  //   setPlacement('right');
  // };

  const [humburger, setHumburger] = useState('black');
  const [helo, setHelo] = useState(false);

  const click = () => {
    setHelo(true);
    setHumburger('rgb(158, 0, 34)')
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

  // const theme = createTheme({
  //   token: {
  //     colorBorderBg:'red',
  //     colorFillAlter:'green',
  //     colorBgContainer :'black'
  //   },
  // });


  return (
    <>
      <Space >
        {/* <Radio.Group value={placement} onChange={onChange}>
            <Radio value="top">top</Radio>
            <Radio value="right">right</Radio>
            <Radio value="bottom">bottom</Radio>
            <Radio value="left">left</Radio>
          </Radio.Group> */}
        {/* <Button type="primary" onClick={showDrawer}>
            Open
          </Button> */}
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
          {/* <div onClick={click} className="close-btn" >
            <SlArrowLeft style={{color:'#bb0000',width:'1.5rem',height:'1.5rem'}}/>
          </div> */}
        </div>

      </Space>
      {/* <ConfigProvider theme={theme}>
        <Modal
          title="Modal with extra actions"
          centered
          placement={placement}
          width={1000}
          onCancel={onClose}
          open={open}
          // footer={null}
          className="custom-modal"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </ConfigProvider>
      {/* <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onClose={() => setOpen(false)}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal> */}

      <div>

        <div className={`sidebarbak ${helo ? 'ActiveSide1' : ''}`} >
          {/* <img src={logo} alt='logo'/> */}
          
          <div className={`Sidebar ${helo ? 'ActiveSide' : ''}`}>
          <div onClick={onClose} className="close-btn" >
            <SlArrowRight style={{color:'#bb0000',width:'1.5rem',height:'1.5rem'}}/>
          </div>
            <div className='sidebarin'>
            <ContactForm/>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SideModal;