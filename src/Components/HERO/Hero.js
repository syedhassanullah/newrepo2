import { React, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import MainButton from '../Buttons/MainButton';
import { FadeUp } from '../../Varient/Varient2';
// import digitizingImage from '../../images/MainLogo/Beyonddigi-white.png';
// import patchesImage from '../../images/MainLogo/Only BD logo-blue.png';
// import vectorImage from '../../images/MainLogo/Only BD logo-blue.png';
// import Apperal from '../../images/heroimg/apperal2.webp'
// import Prmotional from '../../images/heroimg/PROM1.webp'
// import Patch from '../../images/heroimg/patch2.webp'
// // import Hats from '../../images/heroimg/VAPS1.webp'
// import Vector from '../../images/heroimg/herovec4.webp'
// import Digi from '../../images/heroimg/digitizing4.webp'
import Apperal from '../../images/footer/360_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.webp'
import Prmotional from '../../images/footer/surge-promo-items.webp'
import Patch from '../../images/footer/sublimated-patches-wall-2024-01.webp'
// import Hats from '../../images/heroimg/VAPS1.webp'
import Vector from '../../images/footer/vector-art-6ttd2h971c0ivqyh.webp'
import Digi from '../../images/footer/digitizing-object.webp'
import './Hero.css';

import testimg from '../../images/footer/store-clothing-shop-bouique.jpg'


function Hero() {
    // Create an array with objects containing both text and image for each state
    const contentData = [
        { text: 'DIGITIZING', image: Digi },
        { text: 'PATCHES', image: Patch },
        { text: 'VECTOR', image: Vector },
        { text: 'Apperal Items', image: Apperal },
        // { text: 'Hats & Beanies', image: Hats },
        { text: 'Promotional Products', image: Prmotional }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % contentData.length);
        }, 4000); // Change every 3 seconds
    
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [contentData.length]); // Add contentData.length as a dependency
    

    const { text: currentContent, image: currentImage } = contentData[currentIndex];

    return (
        <>
            <div className='hero'>
                 <motion.img
                                key={currentContent}
                                variants={FadeUp(1.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.7 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                src={currentImage} alt='HERO'
                            />
                <div className='herogra'></div>
               
                
                <Container>
                    <div className='hero-comp'>
                        <div className='hero-text col-md-7'>
                            <h3>Beyond Digitizing <br />Agency</h3>
                            <h1>We are working on </h1>
                            <div className='chngecontent'>
                                <motion.h2
                                    key={currentContent}
                                    variants={FadeUp(1.3)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.7 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                >
                                    {currentContent}
                                </motion.h2>
                            </div>
                            <MainButton />
                        </div>
                        <div className='about-image-sec col-md-5 heroimg' md={6} sm={12}>
                            {/* <motion.img
                                key={currentContent}
                                variants={FadeUp(1.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.7 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                src={currentImage} alt='HERO' className='img-fluid' style={{width:'400px' ,height:'400px'}}
                            /> */}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Hero;



// import React, { useState, useEffect } from 'react';
// import './App.css';

// Images for each category
// import digitizingImage from './assets/digitizing.jpg';
// import patchesImage from './assets/patches.jpg';
// import vectorImage from './assets/vector.jpg';

// const App = () => {
//   const contentList = ['Digitizing', 'Patches', 'Vector']; // List of dynamic content
//   const [currentContent, setCurrentContent] = useState(contentList[0]);
//   const [currentImage, setCurrentImage] = useState(digitizingImage);

//   // Function to switch content and images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentIndex = contentList.indexOf(currentContent);
//       const nextIndex = (currentIndex + 1) % contentList.length;
//       const nextContent = contentList[nextIndex];
//       setCurrentContent(nextContent);

//       // Change the image based on the current content
//       if (nextContent === 'Digitizing') {
//         setCurrentImage(digitizingImage);
//       } else if (nextContent === 'Patches') {
//         setCurrentImage(patchesImage);
//       } else if (nextContent === 'Vector') {
//         setCurrentImage(vectorImage);
//       }
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [currentContent]);

//   return (
//     <div className="hero-section">
//       <div className="content-left">
//         <h1>{currentContent}</h1>
//         <p>We specialize in {currentContent.toLowerCase()} and provide high-quality services for your needs.</p>
//       </div>
//       <div className="image-right">
//         <img src={currentImage} alt={currentContent} />
//       </div>
//     </div>
//   );
// };

// export default App;