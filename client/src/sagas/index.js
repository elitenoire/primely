import { spawn} from 'redux-saga/effects'
import routerSaga from './router'
import navigationSaga from './navigation'
import watchDashboard from './dashboard'


export default function* rootSaga(){
    yield spawn(navigationSaga)
    yield spawn(routerSaga)
    yield spawn(watchDashboard)
}