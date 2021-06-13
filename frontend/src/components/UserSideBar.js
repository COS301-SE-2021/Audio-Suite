import React from 'react'

import '../CSS/UserSideBar.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UserSideBar = ({officeSelected, onClick}) => {
    return (
        <div className="sidebar">
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Offices:</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="outline-light" block onClick={() => onClick('Epi-Use')}>Epi-Use</Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Button variant="outline-light" block onClick={() => onClick('Pegasus')}>Pegasus</Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Button variant="outline-light" block onClick={() => onClick('Tuks CS')}>Tuks CS</Button>
                    </Col>
                </Row>
                <br></br>
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
                            <Button variant="outline-light" block onClick={() => onClick('')}>Leave Office</Button>
                        </Col>
                    </Row>
                }
            </Container>
        </div>
    )
}

export default UserSideBar
