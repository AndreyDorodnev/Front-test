import React, {useContext} from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import AuthUserContext from '../session/context';

export default props => {
    const [user] = useContext(AuthUserContext);
    return (
        <Nav>
            <h3>React test app</h3>
            {
                user?
                <Button variant="primary" size="sm" onClick={props.btnClick}>SignOut</Button>:
                null               
            }  
        </Nav>
    )
}