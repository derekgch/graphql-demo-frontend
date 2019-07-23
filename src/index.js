import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group("SPECIAL")
    console.log('%c before', 'color: blue', store.getState());
    const returnValue = rawDispatch(action);
    console.log('%c after', 'color: red', store.getState());
    console.groupEnd()
    return returnValue;
  }
}

store.dispatch = addLoggingToDispatch(store);

// console.log(store);
// console.log('after createStore', store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
