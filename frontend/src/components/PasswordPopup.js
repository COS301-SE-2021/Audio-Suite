import React from 'react';

import "../CSS/Profile.css";
import Container from 'react-bootstrap/Container'

const PasswordPopup = () => {
   
    return (
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <Container>
            <p>Enter your current password and your new password.</p>
            <hr></hr>
                <div class="form-group">
                    <label ><h6 class="fieldset-title">Current Password</h6></label>
                    <div class="col-md-10 col-sm-9 col-xs-12">
                    <input class="form-control" type="password" id="account-pass-old"></input>
                    </div>
                </div>
            
                <div class="form-group">
                    <label ><h6 class="fieldset-title">New Password</h6></label>
                    <div class="col-md-10 col-sm-9 col-xs-12">
                        <input class="form-control" type="password" id="account-pass-new"></input>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PasswordPopup