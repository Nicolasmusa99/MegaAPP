import react from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './itemcart.css';

import cart from './cart.svg';

export default function ItemCart(){

    return(
        <Container>
            <Row>
                <Col><img src={cart} className='cart-icon' alt='cart-icon'/></Col>
            </Row>
        </Container>
    );
}