import { useState } from 'react'
import validator from 'validator'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Login = ({setJWT, onLogin, onChangePageType}) => {

    const apiURL = "http://127.0.0.1:3001";

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)

    const validateUserCredentials = (event) => 
    {
        event.preventDefault()
        if(validEmail && validPassword)
        {
            console.log("Log user in!")

            const Login_requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, password: password })
            };

            fetch(apiURL+"/api/login", Login_requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.response === 'Success')
                    {
                        setJWT(result.jwt);
                        onLogin('userPage');
                    }
                    else
                    {
                        alert('Invalid User credentials.')
                    }
                }
            )
        }
        else
        {
            alert('Not all input fields are valid.')
        }
    }

    const validateEmail = (event) =>
    {
        setEmail(event.target.value)
        if(validator.isEmail(event.target.value))
        {
            setValidEmail(true)
            console.log("Email valid.")
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
            console.log("Password Valid.")
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
                            <Form onSubmit={validateUserCredentials}>
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
                                    Login
                                </Button>

                                <br></br>
                                <br></br>
                                <p>
                                    Don't have an account yet?
                                </p>
                                
                                <Button variant="primary" type="button" onClick={() => onChangePageType('signupPage')}>
                                    Sign up.
                                </Button>
                            </Form>
                        </Col>
                        <Col xs={1} md={4}></Col>
                    </Row>
                </Container>
            </center>
        </div>
    )
}

export default Login
