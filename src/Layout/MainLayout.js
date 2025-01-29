import React from 'react'
// import Head from '../Components/Head'
// import { Container } from 'react-bootstrap'
import { ConfigProvider } from 'antd';
import Cursor from '../CurSor/Cursor';
import Footer from '../Components/Footer';
import '../App.css'
import { motion } from 'framer-motion';
import Navbar from '../Components/NAV/Navbar';




export default function MainLayout({ children }) {

    const getPrimaryColorFromCSS = () => {
        // Read the primary color from the CSS root
        return getComputedStyle(document.documentElement)
          .getPropertyValue('--primary-color')
          .trim(); // Removing any extra whitespace
      };
    
      // Get the primary color from the CSS file
      const defaultColor = getPrimaryColorFromCSS(); 
    return (
        <>
        <div >
            <ConfigProvider
                theme={{
                    
                    token: {
                        colorPrimary: defaultColor,
                        main: '#a10000',

                        //         // fontFamily:'Helvetica Neue',
                        //         // colorText:'white',
                        //         // lineWidth:2,
                        //         // colorBgContainer:'teransparent'
                        //         // // colorInfoText:'red',
                        //         // // colorPrimaryTextActive:'green',

                        //         // // colorBgBase:' rgb(255, 249, 249)',
                        //         // // colorBgSubMenu:'black',

                    }
                }}
            >
                <Cursor/>
                
                {/* <Head /> */}
                <Navbar/>

                <motion.div
                        initial={{ opacity: 0 ,translateY: 100}}
                        animate={{ opacity: 1,translateY: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {children}  
                    </motion.div>
                <Footer/>

            </ConfigProvider>
            </div>
        </>
    )
}
