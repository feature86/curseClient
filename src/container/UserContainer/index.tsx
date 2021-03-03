import React, { useEffect, useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeSelectApp } from '../../selector';
import { Curse, User } from '../../types';
import axios, { CancelTokenSource } from 'axios';
import { addCurse, fetchUserCurses } from '../../api';
import styled from 'styled-components';
import { CurseCounter, CurseCounterType } from '../../components/CurseCounter';
import { redirect } from '../../actions';

const appSelector = makeSelectApp();


const CurseBumper = styled.div`

width: 200px;
height: 200px;
cursor: pointer;
border: 1px solid blue;
transition: all 300ms linear;
box-sizing: border-box;
:hover {
    border: 2px solid blue;
}
`;

interface CurseListItem  {
  user: User;
  curseList: Curse[];
}


export const UserContainer: React.FC = () => {
    const { user, users } = useSelector(appSelector);
    const [currentCurseList, setCurrentCurseList ] = useState<Curse[]>([]);
    const [curseList, setCurseList] = useState<CurseListItem[]>([]);
    const [fetchList, setFetchList] = useState(true);
    const dispatch = useDispatch();
    
    useEffect(() => { 
        async function ef(source: CancelTokenSource) {
          const allCurseList: CurseListItem[] = [];
           for(let i=0; i< users.length; i++) {  
            try {
                const userCurseList = await fetchUserCurses(source, users[i].userHash);
                if (users[i].userHash === user?.userHash) {
                  setCurrentCurseList(userCurseList);
                } else {
                  allCurseList.push({user: users[i], curseList: userCurseList});
                  
                }
            } catch (err) {
                if (axios.isCancel(err)) {
                    //cancelled
                } else {
                    throw err;
                }
            }
          }
          setCurseList(allCurseList);
      };
        
        if (user) {
          const source = axios.CancelToken.source();
          ef(source);
          return () => {
              source.cancel();
          };
      
          
        }
    }, [user, users, fetchList]);


    if (!user) {
        dispatch(redirect('/'));
        return <div>You should not be here</div>
    }

    const incrementCurse = () => {
        console.log(`${user.name} cursed at ${new Date().toDateString()}`)
        const source = axios.CancelToken.source();
        addCurse(source, user.userHash).then((res) => {
            setFetchList(!fetchList);
        });
        

    }

    const goToUserSelection = () => {
      window.localStorage.removeItem('curseUser');
      dispatch(redirect('/'));
    }


    return (
        <div>
            <h1> {user.name}</h1>
            <CurseBumper onClick={ () => incrementCurse()} />
            <CurseCounter type={CurseCounterType.DAY} curseList={ currentCurseList}  />
            {curseList.map((cl,index) => {
              return <div key={`${index}`}>
                {cl.user.name}
                <CurseCounter  type={CurseCounterType.DAY} curseList={cl.curseList} />
              </div>
            })}
            <div onClick={() => goToUserSelection()}> Zurück </div>
        </div>
    )
}