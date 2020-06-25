import React, {useState,useEffect,useContext} from 'react';
import AuthUserContext from '../session/context';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { debounce } from "lodash";
import UserList from './UserList';
import UserEdit from './UserEdit';

function Home(props) {

    const [pageNum,setPageNum] = useState(1);
    const [maxPages,setMaxPages] = useState(1);
    const [userData,setUserData] = useState([]);
    const [user] = useContext(AuthUserContext);
    const [selectedUser,setSelectedUser] = useState(null);
    const [dataError,setDataError] = useState(null);

    useEffect(()=>{
        if(!user){
            props.history.push('/login');
        }
    },[user,props.history]);

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            try{
                const result = await axios.get(`https://reqres.in/api/users?page=${pageNum}`);
                if (!didCancel) {
                    setUserData(prev => prev.concat(result.data.data));
                    setMaxPages(result.data.total_pages);
                }
            } catch(error){
                console.log(error);
                setDataError(error.message);
            }
        };
        fetchData();
        return () => {
            didCancel = true;
        };
      }, [pageNum]);



    const onBottomScroll = () => {
        if(pageNum<maxPages){
            setPageNum(prevNum => prevNum + 1);
        }
      }
    const debouncedScroll = debounce(onBottomScroll,300);

    const deleteUser = async (id) => {
        try{
            await axios.delete(`https://reqres.in/api/users/${id}`);
            setUserData(prevData => prevData.filter(el => el.id !== id));
        } catch(error) {
            console.log(error);
            setDataError(error.message);
        }
    }
    
    const selectUser = (id) => {
        setSelectedUser(userData.find(el=>el.id === id));
    }

    const createUser = async (user) => {
        const {email,first_name,last_name,password} = user;
        try{
            const result = await axios.post('https://reqres.in/api/users',{email,first_name,last_name,password});
            console.log(result);
            setUserData(prevData => prevData.concat([result.data]));
        } catch(error) {
            console.log(error);
            setDataError(error.message);
        }
    }
    const editUser = async (user) => {
        const {id,email,first_name,last_name} = user;
        try{
            await axios.put(`https://reqres.in/api/users/${id}`,{email,first_name,last_name});
            setSelectedUser(null);
            setUserData(prevData => prevData.map(element=>{
                if(element.id === id){
                    element.email = email;
                    element.first_name = first_name;
                    element.last_name = last_name;
                }
                return element;
            }));
        } catch(error) {
            console.log(error);
            setDataError(error.message);
        }
    }

    const cancelEdit = () => {
        setSelectedUser(null);
    }

    return (
        <div className="home">
            {
                dataError?
                <p className="data-error">{dataError}</p> :
                null
            }
            <UserList data={userData} onBottomScroll={debouncedScroll} onItemDelete={deleteUser} onEditClick={selectUser}/>
            <UserEdit user={selectedUser} createUser={createUser} editUser={editUser} cancelEdit={cancelEdit}/>
        </div>
    )
}

export default withRouter(Home);