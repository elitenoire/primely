import { LOGIN_ADMIN_FAIL, LOGIN_ADMIN_PASS, LOGOUT_ADMIN_PASS } from '../constants'

const INITIAL_STATE = { isAuth : false ,  currentAdmin : {}}

export default (state = INITIAL_STATE, action) => {
    const { type, admin } = action
    switch(type){
        case LOGIN_ADMIN_PASS :
            return { ...state, isAuth : true, currentAdmin : {...state.currentAdmin, ...admin} }
        case LOGIN_ADMIN_FAIL :
            return { ...state, isAuth : false, currentAdmin : {}}
        case LOGOUT_ADMIN_PASS :
            return { ...state, isAuth : false,  currentAdmin : {}}
        default :
            return state
    }
}