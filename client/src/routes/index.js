import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import LoginModal from '../containers/LoginModal'
import Dashboard from '../dashboard/Layout'
import { HOME_PATH, LOGIN_PATH, DASHBOARD_PATH } from './routes'
import { ACCESS_TOKEN } from '../constants'
import { auth } from '../utils'

const Router = (props) => {
    console.log('props in Router ', props)
    return (
        <Switch>
            <Route path={HOME_PATH} exact component={Home} />
            <AuthenticatedRoute path={LOGIN_PATH} redirect={DASHBOARD_PATH} component={Home} />
            <AuthenticatedRoute path={DASHBOARD_PATH} redirect={LOGIN_PATH} component={Dashboard} />
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
        ) :  Component.name === 'Home' ? (
                <Component {...props}>
                    <LoginModal/>
                </Component>
                )
            : (
                <Component {...props}/>
                )
    )}}/>
    )

//<Route path={EDIT_SNAP_PATH + ':id'} render={props => <SnapsMaker {...props} mode="UPDATE" />} />
//<Route path={VIEW_SNAP_PATH + ':id'} component={SnapSingleView} />

export default Router;