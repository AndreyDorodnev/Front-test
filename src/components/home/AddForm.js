import React, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default props => {

    const [email,setEmail] = useState('');
    const [firstName,setfirstName] = useState('');
    const [lastName,setlastName] = useState('');
    const [password,setpassword] = useState('');

    const addFormSubmit = (event) => {
        event.preventDefault();
        props.createUser({
            email: email,
            first_name: firstName,
            last_name: lastName,
            password: password
        })
    }

    return (
        <Form className='edit-form' onSubmit={addFormSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" required placeholder="First Name" value={firstName} onChange={e=>setfirstName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" required placeholder="Last Name" value={lastName} onChange={e=>setlastName(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required placeholder="Password" value={password} onChange={e=>setpassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Add user
            </Button>
        </Form>
    )
}