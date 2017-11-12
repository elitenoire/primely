import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Segment, Grid, Container, Header, Message,
        Button, Icon } from 'semantic-ui-react'
import AdminFeed from './AdminFeed'
import AdminStats from './AdminStats'
import { getStudents } from '../actions'


class Dashboard extends Component {
    componentDidMount(){
        this.props.getStudents()
    }

    render(){
        const { match, students, isFetching } = this.props
        return (
            <Grid doubling stackable container columns={3} centered verticalAlign="middle">
                <Grid.Row>
                    <Message
                        icon='inbox'
                        header= {(
                        <Header color="orange">
                            Welcome to Primely SIS dashboard
                        </Header>
                        )}
                        content="You can create, view and manage students' record at a glance."
                        floating
                        compact
                    />
                </Grid.Row>
                <Grid.Column stretched>
                    <Container>
                        <Segment basic secondary>
                            <Button fluid color="olive" as={Link} to={`${match.path}/students/new`}>
                                <Header as='h2' icon>
                                    <Icon name='user plus' circular/>
                                    Add
                                    <Header.Subheader>
                                    Add new student to the list
                                    </Header.Subheader>
                                </Header>
                            </Button>
                        </Segment>
                    </Container>
                </Grid.Column>
                <Grid.Column stretched>
                    <Container>
                        <Segment basic secondary>
                            <Button fluid color="teal" as={Link} to={`${match.path}/students`}>
                                <Header as='h2' icon>
                                    <Icon name='users' circular />
                                    View
                                    <Header.Subheader>
                                    View list of enrolled students
                                    </Header.Subheader>
                                </Header>
                            </Button>
                        </Segment>
                    </Container>
                </Grid.Column>
                <Grid.Column stretched>
                    <AdminStats students={students} loading={isFetching}/>
                </Grid.Column>

                <Grid.Row divided textAlign="left">
                    <Grid.Column >
                        <AdminFeed students={students} loading={isFetching}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default connect(
    ({students : { students, isFetching}}) => ({ students, isFetching}),
    { getStudents }
)(
    Dashboard
)