import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App'
import {  Provider} from 'react-redux';

import store from './configureStore';

ReactDOM.render(
  <Provider store={store} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

