import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Segmented } from 'antd';
import { useState } from 'react';
import { Image } from 'antd';
import LogoSlider from '../Components/Slider/LogoSlider'
import jre from './helo.jpeg'

import { Container } from 'react-bootstrap';


import { motion } from 'framer-motion'
import { FadeUp } from '../Varient/Varient2'

function Portfolio() {

    const [selectedValue, setSelectedValue] = useState('Digitizing');

    // Handler for the onChange event
    const handleChange = (value) => {
        setSelectedValue(value);
    };


    // const CustomToken = {
    //     token: {
    //         colorText: 'Black',
    //         lineWidth: 2,
    //         colorBgContainer: 'teransparent',
    //         fontSize: 16,
    //         colorBgElevated: 'rgb(158, 0, 34)',
    //         // colorBgLayout:,
    //         colorInfoTextActive: 'white',
    //         colorTextSecondary: 'black',
    //     }
    // }


    return (
        <MainLayout>
            <div className='heroother'>
                <Container>

                    <h1 >Our Portfolio</h1>
                </Container>
            </div>
            <Container>

                <div className=' portfolio1'>
                    <div className='portfolio'>

                        <div className='justify-content-center segment'>
                            <Segmented size="large"
                                options={[
                                    'Digitizing', 'Vector', 'Patches', 'Apparel-Items','Hats-And-Bean','Promotional-Products']}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='portfolio-Item'>
                            {selectedValue === 'Digitizing' &&
                                <motion.div
                                    variants={FadeUp(0.3)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className='portfolio-image'>
                                    {/* <Image src={image2} />
                                    <Image src={image2} />
                                    <Image src={image2} />
                                    <Image src={image2} />
                                    <Image src={image2} />
                                    <Image src={image2} />
                                    <Image src={image2} />
                                    <Image src={image2} />
                                    <Image src={image2} /> */}
                                </motion.div>
                            }
                            {selectedValue === 'Vector' &&
                            <>
                            <div style={{display:'flex'}}>
                                <h1>hello</h1>
                                <h1>hello</h1>
                                <h1>hello</h1>
                                <h1>hello</h1>
                                <h1>hello</h1>
                                
                            </div>
                                <motion.div
                                    variants={FadeUp(0.3)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className='portfolio-image'>
                                    <Image src={jre} />
                                    <Image src={jre} />
                                    <Image src={jre} />
                                    <Image src={jre} />
                                    <Image src={jre} />
                                    <Image src={jre} />
                                    <Image src={jre} />
                                    <Image src={jre} />
                                </motion.div>
                                </>
                            }
                            {selectedValue === 'Patches' && <p>Long text option clicked. Displaying something for long text.</p>}
                            {selectedValue === 'Apparel-Items' && <div className='portfolio-image'>
                                <motion.div
                                    variants={FadeUp(0.3)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className='portfolio-image'>
                                    {/* <Image src={image1} />
                                    <Image src={image1} />
                                    <Image src={image1} />
                                    <Image src={image1} />
                                    <Image src={image1} />
                                    <Image src={image1} />
                                    <Image src={image1} />
                                    <Image src={image1} />
                                    <Image src={image1} /> */}
                                </motion.div>
                            </div>}
                        </div>

                    </div>
                </div>
<LogoSlider/>
            </Container>
        </MainLayout>
    )
}




export default Portfolio