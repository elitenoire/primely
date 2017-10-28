import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'

class Dashboard extends Component {
    render(){
        return (
            <Container textAlign="center" text>
                <Header as="h1" >Admin Dashboard</Header>
            </Container>
        )
    }
}

export default Dashboard