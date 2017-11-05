import { /*fork , all,*/ spawn} from 'redux-saga/effects'
import routerSaga from './router'
import navigationSaga from './navigation'
import watchDashboard from './dashboard'


export default function* rootSaga(){
    //yield an array of iterator objects
    yield spawn(navigationSaga)
    yield spawn(routerSaga)
    yield spawn(watchDashboard)
    // yield all([
    //     fork(watchHomePage),
    //     fork(watchLoginModal)
    // ])
    // yield all([
    //     fork(routerSaga),
    //     fork(navigationSaga)
    // ])
}