
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './Counter.css'
import { Col, Row, Container } from "react-bootstrap";
import ChooseQues from "./ChooseQues";
import { motion } from "framer-motion";
import { FadeUp } from '../../Varient/Varient2'
import img1 from '../../images/Untitled-1.webp'
import img2 from '../../images/Untitled-2.webp'
import img3 from '../../images/Untitled-3.webp'
import img4 from '../../images/Untitled-4.webp'

export default function Counter() {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref}>
            <div className="backcount">
                <Container>
                    <div className="section-padding">

                        <Row className="d-flex flex-wrap align-items-center justify-content-space-between ">
                            <Col md={6} style={{overflowX:'hidden'}}>
                                <ChooseQues />
                            </Col>
                            <Col md={6}>
                                <div className="counterBox">
                                    <motion.div
                                        variants={FadeUp(0.3)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.7 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        className="count" >
                                        <h3><img src={img3} alt="logo" /></h3>
                                        <div className="countNun">
                                            <h2> {inView ? <CountUp end={50} duration={5} /> : 0}
                                                +</h2>
                                            <p>Our Team</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={FadeUp(0.3)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.7 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        className="count" >
                                        <h3><img src={img1} alt="logo" /></h3>
                                        <div className="countNun">
                                            <h2> {inView ? <CountUp end={5000} duration={5} /> : 0}
                                                +</h2>
                                            <p>Happy Clients</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={FadeUp(0.3)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.7 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        className="count" >
                                        <h3><img src={img2} alt="logo" /></h3>
                                        <div className="countNun">
                                            <h2> {inView ? <CountUp end={200} duration={5} /> : 0}
                                                K+</h2>
                                            <p>Complete Projects</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        variants={FadeUp(0.3)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.7 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        className="count" >
                                        <h3><img src={img4} alt="logo" /></h3>
                                        <div className="countNun">
                                            <h2> {inView ? <CountUp end={10} duration={5} /> : 0}
                                                +</h2>
                                            <p>Years In Experience</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div >
        </div >
    );
}