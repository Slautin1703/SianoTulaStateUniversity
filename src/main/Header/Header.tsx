import React from 'react';
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import settings from '../../images/settings.png'
import {HeaderTypes} from "../Constants";
import logo from '../../images/logo.png'


const Header = ({title,userId,isAuth = false}: HeaderTypes) => {
    return (
        <Col md={6} style={{ position: 'sticky', top: 0, background: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
                <div style={{ display:'flex', justifyContent: 'space-between',padding: '8px'}}>
                    <Link to={'/'} style={{alignSelf: 'center', fontWeight: 500, color: '#000', fontSize: 20}}>
                        {userId ? `@${userId}` : title}
                        {!isAuth ? <img width={100} src={logo} alt=""/>: ''}
                    </Link>
                    {
                        isAuth ? <div>
                            <img src={settings} style={{width: 32, marginTop: 4, cursor: 'pointer'}} alt=""/>
                        </div>: ''
                    }
                </div>
        </Col>
    );
};

export default Header;
