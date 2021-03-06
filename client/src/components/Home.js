import React from 'react';
import NavBar from '../components/NavBar'
import Landing from '../components/Landing'
import Features from './Features'
import { Container, Segment, Header, Icon, Divider } from 'semantic-ui-react'


const Home = ({ children }) => {
    return (
        <div>
            <Segment basic inverted color="brown" attached="top"
            textAlign="center"
            style={{ minHeight: '75vh', padding : '1em 0em', border : 'none' }}
            vertical
            >
                <div>
                    <NavBar />
                    <Landing />
                    {children}
                </div>
            </Segment>

            <Segment basic inverted color="yellow" attached
                textAlign="center" padded
                style={{ minHeight: '25vh', border : 'none' }}
            >
            <Header as="h2" color="red" >DASHBOARD FEATURES</Header>

            <Divider hidden section/>

            <Features />

            </Segment>

            <Segment basic inverted attached="bottom" style={{minHeight: '5vh'}}
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