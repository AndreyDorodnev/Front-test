import React from 'react';
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