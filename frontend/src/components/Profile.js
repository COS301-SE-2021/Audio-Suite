import React from 'react';
import "../CSS/Profile.css";
import Button from 'react-bootstrap/Button'
import ChangeEmail from '../components/ChangeEmail'
import ChangePassword from '../components/ChangePassword'

const Profile = () => {

    return (
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <div class="content-panel">
                <div class="view-account">
                    <section class="module">
                        <div class="module-inner">
                            <div class="content-panel">
                                <h2 class="title">Profile</h2>
                                <form class="form-horizontal">
                                    <fieldset class="fieldset">
                                        <h3 class="fieldset-title">Personal Info</h3>
                                        <div class="form-group avatar">
                                            <figure class="figure col-md-2 col-sm-3 col-xs-12">
                                                <img class="img-rounded img-responsive" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt=""></img>
                                            </figure>
                                            <div class="form-inline col-md-10 col-sm-9 col-xs-12">
                                                <input type="file" class="file-uploader pull-left"></input>
                                                <button type="submit" class="btn btn-sm btn-default-alt pull-left">Update Image</button>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-2 col-sm-3 col-xs-12 control-label">User Name</label>
                                            <div class="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" class="form-control" id="account-fn" required=""></input>
                                            </div>
                                        </div>
                    
                                        <div class="form-group">
                                            <label for="account-fn" class="col-md-2 col-sm-3 col-xs-12 control-label">First Name</label>
                                            <div class="col-md-10 col-sm-9 col-xs-12">
                                                <input type="text" class="form-control" id="account-fn" required=""></input>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
                                            <div class="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" class="form-control" id="account-fn" required=""></input>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                                <input class="btn btn-primary" type="submit" value="Update Profile"></input>
                                            </div>
                                        </div>
                                        <br></br>
                                    </fieldset>
                                    <fieldset class="fieldset">
                                        <h3 class="fieldset-title">Edit Contact Info</h3>
                                        <ChangeEmail/>
                                        <br></br>
                                    </fieldset>
                                    <fieldset class="fieldset">
                                        <h3 class="fieldset-title">Change Current Password</h3>
                                        <ChangePassword/>
                                        <br></br>
                                        <br></br>
                                    </fieldset>
                                    <fieldset class="fieldset">
                                        <h3 class="fieldset-title">Log Out of My Account</h3>
                                        <Button variant="danger" class="btn btn-info " >
                                            Log Out
                                        </Button>
                                        <br></br>
                                    </fieldset>
                                    <hr></hr>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Profile