import React, {useState,useEffect,useContext} from 'react';
import AuthUserContext from '../session/context';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { debounce } from "lodash";
import UserList from './UserList';

function Home(props) {

    const [pageNum,setPageNum] = useState(1);
    const [maxPages,setMaxPages] = useState(1);
    const [userData,setUserData] = useState([]);
    const [user] = useContext(AuthUserContext);

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
                // setUserData([...result.data.data]);
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
    return (
        <div className="home">
            <UserList data={userData} onBottomScroll={debouncedScroll}/>
        </div>
    )
}

export default withRouter(Home);