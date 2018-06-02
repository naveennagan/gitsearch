import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk'

import rootReducer from './reducers';
import Main from './components/Main.jsx';

//for debugging in front end 
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider >
  , document.getElementById('root'));