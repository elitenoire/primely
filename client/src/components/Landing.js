import React from 'react';
import { Segment, Header, Container, Image } from 'semantic-ui-react'
import Logo from '../assets/logo.svg'

const Landing = () => {
    return (
        <Segment basic textAlign="center" padded="very">
            <Container>
                <Image centered inline size="small" src={Logo} />
                <Image centered inline size="medium" src={Logo} />
                <Image centered inline size="small" src={Logo} />

                <Header color="yellow" as="h1"
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
                >
                PRIMELY
                </Header>
                <Header as="h2"
                style={{ fontSize: '1.8em', fontWeight: 'normal' }}
                >
                    A Modern Dashboard to manage your student's information
                </Header>
            </Container>
        </Segment>
    )
}

export default Landing