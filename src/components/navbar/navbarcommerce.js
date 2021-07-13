import react from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


import ItemCart from '../itemcart/ItemCart';


export default function NavbarCommerce(){




    return(

    <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <ItemCart />
    </Navbar>

    );
}