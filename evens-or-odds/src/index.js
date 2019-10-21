import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import {Provider} from 'react-redux'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => console.log('Store State: ', store.getState()))


//to give the store to the App, we use provider
//still requires to connect to the Provider from App itself
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root'))


