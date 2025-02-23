import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Segmented } from 'antd';
import { useState } from 'react';
import { Image } from 'antd';
import LogoSlider from '../Components/Slider/LogoSlider'
import jre from './helo.jpeg'
// import jre1 from '../images/ServiceShowsIMG/Patches.png'
import jre2 from '../images/ServiceShowsIMG/hello.jpg'
import jre3 from '../images/ServiceShowsIMG/hello2.jpg'

import Sublimated1 from '../images/PortfolioImg/Patches/sublimated patches/sublimated1.jpg'
import Sublimated2 from '../images/PortfolioImg/Patches/sublimated patches/sublimated2.jpg'
import Sublimated3 from '../images/PortfolioImg/Patches/sublimated patches/sublimated3.jpg'
import Sublimated4 from '../images/PortfolioImg/Patches/sublimated patches/sublimated4.jpg'
import Sublimated5 from '../images/PortfolioImg/Patches/sublimated patches/sublimated5.jpg'
import Sublimated6 from '../images/PortfolioImg/Patches/sublimated patches/sublimated6.jpg'
import Sublimated7 from '../images/PortfolioImg/Patches/sublimated patches/sublimated7.jpg'
import Sublimated8 from '../images/PortfolioImg/Patches/sublimated patches/sublimated8.jpg'


import Woven1 from '../images/PortfolioImg/Patches/woven patches/woven1.jpg'
import Woven2 from '../images/PortfolioImg/Patches/woven patches/woven2.jpg'
import Woven3 from '../images/PortfolioImg/Patches/woven patches/woven3.jpg'
import Woven4 from '../images/PortfolioImg/Patches/woven patches/woven4.jpg'
import Woven5 from '../images/PortfolioImg/Patches/woven patches/woven5.jpg'
import Woven6 from '../images/PortfolioImg/Patches/woven patches/woven6.jpg'
import Woven7 from '../images/PortfolioImg/Patches/woven patches/woven7.jpg'
import Woven8 from '../images/PortfolioImg/Patches/woven patches/woven8.jpg'
import Woven9 from '../images/PortfolioImg/Patches/woven patches/woven9.jpg'
// import Woven10 from '../images/PortfolioImg/Patches/woven patches/woven10.jpg'
// import Woven11 from '../images/PortfolioImg/Patches/woven patches/woven11.jpg'


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
                        <div style={{ display: 'flex', alignItems: 'center' }}>
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
                                            Sublimated</p>|
                                        <p onClick={() => handlePatchClick('Patch2')}
                                            className={`${selectedPatch === 'Patch2' ? 'active' : ''}`}>
                                            Woven </p>|
                                        <p onClick={() => handlePatchClick('Patch3')}
                                            className={`${selectedPatch === 'Patch3' ? 'active' : ''}`}
                                        >PVC </p>|
                                        <p onClick={() => handlePatchClick('Patch4')}
                                            className={`${selectedPatch === 'Patch4' ? 'active' : ''}`}
                                        >Embroidered</p>|
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
                                            <Image src={Sublimated1} />
                                            <Image src={Sublimated2} />
                                            <Image src={Sublimated3} />
                                            <Image src={Sublimated4} />
                                            <Image src={Sublimated5} />
                                            <Image src={Sublimated6} />
                                            <Image src={Sublimated7} />
                                            <Image src={Sublimated8} />
                                        </motion.div>
                                    }
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
                                            <Image src={Woven1} />
                                            <Image src={Woven2} />
                                            <Image src={Woven3} />
                                            <Image src={Woven4} />
                                            <Image src={Woven5} />
                                            <Image src={Woven6} />
                                            <Image src={Woven7} />
                                            <Image src={Woven8} />
                                            <Image src={Woven9} />
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