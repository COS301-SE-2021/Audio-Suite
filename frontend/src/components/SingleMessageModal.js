import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const SingleMessageModal = ({show, onHide, title, message}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{message}</h3>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SingleMessageModal
