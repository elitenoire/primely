import { LOGIN_ADMIN_FAIL, LOGIN_ADMIN_PASS, LOGOUT_ADMIN_PASS } from '../constants'

const INITIAL_STATE = { isAuth : false , loginErrMsg : '', admin : {}}

export default (state = INITIAL_STATE, action) => {
    const { type, admin, logInError } = action
    switch(type){
        case LOGIN_ADMIN_PASS :
            return { ...state, isAuth : true, loginErrMsg : '' , admin }
        case LOGIN_ADMIN_FAIL :
            return { ...state, loginErrMsg : logInError.success}
        case LOGOUT_ADMIN_PASS :
            return { ...state, isAuth : false, loginErrMsg : '', admin : {}}
        default :
            return state
    }
}