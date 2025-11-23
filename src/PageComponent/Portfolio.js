import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { Segmented } from 'antd';
import { useState } from 'react';
import { Image } from 'antd';
import LogoSlider from '../Components/Slider/LogoSlider'
import { motion } from 'framer-motion'
import { FadeIn } from '../Varient/Varient'

// vector 
import vector1 from '../images/PortfolioImg/Vector Designs/vec14.webp'
import vector2 from '../images/PortfolioImg/Vector Designs/vec12.webp'
import vector3 from '../images/PortfolioImg/Vector Designs/vec13.webp'
// import vector4 from '../images/PortfolioImg/Vector Designs/vac4.webp'
import vector5 from '../images/PortfolioImg/Vector Designs/vec15.webp'
import vector6 from '../images/PortfolioImg/Vector Designs/vec16.webp'
import vector7 from '../images/PortfolioImg/Vector Designs/vec17.webp'
import vector8 from '../images/PortfolioImg/Vector Designs/vec18.webp'
import vector9 from '../images/PortfolioImg/Vector Designs/vec19.webp'
// import vector10 from '../images/PortfolioImg/Vector Designs/vec10.webp'
// import vector11 from '../images/PortfolioImg/Vector Designs/vec11.webp'


// import jre1 from '../images/ServiceShowsIMG/Patches.png'
import digi1 from '../images/PortfolioImg/Digitizing/10.webp'
import digi2 from '../images/PortfolioImg/Digitizing/11.webp'
import digi3 from '../images/PortfolioImg/Digitizing/12.webp'
import digi4 from '../images/PortfolioImg/Digitizing/13.webp'
import digi5 from '../images/PortfolioImg/Digitizing/14.webp'
import digi6 from '../images/PortfolioImg/Digitizing/15.webp'
import digi7 from '../images/PortfolioImg/Digitizing/16.webp'
// import digi8 from '../images/PortfolioImg/Digitizing/digi8.webp'
// import digi9 from '../images/PortfolioImg/Digitizing/digi9.webp'
// import jre3 from '../images/ServiceShowsIMG/hello2.jpg'

// PATCHES----------------------------------
import Sublimated1 from '../images/PortfolioImg/Patches/sublimated patches/sublimated1.jpg'
import Sublimated2 from '../images/PortfolioImg/Patches/sublimated patches/sublimated2.jpg'
import Sublimated3 from '../images/PortfolioImg/Patches/sublimated patches/sublimated3.jpg'
import Sublimated4 from '../images/PortfolioImg/Patches/sublimated patches/sublimated4.jpg'
import Sublimated5 from '../images/PortfolioImg/Patches/sublimated patches/sublimated5.jpg'
import Sublimated6 from '../images/PortfolioImg/Patches/sublimated patches/sublimated6.jpg'
// import Sublimated7 from '../images/PortfolioImg/Patches/sublimated patches/sublimated7.jpg'
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
// import emb6 from '../images/PortfolioImg/Patches/Embroidered Patches/E6.jpg'
import emb7 from '../images/PortfolioImg/Patches/Embroidered Patches/E7.jpg'
// import emb8 from '../images/PortfolioImg/Patches/Embroidered Patches/E8.jpg'
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

import seque1 from '../images/PortfolioImg/Patches/Sequince Patches/s1.jpg'
import seque2 from '../images/PortfolioImg/Patches/Sequince Patches/s2.jpg'
import seque3 from '../images/PortfolioImg/Patches/Sequince Patches/s3.jpg'
import seque4 from '../images/PortfolioImg/Patches/Sequince Patches/s4.jpg'
import seque5 from '../images/PortfolioImg/Patches/Sequince Patches/s5.jpg'

import wovenl1 from '../images/PortfolioImg/Patches/Woven Labels/wo1.jpg'
import wovenl2 from '../images/PortfolioImg/Patches/Woven Labels/wo2.jpg'
import wovenl3 from '../images/PortfolioImg/Patches/Woven Labels/wo3.jpg'
import wovenl4 from '../images/PortfolioImg/Patches/Woven Labels/wo4.jpg'
import wovenl5 from '../images/PortfolioImg/Patches/Woven Labels/wo5.jpg'

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

