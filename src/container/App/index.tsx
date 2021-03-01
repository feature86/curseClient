import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../global-styles';
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import PageNotFound from '../NotFoundPage';
import UserList from '../UserList';

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

    return (
        <React.Fragment>
         <BrowserRouter>
                <AppContainer>
                    <Heading>
                        Fluch Counter
                    </Heading>
                <ContainerWrap>
                    <Switch>
                        <Route
                                exact
                                path="/"
                                component = {UserList}
                        />
                        <Route component={PageNotFound} />
                    </Switch>
                </ContainerWrap>
            </AppContainer>
        </BrowserRouter>
       <GlobalStyle />
    </React.Fragment>
    )
}

export default App;