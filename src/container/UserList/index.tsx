import React, { useEffect, useState} from 'react';
import { Avatar } from '../../components/Avatar';
import { User } from '../../types'
import { fetchUser} from '../../api'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions';
import { makeSelectApp } from '../../selector';
import axios from 'axios';


const AvatarWrap = styled.div`
 cursor: pointer;
 transition: all 200ms linear;
 border: 2px solid transparent;
 margin: 0 2px;
 &.selected {
     border: 2px solid gray;
 }
 :hover {
    border: 2px solid red;
 }


`
const appSelector = makeSelectApp();


const UserList: React.FC = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(appSelector);

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
 
    useEffect(() => {
        const source = axios.CancelToken.source();
        async function ef() {
            setLoading(true);
            try {
                const users = await fetchUser(source);
                setUsers(users);
            } catch (err) {
                if (axios.isCancel(err)) {
                //cancelled
                } else {
                 throw err;
                }
             }
            setLoading(false);
        } 
        ef();
        return () => {
            source.cancel();
        };
    },[]);
    
    
    const changeSelectedUser = (user: User) => {
        dispatch(setUser(user));
    }

    if (loading) {
        return (<React.Fragment>
            <div> Loading</div>
        </React.Fragment>)
    }

    return (
        <React.Fragment>
            {users.map((u) => {
                const selected = user && user.userHash === u.userHash ? true : false;
                return (
                    <AvatarWrap className={ selected ? 'selected' : ''} key={`${u.userHash}`} onClick={() => changeSelectedUser(u)}>
                        <Avatar name={u.name} image={u.image} />
                    </AvatarWrap>)
            })}

        </React.Fragment>
    )
}

export default UserList;