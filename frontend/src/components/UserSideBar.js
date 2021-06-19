import { useState } from 'react'

import '../CSS/UserSideBar.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FormModal from './FormModal'
import SingleMessageModal from './SingleMessageModal'

function UserSideBar({jwt, officeSelected, leaveOffice, getOffices, joinOffice}) {
    const [modalShow, setModalShow] = useState(false);
    const [modalType, setModalType] = useState('');

    const [responseModalShow, setResponseModalShow] = useState(false);
    const [responseModalTitle, setResponseModalTitle] = useState('');
    const [responseModalMessage, setResponseModalMessage] = useState('');

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
                        <Button variant="success" block onClick={ async () => {setModalShow(true); setModalType('sendInvite') } }>Send Invite</Button>
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
                    <Button variant="info" block onClick={ async () => {setModalShow(true); setModalType('createOffice') } }>Create Office</Button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Button variant="info" block onClick={ async () => {setModalShow(true); setModalType('joinOffice') } }>Join Office</Button>
                </Col>
            </Row>
            
            <FormModal 
                jwt={jwt} 
                show={modalShow} 
                onHide={() => setModalShow(false)} 
                type={modalType} 
                setResponseModalShow={setResponseModalShow} 
                setResponseModalTitle={setResponseModalTitle} 
                setResponseModalMessage={setResponseModalMessage}
            />

            <SingleMessageModal 
                show={responseModalShow} 
                onHide={() => setResponseModalShow(false)} 
                title={responseModalTitle} 
                message={responseModalMessage}
            />
        </Container>
    )
}

export default UserSideBar
