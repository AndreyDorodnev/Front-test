import React, {useState,useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import AuthUserContext from '../session/context';
import {saveState} from '../../localStorage';

function Login(props) {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [authError,setAuthError] = useState(null);

    const [user,setUser] = useContext(AuthUserContext);

    const emailChange = (value) => {
        setEmail(value);
    }

    const passwordChange = (value) => {
        setPassword(value);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        signIn();
    }

    const signIn = async () => {
        try {
            const result = await axios.post('https://reqres.in/api/login',{email,password});
            saveState(result.data);
            setUser(result.data);
            props.history.push('/');
        } catch(error){
            setAuthError(error.response.data.error&&error.message);
        }
    }

    return (

        <Form onSubmit={formSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder="Enter email" value={email} onChange={e=>emailChange(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required placeholder="Password" value={password} onChange={e=>passwordChange(e.target.value)} />
            </Form.Group>
            {
                authError? 
                <Form.Group>
                    <Form.Text className="text-danger">
                    {authError}
                    </Form.Text>
                </Form.Group>
                :
                null
            }
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default withRouter(Login);