// import towel1 from '../images/PortfolioImg/Apparel Items/Towels/t1.jpg'
// import towel2 from '../images/PortfolioImg/Apparel Items/Towels/t2.jpg'
// import towel3 from '../images/PortfolioImg/Apparel Items/Towels/t3.jpg'
// import towel4 from '../images/PortfolioImg/Apparel Items/Towels/t4.jpg'
// import towel5 from '../images/PortfolioImg/Apparel Items/Towels/t5.jpg'

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


// promotional products
// import pleather1 from '../images/PortfolioImg/promotional/leather keychine/l1.jpg'
// import pleather2 from '../images/PortfolioImg/promotional/leather keychine/l2.jpg'
// import pleather3 from '../images/PortfolioImg/promotional/leather keychine/l3.jpg'
// import pleather4 from '../images/PortfolioImg/promotional/leather keychine/l4.jpg'
// import pleather5 from '../images/PortfolioImg/promotional/leather keychine/l5.jpg'

// import pwood1 from '../images/PortfolioImg/promotional/wood keychine/w1.jpg'
// import pwood2 from '../images/PortfolioImg/promotional/wood keychine/w2.jpg'
// import pwood3 from '../images/PortfolioImg/promotional/wood keychine/w3.jpg'
// import pwood4 from '../images/PortfolioImg/promotional/wood keychine/w4.jpg'
// import pwood5 from '../images/PortfolioImg/promotional/wood keychine/w5.jpg'
// import pwood6 from '../images/PortfolioImg/promotional/wood keychine/w6.jpg'
// import pwood7 from '../images/PortfolioImg/promotional/wood keychine/w7.jpg'
// import pwood8 from '../images/PortfolioImg/promotional/wood keychine/w8.jpg'
// import pwood9 from '../images/PortfolioImg/promotional/wood keychine/w9.jpg'

// import metal1 from '../images/PortfolioImg/promotional/metal keychines/m1.jpg'
// import metal2 from '../images/PortfolioImg/promotional/metal keychines/m2.jpg'
// import metal3 from '../images/PortfolioImg/promotional/metal keychines/m3.jpg'
// import metal4 from '../images/PortfolioImg/promotional/metal keychines/m4.jpg'
// import metal5 from '../images/PortfolioImg/promotional/metal keychines/m5.jpg'
// import metal6 from '../images/PortfolioImg/promotional/metal keychines/m6.jpg'
// import metal7 from '../images/PortfolioImg/promotional/metal keychines/m7.jpg'
// import metal8 from '../images/PortfolioImg/promotional/metal keychines/m8.jpg'

import pv1 from '../images/PortfolioImg/promotional/pvc keychine/p1.jpg'
import pv2 from '../images/PortfolioImg/promotional/pvc keychine/p2.jpg'
import pv3 from '../images/PortfolioImg/promotional/pvc keychine/p3.jpg'
import pv4 from '../images/PortfolioImg/promotional/pvc keychine/p4.jpg'
import pv5 from '../images/PortfolioImg/promotional/pvc keychine/p5.jpg'

import sticker1 from '../images/PortfolioImg/promotional/stikers/s1.jpg'
import sticker2 from '../images/PortfolioImg/promotional/stikers/s2.jpg'
import sticker3 from '../images/PortfolioImg/promotional/stikers/s3.jpg'
import sticker4 from '../images/PortfolioImg/promotional/stikers/s4.jpg'
import sticker5 from '../images/PortfolioImg/promotional/stikers/s5.jpg'
import sticker6 from '../images/PortfolioImg/promotional/stikers/s6.jpg'
import sticker7 from '../images/PortfolioImg/promotional/stikers/s7.jpg'
import sticker8 from '../images/PortfolioImg/promotional/stikers/s8.jpg'

