import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setUser } from '../../actions';
import { Avatar} from '../../components/Avatar';


const AppContainer = styled.div`
 width: 100vw;
 height: 100vh;
 background-color: burlywood;
 display: flex;
 flex: 0 0 auto;
 flex-direction: column; 
 justify-content: center;
 align-items: center;
`;

const ContainerWrap = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex: 0 0 auto; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Heading = styled.div`
    font-size: 22px;
    color: lightgoldenrodyellow;
    
`;

const App: React.FC = () => {

    //TODO: Remove TestData"
    const users = [{
        name: 'user1',
        url: 'asd',
        userHash: '7b6405c4-7477-11eb-9439-0242ac130002'
    }, {
        name: 'user2',
        url: 'asd',
        userHash: '86e133d6-7477-11eb-9439-0242ac130002',
    }]

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(setUser('User1'));
    }, []);
    
    

    return (
        <AppContainer>
            <Heading>
                Fluch-Counter
        </Heading>
        <ContainerWrap>
                {
                    users.map((u) => {
                        return <Avatar name={u.name} url={u.url} />
                    })
                }
        </ContainerWrap>
    </AppContainer>
    )
}

export default App;