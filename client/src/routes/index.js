import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import LoginModal from '../containers/LoginModal'
import Root from '../dashboard/Root'
import { HOME_PATH, LOGIN_PATH, DASHBOARD_PATH } from './routes'
import { ACCESS_TOKEN } from '../constants'
import { auth } from '../utils'

const Router = (props) => {
    return (
        <Switch>
            <Route path={HOME_PATH} exact component={Home} />
            <AuthenticatedRoute path={LOGIN_PATH} redirect={DASHBOARD_PATH} component={Home} />
            <AuthenticatedRoute path={DASHBOARD_PATH} redirect={LOGIN_PATH} component={Root} />
            <Route render={() => null} />
        </Switch>
    )
}

const AuthenticatedRoute = ({ component: Component, redirect, ...rest }) => (
    <Route {...rest} render={ props => {
        let isAuth = auth.isUserAuthenticated(ACCESS_TOKEN)
        if (props.location.pathname === LOGIN_PATH) isAuth = !isAuth
        return (
        !isAuth ? (
            <Redirect to={{
                pathname: redirect,
                state: { from: props.location }
            }}/>
        ) :   props.location.pathname === LOGIN_PATH ? (
                <Component {...props}>
                    <LoginModal />
                </Component>
                )
            : (
                <Component {...props}/>
                )
    )}}/>
    )


export default Router;