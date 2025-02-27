import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Segmented } from 'antd';
import { useState } from 'react';
import { Image } from 'antd';
import LogoSlider from '../Components/Slider/LogoSlider'
import jre from './helo.jpeg'
// import jre1 from '../images/ServiceShowsIMG/Patches.png'
import jre2 from '../images/ServiceShowsIMG/hello.jpg'
// import jre3 from '../images/ServiceShowsIMG/hello2.jpg'

// PATCHES----------------------------------
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

import Chenille1 from '../images/PortfolioImg/Patches/Chenille Patches/C1.jpg'
import Chenille2 from '../images/PortfolioImg/Patches/Chenille Patches/C2.jpg'
import Chenille3 from '../images/PortfolioImg/Patches/Chenille Patches/C3.jpg'
import Chenille4 from '../images/PortfolioImg/Patches/Chenille Patches/C4.jpg'
import Chenille5 from '../images/PortfolioImg/Patches/Chenille Patches/C5.jpg'
import Chenille6 from '../images/PortfolioImg/Patches/Chenille Patches/C6.jpg'
import Chenille7 from '../images/PortfolioImg/Patches/Chenille Patches/C7.jpg'
import Chenille8 from '../images/PortfolioImg/Patches/Chenille Patches/C8.jpg'
import Chenille9 from '../images/PortfolioImg/Patches/Chenille Patches/C9.jpg'
import Chenille10 from '../images/PortfolioImg/Patches/Chenille Patches/C10.jpg'

import emb1 from '../images/PortfolioImg/Patches/Embroidered Patches/E1.jpg'
import emb2 from '../images/PortfolioImg/Patches/Embroidered Patches/E2.jpg'
import emb3 from '../images/PortfolioImg/Patches/Embroidered Patches/E3.jpg'
import emb4 from '../images/PortfolioImg/Patches/Embroidered Patches/E4.jpg'
import emb5 from '../images/PortfolioImg/Patches/Embroidered Patches/E5.jpg'
import emb6 from '../images/PortfolioImg/Patches/Embroidered Patches/E6.jpg'
import emb7 from '../images/PortfolioImg/Patches/Embroidered Patches/E7.jpg'
import emb8 from '../images/PortfolioImg/Patches/Embroidered Patches/E8.jpg'
import emb9 from '../images/PortfolioImg/Patches/Embroidered Patches/E9.jpg'

import lather1 from '../images/PortfolioImg/Patches/Leather Patches/L1.jpg'
import lather2 from '../images/PortfolioImg/Patches/Leather Patches/L2.jpg'
import lather3 from '../images/PortfolioImg/Patches/Leather Patches/L3.jpg'
import lather4 from '../images/PortfolioImg/Patches/Leather Patches/L4.jpg'
import lather5 from '../images/PortfolioImg/Patches/Leather Patches/L5.jpg'
import lather6 from '../images/PortfolioImg/Patches/Leather Patches/L6.jpg'

import PVC1 from '../images/PortfolioImg/Patches/PVC Patches/P1.jpg'
import PVC2 from '../images/PortfolioImg/Patches/PVC Patches/P2.jpg'
import PVC3 from '../images/PortfolioImg/Patches/PVC Patches/P3.jpg'
import PVC4 from '../images/PortfolioImg/Patches/PVC Patches/P4.jpg'
import PVC5 from '../images/PortfolioImg/Patches/PVC Patches/P5.jpg'
import PVC6 from '../images/PortfolioImg/Patches/PVC Patches/P6.jpg'
import PVC7 from '../images/PortfolioImg/Patches/PVC Patches/P7.jpg'
import PVC8 from '../images/PortfolioImg/Patches/PVC Patches/P8.jpg'


