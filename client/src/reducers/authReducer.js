import { LOGIN_ADMIN_FAIL, LOGIN_ADMIN_PASS, LOGOUT_ADMIN_PASS } from '../constants'

const INITIAL_STATE = { isAuth : false , loginErrMsg : '', currentAdmin : {}}

export default (state = INITIAL_STATE, action) => {
    const { type, admin, logInError } = action
    switch(type){
        case LOGIN_ADMIN_PASS :
            return { ...state, isAuth : true, loginErrMsg : '' , currentAdmin : {...state.currentAdmin, ...admin} }
        case LOGIN_ADMIN_FAIL :
            return { ...state, loginErrMsg : logInError.success}
        case LOGOUT_ADMIN_PASS :
            return { ...state, isAuth : false, loginErrMsg : '', currentAdmin : {}}
        default :
            return state
    }
}