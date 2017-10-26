import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import LoginModal from '../containers/LoginModal'
import { HOME_PATH, LOGIN_PATH, DASHBOARD_PATH } from './routes'

const Router = () => {
    return (
        <Switch>
            <Route path={HOME_PATH} exact component={Home} />
            <Route path={LOGIN_PATH} render={() => (
                <Home>
                    <LoginModal />
                </Home>
                ) } />
        </Switch>
    )
}
//<Route path={EDIT_SNAP_PATH + ':id'} render={props => <SnapsMaker {...props} mode="UPDATE" />} />
//<Route path={VIEW_SNAP_PATH + ':id'} component={SnapSingleView} />

export default Router;