import wrist1 from '../images/PortfolioImg/promotional/wrist band/w1.jpg'
import wrist2 from '../images/PortfolioImg/promotional/wrist band/w2.jpg'
import wrist3 from '../images/PortfolioImg/promotional/wrist band/w3.jpg'
import wrist4 from '../images/PortfolioImg/promotional/wrist band/w4.jpg'
import wrist5 from '../images/PortfolioImg/promotional/wrist band/w5.jpg'
import wrist6 from '../images/PortfolioImg/promotional/wrist band/w6.jpg'
import wrist7 from '../images/PortfolioImg/promotional/wrist band/w7.jpg'
import wrist8 from '../images/PortfolioImg/promotional/wrist band/w8.jpg'

import dtf1 from '../images/PortfolioImg/promotional/dtf sheets/d1.jpg'
import dtf2 from '../images/PortfolioImg/promotional/dtf sheets/d2.jpg'
import dtf3 from '../images/PortfolioImg/promotional/dtf sheets/d3.jpg'
import dtf4 from '../images/PortfolioImg/promotional/dtf sheets/d4.jpg'
import dtf5 from '../images/PortfolioImg/promotional/dtf sheets/d5.jpg'
import dtf6 from '../images/PortfolioImg/promotional/dtf sheets/d6.jpg'
import dtf7 from '../images/PortfolioImg/promotional/dtf sheets/d7.jpg'


import flg1 from '../images/PortfolioImg/promotional/flag/Flag (2).png'
import flg2 from '../images/PortfolioImg/promotional/flag/Flag.jpg'
import flg3 from '../images/PortfolioImg/promotional/flag/Flag.png'


import lanyard from '../images/PortfolioImg/promotional/lanyard/Lanyard (2).jpg'
import lanyard1 from '../images/PortfolioImg/promotional/lanyard/Lanyard.jpg'


