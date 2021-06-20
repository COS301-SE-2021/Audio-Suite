import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

// const UserSettingsPage = ({changePage}) => {

//     return (
//         <>
//             <h1>Settings</h1>
//         </>
//     )

// }

function SettingTest() {
    return (
        <div>
        <Jumbotron fluid>
            <Container>
                <h1>Settings</h1>
            </Container>
        </Jumbotron>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="forth">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Tab 1</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                one
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                two
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                three
              </Tab.Pane>
              <Tab.Pane eventKey="forth">
                four
              </Tab.Pane><Tab.Pane eventKey="fifth">
                five
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
    );
  }

export default SettingTest