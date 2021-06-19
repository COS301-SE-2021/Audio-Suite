import '../CSS/UserSideBar.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function UserSideBar({officeSelected, leaveOffice, getOffices, joinOffice}) {
    return(
        <Container fluid style={{color: "white"}}>
            <Row>
                <Col>
                    <h3>Offices:</h3>
                </Col>
            </Row>
            {
                getOffices()
            }
            <br></br>
            {
                officeSelected !== ''
                &&
                <>
                <Row>
                    <Col>
                        <h4>Office Settings:</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="success" block onClick={ async () => {} }>Send Invite</Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Button variant="danger" block onClick={ async () => {await leaveOffice("office")} }>Leave Office</Button>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                </>
            }
            <Row>
                <Col>
                    <h4>Quick Settings:</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="info" block onClick={ async () => {} }>Create Office</Button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Button variant="info" block onClick={ async () => {} }>Join Office</Button>
                </Col>
            </Row>
            
            
        </Container>
    )
}

export default UserSideBar
