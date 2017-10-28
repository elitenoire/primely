import 'semantic-ui-css/semantic.min.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createReduxSaga from 'redux-saga';
// import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory' // inferred from react-router-dom

import App from './components/App'
import reducers from './reducers';
import rootSaga from './sagas';
import { auth } from './utils'

import registerServiceWorker from './registerServiceWorker';


const initialStore = {
    auth : { isAuth : auth.isUserAuthenticated('accessToken') }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createHistory({ basename: process.env.PUBLIC_URL})
const reduxSaga = createReduxSaga();
const middlewares = [routerMiddleware(history) , reduxSaga]
const store = createStore(reducers, initialStore, composeEnhancers(applyMiddleware(...middlewares)))

reduxSaga.run(rootSaga)


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
