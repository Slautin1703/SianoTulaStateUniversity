import React from 'react';
import {Col, Container} from "react-bootstrap";
import homeIcon from '../../images/home.png'

const Footer = () => {
    return (
        <Container style={{ position: 'fixed', bottom: 0, left: 0, boxShadow: '0 0 10px rgba(0,0,0,0.5)',background: '#fff', zIndex: 2 }}>
            <div className="footer" >
                <div style={{ width: '100%', display: 'flex' }}>
                    <Col className='footer__item' xs={4} md={6} xl={2} style={{textAlign: 'center'}}>
                            <img src={homeIcon} alt=""/>
                    </Col>
                    <Col className='footer__item' xs={4} md={6} xl={2} style={{textAlign: 'center'}}>

                            <img src={homeIcon} alt=""/>

                    </Col>
                    <Col className='footer__item' xs={4} md={6} xl={2} style={{textAlign: 'center'}}>
                        <img src={homeIcon} alt=""/>
                    </Col>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
