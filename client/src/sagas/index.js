import { fork , all, spawn} from 'redux-saga/effects'
import routerSaga from './router'
import navigationSaga from './navigation'


export default function* rootSaga(){
    //yield an array of iterator objects
    //yield spawn(navigationSaga)
    //yield spawn(routerSaga)
    // yield all([
    //     fork(watchHomePage),
    //     fork(watchLoginModal)
    // ])
    yield all([
        fork(routerSaga),
        fork(navigationSaga)
    ])
}