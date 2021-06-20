import { useState } from 'react'
import validator from 'validator'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

const Signup = ({onChangePageType}) => {
    const [show, setShow] = useState(false);
    const [otp, set_otp] = useState('');
    const [user_input_otp, set_user_input_otp] = useState('');
    const [otp_status, set_otp_status] = useState('Please enter otp.');

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [validFirstName, setValidFirstName] = useState(false)
    const [validLastName, setValidLastName] = useState(false)
    const [validUsername, setValidUsername] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)

    const handleClose = () => 
    {
        if(otp === user_input_otp)
        {
            const OTP_requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName: firstName, lastName: lastName, userName: username, email: email, password: password})
            };

            fetch("http://localhost:3001/api/register", OTP_requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result);
                    console.log("User registered successfully.");
                }
            )
            
            setShow(false);
            onChangePageType('loginPage')
        }
        else
        {
            set_otp_status('Invalid OTP given, please try again.')
        }
    }


    const handleShow = (event) => {
        event.preventDefault();
        if(
            validFirstName && 
            validLastName && 
            validUsername && 
            validEmail && 
            validPassword)
        {
            console.log("add User")
            console.log({
                firstName: firstName, 
                lastName: lastName, 
                username: username, 
                email: email,
                password: password
            })
            
            const OTP_requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ emailAddress: email, userName: username})
            };

            fetch("http://localhost:3001/api/notifications/sendVerification", OTP_requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    set_otp(result.otp);
                }
            )

            setShow(true);
        }
        else
        {
            alert('Not all input fields are valid.')
        }
    }

    const validateFirstName = (event) => 
    {
        setFirstName(event.target.value)
        if(event.target.value !== '')
        {
            setValidFirstName(true)
        }
        else
        {
            setValidFirstName(false)
        }
    }

    const validateLastName = (event) => 
    {
        setLastName(event.target.value)
        if(event.target.value !== '')
        {
            setValidLastName(true)
        }
        else
        {
            setValidLastName(false)
        }
    }

    const validateUsername = (event) => 
    {
        setUsername(event.target.value)
        if(event.target.value !== '')
        {
            setValidUsername(true)
        }
        else
        {
            setValidUsername(false)
        }
    }

    const validateEmail = (event) =>
    {
        setEmail(event.target.value)
        if(validator.isEmail(event.target.value))
        {
            setValidEmail(true)
            console.log(event.target.value, " Valid email")
        }
        else
        {
            setValidEmail(false)
        }
    }

    const validatePassword = (event) =>
    {
        setPassword(event.target.value)
        if(validator.isStrongPassword(
            event.target.value, 
            {
                minLength: 8, 
                minLowercase: 1, 
                minUppercase: 1, 
                minNumbers: 1, 
                minSymbols: 1, 
                returnScore: false
            }))
        {
            setValidPassword(true)
            console.log(event.target.value, " Valid password")
        }
        else
        {
            setValidPassword(false)
        }
    }

    return (
        <div>
            <center>
                <Container>
                    <Row>
                        <Col xs={1} md={4}></Col>
                        <Col xs={10} md={4}>
                            <Form onSubmit={handleShow}>
                                <Form.Group controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="First Name" 
                                    value={firstName}
                                    onChange={(event) => validateFirstName(event)}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Last Name" 
                                    value={lastName}
                                    onChange={(event) => validateLastName(event)}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Username" 
                                    value={username}
                                    onChange={(event) => validateUsername(event)}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    value={email}
                                    onChange={(event) => validateEmail(event)}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(event) => validatePassword(event)}/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Sign up
                                </Button>
                            </Form>
                        </Col>
                        <Col xs={1} md={4}></Col>
                    </Row>
                </Container>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group controlId="formBasicOTP">
                        <Form.Label>{otp_status}</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="OTP" 
                            value={user_input_otp}
                            onChange={(event) => {set_user_input_otp(event.target.value)}}/>
                    </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>Confirm</Button>
                    </Modal.Footer>
                </Modal>
            </center>
        </div>
    )
}

export default Signup