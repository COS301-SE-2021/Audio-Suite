import React, { useState } from 'react'

import '../CSS/UserSideBar.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function UserSideBar({officeSelected, setCurrentOffice, leaveOffice, getOffices}) {
    console.log(officeSelected);
    return(
        <Container fluid>
            <Row>
                <Col>
                    <h3>Offices:</h3>
                </Col>
            </Row>
            {
                getOffices()
            }
            <br></br>
            <Row>
                <Col>
                    <h4>Quick Settings:</h4>
                </Col>
            </Row>
            {
                officeSelected !== ''
                &&
                <Row>
                    <Col>
                        <Button variant="outline-light" block onClick={ async () => {await leaveOffice("office")} }>Leave Office</Button>
                    </Col>
                </Row>
            }
        </Container>
    )
}

export default UserSideBar
