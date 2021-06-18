//import { useState } from 'react'

import '../CSS/UserPage.css'

import Banner from '../components/Banner'
import UserCenter from '../components/UserCenter'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UserPage = ({userJWT}) => {
    return (
        <Container fluid className="UserPage">
            <Row>
                <Col>
                    <Banner />
                </Col>
            </Row>
            <Row>
                <UserCenter userJWT={userJWT} />
            </Row>
        </Container>
    )
}

export default UserPage
