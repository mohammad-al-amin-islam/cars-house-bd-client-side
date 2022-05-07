import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firesbase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Cars House BD
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to='/manage-inventories'>Manage Items</Nav.Link>
                                <Nav.Link as={Link} to='/add-items'>Add Item</Nav.Link>
                                <Nav.Link as={Link} to='/my-items'>My Items</Nav.Link>
                            </>
                        }
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        {
                            user ?
                                <button onClick={() => signOut(auth)} className='btn btn-link text-decoration-none text-light'>Logout</button>
                                :
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;