import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeSelectApp } from '../../selector';
import { Curse } from '../../types';
import axios, { CancelTokenSource } from 'axios';
import { addCurse, fetchUserCurses } from '../../api';
import styled from 'styled-components';
import { CurseCounter, CurseCounterType } from '../../components/CurseCounter';

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




export const UserContainer: React.FC = () => {
    const { user } = useSelector(appSelector);
    const [curseList, setCurseList] = useState<Curse[]>([]);
    const [fetchList, setFetchList] = useState(true);
    
    
    useEffect(() => { 
        console.log('fetch curseList');
        async function ef(source: CancelTokenSource) {
            try {
                const curseList = await fetchUserCurses(source, user!.userHash);
                setCurseList(curseList);
            } catch (err) {
                if (axios.isCancel(err)) {
                    //cancelled
                } else {
                    throw err;
                }
            }
        }

        if (user) {
            const source = axios.CancelToken.source();
            ef(source);
            return () => {
                source.cancel();
            };
        }
    }, [user,fetchList]);


    if (!user) {
        return <div>You should not be here</div>
    }

    const incrementCurse = () => {
        console.log(`${user.name} cursed at ${new Date().toDateString()}`)
        const source = axios.CancelToken.source();
        addCurse(source, user.userHash).then((res) => {
            console.log(res);
        });
        setFetchList(!fetchList);

    }


    console.log(curseList);

    return (
        <div>
            <h1> {user.name}</h1>
            <CurseBumper onClick={ () => incrementCurse()} />
            <CurseCounter type={CurseCounterType.TOTAL} curseList={ curseList}  />
        </div>
    )
}