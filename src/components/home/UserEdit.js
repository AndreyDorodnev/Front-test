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
import EditForm from './EditForm';
import AddForm from './AddForm';

export default props => {
    return (
        <React.Fragment>
            {
                props.user? 
                <EditForm user={props.user} editUser={props.editUser} cancelEdit={props.cancelEdit}/>
                :
                <AddForm createUser={props.createUser}/>
            }
        </React.Fragment>

    )
}