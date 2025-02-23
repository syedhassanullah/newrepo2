import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Segmented } from 'antd';
import { useState } from 'react';
import { Image } from 'antd';
import LogoSlider from '../Components/Slider/LogoSlider'
import jre from './helo.jpeg'
import jre1 from '../images/ServiceShowsIMG/Patches.png'
import jre2 from '../images/ServiceShowsIMG/hello.jpg'
import jre3 from '../images/ServiceShowsIMG/hello2.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Container } from 'react-bootstrap';


import { motion } from 'framer-motion'
import { FadeUp } from '../Varient/Varient2'

function Portfolio() {

    const [selectedValue, setSelectedValue] = useState('Digitizing');
    const [selectedPatch, setSelectedPatch] = useState('Patch1');

    // Handler for the onChange event
    const handleChange = (value) => {
        setSelectedValue(value);
    };


    const handlePatchClick = (patch) => {
        setSelectedPatch(patch)

        console.log(`Selected Vector: ${patch}`);
    }

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
                        <div style={{display:'flex',alignItems:'center'}}>
                        <MdKeyboardArrowLeft />
                            <div className='justify-content-center segment'>
                                <Segmented size="large"
                                    options={[
                                        'Digitizing', 'Vector', 'Patches', 'Apparel-Items', 'Hats-And-Bean', 'Promotional-Products']}
                                    onChange={handleChange}
                                />
                            </div>
                            <MdKeyboardArrowRight />
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
                            {selectedValue === 'Patches' &&
                                <>
                                    <div className='portfolio_select_item'>

                                        <p onClick={() => handlePatchClick('Patch1')}
                                            className={`${selectedPatch === 'Patch1' ? 'active' : ''}`}>
                                            Embroidered </p>|
                                        <p onClick={() => handlePatchClick('Patch2')}
                                            className={`${selectedPatch === 'Patch2' ? 'active' : ''}`}>
                                            Woven </p>|
                                        <p onClick={() => handlePatchClick('Patch3')}
                                            className={`${selectedPatch === 'Patch3' ? 'active' : ''}`}
                                        >PVC </p>|
                                        <p onClick={() => handlePatchClick('Patch4')}
                                            className={`${selectedPatch === 'Patch4' ? 'active' : ''}`}
                                        >Sublimated</p>|
                                    </div>
                                    {selectedPatch === 'Patch1' &&
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
                                    },
                                    {selectedPatch === 'Patch2' &&
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
                                            <Image src={jre1} />
                                            <Image src={jre1} />
                                            <Image src={jre1} />
                                            <Image src={jre1} />
                                            <Image src={jre1} />
                                            <Image src={jre1} />
                                            <Image src={jre1} />
                                            <Image src={jre1} />
                                            <Image src={jre1} />
                                        </motion.div>
                                    }
                                    {selectedPatch === 'Patch3' &&
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
                                            <Image src={jre3} />
                                            <Image src={jre3} />
                                            <Image src={jre3} />
                                            <Image src={jre3} />
                                            <Image src={jre3} />
                                            <Image src={jre3} />
                                            <Image src={jre3} />
                                            <Image src={jre3} />
                                            <Image src={jre3} />
                                        </motion.div>
                                    }{selectedPatch === 'Patch4' &&
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
                                            <Image src={jre2} />
                                            <Image src={jre2} />
                                            <Image src={jre2} />
                                            <Image src={jre2} />
                                            <Image src={jre2} />
                                            <Image src={jre2} />
                                            <Image src={jre2} />
                                            <Image src={jre2} />
                                            <Image src={jre2} />
                                        </motion.div>
                                    }
                                </>
                            }
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
                <LogoSlider />
            </Container>
        </MainLayout>
    )
}




export default Portfolio