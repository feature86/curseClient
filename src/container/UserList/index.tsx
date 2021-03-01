import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar } from '../../components/Avatar';
import { User } from '../../types'

export const timeout = (m: number) => new Promise((r) => setTimeout(r, m));


const UserList: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
   

    const dispatch = useDispatch();
    
    useEffect(() => {
        async function ef() {
            setLoading(true);
            //TODO: Remove TestData"
           const users = [{
               name: 'user1',
               image: 'user1',
               userHash: '7b6405c4-7477-11eb-9439-0242ac130002'
           }, {
               name: 'user2',
               image: 'user2',
               userHash: '86e133d6-7477-11eb-9439-0242ac130002',
           }]
           setUsers(users);
           await timeout(5000);
           setLoading(false);
        } 
        ef();
        
    },[]);
    
    if (loading) {
        return (<React.Fragment>
            <div> Loading</div>
        </React.Fragment>)
    }

    return (
        <React.Fragment>
            <div>Benutzer auswählen</div>
            {users.map((u) => <Avatar name={u.name} image={ u.image} /> )}
        </React.Fragment>
    )
}

export default UserList;