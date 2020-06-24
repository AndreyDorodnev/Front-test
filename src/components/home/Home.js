import React, {useState,useEffect,useContext} from 'react';
import AuthUserContext from '../session/context';
import {withRouter} from 'react-router-dom';

function Home(props) {

    const [user] = useContext(AuthUserContext);

    useEffect(()=>{
        if(!user){
            props.history.push('/login');
        }
    },[user]);

 return (
    <div>
        HOME
    </div>
 )
}

export default withRouter(Home);