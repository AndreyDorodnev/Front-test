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

    return (
        <Form className='edit-form'>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder="Enter email" value={props.user.email} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" required placeholder="Password" value={props.user.first_name}  />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" required placeholder="Password" value={props.user.last_name} />
            </Form.Group>
            <Button variant="primary">
                Edit
            </Button>
        </Form>
    )
}