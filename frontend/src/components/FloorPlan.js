import React from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FloorPlan = ({ officeSelected, getRemoteUsers, getOfficeRooms}) => {
    return (
        <div>
            <br></br>
            <center><h1>{officeSelected}</h1></center>
            <br></br>
            <Container fluid>
                <Row>
                    <Col>
                        <center>
                            <Card className="text-center" style={{height: "50vh" ,width: "30vw"}}>
                                <Card.Body>
                                    <br></br>
                                    <h3>Rooms</h3>
                                    <br></br>
                                    <br></br>
                                    <center>
                                    {
                                        getOfficeRooms()
                                    }
                                    </center>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>
                    <Col>
                        <center>
                            <Card className="text-center" style={{height: "50vh" ,width: "30vw"}}>
                                <Card.Body>
                                    <br></br>
                                    <h3>Users</h3>
                                    <br></br>
                                    <br></br>
                                    <center>
                                        <pre>
                                        {
                                            getRemoteUsers()
                                        }
                                        </pre>
                                    </center>
                                </Card.Body>
                            </Card>
                        </center>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FloorPlan
