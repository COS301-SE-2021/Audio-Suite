import React from 'react'
import { useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const FormModal = ({show, onHide, type, jwt, currentOfficeInviteCode, setResponseModalShow, setResponseModalTitle, setResponseModalMessage, updateUserOfficeList}) => {
    const [newOfficeName, setNewOfficeName] = useState('');
    const [newOfficeInvite, setNewOfficeInvite] = useState('');
    const [newSendOfficeInvite, setNewSendOfficeInvite] = useState('');
    const [newSendOfficeInviteName, setNewSendOfficeInviteName] = useState('');

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
                        updateUserOfficeList();
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
        else{
            setResponseError("Office name is required, Please don't leave in blank.");
        }
    }

    const joinOffice = async () => {
        if(newOfficeInvite !== ''){
            const joinOffice_requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({invite: newOfficeInvite, jwt: jwt})
            };

            fetch("http://localhost:3001/api/office/joinInvite", joinOffice_requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.status === 'Success')
                    {
                        onHide();
                        setResponseModalShow(true);
                        setResponseModalTitle("Success");
                        setResponseModalMessage("You have successfully joined the office.");
                        setNewOfficeName('');
                    }
                    else
                    {
                        console.log(result);
                        setResponseError("You are already in the office the invite link corresponds to.");
                        setNewOfficeName('');
                    }
                    //console.log("User registered successfully.");
                }
            )
        }
        else{
            setResponseError("Office invite code is required, Please don't leave it blank.");
        }
    }

    const sendInvite = async () => {
        if(newSendOfficeInvite !== '' && newSendOfficeInviteName !== ''){
            const sendInvite_requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({emailAddress: newSendOfficeInvite, name: newSendOfficeInviteName, inviteCode: currentOfficeInviteCode})
            };

            fetch("http://localhost:3001/api/notifications/sendInviteCode", sendInvite_requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.Response === 'Success')
                    {
                        onHide();
                        setResponseModalShow(true);
                        setResponseModalTitle("Success");
                        setResponseModalMessage("You have successfully sent the invite code.");
                        setNewSendOfficeInvite('');
                        setNewSendOfficeInviteName('');
                    }
                    else
                    {
                        setResponseError("Invite code could not be sent, Please try again.");
                        setNewSendOfficeInvite('');
                        setNewSendOfficeInviteName('');
                    }
                    //console.log("User registered successfully.");
                }
            )
        }
        else{
            setResponseError("The name and email of the person to send to is required, Please don't leave them blank.");
        }
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
                        <Form.Group controlId="formBasicName">
                                <Form.Label>Name of person the invite should be sent to</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Name" 
                                value={newSendOfficeInviteName}
                                onChange={(event) => setNewSendOfficeInviteName(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicSendInvite">
                                <Form.Label>Email of person the invite should be sent to</Form.Label>
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
