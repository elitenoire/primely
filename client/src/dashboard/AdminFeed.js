import React from 'react';
import { Segment, Container, Header, Feed } from 'semantic-ui-react'
import { feedParser } from '../utils'

// Generate feeds only when students are available
const AdminFeed = ({loading, students}) => {
    return (
        <Container>
            <Segment basic loading={loading}>
            <Segment attached="top" color="orange" inverted tertiary>
                <Header>Recent Activity</Header>
            </Segment>
            <Segment attached>
                <Feed>
                    {loading && (<Feed.Event content={"Updating feeds..."} />)}
                    {!loading && generateFeeds(feedParser(students))}
                </Feed>
            </Segment>
            </Segment>
        </Container>
    )
}

const generateFeeds = (feeds) => {
    if(feeds.length === 0){
        return (<Feed.Event content={"No activity found"} />)
    }
    return feeds.map((feed, index) => {
        return (
            <Feed.Event key={`feed-${index}`}
                icon='configure'
                date='3 mins ago'
                summary={feed}
            />
        )
    })
}

export default AdminFeed