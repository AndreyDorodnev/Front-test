import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default props => {

    const [id,setId] = useState(0);
    const [email,setEmail] = useState('');
    const [firstName,setfirstName] = useState('');
    const [lastName,setlastName] = useState('');

    useEffect(()=>{
        if(props.user){
            setId(props.user.id);
            setEmail(props.user.email);
            setfirstName(props.user.first_name);
            setlastName(props.user.last_name);
        }
    },[props]);

    const editFormSubmit = event => {
        event.preventDefault();
        props.editUser&&props.editUser({
            id,
            email,
            first_name: firstName,
            last_name: lastName
        });
    }

    return (
        <Card>
            <Card.Header>User Edit</Card.Header>
            <Form className='edit-form' onSubmit={editFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" required placeholder="Password" value={firstName} onChange={e=>setfirstName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" required placeholder="Password" value={lastName} onChange={e=>setlastName(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Edit
                </Button>
                <Button variant="warning" onClick={props.cancelEdit}>
                    Cancel
                </Button>
            </Form>
        </Card>
    )
}