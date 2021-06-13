import React from 'react'

import '../CSS/HomeNavbar.css'

import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const HomeNavbar = ({changePage, pageType}) => {
    const navigateToLoginPage = () => 
    {
        changePage('splashPage')
    }

    return (
        <>
            <Navbar bg="light" expand="sm" >
                <Navbar.Brand><button id="Home-btn" onClick={() => changePage('homePage')}>Audio Suite</button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    {
                        pageType !== 'signupPage'
                        &&
                        <Form inline >
                            <Button variant="outline-success" onClick={() => navigateToLoginPage()}>Log In</Button>
                        </Form>
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default HomeNavbar
