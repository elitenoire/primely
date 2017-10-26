import React from 'react';

import NavBar from '../components/NavBar'
import Landing from '../components/Landing'
import { Container, Segment, Header, Icon, Statistic } from 'semantic-ui-react'


const Home = ({ children }) => {
    return (
        <div>
            <Segment basic inverted color="brown" attached="top"
            textAlign="center"
            style={{ minHeight: 600, border : 'none' }}
            vertical
            >
                <Container>
                    <NavBar />
                    <Landing />
                    {children}
                </Container>
            </Segment>

            <Segment basic inverted color="yellow" attached
                textAlign="center" padding
                style={{ minHeight: 200, border : 'none' }}
            >
            <Header as="h2" color="red" >DASHBOARD FEATURES</Header>

            <Statistic.Group widths={4}>
                <Statistic label='Create' value='22' />
                <Statistic label='View' value='Three' text />
                <Statistic label='Change' value='5' />
                <Statistic label='Delete' value='5' />
            </Statistic.Group>

            </Segment>

            <Segment basic inverted attached="bottom"
                textAlign="center"
            >
                <Container text>
                    <p>Made with <Icon color="red" name="heart" /> and React by @elitenoire</p>
                </Container>
            </Segment>
        </div>
    )
}

export default Home