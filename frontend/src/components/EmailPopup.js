import React from 'react';

import "../CSS/Profile.css";
import Container from 'react-bootstrap/Container'

const EmailPopup = () => {

    return (
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <Container>
            <p>Enter a new email address and your current password.</p>
            <hr></hr>
                <div class="form-group">
                    <label ><h6 class="fieldset-title">Email</h6></label>
                    <div class="col-md-10 col-sm-9 col-xs-12">
                    <input type="text" class="form-control" id="account-fn" required=""></input>
                    </div>
                </div>
            
                <div class="form-group">
                    <label ><h6 class="fieldset-title">Current Password</h6></label>
                    <div class="col-md-10 col-sm-9 col-xs-12">
                        <input class="form-control" type="password" id="account-pass"></input>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default EmailPopup