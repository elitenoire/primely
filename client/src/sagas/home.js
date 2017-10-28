import { takeEvery, take, put, race, call, select} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { SELECT_LOGOUT, GOTO_ADMIN_DASHBOARD, SELECT_DASHBOARD,
        LOGOUT_ADMIN_PASS } from '../constants'
import { toggleModal } from '../actions'
import { HOME_PATH } from '../routes/routes'
import { auth } from '../utils'


export default function* manageHomeMenu(){
    //if(pathName === HOME_PATH){
        const isAuth = yield select(({ auth }) => auth.isAuth )
        console.log('authenicated ', isAuth)
        if(isAuth){
            const { dashboard, logout } = yield race({
                dashboard : take(SELECT_DASHBOARD),
                logout : take(SELECT_LOGOUT)
            })
            if(dashboard){
                yield put({type : GOTO_ADMIN_DASHBOARD})
            }
            if(logout){
                yield call(auth.deauthenticateUser, logout.key)
                yield put({type : LOGOUT_ADMIN_PASS, method : 'replace'})
            }
        }
    //}
}

//WATCHER SAGA - listen for dispatched action, call worker to handle action
// export default function* watchHomePage(){
//     yield takeEvery(LOCATION_CHANGE, manageHomeMenu)
// }
