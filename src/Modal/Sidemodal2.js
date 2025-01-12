import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { Space } from 'antd';
import ContactForm from '../Components/ContactForm';
import { createTheme } from '@ant-design/cssinjs';
import '../App.css';
import { ConfigProvider, Modal } from 'antd';  // Named imports

function Sidemodal2() {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const [humburger, setHumburger] = useState('black');
    const [isOpen, setIsOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
        setIsOpen(true);
        setHumburger('rgb(158, 0, 34)');
        setPlacement('right');
    };

    const onClose = () => {
        setIsOpen(false);
        setHumburger('black');
    };

    const HandelTogel = (toggled) => {
        if (toggled) {
            showDrawer();
        } else {
            onClose();
        }
    };

    const theme = createTheme({
        token: {
            colorBorderBg: 'red',
            colorFillAlter: 'green',
            colorBgContainer: 'black'
        },
    });

    return (
        <>
            <Space >
                <div className='humburger'>
                    <Hamburger
                        toggled={isOpen}
                        type="primary"
                        color={humburger}
                        direction='right'
                        size={25}
                        duration={0.5}
                        onToggle={HandelTogel}
                    />
                </div>
            </Space>
            <ConfigProvider theme={theme}>
            <Modal
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
            </Modal>
            </ConfigProvider>
            {/* ConfigProvider theme={theme}>
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
                    <ContactForm/>
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
            </Modal> */} */}
        </>
    );
}

export default Sidemodal2;
