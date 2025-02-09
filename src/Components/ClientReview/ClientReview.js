import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import './ClientReview.css'
import { motion } from 'framer-motion';
import { FadeIn } from '../../Varient/Varient';
import img1 from '../../images/MainLogo/BD Black LOGO VERSION PNG1.png'
// Sample data for the client reviews
const reviews = [
    {
        name: "John Doe",
        review: "Great service! Highly recommend this team. They did an amazing job.",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        name: "Jane Smith",
        review: "The best experience I’ve had! Professional and efficient.",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        name: "James Wilson",
        review: "Wonderful work, the results exceeded my expectations.",
        rating: "⭐⭐⭐⭐⭐",
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
        // arrows: true, // Show next/previous arrows
        // autoplay: true, // Enable autoplay
        // autoplaySpeed: 2000, // Time between slides in milliseconds (3 seconds)
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
                            once: false, amount: 0.7
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
                                                <img src={img1} alt='Client' className='img-fluid' />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7}>
                                        <div className='client-text'>
                                            <p className="review-text">"{review.review}"</p>
                                            <br/>
                                            <br/>
                                            <p className="reviewer-name">- {review.name}</p>
                                            <p className="review-rating">{review.rating}</p>
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
