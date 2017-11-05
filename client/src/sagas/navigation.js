import { takeEvery, fork , take, call, put, cancel} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { HOME_PATH, LOGIN_PATH, DASHBOARD_PATH } from '../routes/routes'
import { LOGOUT_ADMIN_PASS, SELECT_LOGOUT } from '../constants'
import { auth } from '../utils'
import homeSaga from './home'
import loginSaga from './login'

import invalidRouteSaga from './invalid404'


function* manageNavigation({ payload : { pathname }}){

    console.log('Location changed to ')
    console.log(pathname)
    //console.log(Object.keys(routeToSagaMap))

    if(pathname.startsWith(DASHBOARD_PATH)){
        console.log('Watching dashboard')
        const task = yield fork(manageLogout)
        //yield take(LOCATION_CHANGE)
        //yield cancel(dashboard) // undefined || invalidRouteSaga
    }
    else yield fork(routeToSagaMap[pathname] || invalidRouteSaga)
    return
}

function* manageLogout(){
    const logout = yield take(SELECT_LOGOUT)
    yield call(auth.deauthenticateUser, logout.key)
    yield put({type : LOGOUT_ADMIN_PASS, method : 'replace'})
}


const routeToSagaMap = {
    [HOME_PATH] : homeSaga,
    [LOGIN_PATH] : loginSaga
}

// TODO : navigating to invalid route error handling/prevention
// Location/path not in Map causes yield fork to be undefined and subsequent error
// cuz on routing, if pathname changes to an undefined path in map, fork fn becomes undefined



//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchNavigation(){
    yield takeEvery(LOCATION_CHANGE, manageNavigation)
    console.log('watcher detected location change')
}
