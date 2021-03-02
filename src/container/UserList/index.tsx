import React, { useEffect, useState} from 'react';
import { Avatar } from '../../components/Avatar';
import { User } from '../../types'
import { fetchUser} from '../../api'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducer';
import { setUser } from '../../actions';

export const timeout = (m: number) => new Promise((r) => setTimeout(r, m));


const AvatarWrap = styled.div`
 cursor: pointer;
 transition: all 200ms linear;
 border: 2px solid transparent;
 &.selected {
     border: 2ps solid gray;
 }
 :hover {
    border: 2px solid red;
 }


`

const UserList: React.FC = () => {
    const dispatch = useDispatch();
    const selectedUser = useSelector<AppState, User | undefined>((state) => state.user);
    console.log(selectedUser);

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
 
    useEffect(() => {
        async function ef() {
            setLoading(true);
            setUsers(await fetchUser());
           setLoading(false);
        } 
        ef();
        
    },[]);
    
    useEffect(() => { 
        console.log('SelecteUser changed to', selectedUser);

    }, [selectedUser]); 

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
                const selected = selectedUser && selectedUser.userHash === u.userHash ? true : false;
                console.log(selected, u.name);
                return (
                    <AvatarWrap className={ selected ? 'selected' : ''} key={`${u.userHash}`} onClick={() => changeSelectedUser(u)}>
                        <Avatar name={u.name} image={u.image} />
                    </AvatarWrap>)
            })}

        </React.Fragment>
    )
}

export default UserList;