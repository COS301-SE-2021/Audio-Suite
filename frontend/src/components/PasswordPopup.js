import React, { Component } from 'react';
import { useState } from 'react'

import "../CSS/Profile.css";
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

const PasswordPopup = ({onChangePageType, changePage}) => {
    // const navigateToLoginPage = () => 
    // {
    //     //onChangePageType('loginPage')
    //     changePage('splashPage')
    // }

    return (
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <Container>
            <p>Enter your current password and your new password.</p>
            <hr></hr>
                <div class="form-group">
                    <label ><h6 class="fieldset-title">Current Password</h6></label>
                    <div class="col-md-10 col-sm-9 col-xs-12">
                        <input type="text" class="form-control" value=""></input>
                    </div>
                </div>
            
                <div class="form-group">
                    <label ><h6 class="fieldset-title">New Password</h6></label>
                    <div class="col-md-10 col-sm-9 col-xs-12">
                        <input type="text" class="form-control" value=""></input>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PasswordPopup