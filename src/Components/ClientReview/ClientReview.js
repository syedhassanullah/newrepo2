import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import './ClientReview.css'
import { motion } from 'framer-motion';
import { FadeIn } from '../../Varient/Varient';
import img1 from '../../images/ClientReview/client1.jpg'
import img2 from '../../images/ClientReview/client2.jpeg'
import img3 from '../../images/ClientReview/client4.jpg'
import img4 from '../../images/ClientReview/client3.jpg'
import img5 from '../../images/ClientReview/client6.jpg'
// import { Carousel } from 'antd';

// Sample data for the client reviews
const reviews = [
    {
        name: "John Doe",
        review: "Wonderful work, the results exceeded my expectations.",
        post: "Manager",
        img: img1
    },
    {
        name: "Jane Smith",
        review: "Wonderful work, the results exceeded my expectations.",
        post: "Team Lead",
        img: img2
    },
    {
        name: "James Wilson",
        review: "Wonderful work, the results exceeded my expectations.",
        post: "Manager",
        img: img3
    },
    {
        name: "James Wilson",
        review: "Wonderful work, the results exceeded my expectations.",
        post: "CEO",
        img: img4
    },
    {
        name: "James Wilson",
        review: "Wonderful work, the results exceeded my expectations.",
        post: "Manager",
        img: img5
    },
    // Add more reviews as needed
];

const ClientReview = () => {
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite scroll
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one review at a time
        slidesToScroll: 1, // Scroll one review at a time
        arrows: false, // Show next/previous arrows
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500, // Time between slides in milliseconds (3 seconds)
    };


    return (

        <div className="client-reviews">
            <Container>
                <div className='section-padding'>

                    {/* <h1>What Our Clients Say</h1> */}
                    <motion.div
                        variants={FadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{
                            once: true, amount: 0.7
                        }}
                        transition={{
                            type: 'tween', scale: 0.8,
                        }}
                        className='ServiceSecText component-heading'>........
                        <h1>What Our Clients Say</h1>
                    </motion.div>

                    <Slider {...settings}>
                        {reviews.map((review, index) => (


                            <div key={index} className="review-slide">
                                <Row className="d-flex flex-wrap align-items-center justify-content-center">
                                    <Col md={5}>
                                        <div className='client-img'>
                                            <div className='client-img-bx'>
                                                <img src={review.img} alt='Client' className='img-fluid' />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7}>
                                        <div className='client-text'>
                                            <p className="review-text"><span>"</span>{review.review}<span>"</span></p>
                                            <br/>
                                            <p className="reviewer-name">{review.name}</p>
                                            <p className="review-rating">{review.post}</p>
                                        </div>
                                    </Col>
                                </Row>

                            </div>


                        ))}
                    </Slider>
                </div>
            </Container >
        </div >
    );
};

export default ClientReview;



// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

// const ClientReview = () => (
// //   <Carousel autoplay>
// //     <div>
// //       <h3 style={contentStyle}>1</h3>
// //     </div>
// //     <div>
// //       <h3 style={contentStyle}>2</h3>
// //     </div>
// //     <div>
// //       <h3 style={contentStyle}>3</h3>
// //     </div>
// //     <div>
// //       <h3 style={contentStyle}>4</h3>
// //     </div>


// //   </Carousel>

//  <div className="client-reviews">
//             <Container>
//                 <div className='section-padding'>

//                     {/* <h1>What Our Clients Say</h1> */}
//                     <motion.div
//                         variants={FadeIn('left', 0.2)}
//                         initial="hidden"
//                         whileInView={'show'}
//                         viewport={{
//                             once: true, amount: 0.7
//                         }}
//                         transition={{
//                             type: 'tween', scale: 0.8,
//                         }}
//                         className='ServiceSecText component-heading'>........
//                         <h1>What Our Clients Say</h1>
//                     </motion.div>

//                     <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}toplay>
//                         {reviews.map((review, index) => (


//                             <div key={index} className="review-slide">
//                                 <Row className="d-flex flex-wrap align-items-center justify-content-center">
//                                     <Col md={5}>
//                                         <div className='client-img'>
//                                             <div className='client-img-bx'>
//                                                 <img src={review.img} alt='Client' className='img-fluid' />
//                                             </div>
//                                         </div>
//                                     </Col>
//                                      <Col md={7}>
//                                         <div className='client-text'>
//                                             <p className="review-text"><span>"</span>{review.review}<span>"</span></p>
//                                             <br/>
//                                             <p className="reviewer-name">{review.name}</p>
//                                             <p className="review-rating">{review.post}</p>
//                                         </div>
//                                     </Col>
//                                 </Row>

//                             </div>


//                         ))}
//                     </Carousel>
//                 </div>
//             </Container >
//         </div > 
// );

// export default ClientReview;
