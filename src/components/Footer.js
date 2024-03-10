import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-5 bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col sm={6} md={3}>
                        <h5>Section 1</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to="/link1" className="text-light">Link 1</NavLink></li>
                            <li><NavLink to="/link2" className="text-light">Link 2</NavLink></li>
                            <li><NavLink to="/link3" className="text-light">Link 3</NavLink></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={3}>
                        <h5>Section 2</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to="/link4" className="text-light">Link 4</NavLink></li>
                            <li><NavLink to="/link5" className="text-light">Link 5</NavLink></li>
                            <li><NavLink to="/link6" className="text-light">Link 6</NavLink></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={3}>
                        <h5>Section 3</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to="/link7" className="text-light">Link 7</NavLink></li>
                            <li><NavLink to="/link8" className="text-light">Link 8</NavLink></li>
                            <li><NavLink to="/link9" className="text-light">Link 9</NavLink></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={3}>
                        <h5>Section 4</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to="/link10" className="text-light">Link 10</NavLink></li>
                            <li><NavLink to="/link11" className="text-light">Link 11</NavLink></li>
                            <li><NavLink to="/link12" className="text-light">Link 12</NavLink></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center mt-4 mb-0">© {new Date().getFullYear()} <Link to={"https://github.com/Dharam-IN"} target='_blank' className='text-light'>Dharam</Link>. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
