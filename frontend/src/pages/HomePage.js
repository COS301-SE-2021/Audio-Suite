import React from 'react'

import HomeNavbar from '../components/HomeNavbar'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const HomePage = ({changePage}) => {

    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>Audio Suite</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                </Container>
            </Jumbotron>
            <HomeNavbar changePage={changePage}/>
        </>
    )
}

export default HomePage