// APPERAL -------------------------------------
import Apperal1 from '../images/PortfolioImg/Apparel Items/Hoodies/h1.jpeg'
import Apperal2 from '../images/PortfolioImg/Apparel Items/Hoodies/h2.jpeg'
import Apperal3 from '../images/PortfolioImg/Apparel Items/Hoodies/h3.jpeg'
import Apperal4 from '../images/PortfolioImg/Apparel Items/Hoodies/h4.jpeg'
import Apperal5 from '../images/PortfolioImg/Apparel Items/Hoodies/h5.jpeg'
import Apperal6 from '../images/PortfolioImg/Apparel Items/Hoodies/h6.jpeg'
import Apperal7 from '../images/PortfolioImg/Apparel Items/Hoodies/h7.jpeg'

import jersy1 from '../images/PortfolioImg/Apparel Items/Jerseys/j1.jpeg'
import jersy2 from '../images/PortfolioImg/Apparel Items/Jerseys/j2.jpeg'
import jersy3 from '../images/PortfolioImg/Apparel Items/Jerseys/j3.jpeg'
import jersy4 from '../images/PortfolioImg/Apparel Items/Jerseys/j4.jpeg'
import jersy5 from '../images/PortfolioImg/Apparel Items/Jerseys/j5.jpeg'
import jersy6 from '../images/PortfolioImg/Apparel Items/Jerseys/j6.jpeg'
import jersy7 from '../images/PortfolioImg/Apparel Items/Jerseys/j7.jpeg'

import sweetShirt1 from '../images/PortfolioImg/Apparel Items/Sweatshirts/s1.jpeg'
import sweetShirt2 from '../images/PortfolioImg/Apparel Items/Sweatshirts/s2.jpeg'
import sweetShirt3 from '../images/PortfolioImg/Apparel Items/Sweatshirts/s3.jpeg'
import sweetShirt4 from '../images/PortfolioImg/Apparel Items/Sweatshirts/s4.jpeg'
// import sweetShirt5 from '../images/PortfolioImg/Apparel Items/Sweatshirts/s5.jpeg'
import sweetShirt6 from '../images/PortfolioImg/Apparel Items/Sweatshirts/s6.jpeg'
import sweetShirt7 from '../images/PortfolioImg/Apparel Items/Sweatshirts/s7.jpeg'
import sweetShirt8 from '../images/PortfolioImg/Apparel Items/Sweatshirts/s8.jpeg'
import sweetShirt9 from '../images/PortfolioImg/Apparel Items/Sweatshirts/s9.jpeg'
import sweetShirt10 from '../images/PortfolioImg/Apparel Items/Sweatshirts/s10.jpeg'

import towel1 from '../images/PortfolioImg/Apparel Items/Towels/t1.jpg'
import towel2 from '../images/PortfolioImg/Apparel Items/Towels/t2.jpg'
import towel3 from '../images/PortfolioImg/Apparel Items/Towels/t3.jpg'
import towel4 from '../images/PortfolioImg/Apparel Items/Towels/t4.jpg'
import towel5 from '../images/PortfolioImg/Apparel Items/Towels/t5.jpg'

import tshirt1 from '../images/PortfolioImg/Apparel Items/T-Shirts/ts1.jpg'
import tshirt2 from '../images/PortfolioImg/Apparel Items/T-Shirts/ts2.jpg'
import tshirt3 from '../images/PortfolioImg/Apparel Items/T-Shirts/ts3.jpg'
import tshirt4 from '../images/PortfolioImg/Apparel Items/T-Shirts/ts4.jpeg'
import tshirt5 from '../images/PortfolioImg/Apparel Items/T-Shirts/ts5.jpeg'


// Hats -------------------------------------------------------------------------
import hat1 from '../images/PortfolioImg/Caps/Caps/C1.jpeg'
import hat2 from '../images/PortfolioImg/Caps/Caps/C2.jpg'
import hat3 from '../images/PortfolioImg/Caps/Caps/C3.jpg'
import hat4 from '../images/PortfolioImg/Caps/Caps/C4.jpg'
import hat5 from '../images/PortfolioImg/Caps/Caps/C5.jpg'
import hat6 from '../images/PortfolioImg/Caps/Caps/C6.jpg'
import hat7 from '../images/PortfolioImg/Caps/Caps/C7.jpg'
import hat8 from '../images/PortfolioImg/Caps/Caps/C8.jpeg'
import hat9 from '../images/PortfolioImg/Caps/Caps/C9.jpeg'
import hat10 from '../images/PortfolioImg/Caps/Caps/C10.jpeg'


