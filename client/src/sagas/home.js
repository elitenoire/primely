import { take, put, race, call, select} from 'redux-saga/effects'
import { SELECT_LOGOUT, GOTO_ADMIN_DASHBOARD, SELECT_DASHBOARD,
        LOGOUT_ADMIN_PASS } from '../constants'
import { auth } from '../utils'


export default function* manageHomeMenu(){
    const isAuth = yield select(({ auth }) => auth.isAuth )
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
}