import pen1 from '../images/PortfolioImg/promotional/pens/Pr Pens.jpeg'
import pen2 from '../images/PortfolioImg/promotional/pens/Promotional Pens.jpeg'

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Container } from 'react-bootstrap';
import { FadeUp } from '../Varient/Varient2';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function Portfolio() {

    const location = useLocation();

    const [selectedValue, setSelectedValue] = useState('Digitizing');

    const [selectDigitizing, setSelectedDigitizing] = useState('digi');
    const [selectedPatch, setSelectedPatch] = useState('Patch1');
    const [selectedApperal, setSelectedApperal] = useState('apperal1');
    const [selectedHat, setSelectedHat] = useState('hat1');
    const [selectpromotional, setSelectedpromotioanl] = useState('sticker');
    const [selectvector, setSelectedvector] = useState('vector-img');

    // const [selectKeychain, setSelectedKeychain] = useState('keychain1')


    useEffect(() => {

        const params = new URLSearchParams(location.search);

        const digitizingParam = params.get('digitizing');
        const patchParam = params.get('patch');
        const apperalParam = params.get('apperal');
        const hatParam = params.get('hat');
        const promotionalParam = params.get('promotional');
        const vector = params.get('vector');
        // const keychainParam = params.get('keychain');


        if (digitizingParam) {
            setSelectedValue('Digitizing');
            setSelectedDigitizing(digitizingParam);

        }

        if (patchParam) {
            setSelectedValue('Patches');
            setSelectedPatch(patchParam);
        }

        if (apperalParam) {
            handleapperalClick(apperalParam);
            setSelectedValue('Apparel-Items');
            console.log(apperalParam, '........................................')
        }

        if (hatParam) {
            handleHatClick(hatParam);
            setSelectedValue('Hats-And-Bean');
        }

        if (promotionalParam) {
            handlePromotionalClick(promotionalParam);
            setSelectedValue('Promotional-Products');
        }

        if (vector) {
            setSelectedValue('Vector')
            setSelectedvector(vector)

        }
        // if (keychainParam) {
        //     handleKechainClick(keychainParam);
        //     setSelectedValue('Keychains');
        // }
    }, [location]);


    const handleChange = (val) => {

        setSelectedValue(val);

        // if (val !== 'Patches') {
        //     setSelectedPatch('Patch1');
        //     console.log(val, 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
        // }

        // if (val !== 'digitizing') {
        //     setSelectedDigitizing('digi1')
        //     console.log(val, 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
        // }

        // if (val !== 'apparel') {
        //     setSelectedPatch('apparel1');
        //     console.log(val, 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
        // }
    };

    // const handleDigitizingClick = (digitizing) => {
    //     setSelectedDigitizing(digitizing);
    // }

    const handlePatchClick = (patch) => {
        setSelectedPatch(patch);
    };

    const handleapperalClick = (apperal) => {
        setSelectedApperal(apperal)
    }

    const handleHatClick = (hat) => {
        setSelectedHat(hat)
    }

    const handlePromotionalClick = (promotional) => {
        setSelectedpromotioanl(promotional)
        console.log(promotional, '--------------------------------------------')
    }

    // const handleKechainClick = (keychain) => {
    //     setSelectedKeychain(keychain)
    // }

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
                    <motion.h1
                        variants={FadeIn('left')}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{
                            once: false, amount: 0.3
                        }}
                        transition={{ type: 'tween' }}
                    >Our Portfolio</motion.h1>
                </Container>
            </div>
            <Container>

                <div className=' portfolio1'>
                    <div className='portfolio'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <MdKeyboardArrowLeft />
                            <div className='justify-content-center segment'>
                                <Segmented size="medium"
                                    options={[
                                        'Digitizing', 'Vector', 'Patches', 'Apparel-Items', 'Promotional-Products']}
                                    value={selectedValue}
                                    onChange={handleChange}
                                // 'Hats-And-Bean', 
                                />
                            </div>
                            <MdKeyboardArrowRight />
                        </div>
                        <div className='portfolio-Item'>
                            {selectedValue === 'Digitizing' &&
                                <>
                                    <div className='portfolio_select_item'>
                                        {/* 
                                        <p onClick={() => handleDigitizingClick('digi1')}
                                            className={`${selectDigitizing === 'digi1' ? 'active' : ''}`}>
                                            Sublimated</p>|
                                        <p onClick={() => handleDigitizingClick('digi2')}
                                            className={`${selectDigitizing === 'digi2' ? 'active' : ''}`}>
                                            Woven-Patch</p>|
                                        <p onClick={() => handleDigitizingClick('digi3')}
                                            className={`${selectDigitizing === 'digi3' ? 'active' : ''}`}
                                        >CHENILLE</p>|
                                        <p onClick={() => handleDigitizingClick('digi4')}
                                            className={`${selectDigitizing === 'digi4' ? 'active' : ''}`}
                                        >Embroidered</p>|
                                        <p onClick={() => handleDigitizingClick('digi5')}
                                            className={`${selectDigitizing === 'digi5' ? 'active' : ''}`}
                                        >lEATEHER</p>|
                                        <p onClick={() => handleDigitizingClick('digi6')}
                                            className={`${selectDigitizing === 'digi6' ? 'active' : ''}`}
                                        >PVC</p>|
                                        <p onClick={() => handleDigitizingClick('digi7')}
                                            className={`${selectDigitizing === 'digi7' ? 'active' : ''}`}
                                        >woven Labels</p>|
                                        <p onClick={() => handleDigitizingClick('digi8')}
                                            className={`${selectDigitizing === 'digi8' ? 'active' : ''}`}
                                        >sequince</p> */}


                                    </div>
                                    {selectDigitizing === 'digi' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >

                                                <Image src={digi1} />
                                                <Image src={digi2} />
                                                <Image src={digi3} />
                                                <Image src={digi4} />
                                                <Image src={digi5} />
                                                <Image src={digi6} />
                                                <Image src={digi7} />
                                                {/* <Image src={digi8} />
                                                <Image src={digi9} /> */}
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    },
                                    {/* {selectDigitizing === 'digi2' &&
                                        // <motion.div
                                        //     variants={FadeUp(0.3)}
                                        //     initial="hidden"
                                        //     whileInView="show"
                                        //     viewport={{ once: true, amount: 0.1 }}
                                        //     transition={{
                                        //         type: 'spring',
                                        //         stiffness: 300,
                                        //         damping: 20,
                                        //     }}
                                        //     className='portfolio-image'>
                                        //     <Image.PreviewGroup
                                        //         preview={{
                                        //             onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                        //         }}
                                        //     >

                                               
                                        //         <Image src={digi6} />
                                        //         <Image src={digi7} />
                                        //         <Image src={digi8} />
                                        //         <Image src={digi9} />
                                        //     </Image.PreviewGroup>
                                        // </motion.div>
                                    } */}
                                </>
                            }
                            {selectedValue === 'Vector' &&
                                <>

                                    {selectvector === 'vector-img' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >


                                                <Image src={vector1} />
                                                <Image src={vector2} />
                                                <Image src={vector3} />
                                                {/* <Image src={vector4} /> */}
                                                <Image src={vector5} />
                                                <Image src={vector6} />
                                                <Image src={vector7} />
                                                <Image src={vector8} />
                                                <Image src={vector9} />
                                                {/* <Image src={vector10} />
                                                <Image src={vector11} /> */}
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                </>
                            }
                            {selectedValue === 'Patches' &&
                                <>
                                    <div className='portfolio_select_item'>

                                        <p onClick={() => handlePatchClick('Patch1')}
                                            className={`${selectedPatch === 'Patch1' ? 'active' : ''}`}
                                        >Embroidered</p>|
                                        <p onClick={() => handlePatchClick('Patch5')}
                                            className={`${selectedPatch === 'Patch5' ? 'active' : ''}`}>
                                            Sublimated</p>|
                                        <p onClick={() => handlePatchClick('Patch2')}
                                            className={`${selectedPatch === 'Patch2' ? 'active' : ''}`}>
                                            Woven-Patch</p>|
                                        <p onClick={() => handlePatchClick('Patch3')}
                                            className={`${selectedPatch === 'Patch3' ? 'active' : ''}`}
                                        >CHENILLE</p>|

                                        <p onClick={() => handlePatchClick('Patch9')}
                                            className={`${selectedPatch === 'Patch9' ? 'active' : ''}`}
                                        >lEATHER</p>|
                                        <p onClick={() => handlePatchClick('Patch6')}
                                            className={`${selectedPatch === 'Patch6' ? 'active' : ''}`}
                                        >PVC</p>|
                                        <p onClick={() => handlePatchClick('Patch7')}
                                            className={`${selectedPatch === 'Patch7' ? 'active' : ''}`}
                                        >woven Labels</p>|
                                        <p onClick={() => handlePatchClick('Patch8')}
                                            className={`${selectedPatch === 'Patch8' ? 'active' : ''}`}
                                        >sequince</p>


                                    </div>
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >

                                                <Image src={Sublimated1} />
                                                <Image src={Sublimated2} />
                                                <Image src={Sublimated3} />
                                                <Image src={Sublimated4} />
                                                <Image src={Sublimated5} />
                                                <Image src={Sublimated6} />                            
                                                <Image src={Sublimated8} />
                                            </Image.PreviewGroup>
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={Woven1} />
                                                <Image src={Woven2} />
                                                <Image src={Woven3} />
                                                <Image src={Woven4} />
                                                <Image src={Woven5} />
                                                <Image src={Woven6} />
                                                <Image src={Woven7} />
                                                <Image src={Woven8} />
                                                <Image src={Woven9} />
                                            </Image.PreviewGroup>
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
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
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }{selectedPatch === 'Patch1' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={emb1} />
                                                <Image src={emb2} />
                                                <Image src={emb3} />
                                                <Image src={emb4} />
                                                <Image src={emb5} />
                                                {/* <Image src={emb6} /> */}
                                                <Image src={emb7} />
                                                {/* <Image src={emb8} />     */}
                                                <Image src={emb9} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectedPatch === 'Patch9' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={lather1} />
                                                <Image src={lather2} />
                                                <Image src={lather3} />
                                                <Image src={lather4} />
                                                <Image src={lather5} />
                                                <Image src={lather6} />
                                            </Image.PreviewGroup>
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={PVC1} />
                                                <Image src={PVC2} />
                                                <Image src={PVC3} />
                                                <Image src={PVC4} />
                                                <Image src={PVC5} />
                                                <Image src={PVC6} />
                                                <Image src={PVC7} />
                                                <Image src={PVC8} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectedPatch === 'Patch7' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={wovenl1} />
                                                <Image src={wovenl2} />
                                                <Image src={wovenl3} />
                                                <Image src={wovenl4} />
                                                <Image src={wovenl5} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectedPatch === 'Patch8' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={seque1} />
                                                <Image src={seque2} />
                                                <Image src={seque3} />
                                                <Image src={seque4} />
                                                <Image src={seque5} />
                                            </Image.PreviewGroup>
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
                                            >Sweat Shirts </p>|
                                            {/* <p onClick={() => handleapperalClick('apperal4')}
                                                className={`${selectedApperal === 'apperal4' ? 'active' : ''}`}
                                            >Towels</p>| */}
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
                                                <Image.PreviewGroup
                                                    preview={{
                                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                    }}
                                                >
                                                    <Image src={Apperal1} />
                                                    <Image src={Apperal2} />
                                                    <Image src={Apperal3} />
                                                    <Image src={Apperal4} />
                                                    <Image src={Apperal5} />
                                                    <Image src={Apperal6} />
                                                    <Image src={Apperal7} />
                                                </Image.PreviewGroup>
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
                                                <Image.PreviewGroup
                                                    preview={{
                                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                    }}
                                                >
                                                    <Image src={jersy1} />
                                                    <Image src={jersy2} />
                                                    <Image src={jersy3} />
                                                    <Image src={jersy4} />
                                                    <Image src={jersy5} />
                                                    <Image src={jersy6} />
                                                    <Image src={jersy7} />
                                                </Image.PreviewGroup>
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
                                                <Image.PreviewGroup
                                                    preview={{
                                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                    }}
                                                >
                                                    <Image src={sweetShirt1} />
                                                    <Image src={sweetShirt2} />
                                                    <Image src={sweetShirt3} />
                                                    <Image src={sweetShirt4} />
                                                    <Image src={sweetShirt6} />
                                                    <Image src={sweetShirt7} />
                                                    <Image src={sweetShirt8} />
                                                    <Image src={sweetShirt9} />
                                                    <Image src={sweetShirt10} />
                                                </Image.PreviewGroup>
                                            </motion.div>
                                        }

                                        {/* {selectedApperal === 'apperal4' &&
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
                                                <Image.PreviewGroup
                                                    preview={{
                                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                    }}
                                                >
                                                    <Image src={towel1} />
                                                    <Image src={towel2} />
                                                    <Image src={towel3} />
                                                    <Image src={towel4} />
                                                    <Image src={towel5} />
                                                </Image.PreviewGroup>
                                            </motion.div>
                                        } */}

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
                                                <Image.PreviewGroup
                                                    preview={{
                                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                    }}
                                                >
                                                    <Image src={tshirt1} />
                                                    <Image src={tshirt2} />
                                                    <Image src={tshirt3} />
                                                    <Image src={tshirt4} />
                                                    <Image src={tshirt5} />
                                                </Image.PreviewGroup>
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
                                            className='portfolio-image'><Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
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
                                            </Image.PreviewGroup>
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={Beanies1} />
                                                <Image src={Beanies2} />
                                                <Image src={Beanies3} />
                                                <Image src={Beanies4} />
                                                <Image src={Beanies5} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                </>
                            }
                            {selectedValue === 'Promotional-Products' &&
                                <>
                                    <div className='portfolio_select_item'>

                                        <p onClick={() => handlePromotionalClick('sticker')}
                                            className={`${selectpromotional === 'sticker' ? 'active' : ''}`}
                                        >Stickers</p>|
                                        <p onClick={() => handlePromotionalClick('bands')}
                                            className={`${selectpromotional === 'bands' ? 'active' : ''}`}
                                        >wrist bands</p>|
                                        <p onClick={() => handlePromotionalClick('promotional3')}
                                            className={`${selectpromotional === 'promotional3' ? 'active' : ''}`}
                                        >dtf sheets</p>|
                                        <p onClick={() => handlePromotionalClick('keychain')}
                                            className={`${selectpromotional === 'keychain' ? 'active' : ''}`}
                                        >pvc keychains</p>|
                                        <p onClick={() => handlePromotionalClick('flag')}
                                            className={`${selectpromotional === 'flag' ? 'active' : ''}`}
                                        >Flags</p>|
                                        <p onClick={() => handlePromotionalClick('pen')}
                                            className={`${selectpromotional === 'pen' ? 'active' : ''}`}
                                        >Custom Pens</p>|
                                        <p onClick={() => handlePromotionalClick('lanyard')}
                                            className={`${selectpromotional === 'lanyard' ? 'active' : ''}`}
                                        >Custom Lanyards</p>
                                    </div>

                                    {selectpromotional === 'sticker' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={sticker1} />
                                                <Image src={sticker2} />
                                                <Image src={sticker3} />
                                                <Image src={sticker4} />
                                                <Image src={sticker5} />
                                                <Image src={sticker6} />
                                                <Image src={sticker7} />
                                                <Image src={sticker8} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectpromotional === 'bands' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={wrist1} />
                                                <Image src={wrist2} />
                                                <Image src={wrist3} />
                                                <Image src={wrist4} />
                                                <Image src={wrist5} />
                                                <Image src={wrist6} />
                                                <Image src={wrist7} />
                                                <Image src={wrist8} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectpromotional === 'promotional3' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={dtf1} />
                                                <Image src={dtf2} />
                                                <Image src={dtf3} />
                                                <Image src={dtf4} />
                                                <Image src={dtf5} />
                                                <Image src={dtf6} />
                                                <Image src={dtf7} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectpromotional === 'keychain' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={pv1} />
                                                <Image src={pv2} />
                                                <Image src={pv3} />
                                                <Image src={pv4} />
                                                <Image src={pv5} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectpromotional === 'flag' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={flg1} />
                                                <Image src={flg2} />
                                                <Image src={flg3} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectpromotional === 'pen' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={pen1} />
                                                <Image src={pen2} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectpromotional === 'lanyard' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={lanyard} />
                                                <Image src={lanyard1} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                </>
                            }
                            {/* {selectedValue === 'Keychains' &&
                                <>
                                    <div className='portfolio_select_item'>

                                        <p onClick={() => handleKechainClick('keychain1')}
                                            className={`${selectKeychain === 'keychain1' ? 'active' : ''}`}>
                                            Leather Keychain</p>|
                                        <p onClick={() => handleKechainClick('keychain2')}
                                            className={`${selectKeychain === 'keychain2' ? 'active' : ''}`}>
                                            wood keychain </p>|
                                        <p onClick={() => handleKechainClick('keychain3')}
                                            className={`${selectKeychain === 'keychain3' ? 'active' : ''}`}
                                        >Metal keychain</p>|
                                        <p onClick={() => handleKechainClick('keychain4')}
                                            className={`${selectKeychain === 'keychain4' ? 'active' : ''}`}
                                        >pvc keychain</p>
                                    </div>
                                    {selectKeychain === 'keychain1' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={pleather1} />
                                                <Image src={pleather2} />
                                                <Image src={pleather3} />
                                                <Image src={pleather4} />
                                                <Image src={pleather5} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }  {selectKeychain === 'keychain2' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={pwood1} />
                                                <Image src={pwood2} />
                                                <Image src={pwood3} />
                                                <Image src={pwood4} />

                                                <Image src={pwood6} />
                                                <Image src={pwood7} />
                                                <Image src={pwood8} />
                                                <Image src={pwood9} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectKeychain === 'keychain3' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={metal1} />
                                                <Image src={metal2} />
                                                <Image src={metal3} />
                                                <Image src={metal4} />
                                                <Image src={metal5} />
                                                <Image src={metal6} />
                                                <Image src={metal7} />
                                                <Image src={metal8} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    {selectKeychain === 'keychain4' &&
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
                                            <Image.PreviewGroup
                                                preview={{
                                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                            >
                                                <Image src={pv1} />
                                                <Image src={pv2} />
                                                <Image src={pv3} />
                                                <Image src={pv4} />
                                                <Image src={pv5} />
                                            </Image.PreviewGroup>
                                        </motion.div>
                                    }
                                    </>
                            } */}
                        </div>

                    </div>
                </div>
                <LogoSlider />
            </Container>
        </MainLayout >
    )
}




export default Portfolio