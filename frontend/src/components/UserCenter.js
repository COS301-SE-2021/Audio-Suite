import { useState } from 'react'

import '../CSS/UserCenter.css'

import UserSideBar from './UserSideBar'
import FloorPlan from './FloorPlan'
import TextChannel from './TextChannel'

import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const UserCenter = () => {
    const [currentOffice, setCurrentOffice] = useState('')
    const [selectedTab, setSelectedTab] = useState('floorPlan')

    const changeCurrentOfficeTo = (Office) => {
        setCurrentOffice(Office)
    }

    return (
        <>
            <Col md={3} lg={2}>
                <UserSideBar officeSelected={currentOffice} setCurrentOffice={changeCurrentOfficeTo}/>
            </Col>
            <Col md={9} lg={10}>
                <div id="TabbedPane">
                    {
                        currentOffice === '' 
                        ? 
                        <center>
                            <br></br>
                            <br></br>
                            <h3>
                                Please select an Office.
                            </h3>
                        </center>
                        : 
                        <Tabs
                            id="UserContent-tab"
                            activeKey={selectedTab}
                            onSelect={(k) => setSelectedTab(k)} 
                        >
                            <Tab eventKey="floorPlan" title="floorPlan">
                                <FloorPlan />
                            </Tab>
                            <Tab eventKey="textChannel" title="textChannel">
                                <TextChannel />
                            </Tab>
                        </Tabs>
                    }
                </div>
            </Col>
        </>
    )
}

export default UserCenter
