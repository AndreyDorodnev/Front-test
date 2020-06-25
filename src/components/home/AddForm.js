import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

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
        });
    }

    return (
        <Card>
            <Card.Header>Add user</Card.Header>
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
        </Card>
    )
}