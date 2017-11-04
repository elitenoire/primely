import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './Dashboard'
import StudentList from './StudentList'
import StudentProfile from './StudentProfile'
import StudentSave from './StudentSave'

const Root = ({ match }) => {
    return (
        <Layout match={match}>
            <Switch>
                <Route exact path={match.path} component={Dashboard}  />
                <Route exact path={`${match.path}/students`} component={StudentList}  />
                <Route path={`${match.path}/students/new`} 
                    render={props => <StudentSave {...props} mode="CREATE"/>}  />
                <Route path={`${match.url}/students/edit/:id`}
                    render={props => <StudentSave {...props} mode="UPDATE" />}  />
                <Route path={`${match.url}/students/:id`} component={StudentProfile}  />
            </Switch>
        </Layout>
    )
}

export default Root