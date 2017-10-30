import React, { Component } from 'react';
import { Segment, Grid, Container, Header, Message,
        Button, Feed, Icon, Label, Statistic } from 'semantic-ui-react'

class Dashboard extends Component {
    render(){
        return (
            <Segment basic padded secondary textAlign="center">
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
                        <Button fluid color="olive" tertiary>
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
                        <Button fluid color="teal" tertiary>
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
                    <Container>
                    <Segment clearing attached="top" color="orange" tertiary inverted style={{ border: 'none' }}>
                        <Label color="red" ribbon icon="pin">Overview</Label>
                        <span style={{ color: '#000', fontWeight: 'bold' }}>Enrolled Students</span>
                    </Segment>
                    <Segment clearing attached color="yellow" tertiary inverted style={{ border: 'none' }}>
                        <Statistic color="red" floated="right" label="Students" value="5" />
                        <Label color="violet" size="large" horizontal>A-Levels</Label>
                        <Header as="h5" disabled><Icon color='violet' name="info" circular /></Header>             
                    </Segment>
                    <Segment clearing attached color="yellow" tertiary inverted style={{ border: 'none' }}>
                        <Statistic color="red" floated="right" label="Students" value="5" />
                        <Label color='green' size="large" horizontal>GCSE</Label>
                        <Header as="h5" disabled><Icon color='green' name="info" circular /></Header>
                    </Segment>
                    <Segment clearing attached color="yellow" tertiary inverted style={{ border: 'none' }}>
                        <Statistic color="red" floated="right" label="Students" value="5" />
                        <Label color='blue' size="large" horizontal>UFP</Label>
                        <Header as="h5" disabled ><Icon color='blue' name="info" circular /></Header>
                    </Segment>
                    <Segment attached="bottom" color="brown" tertiary inverted style={{ border: 'none' }}></Segment>
                    </Container>
                </Grid.Column>

                <Grid.Row divided textAlign="left" centered={false}>
                <Grid.Column >
                    <Segment attached="top" color="orange" inverted tertiary>
                        <Header>Recent Activity</Header>
                    </Segment>
                    <Segment attached>
                        <Feed>
                        <Feed.Event
                            icon='pencil'
                            date='3 mins ago'
                            summary="You added new student Fenti Abra."
                        />

                        <Feed.Event
                            icon='pencil'
                            date='Yesterday'
                            summary="You edited Joe Raika's student info."
                        />
                        </Feed>
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
        )
    }
}

export default Dashboard