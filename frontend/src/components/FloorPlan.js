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
                            <Card className="text-center" style={{height: "50vh" ,width: "30vw", "background-color": "#363636"}}>
                                <Card.Body>
                                    <br></br>
                                    <h2>Rooms</h2>
                                    <hr style={{ width:"80%", "background-color": "white" }}></hr>
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
                            <Card className="text-center" style={{height: "50vh" ,width: "30vw", "background-color": "#363636"}}>
                                <Card.Body>
                                    <br></br>
                                    <h2>Users</h2>
                                    <hr style={{ width:"80%", "background-color": "white"}}></hr>
                                    <br></br>
                                    <center>
                                        <pre style={{"font-size": "25px", "font-family": "Helvetica", "color": "white"}}>
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
