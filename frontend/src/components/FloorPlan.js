import React from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FloorPlan = ({joinRoom, officeSelected, getRemoteUsers}) => {
    return (
        <div>
            <h1>{officeSelected}</h1>
            <br></br>
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Rooms</h3>
                        <Button variant="outline-light" block onClick={ async () => {joinRoom("Open Office Space")} }>Open Office Space</Button>
                        <Button variant="outline-light" block onClick={ async () => {joinRoom("Coffee Station")} }>Coffee Station</Button>
                        <Button variant="outline-light" block onClick={ async () => {joinRoom("Reception")} }>Reception</Button>
                        <Button variant="outline-light" block onClick={ async () => {joinRoom("Meeting Room")} }>Meeting Room</Button>
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
