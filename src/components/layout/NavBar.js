import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default props => {
    return (
        <Nav>
            <Button variant="primary" size="sm" onClick={props.btnClick}>SignOut</Button>
        </Nav>
    )
}