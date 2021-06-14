import React, { Component } from 'react';
import { useState } from 'react'

import "../CSS/ChangeEmail.css";
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

import EmailPopup from './EmailPopup.js'

const ChangeEmail = ({onChangePageType, changePage}) => {

    const [modalShow, setModalShow] = useState(false);


    function MydModalWithGrid(props) {
        return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <h3>Enter an email address</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <EmailPopup/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Done</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    // const navigateToLoginPage = () => 
    // {
    //     //onChangePageType('loginPage')
    //     changePage('splashPage')
    // }

    return (
        <>
            <div class="container">
                <div class="main-body">
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        fip@jukmuh.al
                                    </div>
                                </div>
                                <hr></hr>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <Button variant="secondary" class="btn btn-info " onClick={() => setModalShow(true)}>
                                            Edit
                                        </Button>

                                        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangeEmail