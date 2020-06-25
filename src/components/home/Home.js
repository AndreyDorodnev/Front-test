import React, {useState,useEffect,useContext} from 'react';
import AuthUserContext from '../session/context';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { debounce } from "lodash";
import UserList from './UserList';
import Button from 'react-bootstrap/Button';
import UserEdit from './UserEdit';

function Home(props) {

    const [pageNum,setPageNum] = useState(1);
    const [maxPages,setMaxPages] = useState(1);
    const [userData,setUserData] = useState([]);
    const [user] = useContext(AuthUserContext);
    const [selectedUser,setSelectedUser] = useState(null);

    useEffect(()=>{
        if(!user){
            props.history.push('/login');
        }
    },[user]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await axios.get(`https://reqres.in/api/users?page=${pageNum}`);
                console.log(result);
                setUserData(prev => prev.concat(result.data.data));
                setMaxPages(result.data.total_pages);
            } catch(error){
                console.log(error);
            }
        };
        fetchData();
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
        }
    }
    
    const selectUser = (id) => {
        setSelectedUser(userData.find(el=>el.id === id));
    }

    const createUser = async (user) => {
        const {email,first_name,last_name,password} = user;
        user.id = userData[userData.length-1].id + 1;
        debugger;
        try{
            const result = await axios.post('https://reqres.in/api/users',{email,first_name,last_name,password});
            setUserData(prevData => prevData.concat([user]));
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="home">
            <UserList data={userData} onBottomScroll={debouncedScroll} onItemDelete={deleteUser} onEditClick={selectUser}/>
            <UserEdit user={selectedUser} createUser={createUser}/>
        </div>
    )
}

export default withRouter(Home);