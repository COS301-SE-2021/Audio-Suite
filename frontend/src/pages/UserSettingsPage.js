import React from 'react'
import Tabs from "../components/Tabs.js"; 
import "../CSS/UserSettingsPage.css";
import Profile from '../components/Profile'
import NotificationSettings from '../components/NotificationSettings'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// const UserSettingsPage = ({changePage}) => {

// }

function UserSettingsPage() {
    return (
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
            
        <div className="settings-container">
                <div className="settings-container-inner">
                        <br></br>
                        <h1>Settings</h1>
                        <br></br>
                </div>
            <Tabs>
            <div label="Profile" > 
            <Row>
                {/* <Col>1 of 3</Col> */}
                <Col xs={9}><Profile/></Col>
                <Col></Col>
            </Row>
            </div> 
            <div label="Notifications"> 
                {/* <Col>1 of 3</Col> */}
                <Col></Col>
                <Col xs={9}><NotificationSettings/></Col>
                <Col></Col>
            </div> 
            <div label="Preferences"> 
                K
            </div>
            <div label="Audio"> 
                Cool
            </div> 
            <div label="Privacy"> 
                Thanks
            </div>   
        </Tabs> 
        </div>
      </>
    );
  }

export default UserSettingsPage