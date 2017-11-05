import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react'

const Landing = () => {
    return (
        <Segment basic textAlign="center" padded="very">
            <Container>
                <Header color="yellow" as="h1">
                    PRIMELY
                </Header>
                <Header as="h2">
                    A Modern Dashboard to manage your student's information
                </Header>
            </Container>
        </Segment>
    )
}

export default Landing