import Beanies1 from '../images/PortfolioImg/Caps/Beanies/b1.jpeg'
import Beanies2 from '../images/PortfolioImg/Caps/Beanies/b2.jpeg'
import Beanies3 from '../images/PortfolioImg/Caps/Beanies/b3.jpeg'
import Beanies4 from '../images/PortfolioImg/Caps/Beanies/b4.jpeg'
import Beanies5 from '../images/PortfolioImg/Caps/Beanies/b5.jpeg'
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
    const [selectedApperal, setSelectedApperal] = useState('apperal1');
    const [selectedHat, setSelectedHat] = useState('hat1')

    // Handler for the onChange event
    const handleChange = (value) => {
        setSelectedValue(value);
    };


    const handlePatchClick = (patch) => {
        setSelectedPatch(patch)
    }

    const handleapperalClick = (apperal) => {
        setSelectedApperal(apperal)
    }

    const handleHatClick = (hat) => {
        setSelectedHat(hat)
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
                                        >CHENILLE</p>|
                                        <p onClick={() => handlePatchClick('Patch4')}
                                            className={`${selectedPatch === 'Patch4' ? 'active' : ''}`}
                                        >Embroidered</p>|
                                        <p onClick={() => handlePatchClick('Patch5')}
                                            className={`${selectedPatch === 'Patch5' ? 'active' : ''}`}
                                        >lEATEHER</p>|
                                        <p onClick={() => handlePatchClick('Patch6')}
                                            className={`${selectedPatch === 'Patch6' ? 'active' : ''}`}
                                        >PVC</p>


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
                                            <Image src={Chenille1} />
                                            <Image src={Chenille2} />
                                            <Image src={Chenille3} />
                                            <Image src={Chenille4} />
                                            <Image src={Chenille5} />
                                            <Image src={Chenille6} />
                                            <Image src={Chenille7} />
                                            <Image src={Chenille8} />
                                            <Image src={Chenille9} />
                                            <Image src={Chenille10} />
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
                                            <Image src={emb1} />
                                            <Image src={emb2} />
                                            <Image src={emb3} />
                                            <Image src={emb4} />
                                            <Image src={emb5} />
                                            <Image src={emb6} />
                                            <Image src={emb7} />
                                            <Image src={emb8} />
                                            <Image src={emb9} />
                                        </motion.div>
                                    }
                                    {selectedPatch === 'Patch5' &&
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
                                            <Image src={lather1} />
                                            <Image src={lather2} />
                                            <Image src={lather3} />
                                            <Image src={lather4} />
                                            <Image src={lather5} />
                                            <Image src={lather6} />
                                        </motion.div>
                                    }
                                    {selectedPatch === 'Patch6' &&
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
                                            <Image src={PVC1} />
                                            <Image src={PVC2} />
                                            <Image src={PVC3} />
                                            <Image src={PVC4} />
                                            <Image src={PVC5} />
                                            <Image src={PVC6} />
                                            <Image src={PVC7} />
                                            <Image src={PVC8} />

                                        </motion.div>
                                    }

                                </>
                            }
                            {selectedValue === 'Apparel-Items' &&
                                <>
                                    <div className='portfolio-image'>

                                        <div className='portfolio_select_item'>

                                            <p onClick={() => handleapperalClick('apperal1')}
                                                className={`${selectedApperal === 'apperal1' ? 'active' : ''}`}>
                                                Hoodies</p>|
                                            <p onClick={() => handleapperalClick('apperal2')}
                                                className={`${selectedApperal === 'apperal2' ? 'active' : ''}`}>
                                                Jerseys </p>|
                                            <p onClick={() => handleapperalClick('apperal3')}
                                                className={`${selectedApperal === 'apperal3' ? 'active' : ''}`}
                                            >Sweat Shirt </p>|
                                            <p onClick={() => handleapperalClick('apperal4')}
                                                className={`${selectedApperal === 'apperal4' ? 'active' : ''}`}
                                            >Towels</p>|
                                            <p onClick={() => handleapperalClick('apperal5')}
                                                className={`${selectedApperal === 'apperal5' ? 'active' : ''}`}
                                            >T-Shirts</p>
                                        </div>
                                        {selectedApperal === 'apperal1' &&
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
                                                <Image src={Apperal1} />
                                                <Image src={Apperal2} />
                                                <Image src={Apperal3} />
                                                <Image src={Apperal4} />
                                                <Image src={Apperal5} />
                                                <Image src={Apperal6} />
                                                <Image src={Apperal7} />
                                            </motion.div>
                                        }

                                        {selectedApperal === 'apperal2' &&
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
                                                <Image src={jersy1} />
                                                <Image src={jersy2} />
                                                <Image src={jersy3} />
                                                <Image src={jersy4} />
                                                <Image src={jersy5} />
                                                <Image src={jersy6} />
                                                <Image src={jersy7} />
                                            </motion.div>
                                        }

                                        {selectedApperal === 'apperal3' &&
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
                                                <Image src={sweetShirt1} />
                                                <Image src={sweetShirt2} />
                                                <Image src={sweetShirt3} />
                                                <Image src={sweetShirt4} />
                                                <Image src={sweetShirt6} />
                                                <Image src={sweetShirt7} />
                                                <Image src={sweetShirt8} />
                                                <Image src={sweetShirt9} />
                                                <Image src={sweetShirt10} />
                                            </motion.div>
                                        }

                                        {selectedApperal === 'apperal4' &&
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
                                                <Image src={towel1} />
                                                <Image src={towel2} />
                                                <Image src={towel3} />
                                                <Image src={towel4} />
                                                <Image src={towel5} />
                                            </motion.div>
                                        }

                                        {selectedApperal === 'apperal5' &&
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
                                                <Image src={tshirt1} />
                                                <Image src={tshirt2} />
                                                <Image src={tshirt3} />
                                                <Image src={tshirt4} />
                                                <Image src={tshirt5} />
                                            </motion.div>
                                        }
                                    </div>
                                </>
                            }
                            {selectedValue === 'Hats-And-Bean' &&
                                <>
                                    <div className='portfolio_select_item'>
                                        <p onClick={() => handleHatClick('hat1')}
                                            className={`${selectedHat === 'hat1' ? 'active' : ''}`}>
                                            hats
                                        </p>|
                                        <p onClick={() => handleHatClick('hat2')}
                                            className={`${selectedHat === 'hat2' ? 'active' : ''}`}>
                                            Beanies
                                        </p>
                                    </div>
                                    {selectedHat === 'hat1' &&
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
                                                <Image src={hat1} />
                                                <Image src={hat2} />
                                                <Image src={hat3} />
                                                <Image src={hat4} />
                                                <Image src={hat5} />
                                                <Image src={hat6} />
                                                <Image src={hat7} />
                                                <Image src={hat8} />
                                                <Image src={hat9} />
                                                <Image src={hat10} />
                                            </motion.div>
                                        }
                                         {selectedHat === 'hat2' &&
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
                                                <Image src={Beanies1} />
                                                <Image src={Beanies2} />
                                                <Image src={Beanies3} />
                                                <Image src={Beanies4} />
                                                <Image src={Beanies5} />
                                            </motion.div>
                                        }
                                </>
                            }
                        </div>

                    </div>
                </div>
                <LogoSlider />
            </Container>
        </MainLayout >
    )
}




export default Portfolio