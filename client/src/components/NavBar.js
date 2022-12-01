import React, { useContext } from 'react';
import { Context } from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import { SHOP_ROUTE } from '../utils/consts';
import { Button, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useNavigate } from 'react-router-dom';


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className="index-navbar" style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE} >Paradise flowers.</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button 
                        variant = {"light"}
                        onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Admin
                        </Button>
                        <Button 
                        variant = {"light"}
                        className="ml-2" 
                        onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Sign out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button 
                        variant = {"light"}
                        // class={"btn btn-info"} 
                        onClick={() => user.setIsAuth(true)}
                        >
                            Authorization
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar >
    );
});

export default NavBar;