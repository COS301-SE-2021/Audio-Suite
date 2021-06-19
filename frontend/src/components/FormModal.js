import React from 'react'
import { useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const FormModal = ({show, onHide, type, jwt, setResponseModalShow, setResponseModalTitle, setResponseModalMessage}) => {
    const [newOfficeName, setNewOfficeName] = useState('');
    const [newOfficeInvite, setNewOfficeInvite] = useState('');
    const [newSendOfficeInvite, setNewSendOfficeInvite] = useState('');

    const [ResponseError, setResponseError] = useState('');

    const createOffice = async () => {
        if(newOfficeName !== ''){
            const createOffice_requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name: newOfficeName, jwt: jwt})
            };

            fetch("http://localhost:3001/api/office/register", createOffice_requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.Response === 'Success')
                    {
                        onHide();
                        setResponseModalShow(true);
                        setResponseModalTitle("Success");
                        setResponseModalMessage("New office " + newOfficeName + " sucessfully registered.");
                        setNewOfficeName('');
                    }
                    else
                    {
                        setResponseError("An office with that name already exists, Please choose a new name.");
                        setNewOfficeName('');
                    }
                    //console.log("User registered successfully.");
                }
            )
        }
    }

    const joinOffice = async () => {

    }

    const sendInvite = async () => {

    }

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {
                        type === 'createOffice'
                        &&
                        'Create a new office'
                    }
                    {
                        type === 'joinOffice'
                        &&
                        'Join a new office'
                    }
                    {
                        type === 'sendInvite'
                        &&
                        'Send Office invite'
                    }
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {
                    type === 'createOffice'
                    &&
                    <>  
                        {ResponseError !== '' && <p>{ResponseError}</p>}
                        <Form.Group controlId="formBasicOfficeName">
                                <Form.Label>Office Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Office Name" 
                                value={newOfficeName}
                                onChange={(event) => setNewOfficeName(event.target.value)}/>
                        </Form.Group>
                    </>
                }
                {
                    type === 'joinOffice'
                    &&
                    <>
                        {ResponseError !== '' && <p>{ResponseError}</p>}
                        <Form.Group controlId="formBasicOfficeInvite">
                                <Form.Label>Office Invite</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="OfficeInvite" 
                                value={newOfficeInvite}
                                onChange={(event) => setNewOfficeInvite(event.target.value)}/>
                        </Form.Group>
                    </>
                }
                {
                    type === 'sendInvite'
                    &&
                    <>
                        {ResponseError !== '' && <p>{ResponseError}</p>}
                        <Form.Group controlId="formBasicSendInvite">
                                <Form.Label>Send Office Invite</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Email" 
                                value={newSendOfficeInvite}
                                onChange={(event) => setNewSendOfficeInvite(event.target.value)}/>
                        </Form.Group>
                    </>
                }
                </Modal.Body>
                <Modal.Footer>
                {
                    type === 'createOffice'
                    &&
                    <Button onClick={async () => createOffice()}>
                        Create
                    </Button>
                }
                {
                    type === 'joinOffice'
                    &&
                    <Button onClick={async () => joinOffice()}>
                        Join
                    </Button>
                }
                {
                    type === 'sendInvite'
                    &&
                    <Button onClick={async () => sendInvite()}>
                        Send
                    </Button>
                }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FormModal
