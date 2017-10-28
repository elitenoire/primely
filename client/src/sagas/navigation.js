import { takeEvery, fork, call} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { HOME_PATH, LOGIN_PATH, DASHBOARD_PATH } from '../routes/routes'
import homeSaga from './home'
import loginSaga from './login'
import dashboardSaga from './dashboard'
import invalidRouteSaga from './invalid404'

//import invalidRouteSaga from './RouteSagas/InvalidRouteSaga'

function* manageNavigation({ payload : { pathname }}){
    // yield all(Object.keys(routeToSagaMap).map( route => {
    //     return takeEvery(pattern, changeRoute, actionRouteMap[pattern])
    // }))
    console.log(pathname)
    console.log(Object.keys(routeToSagaMap))
    console.log(routeToSagaMap[pathname])
    yield fork(routeToSagaMap[pathname] || invalidRouteSaga) // undefined || invalidRouteSaga
}


const routeToSagaMap = {
    [HOME_PATH] : homeSaga,
    [LOGIN_PATH] : loginSaga,
    [DASHBOARD_PATH] : dashboardSaga
}

// TODO : navigating to invalid route error handling/prevention
// Location/path not in Map causes yield fork to be undefined and subsequent error
// cuz on routing, if pathname changes to an undefined path in map, fork fn becomes undefined



//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchNavigation(){
    yield takeEvery(LOCATION_CHANGE, manageNavigation)
}
