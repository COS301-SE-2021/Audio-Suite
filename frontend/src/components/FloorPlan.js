import React from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FloorPlan = ({ officeSelected, getRemoteUsers, getOfficeRooms}) => {
    return (
        <div>
            <h1>{officeSelected}</h1>
            <br></br>
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Rooms</h3>
                        {
                            getOfficeRooms()
                        }
                    </Col>
                    <Col>
                        <h3>Users</h3>
                        <pre>
                        {
                            getRemoteUsers()
                        }
                        </pre>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FloorPlan
