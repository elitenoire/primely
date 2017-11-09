import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import LoginModal from '../containers/LoginModal'
import Root from '../dashboard/Root'
import { HOME_PATH, LOGIN_PATH, DASHBOARD_PATH } from './routes'
import { ACCESS_TOKEN } from '../constants'
import { auth } from '../utils'

const Router = (props) => {
    console.log('location in router ', props.location)
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
        console.log('location obj is ', props.location)
        let isAuth = auth.isUserAuthenticated(ACCESS_TOKEN)
        if (props.location.pathname === LOGIN_PATH) isAuth = !isAuth
        return (
        !isAuth ? (
            <Redirect to={{
                pathname: redirect,
                state: { from: props.location }
            }}/>
        ) :  Component.name === 'Home' ? (
                <Component {...props}>
                    <LoginModal location={props.location}/>
                </Component>
                )
            : (
                <LoginModal {...props}/>
                )
    )}}/>
    )


export default Router;