import React, { useContext } from 'react';
import { Context } from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = () => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{ color: 'white' }} to={SHOP_ROUTE} >VP.</NavLink>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar >
    );
};

export default NavBar;