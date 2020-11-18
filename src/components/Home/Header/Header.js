import { Button, Container } from '@material-ui/core';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section className='header-main'>
            <Container>
                <h1>Prepare for <br/> takeoff.</h1>
                <p>Make your business take flight with the complete sales & marketing toolbox.
                Grow. Sell. Engage.</p>
                <Button style={{marginBottom:'10px'}} color='primary' variant="contained">Take a free test drive!</Button>
            </Container>
        </section>
    );
};

export default Header;