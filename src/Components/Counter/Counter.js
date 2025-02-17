
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './Counter.css'
import { Col, Row, Container } from "react-bootstrap";
import ChooseQues from "./ChooseQues";

export default function Counter() {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref}>
            <div className="backcount">
                <Container>
                    <div className="section-padding">
                        <Row className="d-flex flex-wrap align-items-center justify-content-center ">
                            <Col md={6}>
                                <ChooseQues />
                            </Col>
                            <Col md={6}>
                                <div className="counterBox">
                                    <div className="count" >
                                        <h2>Success</h2>
                                        <h1> {inView ? <CountUp end={500} duration={5} /> : 0}
                                            +</h1>
                                        <p>Designs Delivered Within 24-48 Hours.</p>
                                    </div>
                                    <div className="count" >
                                        <h2>Success</h2>
                                        <h1> {inView ? <CountUp end={500} duration={5} /> : 0}
                                            +</h1>
                                        <p>Designs Delivered Within 24-48 Hours.</p>
                                    </div>
                                    <div className="count" >
                                        <h2>Success</h2>
                                        <h1> {inView ? <CountUp end={500} duration={5} /> : 0}
                                            +</h1>
                                        <p>Designs Delivered Within 24-48 Hours.</p>
                                    </div>
                                    <div className="count" >
                                        <h2>Success</h2>
                                        <h1> {inView ? <CountUp end={500} duration={5} /> : 0}
                                            +</h1>
                                        <p>Designs Delivered Within 24-48 Hours.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}