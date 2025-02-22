import { React, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import MainButton from '../Buttons/MainButton';
import { FadeUp } from '../../Varient/Varient2';
import digitizingImage from '../../images/MainLogo/Beyonddigi-white.png';
import patchesImage from '../../images/MainLogo/Only BD logo-blue.png';
import vectorImage from '../../images/MainLogo/Only BD logo-blue.png';
import './Hero.css';

function Hero() {
    // Create an array with objects containing both text and image for each state
    const contentData = [
        { text: 'DIGITIZING', image: digitizingImage },
        { text: 'PATCHES', image: patchesImage },
        { text: 'VECTOR', image: vectorImage },
        { text: 'Apperal Items', image: vectorImage },
        { text: 'Hats & Beanies', image: vectorImage },
        { text: 'Promotional Products', image: vectorImage }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % contentData.length);
        }, 1500); // Change every 3 seconds
    
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [contentData.length]); // Add contentData.length as a dependency
    

    const { text: currentContent, image: currentImage } = contentData[currentIndex];

    return (
        <>
            <div className='hero'>
                <Container>
                    <div className='hero-comp'>
                        <div className='hero-text col-md-8'>
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
                        <div className='about-image-sec col-md-4 heroimg' md={6} sm={12}>
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
                                src={currentImage} alt='HERO' className=' img-fluid'
                            />
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