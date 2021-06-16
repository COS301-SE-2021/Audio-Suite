import React from 'react';
import { useState } from 'react'

import "../CSS/ChangeEmail.css";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import PasswordPopup from './PasswordPopup.js'

const ChangePassword = () => {

    const [modalShow, setModalShow] = useState(false);


    function MydModalWithGrid(props) {
        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>Change your password</h3>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <PasswordPopup/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={props.onHide}>Done</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <Button variant="primary" class="btn btn-info " onClick={() => setModalShow(true)}>
                            Change Password
                        </Button>

                        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                    </div>
                </div>
            </div>     
        </>
    )
}

export default ChangePassword