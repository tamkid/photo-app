import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <header className='header'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs='auto' className='header__title'>Kid App</Col>
                    <Col xs='auto'>
                        <NavLink
                            exact
                            to='/photos'
                            className='header__link'
                            activeClassName='header__link--active'
                        >
                            Photos
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;