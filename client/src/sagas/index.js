import { fork , all, spawn} from 'redux-saga/effects'
import routerSaga from './router'
import watchLoginModal from './login'

export default function* rootSaga(){
    //yield an array of iterator objects
    yield spawn(routerSaga)

    yield all([
        fork(watchLoginModal)
    ])
}